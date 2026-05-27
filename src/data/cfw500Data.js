// file field stores the complete filename (with .pdf extension)
// because some files omit the -datapack suffix
const drives = [
  // ── Standard / 460V ────────────────────────────────────────────
  { series: 'Standard', voltage: '460V', hp: 1,    file: 'CFW500A02P6T4NB20.pdf' },
  { series: 'Standard', voltage: '460V', hp: 2,    file: 'CFW500A04P3T4NB20-datapack.pdf' },
  { series: 'Standard', voltage: '460V', hp: 3,    file: 'CFW500A06P1T4NB20-datapack.pdf' },
  { series: 'Standard', voltage: '460V', hp: 7.5,  file: 'CFW500B10P4T4NB20-datapack.pdf' },
  { series: 'Standard', voltage: '460V', hp: 10,   file: 'CFW500C14P4T4NB20-datapack.pdf' },
  { series: 'Standard', voltage: '460V', hp: 15,   file: 'CFW500D24P0T4NB20.pdf' },
  { series: 'Standard', voltage: '460V', hp: 20,   file: 'CFW500D31P0T4DB20C3G2.pdf' },
  { series: 'Standard', voltage: '460V', hp: 25,   file: 'CFW500E39P0T4DB20-datapack.pdf' },
  { series: 'Standard', voltage: '460V', hp: 30,   file: 'CFW500E49P0T4DB20C3G2.pdf' },

  // ── Standard / 230V ────────────────────────────────────────────
  { series: 'Standard', voltage: '230V', hp: 0.5,  file: 'CFW500A02P6S2NB20-datapack.pdf' },
  { series: 'Standard', voltage: '230V', hp: 1,    file: 'CFW500A04P3B2NB20-datapack.pdf' },
  { series: 'Standard', voltage: '230V', hp: 2,    file: 'CFW500A07P0S2NB20-datapack.pdf' },
  { series: 'Standard', voltage: '230V', hp: 2,    file: 'CFW500B07P3B2NB20-datapack.pdf' },
  { series: 'Standard', voltage: '230V', hp: 3,    file: 'CFW500A09P6B2NB20-datapack.pdf' },
  { series: 'Standard', voltage: '230V', hp: 3,    file: 'CFW500B10P0B2NB20-datapack.pdf' },
  { series: 'Standard', voltage: '230V', hp: 5,    file: 'CFW500B16P0T2DB20-datapack.pdf' },
  { series: 'Standard', voltage: '230V', hp: 7.5,  file: 'CFW500C24P0T2DB20-datapack.pdf' },
  { series: 'Standard', voltage: '230V', hp: 10,   file: 'CFW500D28P0T2DB20-datapack.pdf' },
  { series: 'Standard', voltage: '230V', hp: 15,   file: 'CFW500D47P0T2DB20-datapack.pdf' },
  { series: 'Standard', voltage: '230V', hp: 20,   file: 'CFW500E56P0T2DB20-datapack.pdf' },

  // ── Standard / 575V ────────────────────────────────────────────
  { series: 'Standard', voltage: '575V', hp: 1.5,  file: 'CFW500C01P7T5DB20-datapack.pdf' },
  { series: 'Standard', voltage: '575V', hp: 3,    file: 'CFW500C03P0T5DB20-datapack.pdf' },
  { series: 'Standard', voltage: '575V', hp: 7.5,  file: 'CFW500C07P0T5DB20-datapack.pdf' },
  { series: 'Standard', voltage: '575V', hp: 10,   file: 'CFW500C10P0T5DB20-datapack.pdf' },
  { series: 'Standard', voltage: '575V', hp: 10,   file: 'CFW500C12P5T5DB20-datapack.pdf' },

  // ── NEMA 4X + Disc / 460V ──────────────────────────────────────
  { series: 'NEMA 4X + Disc', voltage: '460V', hp: 0.33, file: 'CFW500A01P0T4DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '460V', hp: 0.75, file: 'CFW500A01P6T4DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '460V', hp: 1,    file: 'CFW500A02P6T4DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '460V', hp: 2,    file: 'CFW500A04P3T4DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '460V', hp: 3,    file: 'CFW500A06P5T4DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '460V', hp: 5,    file: 'CFW500A10P0T4DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '460V', hp: 10,   file: 'CFW500B14P0T4DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '460V', hp: 10,   file: 'CFW500B16P0T4DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '460V', hp: 15,   file: 'CFW500B24P0T4DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '460V', hp: 20,   file: 'CFW500B31P0T4DB66DS-datapack.pdf' },

  // ── NEMA 4X + Disc / 575V ──────────────────────────────────────
  { series: 'NEMA 4X + Disc', voltage: '575V', hp: 1,    file: 'CFW500B01P7T5DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '575V', hp: 2,    file: 'CFW500B03P0T5DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '575V', hp: 3,    file: 'CFW500B04P3T5DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '575V', hp: 7.5,  file: 'CFW500B10P0T5DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '575V', hp: 10,   file: 'CFW500B12P0T5DB66DS-datapack.pdf' },

  // ── NEMA 4X + Disc / 230V ──────────────────────────────────────
  { series: 'NEMA 4X + Disc', voltage: '230V', hp: 0.33, file: 'CFW500A01P6B2DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '230V', hp: 0.5,  file: 'CFW500A02P6B2DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '230V', hp: 1,    file: 'CFW500A04P3B2DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '230V', hp: 2,    file: 'CFW500A07P3B2DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '230V', hp: 3,    file: 'CFW500A10P0B2DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '230V', hp: 5,    file: 'CFW500A16P0T2DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '230V', hp: 7.5,  file: 'CFW500B24P0T2DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '230V', hp: 10,   file: 'CFW500B28P0T2DB66DS-datapack.pdf' },
  { series: 'NEMA 4X + Disc', voltage: '230V', hp: 10,   file: 'CFW500B33P0T2DB66DS-datapack.pdf' },

  // ── NEMA 4X / 460V ─────────────────────────────────────────────
  { series: 'NEMA 4X', voltage: '460V', hp: 0.33, file: 'CFW500A01P0T4DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '460V', hp: 0.75, file: 'CFW500A01P6T4DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '460V', hp: 1,    file: 'CFW500A02P6T4DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '460V', hp: 2,    file: 'CFW500A04P3T4DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '460V', hp: 3,    file: 'CFW500A06P5T4DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '460V', hp: 5,    file: 'CFW500A10P0T4DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '460V', hp: 10,   file: 'CFW500B14P0T4DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '460V', hp: 10,   file: 'CFW500B16P0T4DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '460V', hp: 15,   file: 'CFW500B24P0T4DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '460V', hp: 20,   file: 'CFW500B31P0T4DB66-datapack.pdf' },

  // ── NEMA 4X / 575V ─────────────────────────────────────────────
  { series: 'NEMA 4X', voltage: '575V', hp: 1,    file: 'CFW500B01P7T5DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '575V', hp: 2,    file: 'CFW500B03P0T5DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '575V', hp: 3,    file: 'CFW500B04P3T5DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '575V', hp: 5,    file: 'CFW500B07P0T5DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '575V', hp: 7.5,  file: 'CFW500B10P0T5DB66-datapack.pdf' },
  { series: 'NEMA 4X', voltage: '575V', hp: 10,   file: 'CFW500B12P0T5DB66-datapack.pdf' },
]

export function pdfPath(file) {
  return `/select-electrical/datasheets/CFW500/${file}`
}

// Strip -datapack.pdf or .pdf suffix to get the clean part number
export function partNumber(file) {
  if (!file) return '—'
  return file.replace(/-datapack\.pdf$/, '').replace(/\.pdf$/, '')
}

export default drives
