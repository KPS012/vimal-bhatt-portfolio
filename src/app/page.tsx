'use client';
import { useEffect, useState } from 'react';
import Intro from '@/components/Intro';
import { AnimatePresence } from 'framer-motion';
import Description from '@/components/Description';
import Footst from "@/components/footst/Frost";
import Preloader from '@/components/Preloader/index';
import MyCrec from "@/components/creations/creationsSection";

import './style.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Intro />
      <Description />
      <MyCrec />
      <Footst />
    </main>
  );
}
