import React from "react";
import { useState, useEffect } from "react";
import { sevenDayForecast } from "../utils/axiosCalls";
import './Body.css'

const Body = () => {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    sevenDayForecast()
      .then((forecast) => {
        setWeatherData(forecast)
      })
  }, [])

  //to be removed later
  console.log('7dayforecast', weatherData)

  return (
    weatherData ? (
      <div>{JSON.stringify(weatherData)}</div>
    ) : (
      // will be removed or replaced after testing
      <div className='main'>hang on tight, we're loading up your forecast</div>
    )
  )
}

export default Body;