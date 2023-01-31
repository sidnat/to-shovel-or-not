import React, {useState, useEffect} from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { threeDayForecast } from "../utils/axiosCalls";
import { useCookies } from 'react-cookie';

export default function Index() {
  const [weatherData, setWeatherData] = useState(null)
  const [cookies, setCookie] = useCookies(['location', 'label']);

  const onSubmit = (location, label) => {
    setCookie('location', location, { path: '/' })
    setCookie('label', label, { path: '/' })
  }

  useEffect(() => {
    threeDayForecast(cookies.location)
      .then(forecast => setWeatherData(forecast))
      .catch(err => console.log(Error(err)))
  }, [cookies.location])


  return (
    <div className='flex flex-col' style={{height: '100vh'}}>
      <Header onSubmit={onSubmit} label={cookies.label}/>
      <Body weatherData={weatherData}/>
      <Footer />
    </div>
  )
}