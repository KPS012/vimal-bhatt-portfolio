"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Project from "@/components/Projects/project";
import H1Card from "@/components/workCompo/heading";
import styles from "./styles.module.scss";

export default function MyCreations() {
  // Properly type the ref to match useScroll requirements
  const container = useRef<HTMLDivElement | null>(null);

  // Use the ref directly with useScroll
  const { scrollYProgress } = useScroll({
    target: container, // Pass the ref object directly
    offset: ["start end", "end start"],
  });

  // Apply transformation based on scroll progress
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <div className="flex justify-center items-center mt-[10vw]">
        <div className="w-[1200px]">
          <H1Card
            H1="From Every Step, A Leap Forward: My Journey of Passion and Progress"
            subHeading="My Creations"
          />
          <Project />
        </div>
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
