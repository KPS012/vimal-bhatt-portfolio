import styles from './style.module.scss';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

import RoundBtn from '@/common/RoundedButton/rounBtn';


export default function NewFoot() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [-200, 0])
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className='text-[#141516] py-8 px-12 h-full w-[80vw] flex  justify-between items-center'>
                    <div className="w-full flex">
                        <div className="w-[100%] flex flex-col justify-center items-center">
                            <h3 className='text-[5vw] leading-[6vw] text-center'>Let’s build something<br /> Amazing together!</h3>
                            <div className="mt-8">
                                <RoundBtn>
                                    <a
                                    href="mailto:bhattv855@gmail.com"
                                    className={`w-full relative z-10 cursor-pointer`}
                                    >
                                        Let's Connect
                                    </a>
                                </RoundBtn>
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    className="bg-[#ffff] w-full flex flex-col justify-center items-center border-t border-gray-400">
                    <div className="w-[80vw] py-4 flex justify-between items-center">
                        <p className="text-[#141516]">Vimal Bhatt All Right Reserve</p>
                        <p className="text-[#141516]">Social Icons Games</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
