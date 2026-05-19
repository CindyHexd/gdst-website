import type { Content, Locale } from './types'
import { zh } from './zh'
import { en } from './en'

const catalogs: Record<Locale, Content> = { zh, en }

export type { Content, Locale, NavLink, NavLinkChild, BusinessSegment } from './types'

export function getContent(locale: Locale): Content {
  return catalogs[locale]
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh'
}

export function getLocalePath(locale: Locale): string {
  return locale === 'zh' ? '/' : '/en/'
}

export function getAllProducts(t: Content) {
  return [
    ...t.products.map((p) => ({ name: p.name, href: p.href!, image: p.image })),
    ...t.secondaryProducts.map((p) => ({ name: p.name, href: p.href, image: p.image })),
  ]
}
