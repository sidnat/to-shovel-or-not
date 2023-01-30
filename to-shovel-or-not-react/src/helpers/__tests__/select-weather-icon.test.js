import selectWeatherIcon from "../select-weather-icon";

test('selectWeatherIcon returns a string', () => {
  const result = selectWeatherIcon([0, 0, 1]);
  expect(typeof(result)).toBe('string')
})

test('selectWeatherIcon returns an empty string if the input array is empty', () => {
  const result = selectWeatherIcon([]);
  expect(result).toBe('')
})

test('selectWeatherIcon returns the correct img url if there is only 1 valid code', () => {
  const result = selectWeatherIcon([-1, -1, 0]);
  expect(result).toBe('https://i.imgur.com/E85PFZI.png')
})

test('selectWeatherIcon returns empty string when given all invalid codes', () => {
  const result = selectWeatherIcon([-1, 199, 420]);
  expect(result).toBe('')
})

describe('selectWeatherIcon returns the img url for the most severe code', () => {
  test('it returns sunny icon when it is only sunny', () => {
    const sunny = selectWeatherIcon([0, 0, 0]);
    expect(sunny).toBe('https://i.imgur.com/E85PFZI.png');
  })

  test('it returns partly cloudy icon when there is no worse weather', () => {
    const partCloudy = selectWeatherIcon([0, 1, 0]);
    expect(partCloudy).toBe('https://i.imgur.com/RmrEXg2.png');
  })

  test('it returns cloudy icon when there is no worse weather', () => {
    const cloudy = selectWeatherIcon([0, 3, 10]);
    expect(cloudy).toBe('https://i.imgur.com/swpGTYe.png');
  })

  test('it returns rain icon when there is no worse weather', () => {
    const rain = selectWeatherIcon([0, 1, 21, 24]);
    expect(rain).toBe('https://i.imgur.com/6VDIpTT.png');
  })

  test('it returns lightning icon when there is no worse weather', () => {
    const lightning = selectWeatherIcon([0, 1, 3, 91]);
    expect(lightning).toBe('https://i.imgur.com/826afL6.png');
  })

  test('it returns snow icon when there is no worse weather', () => {
    const snow = selectWeatherIcon([0, 91, 1, 93]);
    expect(snow).toBe('https://i.imgur.com/Ix9y3t2.png');
  })

  test('it returns sleet icon when there is sleet weather', () => {
    const sleet = selectWeatherIcon([0, 91, 1, 83]);
    expect(sleet).toBe('https://i.imgur.com/r0apq1c.png');
  })
})