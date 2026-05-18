"use client";

import React from "react";
import { User, ShieldCheck, Cpu, Users } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CardProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  align?: "left" | "right";
  className?: string;
};

const Card = ({ title, desc, icon, color, href, align = "left", className = "" }: CardProps) => (
  <Link href={href} className="block w-full max-w-[290px] lg:max-w-[320px]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        "relative flex min-h-[240px] w-full flex-col lg:min-h-[220px]",
        "rounded-[24px] border border-slate-200 bg-white p-5 pt-12 md:p-6 md:pt-14",
        "shadow-[0_20px_50px_rgba(51,76,149,0.08)] transition-all duration-700",
        "hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(51,76,149,0.15)] group cursor-pointer",
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
      <div className="flex h-full flex-col gap-4 text-left">
        <h3 className="text-lg md:text-xl font-bold leading-tight text-[#002D72] group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-[13px] md:text-[14px] leading-relaxed text-slate-500 font-medium">
          {desc}
        </p>

        <div className="mt-auto pt-4">
          <div className="inline-flex items-center gap-1 text-sm font-bold tracking-wider text-blue-600 group-hover:text-blue-800 transition-colors">
            LEARN MORE →
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

export const OnePlatform = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container-page">
        <div className="mb-12 px-4 text-center sm:px-6 md:mb-16">
          <h2 className="text-[2.5rem] md:text-[3.1rem] lg:text-[4.5rem] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950">
            <span className="text-blue-500">One platform</span> across teams
          </h2>
        </div>

        <div className="mt-0 px-4 sm:px-6 lg:px-0">
          {/* Mobile/Tablet */}
          <div className="grid w-full grid-cols-1 gap-8 lg:hidden">
            <div className="flex w-full justify-center">
              <Card
                title="CXOs & Business Leaders"
                desc="Newel gives you AI-driven visibility and automation to make faster decisions, stay compliant, and scale operations — without adding headcount."
                icon={<User size={28} />}
                color="#3b82f6"
                href="/case-studies/qrc-classification-ai"
              />
            </div>

            <div className="pointer-events-none relative mx-auto flex h-[280px] w-[280px] items-center justify-center md:h-[400px] md:w-[400px]">
              <div className="absolute inset-0 rounded-full border border-blue-300/55" />
              <div className="absolute inset-[16%] rounded-full border border-blue-300/50" />
              <div className="absolute inset-[32%] rounded-full border border-blue-300/45" />
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/10 bg-white/5 shadow-lg backdrop-blur-lg">
                <Cpu size={32} className="text-blue-400" />
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-6">
              <Card
                title="Compliance & Risk Teams"
                desc="Automate your PIT compliance, QRC classification, and audit workflows — so your team manages exceptions, not processes."
                icon={<Users size={28} />}
                color="#a855f7"
                href="/case-studies/qrc-classification-ai"
              />
              <Card
                title="IT & Infrastructure Leaders"
                desc="One partner for your full stack — Cloud, Database, OS, Middleware, and Applications — with SLA-backed managed services and zero finger-pointing."
                icon={<ShieldCheck size={28} />}
                color="#8b5cf6"
                href="/case-studies/aws-cloud"
              />
            </div>
          </div>

          {/* Desktop - cards around center ring */}
          <div className="relative mx-auto hidden h-[680px] w-full max-w-[1100px] lg:block">
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-blue-400/45" />
              <div className="absolute inset-[16%] rounded-full border border-blue-400/42" />
              <div className="absolute inset-[32%] rounded-full border border-blue-400/38" />

              <div className="absolute left-[-108px] top-1/2 h-px w-[108px] -translate-y-1/2 bg-blue-400/40" />
              <div className="absolute right-[-108px] top-[34%] h-px w-[108px] bg-blue-400/40" />
              <div className="absolute right-[-108px] top-[66%] h-px w-[108px] bg-blue-400/40" />
              <div className="absolute left-[2%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#3b82f6]" />
              <div className="absolute right-[18%] top-[34%] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#a855f7]" />
              <div className="absolute right-[15%] top-[66%] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#8b5cf6]" />

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/10 bg-white/5 shadow-lg backdrop-blur-lg">
                <Cpu size={32} className="text-blue-400" />
              </div>
            </div>

            <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
              <Card
                title="CXOs & Business Leaders"
                desc="Newel gives you AI-driven visibility and automation to make faster decisions, stay compliant, and scale operations — without adding headcount."
                icon={<User size={28} />}
                color="#3b82f6"
                href="/case-studies/qrc-classification-ai"
              />
            </div>

            <div className="absolute right-0 top-[4%] z-10">
              <Card
                title="Compliance & Risk Teams"
                desc="Automate your PIT compliance, QRC classification, and audit workflows — so your team manages exceptions, not processes."
                icon={<Users size={28} />}
                color="#a855f7"
                href="/case-studies/qrc-classification-ai"
              />
            </div>

            <div className="absolute right-0 bottom-[4%] z-10">
              <Card
                title="IT & Infrastructure Leaders"
                desc="One partner for your full stack — Cloud, Database, OS, Middleware, and Applications — with SLA-backed managed services and zero finger-pointing."
                icon={<ShieldCheck size={28} />}
                color="#8b5cf6"
                href="/case-studies/aws-cloud"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
