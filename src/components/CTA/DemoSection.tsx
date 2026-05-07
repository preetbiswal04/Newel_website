"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export const DemoSection = () => {
  return (
    <section 
      className="w-full pb-10 md:pb-16 pt-0 bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: "url('/home-page-section2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-stretch border-t border-blue-600/10">
          
          {/* Left Content */}
          <div className="flex-1 py-16 md:py-24 md:pr-20 flex flex-col justify-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-blue-900 mb-8 tracking-tighter"
            >
              See Newel in action!
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-blue-900/80 mb-12 max-w-xl leading-relaxed font-medium"
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
          <div className="md:w-1/2 relative overflow-hidden min-h-[400px] md:min-h-full flex items-center justify-center">
            <img 
              src="/demo_banner_abstract_1776844946313.png" 
              alt="Abstract AI Visualization"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[10s] hover:scale-110"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
