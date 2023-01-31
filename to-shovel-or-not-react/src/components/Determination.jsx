import React, { useState } from "react";

// make time specific determination using Timeframe data
//"you will have to shovel today, approx between the hours of x and y"

const Determination = (props) => {
  const currentWeather = props.weathers[0];
  const nextWeather = props.weathers[1];
  const [determination, setDetermination] = useState('')

  return (
    <div>{determination}</div>
  )
}

export default Determination