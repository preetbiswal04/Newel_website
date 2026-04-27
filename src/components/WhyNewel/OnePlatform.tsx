"use client";

import React from "react";
import { User, ShieldCheck, ArrowRight, Cpu, Laptop, Users } from "lucide-react";
import { motion } from "framer-motion";

const Card = ({ title, desc, icon, color, align = "left" }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="bg-white/40 backdrop-blur-md border border-blue-600/10 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow w-full max-w-[360px]"
  >
    <div 
      className="w-14 h-14 rounded-full flex items-center justify-center text-white mb-6"
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>
    <h3 className="text-xl font-bold text-blue-800 mb-4">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed mb-8">
      {desc}
    </p>
    <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-blue-600/60 hover:text-blue-700 transition-colors">
      <span>Learn more</span>
      <ArrowRight size={14} style={{ color }} />
    </button>
  </motion.div>
);

export const OnePlatform = () => {
  return (
    <section className="w-full py-24 md:py-40 border-t border-blue-600/10 overflow-hidden">
      <div className="container-page">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 tracking-tight">
            One platform across teams
          </h2>
        </div>

        {/* Responsive Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0 min-h-[600px]">
          
          {/* Left Side: Data Scientists */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start z-10">
            <Card
              title="Data scientists"
              desc="Newel gives you the flexibility and freedom to support what you do best — solve problems without technical hurdles."
              icon={
                <div className="relative">
                  <User size={24} />
                  <Laptop size={12} className="absolute -bottom-1 -right-1" />
                </div>
              }
              color="#ff6b47"
              align="left"
            />
          </div>

          {/* Center Side: Connection Diagram */}
          <div className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            {/* Concentric Circles */}
            <div className="absolute inset-0 rounded-full border border-gray-100 animate-[pulse_4s_infinite]" />
            <div className="absolute inset-[15%] rounded-full border border-gray-100" />
            <div className="absolute inset-[30%] rounded-full border border-gray-200" />
            
            {/* Center Hub */}
            <div className="relative z-10 w-20 h-20 bg-white/60 backdrop-blur-lg rounded-full border-2 border-blue-600/20 flex items-center justify-center shadow-lg">
              <Cpu size={32} className="text-blue-600" />
            </div>

            {/* Connecting Lines (Desktop only) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 500 500">
              {/* Left connection */}
              <line x1="0" y1="250" x2="210" y2="250" stroke="#ff6b47" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
              <circle cx="10" cy="250" r="4" fill="#ff6b47" />

              {/* Top Right connection */}
              <line x1="290" y1="200" x2="450" y2="100" stroke="#c0a8e6" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
              <circle cx="490" cy="100" r="4" fill="#c0a8e6" />

              {/* Bottom Right connection */}
              <line x1="290" y1="300" x2="450" y2="400" stroke="#9cb7eb" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
              <circle cx="490" cy="400" r="4" fill="#9cb7eb" />
            </svg>
          </div>

          {/* Right Side: Leaders */}
          <div className="lg:w-1/3 flex flex-col gap-12 items-center lg:items-end z-10">
            <Card
              title="Data science leaders"
              desc="Scale how you manage teams and projects, improve collaboration, and accelerate project delivery."
              icon={<Users size={28} />}
              color="#c0a8e6"
              align="right"
            />
            <Card
              title="IT leaders"
              desc="A single platform that delivers self-service access to tools and infrastructure that are secure and compliant."
              icon={<ShieldCheck size={28} />}
              color="#9cb7eb"
              align="right"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
