"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";
import { getMediaUrl } from "@/lib/s3";

export const CareersHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToJobs = () => {
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay interrupted:", err);
      });
    }
  }, []);

  return (
    <section className="relative pt-24 pb-0 md:pt-28 md:pb-0">
      <div className="container-page">
        {/* Main Hero Card Container */}
        <div className="relative w-full aspect-[16/10] md:aspect-[2.8/1] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl flex items-center justify-center">

          {/* Background Video Container */}
          <div className="absolute inset-0 z-0 bg-white">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-100"
            >
              <source src={getMediaUrl("careers-vd-1.mp4")} type="video/mp4" />
            </video>

            {/* Subtle Gradient for Readability */}
            <div className="absolute inset-0 bg-black/35" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-2xl md:text-3xl lg:text-[38px] font-medium leading-[1.3] mb-10 tracking-tight drop-shadow-md"
            >
              We’re on a mission to expand <br className="hidden md:block" />
              human potential to do <br className="hidden md:block" />
              extraordinary work.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center"
            >
              <button
                onClick={scrollToJobs}
                className="group relative flex items-center gap-2 px-8 py-3 rounded-full border border-purple-200 hover:border-purple-400 transition-all duration-300 text-purple-700 text-[13px] font-semibold"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <span>See open positions</span>
                <MoveDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
