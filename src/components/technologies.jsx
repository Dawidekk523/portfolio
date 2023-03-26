import React from 'react'
import { DiJavascript1, DiNodejs, DiJqueryLogo, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

const Technologies = () => {
  return (
    <div className="flex h-64 bg-green-500 my-16 py-3  items-center justify-center opacity-50">
      <div className="flex flex-col xl:flex-row ">
      <div className="flex space-x-12 xl:mr-24 lg:space-x-24 xl:space-x-24">
        <DiJavascript1 color='white' size={72}/>
        <DiNodejs color='white' size={72}/>
        <DiJqueryLogo color='white' size={72}/>
        <DiReact color='white' size={72}/>
      </div>
      <div className="flex space-x-12 xl:space-x-24 lg:space-x-24">
        <SiTailwindcss color='white' size={72}/>
        <TbBrandTypescript color='white' size={72}/>
        <TbBrandPython color='white' size={72}/>
        <BsGit color='white' size={72}/>
      </div>
      </div>
    </div>
  )
}

export default Technologies;