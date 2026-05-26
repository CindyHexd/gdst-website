import type { SpecTableRow } from '../components/specTableTypes'

export type Locale = 'zh' | 'en'

export type { SpecTableRow, SpecTableValue } from '../components/specTableTypes'

export type NewsBodyPart =
  | { type: 'text'; value: string }
  | { type: 'link'; label: string; href: string }

/** 列表项：纯文本或带内联链接 */
export type NewsBodyListItem = string | { parts: NewsBodyPart[] }

/** 纯文本段落、带内联链接的段落，或带标题的列表 */
export type NewsBodyBlock =
  | string
  | { parts: NewsBodyPart[] }
  | { heading: string; bullets: NewsBodyListItem[] }

export interface NavLinkChild {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

export interface NavLink {
  href: string
  label: string
  children?: NavLinkChild[]
}

export interface BusinessSegment {
  id: string
  title: string
  description: string
  productLinks?: { href: string; label: string }[]
}

export interface Content {
  locale: Locale
  lang: 'zh-CN' | 'en'
  homePath: '/' | '/en/'

  meta: {
    title: string
    description: string
  }

  ui: {
    skipToContent: string
    langSwitchLabel: string
    mainNav: string
    mobileNav: string
    menu: string
    cta: string
    rights: string
    founded: string
    missionPrefix: string
    viewMore: string
    download: string
    downloadZh: string
    downloadEn: string
    backToBusiness: string
    backToProducts: string
    backToHelp: string
    backToNews: string
    backToCases: string
    preparing: string
    newsDetailPlaceholder: string
    caseDetailPlaceholder: string
    newsHubIntro: string
    helpHubTitle: string
    aboutPageTitle: string
  }

  company: {
    name: string
    shortName: string
    nameEn: string
    tagline: string
    description: string
    address: string
    phone: string
    email: string
    website: string
    founded: string
    techSupportPhone: string
  }

  navLinks: NavLink[]

  hero: {
    title: string
    slides: { subtitle: string; image: string }[]
  }

  stats: { value: string; label: string }[]

  solution: {
    items: string[]
  }

  coreTechnology: {
    rows: SpecTableRow[]
  }

  sections: {
    solution: { heading: string }
    coreTechnology: { heading: string }
    majorProducts: { heading: string }
    news: { heading: string }
    recentNews: { heading: string }
  }

  homepageNewsLimit: number

  business: {
    title: string
    intro: string
    segments: BusinessSegment[]
  }

  productCenter: {
    title: string
    intro: string
    categories: {
      id: string
      title: string
      description: string
      abbreviations?: string[]
    }[]
  }

  cases: {
    title: string
    excerpt: string
    href: string
    body?: NewsBodyBlock[]
  }[]

  news: {
    date: string
    title: string
    excerpt: string
    tags: string[]
    href?: string
    /** 详情页正文，每项一段；不写则用 newsDetailPlaceholder */
    body?: NewsBodyBlock[]
  }[]

  helpCenter: {
    hubIntro: string
    faqIntro: string
    legalIntro: string
    downloadsIntro: string
    faqTitle: string
    faq: { question: string; answer: string }[]
    legalTitle: string
    legalSections: { heading?: string; paragraphs: string[] }[]
    downloadsTitle: string
    manualsTitle: string
    guidesTitle: string
    softwareTitle: string
    guides: { title: string; description: string }[]
    software: { title: string; description: string; detail?: string }[]
  }

  aboutPage: {
    intro: string
    honorsTitle: string
    qualificationsSubtitle: string
    qualifications: { src: string; alt: string }[]
    ipSubtitle: string
    ipImage?: string
    intellectualProperty: string[]
    contactTitle: string
    offices: { name: string; address: string | string[]; phone: string; email: string }[]
    careersTitle: string
    openPositionsTitle: string
    jobHeadcountLabel: string
    jobSalaryLabel: string
    jobSpecialNoteLabel: string
    jobRequirementsLabel: string
    openPositions: {
      title: string
      headcount: string
      salary: string
      specialNote?: string
      requirements: string[]
    }[]
    careersEmailNote: string
  }

  /** China mainland filing lines; shown in footer on zh only */
  legal?: {
    publicSecurity: string
    icp: string
  }
}
