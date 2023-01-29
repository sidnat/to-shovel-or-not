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

  //to be removed later
  console.log('7dayforecast', weatherData)

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row">
      {/* Weather Components Go Here */}
      </div>
      {/* Determination Component Goes Here */}
    </div>
  )
}

export default Body;