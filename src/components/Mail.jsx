import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { BsMailbox2 } from 'react-icons/bs';


const mail = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="justify-center flex flex-col">
            <div className="flex gap-4 items-center">
                <div className=""><BsMailbox2 size={32} color='green'/></div>
                <span className='text-2xl text-green-500'>Mail for business inquires</span>
            </div>
            <div className="justify-center flex">daveedsgn@gmail.com</div>
        </div>
        </div>
    )
}

export default mail;