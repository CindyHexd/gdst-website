import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const ghBase = '/gdst-website'

/** Astro redirect targets are domain-root absolute; prefix base for project pages. */
function ghRedirect(path) {
  if (!isGithubPages) return path
  if (path === '/') return `${ghBase}/`
  const [pathPart, hash] = path.split('#')
  const prefixed = `${ghBase}${pathPart}`
  return hash ? `${prefixed}#${hash}` : prefixed
}

export default defineConfig({
  site: isGithubPages ? 'https://cindyhexd.github.io' : 'https://www.geodeepsensing.com',
  base: isGithubPages ? ghBase : undefined,
  publicDir: 'public-media',
  output: 'static',
  compressHTML: true,
  redirects: {
    '/sy': ghRedirect('/'),
    '/solutions': ghRedirect('/cases/'),
    '/contact': ghRedirect('/about/#contact'),
    '/careers': ghRedirect('/about/#careers'),
    '/technical-support': ghRedirect('/support/'),
    '/cloud': ghRedirect('/downloads/'),
    '/business': ghRedirect('/products/'),
    '/products/125hz-land-geophone/': ghRedirect('/products/1hz-land-geophone/'),
    '/products/2hz-wideband-geophone/': ghRedirect('/products/2hz-broadband-geophone/'),
    '/products/allseis-ob4c/': ghRedirect('/products/allseis-ob4clf/'),
    '/news/i-nodal-large-scale-application/': ghRedirect('/cases/i-nodal-large-scale-application/'),
    '/en/news/i-nodal-large-scale-application/': ghRedirect('/en/cases/i-nodal-large-scale-application/'),
    '/en/solutions': ghRedirect('/en/cases/'),
    '/en/contact': ghRedirect('/en/about/#contact'),
    '/en/careers': ghRedirect('/en/about/#careers'),
    '/en/technical-support': ghRedirect('/en/support/'),
    '/en/cloud': ghRedirect('/en/downloads/'),
    '/en/business': ghRedirect('/en/products/'),
    '/en/products/125hz-land-geophone/': ghRedirect('/en/products/1hz-land-geophone/'),
    '/en/products/2hz-wideband-geophone/': ghRedirect('/en/products/2hz-broadband-geophone/'),
    '/en/products/allseis-ob4c/': ghRedirect('/en/products/allseis-ob4clf/'),
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
