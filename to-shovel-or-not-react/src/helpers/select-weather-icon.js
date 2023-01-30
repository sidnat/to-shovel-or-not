const weathers = [
  { 
    // Sunny
    icon: 'https://i.imgur.com/E85PFZI.png',
    codes: [0]
  },
  { 
    // Cloudy
    icon: 'https://i.imgur.com/RmrEXg2.png',
    codes: [1, 45, 49]
  },
  { 
    // Overcast
    icon: 'https://i.imgur.com/swpGTYe.png',
    codes: [2, 3, 10]
  },
  { 
    // Rain
    icon: 'https://i.imgur.com/6VDIpTT.png',
    codes: [21, 24, 50, 51, 56, 57, 60, 62, 63, 64, 65, 66, 67, 80, 81, 82]
  },
  { 
    // Storm
    icon: 'https://i.imgur.com/826afL6.png',
    codes: [29, 91, 92]
  },
  { 
    // Snow
    icon: 'https://i.imgur.com/Ix9y3t2.png',
    codes: [22, 38, 39, 70, 71, 72, 73, 74, 75, 79, 93, 94]
  },
  { 
    // Sleet
    icon: 'https://i.imgur.com/r0apq1c.png',
    codes: [23, 68, 69, 83, 84, 85, 86, 87, 88]
  }
];

// Takes an array of wx_codes and returns an img url.
export default function selectWeatherIcon(codes) {
  if (codes.length < 1) return ''

  // Gets the highest weather index.
  // NOTE: weathers array is ordered from best to worst weather.
  const maxIdx = codes
    .map(code => matchCode(code))
    .sort()
    .reverse()
    .shift()
  
  // Use the highest index to get the weather icon.
  const weather = weathers[maxIdx];
  return !weather ? '' : weather.icon;
}

// Searches weathers for the given code, returns the index of the weather if there's a match, or -1 if there isn't.
const matchCode = (code) => {
  for (let i = 0; i < weathers.length; i++) {
    if (weathers[i].codes.includes(code)) {
      return i
    }
  }
  return -1
}