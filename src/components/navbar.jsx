import React from 'react'

const navbar = () => {
    return (
        <div className="flex justify-between items-center h-24 max-w-[320px] mx-auto px-5 text-black">
                <ul className='flex justify-between'>
                    <li className='p-5 font-semibold cursor-pointer'>Home</li>
                    <li className='p-5 font-semibold cursor-pointer'>Portfolio</li>
                    <li className='p-5 font-semibold cursor-pointer'>Contact</li>
                </ul>
        </div>
    )
}

export default navbar;