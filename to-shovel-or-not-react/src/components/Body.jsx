import React from "react";
import WeatherCard from "./WeatherCard";
import Determination from "./Determination";
import groupWeatherInPairs from "../selectors/group-weather-in-pairs";

export default function Body(props) {
  const { weatherData } = props;

  // Creates the WeatherCard components.
  function drawWeatherCards() {
    if (!weatherData) return null
    return weatherData
      .map((day, i) => 
        <WeatherCard
          key={i} 
          date={(i === 0 ? 'Today' : day.date)} 
          high={day.high} low={day.low} 
          total_snow={day.total_snow} 
          total_rain={day.total_rain} 
          timeframes={day.Timeframes} 
        />)
      .slice(0,3)
  }

  // Creates Determination components
  const drawDeterminations = () => {
    return weatherData ? groupWeatherInPairs(weatherData).map((pair, i) => <Determination key={i} weathers={pair} /> ) : null;
  }

  return (
    <div className="flex flex-col h-full bg-sky-800">
      <div className="flex flex-row place-content-around h-full px-96">
        {drawWeatherCards()}
      </div>
      <div className="flex flex-row place-content-around h-full px-96 text-white font-sans font-bold text-lg">
        {drawDeterminations()}
      </div>
    </div>
  )
}