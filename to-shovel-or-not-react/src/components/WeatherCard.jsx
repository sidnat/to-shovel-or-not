import React from "react";
import Chart from "./Chart";
import { BsSnow3, BsDroplet } from 'react-icons/bs';
import selectWeatherIcon from "../helpers/select-weather-icon";

export default function WeatherCard(props) {
  const {date, format_date, high, low, total_snow, total_rain, timeframes} = props;

  return (
    <div className="flex flex-col h-full p-4 mx-4 text-white bg-sky-400 font-bold drop-shadow-md rounded-lg">
      <div className="flex flex-row place-content-between items-end py-3">
        <img src={selectWeatherIcon(timeframes.map(period => period.wx_code))} alt="weather icon" className="w-24 rounded-full border-4 border-sky-800"/>
        <div>
        <p className="text-4xl">{date}</p>
          <p className="text-1xl">{format_date}</p>
        </div>
      </div>
      <div className=" w-full pt-4 h-2/5 text-center">
        <Chart data={timeframes}/>
      </div>
      <div className="flex flex-row h-1/6 place-content-around pt-3 text-center text-xl">
        <span className="w-36">
          <p>HIGH</p>
          <p className="text-3xl">{`${high}\u00b0C`}</p>
        </span>
        <span className="w-36">
          <p>LOW</p>
          <p className="text-3xl">{`${low}\u00b0C`}</p>
        </span>
      </div>
      <div className="flex flex-row h-1/6 place-content-around pt-3">
        <span className="flex flex-col items-center w-36">
          <BsDroplet className="h-10 w-10"/>
          <p className="text-xl">{`${total_rain}mm`}</p>
        </span>
        <span className="flex flex-col items-center w-36">
          <BsSnow3 className="h-10 w-10"/>
          <p className="text-xl">{`${total_snow}mm`}</p>
        </span>
      </div>
    </div>
  )
}