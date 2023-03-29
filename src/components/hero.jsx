import React from 'react'
import avatar from '../1.png';
import { AiFillGithub } from 'react-icons/ai';

const hero = () => {
    return (
        <div className="section1 sm:flex items-center content-center justify-center sm:mx-12">
            <div className="flex items-center content-center justify-center py-6 sm:flex-shrink-0">
            <img className='h-[350px] rounded-lg drop-shadow-lg sm:h-[400px] lg:h-[500px]' src={avatar} />
            <button className="bg-white rounded-lg drop-shadow-lg p-4 absolute top-48 right-12 sm:relative sm:right-12 sm:top-[-60px] hover:drop-shadow-2xl">
                <a href="https://github.com/Dawidekk523" target={'_blank'}><AiFillGithub size={50} color="#111827"/></a>
            </button>
            </div>
            <div className="flex text font-medium text-center text-gray-700 justify-center sm:text-5xl sm:flex-col md:text-7xl items-center">
                <p className=''>Meet David,</p> <p className="text-green-500 font-black px-2">junior</p> <p className=''> software engineer</p>
            </div>
        </div>
    )
}

export default hero;