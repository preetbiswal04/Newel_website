"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { VideoBackground, VIDEOS } from "./VideoBackground";
import { ContentOverlay } from "./ContentOverlay";
import { Controls } from "./Controls";

export const HeroSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const SLIDE_DURATION = 10000; // 10 seconds

  // Handle manual navigation
  const goToNext = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % VIDEOS.length);
    setProgress(0);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
    setProgress(0);
  }, []);

  // Timer and Progress Logic
  useEffect(() => {
    const startTime = Date.now();
    const intervalTime = 100; // Update every 100ms for smoothness

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / SLIDE_DURATION) * 100;

      if (newProgress >= 100) {
        goToNext();
      } else {
        setProgress(newProgress);
        timerRef.current = setTimeout(updateProgress, intervalTime);
      }
    };

    timerRef.current = setTimeout(updateProgress, intervalTime);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIdx, goToNext]);

  // Mobile Detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <VideoBackground currentIdx={currentIdx} isMobile={isMobile} />
      
      <ContentOverlay currentVideo={VIDEOS[currentIdx]} />
      
      <Controls
        currentIdx={currentIdx}
        totalSlides={VIDEOS.length}
        progress={progress}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </section>
  );
};
