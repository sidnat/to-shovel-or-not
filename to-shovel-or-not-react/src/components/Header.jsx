import React, { useState } from "react";
import { getLongLatAndLabel } from "../utils/axiosCalls";

export default function Header(props) {
  const { onSubmit, label } = props;
  const [locationInput, setLocationInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const coordinateData = await getLongLatAndLabel(locationInput)
    onSubmit(coordinateData[0], coordinateData[1])
  }

  return (
    <div className="bg-sky-400 h-40 flex flex-row">
      <span className="basis-1/4 flex items-center">
        <h1 className="text-white font-logo text-7xl pl-5 drop-shadow-md">SaltyShovel</h1>
      </span>
      <div className="basis-3/4 flex flex-col items-center justify-center">
        <p className="text-white font-sans font-bold text-lg">Where are you located?</p>
        <p className="text-white font-sans font-bold text-lg">Current Location: {label}</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input 
            className="h-8 w-96 rounded-full text-center border-b-4" 
            placeholder="Postal Code" 
            onChange={e => setLocationInput(e.target.value)} 
            value={locationInput}>
          </input>
        </form>
      </div>
      <span className="basis-1/4"/>
    </div>
  )
}