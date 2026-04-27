"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { VideoAsset } from "./VideoBackground";

interface ContentOverlayProps {
  currentVideo: VideoAsset;
}

export const ContentOverlay: React.FC<ContentOverlayProps> = ({ currentVideo }) => {
  return (
    <div className="container-page relative z-20 h-full flex items-center">
      <div className="max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              {currentVideo.title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-2xl leading-relaxed">
              {currentVideo.description}
            </p>
            
            <motion.button
              whileHover="hover"
              initial="initial"
              className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-sm font-semibold transition-colors duration-300 overflow-hidden"
            >
              <span className="relative z-10">Read More</span>
              <motion.div
                variants={{
                  initial: { x: 0 },
                  hover: { x: 5 }
                }}
                className="relative z-10"
              >
                <ArrowRight size={20} />
              </motion.div>
              
              {/* Button Hover Glow/Fill */}
              <motion.div
                variants={{
                  initial: { opacity: 0, scale: 0.5 },
                  hover: { opacity: 1, scale: 1 }
                }}
                className="absolute inset-0 bg-white/10 group-hover:bg-brand-accent/5 pointer-events-none"
              />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
