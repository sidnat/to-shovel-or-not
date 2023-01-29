import axios from "axios";
//might be easier to use lat/long over postal code. request user location like many other sites

//hardcoded location example: Toronto
const hardCodedLocation = '43.65,-79.38'

export const sevenDayForecast = (location) => {
  return axios.get(`http://api.weatherunlocked.com/api/forecast/${hardCodedLocation}?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`,
  {
    headers: {'Accept': 'application/json'}
  })
    .then(forecastObj => forecastObj.data)
    .catch(err => err)
}