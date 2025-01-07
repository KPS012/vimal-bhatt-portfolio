import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = ["Hello there I’m a passionate designer", 
    "who thrives on creating beautiful, functional", 
    "things that genuinely help people. While my heart", 
    "lies in design, I’m technically skilled enough", 
    "to bridge the gap between creativity and", 
    "engineering. I built [this site] which you", 
    "Seeing Right Now!"];

const right = ["In addition to design, I bring expertise in SEO,", 
    "social media strategy, and UX/UI optimization,", 
    "ensuring that the projects I work on not only", 
    "look amazing but also perform exceptionally.", 
    "Whether it’s designing an interface,", 
    "collaborating on code, or optimizing for search",
    "engines, I’m here to add value and craft", 
    "meaningful experiences."];

export default function Deces() {
  return (
    <div className={styles.outerDis}>
        <div className={styles.innterDis}>
            <div className={styles.description}>
                {phrases.map((phrase, index) => (
                    <AnimatedText key={index}>{phrase}</AnimatedText>
                ))}
            </div>
            <div className={styles.description2}>
                {right.map((right, index) => (
                    <AnimatedTextRight key={index}>{right}</AnimatedTextRight>
                ))}
            </div>
        </div>
    </div>
  );
}

function AnimatedText({ children }: { children: React.ReactNode }) {
    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-800px",
            ease: "power3.Out"
        });
    }, []);

    return <p ref={text}>{children}</p>;
}

// Specify the type of children prop as React.ReactNode or string
function AnimatedTextRight({ children }: { children: React.ReactNode }) {
    const textright = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(textright.current, {
            scrollTrigger: {
                trigger: textright.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            right: "-500px",
            ease: "power3.Out"
        });
    }, []);

    return <p ref={textright}>{children}</p>;
}
