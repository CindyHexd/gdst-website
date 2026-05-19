import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const isGithubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  site: isGithubPages ? 'https://cindyhexd.github.io' : 'https://www.geodeepsensing.com',
  base: isGithubPages ? '/gdst-website' : undefined,
  output: 'static',
  compressHTML: true,
  redirects: {
    '/sy': '/',
    '/solutions': '/cases/',
    '/contact': '/about/#contact',
    '/careers': '/about/#careers',
    '/technical-support': '/support/',
    '/cloud': '/downloads/',
    '/products': '/business/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
