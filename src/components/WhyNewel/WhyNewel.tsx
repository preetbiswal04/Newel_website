"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, BarChart3, ShieldCheck, CircleDollarSign, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    <section className="w-full py-16 md:py-24 bg-[#E5E7EB] overflow-hidden">
      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-500 rounded-full" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
              WHY NEWEL
            </p>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.1rem] lg:text-[4rem] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950">
            <span className="text-blue-500">Freedom</span> for data scientists, <br />
            <span className="text-blue-500">control</span> for IT
          </h2>
        </div>

        {/* Tabbed Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-start">
          
          {/* Tabs Navigation */}
          <div className="flex flex-col gap-3">
            {WHY_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "group relative flex items-center gap-5 p-5 rounded-[1.25rem] text-left transition-all duration-300",
                  activeIndex === idx
                    ? "bg-white shadow-lg border border-white"
                    : "hover:bg-white/40 border border-transparent"
                )}
              >
                <div className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                  activeIndex === idx 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                    : "bg-white text-slate-400 group-hover:text-blue-600"
                )}>
                  {item.icon}
                </div>
                
                <div className="flex-1">
                  <span className={cn(
                    "text-[0.95rem] font-bold tracking-tight transition-colors duration-300",
                    activeIndex === idx ? "text-[#002D72]" : "text-slate-500 group-hover:text-slate-800"
                  )}>
                    {item.label}
                  </span>
                </div>

                <div className={cn(
                  "opacity-0 group-hover:opacity-100 transition-all duration-300",
                  activeIndex === idx && "opacity-100"
                )}>
                  <ArrowRight size={16} className={activeIndex === idx ? "text-blue-600" : "text-slate-400"} />
                </div>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="relative min-h-[450px] rounded-[2rem] bg-white border border-white p-8 md:p-12 overflow-hidden flex flex-col justify-center shadow-xl">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/20 to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={WHY_ITEMS[activeIndex].id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="space-y-8">
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-block px-3 py-1 rounded-full bg-blue-600/5 border border-blue-600/10"
                    >
                      <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-blue-600">
                        Outcome Focus
                      </span>
                    </motion.div>
                    
                    <h3 className="text-3xl md:text-[2.5rem] font-bold text-[#002D72] tracking-tight">
                      {WHY_ITEMS[activeIndex].title}
                    </h3>
                  </div>

                  <div className="grid gap-4">
                    {WHY_ITEMS[activeIndex].bullets.map((bullet, idx) => (
                      <motion.div
                        key={bullet}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="group/item flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/20">
                          <Zap size={14} className="fill-current" />
                        </div>
                        <p className="text-lg md:text-xl font-medium text-slate-700 leading-snug tracking-tight">
                          {bullet}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link 
                      href="/platform"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#002D72] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg"
                    >
                      Explore Platform <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
