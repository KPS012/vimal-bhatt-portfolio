'use client';
import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import { projects } from './components/data';
import Card from './components/creation';
import H1Card from '../workCompo/heading';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <main ref={container} className="w-full flex justify-center items-center bg-[#ffff]">
        <div className="w-[80vw] relative">
          <div className="mb-[10vh] px-[60px]">
              <H1Card
                  H1='My Creations'
                  subHeading=""
              />
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
