const axios = require('axios')
const { convertDateToWeekday } = require('./date-to-weekday')
require('dotenv').config()

//hardcoded location example: Toronto
const defaultLocation = '43.65,-79.38'

const threeDayForecast = (location) => {
  location = location ? location : defaultLocation

  // axios call to weather forecast api
  return axios.get(`http://api.weatherunlocked.com/api/forecast/${location}?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`, {
    headers: {
      'Accept': 'application/json',
    }
  })
    .then((forecastObj) => {
      const weekForecast = []

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

          if (day.Timeframes) {
            for (let timeSegment of day.Timeframes) {
              // converts snow accumulation from cm to mm
              const snow_accum_mm = timeSegment.snow_accum_cm * 10;

              const eachTimeframe = {
                time: timeSegment.time,
                weather_desc: timeSegment.wx_desc,
                wx_code: timeSegment.wx_code,
                weather_icon: timeSegment.wx_icon,
                temp_c: timeSegment.temp_c,
                feelslike_c: timeSegment.feelslike_c,
                rain_mm: timeSegment.rain_mm,
                snow_mm: timeSegment.snow_mm,
                snow_accum_mm: snow_accum_mm
              }

              eachDay.Timeframes.push(eachTimeframe)
            }
          }

          weekForecast.push(eachDay)
        }

        // returns today + next 2 days
        return weekForecast.slice(1,5)
      }

      return null
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = { threeDayForecast }