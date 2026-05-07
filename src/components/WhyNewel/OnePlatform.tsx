"use client";

import React from "react";
import { User, ShieldCheck, ArrowRight, Cpu, Laptop, Users } from "lucide-react";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  align?: "left" | "right";
  className?: string;
};

const Card = ({ title, desc, icon, color, align = "left", className = "" }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className={`relative flex h-[315px] w-full max-w-[320px] flex-col lg:h-[255px] lg:max-w-[360px]
    rounded-[28px] border border-blue-900/10 bg-white/80 
    px-7 pt-12 pb-6 
    shadow-[0_14px_34px_rgba(51,76,149,0.10)] backdrop-blur-md 
    transition-all hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(51,76,149,0.16)] ${className}`}
  >
    {/* ICON */}


    <div
      className="absolute -top-8 left-10 flex h-14 w-14 items-center justify-center 
      rounded-full text-white shadow-[0_12px_24px_rgba(15,23,42,0.18)]"
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>


    {/* Card content */}
    <div className="flex h-full flex-col gap-5 text-left">
      <h3 className="text-xl sm:text-2xl font-semibold leading-tight text-blue-800">
        {title}
      </h3>

      <p className="text-sm sm:text-base leading-relaxed text-slate-600">
        {desc}
      </p>

      <button className="mt-auto flex items-center gap-2 pt-2 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-blue-500/80 hover:text-blue-700">
        <span>Learn more</span>
        <ArrowRight size={14} style={{ color }} />
      </button>
    </div>
  </motion.div>
);

export const OnePlatform = () => {
  return (
    <section 
      className="w-full overflow-hidden border-t border-blue-600/10 pt-2 pb-2 md:pt-4 md:pb-4 bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: "url('/home-page-section2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-page">
        <div className="mb-8 px-4 text-center sm:px-6 md:mb-10 lg:px-0">
          <h2 className="text-4xl font-bold tracking-tight text-blue-800 md:text-5xl">
            One platform across teams
          </h2>
        </div>

        <div className="mt-0 px-4 sm:px-6 lg:px-0">
          {/* Mobile/Tablet */}
          <div className="grid w-full grid-cols-1 gap-8 lg:hidden">
            <div className="flex w-full justify-center">
              <Card
                title="Data scientists"
                desc="Newel gives you the flexibility and freedom to support what you do best - solve problems without technical hurdles."
                icon={
                  <span className="relative block h-7 w-7">
                    <User
                      size={20}
                      strokeWidth={2.2}
                      className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2"
                    />
                    <Laptop
                      size={12}
                      strokeWidth={2.2}
                      className="absolute bottom-0 right-0"
                    />
                  </span>
                }
                color="#ff6b47"
              />
            </div>

            <div className="pointer-events-none relative mx-auto flex h-[280px] w-[280px] items-center justify-center md:h-[400px] md:w-[400px]">
              <div className="absolute inset-0 rounded-full border border-blue-300/55" />
              <div className="absolute inset-[16%] rounded-full border border-blue-300/50" />
              <div className="absolute inset-[32%] rounded-full border border-blue-300/45" />
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-600/20 bg-white/60 shadow-lg backdrop-blur-lg">
                <Cpu size={32} className="text-blue-600" />
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-6">
              <Card
                title="Data science leaders"
                desc="Scale how you manage teams and projects, improve collaboration, and accelerate project delivery."
                icon={<Users size={28} />}
                color="#c0a8e6"
              />
              <Card
                title="IT leaders"
                desc="A single platform that delivers self-service access to tools and infrastructure that are secure and compliant."
                icon={<ShieldCheck size={28} />}
                color="#9cb7eb"
              />
            </div>
          </div>

          {/* Desktop - cards around center ring */}
          <div className="relative mx-auto hidden h-[620px] w-full max-w-[1200px] lg:block">
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-blue-400/45" />
              <div className="absolute inset-[16%] rounded-full border border-blue-400/42" />
              <div className="absolute inset-[32%] rounded-full border border-blue-400/38" />

              <div className="absolute left-[-108px] top-1/2 h-px w-[108px] -translate-y-1/2 bg-blue-400/40" />
              <div className="absolute right-[-108px] top-[34%] h-px w-[108px] bg-blue-400/40" />
              <div className="absolute right-[-108px] top-[66%] h-px w-[108px] bg-blue-400/40" />
              <div className="absolute left-[2%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#ff6b47]" />
              <div className="absolute right-[18%] top-[34%] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#c0a8e6]" />
              <div className="absolute right-[15%] top-[66%] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#9cb7eb]" />

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-600/20 bg-white/70 shadow-lg backdrop-blur-lg">
                <Cpu size={32} className="text-blue-600" />
              </div>
            </div>

            <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
              <Card
                title="Data scientists"
                desc="Newel gives you the flexibility and freedom to support what you do best - solve problems without technical hurdles."
                icon={
                  <span className="relative block h-7 w-7">
                    <User
                      size={20}
                      strokeWidth={2.2}
                      className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2"
                    />
                    <Laptop
                      size={12}
                      strokeWidth={2.2}
                      className="absolute bottom-0 right-0"
                    />
                  </span>
                }
                color="#ff6b47"
              />
            </div>

            <div className="absolute right-0 top-[42px] z-10">
              <Card
                title="Data science leaders"
                desc="Scale how you manage teams and projects, improve collaboration, and accelerate project delivery."
                icon={<Users size={28} />}
                color="#c0a8e6"
              />
            </div>

            <div className="absolute right-0 bottom-[42px] z-10">
              <Card
                title="IT leaders"
                desc="A single platform that delivers self-service access to tools and infrastructure that are secure and compliant."
                icon={<ShieldCheck size={28} />}
                color="#9cb7eb"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

