export type Locale = 'zh' | 'en'

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
    footerNav: string
    rights: string
    founded: string
    missionPrefix: string
    viewMore: string
    learnMore: string
    backToBusiness: string
    backToHelp: string
    preparing: string
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

  sections: {
    majorProducts: { label: string; heading: string }
    recentProducts: { label: string; heading: string }
    news: { label: string; heading: string }
    recentNews: { label: string; heading: string }
  }

  homepageNewsLimit: number

  business: {
    title: string
    intro: string
    segments: BusinessSegment[]
  }

  products: {
    name: string
    subtitle: string
    description: string
    highlights: string[]
    href?: string
    image?: string
  }[]

  secondaryProducts: {
    name: string
    href: string
    image?: string
  }[]

  cases: {
    title: string
    excerpt: string
    href?: string
  }[]

  news: {
    date: string
    title: string
    excerpt: string
    tag: string
    href?: string
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
    honorsSubtitle: string
    honors: string[]
    qualificationsSubtitle: string
    qualifications: string[]
    ipSubtitle: string
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

  footerLinks: { label: string; href: string }[]
  legal: {
    publicSecurity: string
    icp: string
  }
}
