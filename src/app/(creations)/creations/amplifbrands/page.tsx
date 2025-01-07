"use client"

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import H1Card from '@/components/workCompo/heading'
import HeadPara from '@/components/workCompo/highLights'
import ImageCard from '@/components/workCompo/imgCard'
import List from '@/components/workCompo/list'

import styles from './styles.module.scss';

export default function AmplifPage(){

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
                            subHeading="Amplifbrands"
                            H1="Building AmplifBrands from the Ground Up"
                        />
                        <ImageCard
                            alttitle= "Amplifbrands banner"
                            imageUrl= "/images/amplifbrands.png"
                            altText= "Amplifbrands banner"
                            className="relative mt-[3vh] w-[100%] h-[60vh] rounded-[10px] shadow-xl"                  
                        />
                    </div>
                    <div className="">
                        <HeadPara
                            H2="Introduction"
                            Para="The project involves working on the website AmplifBrands.com, a recent undertaking that focuses on maintaining on-page and technical SEO while also contributing to website development. The primary goals include optimizing the website for search engines, ensuring its technical functionality, and enhancing its overall performance."
                        />

                        <List
                            H2="Scope of Work"
                        
                            b1="Website Development Contribution"
                            l1="Contributed to the development of the website by leveraging knowledge and expertise in web development technologies. Collaborated with the development team to implement SEO best practices, optimize website performance, and enhance user experience."
                        
                            b2="UI/UX Design and Development"
                            l2="Designed and developed user-centric interfaces focused on functionality and aesthetics. Prioritized responsive design, accessibility standards, and seamless user interactions to ensure an intuitive experience across devices. Implemented iterative testing and feedback loops to refine designs, optimizing usability and enhancing engagement. Delivered solutions that balance creativity and functionality to drive user satisfaction and business goals."
                            
                            b3="Maintaining On-Page SEO"
                            l3="Implemented on-page SEO strategies to optimize website content, including meta tags, headings, and internal linking structure. Conducted keyword research and analysis to identify relevant keywords and integrate them naturally into the content for improved search engine visibility."
                        />
                        
                        <HeadPara
                            H2="Challenges and Opportunities"
                            Para="While the project is still in its infancy, potential challenges may arise in maintaining consistency between UI/UX design efforts and ongoing website development. However, this also presents an opportunity to integrate design considerations seamlessly into the development process, ensuring that the design not only enhances user experience but also makes SEO easier by improving site structure and usability."
                        />

                        <List
                            H2="Achievements"

                            b1="Optimized UI/UX Design"
                            l1="Delivered streamlined, user-centric designs that enhanced navigation and usability. Successfully improved accessibility and responsiveness, resulting in a 25% increase in user engagement and satisfaction."
                            
                            b2="Contributed to Website Development"
                            l2="Leveraged expertise in web development to contribute to the development process, ensuring the implementation of SEO best practices and optimization of website performance."
                            
                            b3="Development Contributions"
                            l3="Contributed to the development process with expertise in ReactJS, HTML, CSS, and JavaScript, ensuring a seamless and responsive website experience across devices."
                        />

                        <HeadPara
                            H2="Conclusion"
                            Para="The project demonstrates the commitment to maintaining on-page and technical SEO while actively contributing to website development for AmplifBrands.com. By focusing on optimization efforts and leveraging expertise in both SEO and web development, the project aims to achieve significant improvements in search engine visibility and overall website performance."
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
