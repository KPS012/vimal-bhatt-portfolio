"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Magt({children}) {
    const magnetic = useRef(null);

    useEffect(() => {
        console.log(children);
        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"});
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"});

        magnetic.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 1.5);
            yTo(y * 1.5);
        });

        magnetic.current.addEventListener("mouseleave", () => {
            xTo(0);
            yTo(0);
        });

        // Cleanup on unmount
        return () => {
            magnetic.current.removeEventListener("mousemove", () => {});
            magnetic.current.removeEventListener("mouseleave", () => {});
        };
    }, [children]);

    return React.cloneElement(children, {ref: magnetic});
}
