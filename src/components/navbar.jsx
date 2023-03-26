import React from 'react'

const navbar = () => {
    return (
        <div className="flex justify-between items-center h-24 max-w-[320px] mx-auto px-5 text-black">
                <ul className='flex justify-between'>
                    <li className='p-5 font-semibold'>
                        <button>
                            <a href="./app.js">Home</a>
                        </button>
                    </li>
                    <li className='p-5 font-semibold'>
                        <button>
                            <a href="./portfolio">Portfolio</a>
                        </button>
                    </li>
                    <li className='p-5 font-semibold'>
                        <button>
                            <a href="./contact">Contact</a>
                        </button>
                    </li>
                </ul>
        </div>
    )
}

export default navbar;