/** Product slug → PDF in public-media/downloads/ */
export const productManuals: Record<string, { file: string; downloadAs: string }> = {
  'allseis-1c': { file: 'ALLSEIS-1C_CN.pdf', downloadAs: 'ALLSEIS-1C_CN.pdf' },
  'allseis-1chr': { file: 'ALLSEIS-1CHR_CN-20250529.pdf', downloadAs: 'ALLSEIS-1CHR_CN.pdf' },
  'allseis-3c': { file: 'ALLSEIS-3C_CN.pdf', downloadAs: 'ALLSEIS-3C_CN.pdf' },
  'allseis-4clf': { file: 'ALLSEIS-4CLF_CN.pdf', downloadAs: 'ALLSEIS-4CLF_CN.pdf' },
  'i-nodal': {
    file: 'I-nodal-2_CN-20240401_20240425.pdf',
    downloadAs: 'I-Nodal-2_CN.pdf',
  },
  '2hz-wideband-geophone': {
    file: '2Hz宽频检波器_CN-20240401_20240425-20240522_20240820.pdf',
    downloadAs: '2Hz宽频检波器_CN.pdf',
  },
  '125hz-land-geophone': {
    file: '1.25Hz宽频检波器_CN-20240401_20240425_20240820.pdf',
    downloadAs: '1.25Hz宽频检波器_CN.pdf',
  },
}

export function productManualPath(slug: string): string | undefined {
  const entry = productManuals[slug]
  if (!entry) return undefined
  return encodeURI(`/downloads/${entry.file}`)
}

export function productManualDownloadName(slug: string): string | undefined {
  return productManuals[slug]?.downloadAs
}
