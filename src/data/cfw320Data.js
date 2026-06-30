const drives = [
  // 120V
  { voltage: '120V', hp: 0.33, file: 'CFW320A01P6S1NB20' },
  { voltage: '120V', hp: 0.5,  file: 'CFW320A02P6S1NB20' },
  { voltage: '120V', hp: 1,    file: 'CFW320A04P2S1NB20' },
  { voltage: '120V', hp: 1.5,  file: 'CFW320A06P0S1NB20' },

  // 230V (1-Phase)
  { voltage: '230V 1PH', hp: 0.33, file: 'CFW320A01P6S2NB20' },
  { voltage: '230V 1PH', hp: 0.5,  file: 'CFW320A02P6S2NB20' },
  { voltage: '230V 1PH', hp: 1,    file: 'CFW320A04P2S2NB20' },
  { voltage: '230V 1PH', hp: 1.5,  file: 'CFW320A06P0S2NB20' },
  { voltage: '230V 1PH', hp: 2,    file: 'CFW320A07P3S2NB20' },

  // 230V (3-Phase)
  { voltage: '230V 3PH', hp: 0.33, file: 'CFW320A01P6T2NB20' },
  { voltage: '230V 3PH', hp: 0.5,  file: 'CFW320A02P6T2NB20' },
  { voltage: '230V 3PH', hp: 1,    file: 'CFW320A04P2T2NB20' },
  { voltage: '230V 3PH', hp: 1.5,  file: 'CFW320A06P0T2NB20' },
  { voltage: '230V 3PH', hp: 2,    file: 'CFW320A07P3T2NB20' },
  { voltage: '230V 3PH', hp: 3,    file: 'CFW320B10P0B2DB20' },
  { voltage: '230V 3PH', hp: 5,    file: 'CFW320B15P2T2DB20' },

  // 480V (3-Phase)
  { voltage: '480V 3PH', hp: 0.5,  file: 'CFW320A01P1T4NB20' },
  { voltage: '480V 3PH', hp: 0.75, file: 'CFW320A01P8T4NB20' },
  { voltage: '480V 3PH', hp: 1,    file: 'CFW320A02P6T4NB20' },
  { voltage: '480V 3PH', hp: 2,    file: 'CFW320A03P5T4NB20' },
  { voltage: '480V 3PH', hp: 3,    file: 'CFW320A04P8T4NB20' },
  { voltage: '480V 3PH', hp: 3,    file: 'CFW320B05P6T4NB20' },
  { voltage: '480V 3PH', hp: 5,    file: null, partNumber: 'CFW320B08P2T4NB20' },
  { voltage: '480V 3PH', hp: 5,    file: null, partNumber: 'CFW320C10P0T4NB20' },
  { voltage: '480V 3PH', hp: 7.5,  file: null, partNumber: 'CFW320C12P0T4NB20' },
  { voltage: '480V 3PH', hp: 10,   file: null, partNumber: 'CFW320C15P0T4NB20' },
  { voltage: '480V 3PH', hp: 0.5,  file: 'CFW320B01P1T4DB20' },
  { voltage: '480V 3PH', hp: 0.75, file: 'CFW320B01P8T4DB20' },
  { voltage: '480V 3PH', hp: 1,    file: 'CFW320B02P6T4DB20' },
  { voltage: '480V 3PH', hp: 2,    file: 'CFW320B03P5T4DB20' },
  { voltage: '480V 3PH', hp: 3,    file: 'CFW320B04P8T4DB20' },
  { voltage: '480V 3PH', hp: 3,    file: null, partNumber: 'CFW320B06P5T4DB20' },
  { voltage: '480V 3PH', hp: 5,    file: 'CFW320B07P6T4DB20' },
  { voltage: '480V 3PH', hp: 5,    file: null, partNumber: 'CFW320C10P0T4DB20' },
  { voltage: '480V 3PH', hp: 7.5,  file: null, partNumber: 'CFW320C12P0T4DB20' },
  { voltage: '480V 3PH', hp: 10,   file: null, partNumber: 'CFW320C15P0T4DB20' },
]

export function pdfPath(file) {
  return `/datasheets/CFW320/${file}.pdf`
}

export default drives