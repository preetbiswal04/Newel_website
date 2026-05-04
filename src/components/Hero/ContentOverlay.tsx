"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "@/components/Utils/AnimatedButton";
import { VideoAsset } from "./VideoBackground";

interface ContentOverlayProps {
  currentVideo: VideoAsset;
}

export const ContentOverlay: React.FC<ContentOverlayProps> = ({ currentVideo }) => {
  return (
    <div className="container-page relative z-20 h-full flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-24">
      
      <div className="max-w-4xl flex flex-col gap-6 md:gap-8">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans"
          >
            {/* HEADING */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              {currentVideo.title.split(/(\d+)/).map((part, i) =>
                /\d+/.test(part) ? (
                  <span key={i} className="font-roboto">{part}</span>
                ) : (
                  part
                )
              )}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed">
              {currentVideo.description.split(/(\d+)/).map((part, i) =>
                /\d+/.test(part) ? (
                  <span key={i} className="font-roboto">{part}</span>
                ) : (
                  part
                )
              )}
            </p>

            {/* BUTTON */}
            <AnimatedButton variant="primary">
              Read More
            </AnimatedButton>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};