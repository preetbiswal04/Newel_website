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
    <section 
      className="w-full py-14 md:py-16 bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: "url('/home-page-section2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-page relative z-10">
        {/* Section Label */}
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.4em] text-blue-600 opacity-60">
          WHY NEWEL
        </p>

        {/* Heading */}
        <h2 className="mb-8 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#002D72] md:mb-10 md:text-5xl lg:text-6xl">
          Freedom for data scientists, <br className="hidden md:block" /> control for IT
        </h2>

        {/* Two-Column: Tabs (left narrow) + Content (right wide) */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-start lg:gap-8">

          {/* LEFT: Vertical Tab Buttons */}
          <div className="w-full lg:w-[38%] lg:max-w-[430px] lg:shrink-0">
            <div className="flex flex-col gap-3.5 rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm p-4 shadow-lg shadow-blue-600/5">
              {WHY_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "group flex min-h-[104px] w-full items-center gap-5 rounded-2xl border px-7 py-5 text-left transition-all duration-500",
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
                  <span className="text-[1.02rem] font-bold tracking-tight">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Content Panel */}
          <div className="relative flex w-full flex-col justify-start overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-6 shadow-2xl shadow-blue-600/10 md:p-8 lg:min-h-[460px] lg:max-w-[860px] lg:p-9">
            {/* Background Decorative Blur */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-100/50 blur-[100px] rounded-full pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={WHY_ITEMS[activeIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex w-full max-w-3xl flex-col items-start"
              >
                {/* Title with Icon */}
                <div className="mb-10 flex w-full items-center justify-start gap-4">
                  <div className="w-10 h-[1px] bg-blue-600/30" />
                  <h3 className="text-left text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                    {WHY_ITEMS[activeIndex].title}
                  </h3>
                  <div className="w-10 h-[1px] bg-blue-600/30" />
                </div>

                {/* Bullet Points */}
                <ul className="flex w-full flex-col gap-8">
                  {WHY_ITEMS[activeIndex].bullets.map((bullet, idx) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="group/item flex items-start gap-5"
                    >
                      <div className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-blue-600/20 transition-colors group-hover/item:border-blue-600">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                      <span className="text-xl font-medium leading-relaxed tracking-tight text-blue-900/80 md:text-[1.85rem]">
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
