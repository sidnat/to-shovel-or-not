import React from "react";
import { useState, useEffect } from "react";
import { sevenDayForecast } from "../utils/axiosCalls";
import './Body.css'

const Body = () => {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    sevenDayForecast()
      .then(forecast => setWeatherData(forecast))
      .catch(err => console.log(err))
  }, [])

  return (
    weatherData ? (
      <div>{JSON.stringify(weatherData)}</div>
    ) : (
      <div className='main'>hang on tight, we're checking to see if your forecast data exists</div>
    )
  )
}

export default Body;