import React from 'react';
import type { Metadata } from "next";
import About from "./components/about"
import Footer from '@/components/footer/Footer';


export const metadata: Metadata = {
  title: "About Me",
  description: "About Vimal Bhatt",
};

export default function AboutPage() {
  return (
      <>
        <About />
        <Footer />
      </>
  )
}
