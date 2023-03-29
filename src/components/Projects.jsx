import React from "react";
import overview1 from "../2.png";
import overview2 from "../3.png";
import overview3 from "../4.png";

const Projects = () => {
  return (
    <div className="flex justify-center mt-8 gap-6 flex-col items-center lg:flex-row lg:flex-wrap">
      <div className="drop-shadow-lg hover:drop-shadow-2xl" id="karta">
        <div className="w-[350px]">
          <a href="https://ambient-player-drab.vercel.app/">
            <div className="relative top-8 bg-black opacity-30"></div>
            <img className="rounded-t-lg bg-cover" src={overview1} />
          </a>
        </div>
        <div className="rounded-b-lg h-24 bg-white flex justify-center items-center flex-col">
          <span className="text-2xl font-bold ">Ambient Player</span>
          <span className="text-gray-600 opacity-50">Just calm your mind and soul</span>
        </div>
      </div>

      <div className="drop-shadow-lg hover:drop-shadow-2xl " id="karta">
        <div className="w-[350px]">
          <a href="">
            <div className="relative top-8 bg-black opacity-30"></div>
            <img className="rounded-t-lg" src={overview2} />
          </a>
        </div>
        <div className="rounded-b-lg h-24 bg-white flex justify-center items-center flex-col">
          <span className="text-2xl font-bold ">Python Meme bot</span>
          <span className="text-gray-600 opacity-50">Automated YouTube Shorts bot</span>
        </div>
      </div>

      <div className="drop-shadow-lg hover:drop-shadow-2xl" id="karta">
        <div className="w-[350px]">
          <a href="">
            <div className="relative top-8 bg-black opacity-30"></div>
            <img className="rounded-t-lg" src={overview3} />
          </a>
        </div>
        <div className="rounded-b-lg h-24 bg-white flex justify-center items-center flex-col">
          <span className="text-2xl font-bold ">Soon!</span>
          <span className="text-gray-600 opacity-50">Eyes open! Something is coming!</span>
        </div>
      </div>

      
    </div>
  );
};

export default Projects;
