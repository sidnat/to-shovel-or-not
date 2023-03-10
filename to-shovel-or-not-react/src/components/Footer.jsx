import React from "react";

export default function Footer() {
  return (
    <div className="h-40 bg-sky-400">
      <p className="text-center pt-1 pb-1 font-bold text-slate-700">DEVELOPED BY</p>
      <div className="flex flex-row justify-center items-center pt-2">
        <span className="flex flex-col items-end pr-5">
          <h4 className="font-bold text-white text-xl">Sid Natarajan</h4>
          <h5 className="font-bold text-slate-700">
            <a href="https://github.com/sidnat">github/sidnat</a>
          </h5>
        </span>
        <img
          src="https://avatars.githubusercontent.com/u/1369250?v=4" 
          alt="Sid Natarajan" 
          className="h-16 rounded-full ring ring-offset-0 ring-slate-700 mr-5"
        />
        <img 
          src="https://avatars.githubusercontent.com/u/111951212?v=4" 
          alt="Stefan Talbot" 
          className="h-16 rounded-full ring ring-offset-0 ring-slate-700 ml-5"
        />
        <span className="flex flex-col items-start pl-5">
          <h4 className="font-bold text-white text-xl">Stefan Talbot</h4>
          <h5 className="font-bold text-slate-700">
            <a href="https://github.com/TeaBizzy">github/TeaBizzy</a>
          </h5>
        </span>
      </div>
    </div>
  )
}