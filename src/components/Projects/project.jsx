'use client';
import styles from './style.module.scss'
import { useLayoutEffect, useState, useEffect, useRef } from 'react';
import ProjectData from './components/projecttitle';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import RoundBTN from '@/common/RoundedButton/rounBtn';

const projects = [
  {
    title: "Dr. Sharda Ayurveda",
    src: "dr-sharda-ayurveda.png",
    para: "Design & Development",
    color: "#000000"
  },
  {
    title: "Dr. Sharda Ayurveda",
    src: "dr-sharda-com.png",
    para: "Design & Manage",
    color: "#8C8C8C"
  },
  {
    title: "HealthCam Remedies",
    src: "healthcamremedies.png",
    para: "Manage",
    color: "#EFE8D3"
  },
  {
    title: "Amlplifbrands",
    src: "amplifbrands.png",
    para: "Design & Development ",
    color: "#706D63"
  },
  {
    title: "Webitlab",
    src: "webitlab.png",
    para: "Design",
    color: "#d61c1f"
  },
  {
    title: "Profile Asthetic Surgury",
    src: "pas.png",
    para: "Design & Development",
    color: "#d4006a"
  }
]

const scaleAnimation = {
  initial: {scale: 0, x:"-50%", y:"-50%"},
  enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
  closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function MainPro() {


  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }

  return (
  <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
    <div className={styles.body}>
    <div className="w-[100%] flex justify-between py-[50px] text-[16px] text-[#999d9e] uppercase border-b border-[rgb(201,201,201)]"><span>Client</span><span className='w-[200px]'>Service</span></div>
      {
        projects.map( (project, index) => {
          return <AnimatedText key={index} project={project} index={index} manageModal={manageModal} />
        })
      }
    </div>
    <RoundBTN>
      <p className="text-[#ffff]">New projects are brewing</p>
      <div className={styles.upperNo}>∞</div>
    </RoundBTN> 
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                    <Image 
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  </main>
  )
}


function AnimatedText({index, project, manageModal}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 100, // Start position (100px below the element's position)
      },
      {
        opacity: 1,
        y: 0, // End position (original position)
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%', // Animation starts when the top of the element is at 80% of the viewport
          end: 'bottom 70%', // Ends when the bottom of the element reaches 60% of the viewport
          scrub: 0.5, // Smooth animation during scroll
        },
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div ref={ref} onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}}>
      <ProjectData title={project.title} para={project.para} />
    </div>
  );
}