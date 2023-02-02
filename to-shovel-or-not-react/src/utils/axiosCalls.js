import axios from "axios";

// should be in a fetches folder
// file for each axios

//hardcoded location example: Toronto
const defaultLocation = '43.65,-79.38'

export const threeDayForecast = (location) => {
  location = location ? location : defaultLocation

  return axios.get(`https://salty-shovel-express.vercel.app/getForecast?location=${location}`)
    .then((forecastObj) => {
      return forecastObj.data
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

export const getLongLatAndLabel = (locationInput) => {
  return axios.get(`https://salty-shovel-express.vercel.app/getLongLat?locationInput=${locationInput}`)
  .then((longLat) => {
    return longLat.data
  })
  .catch((error) => {
    console.log(error)
    return null
  })
}