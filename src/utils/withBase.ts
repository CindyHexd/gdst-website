/** Prefix internal paths for GitHub Pages project sites (e.g. /gdst-website/). */
export function withBase(path: string): string {
  if (!path || path.startsWith('http')) return path
  const base = import.meta.env.BASE_URL
  if (!base || base === '/') return path
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  if (path === '/') return `${normalizedBase}/`
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${normalizedBase}${normalizedPath}`
}
