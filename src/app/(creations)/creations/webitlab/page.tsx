"use client"

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import H1Card from '@/components/workCompo/heading'
import ImageCard from '@/components/workCompo/imgCard'

import styles from './styles.module.scss';

export default function DrShardaPage(){

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return(
        <div ref={container} className={styles.slidingImages}>
            <main className="mt-[10vw] mb-[5vh] flex justify-center items-center overflow-y-auto">
                <div className="w-[1200px] flex flex-col">
                    <div className="flex flex-col justify-center">
                        <H1Card
                            subHeading="Webitlab"
                            H1="Custom Landing Page Development to Enhance User Experience and Engagement"
                        />
                        <ImageCard
                            alttitle="Beautiful Landscape"
                            imageUrl="/images/webitlab.png"
                            altText="A beautiful landscape"
                            className="relative mt-[3vh] w-[100%] h-[60vh] rounded-[10px] shadow-xl"                  
                        />
                    </div>
                </div>
            </main>
            <motion.div style={{height}} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}
