// Soft Starter datasheets — SSW05, SSW07, SSW900
// hp field: "230V HP / 460V HP / 575V HP"
// file: null means no datasheet available

const softStarters = [
  // ── SSW05 ──────────────────────────────────────────────────────────
  { model: 'SSW05', amps: 3,    hp: '0.5 / 0.5 / 2',      file: 'SSW05-0003-T4657-TPZ.pdf' },
  { model: 'SSW05', amps: 10,   hp: '3 / 5 / 7.5',         file: 'SSW05-0010-T4657-TPZ.pdf' },
  { model: 'SSW05', amps: 16,   hp: '5 / 10 / 10',         file: 'SSW05-0016-T4657-TPZ.pdf' },
  { model: 'SSW05', amps: 23,   hp: '7.5 / 15 / 20',       file: 'SSW05-0023-T4657-TPZ.pdf' },
  { model: 'SSW05', amps: 30,   hp: '10 / 20 / 25',        file: 'SSW05-0030-T4657-TPZ.pdf' },
  { model: 'SSW05', amps: 45,   hp: '15 / 30 / 40',        file: 'SSW05-0045-T4657-TPZ.pdf' },
  { model: 'SSW05', amps: 60,   hp: '20 / 40 / 50',        file: 'SSW05-0060-T4657-TPZ.pdf' },
  { model: 'SSW05', amps: 85,   hp: '30 / 60 / 75',        file: 'SSW05-0085-T4657-TPZ.pdf' },

  // ── SSW07 ──────────────────────────────────────────────────────────
  { model: 'SSW07', amps: 17,   hp: '5 / 10 / 15',         file: 'SSWO70017T5SZ.pdf' },
  { model: 'SSW07', amps: 24,   hp: '7.5 / 15 / 20',       file: 'SSWO70024T5SZ.pdf' },
  { model: 'SSW07', amps: 30,   hp: '10 / 20 / 25',        file: 'SSWO70030T5SZ.pdf' },
  { model: 'SSW07', amps: 45,   hp: '15 / 30 / 40',        file: 'SSWO70045T5SZ.pdf' },
  { model: 'SSW07', amps: 61,   hp: '20 / 40 / 60',        file: 'SSWO70061T5SZ.pdf' },
  { model: 'SSW07', amps: 85,   hp: '30 / 60 / 75',        file: 'SSW070085T5SZ.pdf', pending: true },
  { model: 'SSW07', amps: 130,  hp: '50 / 100 / 125',      file: 'SSWO70130T5SZ.pdf' },
  { model: 'SSW07', amps: 171,  hp: '60 / 125 / 150',      file: 'SSWO70171T5SZ.pdf' },
  { model: 'SSW07', amps: 200,  hp: '75 / 150 / 200',      file: 'SSWO70200T5SZ.pdf' },
  { model: 'SSW07', amps: 255,  hp: '100 / 200 / 250',     file: 'SSW070255T5SZ.pdf' },
  { model: 'SSW07', amps: 312,  hp: '125 / 250 / 300',     file: 'SSW070312T5SZ.pdf' },
  { model: 'SSW07', amps: 365,  hp: '150 / 300 / 350',     file: 'SSW070365T5SZ.pdf' },
  { model: 'SSW07', amps: 412,  hp: '150 / 350 / 400',     file: 'SSW070412T5SZ.pdf' },

  // ── SSW900 ─────────────────────────────────────────────────────────
  { model: 'SSW900', amps: 10,   hp: '3 / 5 / 7.5',        file: 'SSW900-A-0010-T5-E2.pdf' },
  { model: 'SSW900', amps: 17,   hp: '5 / 10 / 15',        file: 'SSW900-A-0017-T5-E2.pdf' },
  { model: 'SSW900', amps: 24,   hp: '7.5 / 15 / 20',      file: 'SSW900-A-0024-T5-E2.pdf' },
  { model: 'SSW900', amps: 30,   hp: '10 / 20 / 25',       file: 'SSW900-A-0030-T5-E2.pdf' },
  { model: 'SSW900', amps: 45,   hp: '15 / 30 / 40',       file: 'SSW900-B-0045-T5-E2.pdf' },
  { model: 'SSW900', amps: 61,   hp: '20 / 40 / 60',       file: 'SSW900-B-0061-T5-E2.pdf' },
  { model: 'SSW900', amps: 85,   hp: '30 / 60 / 75',       file: 'SSW900-B-0085-T5-E2.pdf' },
  { model: 'SSW900', amps: 105,  hp: '40 / 75 / 100',      file: 'SSW900-B-0105-T5-E2.pdf' },
  { model: 'SSW900', amps: 130,  hp: '50 / 100 / 125',     file: 'SSW900-C-0130-T5-E2.pdf' },
  { model: 'SSW900', amps: 171,  hp: '60 / 125 / 150',     file: 'SSW900-C-0171-T5-E2.pdf' },
  { model: 'SSW900', amps: 200,  hp: '75 / 150 / 200',     file: 'SSW900-C-0200-T5-E2.pdf' },
  { model: 'SSW900', amps: 255,  hp: '100 / 200 / 250',    file: 'SSW900-D-0255-T5-E2.pdf' },
  { model: 'SSW900', amps: 312,  hp: '125 / 250 / 300',    file: 'SSW900-D-0312-T5-E2.pdf' },
  { model: 'SSW900', amps: 365,  hp: '150 / 300 / 350',    file: 'SSW900-D-0365-T5-E2.pdf' },
  { model: 'SSW900', amps: 412,  hp: '150 / 350 / 400',    file: 'SSW900-D-0412-T5-E2.pdf' },
  { model: 'SSW900', amps: 480,  hp: '200 / 400 / 500',    file: 'SSW900-E-0480-T5-E2.pdf' },
  { model: 'SSW900', amps: 604,  hp: '250 / 500 / 600',    file: 'SSW900-E-0604-T5-E2.pdf' },
  { model: 'SSW900', amps: 670,  hp: '300 / 600 / 700',    file: 'SSW900-E-0670-T5-E2.pdf' },
  { model: 'SSW900', amps: 820,  hp: '350 / 700 / 800',    file: 'SSW900-F-0820-T5-E2.pdf' },
  { model: 'SSW900', amps: 950,  hp: '400 / 800 / 1000',   file: 'SSW900-F-0950-T5-E2.pdf' },
  { model: 'SSW900', amps: 1100, hp: '450 / 900 / 1100',   file: 'SSW900-G-1100-T5-E2.pdf' },
  { model: 'SSW900', amps: 1400, hp: '500 / 1100 / 1350',  file: 'SSW900G1400T5E3.pdf', pending: true },
]

export function pdfPath(model, file) {
  return `/select-electrical/datasheets/Soft%20Starters/${model}/${file}`
}

export function partNumber(file) {
  if (!file) return '—'
  return file.replace(/\.pdf$/, '')
}

export default softStarters
