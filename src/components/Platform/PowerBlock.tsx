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
    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-500/70">
      {label}
    </span>
  </div>
);

export const PowerBlock = () => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Context */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 md:gap-8">
            
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-600 opacity-70">
              CORE CAPABILITIES
            </span>

            <h2 className="text-5xl md:text-6xl lg:text-[52px] font-bold text-[#002D72] leading-[1.05] tracking-tight">
              The Unified AI <br className="hidden md:block" /> Platform for{" "}
              <span className="text-blue-600">Enterprise.</span>
            </h2>

            <p className="text-blue-900/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Empower your data scientists and engineers with an integrated
              environment that accelerates the entire AI lifecycle—from data
              preparation to production-grade deployment.
            </p>

          </div>
        </div>

        {/* Right Column: Stats Grid */}
        <div className="relative flex justify-center lg:justify-end">
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 lg:gap-x-16 lg:gap-y-16 w-full max-w-md">
            <StatCard value="50%" label="Faster Deployment" />
            <StatCard value="6x" label="ROI Increase" />
            <StatCard value="200+" label="Global Clusters" />
            <StatCard value="99.9%" label="Uptime SLA" />
          </div>

          {/* Subtle Glow Background */}
          <div className="absolute -inset-10 bg-blue-500/5 blur-[100px] rounded-full -z-10" />
        
        </div>

      </div>
    </section>
  );
};