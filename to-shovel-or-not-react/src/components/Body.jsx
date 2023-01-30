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

  return (
    <div className="flex flex-col h-full bg-sky-800">
      <div className="flex flex-row place-content-around h-full px-96">
        {weatherData && 
        <>
          <WeatherCard date={'Today'} high={weatherData[0].high} low={weatherData[0].low} total_snow={weatherData[0].total_snow} total_rain={weatherData[0].total_rain}/>
          <WeatherCard date={weatherData[1].date} high={weatherData[1].high} low={weatherData[1].low} total_snow={weatherData[1].total_snow} total_rain={weatherData[1].total_rain}/>
          <WeatherCard date={weatherData[2].date} high={weatherData[2].high} low={weatherData[2].low} total_snow={weatherData[2].total_snow} total_rain={weatherData[2].total_rain}/>
        </>
        }
      </div>
      {/* Determination Component Goes Here */}
    </div>
  )
}