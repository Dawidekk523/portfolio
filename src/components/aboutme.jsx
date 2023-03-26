import React from 'react'
import illustration from '../illus1.png'

const aboutme = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-center">
            <div className="flex-none sm:flex sm:justify-center lg:">
                <img className='h-[300px] sm:h-[400px] flex-none' src={illustration}/>
            </div>
            <div className="flex flex-col justify-center">
            <div className="">
                <h1 className="font-bold text-5xl text-gray-900 text-center">About me</h1>
            </div>
            <div className="py-5">
                <p className='text-1xl font-medium text-center px-8'>Just a 19 years old computer enjoyer based in Poland.</p> 
                <p className='text-1xl font-medium text-center px-8'>Learning about computer sience since 10 years, and programming for about 2 years now.</p> 
                <p className='text-1xl font-medium text-center px-8'>After some learning, it's time to accuire commercial expirience, so there we go! Ready to work for you!</p> 
            </div>
            <div className="hireme items-center justify-center flex">
                <button type="button" className="text-gray-100 bg-gray-900 hover:bg-gray-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center drop-shadow-lg">
                Send Message!
                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            </div>
        </div>
    )
}

export default aboutme;