// Creates a new array that contains arrays of the current weather, and the following day's weather
export default function groupWeatherInPairs(forecast) {
  const result = forecast.map((weather, i) => {
    return i !== forecast.length - 1 ? [weather, forecast[i + 1]] : null
})
  return result.slice(0, result.length -1)
}