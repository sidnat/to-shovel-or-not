import axios from "axios";
import convertDateToWeekday from "../helpers/date-to-weekday";

//hardcoded location example: Toronto
const defaultLocation = '43.65,-79.38'

// will be moved to express backend in order to hide API key and ID
export const sevenDayForecast = (location) => {
  location = location ? location : defaultLocation

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
            high: day.temp_max_c,
            low: day.temp_min_c,
            total_snow: day.snow_total_mm,
            total_rain: day.rain_total_mm,
            Timeframes: []
          }

          if (day.Timeframes) {
            for (let timeSegment of day.Timeframes) {
              const eachTimeframe = {
                time: timeSegment.time,
                wx_code: timeSegment.wx_code,
                weather_desc: timeSegment.wx_desc,
                weather_icon: timeSegment.wx_icon,
                temp_c: timeSegment.temp_c,
                feelslike_c: timeSegment.feelslike_c,
                rain_mm: timeSegment.rain_mm,
                snow_mm: timeSegment.snow_mm,
                snow_accum_mm: timeSegment.snow_accum_cm * 10
              }

              eachDay.Timeframes.push(eachTimeframe)
            }
          }

          weekForecast.push(eachDay)
        }

        return weekForecast.slice(0, 3)
      }

      return null
    })
}