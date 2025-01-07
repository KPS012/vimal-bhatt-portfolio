"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./marquee.module.scss";

export default function Marquee() {
  const marquee = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Duplicate content for seamless looping
    const marqueeContent = marquee.current?.innerHTML;
    if (marquee.current && marqueeContent) {
      marquee.current.innerHTML += marqueeContent; // Duplicate content
    }

    const animation = gsap.to(marquee.current, {
      xPercent: -40, // Move by half the total width (due to duplication)
      duration: 100, // Adjust speed
      ease: "linear",
      repeat: -1, // Infinite loop
    });

    // Reverse direction on scroll
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        animation.timeScale(self.direction === -1 ? 1 : -1); // Reverse direction
      },
    });
  }, []);

  return (
    <main className={styles.outerM}>
        <div className={styles.marqueeContainer}>
        <div ref={marquee} className={styles.marquee}>
            <h1>Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt - Vimal Bhatt -</h1>
        </div>
        </div>
    </main>
  );
}
