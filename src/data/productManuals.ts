import { downloadFilePath, downloadSaveAs, getDownloadItemBySlug } from './downloadsCatalog'

export function productManualPath(slug: string, locale: 'cn' | 'en' = 'cn'): string | undefined {
  const item = getDownloadItemBySlug(slug)
  if (!item) return undefined
  const file = locale === 'en' ? item.en : item.cn
  if (!file) return locale === 'cn' ? (item.en ? downloadFilePath(item.en) : undefined) : undefined
  return downloadFilePath(file)
}

export function productManualDownloadName(slug: string, locale: 'cn' | 'en' = 'cn'): string | undefined {
  const item = getDownloadItemBySlug(slug)
  if (!item) return undefined
  return downloadSaveAs(item, locale)
}
