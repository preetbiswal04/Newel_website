"use client";

import React from "react";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-0 group cursor-pointer scale-90 origin-center">
      {/* Animated Icon */}
      <div className="relative w-10 h-6 flex items-center justify-center">
        <svg
          viewBox="0 0 100 60"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Cloud Arcs */}
          <motion.path
            d="M30 45 C15 45, 10 35, 15 25 C20 15, 35 15, 45 20 C55 10, 75 10, 85 25 C95 35, 90 45, 75 45"
            stroke="url(#logo-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Inner Connecting Arcs/Lines */}
          <motion.path
            d="M45 20 C50 30, 65 30, 70 20"
            stroke="url(#logo-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Connecting Dots (Nodes) */}
          <motion.circle
            cx="45" cy="20" r="3"
            fill="url(#logo-gradient)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="85" cy="25" r="2.5"
            fill="#3b82f6"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
          <motion.circle
            cx="15" cy="25" r="2.5"
            fill="#a855f7"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
          />

          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a855f7" /> {/* Purple */}
              <stop offset="0.5" stopColor="#6366f1" /> {/* Indigo */}
              <stop offset="1" stopColor="#3b82f6" /> {/* Blue */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* NEWEL Text */}
      <div className="flex flex-col items-center -mt-1.5">
        <div className="flex items-center gap-1 overflow-hidden h-6">
          {["N", "E", "W", "E", "L"].map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: "easeOut" }}
              className="text-lg font-black tracking-tighter text-white inline-block"
            >
              {char === "E" ? (
                <div className="flex flex-col gap-[2px] py-1.5 px-0.5">
                  <motion.div 
                    animate={{ width: [10, 14, 10] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-[1.5px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" 
                  />
                  <motion.div 
                    animate={{ width: [12, 8, 12] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="h-[1.5px] bg-indigo-500 rounded-full w-3" 
                  />
                  <motion.div 
                    animate={{ width: [10, 14, 10] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="h-[1.5px] bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full" 
                  />
                </div>
              ) : (
                char
              )}
            </motion.span>
          ))}
        </div>

        {/* TECHNOLOGIES Subtext */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 0.6, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-[6px] font-bold text-white/80 uppercase tracking-[0.4em] -mt-1"
        >
          TECHNOLOGIES
        </motion.span>
      </div>
    </div>
  );
};
