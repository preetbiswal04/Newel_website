"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ControlsProps {
  currentIdx: number;
  totalSlides: number;
  progress: number; // 0 to 100
  onNext: () => void;
  onPrev: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  currentIdx,
  totalSlides,
  progress,
  onNext,
  onPrev
}) => {
  const formattedCurrent = (currentIdx + 1).toString().padStart(2, "0");
  const formattedTotal = totalSlides.toString().padStart(2, "0");

  return (
    <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-end">
      {/* Manual Navigation & Counter */}
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-24 mb-16 pointer-events-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={onPrev}
            className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={onNext}
            className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="font-mono text-white text-xl tracking-widest">
          <span className="font-bold">{formattedCurrent}</span>
          <span className="mx-2 opacity-40">/</span>
          <span className="opacity-40">{formattedTotal}</span>
        </div>
      </div>

      {/* Progress Bar (at the very bottom) */}
      <div className="w-full h-[3px] bg-white/10 pointer-events-none">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </div>
  );
};
