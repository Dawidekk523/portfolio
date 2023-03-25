import React from 'react'
import { DiJavascript1, DiNodejs, DiJqueryLogo, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

const Technologies = () => {
  return (
    <div className="flex h-64 bg-gray-900 my-16 py-3  items-center justify-center">
      <div className="flex flex-col">
      <div className="flex space-x-8 w-max">
        <DiJavascript1 color='white' size={96}/>
        <DiNodejs color='white' size={96}/>
        <DiJqueryLogo color='white' size={96}/>
        <DiReact color='white' size={96}/>
      </div>
      <div className="flex space-x-8 w-max mt-4">
        <SiTailwindcss color='white' size={96}/>
        <TbBrandTypescript color='white' size={96}/>
        <TbBrandPython color='white' size={96}/>
        <BsGit color='white' size={96}/>
      </div>
      </div>
    </div>
  )
}

export default Technologies;