import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

import profImg from "./kimberly.jpg";

const LeftContent = () => {
  return (
    <div className="basis-11/12 flex flex-col mr-10">
      <p className="mb-7 text-2xl">
        In this 5 day class, we will explore artists Monet, Martisse, Van Gogh,
        among others and then recreate paintings using crayon and watercolor.
        Students will have fun learning about the artists & creating their own
        art inspired by their work.
      </p>
      <div className="flex flex-row items-center mb-7">
        <div className="h-14 w-14">
          <img className="rounded-full" src={profImg} alt="profileImage" />
        </div>
        <p className="text-violet-600	 ml-3 text-xl font-bold">
          Kimberly R Moseler
        </p>
      </div>
      <div className="flex flex-row mb-3">
        <BsFillStarFill size={20} style={{ fill: "rgb(255, 240, 0)" }} />
        <BsFillStarFill size={20} style={{ fill: "rgb(255, 240, 0)" }} />
        <BsFillStarFill size={20} style={{ fill: "rgb(255, 240, 0)" }} />
        <BsFillStarFill size={20} style={{ fill: "rgb(255, 240, 0)" }} />
        <BsFillStarFill size={20} style={{ fill: "rgb(255, 240, 0)" }} />
        <p className="text-slate-400 text-lg ml-2">
          467 total reviews for this teacher
        </p>
      </div>
      <div className="flex flex-row mb-3">
        <BsFillStarFill size={20} style={{ fill: "rgb(255, 240, 0)" }} />
        <BsFillStarFill size={20} style={{ fill: "rgb(255, 240, 0)" }} />
        <BsFillStarFill size={20} style={{ fill: "rgb(255, 240, 0)" }} />
        <BsFillStarFill size={20} style={{ fill: "rgb(255, 240, 0)" }} />
        <BsFillStarFill size={20} style={{ fill: "rgb(255, 240, 0)" }} />
        <p className="text-slate-400 text-lg ml-2">5 reviews for this class</p>
      </div>
      <p className="mb-7 text-2xl">Completed by 21 learnes</p>
      <div className="flex flex-row mb-3 items-center">
        <div className="flex flex-row rounded-full items-center bg-violet-600 px-8 mr-10">
          <p className="text-white text-2xl flex-wrap">See Class Schedule</p>
          <p className="text-white text-5xl pb-2 ml-3">{">"}</p>
        </div>
        <div className="flex flex-row items-center text-violet-600">
          <AiOutlineHeart size={25} />
          <p className="text-xl ml-2">Save</p>
        </div>
        <div className="flex flex-row items-center text-violet-600 ml-6">
          <RiShareForwardLine size={29} />
          <p className="text-xl ml-2">Share</p>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
