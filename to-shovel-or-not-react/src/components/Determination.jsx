import React, { useState } from "react";
import selectRandMessage from "../helpers/determination-messages";

// make time specific determination using Timeframe data
//"you will have to shovel today, approx between the hours of x and y"

const Determination = (props) => {
  const { status } = props;

  return (
    <div>
      <p>{selectRandMessage(status)}</p>
    </div>
  )
}

export default Determination