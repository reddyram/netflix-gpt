import React from "react";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%] pl-12 pr-12 absolute bg-gradient-to-r from-black-700">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="w-1/1 sm:w-1/2 text-lg mt-4 text-white">{overview}</p>
      <div className="flex gap-5 mt-5">
        <button className="bg-white text-black w-[100px] pt-2 pb-2 rounded-sm hover:opacity-70">
          Play</button>
        <button className="bg-gray-500 text-black w-[100px] pt-2 pb-2 rounded-sm">More Info</button>
      </div>
    </div >
  )

};

export default VideoTitle;
