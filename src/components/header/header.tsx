import React from 'react'
import Magnetic from '@/common/Magnetic/magButton'
import Logo from "./components/logo"
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex justify-center items-center bg-[#141516]">
        <div className="w-[80vw] h-[80px] flex justify-between items-center">
          <Logo />
            <div className="flex gap-10">
                <Magnetic><Link href="/creations" className="cursor-pointer text-[#ffff] font-[500]">Creations</Link></Magnetic>
                <Magnetic><Link href="/about" className="cursor-pointer text-[#ffff] font-[500]">About</Link></Magnetic>
                <Magnetic><a href="mailto:bhattv855@gmail.com" className="cursor-pointer text-[#ffff] font-[500]">Contact</a></Magnetic>
            </div>
        </div>
    </div>
  )
}
