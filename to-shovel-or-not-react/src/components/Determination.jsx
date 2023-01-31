import React from "react";

// make time specific determination using Timeframe data
//"you will have to shovel today, approx between the hours of x and y"

const Determination = (props) => {
  const { low, total_snow, total_rain } = props;

  // total snow accumulation is > 30mm, shovel.
  if (total_snow > 30) {
    return (
      <div>SHOVEL!</div>
    )
  }

  // snowfall > 1cm and tempurature goes from > -1 to < -1, Salt!
  if (total_snow > 10 && low < 0) {
    return (
      <div>Salt!</div>
    )
  }

  // When there is any rain and tempurature is or will be < 1, Salt.
  if (total_rain && low < 1) {
    return (
      <div>Salt!</div>
    )
  }

  // do we really need to inform the user they don't need to shovel?
  // total snow is < 30mm and temperature is > 0, don't need to shovel.
  if (total_snow < 30 && low > 0) {
    return (
      <div>You don't need to shovel</div>
    )
  }
}

export default Determination