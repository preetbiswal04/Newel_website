"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  // Measure page height whenever content changes
  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        setPageHeight(scrollRef.current.scrollHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Check height periodically for dynamic content
    const interval = setInterval(handleResize, 1000);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  const { scrollY } = useScroll();
  
  // Create a spring-based scroll position for that "momentum" feel
  const springScrollY = useSpring(scrollY, {
    stiffness: 40,
    damping: 15,
    restDelta: 0.001
  });

  // Transform the spring value into a negative Y translation
  const y = useTransform(springScrollY, (value) => -value);

  return (
    <>
      {/* 
        This div provides the actual scrollable height for the browser 
        while the content remains fixed/translated.
      */}
      <div style={{ height: pageHeight }} className="w-full pointer-events-none" />
      
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
};
