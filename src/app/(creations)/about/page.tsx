import React from 'react';
import type { Metadata } from "next";
import About from "./components/about"


export const metadata: Metadata = {
  title: "About Me",
  description: "About Vimal Bhatt",
};

export default function AboutPage() {
  return (
      <div className="">
        <About />
      </div>
  )
}
