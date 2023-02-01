const axios = require('axios')
require('dotenv').config()

const getLongLat = (locationInput) => {
  // axios call to get longitude and latitude coordinates
  return axios.get(`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITION_STACK_KEY}&query=${locationInput}`)
    .then((res) => {
      const coordinates = [res.data.data[0].latitude, res.data.data[0].longitude].join(',')

      const location = res.data.data[0].label

      return {coordinates, location}
    })
    .catch((err) => { 
      console.log(Error(err))
      return null
    })
}

module.exports = { getLongLat }