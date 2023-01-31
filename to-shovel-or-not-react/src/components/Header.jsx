import axios from "axios";
import React, { useState } from "react";
import { threeDayForecast } from "../utils/axiosCalls";

export default function Header(props) {
  const { onSubmit } = props;
  const [locationInput, setLocationInput] = useState('')

  // TODO: I don't think the axios request should live here, perhaps refactor later?
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITION_STACK_KEY}&query=${locationInput}`)
      .then((res) => {
        const coordinates = [res.data.data[0].latitude, res.data.data[0].longitude].join(',')
        onSubmit(coordinates)
      })
      .catch(err => {console.log(Error(err))})
  };

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