import fs from 'node:fs'
import path from 'node:path'

export interface DownloadItem {
  id: string
  titleZh: string
  titleEn: string
  /** Product slug when this manual matches a site product page */
  slug?: string
  /** Filename on disk under public-media/downloads/ */
  cn?: string
  en?: string
  /** Suggested filename when user saves the CN PDF (defaults to `cn`) */
  downloadAsCn?: string
  /** Suggested filename when user saves the EN PDF (defaults to `en`) */
  downloadAsEn?: string
  /** Listed on /downloads/ only — not in product center or /products/ routes */
  downloadsOnly?: boolean
}

const DOWNLOADS_DIR = path.join(process.cwd(), 'public-media', 'downloads')

/** Every PDF in public-media/downloads/, grouped with CN/EN files where available. */
export const downloadsCatalog: DownloadItem[] = [
  {
    id: 'allseis-1c',
    slug: 'allseis-1c',
    titleZh: 'ALLSEIS-1C',
    titleEn: 'ALLSEIS-1C',
    cn: 'ALLSEIS-1C_CN.pdf',
    en: 'ALLSEIS-1C_EN_20250617.pdf',
    downloadAsCn: 'ALLSEIS-1C_CN.pdf',
    downloadAsEn: 'ALLSEIS-1C_EN.pdf',
  },
  {
    id: 'allseis-1chr',
    slug: 'allseis-1chr',
    titleZh: 'ALLSEIS-1C HR',
    titleEn: 'ALLSEIS-1C HR',
    cn: 'ALLSEIS-1CHR_CN-20250529.pdf',
    en: 'ALLSEIS-1CHR_EN_20250617.pdf',
    downloadAsCn: 'ALLSEIS-1C_HR_CN.pdf',
    downloadAsEn: 'ALLSEIS-1C_HR_EN.pdf',
  },
  {
    id: 'allseis-1c-and-1chr',
    titleZh: 'ALLSEIS-1C & ALLSEIS-1C HR 宣传册',
    titleEn: 'ALLSEIS-1C & ALLSEIS-1C HR brochure',
    cn: 'ALLSEIS-1C宣传_CN-20250411-21x28.5.pdf',
    en: 'ALLSEIS-1C宣传_EN Ver. 3.1 20250411 21x28.5.pdf',
    downloadAsCn: 'ALLSEIS-1C宣传_CN.pdf',
    downloadAsEn: 'ALLSEIS-1C宣传_EN.pdf',
    downloadsOnly: true,
  },
  {
    id: 'allseis-1c-neo',
    slug: 'allseis-1c-neo',
    titleZh: 'ALLSEIS-1C Neo',
    titleEn: 'ALLSEIS-1C Neo',
    cn: 'ALLSEIS-1CNeo_CN-20250520.pdf',
    en: 'ALLSEIS-1CNeo_EN_20250519.pdf',
    downloadAsCn: 'ALLSEIS-1C_Neo_CN.pdf',
    downloadAsEn: 'ALLSEIS-1C_Neo_EN.pdf',
  },
  {
    id: 'allseis-1c-neo-hr',
    slug: 'allseis-1c-neo-hr',
    titleZh: 'ALLSEIS-1C Neo HR',
    titleEn: 'ALLSEIS-1C Neo HR',
    cn: 'ALLSEIS-1CNeoHR-20260408.pdf',
    en: 'ALLSEIS-1CNeoHR_EN_20260408.pdf',
    downloadAsCn: 'ALLSEIS-1C_Neo_HR_CN.pdf',
    downloadAsEn: 'ALLSEIS-1C_Neo_HR_EN.pdf',
  },
  {
    id: 'allseis-1c-neo-and-neo-hr-brochure',
    titleZh: 'ALLSEIS-1C Neo & ALLSEIS-1C Neo HR 宣传册',
    titleEn: 'ALLSEIS-1C Neo & ALLSEIS-1C Neo HR Brochure',
    en: 'ALLSEIS-1CNeo宣传_EN Ver. 3.1 20250801 21x28.5.pdf',
    downloadAsEn: 'ALLSEIS-1CNeo宣传_EN.pdf',
    downloadsOnly: true,
  },
  {
    id: 'allseis-1clf',
    slug: 'allseis-1clf',
    titleZh: 'ALLSEIS-1C LF',
    titleEn: 'ALLSEIS-1C LF',
    cn: 'ALLSEIS-1CLF_CN-20260427.pdf',
  },
  {
    id: 'allseis-3c',
    slug: 'allseis-3c',
    titleZh: 'ALLSEIS-3C',
    titleEn: 'ALLSEIS-3C',
    cn: 'ALLSEIS-3C_CN.pdf',
    en: 'ALLSEIS-3C_EN_20250617.pdf',
  },
  {
    id: 'allseis-3clf',
    slug: 'allseis-3clf',
    titleZh: 'ALLSEIS-3C LF',
    titleEn: 'ALLSEIS-3C LF',
    cn: 'ALLSEIS-3CLF_CN-20251109.pdf',
  },
  {
    id: 'allseis-4clf',
    slug: 'allseis-4clf',
    titleZh: 'ALLSEIS-4C LF',
    titleEn: 'ALLSEIS-4C LF',
    cn: 'ALLSEIS-4CLF_CN.pdf',
    en: 'ALLSEIS-4CLF_EN_20250617.pdf',
  },
  {
    id: 'allseis-ob2c',
    slug: 'allseis-ob2c',
    titleZh: 'ALLSEIS-OB2C',
    titleEn: 'ALLSEIS-OB2C',
    en: 'ALLSEIS-OB2C_EN_20260110.pdf',
  },
  {
    id: 'allseis-ob4clf',
    slug: 'allseis-ob4clf',
    titleZh: 'ALLSEIS-OB4C LF',
    titleEn: 'ALLSEIS-OB4C LF',
    cn: 'ALLSEIS-OB4CLF_CN-20240425-20240820.pdf',
    en: 'ALLSEIS-OB4C_EN_202601.pdf',
    downloadAsCn: 'ALLSEIS-OB4C_LF_CN.pdf',
    downloadAsEn: 'ALLSEIS-OB4C_LF_EN.pdf',
  },
  {
    id: 'i-nodal-2',
    slug: 'i-nodal',
    titleZh: 'I-Nodal-2 节点式全内置地震采集系统',
    titleEn: 'I-Nodal Cableless Seismic Acquisition System',
    cn: 'I-nodal-2_CN-20240401_20240425.pdf',
    en: 'I-Nodal-2_EN_20240529.pdf',
  },
  {
    id: 'geophone-1hz',
    slug: '1hz-land-geophone',
    titleZh: '1Hz 有源力反馈式宽频陆地检波器',
    titleEn: '1Hz Broadband Land Geophone',
    cn: '1Hz陆地宽频检波器-202511220.pdf',
  },
  {
    id: 'geophone-2hz',
    slug: '2hz-broadband-geophone',
    titleZh: '2Hz 有源力反馈式全向宽频检波器',
    titleEn: '2Hz Broadband Omni-Directional Geophone',
    cn: '2Hz宽频检波器_CN-20240401_20240425-20240522_20240820.pdf',
    en: '2Hz宽频检波器_EN_20250617.pdf',
  },
]

export function downloadFilePath(filename: string): string {
  return encodeURI(`/downloads/${filename}`)
}

export function downloadFileUrl(filename: string, withBase: (path: string) => string): string {
  return withBase(downloadFilePath(filename))
}

/** Browser `download` attribute — use `downloadAsCn` / `downloadAsEn` when set. */
export function downloadSaveAs(item: DownloadItem, locale: 'cn' | 'en'): string | undefined {
  const file = locale === 'cn' ? item.cn : item.en
  if (!file) return undefined
  const saveAs = locale === 'cn' ? item.downloadAsCn : item.downloadAsEn
  return saveAs ?? file
}

const SLUG_TO_ID: Record<string, string> = {
  '1hz-land-geophone': 'geophone-1hz',
  '2hz-broadband-geophone': 'geophone-2hz',
}

export function getDownloadItemBySlug(slug: string): DownloadItem | undefined {
  const id = SLUG_TO_ID[slug] ?? slug
  return downloadsCatalog.find((item) => item.slug === slug || item.id === id)
}

/** Warn at build time if the folder and catalog get out of sync. */
export function assertDownloadsCatalogComplete(): void {
  if (!fs.existsSync(DOWNLOADS_DIR)) return

  const onDisk = new Set(fs.readdirSync(DOWNLOADS_DIR).filter((f) => f.endsWith('.pdf')))
  const cataloged = new Set(
    downloadsCatalog.flatMap((item) => [item.cn, item.en].filter((f): f is string => Boolean(f))),
  )

  const missing = [...onDisk].filter((f) => !cataloged.has(f))
  const extra = [...cataloged].filter((f) => !onDisk.has(f))

  if (missing.length) {
    console.warn('[downloads] PDFs on disk but not in catalog:', missing.join(', '))
  }
  if (extra.length) {
    console.warn('[downloads] Catalog entries missing files:', extra.join(', '))
  }
}
