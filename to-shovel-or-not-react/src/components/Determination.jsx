import React from "react";
import selectRandMessage from "../helpers/determination-messages";
import { TbShovel, TbSalt } from 'react-icons/tb';
import { FaUmbrellaBeach } from 'react-icons/fa';

export default function Determination(props) {
  const { status } = props;

  return (
    <div className="flex flex-col items-center place-content-between bg-sky-400 rounded-md h-48 w-80 p-4 drop-shadow-md mx-4">
      <div className="text-center w-80">{selectRandMessage(status)}</div>
      {status === 0 && <FaUmbrellaBeach className="h-24 w-24 rounded-full border-slate-800 border-4" />}
      {(status === 1 || status === 3) && <TbShovel className="h-24 w-24 rounded-full border-slate-800 border-4" />}
      {status === 2 && <TbSalt className="h-24 w-24 rounded-full border-slate-800 border-4" />}
    </div>
  )
}