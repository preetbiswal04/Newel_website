"use client";

import React from "react";
import { Layers, ShieldCheck, Cpu, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PillarProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Pillar = ({ icon, title, description, index }: PillarProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="group flex flex-col gap-5 p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-lg border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 cursor-pointer"
  >
    {/* ICON */}
    <motion.div
      variants={{
        hover: {
          y: [0, -8, 0],
        },
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-sm"
    >
      {icon}
    </motion.div>

    {/* TEXT */}
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  </motion.div>
);

export const ServicePillars = () => {
  const PILLARS = [
    {
      icon: <Layers size={22} />,
      title: "Open & Flexible",
      description:
        "Integrate with your favorite tools and libraries across the entire AI ecosystem.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Governed & Secure",
      description:
        "Enterprise-grade security and full reproducibility for all your AI projects.",
    },
    {
      icon: <Cpu size={22} />,
      title: "Scalable Infra",
      description:
        "Provision compute instantly across on-prem, hybrid, or multi-cloud environments.",
    },
    {
      icon: <Users size={22} />,
      title: "Collaborative",
      description:
        "Seamlessly share assets, knowledge, and models across global teams.",
    },
  ];

  return (
    <div className="flex flex-col gap-20">
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {PILLARS.map((pillar, idx) => (
          <Pillar
            key={pillar.title}
            index={idx}
            icon={pillar.icon}
            title={pillar.title}
            description={pillar.description}
          />
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center">
        <motion.button
          whileHover={{ x: 5 }}
          className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-4 font-bold rounded-sm transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/20"
        >
          Explore the platform
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </motion.button>
      </div>
    </div>
  );
};