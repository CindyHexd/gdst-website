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
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
