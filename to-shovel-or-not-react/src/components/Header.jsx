import React, { useState, useEffect } from "react";
import { getLongLatAndLabel } from "../utils/axiosCalls";

export default function Header(props) {
  const { onSubmit, locationName } = props;
  const [locationInput, setLocationInput] = useState('')
  const [headerLocation, setHeaderLocation] = useState('Toronto, Canada')

  // updates Weather For: "Location"
  useEffect(() => {
    if (locationName) {
      setHeaderLocation(locationName)
    }
  }, [locationName])

  // handles user submitted location
  const handleSubmit = (e) => {
    e.preventDefault()
    // axios call function to backend to retrieve coordinates and location label (Toronto, ON, Canada)
    getLongLatAndLabel(locationInput)
      .then(locationData => {
        // sends returned axios call location data to onSubmit prop function which updates cookies
        onSubmit(locationData.coordinates, locationData.location)
        setLocationInput('')
      })
  }

  return (
    <div className="bg-sky-400 h-40 flex flex-row">
      <span className="basis-1/4 flex items-center">
        <h1 className="text-white font-logo text-7xl pl-5 drop-shadow-md">SaltyShovel</h1>
      </span>
      <div className="basis-3/4 flex flex-col items-center justify-center">
        <p className="text-white font-sans font-bold text-lg">Where are you located?</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="h-8 w-96 rounded-full text-center border-b-4"
            placeholder="Postal Code, or City and Country"
            onChange={e => setLocationInput(e.target.value)}
            value={locationInput}>
          </input>
        </form>
        <p className="text-white font-sans font-bold text-lg">Weather for: {headerLocation}</p>
      </div>
      <span className="basis-1/4" />
    </div>
  )
}