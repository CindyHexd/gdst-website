import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://www.geodeepsensing.com',
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
