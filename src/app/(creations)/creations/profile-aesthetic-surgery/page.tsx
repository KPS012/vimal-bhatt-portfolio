"use client"

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import H1Card from '@/components/workCompo/heading'
import HeadPara from '@/components/workCompo/highLights'
import ImageCard from '@/components/workCompo/imgCard'
import List from '@/components/workCompo/list'

import styles from './styles.module.scss';

export default function ProAsthPage(){

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
                            subHeading="Profile Aesthetic Surger"
                            H1="A New Era of Beauty: Revamping Profile Aesthetic Surgery for a Sleeker, More Sophisticated Experience"
                        />
                        <ImageCard
                            alttitle="Beautiful Landscape"
                            imageUrl="/images/pas.png"
                            altText="A beautiful landscape"
                            className="relative mt-[3vh] w-[100%] h-[60vh] rounded-[10px] shadow-xl"                  
                        />
                    </div>
                    <div className="">
                        <HeadPara
                            H2="Introduction"
                            Para="The project involved working on the website DrShardayurveda.org with a focus on enhancing user experience (UX), implementing on-page SEO strategies, and contributing to the development process. This website serves as an upgraded version of DrShardaayurveda.com, with the aim of transitioning from the existing platform to this new iteration."
                        />

                        <List
                            H2="Scope of Work"
                        
                            b1="User Experience (UX) Enhancement"
                            l1="Conducted thorough assessments of the website's usability and user interface design. Implemented UX improvements to enhance the overall browsing experience, including optimising navigation, improving accessibility, and ensuring consistency in design elements."
                        
                            b2="On-Page SEO Optimization"
                            l2="Implemented on-page SEO techniques to improve the website's search engine rankings and visibility. This involved optimising meta tags, headings, and content structure to align with relevant keywords and improve organic search performance."
                            
                            b3="Website Development Contribution"
                            l3="Utilised expertise in ReactJS, HTML, CSS, and JavaScript to contribute to the development of the website. Collaborated with the development team to implement design enhancements, improve functionality, and ensure compatibility across various devices and browsers."
                        />
                        
                        <HeadPara
                            H2="Challenges Faced"
                            Para="One of the challenges encountered during the project was ensuring a seamless transition from the previous website to the upgraded version while maintaining consistency in branding, content, and functionality. Additionally, balancing the implementation of UX improvements with on-page SEO optimization without compromising one over the other required careful consideration and strategic planning."
                        />

                        <List
                            H2="Contributions and Achievements"

                            b1="Enhanced User Experience"
                            l1="Implemented UX enhancements resulting in improved usability, navigation, and overall user satisfaction."
                            
                            b2="On-Page SEO Optimization"
                            l2="Optimised website content and structure to improve search engine visibility and rankings."
                            
                            b3="Development Contributions"
                            l3="Contributed to the development process with expertise in ReactJS, HTML, CSS, and JavaScript, ensuring a seamless and responsive website experience across devices."
                        />

                        <HeadPara
                            H2="Project Status"
                            Para="As this website serves as an upgrade project from DrShardaayurveda.com, it is still in the process of development and refinement. While significant strides have been made in terms of UX enhancements, on-page SEO optimization, and development contributions, further iterations and adjustments may be required to achieve the desired outcome."
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
