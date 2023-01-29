import React, { useState } from "react";

export default function Header() {
  const [locationInput, setLocationInput] = useState('')

  return (
    <div className="bg-sky-400 h-32 flex flex-row">
      <div className="basis-1/4 flex items-center">
        <h1 className="text-white font-logo text-7xl pl-5 drop-shadow-md">SaltyShovel</h1>
      </div>
      <span className="basis-3/4 flex flex-col items-center justify-center">
        <p className="text-white font-sans font-bold text-lg">Where are you located?</p>
        <input 
          className="h-8 w-96 rounded-full text-center border-b-4" 
          placeholder="Postal Code" 
          onChange={e => setLocationInput(e.target.value)} 
          value={locationInput}>
        </input>
      </span>
      <span className="basis-1/4"/>
    </div>
  )
}