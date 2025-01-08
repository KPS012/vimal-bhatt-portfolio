'use client';
import Image from 'next/image';
import styles from "@/components/creations/style.module.scss";
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface CardProps {
  i: number;
  name: string;
  work: string;
  title: string;
  l1: string;
  d1: string;
  l2: string;
  d2: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>; // Ensure progress is of type MotionValue
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  name,
  work,
  title,
  l1,
  d1,
  l2,
  d2,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]); // Ensure scale is a MotionValue

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale, // Pass MotionValue to style
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <a href={url} className="flex flex-col justify-center items-center">
          <div className="w-full">
            <div className="flex justify-between pb-4 border-b">
              <h4 className="font-[600] text-[#ffff]">{name}</h4>
              <span className="font-[600] text-[#ffff]">{work}</span>
            </div>

            <div className="my-4 flex justify-between items-start">
              <h2 className="w-[90%] text-[4vh] font-[600] text-[#ffff]">{title}</h2>
              <FaArrowRight className={styles.arrowIcons} />
            </div>

            <div className="w-[70%]">
              <ul className="flex justify-between gap-2">
                <li className="w-[380px] flex flex-col text-[16px] text-[#ffff]">
                  <b className="text-[#ffff] text-[2vw]">{l1}</b>
                  <p>{d1}</p>
                </li>
                <li className="w-[380px] flex flex-col text-[16px] text-[#ffff]">
                  <b className="text-[#ffff] text-[2vw]">{l2}</b>
                  <p>{d2}</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image
                width={1200}
                height={600}
                src={`/images/${src}`}
                alt="image"
                className="rounded-[20px] mt-4 shadow-xl"
              />
            </motion.div>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default Card;
