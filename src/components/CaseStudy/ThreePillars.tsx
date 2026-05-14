"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThreePillarsProps {
  overview?: string;
  location?: string;
  year?: string;
  services?: string[];
  input: string;
  reasoning: string;
  outcomes: string;
  isDark?: boolean;
}

export const ThreePillars = ({ overview, location, year, services, input, reasoning, outcomes, isDark = false }: ThreePillarsProps) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const sections = [
    { label: "PROBLEM STATEMENT", content: input },
    { label: "SOLUTION", content: reasoning },
    { label: "BUSINESS OUTCOMES", content: outcomes },
  ];

  return (
    <section className="py-20 md:py-32 container-page noise-overlay relative z-10">
      <div className="w-full max-w-7xl mx-auto">
        {overview && (
          <div className="mb-20 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className={cn("w-full mr-auto text-left", !isDark && "light-theme")}
            >
              <h2 className="text-xl md:text-2xl lg:text-[2rem] font-sans leading-[1.4] mb-10 tracking-tight font-light animate-text-shine">
                {overview}
              </h2>
            </motion.div>

            {/* Metadata Row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className={cn(
                "flex flex-wrap items-center gap-x-12 gap-y-6 font-mono text-[9px] tracking-[0.4em] uppercase pt-20 border-t",
                isDark ? "text-white/40 border-white/10" : "text-slate-400 border-slate-200"
              )}
            >
              <div className="flex flex-col gap-2 min-w-[200px]" />
              {year && (
                <div className="flex flex-col gap-2">
                  <span className="text-blue-600/70">Year</span>
                  <span className={isDark ? "text-white/70" : "text-slate-600"}>{year}</span>
                </div>
              )}
              {services && services.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-blue-600/70">Expertise</span>
                  <div className="flex gap-4">
                    {services.map((s, i) => (
                      <span key={i} className={isDark ? "text-white/70" : "text-slate-600"}>{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* Guaranteed Vertical Spacer */}
        <div className="h-12 md:h-16 w-full" />

        <div className={cn(
          "border-t transition-all duration-700",
          isDark ? "border-white/40" : "border-slate-200"
        )}>
          {sections.map((section, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={cn(
                  "border-b transition-all duration-700 relative overflow-hidden",
                  isDark ? "border-white/30" : "border-slate-200",
                  isOpen && isDark && "bg-white/[0.02]"
                )}
              >
                {/* Active side indicator */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0 }}
                      style={{ originY: 0 }}
                      className="absolute left-0 top-0 w-1 h-full bg-blue-500 z-20"
                    />
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-10 md:py-12 px-6 md:px-10 flex justify-between items-center text-left group transition-all relative z-10"
                >
                  <div className="flex items-center gap-10 md:gap-14">
                    <span className={cn(
                      "font-mono text-[11px] tracking-widest transition-colors duration-500 min-w-[24px]",
                      isOpen
                        ? "text-blue-400"
                        : (isDark ? "text-white/40 group-hover:text-white/80" : "text-slate-400 group-hover:text-slate-600")
                    )}>0{idx + 1}</span>
                    <span className={cn(
                      "text-xl md:text-2xl font-serif font-black tracking-tight transition-all duration-500",
                      isOpen
                        ? (isDark ? "text-white" : "text-slate-900")
                        : (isDark ? "text-white/80 group-hover:text-white" : "text-slate-600 group-hover:text-slate-900")
                    )}>
                      {section.label}
                    </span>
                  </div>
                  <div className={cn(
                    "w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border transition-all duration-500 shrink-0",
                    isOpen
                      ? "rotate-180 border-blue-500/50 text-blue-400 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                      : (isDark ? "border-blue-500/30 text-blue-500/60 group-hover:border-blue-500/50 group-hover:text-blue-400" : "border-slate-200 text-slate-300")
                  )}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-0 px-6 md:px-10">
                        {/* The content card offset should match the label offset: 
                            Left padding of button (10) + gap (14) + number width (~24) = ~48px offset
                        */}
                        <div className={cn(
                          "ml-0 md:ml-[78px] p-8 md:p-10 rounded-[24px] text-sm md:text-base leading-relaxed font-medium transition-all relative overflow-hidden",
                          isDark
                            ? "bg-white text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                            : "bg-white text-slate-900 border border-slate-100 shadow-slate-200/50"
                        )}>
                          <div className="max-w-3xl whitespace-pre-wrap relative z-10">
                            {section.content}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
