import type { Locale } from '../i18n/types'

/** Strip Astro `BASE_URL` (e.g. /gdst-website/) from a pathname. */
export function stripBasePath(pathname: string): string {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/') return pathname
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  if (pathname === normalizedBase || pathname === `${normalizedBase}/`) return '/'
  if (pathname.startsWith(`${normalizedBase}/`)) {
    return pathname.slice(normalizedBase.length)
  }
  return pathname
}

/** Remove `/en` site prefix; paths in content stay locale-neutral (e.g. `/products/foo/`). */
export function neutralPath(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path
  }
  const [pathPart, hash] = path.split('#')
  let normalized = pathPart === '/en' ? '/' : pathPart.replace(/^\/en(?=\/|$)/, '') || '/'
  if (!normalized.startsWith('/')) normalized = `/${normalized}`
  return hash ? `${normalized}#${hash}` : normalized
}

export function localizePath(path: string, locale: Locale): string {
  if (!path || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path
  }
  const neutral = neutralPath(path)
  if (locale === 'zh') return neutral
  if (neutral === '/') return '/en/'
  return `/en${neutral}`
}

export function getLocaleFromPathname(pathname: string): Locale {
  const path = stripBasePath(pathname)
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'zh'
}

/** Same page in the other language (pathname may include base). */
export function alternateLocalePath(pathname: string, targetLocale: Locale): string {
  const path = stripBasePath(pathname)
  return localizePath(neutralPath(path), targetLocale)
}
