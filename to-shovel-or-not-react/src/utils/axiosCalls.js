import axios from "axios";
//couldn't get .env working so importing credentials will have to do for now
import { APP_ID, APP_KEY } from './apiCredentials'

//might be easier to use lat/long over postal code. request user location like many other sites

//hardcoded location example: Toronto
const hardCodedLocation = '43.65,-79.38'

export const sevenDayForecast = (location) => {
  return axios.get(`http://api.weatherunlocked.com/api/forecast/${hardCodedLocation}?app_id=${APP_ID}&app_key=${APP_KEY}`, {
    headers: {
      'Accept': 'application/json',
    }
  })
    .then((forecastObj) => {
      if (forecastObj.data) {
        return forecastObj.data
      }

      return null
    })
}