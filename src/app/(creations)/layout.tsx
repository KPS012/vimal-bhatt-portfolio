'use client';
import { useEffect } from 'react';
import './styles.css';

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return <>{children}</>;
}
