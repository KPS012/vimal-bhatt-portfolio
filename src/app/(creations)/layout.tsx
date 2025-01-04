
'use client';
import { useEffect, useState} from 'react'
import { Montserrat } from "next/font/google";
import "./styles.css";
import Footer from "@/components/workCompo/Footer";
import Footst from "@/components/footst/index"

const monts = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
      (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll();
  
            setTimeout( () => {
              setIsLoading(false);
              document.body.style.cursor = 'default'
              window.scrollTo(0,0);
            }, 2000)
        }
      )()
    }, [])

  return (
    <html lang="en">
      <body
        className={monts.className}
      >
        {children}
        <Footst />
        <Footer />
      </body>
    </html>
  );
}
