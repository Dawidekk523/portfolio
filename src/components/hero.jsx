import React from 'react'
import avatar from '../1.png';

const hero = () => {
    return (
        <div className="section1 sm:flex sm:mx-3">
            <div className="flex items-center content-center justify-center py-6 sm:">
            <img className='h-[400px] rounded-lg drop-shadow-lg sm:h-[300px]' src={avatar} />
            </div>
            <div className=" flex text font-medium text-center text-gray-700 justify-center sm:text-7xl sm:flex-col ">
                <p>Meet David,</p> <p className="text-green-700 text-bold px-2 sm:flex-none">junior</p> <p> softwere engineer</p>
            </div>
        </div>
    )
}

export default hero;