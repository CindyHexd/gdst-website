import type { Locale } from '../i18n/types'
import { localizePath } from './localePath'
import { withBase } from './withBase'

export function localeHref(path: string, locale: Locale): string {
  return withBase(localizePath(path, locale))
}
