import React, {useState, useEffect} from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { threeDayForecast, getLongLatAndLabel } from "../utils/axiosCalls";
import { useCookies } from 'react-cookie';

export default function Index() {
  const [weatherData, setWeatherData] = useState(null)
  const [cookies, setCookie] = useCookies(['coordinates', 'location']);
  const [loading, setLoading] = useState(true);

  const onSubmit = (location) => {
    setLoading(true)
    return getLongLatAndLabel(location)
      .then(locationData => {
        setCookie('coordinates', locationData.coordinates, { path: '/' })
        setCookie('location', locationData.location, { path: '/' })
        setLoading(false)
      })
  }

  // gets weather data for longitude and latitude
  useEffect(() => {
    threeDayForecast(cookies.coordinates)
      .then(forecast => {
        setWeatherData(forecast)
        setLoading(false)
      })
      .catch(err => console.log(Error(err)))
  }, [cookies.coordinates])


  return (
    <div className='flex flex-col' style={{height: '100vh'}}>
      <Header onSubmit={onSubmit} locationName={cookies.location}/>
      <Body weatherData={weatherData} isLoading={loading}/>
      <Footer />
    </div>
  )
}