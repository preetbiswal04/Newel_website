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
    <section className="w-full py-20 md:py-32 bg-[#E5E7EB]">
      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-500" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
              WHY NEWEL
            </p>
          </div>
          <h2 className="max-w-4xl text-[2.5rem] md:text-[3.1rem] lg:text-[4.5rem] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950">
            <span className="text-blue-500">Freedom</span> for data scientists, <br className="hidden md:block" /> <span className="text-blue-500">control</span> for IT
          </h2>
        </div>

        {/* Tabbed Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Tabs Navigation */}
          <div className="flex flex-col gap-3">
            {WHY_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "group relative flex items-center gap-6 p-6 rounded-2xl text-left transition-all duration-500 overflow-hidden",
                  activeIndex === idx
                    ? "bg-white border border-blue-100 shadow-[0_20px_40px_rgba(51,76,149,0.08)] scale-[1.02] z-10"
                    : "bg-transparent border border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-100"
                )}
              >
                {/* Active Indicator Bar */}
                {activeIndex === idx && (
                  <motion.div
                    layoutId="active-bar"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"
                  />
                )}
                
                <div className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500",
                  activeIndex === idx 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                    : "bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-blue-500 group-hover:shadow-sm"
                )}>
                  {item.icon}
                </div>
                
                <span className={cn(
                  "text-[1.05rem] font-bold tracking-tight leading-tight transition-colors duration-300",
                  activeIndex === idx ? "text-[#002D72]" : "text-slate-500 group-hover:text-slate-700"
                )}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="relative min-h-[540px] rounded-[32px] bg-white border border-slate-200 p-8 md:p-12 lg:p-16 overflow-hidden flex flex-col justify-center shadow-xl">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002D72 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={WHY_ITEMS[activeIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <div className="flex flex-col gap-10">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-600/10 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                      Outcome Focus
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#002D72] tracking-tight">
                      {WHY_ITEMS[activeIndex].title}
                    </h3>
                  </div>

                  <ul className="grid gap-8">
                    {WHY_ITEMS[activeIndex].bullets.map((bullet, idx) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group/item flex items-start gap-6"
                      >
                        <div className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/20">
                          <Zap size={12} fill="currentColor" />
                        </div>
                        <span className="text-lg md:text-xl font-medium text-slate-700 leading-snug tracking-tight">
                          {bullet}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
