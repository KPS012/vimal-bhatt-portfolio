'use client';
import React, { useLayoutEffect, useRef } from 'react';
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
  const xPercent = useRef(0);
  const direction = useRef(-1);

  const background = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction.current = e.direction * -1;
        },
      },
      x: '-500px',
    });

    // Define the animate function inside useLayoutEffect to prevent dependency warning
    const animate = () => {
      if (xPercent.current < -100) {
        xPercent.current = 0;
      } else if (xPercent.current > 0) {
        xPercent.current = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent.current });
      gsap.set(secondText.current, { xPercent: xPercent.current });
      requestAnimationFrame(animate);
      xPercent.current += 0.1 * direction.current;
    };

    requestAnimationFrame(animate);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: 'top',
        end: '+=500px',
      },
    });

    timeline
      .from(background.current, { clipPath: `inset(15%)` })
      .to(introImage.current, { height: '200px' }, 0);
  }, []); // No need for animate in the dependency array

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
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
          <div
            ref={introImage}
            data-scroll
            data-scroll-speed="0.3"
            className={styles.introImage}
          >
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
  );
}
