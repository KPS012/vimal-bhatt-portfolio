import React from 'react';
import type { Metadata } from "next";
import MyCreations from "./creations"


export const metadata: Metadata = {
  title: "My Creations",
  description: "Some of my Creations",
};

export default function AboutPage() {
  return (
      <div className="">
        <MyCreations />
      </div>
  )
}
