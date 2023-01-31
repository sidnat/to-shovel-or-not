import groupWeatherInPairs from "../group-weather-in-pairs";

test('groupWeatherInPairs should return an array with 2 sub arrays.', () => {
  const result = groupWeatherInPairs([{low: 1, snow: 10, rain: 0}, {low: -10, snow: 3, rain: 0}, {low: 0, snow: 0, rain: 4}]);
  expect(result).toStrictEqual([[{low: 1, snow: 10, rain: 0}, {low: -10, snow: 3, rain: 0}], [{low: -10, snow: 3, rain: 0}, {low: 0, snow: 0, rain: 4}]])
})

test('groupWeatherInPairs should return an empty array when given an array with 1 element.', () => {
  const result = groupWeatherInPairs([{low: 1, snow: 10, rain: 0}]);
  expect(result).toStrictEqual([])
})

test('groupWeatherInPairs should return an empty array when given an empty array.', () => {
  const result = groupWeatherInPairs([]);
  expect(result).toStrictEqual([])
})