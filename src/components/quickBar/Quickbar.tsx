
import React from 'react'
import Image from 'next/image';

import { motion } from 'framer-motion';
import Magnetic from "@/common/Magnetic";
import { slideUp } from '@/components/Intro/components/animation';


import styles from '@/components/quickBar/quickBar.module.scss'

function Popups() {

  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }
  
  return (
    <>
      <motion.div variants={slideUp} initial="initial" animate="enter" className={styles.onlineConsult}>
        <Magnetic><Image src="/images/dribbble.png" width={25} height={25} alt="" title="" className={styles.imgClass} /></Magnetic>
        <Magnetic><Image src="/images/behance.png" width={25} height={25} alt="" title="" className={styles.imgClass} /></Magnetic>
        <Magnetic><Image src="/images/pinterest.png" width={25} height={25} alt="" title="" className={styles.imgClass} /></Magnetic>
        <Magnetic><Image src="/images/instagram.png" width={25} height={25} alt="" title="" className={styles.imgClass} /></Magnetic>
        <Magnetic><Image src="/images/gmail.png" width={25} height={25} alt="" title="" className={styles.imgClass} /></Magnetic>
      </motion.div>
    </>
  );
}

export default Popups;