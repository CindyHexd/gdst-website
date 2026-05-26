export type SpecTableValue =
  | string
  | {
      lead: string
      bullets?: string[]
      groups?: { heading: string; bullets: string[] }[]
    }

export interface SpecTableRow {
  label: string
  value: SpecTableValue
}
