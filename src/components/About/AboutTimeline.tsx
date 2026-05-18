"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const timelineData = [
  {
    year: "2015",
    label: "Inception",
    description: "It started with one person, one client, and one belief — that great technology partnerships are built on trust, not transactions. Newel took its first step with Edelweiss as its founding client, delivering a Commodity Warehouse project that set the tone for everything that followed. A one-person LLP with a big vision.",
    image: "/culture-2.jpeg",
  },
  {
    year: "2016",
    label: "First Steps Forward",
    description: "The word spread. Repeat work came in, new clients followed, and the team grew to 40+ people. What began as a single engagement became a pattern — clients staying, expanding, and referring. Embedment into client environments became Newel's early differentiator.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    year: "2017–20",
    label: "Augmentation",
    description: "Newel formalised into a Private Limited Company, stabilised at 20+ employees, and deepened relationships with 3 anchor clients. Headquartered in Mumbai, the foundation was being laid — delivery rigour, technical depth, and a culture of ownership that would define the company's identity.",
    image: "/culture-5.jpeg",
  },
  {
    year: "2020-2024",
    label: "Focus & Growth",
    description: "This is where Newel found its stride. Power Automate, AI/ML, and RPA became core capabilities. Product development began. Transformation projects replaced transactional ones. Managed Services and Data Warehouse offerings took shape — moving Newel from a staffing-adjacent firm to a full-stack technology partner.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
  },
  {
    year: "2024-2026",
    label: "Recognition",
    description: "Recognized at the Enqube Industry Event for AI-Driven Risk & Compliance Innovation. Our platform enables lending and financial enterprises to improve compliance accuracy, accelerate decision-making, and reduce manual workloads. At Newel, we believe compliance should be smart, seamless, and effortless. Our focus remains unwavering — building responsible AI systems that help organizations navigate evolving regulatory landscapes with confidence.",
    image: "/award-2026.png",
  },
];

export const AboutTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(4); // Default to Today

  const activeItem = timelineData[activeIndex];

  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden min-h-[850px] flex flex-col justify-between">
      <div className="container-page">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-24 tracking-tight"
        >
          A Decade of Digital Excellence
        </motion.h2>

        <div className="relative h-[450px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full flex flex-col items-center justify-center"
            >
              {/* 1. Massive Year - Now Above Image with z-30 */}
              <motion.h3 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-bold text-blue-600 leading-none tracking-tighter select-none z-30 pointer-events-none drop-shadow-xl whitespace-nowrap"
              >
                {activeItem.year}
              </motion.h3>

              <div className="container-page relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between">
                {/* 2. Left Side: Tilted Image Card - Now z-20 (below year) */}
                <motion.div 
                  initial={{ x: -100, opacity: 0, rotate: -5 }}
                  animate={{ x: 0, opacity: 1, rotate: -8 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-20 w-[240px] sm:w-[320px] md:w-[450px] aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl shadow-black bg-slate-900/40 backdrop-blur-sm"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.year}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                </motion.div>

                {/* 3. Right Side: Description Content - Moved down and refined size */}
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 100, opacity: 1 }} 
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="z-40 max-w-[280px] sm:max-w-[400px] mt-12 lg:mt-0 lg:ml-auto p-7 rounded-[28px] bg-[#0c0c0c]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] lg:translate-y-24"
                >
                  <span className="text-blue-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-3 block">
                    {activeItem.label}
                  </span>
                  <p className="text-[13px] md:text-[15px] text-white/90 leading-[1.6] font-bold">
                    {activeItem.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Timeline Navigation */}
      <div className="w-full mt-24 border-t border-white/10 pt-12">
        <div className="container-page">
          <div className="flex justify-between items-center px-4 relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-[18px] left-8 right-8 h-[1px] bg-white/10 z-0" />
            
            {timelineData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative z-10 flex flex-col items-center group"
              >
                {/* Year Marker */}
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                    activeIndex === index 
                      ? "bg-blue-600 border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]" 
                      : "bg-black border-white/20 group-hover:border-white/50"
                  }`}
                >
                  {activeIndex === index && (
                    <motion.div 
                      layoutId="activeDot"
                      className="w-3 h-3 bg-white rounded-full" 
                    />
                  )}
                </div>
                
                {/* Year Label */}
                <span className={`mt-4 text-xs font-bold transition-colors tracking-widest ${
                  activeIndex === index ? "text-white" : "text-white/40 group-hover:text-white/70"
                }`}>
                  {item.year}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
