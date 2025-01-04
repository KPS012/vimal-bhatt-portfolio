import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = ["Hello there Im a passionate designer who thrives on creating beautiful, functional things that genuinely help people. While my heart lies in design, Im technically skilled enough to bridge the gap between creativity and engineering. I built [this site] which you seeing right Now!"]

const right = ["In addition to design, I bring expertise in SEO, social media strategy, and UX/UI optimization, ensuring that the projects I work on not only look amazing but also perform exceptionally. Whether its designing an interface, collaborating on code, or optimizing for search engines, Im here to add value and craft meaningful experiences."]

export default function Index() {

  return (
    <div className={styles.outerDis}>
        <div className={styles.innterDis}>
            <div className={styles.description} >
                {
                    phrases.map( (phrase, index) => {
                        return <AnimatedText key={index}>{phrase}</AnimatedText>
                    })
                }
            </div>
            <div className={styles.description2} >
                {
                    phrases.map( (right, index) => {
                        return <AnimatedTextRight key={index}>{right}</AnimatedTextRight>
                    })
                }
            </div>
        </div>
    </div>
  )
}

function AnimatedText({children}: any) {
    const text = useRef(null);

    useLayoutEffect( () => {
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
        })
    }, [])

    return <p ref={text}>{children}</p>
}

function AnimatedTextRight({children}: any) {
    const textright = useRef(null);

    useLayoutEffect( () => {
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
        })
    }, [])

    return <p ref={textright}>{children}</p>
}