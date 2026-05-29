#!/usr/bin/env python3
"""Extract structured product brochure content from PDFs (text, bullets, spec tables)."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / ".pdf-tools"))

import fitz  # noqa: E402

DOWNLOADS = ROOT / "public-media" / "downloads"
OUT_DIR = ROOT / "src" / "data" / "productContent"

CATALOG = [
    ("allseis-1c", "ALLSEIS-1C_CN.pdf", "ALLSEIS-1C_EN_20250617.pdf"),
    ("allseis-1chr", "ALLSEIS-1CHR_CN-20250529.pdf", "ALLSEIS-1CHR_EN_20250617.pdf"),
    ("allseis-1c-neo", "ALLSEIS-1CNeo_CN-20250520.pdf", "ALLSEIS-1CNeo_EN_20250519.pdf"),
    ("allseis-1c-neo-hr", "ALLSEIS-1CNeoHR-20260408.pdf", "ALLSEIS-1CNeoHR_EN_20260408.pdf"),
    ("allseis-1clf", "ALLSEIS-1CLF_CN-20260427.pdf", None),
    ("allseis-3c", "ALLSEIS-3C_CN.pdf", "ALLSEIS-3C_EN_20250617.pdf"),
    ("allseis-3clf", "ALLSEIS-3CLF_CN-20251109.pdf", None),
    ("allseis-4clf", "ALLSEIS-4CLF_CN.pdf", "ALLSEIS-4CLF_EN_20250617.pdf"),
    ("allseis-ob2c", None, "ALLSEIS-OB2C_EN_20260110.pdf"),
    ("allseis-ob4clf", "ALLSEIS-OB4CLF_CN-20240425-20240820.pdf", "ALLSEIS-OB4C_EN_202601.pdf"),
    ("i-nodal", "I-nodal-2_CN-20240401_20240425.pdf", "I-Nodal-2_EN_20240529.pdf"),
    ("1hz-land-geophone", "1Hz陆地宽频检波器-202511220.pdf", None),
    ("2hz-broadband-geophone", "2Hz宽频检波器_CN-20240401_20240425-20240522_20240820.pdf", "2Hz宽频检波器_EN_20250617.pdf"),
]

SECTION_HEADINGS = {
    "Product Highlights",
    "General Features",
    "Acquisition Specifications",
    "High Sensitivity Geophone",
    "Stackable Charging Unit",
    "Stackable Data Download Unit",
    "Specifications",
    "Product Features",
    "Performance Specifications",
    "产品特点",
    "产品优势",
    "功能概述",
    "采集指标",
    "性能指标",
    "技术指标",
    "5Hz高灵敏度检波器（SM5）",
    "10Hz高灵敏度检波器（SM24HS）",
    "堆叠式充电单元（1U）",
    "堆叠式数据下载单元（1U）",
    "5Hz高灵敏度检波器幅度与相位响应曲线",
    "管脚定义",
    "Pin Definition",
}

ACQUISITION_MARKERS = (
    "ADC Resolution",
    "ADC Resolotion",
    "ADC分辨率",
    "Sample Interval",
    "采样间隔",
    "Sampling Interval",
)

FOOTER_PATTERNS = (
    r"Built for High Resolution",
    r"geodeepsensing\.com",
    r"service@geodeepsensing",
    r"Geophysical Deep Sensing",
    r"website[：:]",
    r"中科深源",
    r"GDST •",
    r"^\d{4}\s*年",
)

BULLET_START = re.compile(r"^[➢●\uF0B7\uF0D8Ø]\s*")


def is_footer(text: str) -> bool:
    for pattern in FOOTER_PATTERNS:
        if re.search(pattern, text, re.I | re.M):
            return True
    return False


def norm_space(text: str) -> str:
    return re.sub(r"\s+", " ", text.strip())


def is_section_heading(text: str) -> str | None:
    line = norm_space(text.split("\n")[0])
    if line in SECTION_HEADINGS:
        return line
    for heading in SECTION_HEADINGS:
        if heading in line and len(line) < 100:
            return line
    return None


def is_bullet(text: str) -> bool:
    return bool(BULLET_START.match(text.strip()))


def extract_bullet(text: str) -> str:
    return norm_space(BULLET_START.sub("", text))


def parse_spec_block(text: str) -> dict[str, str] | None:
    text = text.strip()
    if not text or is_bullet(text) or text.startswith("*") or text.startswith("＊"):
        return None
    if is_footer(text):
        return None
    lines = [line for line in text.split("\n") if line.strip()]
    if len(lines) < 2:
        return None
    label = norm_space(lines[0])
    if len(label) > 80:
        return None
    value = "\n".join(lines[1:]).strip()
    if not value:
        return None
    return {"label": label, "value": value}


def parse_label_only(text: str) -> str | None:
    text = text.strip()
    if not text or is_bullet(text) or is_footer(text):
        return None
    lines = [line for line in text.split("\n") if line.strip()]
    if len(lines) == 1 and len(lines[0]) < 60:
        return norm_space(lines[0])
    return None


def process_texts(texts: list[str], default_highlights_title: str) -> list[dict]:
    sections: list[dict] = []
    current: dict | None = None
    bullet_buf: list[str] = []
    pending_label: str | None = None

    def flush_bullets() -> None:
        nonlocal bullet_buf
        if bullet_buf and current and current["type"] == "highlights":
            current.setdefault("bullets", []).extend(bullet_buf)
        bullet_buf = []

    def flush_section() -> None:
        nonlocal current, pending_label
        flush_bullets()
        pending_label = None
        if not current:
            return
        if current["type"] == "highlights" and current.get("bullets"):
            sections.append(current)
        elif current["type"] == "specs" and current.get("rows"):
            sections.append(current)
        elif current["type"] == "notes" and current.get("items"):
            sections.append(current)
        current = None

    for text in texts:
        if is_footer(text):
            continue

        heading = is_section_heading(text)
        if heading:
            flush_section()
            if heading in ("Product Highlights", "产品特点", "产品优势"):
                current = {"type": "highlights", "title": heading, "bullets": []}
            elif text.strip().startswith("*") or text.strip().startswith("＊"):
                current = {"type": "notes", "title": "", "items": [norm_space(text)]}
            else:
                current = {"type": "specs", "title": heading, "rows": []}
            continue

        if is_bullet(text):
            pending_label = None
            if not current or current["type"] != "highlights":
                flush_section()
                current = {"type": "highlights", "title": default_highlights_title, "bullets": []}
            bullet_buf.append(extract_bullet(text))
            continue

        if bullet_buf:
            bullet_buf[-1] += " " + extract_bullet(text)
            continue

        if text.strip().startswith("*") or text.strip().startswith("＊"):
            flush_section()
            current = {"type": "notes", "title": "", "items": [norm_space(text)]}
            continue

        label_only = parse_label_only(text)
        if label_only:
            pending_label = label_only
            continue

        spec = parse_spec_block(text)
        if spec:
            flush_bullets()
            if pending_label:
                spec["label"] = f"{pending_label} {spec['label']}".strip()
                pending_label = None
            if not current or current["type"] != "specs":
                flush_section()
                current = {"type": "specs", "title": "", "rows": []}
            current["rows"].append(spec)
            continue

        if pending_label:
            flush_bullets()
            if not current or current["type"] != "specs":
                flush_section()
                current = {"type": "specs", "title": "", "rows": []}
            current["rows"].append({"label": pending_label, "value": norm_space(text)})
            pending_label = None

    flush_section()
    return sections


def column_split_x(blocks: list) -> int:
    """Return x threshold separating specs column from highlights column."""
    left_bullets = sum(
        1 for b in blocks if b[6] == 0 and b[0] < 250 and is_bullet(b[4].strip())
    )
    right_bullets = sum(
        1 for b in blocks if b[6] == 0 and b[0] >= 250 and is_bullet(b[4].strip())
    )
    return 200 if left_bullets > right_bullets else 300


def extract_page(page: fitz.Page, lang: str) -> list[dict]:
    blocks = page.get_text("blocks", sort=True)
    split_x = column_split_x(blocks)
    left: list[str] = []
    right: list[str] = []
    value_cont: list[str] = []

    for block in blocks:
        if block[6] != 0:
            continue
        text = block[4].strip()
        if not text or is_footer(text):
            continue
        x0 = block[0]
        if x0 >= 370:
            value_cont.append(text)
        elif x0 >= split_x:
            right.append(text)
        else:
            left.append(text)

    hl_title = "Product Highlights" if lang == "en" else "产品特点"
    sections: list[dict] = []
    sections.extend(process_texts(left, hl_title))
    sections.extend(process_texts(right, hl_title))

    for text in value_cont:
        value = norm_space(text.replace("\n", " "))
        if sections and sections[-1]["type"] == "specs" and sections[-1].get("rows"):
            row = sections[-1]["rows"][-1]
            row["value"] = f"{row['value']}\n{value}".strip()
        elif parse_spec_block(text):
            spec = parse_spec_block(text)
            if spec:
                sections.append({"type": "specs", "title": "", "rows": [spec]})

    return sections


def merge_sections(sections: list[dict]) -> list[dict]:
    merged: list[dict] = []
    for section in sections:
        if (
            section["type"] == "specs"
            and merged
            and merged[-1]["type"] == "specs"
            and not section.get("title")
        ):
            merged[-1]["rows"].extend(section["rows"])
        elif (
            section["type"] == "highlights"
            and merged
            and merged[-1]["type"] == "highlights"
        ):
            merged[-1]["bullets"].extend(section["bullets"])
        elif section["type"] == "notes" and merged and merged[-1]["type"] == "notes":
            merged[-1]["items"].extend(section["items"])
        else:
            merged.append(section)
    return merged


def split_acquisition_specs(sections: list[dict], lang: str) -> list[dict]:
    out: list[dict] = []
    for section in sections:
        if section["type"] != "specs" or section.get("title") or len(section.get("rows", [])) < 8:
            out.append(section)
            continue

        rows = section["rows"]
        split_at = None
        for idx, row in enumerate(rows):
            label = row["label"]
            if any(marker in label for marker in ACQUISITION_MARKERS):
                split_at = idx
                break
        if split_at is None or split_at == 0:
            out.append(section)
            continue

        general_title = "General Features" if lang == "en" else "功能概述"
        acq_title = "Acquisition Specifications" if lang == "en" else "采集指标"
        out.append({"type": "specs", "title": general_title, "rows": rows[:split_at]})
        out.append({"type": "specs", "title": acq_title, "rows": rows[split_at:]})
    return out


def reorder_sections(sections: list[dict]) -> list[dict]:
    highlights = [s for s in sections if s["type"] == "highlights"]
    specs = [s for s in sections if s["type"] == "specs"]
    notes = [s for s in sections if s["type"] == "notes"]
    ordered: list[dict] = []
    if highlights:
        combined = {
            "type": "highlights",
            "title": highlights[0].get("title", ""),
            "bullets": [],
        }
        for section in highlights:
            combined["bullets"].extend(section.get("bullets", []))
        ordered.append(combined)
    ordered.extend(specs)
    ordered.extend(notes)
    return ordered


def is_company_only_page(text: str) -> bool:
    if not text or len(text.strip()) < 20:
        return False
    markers = ("ADC", "采样", "Sample", "检波器", "geophone", "Specifications", "产品特点", "Highlights")
    hits = sum(1 for m in markers if m in text or m.lower() in text.lower())
    if hits >= 3 or len(text) > 1000:
        return False
    flat = text.replace("\n", " ")
    if "geodeepsensing.com" in flat.lower() and hits < 2:
        return True
    return False


def extract_pdf(pdf_path: Path, lang: str) -> list[dict]:
    doc = fitz.open(pdf_path)
    sections: list[dict] = []
    for page in doc:
        text = page.get_text()
        if is_company_only_page(text):
            continue
        sections.extend(extract_page(page, lang))
    doc.close()
    sections = merge_sections(sections)
    sections = split_acquisition_specs(sections, lang)
    return reorder_sections(sections)


def main() -> None:
    count = 0
    for slug, cn_file, en_file in CATALOG:
        for lang, filename in (("zh", cn_file), ("en", en_file)):
            if not filename:
                continue
            pdf_path = DOWNLOADS / filename
            if not pdf_path.exists():
                print(f"warn: missing {pdf_path.name}", file=sys.stderr)
                continue
            sections = extract_pdf(pdf_path, lang)
            if not sections:
                print(f"warn: no content for {slug}/{lang}", file=sys.stderr)
                continue
            out_path = OUT_DIR / slug / f"{lang}.json"
            out_path.parent.mkdir(parents=True, exist_ok=True)
            payload = {"pdf": filename, "sections": sections}
            out_path.write_text(
                json.dumps(payload, indent=2, ensure_ascii=False) + "\n",
                encoding="utf-8",
            )
            count += 1
            print(f"wrote {out_path.relative_to(ROOT)} ({len(sections)} sections)")

    print(f"done: {count} content files")


if __name__ == "__main__":
    main()
