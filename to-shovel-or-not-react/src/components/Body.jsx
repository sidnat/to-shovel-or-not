import React from "react";
import { useState, useEffect } from "react";
import { sevenDayForecast } from "../utils/axiosCalls";
import WeatherCard from "./WeatherCard";

export default function Body() {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    sevenDayForecast()
      .then(forecast => {
        setWeatherData(forecast)
      })
      .catch(err => console.log(err))
  }, [])

  // Creates the WeatherCard components.
  function drawWeatherCards() {
    if (!weatherData) return null
    return weatherData.map((day, i) => {
      return(
        <WeatherCard key={i} date={(i === 0 ? 'Today' : day.date)} high={day.high} low={day.low} total_snow={day.total_snow} total_rain={day.total_rain} timeframes={day.Timeframes}/>
      );
    })
  }

  return (
    <div className="flex flex-col h-full bg-sky-800">
      <div className="flex flex-row place-content-around h-full px-96">
        {drawWeatherCards()}
      </div>
      {/* Determination Component Goes Here */}
    </div>
  )
}