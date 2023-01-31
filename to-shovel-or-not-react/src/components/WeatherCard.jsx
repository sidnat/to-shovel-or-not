import React from "react";
import Chart from "./Chart";
import { BsSnow3, BsDroplet } from 'react-icons/bs';
import selectWeatherIcon from "../helpers/select-weather-icon";

export default function WeatherCard(props) {
  const {date, high, low, total_snow, total_rain, timeframes} = props;

  return (
    <div className="flex flex-col mt-6 w-1/6 h-5/6 p-5 text-white bg-sky-400 font-bold drop-shadow-md rounded-lg">
      <div className="flex flex-row place-content-between items-end py-3">
        <img src={selectWeatherIcon(timeframes.map(period => period.wx_code))} alt="weather icon" className="w-1/2 rounded-full border-4 border-sky-800"/>
        <p className="text-3xl">{date}</p>
      </div>
      <div className=" w-full h-2/5 text-center">
        <Chart data={timeframes}/>
      </div>
      <div className="flex flex-row h-1/6 place-content-around pt-3 text-center text-2xl">
        <span>
          <p>HIGH</p>
          <p className="text-4xl">{`${high}\u00b0`}</p>
        </span>
        <span>
          <p>LOW</p>
          <p className="text-4xl">{`${low}\u00b0`}</p>
        </span>
      </div>
      <div className="flex flex-row h-1/6 place-content-around pt-3 text-center">
        <span className="flex flex-col items-center">
          <BsDroplet className="h-10 w-10"/>
          <p className="text-xl">{`${total_rain}mm`}</p>
        </span>
        <span className="flex flex-col items-center">
          <BsSnow3 className="h-10 w-10"/>
          <p className="text-xl">{`${total_snow}mm`}</p>
        </span>
      </div>
    </div>
  )
}