"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatItemProps) => (
  <div className="flex flex-col gap-1.5">
    <span className="text-3xl md:text-4xl font-bold tracking-tight text-blue-600">
      {value}
    </span>
    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500 max-w-[140px] leading-snug">
      {label}
    </span>
  </div>
);

export const PowerBlock = () => {
  return (
    <section className="w-full px-4 md:px-8">
      
      {/* Main Container Card */}
      <div className="max-w-[950px] mx-auto overflow-hidden rounded-[24px] md:rounded-[32px] bg-white border border-slate-200 shadow-xl">
        <div className="flex flex-col p-6 md:p-8 lg:p-10 gap-6 lg:gap-8">
          
          {/* Header Section (Full Width to keep it inline) */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-500">
                CORE CAPABILITIES
              </span>
            </div>
            
            <h2 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] font-semibold leading-[1.2] tracking-tight text-slate-950">
              The AI-First Technology Partner for <span className="text-blue-500 whitespace-nowrap">Financial Services.</span>
            </h2>
          </div>

          {/* Bottom Section: Text & Grid */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Column: Context */}
            <div className="flex-1 text-left">
              <p className="text-slate-600 text-[0.95rem] leading-7 md:text-[1rem] md:leading-8 max-w-lg">
                From intelligent automation and compliance AI to full-stack managed services — we help NBFCs, broking firms, and financial institutions operate faster, smarter, and audit-ready.
              </p>
            </div>

            {/* Right Column: Stats Grid (Smaller) */}
            <div className="w-full md:w-auto shrink-0 relative">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 lg:gap-x-10 lg:gap-y-8 p-5 md:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <StatCard value="20%+" label="CLOUD COST SAVINGS" />
                <StatCard value="75%" label="REDUCTION IN MANUAL EFFORT" />
                <StatCard value="100+" label="PROFESSIONALS" />
                <StatCard value="25+" label="AUTOMATION PROJECTS" />
              </div>

              {/* Subtle Glow Background */}
              <div className="absolute -inset-10 bg-blue-100/30 blur-[80px] rounded-full -z-10" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};