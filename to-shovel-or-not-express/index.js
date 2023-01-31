const express = require('express')
const app = express()
const port = 3003
const { sevenDayForecast } = require('./utils/weather-api-axios')

app.get("/getForecast", async (req, res) => {
  const forecast = await sevenDayForecast(req.query.location)
  res.send(forecast)
})

app.listen(port, () => {
  console.log(`Salty Shovel back-end listening on port ${port}`)
})