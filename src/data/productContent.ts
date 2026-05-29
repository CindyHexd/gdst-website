import type { Locale } from '../i18n/types'
import type { ProductContentData } from './productContentTypes'

const contentModules = import.meta.glob<{ default: ProductContentData }>(
  './productContent/*/*.json',
  { eager: true },
)

function loadContent(slug: string, lang: 'zh' | 'en'): ProductContentData | undefined {
  const entry = Object.entries(contentModules).find(([path]) =>
    path.endsWith(`/${slug}/${lang}.json`),
  )
  return entry?.[1].default
}

export function getProductContent(slug: string, locale: Locale): ProductContentData | undefined {
  const primary = loadContent(slug, locale)
  if (primary) return primary
  const alt: 'zh' | 'en' = locale === 'zh' ? 'en' : 'zh'
  return loadContent(slug, alt)
}
