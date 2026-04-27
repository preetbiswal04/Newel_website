"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const ScrollProgress = ({ isDark = false }: { isDark?: boolean }) => {
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);
  
  // Smooth the scroll value
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed left-8 bottom-12 z-50 hidden md:flex flex-col items-center gap-4">
      <div className={cn(
        "h-32 w-[1px] relative overflow-hidden transition-colors duration-500",
        isDark ? "bg-white/10" : "bg-gray-200"
      )}>
        <motion.div 
          style={{ height: useTransform(scaleX, [0, 1], ["0%", "100%"]) }}
          className="absolute top-0 left-0 w-full bg-blue-600"
        />
      </div>
      <span className={cn(
        "font-mono text-[10px] tracking-widest tabular-nums uppercase transition-colors duration-500",
        isDark ? "text-white/40" : "text-gray-400"
      )}>
        {percentage.toString().padStart(2, '0')}%
      </span>
    </div>
  );
};
