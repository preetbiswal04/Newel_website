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
    <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-400">
      {value}
    </span>
    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-100/60">
      {label}
    </span>
  </div>
);

export const PowerBlock = () => {
  return (
    <section className="w-full px-4 md:px-6 py-8 md:py-12">
      
      {/* Main Glass Card */}
      <div className="max-w-[1300px] mx-auto overflow-hidden rounded-[32px] md:rounded-[48px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 p-8 md:p-16 lg:p-20">
          
          {/* Left Column: Context */}
          <div className="flex-1 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-400">
                CORE CAPABILITIES
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
                The Unified AI <br className="hidden md:block" /> Platform for{" "}
                <span className="text-blue-400">Enterprise.</span>
              </h2>

              <p className="text-blue-100/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Empower your data scientists and engineers with an integrated
                environment that accelerates the entire AI lifecycle—from data
                preparation to production-grade deployment.
              </p>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="w-full lg:w-auto shrink-0 relative">
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 lg:gap-x-20 lg:gap-y-16 p-8 md:p-12 rounded-3xl bg-white/[0.05] border border-white/10">
              <StatCard value="50%" label="Faster Deployment" />
              <StatCard value="6x" label="ROI Increase" />
              <StatCard value="200+" label="Global Clusters" />
              <StatCard value="99.9%" label="Uptime SLA" />
            </div>

            {/* Subtle Glow Background */}
            <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};