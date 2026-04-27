"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CaseDetailHeroProps {
  title: string;
  video?: string;
  image: string;
  isDark?: boolean;
}

export const CaseDetailHero = ({ title, video, image, isDark = false }: CaseDetailHeroProps) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const getYoutubeId = (url?: string) => {
    if (!url) return null;
    const trimmedUrl = url.trim();
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = trimmedUrl.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = getYoutubeId(video);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center noise-overlay">
      {/* Background Video/Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 select-none"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        {youtubeId && isMounted ? (
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77777778vh] h-[56.25vw]">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                className="absolute top-0 left-0 w-full h-full border-none opacity-60"
                allow="autoplay; encrypted-media"
                title="Background Video"
              />
            </div>
          </div>
        ) : video && !youtubeId ? (
          <video
            autoPlay loop muted playsInline
            className="h-full w-full object-cover opacity-60"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img src={image} alt={title} className="h-full w-full object-cover opacity-60" />
        )}

        {/* Cinematic Overlays - Theme Aware */}
        <div className={`absolute inset-0 bg-gradient-to-t transition-colors duration-1000 ${
          isDark ? "from-[#050505] via-[#050505]/40 to-transparent" : "from-white via-white/40 to-transparent"
        }`} />
        <div className={`absolute inset-0 bg-radial-at-center transition-colors duration-1000 ${
          isDark ? "from-transparent to-[#050505]/20" : "from-transparent to-white/20"
        }`} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 text-right">
        <div className="flex flex-col items-end gap-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-8 bg-blue-600/50" />
            <span className="text-blue-600 font-mono text-[10px] tracking-[0.5em] uppercase">Case Study Analysis</span>
          </motion.div>

          <div className="w-full overflow-hidden text-right">
            <h1 className={cn(
              "text-2xl md:text-2xl lg:text-5xl font-serif leading-[1.1] tracking-tightest",
              isDark ? "text-white" : "text-slate-900"
            )}>
              {title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  <span className="inline-block overflow-hidden py-1">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 1.2,
                        delay: 0.2 + (i * 0.08),
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                  {" "}
                </React.Fragment>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-slate-400 font-mono text-[8px] uppercase tracking-[0.4em] rotate-90 mb-8 origin-bottom">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-slate-400/40 to-transparent" />
      </motion.div>
    </section>
  );
};
