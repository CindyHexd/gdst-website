/** Photos for /news/geophys-academic-2025/ (files under public-media/news/conf-20250421/). */
const CONF_2025_DIR = '/news/conf-20250421'

const CONF_2025_FILENAMES = [
  'Screenshot 2026-05-28 at 16.26.18.jpeg',
  'Screenshot 2026-05-28 at 16.26.30.jpeg',
  'Screenshot 2026-05-28 at 16.26.41.jpeg',
  'Screenshot 2026-05-28 at 16.26.52.jpeg',
  'Screenshot 2026-05-28 at 16.27.05.jpeg',
  'Screenshot 2026-05-28 at 16.27.13.jpeg',
  'Screenshot 2026-05-28 at 16.27.26.jpeg',
  'Screenshot 2026-05-28 at 16.27.36.jpeg',
  'Screenshot 2026-05-28 at 16.27.46.jpeg',
] as const

export const geophysAcademic2025Photos = CONF_2025_FILENAMES.map(
  (name) => `${CONF_2025_DIR}/${name}`,
)
