import React, { useState } from "react";
import selectRandMessage from "../helpers/determination-messages";
import { TbShovel } from 'react-icons/tb';
import { FaUmbrellaBeach } from 'react-icons/fa';

// make time specific determination using Timeframe data
//"you will have to shovel today, approx between the hours of x and y"

const Determination = (props) => {
  const { status } = props;

  return (
    <div className="flex flex-col items-center place-content-between bg-sky-400 rounded-md h-48 w-96 p-4 drop-shadow-md mx-4">
      <span className="text-center">{selectRandMessage(status)}</span>
      {status > 0 ? <TbShovel className="h-24 w-24 rounded-full border-slate-800 border-4"/> : <FaUmbrellaBeach className="h-24 w-24 rounded-full border-slate-800 border-4"/>}
    </div>
  )
}

export default Determination