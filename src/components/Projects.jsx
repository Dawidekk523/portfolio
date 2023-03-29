import React from "react";
import overview1 from '../2.png';
import { AiFillGithub } from 'react-icons/ai';
import { ImPlay2 } from 'react-icons/im';

const footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-8">
        <div className="bg-slate-300 h-[200px] w-[300px] drop-shadow-xl rounded-t-lg">
            <img src={overview1} className='object-fill rounded-t-lg'/>
        </div>
        <div className="items-center flex gap-2 mx-2 relative bottom-48 justify-end">
            <button className="bg-red-500 rounded-lg p-1 opacity-50">
            <a href="https://ambient-player-drab.vercel.app/" target={'_blank'}><ImPlay2 size={24} color="white"/></a>
            </button>
            <button className="bg-black rounded-lg p-1 opacity-50">
            <a href="https://github.com/Dawidekk523" target={'_blank'}><AiFillGithub size={24} color="white"/></a>
            </button>
        </div>
        
        <div className="bg-white h-[120px] w-[300px] drop-shadow-xl rounded-b-lg flex items-center flex-col py-2">
            <p className="text-3xl font-medium text-slate-900">Ambient Player</p>
            <p className="text-center">Little player with play/pause and sound volume controls. Calm your mind with chill music.</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
