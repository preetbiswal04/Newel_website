"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export const DemoSection = () => {
  return (
    <section className="w-full py-24 md:py-40">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-stretch border-t border-blue-600/10">
          
          {/* Left Content */}
          <div className="flex-1 py-16 md:py-24 md:pr-20 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-blue-800 mb-8 tracking-tighter"
            >
              See Newel in action!
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-blue-700/70 mb-12 max-w-xl leading-relaxed"
            >
              Watch the 15 minute on-demand demo to get an overview of the Newel Enterprise AI Platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <button className="flex items-center gap-3 bg-[#634cc9] hover:bg-[#523db0] text-white px-10 py-5 rounded-none font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 uppercase text-xs tracking-widest">
                <Play size={20} fill="currentColor" />
                Watch Demo
              </button>
              
              <button className="flex items-center gap-2 border-2 border-[#634cc9] text-[#634cc9] hover:bg-[#634cc9] hover:text-white px-10 py-5 rounded-none font-bold transition-all active:scale-95 uppercase text-xs tracking-widest">
                Explore the Platform
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>

          {/* Right Visual (Abstract Line Art) */}
          <div className="md:w-1/2 relative bg-transparent overflow-hidden min-h-[400px] md:min-h-full">
            <img 
              src="/demo_banner_abstract_1776844946313.png" 
              alt="Abstract AI Visualization"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[10s] hover:scale-110"
            />
            {/* Visual Polish: Side Gradient (Fade into white on desktop) */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#d6d1f0] to-transparent hidden md:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
