const drives = [
  // 200-240V
  { voltage: '240V', hp: 0.33, file: 'CFW100A01P6S220G2' },
  { voltage: '240V', hp: 0.5,  file: 'CFW100B02P6S220G2' },
  { voltage: '240V', hp: 1,    file: 'CFW100C04P2S220G2' },

  // 100-127V
  { voltage: '120V', hp: 0.33, file: 'CFW100A01P6S120G2' },
  { voltage: '120V', hp: 0.5,  file: 'CFW100B02P6S120G2' },
]

export function pdfPath(file) {
  return `/datasheets/CFW100/${file}-datapack.pdf`
}

export default drives
