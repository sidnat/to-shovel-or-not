const weathers = [
  { 
    id: 'sunny',
    icon: 'https://i.imgur.com/E85PFZI.png',
    codes: [0]
  },
  { 
    id: 'cloudy',
    icon: 'https://i.imgur.com/RmrEXg2.png',
    codes: [1, 45, 49]
  },
  { 
    id: 'overcast',
    icon: 'https://i.imgur.com/swpGTYe.png',
    codes: [2, 3, 10]
  },
  { 
    id: 'rain',
    icon: 'https://i.imgur.com/6VDIpTT.png',
    codes: [21, 24, 50, 51, 56, 57, 60, 62, 63, 64, 65, 66, 67, 80, 81, 82]
  },
  { 
    id: 'storm',
    icon: 'https://i.imgur.com/826afL6.png',
    codes: [29, 91, 92]
  },
  { 
    id: 'snow',
    icon: 'https://i.imgur.com/Ix9y3t2.png',
    codes: [22, 38, 39, 70, 71, 72, 73, 74, 75, 79, 93, 94]
  },
  { 
    id: 'sleet',
    icon: 'https://i.imgur.com/r0apq1c.png',
    codes: [23, 68, 69, 83, 84, 85, 86, 87, 88]
  }
];

// Takes an array of wx_codes and returns an img url.
export default function selectWeatherIcon(codes) {
  if (codes.length < 1) return ''
  
  const weatherCodes = codes.map((code) => {
    for (let i = 0; i < weathers.length; i++) {
      if (weathers[i].codes.includes(code)) {
        return i
      }
    }
    return -1
  })

  const idx = weatherCodes.sort().reverse().shift()

  return idx === -1 ? '' : weathers[idx].icon
}