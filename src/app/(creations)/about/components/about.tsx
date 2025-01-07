"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./styles.module.scss";

export default function About() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container as React.RefObject<HTMLElement>, // Explicit type assertion
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <div className="flex justify-center items-center mt-[10vw]">
        <div className="w-[1200px] mb-[5vw] flex justify-between text-[#ffff]">
          <div className=""></div>
          <div className="w-[60%]">
            <div className="">
              <p className="text-[#ffff] text-[1.8vw]">
                Hello there! I’m a passionate UI/UX designer with over 2 years
                of experience crafting visually stunning and user-friendly
                designs that genuinely make a difference. My love for design
                goes hand in hand with my technical skills, allowing me to
                bridge the gap between creativity and engineering. I’ve had the
                opportunity to work on diverse projects, and yes—I built [this
                site] you’re exploring right now!
              </p>
              <p className="mt-8 text-[#ffff] text-[1.8vw]">
                Beyond design, I bring a well-rounded expertise in SEO
                principles, social media strategy, and coding, which has enabled
                me to complete several successful projects from start to finish.
                Whether it’s designing an intuitive interface, collaborating on
                code, or optimizing websites to perform beautifully in search
                engines, my goal is to create meaningful experiences that not
                only look incredible but also deliver exceptional results.
              </p>
            </div>

            <div className="mt-[5vw]">
              <h2 className="text-[5vh] font-[600]">SKILLS</h2>
              <ul className="mt-[3vw] ml-8 list-disc">
                <li className="mt-4 text-[18px] text-[#c2c2c2]">
                  <h3 className="text-[#ffff] text-[22px] font-[600]">
                    Technical Skills:{" "}
                  </h3>
                  Shopify, SEO, Version Control, HTML, CSS
                </li>
                <li className="mt-4 text-[18px] text-[#c2c2c2]">
                  <h3 className="text-[#ffff] text-[22px] font-[600]">
                    Design Tools:{" "}
                  </h3>
                  Figma, Adobe XD, Adobe Photoshop
                </li>
                <li className="mt-4 text-[18px] text-[#c2c2c2]">
                  <h3 className="text-[#ffff] text-[22px] font-[600]">
                    Non-Technical Skills:{" "}
                  </h3>
                  UI/UX Principles, Problem-Solving Skills, Debugging,
                  Adaptability, Time Management
                </li>
              </ul>
            </div>

            <div className="mt-[5vw]">
              <h2 className="text-[5vh] font-[600]">PROJECTS</h2>
              <ul className="mt-[3vw] ml-8 list-disc">
                <li className="mt-4 text-[18px] text-[#c2c2c2]">
                  <h3 className="text-[#ffff] text-[22px] font-[600]">
                    Dr. Sharda Ayurveda{" "}
                    <a href="https://www.drshardaayurveda.org">
                      (www.drshardaayurveda.org)
                    </a>
                    :{" "}
                  </h3>
                  Took the lead in my first significant project, entirely
                  designing and creating the frontend of a website using Next.js
                  and React.js. I incorporated modern techniques to ensure
                  responsive designs and successfully executed the entire design
                  process, personally overseeing and completing all aspects of
                  the project.
                </li>
                <li className="mt-4 text-[18px] text-[#c2c2c2]">
                  <h3 className="text-[#ffff] text-[22px] font-[600]">
                    Dr. Sharda Ayurveda{" "}
                    <a href="https://www.drshardaayurveda.com">
                      (www.drshardaayurveda.com)
                    </a>
                    :{" "}
                  </h3>
                  I led the design and development of the store while executing
                  my first major SEO campaign. I managed website operations,
                  optimized on-page elements, and conducted keyword research and
                  backlink building. This holistic approach resulted in a
                  significant boost in traffic and visibility, strengthening the
                  overall online presence.
                </li>
                <li className="mt-4 text-[18px] text-[#c2c2c2]">
                  <h3 className="text-[#ffff] text-[22px] font-[600]">
                    Profile Aesthetic Surgery{" "}
                    <a href="https://www.profileaestheticsurgery.com/">
                      (www.profileaestheticsurgery.com)
                    </a>
                    :{" "}
                  </h3>
                  I managed my first WordPress project, prioritizing the
                  creation of a responsive and user-friendly website. Alongside
                  directing the design process, I also handled website
                  maintenance and introduced onpage and technical SEO strategies
                  to enhance its performance.
                </li>
                <li className="mt-4 text-[18px] text-[#c2c2c2]">
                  <h3 className="text-[#ffff] text-[22px] font-[600]">
                    Webitlab{" "}
                    <a href="https://webitlab.com/">(www.webitlab.com)</a>:{" "}
                  </h3>
                  redesigned the landing page for webitlab, focusing on
                  improving user experience and visual appeal. I streamlined the
                  layout to enhance navigation, integrated modern design
                  elements for a more engaging aesthetic, and optimized the
                  content structure to drive conversions. The updated page is
                  now more responsive, faster, and aligned with the brand's
                  identity. The redesign resulted in a noticeable increase in
                  user interaction and overall satisfaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
