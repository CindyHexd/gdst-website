export interface ProductPdfData {
  pdf: string
  pages: string[]
  extractedFrom?: string
  note?: string
}

const SLUG_TO_JSON_ID: Record<string, string> = {
  '1hz-land-geophone': 'geophone-1hz',
  '2hz-wideband-geophone': 'geophone-2hz',
}

export function pdfJsonIdForSlug(slug: string): string {
  return SLUG_TO_JSON_ID[slug] ?? slug
}

const pdfModules = import.meta.glob<{ default: ProductPdfData }>('./productPdfZh/*.json', {
  eager: true,
})

export function getProductPdf(slug: string): ProductPdfData | undefined {
  const id = pdfJsonIdForSlug(slug)
  const entry = Object.entries(pdfModules).find(([path]) => path.endsWith(`/${id}.json`))
  return entry?.[1].default
}
