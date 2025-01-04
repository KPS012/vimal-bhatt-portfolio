'use client';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Page from './components/file';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="w-full flex justify-center items-center">
      <div
        className="sticky top-0 w-[1200px] border border-white bg-black"
        style={{ height: '100vh' }} // Makes the sticky div full height
      >
        <Page />
      </div>
    </main>
  );
}
