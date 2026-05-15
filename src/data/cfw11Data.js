const drives = [
  // 380-480V (3PH)
  { voltage: '480V', hp: 2,    file: 'CFW110003T40N1Z' },
  { voltage: '480V', hp: 3,    file: 'CFW110005T40N1Z' },
  { voltage: '480V', hp: 4,    file: 'CFW110007T40N1Z' },
  { voltage: '480V', hp: 6,    file: 'CFW110010T40N1Z' },
  { voltage: '480V', hp: 7.5,  file: 'CFW110013T40N1Z' },
  { voltage: '480V', hp: 10,   file: 'CFW110017T40N1Z' },
  { voltage: '480V', hp: 15,   file: 'CFW110024T40N1Z' },
  { voltage: '480V', hp: 20,   file: 'CFW110031T40N1Z' },
  { voltage: '480V', hp: 25,   file: 'CFW110038T40N1Z' },
  { voltage: '480V', hp: 30,   file: 'CFW110045T40N1Z' },
  { voltage: '480V', hp: 40,   file: 'CFW110058T40N1Z' },
  { voltage: '480V', hp: 50,   file: 'CFW110070T4SZ'   },
  { voltage: '480V', hp: 60,   file: 'CFW110088T4SZ'   },
  { voltage: '480V', hp: 75,   file: 'CFW110105T40N1Z' },
  { voltage: '480V', hp: 100,  file: 'CFW110142T40N1Z' },
  { voltage: '480V', hp: 125,  file: 'CFW110180T40N1Z' },
  { voltage: '480V', hp: 150,  file: 'CFW110211T40N1Z' },
  { voltage: '480V', hp: 200,  file: 'CFW110242T4SZ'   },
  { voltage: '480V', hp: 250,  file: 'CFW110312T4SZ'   },
  { voltage: '480V', hp: 300,  file: 'CFW110370T4SZ'   },
  { voltage: '480V', hp: 400,  file: 'CFW110477T4SZ'   },
  { voltage: '480V', hp: 450,  file: 'CFW110515T4SZ'   },
  { voltage: '480V', hp: 500,  file: 'CFW110601T4SZ'   },
  { voltage: '480V', hp: 600,  file: 'CFW110720T4SZ'   },
  { voltage: '480V', hp: 700,  file: 'CFW110877T4SZ'   },
  { voltage: '480V', hp: 800,  file: 'CFW111062T4SZ'   },

  // 200-240V (3PH)
  { voltage: '240V 3PH', hp: 1,    file: 'CFW110006T20N1Z' },
  { voltage: '240V 3PH', hp: 1.5,  file: 'CFW110007T20N1Z' },
  { voltage: '240V 3PH', hp: 2,    file: 'CFW110010T20N1Z' },
  { voltage: '240V 3PH', hp: 4,    file: 'CFW110016T20N1Z' },
  { voltage: '240V 3PH', hp: 7.5,  file: 'CFW110024T20N1Z' },
  { voltage: '240V 3PH', hp: 10,   file: 'CFW110028T20N1Z' },
  { voltage: '240V 3PH', hp: 12.5, file: 'CFW110033T20N1Z' },
  { voltage: '240V 3PH', hp: 15,   file: null               },
  { voltage: '240V 3PH', hp: 20,   file: 'CFW110054T20N1Z' },
  { voltage: '240V 3PH', hp: 25,   file: 'CFW110070T20N1Z' },
  { voltage: '240V 3PH', hp: 30,   file: 'CFW110086T2SZ'   },
  { voltage: '240V 3PH', hp: 40,   file: 'CFW110105T2SZ'   },
  { voltage: '240V 3PH', hp: 50,   file: 'CFW110142T20N1Z' },
  { voltage: '240V 3PH', hp: 60,   file: 'CFW110180T20N1Z' },
  { voltage: '240V 3PH', hp: 75,   file: 'CFW110211T20N1Z' },

  // 500-690V (3PH)
  { voltage: '690V', hp: 2,    file: 'CFW110002T501NFZ'  },
  { voltage: '690V', hp: 3,    file: 'CFW110004T501NFZ'  },
  { voltage: '690V', hp: 5,    file: 'CFW110007T501NFZ'  },
  { voltage: '690V', hp: 7.5,  file: 'CFW110010T501NFZ'  },
  { voltage: '690V', hp: 10,   file: 'CFW110012T501NFZ'  },
  { voltage: '690V', hp: 15,   file: 'CFW110017T501NFZ'  },
  { voltage: '690V', hp: 20,   file: 'CFW110022T60NBZ'   },
  { voltage: '690V', hp: 25,   file: 'CFW110027T60NBZ'   },
  { voltage: '690V', hp: 30,   file: 'CFW110032T60NBZ'   },
  { voltage: '690V', hp: 40,   file: 'CFW110044T60NBZ'   },
  { voltage: '690V', hp: 50,   file: 'CFW110053T60N1NBYZ'},
  { voltage: '690V', hp: 60,   file: 'CFW110063T60N1NBYZ'},
  { voltage: '690V', hp: 75,   file: 'CFW110080T60N1NBYZ'},
  { voltage: '690V', hp: 100,  file: 'CFW110107T60N1NBYZ'},
  { voltage: '690V', hp: 125,  file: 'CFW110125T60N1NBYZ'},
  { voltage: '690V', hp: 150,  file: 'CFW110150T60N1NBYZ'},
  { voltage: '690V', hp: 200,  file: 'CFW110216T60NBZ'   },
  { voltage: '690V', hp: 250,  file: 'CFW110289T60NBZ'   },
  { voltage: '690V', hp: 300,  file: 'CFW110315T60NBZ'   },
  { voltage: '690V', hp: 350,  file: 'CFW110365T60NBZ'   },
  { voltage: '690V', hp: 450,  file: 'CFW110435T60NBZ'   },

  // 200-240V (1PH)
  { voltage: '240V 1PH', hp: 1, file: '10574720_datapacks' },
  { voltage: '240V 1PH', hp: 2, file: '10574721_datapacks' },
  { voltage: '240V 1PH', hp: 3, file: '10574722_datapacks' },
]

export function pdfPath(file) {
  if (file.startsWith('10574')) {
    return `/select-electrical/datasheets/CFW11/${file}.pdf`
  }
  return `/select-electrical/datasheets/CFW11/${file}-datapack.pdf`
}

export default drives
