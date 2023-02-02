import React from "react";
import WeatherCard from "./WeatherCard";
import Loading from "./Loading";
import Determination from "./Determination";
import groupWeatherInPairs from "../selectors/group-weather-in-pairs";
import determineOutcome from "../helpers/determine-outcome";

export default function Body(props) {
  const { weatherData, isLoading } = props;

  // Creates the WeatherCard components.
  function drawWeatherCards() {
    if (!weatherData) return null
    
    return weatherData
      .map((day, i) => 
        <WeatherCard
          key={i} 
          date={(i === 0 ? 'Today' : day.date)}
          format_date={day.format_date}
          high={day.high}
          low={day.low} 
          total_snow={day.total_snow} 
          total_rain={day.total_rain} 
          timeframes={day.Timeframes} 
        />)
      .slice(0,3)
  }

  // Creates Determination components
  const drawDeterminations = () => {
    return weatherData ? 
      groupWeatherInPairs(weatherData)
        .map((pair, i) => <Determination key={i} status={determineOutcome(pair)} /> ) 
      : null;
  }

  return (
    <div className="flex flex-col h-full bg-sky-800">
      <div className="flex flex-row h-2/3 py-4 justify-center">
        {isLoading ? <Loading /> : drawWeatherCards()}
      </div>
      <div className="flex flex-row h-1/3 w-px-96 pb-4 justify-center text-white font-sans font-bold text-lg">
        {!isLoading && drawDeterminations()}
      </div>
    </div>
  )
}