/** Prefix internal paths for GitHub Pages project sites (e.g. /gdst-website/). */
export function withBase(path: string): string {
  if (!path || path.startsWith('http')) return path
  const base = import.meta.env.BASE_URL
  if (path === '/') return base
  return `${base}${path.replace(/^\//, '')}`
}
