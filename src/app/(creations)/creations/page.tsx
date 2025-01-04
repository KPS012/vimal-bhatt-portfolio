import React from 'react'
import Project from "@/components/Projects/index"
import H1Card from '@/components/workCompo/heading'

export default function MyCreations() {
  return (
    <div className="flex justify-center items-center mt-[10vw]">
        <div className="w-[1200px]">
            <H1Card
                H1="From Every Step, A Leap Forward: My Journey of Passion and Progress"
                subHeading="My Creations"
            />
            <Project />
        </div>
    </div>
  )
}
