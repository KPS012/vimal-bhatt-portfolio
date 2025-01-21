"use client"

import styles from './style.module.scss';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useSpring } from "framer-motion";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MagBtn from "@/common/Magnetic/magButton";

interface CaseBlogProps {
  H3: string;
  Img: string;
  Url: string;
}

const CaseBlog: React.FC<CaseBlogProps> = ({ H3, Img, Url }) => {
    
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end end"]
  })

    
      const x = useTransform(scrollYProgress, [0, 1], [0, 100])
      const y = useTransform(scrollYProgress, [0, 1], [500, 0])

    const [isHovering, setIsHovering] = useState(false);

    const springConfig = {
      stiffness: 150,
      damping: 15,
      mass: 0.1,
    };
  
    const mousePosition = {
      x: useSpring(0, springConfig),
      y: useSpring(0, springConfig),
    };

    const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, clientY } = e;
        const targetX = clientX - 60;
        const targetY = clientY - 60;
        mousePosition.x.set(targetX);
        mousePosition.y.set(targetY);
      }


    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
          <div className={styles.body}>
              <motion.div
                ref={container} 
                onMouseMove={mouseMove}
                className='bg-[#ffff] relative h-[800px]'
                style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
              >
                <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
                  <div className='h-[800px] sticky top-[calc(100vh-800px)] flex flex-col justify-center items-center'>
                          
                    <Link
                      href={Url}
                      className="mt-[5vh] w-[80vw] flex flex-col justify-center items-center"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <span className="text-sm uppercase font-[600] text-[#c2c2c2]">
                        Next Case
                      </span>
                      <h3 className="mt-[4vh] text-[8vh] font-[600] text-[#141516]">
                        {H3}
                      </h3>
                      <div className="mt-[4vh] flex justify-center items-center w-[40vw] h-[50vh] relative">
                        <Image
                          src={Img}
                          fill
                          alt="image"
                          className="rounded-xl shadow-2xl"
                        />
                      </div>
                    </Link>
                    {isHovering && (
                      <motion.div
                        className="h-[15vh] w-[15vh] fixed rounded-full top-0 left-0 pointer-events-none overflow-hidden text-[#ffff] bg-[#455CE9] flex justify-center items-center"
                        style={{
                          x: mousePosition.x,
                          y: mousePosition.y,
                        }}
                      >
                        <MagBtn>
                          <p className="">Next Case</p>
                        </MagBtn>
                      </motion.div>
                    )}
                    <div 
                      className="bg-[#ffff] mt-[5vh] w-full flex flex-col justify-center items-center border-t border-gray-400">
                      <div className="w-[80vw] py-4 flex justify-between items-center">
                        <p className="text-[#141516]">Vimal Bhatt All Right Reserve</p>
                        <p className="text-[#141516]">Social Icons Games</p>
                      </div>
                    </div>

                  </div>
                </div> 
              </motion.div>
          </div>
        </motion.div>
    )
}


export default CaseBlog;