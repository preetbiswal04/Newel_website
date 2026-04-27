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
    { label: "REASONING", content: reasoning },
    { label: "SOLUTION", content: outcomes },
  ];

  return (
    <section className="py-48 px-8 md:px-16 min-h-[80vh] noise-overlay relative z-10">
      <div className="w-full">
        {overview && (
          <div className="mb-48">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className={cn("w-full mr-auto text-left", !isDark && "light-theme")}
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif leading-[1.2] mb-12 tracking-tightest italic font-light animate-text-shine">
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
                "flex flex-wrap items-center gap-x-12 gap-y-6 font-mono text-[9px] tracking-[0.4em] uppercase pt-32 border-t",
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
        <div className="h-24 md:h-32 w-full" />

        <div className={cn(
          "border-t transition-colors duration-500",
          isDark ? "border-white/10" : "border-slate-200"
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
                  "border-b transition-colors duration-500",
                  isDark ? "border-white/10" : "border-slate-200"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-12 flex justify-between items-center text-left group transition-all"
                >
                  <div className="flex items-center gap-8">
                    <span className={cn(
                      "font-mono text-xs transition-colors",
                      isDark ? "text-white/20" : "text-slate-300"
                    )}>0{idx + 1}</span>
                    <span className={cn(
                      "text-xl md:text-3xl font-serif tracking-tight transition-all duration-500",
                      isOpen
                        ? (isDark ? "text-white" : "text-slate-900")
                        : (isDark ? "text-white/40 group-hover:text-white/60" : "text-slate-400 group-hover:text-slate-600")
                    )}>
                      {section.label}
                    </span>
                  </div>
                  <div className={cn(
                    "transition-transform duration-500",
                    isOpen ? "rotate-180 text-blue-600" : (isDark ? "text-white/20" : "text-slate-300")
                  )}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden flex justify-start"
                    >
                      <div className={cn(
                        "pb-20 pt-4 text-base md:text-lg leading-relaxed font-light text-left",
                        isDark ? "text-white/70 selection:bg-blue-500/30" : "text-slate-600 selection:bg-blue-100"
                      )}>
                        {section.content}
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
