import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const isGithubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  site: isGithubPages ? 'https://cindyhexd.github.io' : 'https://www.geodeepsensing.com',
  base: isGithubPages ? '/gdst-website' : undefined,
  publicDir: 'public-media',
  output: 'static',
  compressHTML: true,
  redirects: {
    '/sy': '/',
    '/solutions': '/cases/',
    '/contact': '/about/#contact',
    '/careers': '/about/#careers',
    '/technical-support': '/support/',
    '/cloud': '/downloads/',
    '/business': '/products/',
    '/products/125hz-land-geophone/': '/products/1hz-land-geophone/',
    '/products/allseis-ob4c/': '/products/allseis-ob4clf/',
    '/news/i-nodal-large-scale-application/': '/cases/i-nodal-large-scale-application/',
    '/en/news/i-nodal-large-scale-application/': '/en/cases/i-nodal-large-scale-application/',
    '/en/solutions': '/en/cases/',
    '/en/contact': '/en/about/#contact',
    '/en/careers': '/en/about/#careers',
    '/en/technical-support': '/en/support/',
    '/en/cloud': '/en/downloads/',
    '/en/business': '/en/products/',
    '/en/products/125hz-land-geophone/': '/en/products/1hz-land-geophone/',
    '/en/products/allseis-ob4c/': '/en/products/allseis-ob4clf/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
