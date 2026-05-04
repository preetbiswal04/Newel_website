"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";

export const CaseStudyHero = () => {
  const featuredCase = CASE_STUDIES[0];

  return (
    <section className="bg-transparent pt-32 pb-24 md:pt-48 md:pb-32 relative overflow-hidden noise-overlay">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glowing Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px]"
        />

        {/* Subtle Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-8 bg-blue-500" />
                <span className="text-blue-400 font-mono text-[11px] tracking-[0.4em] uppercase">Impact & Insights</span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-8xl lg:text-[110px] font-poppins font-bold text-white leading-[0.95] tracking-tightest"
                >
                  Global <br />
                  <span className="text-white/40 italic font-light">Case</span> Studies
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8"
            >
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-xl font-light">
                Discover how we architect the future through AI, precision data engineering, 
                and high-stakes digital transformation.
              </p>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-poppins font-semibold text-3xl">50+</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest">Global Engagements</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="flex flex-col gap-1">
                  <span className="text-white font-poppins font-semibold text-3xl">$2B+</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest">Client Impact Generated</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Featured Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative perspective-1000"
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] pointer-events-none group-hover:border-white/10 transition-colors duration-700" />
              
              <div className="scale-100 transform-gpu transition-all duration-700 group-hover:translate-y-[-10px]">
                <CaseStudyCard {...featuredCase} />
              </div>

              {/* Floating Label */}
              <div className="absolute top-10 -left-6 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-sm rotate-[-90deg] origin-left shadow-2xl z-20">
                LATEST WORK
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


