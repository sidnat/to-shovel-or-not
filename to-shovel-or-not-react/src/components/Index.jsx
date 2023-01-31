import React, {useState, useEffect} from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { threeDayForecast } from "../utils/axiosCalls";
import { useCookies } from 'react-cookie';

export default function Index() {
  const [weatherData, setWeatherData] = useState(null)
  const [cookies, setCookie] = useCookies(['coordinates', 'location']);

  const onSubmit = (coordinates, location) => {
    setCookie('coordinates', coordinates, { path: '/' })
    setCookie('location', location, { path: '/' })
  }

  useEffect(() => {
    threeDayForecast(cookies.coordinates)
      .then(forecast => setWeatherData(forecast))
      .catch(err => console.log(Error(err)))
  }, [cookies.coordinates])


  return (
    <div className='flex flex-col' style={{height: '100vh'}}>
      <Header onSubmit={onSubmit} location={cookies.location}/>
      <Body weatherData={weatherData}/>
      <Footer />
    </div>
  )
}