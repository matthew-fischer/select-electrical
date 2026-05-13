// brand: 'TCI' | 'MTE'
// enclosure: 'Open Chassis' | 'NEMA 1' | 'NEMA 3R'
// amps: number
// hpRange: string — '230V / 460V / 575V' horsepower (e.g. '15/30/40')
// frame: string — cabinet code (MTE) or '' (TCI)
// sku: string

// ── TCI helpers ──────────────────────────────────────────────────────────────
// SKU model number indexed by amps
const tciModel = {
  2:   'V1K2A',   3:   'V1K3A',   4:   'V1K4A',   8:   'V1K8A',
  12:  'V1K12A',  16:  'V1K16A',  18:  'V1K18A',  21:  'V1K21A',
  25:  'V1K25A',  27:  'V1K27A',  35:  'V1K35A',  45:  'V1K45A',
  55:  'V1K55A',  80:  'V1K80A',  110: 'V1K110A', 130: 'V1K130A',
  160: 'V1K160A', 200: 'V1K200A', 250: 'V1K250A', 305: 'V1K305A',
  362: 'V1K362A', 420: 'V1K420A', 500: 'V1K480A', 600: 'V1K600A',
  610: 'V1K750A',
}

const tciBase = [
  { amps:2,   hpRange:'-/0.75/1'        },
  { amps:3,   hpRange:'0.5/1/2'         },
  { amps:4,   hpRange:'0.75/2/3'        },
  { amps:8,   hpRange:'1-1.5/5/5'       },
  { amps:12,  hpRange:'2/7.5/10'        },
  { amps:16,  hpRange:'3/10/-'          },
  { amps:18,  hpRange:'5/10/15'         },
  { amps:21,  hpRange:'-/15/-'          },
  { amps:25,  hpRange:'-/15/20'         },
  { amps:27,  hpRange:'7.5/20/25'       },
  { amps:35,  hpRange:'10/25/30'        },
  { amps:45,  hpRange:'15/30/40'        },
  { amps:55,  hpRange:'20/40/50'        },
  { amps:80,  hpRange:'25-30/50-60/75'  },
  { amps:110, hpRange:'40/75/100'       },
  { amps:130, hpRange:'50/100/125'      },
  { amps:160, hpRange:'60/125/150'      },
  { amps:200, hpRange:'75/150/200'      },
  { amps:250, hpRange:'100/200/250'     },
  { amps:305, hpRange:'-/250/300'       },
  { amps:362, hpRange:'150/300/350'     },
  { amps:420, hpRange:'-/350/450'       },
  { amps:500, hpRange:'200/400/500'     },
  { amps:600, hpRange:'-/500/600'       },
  { amps:610, hpRange:'-/600/700'       },
]

function tciEntries() {
  const encSuffix = { 'Open Chassis':'00', 'NEMA 1':'01', 'NEMA 3R':'03' }
  return ['Open Chassis','NEMA 1','NEMA 3R'].flatMap(enc =>
    tciBase.map(r => ({
      brand:'TCI', enclosure:enc, amps:r.amps, hpRange:r.hpRange, frame:'',
      sku:`${tciModel[r.amps]}${encSuffix[enc]}`,
    }))
  )
}

// ── MTE DVDT base (amps, hpRange, NEMA-1 cabinet, NEMA-3R cabinet) ──────────
const mteBase = [
  { amps:3,   hpRange:'0.75/1/0.5-2',        nema1:'CAB-13V',   nema3r:'CAB-10'    },
  { amps:4,   hpRange:'1/2/3',                nema1:'CAB-13V',   nema3r:'CAB-10'    },
  { amps:5,   hpRange:'2/3/5',                nema1:'CAB-13V',   nema3r:'CAB-10'    },
  { amps:8,   hpRange:'3/5/7.5',              nema1:'CAB-13V',   nema3r:'CAB-10'    },
  { amps:12,  hpRange:'4/7.5/10',             nema1:'CAB-13V',   nema3r:'CAB-10'    },
  { amps:17,  hpRange:'5/10/15',              nema1:'CAB-13V',   nema3r:'CAB-10'    },
  { amps:22,  hpRange:'15/20/22',             nema1:'CAB-13V',   nema3r:'CAB-10'    },
  { amps:27,  hpRange:'10/20/25',             nema1:'CAB-13V',   nema3r:'CAB-10'    },
  { amps:35,  hpRange:'12.5/25/30',           nema1:'CAB-13V',   nema3r:'CAB-10'    },
  { amps:45,  hpRange:'15/30/40',             nema1:'CAB-13V',   nema3r:'CAB-10'    },
  { amps:55,  hpRange:'20/40/50',             nema1:'CAB-13V',   nema3r:'CAB-12AP3' },
  { amps:65,  hpRange:'25/50/60',             nema1:'CAB-13V',   nema3r:'CAB-12AP3' },
  { amps:80,  hpRange:'30/60/75',             nema1:'CAB-13V',   nema3r:'CAB-12AP3' },
  { amps:110, hpRange:'40/75/100',            nema1:'CAB-13V',   nema3r:'CAB-12AP3' },
  { amps:130, hpRange:'50/100/125',           nema1:'CAB-17V',   nema3r:'CAB-17AP3' },
  { amps:160, hpRange:'60/125/150',           nema1:'CAB-17V',   nema3r:'CAB-17AP3' },
  { amps:200, hpRange:'75/150/200',           nema1:'CAB-17V',   nema3r:'CAB-17AP3' },
  { amps:250, hpRange:'100/200/250',          nema1:'CAB-17P2',  nema3r:'CAB-17AP3' },
  { amps:305, hpRange:'125/250/300',          nema1:'CAB-17AP2', nema3r:'CAB-17AP3' },
  { amps:365, hpRange:'150/300/350',          nema1:'CAB-17AP2', nema3r:'CAB-17AP3' },
  { amps:415, hpRange:'175/350/450',          nema1:'CAB-17AP2', nema3r:'CAB-17AP3' },
  { amps:515, hpRange:'225/400-450/500-550',  nema1:'CAB-26AP2', nema3r:'CAB-26AP3' },
  { amps:600, hpRange:'250/500/600',          nema1:'CAB-26AP2', nema3r:'CAB-26AP3' },
]

function mteEntries() {
  const ampsStr = a => String(a).padStart(4, '0')
  // DVSG = NEMA 1, DVSW = NEMA 3R, DVSP = Open Chassis
  return mteBase.flatMap(r => [
    { brand:'MTE', enclosure:'Open Chassis', amps:r.amps, hpRange:r.hpRange, frame:'Open Chassis',
      sku:`DVSP${ampsStr(r.amps)}E` },
    { brand:'MTE', enclosure:'NEMA 1',       amps:r.amps, hpRange:r.hpRange, frame:r.nema1,
      sku:`DVSG${ampsStr(r.amps)}E` },
    { brand:'MTE', enclosure:'NEMA 3R',      amps:r.amps, hpRange:r.hpRange, frame:r.nema3r,
      sku:`DVSW${ampsStr(r.amps)}E` },
  ])
}

const dvdtFilters = [...tciEntries(), ...mteEntries()]

export default dvdtFilters
