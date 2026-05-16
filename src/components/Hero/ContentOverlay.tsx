"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Utils/Button";
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
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-xl">
              {currentVideo.title.split(new RegExp(`(${currentVideo.highlight})`, "g")).map((part, i) =>
                part === currentVideo.highlight ? (
                  <span key={i} className="bg-gradient-to-r from-[#00A3E0] to-[#60A5FA] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,163,224,0.4)]">
                    {part}
                  </span>
                ) : (
                  part.split(/(\d+)/).map((subPart, j) =>
                    /\d+/.test(subPart) ? (
                      <span key={`${i}-${j}`} className="font-roboto">{subPart}</span>
                    ) : (
                      subPart
                    )
                  )
                )
              )}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-white text-lg md:text-xl lg:text-2xl font-medium max-w-2xl leading-relaxed drop-shadow-md">
              {currentVideo.description.split(/(\d+)/).map((part, i) =>
                /\d+/.test(part) ? (
                  <span key={i} className="font-roboto">{part}</span>
                ) : (
                  part
                )
              )}
            </p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 md:mt-6"
            >
              <Button variant="primary" size="lg" href="/services/ai-strategy-consulting">
                Read More
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};