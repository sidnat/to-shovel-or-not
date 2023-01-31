import axios from "axios";

//hardcoded location example: Toronto
const defaultLocation = '43.65,-79.38'

export const threeDayForecast = (location) => {
  location = location ? location : defaultLocation

  return axios.get(`http://localhost:3003/getForecast?location=${location}`)
    .then((forecastObj) => {
      return forecastObj.data
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}