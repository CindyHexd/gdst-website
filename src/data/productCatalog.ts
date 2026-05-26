import { downloadsCatalog } from './downloadsCatalog'
import { productImages } from './productImages'

export type ProductCategory = 'seismic' | 'sensors'

export interface CatalogProduct {
  slug: string
  name: string
  href: string
  category: ProductCategory
  image?: string
}

const SENSOR_SLUGS = new Set(['1hz-land-geophone', '2hz-wideband-geophone'])

const SLUG_ALIASES: Record<string, string> = {
  'geophone-1hz': '1hz-land-geophone',
  'geophone-2hz': '2hz-wideband-geophone',
}

function resolveSlug(catalogId: string, existing?: string): string {
  if (existing) return existing
  return SLUG_ALIASES[catalogId] ?? catalogId
}

function isSeismic(id: string, slug: string): boolean {
  if (SENSOR_SLUGS.has(slug)) return false
  return !id.startsWith('geophone')
}

/** Products for product center + /products/[slug] routes (excludes downloads-only brochures). */
export function getCatalogProducts(locale: 'zh' | 'en'): CatalogProduct[] {
  return downloadsCatalog.filter((item) => !item.downloadsOnly).map((item) => {
    const slug = resolveSlug(item.id, item.slug)
    const name = locale === 'zh' ? item.titleZh : item.titleEn
    return {
      slug,
      name,
      href: `/products/${slug}/`,
      category: isSeismic(item.id, slug) ? 'seismic' : 'sensors',
      image: productImages[slug],
    }
  })
}

export function getCatalogProductBySlug(slug: string, locale: 'zh' | 'en'): CatalogProduct | undefined {
  return getCatalogProducts(locale).find((p) => p.slug === slug)
}
