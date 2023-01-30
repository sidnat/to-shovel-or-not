import selectWeatherIcon from "../select-weather-icon";

test('selectWeatherIcon returns a string', () => {
  const result = selectWeatherIcon([0, 0, 1]);
  expect(typeof(result)).toBe('string')
})