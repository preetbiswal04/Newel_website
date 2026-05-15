"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatItemProps) => (
  <div className="flex flex-col gap-2">
    <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-600">
      {value}
    </span>
    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
      {label}
    </span>
  </div>
);

export const PowerBlock = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-[#E5E7EB]">
      
      {/* Main Container Card */}
      <div className="max-w-[1300px] mx-auto overflow-hidden rounded-[32px] md:rounded-[48px] bg-white border border-slate-200 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 p-8 md:p-16 lg:p-20">
          
          {/* Left Column: Context */}
          <div className="flex-1 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-blue-500" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
                  CORE CAPABILITIES
                </span>
              </div>
              
              <h2 className="text-[2.5rem] md:text-[3.1rem] lg:text-[3.8rem] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950">
                The AI-First Technology Partner for{" "}
                <span className="text-blue-500">Financial Services.</span>
              </h2>

              <p className="mt-6 text-slate-600 text-[0.98rem] leading-8 md:text-[1.02rem] max-w-xl">
                From intelligent automation and compliance AI to full-stack managed services — we help NBFCs, broking firms, and financial institutions operate faster, smarter, and audit-ready.
              </p>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="w-full lg:w-auto shrink-0 relative">
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 lg:gap-x-20 lg:gap-y-16 p-8 md:p-12 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <StatCard value="20%+" label="CLOUD COST SAVINGS" />
              <StatCard value="75%" label="REDUCTION IN MANUAL EFFORT" />
              <StatCard value="100+" label="PROFESSIONALS" />
              <StatCard value="25+" label="AUTOMATION PROJECTS DELIVERED" />
            </div>

            {/* Subtle Glow Background */}
            <div className="absolute -inset-10 bg-blue-100/30 blur-[100px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};