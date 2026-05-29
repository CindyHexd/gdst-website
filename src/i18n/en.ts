import { geophysAcademic2025Photos } from '../data/newsConferencePhotos'
import type { Content } from './types'

const sensorLinks = [
  { href: '/products/2hz-broadband-geophone/', label: '2 Hz Broadband Geophone' },
  { href: '/products/125hz-land-geophone/', label: '1.25 Hz Land Geophone' },
]

const seismicLinks = [
  { href: '/products/allseis-1c/', label: 'ALLSEIS-1C Nodal System' },
  { href: '/products/allseis-3c/', label: 'ALLSEIS-3C Three-component Station' },
  { href: '/products/allseis-4clf/', label: 'ALLSEIS-4C LF Seismometer' },
  { href: '/products/i-nodal/', label: 'I-Nodal All-in-one System' },
  { href: '/products/allseis-1chr/', label: 'ALLSEIS-1C HR Nodal System' },
]

export const en: Content = {
  locale: 'en',
  lang: 'en',
  homePath: '/en/',

  meta: {
    title: 'GDST',
    description:
      '',
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
    download: 'Download',
    downloadZh: '中文',
    downloadEn: 'English',
    backToBusiness: 'Back to business segments',
    backToProducts: 'Back to products',
    backToHelp: 'Back to help',
    backToNews: 'Back to news',
    backToCases: 'Back to cases',
    preparing: 'Documents are being prepared. Contact sales or technical support for the latest versions.',
    newsDetailPlaceholder:
      'This is a placeholder news detail page. Add photos, agendas, meeting notes, and media assets when ready.',
    caseDetailPlaceholder:
      'Case study details coming soon. Add project background, technical approach, outcomes, and images here.',
    newsHubIntro:
      'Product milestones, industry conferences, customer engagement, and academic events.',
    helpHubTitle: 'Help',
    aboutPageTitle: 'About us',
  },

  company: {
    name: ' Geophysical Deep Sensing Technology Co., Ltd.',
    shortName: 'GDST',
    nameEn: 'GDST',
    tagline: '',
    description:
      '',
    address: 'Room N1-308, Jinyu Intelligent Manufacturing Workshop, Xisanqi, Haidian District, Beijing',
    phone: '010-83458087',
    email: 'service@geodeepsensing.com',
    website: 'https://www.geodeepsensing.com',
    founded: '2020',
    techSupportPhone: '010-83458087',
  },

  navLinks: [
    { href: '/', label: 'Home' },
    {
      href: '/products/',
      label: 'Products',
      children: [
        { href: '/products/#seismic', label: 'Seismic acquisition' },
        { href: '/products/#sensors', label: 'Intelligent sensors' },
        { href: '/products/#maintenance', label: 'Predictive maintenance' },
        { href: '/products/#data', label: 'Data processing & analysis' },
        { href: '/products/#urban', label: 'Urban subsurface investigation' },
      ],
    },
    { href: '/cases/', label: 'Cases' }, // TODO: verify accuracy of translations for subpages
    { href: '/news/', label: 'News' },
    {
      href: '/support/',
      label: 'Help',
      children: [
        { href: '/support/faq/', label: 'FAQ' },
        { href: '/support/legal/', label: 'Legal notice' },
        { href: '/downloads/', label: 'Downloads' },
      ],
    },
    {
      href: '/about/',
      label: 'About',
      children: [
        { href: '/about/#honors', label: 'Honors & qualifications' },
        { href: '/about/#contact', label: 'Contact us' },
        { href: '/about/#careers', label: 'Join us' },
      ],
    },
  ],

  hero: {
    title: 'Geophysical Deep Sensing Technology',
    slides: [
      {
        subtitle: 'Leader in autonomous exploration equipment for energy exploration',
        image: '/bg/namibia.jpg',
      },
      {
        subtitle: 'Intelligent equipment manufacturer and big-data service provider for industry and smart cities',
        image: '/bg/smart.jpg',
      },
      {
        subtitle: 'Solution provider for integrated urban subsurface space',
        image: '/bg/shanghai-urban.jpg',
      },
      {
        subtitle: 'Smart technology frontrunner in geoscience big data',
        image: '/bg/aerial-view.jpg',
      },
    ],
  },

  stats: [
    { value: '200+', label: 'Users' },
    { value: '300000+', label: 'Seismic acquisition units delivered' },
    { value: '100+', label: 'Service fields' },
    { value: '50+', label: 'Independent IPs' },
  ],

  solution: {
    items: [
      'High-resolution energy & mineral exploration',
      'High-resolution urban subsurface exploration',
      'Hydraulic fracturing & mine seismic monitoring',
      'Engineering disaster monitoring & early warning',
      'Industrial predictive maintenance monitoring',
      'Natural gas pipeline leak monitoring',
      'Landslide monitoring',
      'Reservoir monitoring',
    ],
  },

  coreTechnology: {
    rows: [
      {
        label: 'DualSync™',
        value: {
          lead: 'Dual-mode satellite timing & time-keeping engine enabling microsecond-level precision in wide-area system synchronization for seismic acquisition.',
          bullets: [
            'Intermittent GNSS clock synchronization strategy: timing accuracy less than ± 5us, supports > 45 day battery life (not recommended for deep planting applications).',
            'Configurable GNSS continuous mode: adopts GNSS satellite continuous timing strategy to maintain GNSS synchronization when deeply buried.',
          ],
        },
      },
      {
        label: 'RapidScan™',
        value: {
          lead: 'Field Wireless Quality Control',
          groups: [
            {
              heading: 'Integrated low-power BLE supports:',
              bullets: [
                'Field operation management',
                'Device self-test',
                'Wireless status monitoring',
                'Single shot record retrieval',
              ],
            },
            {
              heading: 'Key Functions:',
              bullets: [
                'Device Discovery',
                'Status Query',
                'Self-Diagnostics',
                'Real-time Waveform Monitoring',
                'Precision Locating (with satellite positioning unit for buried equipment tracking)',
              ],
            },
          ],
        },
      },
      { label: 'iFlyScan™', 
        value: {
          lead: 'Long-Range UAV Patrol QC',
          bullets: [
            'Ground communication range ≥20m',
            'Aerial communication range ≥100m',
            'Supports manual, vehicle-based, and UAV-assisted inspection modes',
          ],
        },
      },
    ],
  },

  sections: {
    solution: { heading: 'Solutions' },
    coreTechnology: { heading: 'Core technology' },
    majorProducts: { heading: 'Major products' },
    news: { heading: 'News' },
    recentNews: { heading: 'Recent news' },
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

  productCenter: {
    title: 'Products',
    intro:
      '',
    categories: [
      {
        id: 'seismic',
        title: 'Seismic acquisition',
        description:
          '',
        abbreviations: [
          'LF = Low Frequency',
          'C = Component',
          'HR = High Resolution',
        ],
      },
      {
        id: 'sensors',
        title: 'Intelligent sensors',
        description:
          '',
      },
      {
        id: 'maintenance',
        title: 'Predictive maintenance',
        description:
          '',
      },
      {
        id: 'data',
        title: 'Data processing & analysis',
        description:
          '',
      },
      {
        id: 'urban',
        title: 'Urban subsurface investigation',
        description:
          '',
      },
    ],
  },

  cases: [
    {
      title: 'Fugu County 3D seismic survey',
      excerpt:
        '',
      href: '/cases/fugu-3d/',
      body: [
        'The survey area in Fugu County, northwest China, covers ~301 km² of typical loess plateau terrain with dense vegetation, elevations of 984–1,386 m, and 402 m of relief. The design called for 21,818 shots, 47,692 receiver points, and 40 m group interval.',
        {
          heading: 'Equipment deployed:',
          bullets: [
            {
              parts: [
                { type: 'link', label: 'ALLSEIS-1C', href: '/products/allseis-1c/' },
                { type: 'text', value: ' — 30,000 channels' },
              ],
            },
            'Standard data download cabinets — 4',
            'Standard charging cabinets — 25',
            'Download servers — 2',
            'SDM server — 1',
            'BoomBox-III — 21 units',
            'UAV — 1',
          ],
        },
        {
          heading: 'Field efficiency:',
          bullets: [
            'Field crew — 65 personnel',
            'Average daily deployment — ~2,500 channels',
            'Average daily recovery — ~2,500 channels',
            'Average daily UAV line QC — ~3,000 channels',
            'Average daily raw data download — 9 TB',
            'Average daily shots — 1,066',
            'Project duration — 21 days',
            'Bad channel rate — below 0.3%',
          ],
        },
        'Acquisition ran from 20 May to 8 June 2023. Daily shot counts ramped up, peaking at 2,046 shots on 7 June. Overall efficiency and data quality met project requirements.',
      ],
    },
    {
      title: 'I-Nodal cable-free seismic acquisition system achieves large-scale deployment success',
      excerpt:
        "",
      href: '/cases/i-nodal-large-scale-application/',
      body: [
        { section: '1. Technical background' },
        "As the world's largest oil importer, China's dependence on foreign oil and gas reached 69.8% and 45.3% in 2018, rising to 72% and 46% by 2021. National policy now calls for stronger domestic exploration to safeguard energy security. Exploration technology and equipment determine recoverable resources and project economics. At the 2020 Two Sessions, Sinopec Chairman Yongsheng Ma highlighted the need to localize major oil and gas equipment and reduce 'stranglehold' supply-chain risks, especially for advanced geophysical instruments.",
        "Land seismic acquisition systems are among the most critical geophysical tools in petroleum exploration. Because of demanding synchronization, harsh field conditions, and complex architectures, manufacturing has long been dominated by a few foreign vendors. China's mainstream systems have been led by cable-based platforms such as Sercel 428, with 100k-channel-class systems emerging more recently. Domestic R&D efforts struggled to reach practical deployment until node-based architectures matured.",
        { images: ['/cases/i-nodal/Screenshot 2026-05-28 at 17.06.26.jpeg'] },
        "Since the early 2000s, cable-free 'nodal' systems—exemplified by Geospace GSR, Fairfield ZLAND, and INOVA HAWK—have offered simpler architecture, unlimited channel count, and flexible deployment for high-density surveys. Offline 'blind recording,' however, could not match cabled systems for real-time QC and data recovery, limiting adoption. Online autonomous acquisition with wireless QC became a strategic priority for closing the technology gap.",
        { section: '2. Development path' },
        'GDST began core nodal R&D in 2012 and introduced FLEXSEIS in 2014—the first domestic cable-free nodal system with real-time data recovery, widely used in microseismic and engineering applications.',
        "From 2016 to 2018, with Sinopec support, the team co-developed a fully integrated cable-free system with Sinopec Geophysical. By December 2017, an 800-node prototype with field terminals and centralized charge/download racks was built. From February to July 2018, trials in multiple provinces and terrains compared results with Sercel 428XL and INOVA G3i HD, confirming data quality on par with leading cabled systems. The project passed acceptance in September 2018 and won Sinopec's 2019 first prize for science and technology progress.",
        { images: ['/cases/i-nodal/Screenshot 2026-05-28 at 17.08.40.jpeg'] },
        "By late 2018, with support from Sinopec Shengli Petroleum Administration, engineering trial production reached 5,000 nodes and entered large 3D pilot projects—including salt-city trials, mixed node/cable surveys, and desert deployments. The fully integrated domestic system was formally named the I-Nodal nodal seismic acquisition system, a core part of Sinopec Geophysical's I-technology family.",
        { section: '3. Field results' },
        {
          parts: [
            {
              type: 'text',
              value:
                'From September to November 2019, under unified Sinopec planning, the ',
            },
            { type: 'link', label: 'I-Nodal', href: '/products/i-nodal/' },
            {
              type: 'text',
              value:
                ' system completed its first batch production of 31,000 units for the large-scale Shanghe 2020 3D hybrid survey. The project deployed 56,000 channels (31,000 I-Nodal nodes and 25,000 Sercel-508 cabled channels), covering about 300 km² full-fold area. Daily production averaged nearly 1,000 shots, 20% above the eastern China average at the time, finishing 14 days ahead of schedule. Bad traces were below 0.4%, well under the 3–5% typical for international nodal products.',
            },
          ],
        },
        { images: ['/cases/i-nodal/Screenshot 2026-05-28 at 17.08.57.jpeg'] },
        'During COVID-19 disruptions in 2020, nodal acquisition proved especially resilient. By end of 2021, more than 85,000 I-Nodal units had been delivered to Sinopec, supporting 28 large 3D projects across North China, East China, Northwest, and Southwest. Over 2.3 million shots were acquired with data recovery above 99%, delivering strong economic and quality outcomes.',
        {
          parts: [
            {
              type: 'text',
              value:
                'Large-scale I-Nodal deployment marked a zero-to-one breakthrough for fully domestic land seismic acquisition equipment. In May 2021, China Petrochemical News covered I-Nodal under the theme "nodal technology leads a new acquisition model" in a ',
            },
            {
              type: 'link',
              label: 'full-page feature report',
              href: 'http://enews.sinopecnews.com.cn/zgshb/html/2021-05/17/content_8645978.htm?div=-1',
            },
            {
              type: 'text',
              value:
                ", marking the centenary of the Party's founding. The team continues next-generation I-Nodal development to support national goals for million-channel digital seismic acquisition by 2025.",
            },
          ],
        },
        { images: ['/cases/i-nodal/Screenshot 2026-05-28 at 17.09.10.jpeg'] },
      ],
    },
  ],

  news: [
    {
      date: '2025-04-21',
      title: 'Conference | GDST at the 3rd China Petroleum Geophysics Academic Conference',
      excerpt:
        'More than 1,000 experts from 160+ energy companies, institutes, and universities gathered in Hangzhou. GDST showcased the ALLSEIS family of domestic seismic acquisition systems.',
      tags: ['Conference', 'Hangzhou'],
      href: '/news/geophys-academic-2025/',
      body: [
        'Experts from across the energy sector met in Hangzhou under the theme of innovative, precise, efficient, intelligent, and green geophysical technology for new productivity in challenging oil and gas exploration.',
        {
          parts: [
            {
              type: 'text',
              value:
                'General Manager Yongjun Lyu and CTO Chuan He led the team to present ALLSEIS domestic seismic acquisition equipment. Against the backdrop of U.S.–China tariffs, our domestically produced ',
            },
            { type: 'link', label: 'ALLSEIS-1C HR', href: '/products/allseis-1chr/' },
            { type: 'text', value: ' nodal system drew strong interest from delegates.' },
          ],
        },
        'GDST remains committed to domestic seismic acquisition R&D, delivering advanced, efficient products for energy exploration worldwide. With over 300,000 nodes produced and delivered from 2019 to 2023, and nearly 100 large-scale 3D seismic acquisition projects over 100,000 channels (TODO: verify accuracy of translation), the ALLSEIS series seismic acquisition nodes have received unanimous praise from customers for their industry-leading performance and cost-effectiveness. GDST will continue to strengthen its innovation efforts, leveraging leading technology and high-quality services to make greater contributions to geophysical exploration in China and globally.',
        { images: [...geophysAcademic2025Photos] },
      ],
    },
  ],

  helpCenter: {
    hubIntro: '',
    faqIntro: '',
    legalIntro: 'Terms of use, copyright, and disclaimers for this website.',
    downloadsIntro: 'Product manuals, how-to guides, and supporting softwares.',
    faqTitle: 'FAQ',
    faq: [
      {
        question: 'question1 (TODO: add)',
        answer:
          'answer1 (TODO: add)',
      },
    ],
    legalTitle: 'Legal notice (TODO: verify accuracy of translations for this page)',
    legalSections: [
      {
        paragraphs: [
          'Please read and agree to the following terms of use. These rules apply to all visitors. Beijing Geophysical Deep Sensing Technology Co., Ltd. may revise them at any time. If you do not agree, please stop using this website. We reserve the right to pursue legal action against misuse of site content.',
        ],
      },
      {
        heading: 'Copyright',
        paragraphs: [
          'Beijing Geophysical Deep Sensing Technology Co., Ltd. owns or co-owns copyright in materials on this website. No content may be copied or mirrored on servers not operated by the company without prior written permission.',
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
          'All materials are protected by copyright and owned by Beijing Geophysical Deep Sensing Technology Co., Ltd. (some images from CC0 sources, except cited third-party content). Commercial use without written permission is prohibited; limited personal download/print is allowed if unmodified and copyright notices are retained.',
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
          'Beijing Geophysical Deep Sensing Technology Co., Ltd. reserves the right of final interpretation of this notice and use of this website.',
        ],
      },
    ],
    downloadsTitle: 'Downloads',
    manualsTitle: 'Product manuals',
    guidesTitle: 'How-to guides',
    softwareTitle: 'Supporting softwares',
    guides: [
      { title: 'guide1 (TODO: add)', description: 'TODO: add', detail: 'TODO: add' },
    ],
    software: [
      { title: 'SeisDataManagement (SDM)', 
        description: '',
        detail: 'TODO: translate'
       },
      { title: 'In-field QC App.', 
        description: 'ALLSEIS-1C on-site quality control app for Android mobile.',
        detail: 'TODO: translate'
      },
    ],
  },

  aboutPage: {
    intro:
      'Founded in 2020, GDST draws on research institutes including the Institute of Geology and Geophysics, Chinese Academy of Sciences, and the School of Earth and Space Sciences, Peking University. We focus on intelligent sensing R&D and manufacturing, multi-dimensional multi-source data acquisition and processing, and big-data decision support for energy and mineral resources, industrial predictive maintenance, and smart cities. We develop proprietary smart sensors, data-acquisition nodes, and application systems, and deliver value-added services across data acquisition, storage, analytics, visualization, and applications. Guided by integrity in practice and unity of knowledge and action, we help customers advance digital innovation and domestic core exploration equipment—contributing to localized deep-resource detection capabilities for land, sea, and space.',
    honorsTitle: 'Honors & qualifications',
    qualificationsSubtitle: 'Qualifications',
    qualifications: [
      { src: '/certificates/HICs.jpeg', alt: 'HICs' },
      { src: '/certificates/北京中科中关村高新证书至2027.jpg', alt: 'Zhongguancun High-Tech Enterprise Certificate (Beijing)' },
      { src: '/certificates/地球物理学会科学进步二等奖-25年10月.jpg', alt: 'Second Prize for Scientific Progress, Geophysical Society' },
      { src: '/certificates/江苏瞪羚企业.jpg', alt: 'Jiangsu Gazelle Enterprise' },
      { src: '/certificates/苏州专精特新证书2027.jpg', alt: 'Suzhou Specialized and Innovative Enterprise Certificate' },
      { src: '/certificates/苏州博士后创新实践基地.jpg', alt: 'Suzhou Postdoctoral Innovation Practice Base' },
      { src: '/certificates/苏州高新至2026.png', alt: 'Suzhou High-Tech Enterprise Certificate' },
    ],
    ipSubtitle: 'Intellectual property',
    ipImage: '/certificates/知识产权叠放.png',
    intellectualProperty: [
      '50 independent IPs (including those in application): 11 invention patents, 9 utility model patents, 5 design patents, 24 software copyrights.',
    ],
    contactTitle: 'Contact us',
    offices: [
      {
        name: 'Beijing (China)',
        address: 'Room N1-308, Jinyu Intelligent Manufacturing Factory, Xisanqi, Haidian, Beijing',
        phone: '+86 010-8345 8087',
        email: 'service@geodeepsensing.com',
      },
      {
        name: 'Suzhou (China)',
        address: 'Room 102, Building 16, No. 158 Jinfeng Road, New District, Suzhou',
        phone: '+86 0512-6878 6291',
        email: 'service@geodeepsensing.com',
      },
      {
        name: 'London (UK)',
        address: '4th Floor, Silverstream House, 45 Fitzroy Street, Fitzrovia, London W1T 6EB, UK',
        phone: '+44 7975 829 456',
        email: 'service@geodeepsensing.com',
      },
      {
        name: 'Bolivia (South America)',
        address: 'Santa Cruz de la Sierra, Bolivia',
        phone: '+591 7560 7385',
        email: 'g.sordo@geodeepsensing.com',
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
          "Bachelor's or higher in electronics, automation, or computer science",
          'Familiar with digital and analog circuit design flows and EDA tools; able to complete schematics and PCB layout from logic design specs',
          'Able to write debug programs and test hardware to meet design requirements',
          'Proficient in reading English technical literature',
          'Strong ethics, teamwork, and dedication',
          'Eager to learn new skills and technologies',
        ],
      },
      {
        title: 'Embedded microprocessor development engineer',
        headcount: '2–3',
        salary: '8K–10K',
        requirements: [
          "Bachelor's or higher in electronics, automation, or computer science",
          '2–3 years of relevant experience',
          'Familiar with ARM/8051 embedded design flows and tools; able to develop low-level drivers',
          'Proficient in reading English technical literature',
          'Strong ethics, teamwork, and dedication',
          'Eager to learn new skills and technologies',
        ],
      },
    ],
    careersEmailNote: "Send your resume to service@geodeepsensing.com with the subject 'Position – Your Name'.",
  },
}
