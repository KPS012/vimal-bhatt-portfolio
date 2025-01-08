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
      const scrollContainer = document.querySelector(
        '[data-scroll-container]'
      ) as HTMLElement | null;

      if (scrollContainer) {
        const locomotiveScroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });

        setTimeout(() => {
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 2000);

        return () => {
          // Cleanup on unmount
          locomotiveScroll.destroy();
        };
      } else {
        console.error('Scroll container not found');
      }
    })();
  }, []);

  return (
    <div data-scroll-container>
      {children}
    </div>
  );
}
