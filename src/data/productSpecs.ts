import type { Locale } from '../i18n/types'

export interface ProductSpecSection {
  title?: string
  rows: { label: string; value: string }[]
}

export interface ProductDetailExtras {
  applications: string
  specSections: ProductSpecSection[]
  comparison?: { title?: string; headers: string[]; rows: string[][] }
}

const zh: Record<string, ProductDetailExtras> = {
  'allseis-1c': {
    applications:
      '面向油气与矿产高精度勘探、复杂地表高密度二维/三维地震采集；支持无缆自主部署、内置或外接检波器串（KCK）。',
    specSections: [
      {
        title: '采集与传感器',
        rows: [
          { label: '传感器', value: '5 Hz（5–150 Hz）或 10 Hz（10–240 Hz）；KCK 外接串可选' },
          { label: 'ADC', value: '24 位 Δ-Σ' },
          { label: '采样间隔', value: '0.5 / 1 / 2 / 4 ms' },
          { label: '增益', value: '×1 / ×4 / ×16（0 / 12 / 24 dB）' },
          { label: '输入阻抗', value: '40 kΩ‖22 nF（5 Hz）；20 kΩ‖22 nF（10 Hz）' },
        ],
      },
      {
        title: '动态范围与存储',
        rows: [
          { label: '瞬时动态范围 @1 ms', value: '125 dB @ ×1' },
          { label: '满量程动态范围', value: '145 dB' },
          { label: '等效输入噪声 @1 ms', value: '1 μV @ ×1；0.25 μV @ ×4' },
          { label: '存储', value: '16 GB（可选 32 GB）' },
          { label: '续航', value: '52/60 Wh → 28–33 天（670–800 h）' },
        ],
      },
      {
        title: '同步与野外能力',
        rows: [
          { label: '授时', value: '±10 μs（GNSS）；守时 ±1 ms / 1 h' },
          { label: '尺寸 / 重量', value: '9.8×10.8×11 cm；750 g（带尾椎 800 g）' },
          { label: '工作温度', value: '−40～+70 °C；IP68；5VA、F1' },
          { label: '蓝牙 QC', value: '地面约 20 m，空中 >100 m；支持无桩 P&R 模式' },
        ],
      },
    ],
  },
  'allseis-1chr': {
    applications:
      '国产核心芯片节点系统，面向超高采样率与深层埋藏连续 GNSS 授时场景；指标达国际领先水平。',
    specSections: [
      {
        title: '采集性能',
        rows: [
          { label: 'ADC', value: '32 位' },
          { label: '采样间隔', value: '0.25 / 0.5 / 1 / 2 / 4 ms' },
          { label: '增益', value: '×1～×64（0–36 dB 可调）' },
          { label: '瞬时动态范围 @4 ms', value: '130 / 128 / 123 / 114 dB' },
          { label: '满量程动态范围', value: '150 dB' },
          { label: '带宽 @0.25 ms', value: '0–1652 Hz（−3 dB）' },
        ],
      },
      {
        title: '续航与授时',
        rows: [
          { label: '电池 / 续航', value: '52 Wh → >35 天；间歇 GNSS 850+ h' },
          { label: '连续 GNSS', value: '±1 μs（深埋场景）' },
          { label: '间歇 GNSS', value: '±10 μs' },
          { label: '资产标识', value: 'RFID；可选 −55 °C 版本' },
        ],
      },
    ],
    comparison: {
      title: '与 ALLSEIS-1C Neo 对比',
      headers: ['参数', '1C HR', '1C Neo'],
      rows: [
        ['最小采样间隔', '0.25 ms', '0.5 ms'],
        ['满量程动态范围', '150 dB', '142 dB'],
        ['连续 GNSS 深埋', '±1 μs', '—'],
      ],
    },
  },
  'allseis-3c': {
    applications:
      '三分量一体化无缆采集，适用于城市地下空间精细探测、复杂构造带调查与长期监测台阵部署。',
    specSections: [
      {
        title: '通道与采集',
        rows: [
          { label: '通道', value: '3× 正交 5 Hz（可选 10 Hz）' },
          { label: 'ADC', value: '3× 24 位' },
          { label: '采样间隔', value: '0.5 / 1 / 2 / 4 / 10 ms' },
          { label: '增益', value: '×1 / ×2 / ×4' },
          { label: '动态范围 @500 SPS', value: '125 dB @ 0 dB' },
          { label: 'EIN', value: '1 μV rms @ 0 dB' },
        ],
      },
      {
        title: '系统参数',
        rows: [
          { label: '存储', value: '32 GB（45 d @ 2 ms）；可选 64 GB（90 d）' },
          { label: '电池 / 续航', value: '69/80 Wh → 28–33 天' },
          { label: '尺寸 / 重量', value: 'Ø12×16 cm；1.8 kg' },
          { label: '防护', value: 'IP68；3 m / 48 h' },
          { label: '配套', value: '12 位充电架（4 h）；9 位下载架（5.4 GB/min）' },
        ],
      },
    ],
  },
  'allseis-4clf': {
    applications:
      '四通道同步采集：三分量低频 + 单分量高灵敏度垂直道，兼顾主动源与被动源监测。',
    specSections: [
      {
        title: '传感器配置',
        rows: [
          { label: 'A 系列', value: '水平 0.2 Hz（0.2 Hz–240 Hz）+ 垂直 10 Hz' },
          { label: 'B 系列', value: '水平 1 Hz（1 Hz–240 Hz）+ 垂直 10 Hz' },
          { label: '低频灵敏度', value: '200 V/m/s；倾角 ±5°' },
        ],
      },
      {
        title: '采集与续航',
        rows: [
          { label: 'ADC', value: '4× 24 位同步' },
          { label: '采样间隔', value: '0.5～10 ms' },
          { label: '存储', value: '32 GB（45 d @ 2 ms）；可选 64 GB（90 d）' },
          { label: '电池 / 续航', value: '130 Wh → 800+ h（33 天）' },
          { label: '尺寸 / 重量', value: 'Ø14×17 cm；2.9 kg' },
        ],
      },
    ],
  },
  'i-nodal': {
    applications:
      '中石化石油工程地球物理有限公司定制节点；支持 0.25 ms 采样、外接检波器串与深埋连续 GNSS 授时。',
    specSections: [
      {
        title: '采集性能',
        rows: [
          { label: 'ADC', value: '32 位' },
          { label: '采样间隔', value: '0.25～4 ms' },
          { label: '增益', value: '×1～×64' },
          { label: '满量程动态范围', value: '148 dB' },
          { label: '带宽 @0.25 ms', value: '0–1652 Hz' },
        ],
      },
      {
        title: '系统',
        rows: [
          { label: '存储', value: '16 GB（45 d @ 1 ms）；可选 32 GB' },
          { label: '电池 / 续航', value: '69 Wh → >720 h' },
          { label: '尺寸 / 重量', value: '10.7×10.7×12.7 cm；0.9 kg' },
          { label: '外接', value: 'KCK 检波器串；连续 GNSS 深埋；BLE + 无人机巡检' },
        ],
      },
    ],
  },
  '2hz-wideband-geophone': {
    applications:
      '海洋 OBN/OBC 定制宽频检波器，已向中海油服等交付超 8 万套；适用于浅海至中等水深节点外接传感器。',
    specSections: [
      {
        title: '工作模式',
        rows: [
          { label: '有源（力反馈）', value: '2–190 Hz；等效 Fn 2 Hz；80 V/m/s' },
          { label: '无源', value: '15–190 Hz；等效 Fn 15 Hz；70 V/m/s（6.2 kΩ 并联 56 V/m/s）' },
        ],
      },
      {
        title: '电气与物理',
        rows: [
          { label: '供电', value: '±2.5 V；功耗 <10 mW' },
          { label: '动态范围', value: '120 dB' },
          { label: '噪声', value: '2 μV rms @ 2–190 Hz' },
          { label: '尺寸 / 重量', value: 'Ø26.7×42 mm；110 g' },
          { label: '温度', value: '−40～+100 °C' },
        ],
      },
    ],
  },
  '125hz-land-geophone': {
    applications:
      '陆地宽频检波器（SM-1A），可切换有源力反馈与常规 10 Hz 无源模式，用于节点内置或外接串。',
    specSections: [
      {
        title: '工作模式',
        rows: [
          { label: '有源（SW=+2.5 V）', value: '1–240 Hz；等效 Fn 1 Hz；130 V/m/s；噪声 3.2 μV rms' },
          { label: '无源（SW=GND）', value: '10–240 Hz；等效 Fn 10 Hz；85.8 V/m/s' },
        ],
      },
      {
        title: '电气与物理',
        rows: [
          { label: '动态范围', value: '≥120 dB（有源）' },
          { label: '供电 / 功耗', value: '±2.5 V；≤10 mW' },
          { label: '尺寸 / 重量', value: 'Ø26.7×42 mm；110 g' },
          { label: '温度', value: '−40～+100 °C' },
        ],
      },
    ],
  },
}

const en: Record<string, ProductDetailExtras> = {
  'allseis-1c': {
    applications:
      'Nodal acquisition for oil, gas, and mineral exploration with high-density 2D/3D deployment; built-in or external geophone strings via KCK.',
    specSections: [
      {
        title: 'Acquisition & sensors',
        rows: [
          { label: 'Sensors', value: '5 Hz (5–150 Hz) or 10 Hz (10–240 Hz); optional KCK strings' },
          { label: 'ADC', value: '24-bit Δ-Σ' },
          { label: 'Sample intervals', value: '0.5 / 1 / 2 / 4 ms' },
          { label: 'Gain', value: '×1 / ×4 / ×16 (0 / 12 / 24 dB)' },
          { label: 'Input impedance', value: '40 kΩ‖22 nF (5 Hz); 20 kΩ‖22 nF (10 Hz)' },
        ],
      },
      {
        title: 'Dynamic range & storage',
        rows: [
          { label: 'Instantaneous DR @1 ms', value: '125 dB @ ×1' },
          { label: 'Full-scale DR', value: '145 dB' },
          { label: 'EIN @1 ms', value: '1 μV @ ×1; 0.25 μV @ ×4' },
          { label: 'Storage', value: '16 GB (32 GB optional)' },
          { label: 'Battery life', value: '52/60 Wh → 28–33 days (670–800 h)' },
        ],
      },
      {
        title: 'Timing & field',
        rows: [
          { label: 'Timing', value: '±10 μs (GNSS); ±1 ms holdover / 1 h' },
          { label: 'Size / weight', value: '9.8×10.8×11 cm; 750 g (800 g with spike)' },
          { label: 'Temperature', value: '−40 to +70 °C; IP68; 5VA, F1' },
          { label: 'BLE QC', value: '~20 m ground, >100 m air; stakeless P&R' },
        ],
      },
    ],
  },
  'allseis-1chr': {
    applications:
      'Domestic-chip nodal system for ultra-high sample rates and deep-burial continuous GNSS timing.',
    specSections: [
      {
        title: 'Performance',
        rows: [
          { label: 'ADC', value: '32-bit' },
          { label: 'Sample intervals', value: '0.25 / 0.5 / 1 / 2 / 4 ms' },
          { label: 'Gain', value: '×1–×64 (0–36 dB)' },
          { label: 'Instantaneous DR @4 ms', value: '130 / 128 / 123 / 114 dB' },
          { label: 'Full-scale DR', value: '150 dB' },
          { label: 'Bandwidth @0.25 ms', value: '0–1652 Hz (−3 dB)' },
        ],
      },
      {
        title: 'Power & timing',
        rows: [
          { label: 'Battery / life', value: '52 Wh → >35 days; 850+ h intermittent GNSS' },
          { label: 'Continuous GNSS', value: '±1 μs (deep burial)' },
          { label: 'Intermittent GNSS', value: '±10 μs' },
          { label: 'Asset ID', value: 'RFID; optional −55 °C variant' },
        ],
      },
    ],
    comparison: {
      title: 'vs. ALLSEIS-1C Neo',
      headers: ['Parameter', '1C HR', '1C Neo'],
      rows: [
        ['Min. sample interval', '0.25 ms', '0.5 ms'],
        ['Full-scale DR', '150 dB', '142 dB'],
        ['Continuous GNSS burial', '±1 μs', '—'],
      ],
    },
  },
  'allseis-3c': {
    applications:
      'Three-component cable-free stations for urban subsurface imaging, complex structure surveys, and monitoring arrays.',
    specSections: [
      {
        title: 'Channels',
        rows: [
          { label: 'Channels', value: '3× orthogonal 5 Hz (10 Hz optional)' },
          { label: 'ADC', value: '3× 24-bit' },
          { label: 'Sample intervals', value: '0.5 / 1 / 2 / 4 / 10 ms' },
          { label: 'Gain', value: '×1 / ×2 / ×4' },
          { label: 'DR @500 SPS', value: '125 dB @ 0 dB' },
          { label: 'EIN', value: '1 μV rms @ 0 dB' },
        ],
      },
      {
        title: 'System',
        rows: [
          { label: 'Storage', value: '32 GB (45 d @ 2 ms); 64 GB optional (90 d)' },
          { label: 'Battery / life', value: '69/80 Wh → 28–33 days' },
          { label: 'Size / weight', value: 'Ø12×16 cm; 1.8 kg' },
          { label: 'Protection', value: 'IP68; 3 m / 48 h' },
          { label: 'Racks', value: '12-slot charge (4 h); 9-slot download (5.4 GB/min)' },
        ],
      },
    ],
  },
  'allseis-4clf': {
    applications:
      'Four-channel sync: 3C low-frequency + high-sensitivity vertical channel for active and passive monitoring.',
    specSections: [
      {
        title: 'Sensor options',
        rows: [
          { label: 'A series', value: '0.2 Hz horizontal (0.2–240 Hz) + 10 Hz vertical' },
          { label: 'B series', value: '1 Hz horizontal (1–240 Hz) + 10 Hz vertical' },
          { label: 'LF sensitivity', value: '200 V/m/s; tilt ±5°' },
        ],
      },
      {
        title: 'Acquisition',
        rows: [
          { label: 'ADC', value: '4× 24-bit simultaneous' },
          { label: 'Sample intervals', value: '0.5–10 ms' },
          { label: 'Storage', value: '32 GB (45 d @ 2 ms); 64 GB optional (90 d)' },
          { label: 'Battery / life', value: '130 Wh → 800+ h (33 days)' },
          { label: 'Size / weight', value: 'Ø14×17 cm; 2.9 kg' },
        ],
      },
    ],
  },
  'i-nodal': {
    applications:
      'Custom nodal system for Sinopec Geophysical (SGC) with 0.25 ms sampling, KCK strings, and deep-burial GNSS.',
    specSections: [
      {
        title: 'Performance',
        rows: [
          { label: 'ADC', value: '32-bit' },
          { label: 'Sample intervals', value: '0.25–4 ms' },
          { label: 'Gain', value: '×1–×64' },
          { label: 'Full-scale DR', value: '148 dB' },
          { label: 'Bandwidth @0.25 ms', value: '0–1652 Hz' },
        ],
      },
      {
        title: 'System',
        rows: [
          { label: 'Storage', value: '16 GB (45 d @ 1 ms); 32 GB optional' },
          { label: 'Battery / life', value: '69 Wh → >720 h' },
          { label: 'Size / weight', value: '10.7×10.7×12.7 cm; 0.9 kg' },
          { label: 'Features', value: 'KCK strings; continuous GNSS burial; BLE + UAV patrol' },
        ],
      },
    ],
  },
  '2hz-wideband-geophone': {
    applications:
      'Marine OBN/OBC wideband geophone (80,000+ units delivered to CNOOC Services); external sensor for shallow to mid-depth nodes.',
    specSections: [
      {
        title: 'Modes',
        rows: [
          { label: 'Active (FF)', value: '2–190 Hz; Fn eq. 2 Hz; 80 V/m/s' },
          { label: 'Passive', value: '15–190 Hz; Fn eq. 15 Hz; 70 V/m/s (56 with 6.2 kΩ shunt)' },
        ],
      },
      {
        title: 'Electrical & mechanical',
        rows: [
          { label: 'Supply', value: '±2.5 V; <10 mW' },
          { label: 'Dynamic range', value: '120 dB' },
          { label: 'Noise', value: '2 μV rms @ 2–190 Hz' },
          { label: 'Size / weight', value: 'Ø26.7×42 mm; 110 g' },
          { label: 'Temperature', value: '−40 to +100 °C' },
        ],
      },
    ],
  },
  '125hz-land-geophone': {
    applications:
      'Land broadband geophone (SM-1A) with switchable active force-feedback and 10 Hz passive mode for nodes or strings.',
    specSections: [
      {
        title: 'Modes',
        rows: [
          { label: 'Active (SW=+2.5 V)', value: '1–240 Hz; Fn eq. 1 Hz; 130 V/m/s; 3.2 μV rms noise' },
          { label: 'Passive (SW=GND)', value: '10–240 Hz; Fn eq. 10 Hz; 85.8 V/m/s' },
        ],
      },
      {
        title: 'Electrical & mechanical',
        rows: [
          { label: 'Dynamic range', value: '≥120 dB (active)' },
          { label: 'Supply / power', value: '±2.5 V; ≤10 mW' },
          { label: 'Size / weight', value: 'Ø26.7×42 mm; 110 g' },
          { label: 'Temperature', value: '−40 to +100 °C' },
        ],
      },
    ],
  },
}

export function getProductDetailExtras(locale: Locale, slug: string): ProductDetailExtras | undefined {
  const catalog = locale === 'zh' ? zh : en
  return catalog[slug]
}

export function getAllProductSlugs(): string[] {
  return Object.keys(zh)
}
