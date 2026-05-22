import type { Content } from './types'

const sensorLinks = [
  { href: '/products/2hz-wideband-geophone/', label: '2 Hz Wideband Geophone' },
  { href: '/products/125hz-land-geophone/', label: '1.25 Hz Land Geophone' },
]

const seismicLinks = [
  { href: '/products/allseis-1c/', label: 'ALLSEIS-1C Nodal System' },
  { href: '/products/allseis-3c/', label: 'ALLSEIS-3C Three-component Station' },
  { href: '/products/allseis-4clf/', label: 'ALLSEIS-4CLF Seismometer' },
  { href: '/products/i-nodal/', label: 'I-Nodal All-in-one System' },
  { href: '/products/allseis-1chr/', label: 'ALLSEIS-1CHR Nodal System' },
]

export const en: Content = {
  locale: 'en',
  lang: 'en',
  homePath: '/en/',

  meta: {
    title: 'GeoDeep Sensing | Beijing Zhongke Shenyuan Technology',
    description:
      'GeoDeep Sensing develops nodal seismometers and geoscience big-data platforms for energy exploration, urban subsurface mapping, and intelligent monitoring.',
  },

  ui: {
    skipToContent: 'Skip to main content',
    langSwitchLabel: 'Language',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    menu: 'Menu',
    cta: 'Contact us',
    rights: 'All rights reserved.',
    founded: 'Est.',
    missionPrefix: 'Mission · ',
    viewMore: 'View more news',
    learnMore: 'Learn more',
    backToBusiness: 'Back to business segments',
    backToHelp: 'Back to help',
    preparing: 'Documents are being prepared. Contact sales or technical support for the latest versions.',
  },

  company: {
    name: 'Beijing GeoDeep Sensing Technology Co., Ltd.',
    shortName: 'GeoDeep Sensing',
    nameEn: 'GeoDeep Sensing',
    tagline: 'Hardware & software united — exploring deep and shallow',
    description:
      'Backed by the Institute of Geology and Geophysics (CAS) and Peking University’s School of Earth and Space Sciences, we develop nodal seismometers, geoscience big-data platforms, and intelligent monitoring systems.',
    address: 'Room N1-308, Jinyu Intelligent Manufacturing Workshop, Xisanqi, Haidian District, Beijing',
    phone: '010-83458087',
    email: 'service@geodeepsensing.com',
    website: 'https://www.geodeepsensing.com',
    founded: '2020',
    techSupportPhone: '010-83458087',
  },

  navLinks: [
    { href: '/en/', label: 'Home' },
    { href: '/business/', label: 'Business' },
    { href: '/cases/', label: 'Cases' },
    { href: '/news/', label: 'News' },
    { href: '/support/', label: 'Help' },
    { href: '/about/', label: 'About' },
  ],

  hero: {
    title: 'GeoDeep Sensing Technology Co., Ltd.',
    slides: [
      {
        subtitle: 'Leader in autonomous exploration equipment for energy exploration',
        image: '/landscapes/namibia.jpg',
      },
      {
        subtitle: 'Intelligent equipment manufacturer and big-data service provider for industry and smart cities',
        image: '/landscapes/smart.jpg',
      },
      {
        subtitle: 'Solution provider for integrated urban subsurface space',
        image: '/landscapes/shanghai-urban.jpg',
      },
      {
        subtitle: 'Smart technology frontrunner in geoscience big data',
        image: '/landscapes/aerial-view.jpg',
      },
    ],
  },

  stats: [
    { value: '200+', label: 'Users' },
    { value: '300000+', label: 'Total seismic acquisition units delivered' },
    { value: '100+', label: 'Service fields' },
    { value: '50+', label: 'Proprietary IP assets' },
  ],

  solution: {
    items: [
      'High-precision energy & mineral exploration',
      'High-precision urban subsurface exploration',
      'Hydraulic fracturing & mine seismic monitoring',
      'Engineering disaster monitoring & early warning',
      'Industrial predictive maintenance monitoring',
      'Natural gas pipeline leak monitoring',
      'Landslide monitoring',
      'Reservoir monitoring',
    ],
  },

  sections: {
    solution: { label: 'SOLUTION', heading: 'Solutions' },
    majorProducts: { label: 'PRODUCTS', heading: 'Major products' },
    recentProducts: { label: 'PRODUCTS', heading: 'Recent products' },
    news: { label: 'NEWS', heading: 'News' },
    recentNews: { label: 'NEWS', heading: 'Recent news' },
  },

  homepageNewsLimit: 4,

  business: {
    title: 'Business segments',
    intro:
      'Five strategic directions — intelligent sensors, seismic acquisition, predictive maintenance, data processing & analysis, and urban subsurface investigation — from equipment to data services.',
    segments: [
      {
        id: 'sensors',
        title: 'Intelligent sensors',
        description:
          'Proprietary active force-feedback wideband geophones for acquisition, engineering surveys, and long-term monitoring.',
        productLinks: sensorLinks,
      },
      {
        id: 'seismic',
        title: 'Seismic acquisition',
        description:
          'Nodal, three-component, and four-component systems for cable-free, high-density deployment in energy and urban subsurface projects.',
        productLinks: seismicLinks,
      },
      {
        id: 'predictive-maintenance',
        title: 'Predictive maintenance',
        description:
          'Vibration monitoring, condition assessment, and fault prediction for industrial equipment and critical infrastructure.',
      },
      {
        id: 'data-processing',
        title: 'Data processing & analysis',
        description:
          'Seismic and EM processing, QC, imaging, and interpretation integrated with our geoscience cloud platform.',
      },
      {
        id: 'urban-subsurface',
        title: 'Urban subsurface investigation',
        description:
          'Fine mapping of urban subsurface structure from 0–500 m for planning, hazard assessment, and safe subsurface use.',
      },
    ],
  },

  products: [
    {
      name: 'ALLSEIS-1C Nodal Seismic Acquisition System',
      subtitle: 'Single-component nodal seismic acquisition',
      description:
        'Nodal seismic acquisition equipment for energy, mineral, and engineering exploration, supporting high-density field deployment.',
      highlights: ['Nodal acquisition', 'High-density deployment', 'Energy exploration'],
      href: '/products/allseis-1c/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/49068950.png',
    },
    {
      name: 'ALLSEIS-3C Three-component Seismic Acquisition Station',
      subtitle: 'Three-component seismic acquisition station',
      description:
        'Integrated three-component equipment for fine urban subsurface exploration, structural surveys, and monitoring.',
      highlights: ['Three-component', 'Integrated acquisition', 'Subsurface space'],
      href: '/products/allseis-3c/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/27446291.png',
    },
    {
      name: 'ALLSEIS-4CLF Four-component Short-period Seismometer',
      subtitle: 'Four-component short-period seismometer',
      description:
        'Four-component short-period seismometer for seismic monitoring, engineering monitoring, and intelligent sensing scenarios.',
      highlights: ['Four-component', 'Short-period', 'Intelligent sensing'],
      href: '/products/allseis-4clf/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/27047828.png',
    },
    {
      name: 'I-Nodal All-in-one Nodal Seismic Acquisition System',
      subtitle: 'All-in-one nodal seismic acquisition',
      description:
        'Cable-free autonomous seismic acquisition with independent channels and no cable connection, suited to large-scale high-density deployment.',
      highlights: ['Cable-free', 'All-in-one', 'Large-scale use'],
      href: '/products/i-nodal/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/42128135.png',
    },
    {
      name: 'ALLSEIS-1CHR Nodal Seismic Acquisition System',
      subtitle: 'High-resolution nodal seismic acquisition',
      description:
        'Nodal equipment for high-precision seismic acquisition, with autonomous control, portable deployment, and multi-scenario use.',
      highlights: ['High-resolution', 'Nodal', 'Autonomous'],
      href: '/products/allseis-1chr/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/52917172.png',
    },
  ],

  secondaryProducts: [
    {
      name: '2 Hz active force-feedback omnidirectional wideband geophone',
      href: '/products/2hz-wideband-geophone/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/55920300.png',
    },
    {
      name: '1.25 Hz active force-feedback wideband land geophone',
      href: '/products/125hz-land-geophone/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/55951257.png',
    },
  ],

  cases: [
    {
      title: 'Deep oil, gas and mineral nodal acquisition project',
      excerpt: 'ALLSEIS nodal systems enabled high-density cable-free deployment in complex exploration areas.',
    },
    {
      title: 'Urban subsurface fine-mapping project',
      excerpt: 'Three-component acquisition and frequency imaging supported planning and subsurface safety.',
    },
    {
      title: 'Engineering hazard and mining seismic monitoring',
      excerpt: 'Continuous monitoring and analytics for landslides, mining tremors, and fracturing scenarios.',
    },
    {
      title: 'Natural gas pipeline leak monitoring',
      excerpt: 'Wideband sensing and analytics for along-pipeline anomaly detection and early warning.',
    },
    {
      title: 'Industrial predictive maintenance',
      excerpt: 'Vibration monitoring and fault prediction for critical equipment and infrastructure.',
    },
    {
      title: 'Hydraulic fracturing and reservoir monitoring',
      excerpt: 'Microseismic monitoring and reservoir dynamics for refined oil and gas development.',
    },
  ],

  news: [
    {
      date: '2024-07-27',
      title: 'GeoDeep Sensing joined the 2024 Engineering Geophysics Academic Conference',
      excerpt: 'The company exchanged engineering geophysics technology applications with industry partners.',
      tag: 'News',
      href: '/news/engineering-geophysics-2024/',
    },
    {
      date: '2024-06-12',
      title: 'GeoDeep Sensing returned to the 85th EAGE Annual Conference',
      excerpt: 'GeoDeep Sensing presented self-developed products and solutions to the international industry.',
      tag: 'News',
      href: '/news/eage-85/',
    },
    {
      date: '2024-09-12',
      title: 'Chairman Lv Yongjun joined Shanxi Geophysical Survey Institute technical training',
      excerpt: 'GeoDeep Sensing exchanged ideas on intelligent geophysical technology and equipment.',
      tag: 'News',
      href: '/news/shanxi-training/',
    },
    {
      date: '2024-08-06',
      title: 'Hebei Coalfield Geological Bureau geophysical team visited GeoDeep Sensing',
      excerpt: 'The visiting team discussed geophysical equipment and applications with GeoDeep Sensing.',
      tag: 'News',
      href: '/news/hebei-visit/',
    },
    {
      date: '2023-05-27',
      title: '2023 China International Oil & Gas Exploration Technology Conference',
      excerpt:
        'GeoDeep Sensing joined the conference in Beijing with autonomous seismic acquisition and exploration equipment.',
      tag: 'News',
      href: '/news/oil-gas-exploration-2023/',
    },
    {
      date: '2022-04-29',
      title: 'I-Nodal-V2 cable-free seismic acquisition system finalized for pilot production',
      excerpt: 'I-Nodal-V2 completed product finalization and scaled trial production.',
      tag: 'News',
      href: '/news/i-nodal-v2-production/',
    },
  ],

  helpCenter: {
    hubIntro: 'FAQ, legal notice, and downloads to help you learn about our products and get support.',
    faqIntro: 'Answers on product selection, technical support, and document downloads.',
    legalIntro: 'Terms of use, copyright, and disclaimers for this website.',
    downloadsIntro: 'Product manuals, operation guides, and supporting software.',
    faqTitle: 'FAQ',
    faq: [
      {
        question: 'How do I choose the right nodal seismic system?',
        answer:
          'Selection depends on survey goals, array scale, component requirements, and field conditions. Contact our team for tailored recommendations.',
      },
      {
        question: 'Where can I download manuals and guides?',
        answer: 'Visit Help → Downloads for product manuals, operation guides, and supporting software.',
      },
      {
        question: 'How do I get technical support?',
        answer: 'Call 010-83458087 or email service@geodeepsensing.com. We respond during business hours.',
      },
      {
        question: 'Do you offer customized solutions?',
        answer:
          'Yes — integrated solutions from sensors and acquisition to geoscience data processing for energy, urban subsurface, and monitoring scenarios.',
      },
    ],
    legalTitle: 'Legal notice',
    legalSections: [
      {
        paragraphs: [
          'Please read and agree to the following terms of use. These rules apply to all visitors. Beijing GeoDeep Sensing Technology Co., Ltd. may revise them at any time. If you do not agree, please stop using this website. We reserve the right to pursue legal action against misuse of site content.',
        ],
      },
      {
        heading: 'Copyright',
        paragraphs: [
          'Beijing GeoDeep Sensing Technology Co., Ltd. owns or co-owns copyright in materials on this website. No content may be copied or mirrored on servers not operated by the company without prior written permission.',
          'Domain names, trademarks, text, audiovisual content, graphics, and images on this site are protected. Unauthorized use may violate the Copyright Law of the PRC and other applicable laws.',
        ],
      },
      {
        heading: 'Disclaimer',
        paragraphs: [
          'We strive for accuracy but do not warrant completeness, reliability, or freedom from error or omission regarding site content, nor freedom from viruses or third-party infringement.',
          'We may change site content without notice. Products and services are subject to our sales contracts and terms.',
          'Views in republished materials do not necessarily reflect our views. Contact us with proof regarding copyright disputes over republished content.',
          'Links to third-party sites are provided without warranty; users assume risks when following external links.',
        ],
      },
      {
        heading: 'Copyright notice',
        paragraphs: [
          'All materials are protected by copyright and owned by Beijing GeoDeep Sensing Technology Co., Ltd. (some images from CC0 sources, except cited third-party content). Commercial use without written permission is prohibited; limited personal download/print is allowed if unmodified and copyright notices are retained.',
        ],
      },
      {
        heading: 'Trademarks',
        paragraphs: [
          'All company trademarks and logos on this site are registered or proprietary marks. Unauthorized use is prohibited.',
        ],
      },
      {
        heading: 'Links to other websites',
        paragraphs: [
          'Linked external sites are not under our control. We are not liable for damages from visiting them. Links do not imply endorsement, partnership, or responsibility for third-party content or offerings.',
        ],
      },
      {
        paragraphs: [
          'We are not liable for viruses encountered when using this site or third-party sites linked from it.',
          'Beijing GeoDeep Sensing Technology Co., Ltd. reserves the right of final interpretation of this notice and use of this website.',
        ],
      },
    ],
    downloadsTitle: 'Downloads',
    manualsTitle: 'Product manuals',
    guidesTitle: 'Operation guides',
    softwareTitle: 'Supporting software',
    guides: [
      { title: 'ALLSEIS field deployment guide', description: 'Station layout, QC checks, and troubleshooting.' },
      { title: 'I-Nodal quick start', description: 'Configuration and startup for first-time deployment.' },
      { title: 'Wideband geophone installation & maintenance', description: 'Coupling, calibration, and long-term care.' },
    ],
    software: [
      { title: 'Acquisition & QC software', description: 'Field data download, trace preview, and quality assessment.' },
      { title: 'Node configuration tool', description: 'Parameter setup, firmware updates, and status monitoring.' },
      { title: 'Geoscience processing plugins', description: 'Tools that work with the Guokan cloud platform.' },
    ],
  },

  aboutPage: {
    intro:
      'Founded in 2020, Beijing GeoDeep Sensing Technology Co., Ltd. draws on research institutes including the Institute of Geology and Geophysics, Chinese Academy of Sciences, and the School of Earth and Space Sciences, Peking University. We focus on intelligent sensing R&D and manufacturing, multi-dimensional multi-source data acquisition and processing, and big-data decision support for energy and mineral resources, industrial predictive maintenance, and smart cities. We develop proprietary smart sensors, data-acquisition nodes, and application systems, and deliver value-added services across data acquisition, storage, analytics, visualization, and applications. Guided by integrity in practice and unity of knowledge and action, we help customers advance digital innovation and domestic core exploration equipment—contributing to localized deep-resource detection capabilities for land, sea, and space.',
    honorsTitle: 'Honors & qualifications',
    honorsSubtitle: 'Honors',
    honors: [
      'Zhongguancun High-tech Enterprise',
      'Beijing “Specialized and Sophisticated” SME',
      'Outstanding tenant at CAS Zhihui Workshop',
      'Regular exhibitor at EAGE and other international events',
    ],
    qualificationsSubtitle: 'Qualifications',
    qualifications: [
      'Quality management system certification',
      'Intellectual property management certification',
      'Industry testing qualifications (ongoing)',
    ],
    ipSubtitle: 'Intellectual property',
    intellectualProperty: [
      '50+ proprietary IP assets',
      'Patents on nodal seismic acquisition systems',
      'Wideband geophone and signal-processing patents',
      'Software copyrights for geoscience cloud platform',
    ],
    contactTitle: 'Contact us',
    offices: [
      {
        name: 'Beijing | China',
        address: 'Room N1-308, Jinyu Intelligent Manufacturing Workshop, Xisanqi, Haidian, Beijing',
        phone: '+86 010-8345 8087',
        email: 'service@geodeepsensing.com',
      },
      {
        name: 'R&D and test | China',
        address: 'Zhongguancun Science City area, Haidian District, Beijing',
        phone: '+86 010-8345 8087',
        email: 'service@geodeepsensing.com',
      },
      {
        name: 'Suzhou | China',
        address: 'Room 102, Building 16, No. 158 Jinfeng Road, Suzhou High-tech Zone',
        phone: '+86 0512-6878 6291',
        email: 'service@geodeepsensing.com',
      },
      {
        name: 'London | UK',
        address: ['4th Floor, Silverstream House, 45 Fitzroy', 'Street, London W1T 6EB, United Kingdom'],
        phone: '+44 7975 829 456',
        email: 'service@geodeepsensing.com',
      },
    ],
    careersTitle: 'Join us',
    openPositionsTitle: 'Open positions',
    jobHeadcountLabel: 'Openings',
    jobSalaryLabel: 'Compensation',
    jobSpecialNoteLabel: 'Note',
    jobRequirementsLabel: 'Requirements',
    openPositions: [
      {
        title: 'Circuit development engineer',
        headcount: '2–3',
        salary: '8K–10K (2+ years of experience)',
        specialNote:
          'Candidates with 3+ years of hardware development experience, independent project design and debugging skills, solid analog/digital fundamentals, embedded processor and peripheral design, and common interface circuit experience may receive up to 20K.',
        requirements: [
          'Bachelor’s or higher in electronics, automation, or computer science;',
          'Familiar with digital and analog circuit design flows and EDA tools; able to complete schematics and PCB layout from logic design specs;',
          'Able to write debug programs and test hardware to meet design requirements;',
          'Proficient in reading English technical literature;',
          'Strong ethics, teamwork, and dedication;',
          'Eager to learn new skills and technologies.',
        ],
      },
      {
        title: 'Embedded microprocessor development engineer',
        headcount: '2–3',
        salary: '8K–10K',
        requirements: [
          'Bachelor’s or higher in electronics, automation, or computer science;',
          '2–3 years of relevant experience;',
          'Familiar with ARM/8051 embedded design flows and tools; able to develop low-level drivers;',
          'Proficient in reading English technical literature;',
          'Strong ethics, teamwork, and dedication;',
          'Eager to learn new skills and technologies.',
        ],
      },
    ],
    careersEmailNote: 'Send your resume to service@geodeepsensing.com with the subject “Position – Your Name”.',
  },

  legal: {
    publicSecurity: 'Beijing public security record 11010802038108',
    icp: 'ICP record 2021017956',
  },
}
