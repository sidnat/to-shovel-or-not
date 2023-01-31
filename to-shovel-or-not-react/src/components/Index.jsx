import React, {useState, useEffect} from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { sevenDayForecast } from "../utils/axiosCalls";

export default function Index() {
  const [weatherData, setWeatherData] = useState(null)

  const onSubmit = (location) => {
    console.log('submit location:', location);
    sevenDayForecast(location)
      .then(forcast => setWeatherData(forcast))
      .catch(err => console.log(Error(err)))
  }

  useEffect(() => {
    sevenDayForecast()
      .then(forecast => setWeatherData(forecast))
      .catch(err => console.log(Error(err)))
  }, [])


  return (
    <div className='flex flex-col' style={{height: '100vh'}}>
      <Header onSubmit={onSubmit}/>
      <Body weatherData={weatherData}/>
      <Footer />
    </div>
  )
}