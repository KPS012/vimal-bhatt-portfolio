import React from 'react'
import Magnetic from '@/common/Magnetic/magButton'
import Logo from "@/components/header/components/logo"

export default function () {
  return (
    <div className="flex justify-center items-center">
        <div className="w-[80vw] h-[80px] flex justify-between items-center">
          <Logo />
            <div className="flex gap-10">
                <Magnetic><a href="/creations" className="cursor-pointer text-[#ffff] font-[500]">Creations</a></Magnetic>
                <Magnetic><a href="/about" className="cursor-pointer text-[#ffff] font-[500]">About</a></Magnetic>
                <Magnetic><a href="" className="cursor-pointer text-[#ffff] font-[500]">Contact</a></Magnetic>
                {/* <Magnetic><a href="" className="cursor-pointer text-[#ffff] font-[500]">Resume</a></Magnetic> */}
            </div>
        </div>
    </div>
  )
}
