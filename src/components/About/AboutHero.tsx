"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="bg-black text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container-page mt-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-[3.2rem] font-black leading-[1.2] tracking-tight mb-8 max-w-4xl"
        >
          100+ Minds . 100+ Digital <br className="hidden md:block" /> Masterpieces . One Vision
        </motion.h1>

        {/* Hero Image Container */}
        <div className="relative group rounded-2xl md:rounded-[40px] overflow-hidden aspect-[16/9] md:aspect-[21/7] border border-white/10 max-w-6xl">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Image
              src="/about-hero.png" 
              alt="The Newel Story"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              priority
            />
            
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Label - "The Newel Story" */}
            <div className="absolute bottom-4 right-6 md:bottom-8 md:right-10">
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg md:text-2xl font-medium italic font-serif tracking-tight text-white/90"
                style={{ fontFamily: "'RecklessNeue', serif" }}
              >
                The Newel Story
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
