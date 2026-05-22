import type { Content } from './types'

const sensorLinks = [
  { href: '/products/2hz-wideband-geophone/', label: '2Hz 有源力反馈式全向宽频检波器' },
  { href: '/products/125hz-land-geophone/', label: '1.25Hz 有源力反馈式宽频陆地检波器' },
]

const seismicLinks = [
  { href: '/products/allseis-1c/', label: 'ALLSEIS-1C 节点式地震采集系统' },
  { href: '/products/allseis-3c/', label: 'ALLSEIS-3C 三分量地震采集站' },
  { href: '/products/allseis-4clf/', label: 'ALLSEIS-4CLF 四分量短周期地震计' },
  { href: '/products/i-nodal/', label: 'I-Nodal 节点式全内置地震采集系统' },
  { href: '/products/allseis-1chr/', label: 'ALLSEIS-1C HR 节点式地震采集系统' },
]

export const zh: Content = {
  locale: 'zh',
  lang: 'zh-CN',
  homePath: '/',

  meta: {
    title: '北京中科深源科技有限公司 | Geophysical Deep Sensing Technology Co., Ltd.',
    description:
      '北京中科深源科技有限公司 — 节点地震仪与地学大数据，服务能源勘探、城市地下空间与智慧监测。',
  },

  ui: {
    skipToContent: '跳到主要内容',
    langSwitchLabel: '选择语言',
    mainNav: '主导航',
    mobileNav: '移动端导航',
    menu: '菜单',
    cta: '商务合作',
    rights: '保留所有权利。',
    founded: '成立于',
    missionPrefix: '使命 · ',
    viewMore: '查看更多新闻',
    learnMore: '了解产品详情',
    backToBusiness: '返回业务板块',
    backToHelp: '返回帮助',
    preparing: '资料准备中，可通过商务合作或技术支持获取最新版本。',
  },

  company: {
    name: '北京中科深源科技有限公司',
    shortName: '中科深源',
    nameEn: 'GDST',
    tagline: '软硬结合，探索深浅',
    description:
      '公司依托中国科学院地质与地球物理研究所、北京大学地球与空间科学学院等科研院所的技术力量，致力于能源与矿产资源、工业预测性维护、智慧城市领域的智能传感设备研发制造、多维多源数据采集与处理、大数据决策支持等服务。',
    address: '北京市海淀区西三旗金隅智造工场 N1-308 室',
    phone: '010-83458087',
    email: 'service@geodeepsensing.com',
    website: 'www.geodeepsensing.com',
    founded: '2020',
    techSupportPhone: '010-83458087',
  },

  navLinks: [
    { href: '/', label: '首页' },
    { href: '/business/', label: '业务板块' },
    { href: '/cases/', label: '客户案例' },
    { href: '/news/', label: '新闻' },
    { href: '/support/', label: '帮助' },
    { href: '/about/', label: '关于我们' },
  ],

  hero: {
    title: '中科深源科技股份有限公司',
    slides: [
      {
        subtitle: '面向能源勘探领域的探测装备自主化领导者',
        image: '/landscapes/namibia.jpg',
      },
      {
        subtitle: '面向工业与智慧城市领域的智能装备制造商和大数据服务商',
        image: '/landscapes/smart.jpg',
      },
      {
        subtitle: '面向城市地下空间一体化领域的解决方案提供商',
        image: '/landscapes/shanghai-urban.jpg',
      },
      {
        subtitle: '面向地学大数据领域的智慧科技领跑者',
        image: '/landscapes/aerial-view.jpg',
      },
    ],
  },

  stats: [
    { value: '200+', label: '用户数量' },
    { value: '300000+', label: '地震采集装备交付总量' },
    { value: '100+', label: '服务领域' },
    { value: '50+', label: '自有知识产权' },
  ],

  solution: {
    items: [
      '能源/矿产高精度勘探',
      '城市地下空间高精度勘探',
      '水力压裂/矿震监测',
      '工程灾害监测预警',
      '工业预测性维护监测',
      '天然气管线泄露监测',
      '滑坡监测',
      '油藏监测',
    ],
  },

  sections: {
    solution: { label: 'SOLUTION', heading: '解决方案' },
    majorProducts: { label: 'MAJOR PRODUCTS', heading: '主要产品' },
    recentProducts: { label: 'RECENT PRODUCTS', heading: '近期产品' },
    news: { label: 'NEWS', heading: '新闻' },
    recentNews: { label: 'RECENT NEWS', heading: '近期新闻' },
  },

  homepageNewsLimit: 4,

  business: {
    title: '业务板块',
    intro:  
      '围绕智能传感、地震采集、预防性维护、数据处理与分析、城市次表层研究五大方向，提供从装备研发到数据服务的完整能力。',
    segments: [
      {
        id: 'sensors',
        title: '智能传感器',
        description:
          '自主研发有源力反馈式宽频检波器，面向地震采集、工程勘察与长期监测，具备宽频响应与长期稳定等优势。',
        productLinks: sensorLinks,
      },
      {
        id: 'seismic',
        title: '地震采集',
        description:
          '节点式、三分量、四分量等地震采集系统，支持无缆自主采集与大规模高密度部署，服务能源勘探与城市地下空间探测。',
        productLinks: seismicLinks,
      },
      {
        id: 'predictive-maintenance',
        title: '预防性维护',
        description:
          '为工业装备与关键基础设施提供振动监测、状态评估与故障预判，降低非计划停机风险，提升运维效率。',
      },
      {
        id: 'data-processing',
        title: '数据处理与分析',
        description:
          '提供地震与电磁法数据处理、质控、成像与解释服务，结合地学大数据平台实现存储、计算与成果输出一体化。',
      },
      {
        id: 'urban-subsurface',
        title: '城市次表层研究',
        description:
          '面向 0–500 米城市地下空间精细探测，支撑城市规划、地质灾害调查、管线定位与地下空间安全利用。',
      },
    ],
  },

  products: [
    {
      name: 'ALLSEIS-1C节点式地震采集系统',
      subtitle: '单分量节点式地震采集系统',
      description:
        '面向能源、矿产与工程勘探的节点式地震采集装备，支持高密度、大规模野外部署。',
      highlights: ['节点式采集', '高密度部署', '能源勘探'],
      href: '/products/allseis-1c/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/49068950.png',
    },
    {
      name: 'ALLSEIS-3C 三分量地震采集站',
      subtitle: '三分量地震采集站',
      description:
        '三分量一体化采集装备，服务城市地下空间精细勘探、复杂区域地质构造调查与监测。',
      highlights: ['三分量', '一体化采集', '地下空间'],
      href: '/products/allseis-3c/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/27446291.png',
    },
    {
      name: 'ALLSEIS-4CLF 四分量短周期地震计',
      subtitle: '四分量短周期地震计',
      description:
        '适用于地震监测、工程监测与多场景智能传感应用的四分量短周期地震计。',
      highlights: ['四分量', '短周期', '智能传感'],
      href: '/products/allseis-4clf/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/27047828.png',
    },
    {
      name: 'I-Nodal节点式全内置地震采集系统',
      subtitle: '节点式全内置地震采集系统',
      description:
        '地震勘探无缆自主采集系统，单道独立、无需缆连，适合大规模高密度部署。',
      highlights: ['无缆自主采集', '全内置', '规模化应用'],
      href: '/products/i-nodal/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/42128135.png',
    },
    {
      name: 'ALLSEIS-1C HR 节点式地震采集系统',
      subtitle: '高分辨率节点式地震采集系统',
      description:
        '面向高精度地震采集需求的节点式装备，延续自主可控、便携部署与多场景应用能力。',
      highlights: ['高分辨率', '节点式', '自主可控'],
      href: '/products/allseis-1chr/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/52917172.png',
    },
  ],

  secondaryProducts: [
    {
      name: '2Hz有源力反馈式全向宽频检波器',
      href: '/products/2hz-wideband-geophone/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/55920300.png',
    },
    {
      name: '1.25Hz有源力反馈式宽频陆地检波器',
      href: '/products/125hz-land-geophone/',
      image: 'https://img.wanwang.xin/contents/sitefiles2048/10243868/images/55951257.png',
    },
  ],

  cases: [
    {
      title: '深层油气与矿产勘探节点采集项目',
      excerpt: '采用 ALLSEIS 节点式采集系统，实现高密度无缆部署，显著提升复杂探区数据采集效率。',
    },
    {
      title: '城市地下空间精细探测工程',
      excerpt: '结合三分量采集与频率成像技术，为城市规划与地下空间安全利用提供高分辨率成果。',
    },
    {
      title: '工程灾害与矿震监测预警',
      excerpt: '面向滑坡、矿震、压裂等场景，提供持续监测、实时传输与数据分析服务。',
    },
    {
      title: '天然气管线泄漏监测',
      excerpt: '利用宽频传感与智能分析，实现管线沿线异常识别与预警响应。',
    },
    {
      title: '工业预测性维护监测',
      excerpt: '为关键设备与基础设施提供振动监测与故障预判能力。',
    },
    {
      title: '水力压裂与油藏监测',
      excerpt: '支撑压裂过程微震监测与油藏动态分析，服务油气开发精细管理。',
    },
  ],

  news: [
    {
      date: '2024-07-27',
      title: '中科深源参与工程地球物理专业委员会2024年学术年会',
      excerpt: '公司参与工程地球物理专业委员会学术年会，与行业伙伴交流工程地球物理技术应用。',
      tag: '新闻',
      href: '/news/engineering-geophysics-2024/',
    },
    {
      date: '2024-06-12',
      title: '中科深源再度亮相第85届EAGE年会',
      excerpt: '中科深源再度亮相 EAGE 年会，面向国际行业展示自主研发产品与解决方案。',
      tag: '新闻',
      href: '/news/eage-85/',
    },
    {
      date: '2024-09-12',
      title: '中科深源董事长吕永军受邀参加山西省物测院第十一期新技术新方法培训',
      excerpt: '中科深源围绕智能地球物理技术与装备开展交流，推动新技术新方法应用。',
      tag: '新闻',
      href: '/news/shanxi-training/',
    },
    {
      date: '2024-08-06',
      title: '河北省煤田地质局物测地质队一行到访中科深源参观交流',
      excerpt: '河北省煤田地质局物测地质队一行到访中科深源，就地球物理装备与应用展开交流。',
      tag: '新闻',
      href: '/news/hebei-visit/',
    },
    {
      date: '2023-05-27',
      title: '2023年中国国际油气勘探技术年会——中科深源与您相约北京',
      excerpt: '中科深源参加中国国际油气勘探技术年会，展示自主化地震采集与探测装备能力。',
      tag: '新闻',
      href: '/news/oil-gas-exploration-2023/',
    },
    {
      date: '2022-04-29',
      title: 'I-Nodal-V2 地震无缆自主采集系统完成产品定型与规模化试生产',
      excerpt: 'I-Nodal-V2 地震无缆自主采集系统完成产品定型与规模化试生产。',
      tag: '新闻',
      href: '/news/i-nodal-v2-production/',
    },
  ],

  helpCenter: {
    hubIntro: '常见问题、法律声明与资料下载，帮助您快速了解产品与获取支持。',
    faqIntro: '产品选型、技术支持与资料获取等常见问题解答。',
    legalIntro: '请您知悉并同意本网站如下所述的使用规则，所有规则适用于所有访问本网站的用户或浏览者，北京中科深源科技有限公司保留随时修改这些规则的权利。如访问本网站请遵循以下规则。如果您不同意下列所示的任何规则，请停止使用本网站。对不遵守本规则或其他违法、恶意使用本网站内容者，北京中科深源科技有限公司保留追究其法律责任的权利。',
    downloadsIntro: '产品手册、操作指南与配套软件资料集中下载。',
    faqTitle: '常见问题',
    faq: [
      {
        question: '问题1',
        answer:
          '答案1',
      },
      {
        question: '问题2',
        answer:
          '答案2',
      },
    ],
    legalTitle: '法律声明',
    legalSections: [
      {
        heading: '版权声明',
        paragraphs: [
          '北京中科深源科技有限公司拥有本网站相关网页内所有资料的版权，或与本网站相关网页内的资料提供者共同拥有该网页内资料的版权。未经北京中科深源科技有限公司的明确书面许可，对于本网站上的任何内容，任何人不得对其进行复制或在非北京中科深源科技有限公司所属的服务器上做镜像。',
          '本网站所载述的域名、商标、文字、视像及声音内容、图形及图像均受有关商标和著作权的法律保护。未经北京中科深源科技有限公司事先以书面明确的允许，任何企业或个人不得以任何形式复制或传递。任何未经授权使用本网站的行为都将违反《中华人民共和国著作权法》和其他相关法律法规以及有关国际公约的规定。',
        ],
      },
      {
        heading: '免责条款',
        paragraphs: [
          '对本网站的内容，包括但不限于文本、图片、数据、观点、建议、网页或链接，我们虽然力图在网站上提供准确的材料和信息，但并不保证这些材料和内容的准确、完整、充分和可靠性，并且明确声明不对这些材料和内容的错误或遗漏承担责任，也不对这些材料和内容做出任何明示或默示的、包括但不限于有关所有权担保、没有侵犯第三方权利、质量和没有计算机病毒的保证。',
          '北京中科深源科技有限公司可随时更改本网站内容，无须另作通知，为了得到最新的资讯信息，请定时访问本网站。北京中科深源科技有限公司并不就网站上提供的任何产品、服务或信息做出任何声明、保证或认可，所有销售的产品和服务应受本公司的销售合同和条款的约束。',
          '本网站转载的相关图片、视频、文章、资料等中表述或暗示的观点不代表北京中科深源科技有限公司的观点。对于本网站所转载的信息如有著作权争议，请与我们联系并提供相应的证明资料。',
          '网站上所展示的第三方网站的链接并不构成我们对该第三方网站的保证，我们对于这些网站及其内容的有效性不负有责任。访问这些网站的超链接的风险由用户承担。',
        ],
      },
      {
        heading: '著作权说明',
        paragraphs: [
          '本网站所载的所有材料或内容受版权法的保护，所有版权由北京中科深源科技有限公司拥有（部分图形、图像等图片内容来源于基于 CC0 协议的素材网站），但注明引用其他方的内容除外。未经北京中科深源科技有限公司或其他方事先书面许可，任何人不得将本网站上的任何内容以任何方式进行复制、经销、翻印、播放、以超级链路连接或传送、以「镜像法」载入其他服务器上、存储于信息检索系统或者其他任何商业目的的使用，但对于非商业目的的、个人使用的下载或打印（条件是不得修改，且须保留该材料中的版权说明或其他所有权的说明）除外。',
        ],
      },
      {
        heading: '商标',
        paragraphs: [
          '北京中科深源科技有限公司网站上使用的所有北京中科深源科技有限公司商标、标志均为北京中科深源科技有限公司注册商标及标志，未经北京中科深源科技有限公司书面授权，任何单位或个人不得以任何方式使用上述商标、标志。',
        ],
      },
      {
        heading: '其他网站的链接',
        paragraphs: [
          '本网站中所链接的北京中科深源科技有限公司以外的网站，不在北京中科深源科技有限公司的管理之下。对因通过北京中科深源科技有限公司网站访问其他链接网站而发生的任何损害，北京中科深源科技有限公司不承担任何责任。访问链接网站时，请遵循其链接网站的使用条款及相关法律法规的规定。北京中科深源科技有限公司仅为方便访问而提供他方网站的链接，并非是对链接网站的使用及其登载商品/服务等进行推举，并不意味着北京中科深源科技有限公司与所链接网站的公司、个人之间有着联合、协作等特殊关系，也并不表示北京中科深源科技有限公司认可或承担其他网站内容或使用上的责任。',
        ],
      },
      {
        heading: '病毒免责条款',
        paragraphs: [
          '任何人在进入、使用、浏览北京中科深源科技有限公司网站时，感染病毒，北京中科深源科技有限公司不承担任何责任。通过北京中科深源科技有限公司链接到第三方网站而感染病毒的，北京中科深源科技有限公司不承担任何责任。',
          '本声明的解释权及对本网站使用的解释权归北京中科深源科技有限公司所有。',
        ],
      },
    ],
    downloadsTitle: '资料下载',
    manualsTitle: '产品手册',
    guidesTitle: '操作指南',
    softwareTitle: '配套软件',
    guides: [
      { title: 'ALLSEIS 节点式采集系统野外部署指南', description: '涵盖站点布设、质控检查与常见故障排查。' },
      { title: 'I-Nodal 无缆采集系统快速上手', description: '面向首次部署用户的配置与启动流程说明。' },
      { title: '宽频检波器安装与维护手册', description: '检波器耦合、标定与长期维护注意事项。' },
    ],
    software: [
      {
        title: 'In-field QC App.',
        description: 'ALLSEIS-1C现场质控软件，安卓手机版',
        detail:
          '收集的野外节点信息包括采样参数、存储状态、供电、温度、倾斜、环境噪声等。可以通过SDM软件访问并生成图形/表格报告，从而进一步优化整个采集周期的施工效率。',
      },
    ],
  },

  aboutPage: {
    intro:
      '北京中科深源科技有限公司成立于2020年，公司依托中国科学院地质与地球物理研究所、北京大学地球与空间科学学院等科研院所的技术力量，致力于能源与矿产资源、工业预测性维护、智慧城市领域的智能传感设备研发制造、多维多源数据采集与处理、大数据决策支持等服务。中科深源研发和制造具有自主知识产权的多类型智能传感器、数据采集节点设备与应用系统，并据此提供大数据获取与处理、存储与管理、分析与挖掘、展现和应用等增值服务。公司秉承求真务实 知行合一的宗旨，协助客户以数字化科技创新及关键探测装备自主化的方式，积极参与资源与环境领域关键核心卡脖子技术与装备的研发及产业化，为实现深部资源探测核心装备国产化上天、入地、下海贡献力量。',
    honorsTitle: '荣誉资质',
    honorsSubtitle: '荣誉',
    honors: [
      '中关村高新技术企业',
      '北京市“专精特新”中小企业',
      '中科智汇工场优秀入驻企业',
      '多次亮相 EAGE 等国际行业展会',
    ],
    qualificationsSubtitle: '资质',
    qualifications: [
      '质量管理体系认证',
      '知识产权管理体系认证',
      '相关行业检测与试验资质（持续完善中）',
    ],
    ipSubtitle: '知识产权',
    intellectualProperty: [
      '50+ 项自有知识产权',
      '节点式地震采集系统相关发明专利',
      '宽频检波器与信号处理技术专利',
      '地学大数据平台软件著作权',
    ],
    contactTitle: '联系我们',
    offices: [
      {
        name: '北京｜中国',
        address: '北京市海淀区西三旗金隅智造工场 N1-308',
        phone: '+86 010-8345 8087',
        email: 'service@geodeepsensing.com',
      },
      {
        name: '苏州｜中国',
        address: '苏州市高新区锦锋路158号16栋102室',
        phone: '+86 0512-6878 6291',
        email: 'service@geodeepsensing.com',
      },
      {
        name: '伦敦｜英国',
        address: '4th Floor, Silverstream House, 45 Fitzroy Street, Fitzrovia, London W1T 6EB, UK',
        phone: '+44 7975 829 456',
        email: 'sales@geodeepsensing.com',
      },
      {
        name: '玻利维亚｜南美',
        address: 'Santa Cruz de la Sierra, Bolivia',
        phone: '+591 7560 7385',
        email: 'g.sordo@geodeepsensing.com',
      },
      
    ],
    careersTitle: '加入我们',
    openPositionsTitle: '正在招聘的岗位',
    jobHeadcountLabel: '招聘人数',
    jobSalaryLabel: '薪资待遇',
    jobSpecialNoteLabel: '特别说明',
    jobRequirementsLabel: '工作要求',
    openPositions: [
      {
        title: '电路开发工程师',
        headcount: '2-3人',
        salary: '8K-10K（2年以上工作经验）',
        specialNote:
          '如有 3 年以上硬件开发经验，具备独立硬件项目开发、设计、调试能力，扎实的模拟与数字电路基础，熟练掌握嵌入式处理器及外围电路设计，具备常见硬件接口电路设计调试经验，薪资可至 20K。',
        requirements: [
          '电子、自控或计算机专业本科或以上学历；',
          '熟悉数字电路、模拟电路的设计开发流程，熟练使用相关设计软件及工具，能根据逻辑设计说明书完成原理图和 PCB 设计；',
          '能编写调试程序，测试或协助测试开发的硬件设备，确保按设计要求正常运行；',
          '熟练阅读和理解英文技术文献；',
          '具备良好的道德品质和团队合作精神，极强的敬业精神；',
          '具备良好的学习新知识、新能力。',
        ],
      },
      {
        title: '嵌入式微处理器开发工程师',
        headcount: '2-3人',
        salary: '8K-10K',
        requirements: [
          '电子、自控或计算机专业本科或以上学历；',
          '具有 2～3 年工作经验；',
          '熟悉 ARM/51 等嵌入式微处理器的设计开发流程，熟练使用相关设计软件及工具，能进行相应底层驱动开发；',
          '熟练阅读和理解英文技术文献；',
          '具备良好的道德品质和团队合作精神，极强的敬业精神；',
          '具备良好的学习新知识、新能力。',
        ],
      },
    ],
    careersEmailNote:
      '请发送简历至 service@geodeepsensing.com，邮件标题注明「应聘岗位-姓名」。',
  },

  legal: {
    publicSecurity: '京公网安备11010802038108号',
    icp: '京ICP备2021017956号',
  },
}
