import type { SpecTableRow } from '../components/specTableTypes'

export interface ProductHighlightsSection {
  type: 'highlights'
  title?: string
  bullets: string[]
  /** Paths under public-media (e.g. /product/1C/photo.jpg) */
  images?: string[]
}

export interface ProductSpecsSection {
  type: 'specs'
  title?: string
  rows: SpecTableRow[]
  /** Optional image to the right of the spec table */
  image?: string
  /** Side image size: sm for compact diagrams (default md) */
  imageSize?: 'sm' | 'md'
  /** Optional image centered below the spec table */
  imageBelow?: string
}

export interface ProductNotesSection {
  type: 'notes'
  title?: string
  items: string[]
}

export type ProductContentSection =
  | ProductHighlightsSection
  | ProductSpecsSection
  | ProductNotesSection

export interface ProductContentData {
  pdf: string
  /** Short tagline under the page title (SubPage intro) */
  excerpt?: string
  sections: ProductContentSection[]
}
