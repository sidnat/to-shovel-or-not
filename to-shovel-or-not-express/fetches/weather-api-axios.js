const axios = require('axios')
const { convertDateToWeekday } = require('../utils/date-to-weekday')
require('dotenv').config()

// hardcoded location example: Toronto
const defaultLocation = '43.65,-79.38'

const threeDayForecast = (location) => {
  // if no location provided, load default
  location = location ? location : defaultLocation
  // axios call to weather forecast api
  return axios.get(`http://api.weatherunlocked.com/api/forecast/${location}?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`, {
    headers: {
      'Accept': 'application/json',
    }
  })
    .then((forecastObj) => {
      const weekForecast = []

      // iterates through API data, filters and returns only required data
      if (forecastObj.data.Days) {
        for (let day of forecastObj.data.Days) {
          const eachDay = {
            date: convertDateToWeekday(day.date),
            format_date: day.date,
            high: day.temp_max_c,
            low: day.temp_min_c,
            total_snow: day.snow_total_mm,
            total_rain: day.rain_total_mm,
            Timeframes: []
          }

          // iterates through nested timeframe data, filters and returns only required data
          if (day.Timeframes) {
            for (let timeSegment of day.Timeframes) {

              // formats time 300 to 03:00
              let time = timeSegment.time.toString()
              if (time.length < 4) {
                time = `0${time}`
              }
              const formattedTime = `${time[0]}${time[1]}:${time[2]}${time[3]}`

              const eachTimeframe = {
                time: formattedTime,
                wx_code: timeSegment.wx_code,
                rain_mm: timeSegment.rain_mm,
                snow_mm: timeSegment.snow_mm
              }
              eachDay.Timeframes.push(eachTimeframe)
            }
          }
          weekForecast.push(eachDay)
        }
        // returns today + 3 days. last day is for determination logic, not to be shown as weather card
        return weekForecast.slice(1, 5)
      }
      return null
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = { threeDayForecast }