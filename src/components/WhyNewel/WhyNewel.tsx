"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, BarChart3, ShieldCheck, CircleDollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhyItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  bullets: string[];
}

const WHY_ITEMS: WhyItem[] = [
  {
    id: "accelerate",
    icon: <Zap size={18} />,
    label: "Accelerate AI impact",
    title: "Accelerate AI impact",
    bullets: [
      "Easily access any tool, data, and infrastructure, on-demand",
      "Harness latest open-source and commercial innovation",
      "Deploy, monitor and manage models quickly",
    ],
  },
  {
    id: "scale",
    icon: <BarChart3 size={18} />,
    label: "Scale AI across the organization",
    title: "Scale AI across the organization",
    bullets: [
      "Centralize and reuse knowledge across teams",
      "Upskill and empower everyone to achieve more, together",
      "Collaborate with all stakeholders on a global scale",
    ],
  },
  {
    id: "governance",
    icon: <ShieldCheck size={18} />,
    label: "Manage AI risk and governance",
    title: "Manage AI risk and governance",
    bullets: [
      "Audit-ready platform with best-in-class reproducibility",
      "Turnkey model governance, monitoring and remediation",
      "Enforce compliance with robust controls and workflows",
    ],
  },
  {
    id: "costs",
    icon: <CircleDollarSign size={18} />,
    label: "Reduce AI costs and complexity",
    title: "Reduce AI costs and complexity",
    bullets: [
      "Optimize compute utilization and cloud costs",
      "Intelligent cost management and controls",
      "Minimize support costs with automated DevOps",
    ],
  },
];

export const WhyNewel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 w-full">
      <div className="container-page">
        {/* Section Label */}
        <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 opacity-60">
          WHY NEWEL
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002D72] leading-tight mb-20 tracking-tight max-w-4xl">
          Freedom for data scientists, <br className="hidden md:block" /> control for IT
        </h2>

        {/* Two-Column: Tabs (left narrow) + Content (right wide) */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-start">

          {/* LEFT: Vertical Tab Buttons */}
          <div className="flex flex-col gap-4">
            {WHY_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "flex items-center gap-5 w-full text-left px-8 py-6 rounded-2xl border transition-all duration-500 group",
                  activeIndex === idx
                    ? "bg-white border-blue-600 shadow-xl shadow-blue-600/5 text-blue-700 ring-1 ring-blue-600/10"
                    : "bg-blue-600/5 border-transparent text-blue-900/60 hover:bg-blue-600/10 hover:text-blue-800"
                )}
              >
                <div className={cn(
                  "p-2.5 rounded-lg transition-colors duration-500",
                  activeIndex === idx ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                )}>
                  {item.icon}
                </div>
                <span className="text-base font-bold tracking-tight">{item.label}</span>
              </button>
            ))}
          </div>

          {/* RIGHT: Content Panel */}
          <div className="bg-white rounded-[40px] p-12 lg:p-20 shadow-2xl shadow-blue-600/10 border border-blue-600/5 min-h-[500px] relative overflow-hidden flex flex-col justify-center items-center">
            {/* Background Decorative Blur */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-100/50 blur-[100px] rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={WHY_ITEMS[activeIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-2xl flex flex-col items-center"
              >
                {/* Title with Icon */}
                <div className="flex items-center justify-center gap-4 mb-12 w-full">
                  <div className="w-10 h-[1px] bg-blue-600/30" />
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] text-center">
                    {WHY_ITEMS[activeIndex].title}
                  </h3>
                  <div className="w-10 h-[1px] bg-blue-600/30" />
                </div>

                {/* Bullet Points */}
                <ul className="flex flex-col gap-10 w-full">
                  {WHY_ITEMS[activeIndex].bullets.map((bullet, idx) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="flex items-start gap-6 group/item"
                    >
                      <div className="mt-2 w-6 h-6 rounded-full border-2 border-blue-600/20 flex items-center justify-center shrink-0 group-hover/item:border-blue-600 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                      <span className="text-xl md:text-2xl font-medium leading-relaxed text-blue-900/80 tracking-tight">
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
