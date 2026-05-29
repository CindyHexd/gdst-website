import { geophysAcademic2025Photos } from '../data/newsConferencePhotos'
import type { Content } from './types'

const sensorLinks = [
  { href: '/products/1hz-land-geophone/', label: '1 Hz 有源力反馈式宽频陆地检波器' },
  { href: '/products/2hz-broadband-geophone/', label: '2Hz 有源力反馈式全向宽频检波器' },
]

const seismicLinks = [
  { href: '/products/allseis-1c/', label: 'ALLSEIS-1C' },
  { href: '/products/allseis-1chr/', label: 'ALLSEIS-1C HR' },
  { href: '/products/allseis-1c-neo/', label: 'ALLSEIS-1C Neo' },
  { href: '/products/allseis-1c-neo-hr/', label: 'ALLSEIS-1C Neo HR' },
  { href: '/products/allseis-1clf/', label: 'ALLSEIS-1C LF' },
  { href: '/products/allseis-3c/', label: 'ALLSEIS-3C' },
  { href: '/products/allseis-3clf/', label: 'ALLSEIS-3C LF' },
  { href: '/products/allseis-4clf/', label: 'ALLSEIS-4C LF' },
  { href: '/products/allseis-ob2c/', label: 'ALLSEIS-OB2C' },
  { href: '/products/allseis-ob4clf/', label: 'ALLSEIS-OB4C LF' },
  { href: '/products/i-nodal/', label: 'I-Nodal-2 节点式全内置地震采集系统' },
]

export const zh: Content = {
  locale: 'zh',
  lang: 'zh-CN',
  homePath: '/',

  meta: {
    title: '中科深源',
    description:
      '北京中科深源科技有限公司',
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
    download: '下载',
    downloadZh: '中文版',
    downloadEn: '英文版',
    backToBusiness: '返回业务板块',
    backToProducts: '返回产品中心',
    backToHelp: '返回帮助',
    backToNews: '返回新闻中心',
    backToCases: '返回客户案例',
    preparing: '资料准备中。',
    newsDetailPlaceholder:
      '本页面为本地站点新闻详情页，用于承载原首页新闻中心条目。后续可继续补充活动图片、会议议程、客户交流纪要与媒体资料。',
    caseDetailPlaceholder: '案例详情内容待补充',
    newsHubIntro: '中科深源产品定型、行业会议、客户交流与学术活动动态。',
    helpHubTitle: '帮助',
    aboutPageTitle: '关于我们',
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
    {
      href: '/products/',
      label: '产品中心',
      children: [
        { href: '/products/#seismic', label: '地震采集' },
        { href: '/products/#sensors', label: '智能传感器' },
        { href: '/products/#maintenance', label: '预防性维护' },
        { href: '/products/#data', label: '数据处理与分析' },
        { href: '/products/#urban', label: '城市次表层研究' },
      ],
    },
    { href: '/cases/', label: '客户案例' },
    { href: '/news/', label: '新闻' },
    {
      href: '/support/',
      label: '帮助',
      children: [
        { href: '/support/faq/', label: '常见问题' },
        { href: '/support/legal/', label: '法律声明' },
        { href: '/downloads/', label: '资料下载' },
      ],
    },
    {
      href: '/about/',
      label: '关于我们',
      children: [
        { href: '/about/#honors', label: '荣誉资质' },
        { href: '/about/#contact', label: '联系我们' },
        { href: '/about/#careers', label: '加入我们' },
      ],
    },
  ],

  hero: {
    title: '中科深源',
    slides: [
      {
        subtitle: '面向能源勘探领域的探测装备自主化领导者',
        image: '/bg/namibia.jpg',
      },
      {
        subtitle: '面向工业与智慧城市领域的智能装备制造商和大数据服务商',
        image: '/bg/smart.jpg',
      },
      {
        subtitle: '面向城市地下空间一体化领域的解决方案提供商',
        image: '/bg/shanghai-urban.jpg',
      },
      {
        subtitle: '面向地学大数据领域的智慧科技领跑者',
        image: '/bg/aerial-view.jpg',
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

  coreTechnology: {
    rows: [
      { label: 'DualSync™', value: 'TODO: translate' },
      { label: 'RapidScan™', value: 'TODO: translate' },
      { label: 'iFlyScan™', value: 'TODO: translate' },
    ],
  },

  sections: {
    solution: { heading: '解决方案' },
    coreTechnology: { heading: '核心技术' },
    majorProducts: { heading: '主要产品' },
    news: { heading: '新闻' },
    recentNews: { heading: '近期新闻' },
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
          '',
        productLinks: sensorLinks,
      },
      {
        id: 'seismic',
        title: '地震采集',
        description:
          '',
        productLinks: seismicLinks,
      },
      {
        id: 'predictive-maintenance',
        title: '预防性维护',
        description:
          '',
      },
      {
        id: 'data-processing',
        title: '数据处理与分析',
        description:
          '',
      },
      {
        id: 'urban-subsurface',
        title: '城市次表层研究',
        description:
          '',
      },
    ],
  },

  productCenter: {
    title: '产品中心',
    intro: '',
    categories: [
      {
        id: 'seismic',
        title: '地震采集',
        description: '',
        abbreviations: [
          'LF = Low Frequency（低频）',
          'C = Component（分量）',
          'HR = High Resolution（高分辨率）',
        ],
      },
      {
        id: 'sensors',
        title: '智能传感器',
        description:
          '',
      },
      {
        id: 'maintenance',
        title: '预防性维护',
        description:
          '',
      },
      {
        id: 'data',
        title: '数据处理与分析',
        description:
          '',
      },
      {
        id: 'urban',
        title: '城市次表层研究',
        description:
          '',
      },
    ],
  },

  cases: [
    {
      title: '府谷县三维勘探项目',
      excerpt: '',
      href: '/cases/fugu-3d/',
      body: [
        '项目位于中国西北部府谷县，为典型黄土塬地貌，工区面积约 301 km²，植被繁茂，海拔 984–1386 m，相对高差 402 m。勘探设计总炮数 21,818 炮，检波点 47,692 个，道距 40 m。',
        {
          heading: '应用设备：',
          bullets: [
            {
              parts: [
                { type: 'link', label: 'ALLSEIS-1C', href: '/products/allseis-1c/' },
                { type: 'text', value: ' 30,000 道' },
              ],
            },
            '标准数据下载柜 4 台',
            '标准充电柜 25 台',
            '下载服务器 2 台',
            'SDM 服务器 1 台',
            'BoomBox-III 21 部',
            '无人机 1 架',
          ],
        },
        {
          heading: '施工效率：',
          bullets: [
            '现场人员 65 人',
            '日均布设道数约 2,500',
            '日均回收道数约 2,500',
            '日均无人机巡线道数约 3,000',
            '日均原始数据下载量 9 TB',
            '日均炮数 1,066',
            '项目周期 21 天',
            '废道率低于 0.3%',
          ],
        },
        '2023 年 5 月 20 日至 6 月 8 日完成全部采集，单日炮数逐步攀升，6 月 7 日达到峰值 2,046 炮，整体施工效率与数据质量满足项目要求。',
      ],
    },
    {
      title: 'I-Nodal地震勘探无缆自主采集系统大规模应用取得丰硕成果',
      excerpt:
        '',
      href: '/cases/i-nodal-large-scale-application/',
      body: [
        { section: '1. 技术背景' },
        '我国作为世界头号石油进口国，2018年石油与天然气对外依存度分别为69.8%和45.3%，2021年更进一步攀升至72%和46%。据此国家提出大力提升国内油气勘探开发力度，保障国家能源安全的口号。油气勘探技术及装备的水平决定了可开采资源量及开采的经济性，在增储上产、降本增效、推进油气田的高效勘探和效益开发方面扮演了举足轻重的作用。全国政协委员、中国石化集团公司董事长马永生院士在2020年两会期间，题为《推进石油石化重大技术装备国产化 防范化解“卡脖子”风险》的发言中提出：“重大技术装备是国之重器，事关综合国力和国家安全。但部分关键核心装备仍依赖国外制造，成为制约我国石油石化行业高质量发展、危及产业链安全的瓶颈。这方面突出表现在，部分特殊条件井下测控装备等存在空白，先进地球物理装备、大型压缩机等方面与国外制造存在一定差距。”',
        '物探地震采集仪器是石油地震勘探中最为关键的先进地球物理装备之一。数字地震仪系统由于其极高的同步采集性能与恶劣的操作使用条件，加之复杂的系统架构和通讯组网方式，设备制造长期为国外少数专业公司所垄断。国内所使用的主流数字地震仪系统以法国Sercel-428万道地震仪为代表，十万道级系统（UniQ、G3i、Sercel-508）也于近年出现并逐步进入实用阶段。国内多家油公司及科研院所曾分别组织技术团队开展地震采集装备研发攻关，但是一直未能取得突破性进展，研发样机无法达到实用化阶段。',
        { images: ['/cases/i-nodal/Screenshot 2026-05-28 at 17.06.26.jpeg'] },
        '本世纪初，以摆脱线缆束缚、自主记录地震数据为设计理念的“节点”式地震采集设备不断面世。这些设备以美国Geospace公司GSR节点、美国Fairfield公司ZLAND节点、以及加拿大INOVA公司HAWK节点为代表，与传统有缆仪器相比具有系统架构简单、采集节点间无连接电缆、无道数限制、无布设限制等特点，更适合于高密度地震采集应用，代表了新一代物探采集仪器的发展方向。但是这些节点设备离线式“盲采”的工作方式无法实现常规有缆仪器采集数据现场回收和仪器状态实时监控的功能。这一缺点极大地影响了此类仪器的快速普及。在这一背景下，及早把握技术脉搏，以节点仪器为技术基点，依托现代无线通讯与网络技术的最新成果，研制开发具有采集数据现场回收和仪器状态实时监控功能的在线式地震勘探自主采集系统，拉平与国际主流物探仪器供应商之间的技术代差，并尽早完成产业化以求获得产品的先发优势，摆脱在国际竞争中受制于人的格局，对我国石油工业乃至整个国民经济的可持续发展具有非常现实的意义。',
        { section: '2. 研发历程' },
        '北京中科深源科技有限公司的技术团队早在2012年即开始节点式地震采集系统核心技术的研发与储备，2014年推出国内首套具有完全自主知识产权的、具备采集数据实时回传能力的FLEXSEIS无缆地震采集节点装备，在地震/微地震监测、工程勘察等领域得到了广泛应用。',
        '2016~2018年，在中国石化的大力支持下，技术团队协同石化工程地球物理有限公司，立项研发全内置型地震无缆自主采集系统。至2017年12月，顺利完成了包括800台无缆自主采集系统节点、6套手持终端及数据回收器及5套集中式数据回收与充电柜在内的节点式地震采集原型系统的生产与定制。2018年2月至7月，原型系统先后在山东、江苏、四川、内蒙古、新疆等不同探区，涉及平原、高大山区、沙漠、水网等不同地表，与法国Sercel公司的428XL、加拿大INOVA公司G3iHD等国外有缆地震采集装备进行了对比试验，验证了采集资料品质与国际主流有线仪器达到一致。这一科研项目于2018年9月通过验收，并获得中石化石油工程技术服务股份有限公司2019年度科技进步一等奖。',
        { images: ['/cases/i-nodal/Screenshot 2026-05-28 at 17.08.40.jpeg'] },
        '2018年底，在中石化胜利石油管理局的大力支持下，自主研发的节点式地震采集系统完成了5000台规模的工程化试生产，并立即投入到规模三维采集试验与示范工程应用中。系统先后参加了2019年1月盐家三维项目城市复杂区域节点采集试验（3500台节点，共接收5100炮）；2019年5月唐庄三维项目节点设备与有缆设备混合三维采集应用（4600台节点，共接收16700炮）；2019年7月新疆屯一井项目节点设备与有缆设备混合三维采集应用（6500台节点，共接收77200炮）等物探工程项目。通过在不同施工区域的一系列三维采集项目，验证了新型节点仪器产品与常规有线仪器相比较可大幅降低作业人员的劳动强度，提高生产效率，降低施工中的安全风险，减少对作业环境的影响。自此，自主研发的全内置型地震无缆自主采集节点仪器作为具有完全自主知识产权的首套国产陆上地震采集装备，正式命名为I-Nodal节点地震采集系统，成为中石化石油工程地球物理有限公司I-技术系列的核心组成部分之一。',
        { section: '3. 成果应用' },
        {
          parts: [
            {
              type: 'text',
              value:
                '2019年9月~11月，在中石化胜利石油管理局和中石化石油工程地球物理有限公司的统一安排下，',
            },
            { type: 'link', label: 'I-Nodal', href: '/products/i-nodal/' },
            {
              type: 'text',
              value:
                '节点地震采集系统完成了首批31000台设备的大规模批量生产，并投入中石化商河2020项目的大规模三维混合采集应用中。商河项目共设计炮点53325个，检波点428064个，投入采集设备56000台（其中I-Nodal节点采集设备31000台，Sercel-508有缆采集设备25000道），采集满次覆盖区域约300平方公里，施工区域600平方公里，范围涉及17个乡镇和580个村庄。I-Nodal节点地震采集系统的应用大幅降低了作业人员的劳动强度，提高生产效率，项目日炮效平均近千炮，较当时东部探区平均水平提高20%，比计划提前14天完成全部施工任务。单炮资料废道率低于0.4%，远优于国际同类节点产品3%~5%的水平，同时由于采用更为合理的块状全排列接收模式，覆盖次数更高，资料远偏移距信息更丰富，在局部细节刻画上更为清晰，深层信噪比优势明显。从炮后偏移剖面看，新剖面断面更清晰，侵入岩下信息更丰富，地震解释的可提升空间较大。',
            },
          ],
        },
        { images: ['/cases/i-nodal/Screenshot 2026-05-28 at 17.08.57.jpeg'] },
        '2020年伊始，受到新冠疫情的影响，物探采集部署中的人员与设备跨区域调动大面积受限，在这一大背景下，节点式地震采集施工方式的优势凸显。在中石化石油工程地球物理有限公司的统一安排下，I-Nodal节点地震采集系统的生产装备与施工应用进入高强度模式，至2021年底，I-Nodal节点地震采集系统累计向中石化完成交付8.5万台，先后在中石化华北、华东、西北、西南等主力探区参加了二十八个大规模物探三维采集项目施工，完成井炮、可控震源生产合计230余万炮，资料采收率均达到了99%以上，取得了良好的应用效果，实现了采集资料品质和经济效益“双丰收”，为中石化石油工程地球物理有限公司降本创优增效做出重大贡献。',
        {
          parts: [
            {
              type: 'text',
              value:
                'I-Nodal节点地震采集系统的成功研制与规模应用标志了具有完全自主知识产权的国产陆上地震采集装备实现零的突破。2021年5月，中国石化报以“节点技术引领地震采集新模式”为题对I-Nodal节点的技术与应用做了',
            },
            {
              type: 'link',
              label: '主题整版报道',
              href: 'http://enews.sinopecnews.com.cn/zgshb/html/2021-05/17/content_8645978.htm?div=-1',
            },
            {
              type: 'text',
              value:
                '，向建党100周年献礼。2021年底，在国家能源局、科技部共同编制印发的《十四五能源领域科技创新规划》中，提出了 “2025年实现百万道级全数字地震探测和深海智能化节点稳定可靠采集，完成智能高精度可控震源技术推广应用”的国家油气安全保障供应技术路线图。以此为目标，中科深源科技有限公司技术团队正以饱满的热情投入到新一代I-Nodal节点地震采集系统的研发工作中。团队秉承“求真务实 知行合一”的宗旨，全力协助中石化石油工程地球物理有限公司切实推进石油石化重大技术装备国产化，以科技创新加快推进资源规模化开发，高质量端好能源的饭碗。',
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
      title: '展会回顾 | 中科深源参展第三届中国石油物探学术年会',
      excerpt:
        '来自能源企业、科研院所、高校等160多家单位的1000余位专家学者齐聚杭州，展示我国物探技术最新成果，中科深源展示 ALLSEIS 系列国产化地震勘探采集装备。',
      tags: ['展会回顾', '杭州'],
      href: '/news/geophys-academic-2025/',
      body: [
        '来自能源企业、科研院所、高校等160多家单位的1000余位专家学者齐聚一堂，以“创新精准、高效、智能、绿色物探技术，发展高难领域油气勘探开发新质生产力”为主题，展示了我国物探技术的最新成果，探讨了行业的未来发展方向。',
        {
          parts: [
            {
              type: 'text',
              value:
                '中科深源总经理吕永军、技术总监何川带队，在此次年会中展示了我司自主研发的ALLSEIS系列国产化地震勘探采集装备产品。在中美关税战的大背景下，我司研制的国内首款全国产芯片',
            },
            { type: 'link', label: 'ALLSEIS-1C HR', href: '/products/allseis-1chr/' },
            { type: 'text', value: '型节点仪器获得了众多与会专家和代表的广泛关注。' },
          ],
        },
        '中科深源始终致力于国产化地震勘探采集装备的研发，为能源勘探行业提供先进、高效、易用的产品和解决方案。凭借2019~2023五年间30余万道节点的生产交付总量及近百个万道以上大规模三维地震采集项目施工经历，ALLSEIS系列地震采集节点以其行业领先的性能指标及性价比优势得到了客户的一致好评。公司将继续加强创新力度，以领先的技术和优质的服务，为中国乃至全球的物探事业做出更大的贡献。',
        { images: [...geophysAcademic2025Photos] },
      ],
    },
  ],

  helpCenter: {
    hubIntro: '',
    faqIntro: '',
    legalIntro: '请您知悉并同意本网站如下所述的使用规则，所有规则适用于所有访问本网站的用户或浏览者，北京中科深源科技有限公司保留随时修改这些规则的权利。如访问本网站请遵循以下规则。如果您不同意下列所示的任何规则，请停止使用本网站。对不遵守本规则或其他违法、恶意使用本网站内容者，北京中科深源科技有限公司保留追究其法律责任的权利。',
    downloadsIntro: '产品手册、操作指南与配套软件下载途径。',
    faqTitle: '常见问题',
    faq: [
      {
        question: '问题1（待添加）',
        answer:
          '答案1',
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
      { title: '指南1（TODO: add）', 
        description: '指南1描述。'
      },
    ],
    software: [
      {
        title: 'SeisDataManagement (SDM)',
        description: '',
        detail:
          '主要功能包括：节点脚本配置、节点功能及性能诊断、节点部署和回收管理、地震数据下载整理及合并、炮集与接收集创建、可控震源关联与叠加、输出格式 SEG-Y 或 SEG-D、有缆/无缆设备混合采集数据合并、地震道产率计算、地震数据质量控制、图表报告生成。建议 SDM 服务器配置全固态硬盘 RAID 阵列，以实现高吞吐量的数据处理。',
      },
      {
        title: 'In-field QC App.',
        description: 'ALLSEIS-1C安卓手机版现场质控软件',
        detail:
          '这一手持QC质控工具可在人工、车辆或无人机进行节点布设和回收时实现导航和路径引导、节点工作状态查询、修改配置信息及实时地震波检验。In-field QC App.搜集的野外节点信息，包括采样参数、存储状态、供电、温度、倾斜、环境噪声等，可以通过SDM软件访问并生成图形/表格报告，从而进一步优化整个采集周期的施工效率。',
      },
    ],
  },

  aboutPage: {
    intro:
      '北京中科深源科技有限公司成立于2020年，公司依托中国科学院地质与地球物理研究所、北京大学地球与空间科学学院等科研院所的技术力量，致力于能源与矿产资源、工业预测性维护、智慧城市领域的智能传感设备研发制造、多维多源数据采集与处理、大数据决策支持等服务。中科深源研发和制造具有自主知识产权的多类型智能传感器、数据采集节点设备与应用系统，并据此提供大数据获取与处理、存储与管理、分析与挖掘、展现和应用等增值服务。公司秉承求真、务实、知行合一的宗旨，协助客户以数字化科技创新及关键探测装备自主化的方式，积极参与资源与环境领域关键核心卡脖子技术与装备的研发及产业化，为实现深部资源探测核心装备国产化上天、入地、下海贡献力量。' ,    
      honorsTitle: '荣誉资质',
    qualificationsSubtitle: '资质',
    qualifications: [
      { src: '/certificates/HICs.jpeg', alt: 'HICs' },
      { src: '/certificates/北京中科中关村高新证书至2027.jpg', alt: '北京中科中关村高新证书' },
      { src: '/certificates/地球物理学会科学进步二等奖-25年10月.jpg', alt: '地球物理学会科学进步二等奖' },
      { src: '/certificates/江苏瞪羚企业.jpg', alt: '江苏瞪羚企业' },
      { src: '/certificates/苏州专精特新证书2027.jpg', alt: '苏州专精特新证书' },
      { src: '/certificates/苏州博士后创新实践基地.jpg', alt: '苏州博士后创新实践基地' },
      { src: '/certificates/苏州高新至2026.png', alt: '苏州高新技术企业证书' },
    ],
    ipSubtitle: '知识产权',
    intellectualProperty: [
      '50项授权及申请中知识产权，其中发明专利11项、实用新型专利9项，外观专利5项，软件著作权24项。',
    ],
    ipImage: '/certificates/知识产权叠放.png',
    contactTitle: '联系我们',
    offices: [
      {
        name: '北京（中国）',
        address: '北京市海淀区西三旗金隅智造工场 N1-308',
        phone: '+86 010-8345 8087',
        email: 'service@geodeepsensing.com',
      },
      {
        name: '苏州（中国）',
        address: '苏州市高新区锦锋路158号16栋102室',
        phone: '+86 0512-6878 6291',
        email: 'service@geodeepsensing.com',
      },
      {
        name: '伦敦（英国）',
        address: '4th Floor, Silverstream House, 45 Fitzroy Street, Fitzrovia, London W1T 6EB, UK',
        phone: '+44 7975 829 456',
        email: 'sales@geodeepsensing.com',
      },
      {
        name: '玻利维亚（南美）',
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
          '电子、自控或计算机专业本科或以上学历',
          '熟悉数字电路、模拟电路的设计开发流程，熟练使用相关设计软件及工具，能根据逻辑设计说明书完成原理图和 PCB 设计',
          '能编写调试程序，测试或协助测试开发的硬件设备，确保按设计要求正常运行',
          '熟练阅读和理解英文技术文献',
          '具备良好的道德品质和团队合作精神，极强的敬业精神',
          '具备良好的学习能力',
        ],
      },
      {
        title: '嵌入式微处理器开发工程师',
        headcount: '2-3人',
        salary: '8K-10K',
        requirements: [
          '电子、自控或计算机专业本科或以上学历',
          '具有 2～3 年工作经验',
          '熟悉 ARM/51 等嵌入式微处理器的设计开发流程，熟练使用相关设计软件及工具，能进行相应底层驱动开发',
          '熟练阅读和理解英文技术文献',
          '具备良好的道德品质和团队合作精神，极强的敬业精神',
          '具备良好的学习能力',
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
