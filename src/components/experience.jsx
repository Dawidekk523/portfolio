import React from "react";
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const hero = () => {
  return (
    <div className="">
        <div className="flex justify-center items-center">
        <p className="font-bold text-5xl text-gray-900 text-center my-8 mx-[1px]">Experience</p><div className=""> <AiOutlineQuestionCircle color="green"/> </div>
        </div>
      <div className="lg:flex lg:flex-wrap lg:justify-center">
        <div className="flex-row flex items-center my-5 mt-10 justify-center">
          <div className="flex space-x-2 py-2 justify-center items-center px-5">
            <p className="text-2xl font-medium">JavaScript</p>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
          </div>

          <div className="flex space-x-2 py-2 justify-center items-center">
            <p className="text-2xl font-medium">nodeJS</p>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
          </div>
        </div>

        <div className="flex-row flex items-center my-5 mt-10 justify-center">
          <div className="flex space-x-2 py-2 justify-center items-center px-5">
            <p className="text-2xl font-medium">jQuery</p>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
          </div>

          <div className="flex space-x-2 py-2 justify-center items-center">
            <p className="text-2xl font-medium">React</p>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
          </div>
        </div>

        <div className="sm:flex-row flex items-center my-5 mt-10 justify-center">
          <div className="flex space-x-2 py-2 justify-center items-center px-5">
            <p className="text-2xl font-medium">TailWind</p>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
          </div>

          <div className="flex space-x-2 py-2 justify-center items-center">
            <p className="text-2xl font-medium">TypeScript</p>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
          </div>
        </div>

        <div className="flex items-center my-5 mt-10 justify-center">
          <div className="flex space-x-2 py-2 justify-center items-center px-5">
            <p className="text-2xl font-medium">Python</p>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
          </div>
          <div className="flex space-x-2 py-2 justify-center items-center">
            <p className="text-2xl font-medium">Git</p>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-green-500 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
            <div className="w-4 h-4 bg-slate-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
