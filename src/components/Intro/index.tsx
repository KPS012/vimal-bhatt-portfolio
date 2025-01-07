'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { slideUp } from './components/animation';
import { motion } from 'framer-motion';
import Marquee from './components/marques';

export default function IntroMain() {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;
  
    useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => direction = e.direction * -1
        },
        x: "-500px",
      })
      requestAnimationFrame(animate);
    }, [])
  
    const animate = () => {
      if(xPercent < -100){
        xPercent = 0;
      }
      else if(xPercent > 0){
        xPercent = -100;
      }
      gsap.set(firstText.current, {xPercent: xPercent})
      gsap.set(secondText.current, {xPercent: xPercent})
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    }
    

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])

    return (
        <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
        <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <Image 
                    src={'/images/bg2.png'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className={styles.intro}>
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <Image
                            src={'/images/hero.png'}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                        />
                    </div>
                    <div data-scroll data-scroll-speed="0.7" className="">
                      <Marquee />
                    </div>
             </div>
        </div>
        </motion.main>
    )
}
