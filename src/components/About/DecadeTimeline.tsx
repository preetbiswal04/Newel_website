"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TIMELINE_DATA } from "@/data/aboutData";

export default function DecadeTimeline() {
  const [activeYear, setActiveYear] = useState(TIMELINE_DATA[0].year);
  const [progress, setProgress] = useState(0);
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeMilestone = TIMELINE_DATA.find((m) => m.year === activeYear)!;
  const activeIndex = TIMELINE_DATA.findIndex((m) => m.year === activeYear);

  const goToNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % TIMELINE_DATA.length;
    setActiveYear(TIMELINE_DATA[nextIndex].year);
    setProgress(0);
  }, [activeIndex]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + 100 / (6000 / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isInView, goToNext]);

  const handleYearClick = (year: number) => {
    setActiveYear(year);
    setProgress(0);
  };

  return (
    <section
      ref={ref}
      id="about-timeline"
      className="w-full py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-4">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            A Decade of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Relentless Innovation
            </span>
          </h2>
        </motion.div>

        {/* Content area */}
        <div className="relative bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden min-h-[400px] md:min-h-[440px] mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col md:flex-row h-full"
            >
              {/* Visual / Gradient block */}
              <div
                className={`w-full md:w-5/12 min-h-[220px] md:min-h-[440px] bg-gradient-to-br ${activeMilestone.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
                />
                <div className="relative text-center px-8">
                  <span className="text-[100px] md:text-[140px] font-black text-white/20 leading-none">
                    {activeMilestone.year}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 p-8 md:p-14 flex flex-col justify-center">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                  {activeMilestone.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-snug">
                  {activeMilestone.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {activeMilestone.narrative}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Year tab bar */}
        <div className="flex items-center gap-1 md:gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {TIMELINE_DATA.map((milestone, i) => {
            const isActive = milestone.year === activeYear;
            return (
              <button
                key={milestone.year}
                onClick={() => handleYearClick(milestone.year)}
                className={`relative flex-shrink-0 px-4 md:px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-white bg-gray-900"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {milestone.year}
                {/* Progress bar for active tab */}
                {isActive && (
                  <div className="absolute bottom-0 left-2 right-2 h-[3px] bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-cyan-400 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
