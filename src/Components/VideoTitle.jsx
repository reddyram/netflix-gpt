import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const VideoTitle = ({ title, overview, id }) => {
  const navigate = useNavigate();
  console.log(id)
  const handleMoreInfo = () => {
    navigate("/movie/" + id);
  }

  return (
    <div className="invisible sm:visible pt-[20%] pl-12 pr-12 absolute bg-gradient-to-r from-black-700">
      <h1 className=" text-3xl font-bold text-white">{title}</h1>
      <p className="w-1/2 text-lg mt-4 text-white">{overview}</p>
      <div className="flex gap-5 mt-5 ">
        <button className="bg-white text-black w-[100px] pt-2 pb-2 rounded-sm hover:opacity-70">
          Play</button>
        <button className="bg-gray-500 text-black w-[100px] pt-2 pb-2 rounded-sm" onClick={handleMoreInfo}>More Info</button>
      </div>
    </div >
  )

};

export default VideoTitle;
