"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoAsset {
  id: number;
  url: string;
  poster: string;
  title: string;
  description: string;
}

const VIDEOS: VideoAsset[] = [
  {
    id: 1,
    url: "/18069701-uhd_3840_2160_24fps.mp4", // Tech city
    poster: "/18069701-uhd_3840_2160_24fps.mp4",
    title: "Your Path to Agentic AI Starts Here",
    description: "Newel Technologies is a leading AI consultancy that delivers transformation services to guide organizations into the new era of AI.."
  },
  {
    id: 2,
    url: "https://websitesapi.dataart.com/media/pbgfimzl/partners-for-data-11-24.mp4", // Data visualization
    poster: "https://websitesapi.dataart.com/media/pbgfimzl/partners-for-data-11-24.mp4",
    title: "Quantum Intelligence",
    description: "Leveraging quantum computing and advanced analytics to solve complex problems."
  },
  {
    id: 3,
    url: "https://websitesapi.dataart.com/media/whqffkoo/trends-2026-video-main-page.mp4", // Abstract blue network
    poster: "https://websitesapi.dataart.com/media/whqffkoo/trends-2026-video-main-page.mp4",
    title: "Defining the Future",
    description: "Driving digital transformation across global enterprises with AI-first strategies."
  },
  {
    id: 4,
    url: "/18069232-uhd_3840_2160_24fps.mp4", // Modern office / team
    poster: "/18069232-uhd_3840_2160_24fps.mp4",
    title: "Human-Centric Innovation",
    description: "Putting people at the heart of every technological breakthrough we engineer."
  },
  {
    id: 5,
    url: "/7774450-uhd_3840_2160_30fps (1).mp4", // Abstract light
    poster: "/7774450-uhd_3840_2160_30fps (1).mp4",
    title: "Agile Excellence",
    description: "Mastering the art of rapid iteration and seamless deployment at scale."
  }
];

interface VideoBackgroundProps {
  currentIdx: number;
  isMobile: boolean;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ currentIdx, isMobile }) => {
  const [preloaded, setPreloaded] = useState<number[]>([0]); // Preload first immediately
  const [isIdle, setIsIdle] = useState(false);

  // Preloading logic
  useEffect(() => {
    const handleIdle = () => {
      if (!isIdle) {
        setIsIdle(true);
        // Preload the rest when idle
        setPreloaded([0, 1, 2, 3, 4]);
      }
    };

    if (typeof window !== "undefined") {
      const idleCallback = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 2000));
      const idleId = idleCallback(handleIdle);
      return () => {
        if ((window as any).cancelIdleCallback) (window as any).cancelIdleCallback(idleId);
      };
    }
  }, [isIdle]);

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full"
        >
          <img
            src={VIDEOS[currentIdx].poster}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={VIDEOS[currentIdx].poster}
            className="w-full h-full object-cover"
          >
            <source src={VIDEOS[currentIdx].url} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>

      {/* Hidden preloading videos */}
      <div className="hidden">
        {preloaded.map((idx) => (
          idx !== currentIdx && (
            <video key={`preload-${idx}`} preload="auto" muted>
              <source src={VIDEOS[idx].url} type="video/mp4" />
            </video>
          )
        ))}
      </div>

      {/* Hero Visual Polish: Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-10 hero-gradient-overlay pointer-events-none opacity-20" />
      <div className="absolute inset-0 z-10 bg-white/5 pointer-events-none" />
    </div>
  );
};

export { VIDEOS };
export type { VideoAsset };
