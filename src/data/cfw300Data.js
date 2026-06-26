const drives = [
  // 230V 3-Phase
  { voltage: '230V 3PH', hp: 0.33, file: 'CFW300A01P6T2NB20' },
  { voltage: '230V 3PH', hp: 0.5,  file: 'CFW300A02P6T2NB20' },
  { voltage: '230V 3PH', hp: 1,    file: 'CFW300A04P2T2NB20' },
  { voltage: '230V 3PH', hp: 1.5,  file: 'CFW300A06P0T2NB20' },
  { voltage: '230V 3PH', hp: 2,    file: 'CFW300A07P3T2NB20' },
  { voltage: '230V 3PH', hp: 3,    file: 'CFW300B10P0B2DB20' },
  { voltage: '230V 3PH', hp: 5,    file: 'CFW300B15P2T2DB20' },

  // 230V 1-Phase
  { voltage: '230V 1PH', hp: 0.33, file: 'CFW300A01P6S2NB20' },
  { voltage: '230V 1PH', hp: 0.5,  file: 'CFW300A02P6S2NB20' },
  { voltage: '230V 1PH', hp: 1,    file: 'CFW300A04P2S2NB20' },
  { voltage: '230V 1PH', hp: 1.5,  file: 'CFW300A06P0S2NB20' },
  { voltage: '230V 1PH', hp: 2,    file: 'CFW300A07P3S2NB20' },
  { voltage: '230V 1PH', hp: 3,    file: 'CFW300A10P0S2NB20' },

  // 115V
  { voltage: '115V', hp: 0.33, file: 'CFW300A01P6S1NB20' },
  { voltage: '115V', hp: 0.5,  file: 'CFW300A02P6S1NB20' },
  { voltage: '115V', hp: 1,    file: 'CFW300A04P2S1NB20' },
  { voltage: '115V', hp: 1.5,  file: 'CFW300A06P0S1NB20' },
]

export function pdfPath(file) {
  return `/datasheets/CFW300/${file}-datapack.pdf`
}

export default drives
