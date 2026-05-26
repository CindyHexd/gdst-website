const FOOTER_PATTERN =
  /Built for High Resolution[\s\S]*|Sensitivity response @[\s\S]*?(?=\d{4}\s*年|$)/

const BULLET_PATTERN = /[➢Ø\uF0B7]/g

/** Remove repeated footer / chart captions from extracted PDF page text. */
export function stripPdfFooter(text: string): string {
  let out = text
  const footerStart = out.search(
    /\nBuilt for High Resolution|\n中科深源\s*\n\s*•|\nwebsite\s*[：:]/,
  )
  if (footerStart >= 0) {
    out = out.slice(0, footerStart)
  }
  out = out.replace(FOOTER_PATTERN, '')
  return out.trim()
}

/** Bullet lines exactly as in PDF (without the bullet glyph). */
export function extractPdfBullets(...pageTexts: string[]): string[] {
  const bullets: string[] = []
  const full = pageTexts.join('\n')
  const parts = full.split(/[➢Ø\uF0B7]/)
  for (let i = 1; i < parts.length; i++) {
    let chunk = parts[i]!
    const nextBullet = chunk.search(/\n\s*(?:产品|功能|采集|性能|管脚|Pin|Specifications|Product)/)
    if (nextBullet > 0) {
      chunk = chunk.slice(0, nextBullet)
    }
    const lines = chunk.split('\n').map((l) => l.trimEnd())
    const merged: string[] = []
    for (const line of lines) {
      const t = line.trim()
      if (!t) continue
      if (/^(产品特点|产品优势|功能概述|采集指标|性能指标|管脚定义|Product)/.test(t)) break
      if (merged.length && !/^[A-Z\d\*•]/.test(t) && !/^\d/.test(t)) {
        merged[merged.length - 1] += t
      } else {
        merged.push(t)
      }
    }
    const text = merged.join('').replace(/\s+/g, (m, off, s) => {
      const before = s.slice(Math.max(0, off - 1), off)
      const after = s.slice(off + m.length, off + m.length + 1)
      if (/[\u4e00-\u9fff]/.test(before) && /[\u4e00-\u9fff]/.test(after)) return ''
      return ' '
    })
    if (text) bullets.push(text)
  }
  return bullets
}

/** Remaining PDF body after bullets removed — shown verbatim. */
export function pdfBodyWithoutBullets(...pageTexts: string[]): string {
  let body = pageTexts.join('\n\n')
  body = body.replace(/[➢Ø\uF0B7][^\n]*(?:\n(?![➢Ø\uF0B7\n]*(?:产品|功能|采集|ADC|Built))[^\n]*)*/g, '')
  return stripPdfFooter(body).trim()
}

export function normalizePdfTitle(lines: string[]): string {
  const joined = lines
    .filter((l) => l.trim() && !BULLET_PATTERN.test(l))
    .join(' ')
    .replace(/ALLSEIS\s*-\s*/g, 'ALLSEIS-')
    .replace(/I\s*-\s*Nodal/gi, 'I-Nodal')
    .replace(/\s+/g, ' ')
    .trim()
  return joined
}
