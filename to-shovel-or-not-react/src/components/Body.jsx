import React from "react";
import { useState, useEffect } from "react";
import { sevenDayForecast } from "../utils/axiosCalls";
import WeatherCard from "./WeatherCard";

const Body = () => {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    sevenDayForecast()
      .then(forecast => setWeatherData(forecast))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="flex flex-col h-full bg-sky-800">
      <div className="flex flex-row place-content-around h-full px-96">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
      {/* Determination Component Goes Here */}
    </div>
  )
}

export default Body;