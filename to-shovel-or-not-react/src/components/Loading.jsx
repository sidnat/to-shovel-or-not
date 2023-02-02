import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="text-white font-bold text-4xl block py-4">Gathering Data!</div>
      <div className="border-white border-t-4 border-r-4 block w-12 h-12 animate-spin rounded-full"></div>
    </div>
  )
}