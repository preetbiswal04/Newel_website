"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const FloatingCTA = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-10 right-10 z-50 pointer-events-auto"
    >
      <button className="group relative flex items-center gap-4 px-10 py-5 rounded-full bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:scale-105 active:scale-95 overflow-hidden">
        <span className="font-bold tracking-[0.2em] text-[10px] uppercase relative z-10 group-hover:text-white transition-colors duration-300">Start a Project</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10 group-hover:text-white transition-colors duration-300" />
        
        {/* Hover Background Shift */}
        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-2xl -z-10 group-hover:bg-blue-600/20 transition-colors" />
    </motion.div>
  );
};
