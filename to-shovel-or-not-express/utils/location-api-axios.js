const axios = require('axios')
require('dotenv').config()

const getLongLat = (locationInput) => {
  return axios.get(`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITION_STACK_KEY}&query=${locationInput}`)
    .then((res) => {
      const coordinates = [res.data.data[0].latitude, res.data.data[0].longitude].join(',')

      const label = res.data.data[0].label

      return [coordinates, label]
    })
    .catch((err) => { 
      console.log(Error(err))
      return null
    })
}

module.exports = { getLongLat }