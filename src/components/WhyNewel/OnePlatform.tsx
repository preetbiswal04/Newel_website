"use client";

import React from "react";
import { User, ShieldCheck, ArrowRight, Cpu, Laptop, Users } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Utils/Button";

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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className={cn(
      "relative flex h-[340px] w-full max-w-[320px] flex-col lg:h-[280px] lg:max-w-[380px]",
      "rounded-[32px] border border-slate-200 bg-white p-8 pt-16",
      "shadow-[0_20px_50px_rgba(51,76,149,0.08)] transition-all duration-700",
      "hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(51,76,149,0.15)] group",
      className
    )}
  >
    {/* ICON Container with premium gradient */}
    <div
      className="absolute -top-8 left-10 flex h-16 w-16 items-center justify-center 
      rounded-2xl text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl"
      style={{ 
        background: `linear-gradient(135deg, ${color}, ${color}dd)`,
        boxShadow: `0 12px 24px ${color}33`
      }}
    >
      {icon}
    </div>

    {/* Card Content */}
    <div className="flex h-full flex-col gap-5 text-left">
      <h3 className="text-2xl font-bold leading-tight text-[#002D72] group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      <p className="text-[15px] leading-relaxed text-slate-500 font-medium line-clamp-3">
        {desc}
      </p>

      <div className="mt-auto pt-4">
        <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent text-blue-600 group-hover:text-blue-800">
          Learn more
        </Button>
      </div>
    </div>
  </motion.div>
);

export const OnePlatform = () => {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container-page">
        <div className="mb-16 px-4 text-center sm:px-6 md:mb-20">
          <h2 className="text-[2.5rem] md:text-[3.1rem] lg:text-[4.5rem] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950">
            <span className="text-blue-500">One platform</span> across teams
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
          <div className="relative mx-auto hidden h-[750px] w-full max-w-[1300px] lg:block">
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
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

            <div className="absolute right-0 top-12 z-10">
              <Card
                title="Data science leaders"
                desc="Scale how you manage teams and projects, improve collaboration, and accelerate project delivery."
                icon={<Users size={28} />}
                color="#c0a8e6"
              />
            </div>

            <div className="absolute right-0 bottom-12 z-10">
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
