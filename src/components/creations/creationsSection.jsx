'use client';
import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { projects } from './components/data';
import Card from './components/creation';

export default function CreationsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <main ref={container} className="w-full flex justify-center items-center bg-[#141516]">
        <div className="w-[80vw] relative">
          <div className="mb-[10vh] px-[60px]">
              <h2 className="text-[5vh] font-[600] text-[#ffff]">My Creations</h2>
          </div>
          {
          projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
          })
        }
      </div>
    </main>
  )
}
