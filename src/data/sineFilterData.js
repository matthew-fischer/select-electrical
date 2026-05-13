// brand: 'Mirus' | 'MTE'
// voltage: '230V' | '240V' | '480V' | '575V' | '600V'
// enclosure: 'Open Chassis' | 'NEMA 1' | 'NEMA 3R'
// hp: number, amps: number, frame: string, sku: string

// ── Mirus helpers ────────────────────────────────────────────────────────────
const mirusBase480 = [
  { hp:5,    amps:7,    frame:'SU1' }, { hp:7.5,  amps:9,    frame:'SU1' },
  { hp:10,   amps:12,   frame:'SU1' }, { hp:15,   amps:17,   frame:'SU1' },
  { hp:20,   amps:23,   frame:'SU2' }, { hp:25,   amps:29,   frame:'SU2' },
  { hp:30,   amps:34,   frame:'SU2' }, { hp:40,   amps:46,   frame:'SU2' },
  { hp:50,   amps:57,   frame:'SU2' }, { hp:60,   amps:69,   frame:'SU3' },
  { hp:75,   amps:85,   frame:'SU3' }, { hp:100,  amps:113,  frame:'SU3' },
  { hp:125,  amps:141,  frame:'SU3' }, { hp:150,  amps:169,  frame:'SU4' },
  { hp:200,  amps:226,  frame:'SU4' }, { hp:250,  amps:281,  frame:'MT3' },
  { hp:300,  amps:337,  frame:'MT3' }, { hp:350,  amps:395,  frame:'MT4' },
  { hp:400,  amps:470,  frame:'MT4' }, { hp:500,  amps:595,  frame:'MT4' },
  { hp:600,  amps:670,  frame:'LT1' }, { hp:700,  amps:780,  frame:'LT1' },
  { hp:800,  amps:890,  frame:'LT2' }, { hp:900,  amps:990,  frame:'LT2' },
  { hp:1000, amps:1100, frame:'LT2' }, { hp:1100, amps:1210, frame:'LT3' },
  { hp:1200, amps:1330, frame:'LT3' }, { hp:1300, amps:1430, frame:'LT3' },
  { hp:1400, amps:1540, frame:'LT3' }, { hp:1500, amps:1650, frame:'HT2' },
  { hp:1600, amps:1770, frame:'HT2' }, { hp:1800, amps:1990, frame:'HT2' },
  { hp:2000, amps:2200, frame:'HT2' }, { hp:2300, amps:2530, frame:'HT2' },
  { hp:2500, amps:2755, frame:'HT3' }, { hp:2800, amps:3100, frame:'HT3' },
  { hp:3000, amps:3320, frame:'HT3' }, { hp:3500, amps:3855, frame:'HT3' },
]

const mirusBase600 = [
  { hp:5,    amps:5,    frame:'SU1' }, { hp:7.5,  amps:7,    frame:'SU1' },
  { hp:10,   amps:10,   frame:'SU1' }, { hp:15,   amps:14,   frame:'SU1' },
  { hp:20,   amps:18,   frame:'SU2' }, { hp:25,   amps:23,   frame:'SU2' },
  { hp:30,   amps:28,   frame:'SU2' }, { hp:40,   amps:37,   frame:'SU2' },
  { hp:50,   amps:45,   frame:'SU2' }, { hp:60,   amps:55,   frame:'SU3' },
  { hp:75,   amps:68,   frame:'SU3' }, { hp:100,  amps:90,   frame:'SU3' },
  { hp:125,  amps:112,  frame:'SU3' }, { hp:150,  amps:135,  frame:'SU4' },
  { hp:200,  amps:180,  frame:'SU4' }, { hp:250,  amps:225,  frame:'MT3' },
  { hp:300,  amps:270,  frame:'MT3' }, { hp:350,  amps:315,  frame:'MT4' },
  { hp:400,  amps:375,  frame:'MT4' }, { hp:500,  amps:475,  frame:'MT4' },
  { hp:600,  amps:535,  frame:'LT1' }, { hp:700,  amps:625,  frame:'LT1' },
  { hp:800,  amps:715,  frame:'LT2' }, { hp:900,  amps:795,  frame:'LT2' },
  { hp:1000, amps:880,  frame:'LT2' }, { hp:1100, amps:970,  frame:'LT3' },
  { hp:1200, amps:1060, frame:'LT3' }, { hp:1300, amps:1145, frame:'LT3' },
  { hp:1400, amps:1235, frame:'LT3' }, { hp:1500, amps:1325, frame:'HT2' },
  { hp:1600, amps:1415, frame:'HT2' }, { hp:1800, amps:1595, frame:'HT2' },
  { hp:2000, amps:1765, frame:'HT2' }, { hp:2300, amps:2030, frame:'HT2' },
  { hp:2500, amps:2205, frame:'HT3' }, { hp:2800, amps:2480, frame:'HT3' },
  { hp:3000, amps:2660, frame:'HT3' }, { hp:3500, amps:3085, frame:'HT3' },
]

const mirusBase240 = [
  { hp:5,   amps:13,  frame:'SU1' }, { hp:7.5, amps:18,  frame:'SU1' },
  { hp:10,  amps:24,  frame:'SU2' }, { hp:15,  amps:36,  frame:'SU2' },
  { hp:20,  amps:48,  frame:'SU2' }, { hp:25,  amps:60,  frame:'SU2' },
  { hp:30,  amps:72,  frame:'SU3' }, { hp:40,  amps:95,  frame:'SU3' },
  { hp:50,  amps:119, frame:'SU3' }, { hp:60,  amps:143, frame:'SU3' },
  { hp:75,  amps:178, frame:'SU4' }, { hp:100, amps:236, frame:'SU4' },
  { hp:125, amps:294, frame:'SU4' }, { hp:150, amps:353, frame:'SU4' },
]

function mirusEntries(base, voltLabel, voltCode) {
  const encVariants = [
    { enclosure:'Open Chassis', suffix:'EO' },
    { enclosure:'NEMA 1',       suffix:'E1' },
    { enclosure:'NEMA 3R',      suffix:'E1E' },
  ]
  return encVariants.flatMap(({ enclosure, suffix }) =>
    base.map(r => {
      // 2500HP 600V uses 660 in the SKU (special case in source data)
      const skuVolt = voltCode === '600' && r.hp === 2500 ? '660' : voltCode
      return { brand:'Mirus', voltage:voltLabel, enclosure, hp:r.hp, amps:r.amps, frame:r.frame,
        sku:`AUSF-${r.hp}-${skuVolt}-6-${suffix}` }
    })
  )
}

// ── MTE helpers ──────────────────────────────────────────────────────────────
// Each row: { hp, amps, openFrame, nema1Frame, nema3rFrame }
const mteBase230 = [
  { hp:3,   amps:9,   openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:4,   amps:12,  openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:5,   amps:17,  openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:7.5, amps:22,  openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:10,  amps:30,  openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:15,  amps:45,  openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:20,  amps:55,  openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:25,  amps:70,  openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:30,  amps:85,  openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:40,  amps:110, openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:50,  amps:135, openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:60,  amps:160, openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:75,  amps:200, openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:100, amps:250, openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:125, amps:320, openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
]

const mteBase480 = [
  { hp:0.75, amps:2,    openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:1.5,  amps:3,    openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:3,    amps:5,    openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:4,    amps:7,    openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:5,    amps:9,    openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:7.5,  amps:12,   openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:10,   amps:17,   openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:15,   amps:22,   openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:20,   amps:27,   openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:25,   amps:35,   openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:30,   amps:45,   openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:40,   amps:55,   openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:50,   amps:65,   openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:60,   amps:80,   openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:75,   amps:110,  openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:100,  amps:130,  openFrame:'CAB-12AP3',    nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:125,  amps:160,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
  { hp:150,  amps:200,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
  { hp:200,  amps:250,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
  { hp:250,  amps:305,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
  { hp:300,  amps:365,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
  { hp:350,  amps:415,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-42AP3' },
  { hp:450,  amps:515,  openFrame:'Open Chassis', nema1Frame:'CAB-42AP2', nema3rFrame:'CAB-42AP3' },
  { hp:500,  amps:600,  openFrame:'Open Chassis', nema1Frame:'CAB-42AP2', nema3rFrame:'CAB-42AP3' },
  { hp:600,  amps:720,  openFrame:'Open Chassis', nema1Frame:'CAB-42AP2', nema3rFrame:'CAB-48AP3' },
  { hp:700,  amps:850,  openFrame:'Open Chassis', nema1Frame:'CAB-48AP2', nema3rFrame:'CAB-48AP3' },
  { hp:850,  amps:1000, openFrame:'Open Chassis', nema1Frame:'CAB-48AP2', nema3rFrame:'CAB-48AP3' },
  { hp:1000, amps:1200, openFrame:'Open Chassis', nema1Frame:'CAB-48AP2', nema3rFrame:'CAB-48AP3' },
  { hp:1200, amps:1500, openFrame:'Open Chassis', nema1Frame:'CAB-48AP2', nema3rFrame:'CAB-48AP3' },
]

const mteBase575 = [
  { hp:1,    amps:2,    openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:2,    amps:3,    openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:3,    amps:5,    openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:5,    amps:7,    openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:7.5,  amps:9,    openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:10,   amps:12,   openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:15,   amps:17,   openFrame:'Open Chassis', nema1Frame:'CAB-13V',   nema3rFrame:'CAB-12AP3' },
  { hp:20,   amps:22,   openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:25,   amps:27,   openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:30,   amps:35,   openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:40,   amps:45,   openFrame:'Open Chassis', nema1Frame:'CAB-17V',   nema3rFrame:'CAB-12AP3' },
  { hp:50,   amps:55,   openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-12AP3' },
  { hp:60,   amps:65,   openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:75,   amps:80,   openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:100,  amps:110,  openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:125,  amps:130,  openFrame:'Open Chassis', nema1Frame:'CAB-17AP2', nema3rFrame:'CAB-17AP3' },
  { hp:150,  amps:160,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
  { hp:200,  amps:200,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
  { hp:250,  amps:250,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
  { hp:300,  amps:305,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
  { hp:350,  amps:365,  openFrame:'Open Chassis', nema1Frame:'CAB-26AP2', nema3rFrame:'CAB-26AP3' },
  { hp:450,  amps:415,  openFrame:'Open Chassis', nema1Frame:'CAB-42AP2', nema3rFrame:'CAB-42AP3' },
  { hp:500,  amps:515,  openFrame:'Open Chassis', nema1Frame:'CAB-42AP2', nema3rFrame:'CAB-42AP3' },
  { hp:600,  amps:600,  openFrame:'Open Chassis', nema1Frame:'CAB-42AP2', nema3rFrame:'CAB-42AP3' },
  { hp:700,  amps:720,  openFrame:'Open Chassis', nema1Frame:'CAB-48AP2', nema3rFrame:'CAB-48AP3' },
  { hp:800,  amps:850,  openFrame:'Open Chassis', nema1Frame:'CAB-48AP2', nema3rFrame:'CAB-48AP3' },
  { hp:1000, amps:1000, openFrame:'Open Chassis', nema1Frame:'CAB-48AP2', nema3rFrame:'CAB-48AP3' },
  { hp:1250, amps:1200, openFrame:'Open Chassis', nema1Frame:'CAB-48AP2', nema3rFrame:'CAB-48AP3' },
]

function mteEntries(base, voltLabel, voltChar) {
  const ampsStr = a => String(a).padStart(4, '0')
  return base.flatMap(r => [
    { brand:'MTE', voltage:voltLabel, enclosure:'Open Chassis', hp:r.hp, amps:r.amps, frame:r.openFrame,
      sku:`SWGM${ampsStr(r.amps)}${voltChar}` },
    { brand:'MTE', voltage:voltLabel, enclosure:'NEMA 1',       hp:r.hp, amps:r.amps, frame:r.nema1Frame,
      sku:`SWGG${ampsStr(r.amps)}${voltChar}` },
    { brand:'MTE', voltage:voltLabel, enclosure:'NEMA 3R',      hp:r.hp, amps:r.amps, frame:r.nema3rFrame,
      sku:`SWGW${ampsStr(r.amps)}${voltChar}` },
  ])
}

const sineFilters = [
  ...mirusEntries(mirusBase480, '480V', '480'),
  ...mirusEntries(mirusBase600, '600V', '600'),
  ...mirusEntries(mirusBase240, '240V', '240'),
  ...mteEntries(mteBase230, '230V', 'A'),
  ...mteEntries(mteBase480, '480V', 'D'),
  ...mteEntries(mteBase575, '575V', 'E'),
]

export default sineFilters
