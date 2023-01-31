const express = require('express')
const app = express()
const port = 3003
const { threeDayForecast } = require('./utils/weather-api-axios')
const { getLongLat } = require('./utils/location-api-axios')
var cors = require('cors')
app.use(cors())

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.get("/getForecast", [cors(corsOptions)], async (req, res) => {
  const forecast = await threeDayForecast(req.query.location)
  res.send(forecast)
})

app.get("/getLongLat", [cors(corsOptions)], async (req, res) => {
  const longLat = await getLongLat(req.query.locationInput)
  res.send(longLat)
})

app.listen(port, () => {
  console.log(`Salty Shovel back-end listening on port ${port}`)
})