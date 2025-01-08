"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magt({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    // Capture the current value of magnetic in a local variable
    const element = magnetic.current;
    if (!element) return;

    // Initialize GSAP animations
    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    // Mousemove handler
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 1.5);
      yTo(y * 1.5);
    };

    // Mouseleave handler
    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    // Add event listeners
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup on unmount
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [children]); // React will re-run the effect when `children` changes

  // Forward the ref to the child
  return React.cloneElement(children, { ref: magnetic });
}
