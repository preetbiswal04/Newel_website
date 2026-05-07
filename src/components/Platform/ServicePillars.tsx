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
    whileHover={{ y: -8, scale: 1.02 }}
    className="group flex flex-col gap-6 p-8 rounded-[24px] bg-white/[0.07] backdrop-blur-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-pointer hover:bg-white/[0.12] hover:border-white/30"
  >
    {/* ICON */}
    <motion.div
      variants={{
        hover: {
          rotate: [0, -10, 10, 0],
          scale: 1.1,
        },
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-500/20 border border-blue-400/30 text-blue-300 shadow-lg shadow-blue-500/20"
    >
      {icon}
    </motion.div>

    {/* TEXT */}
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-white/80 text-[0.95rem] font-medium leading-relaxed">
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
    <div className="flex flex-col gap-10">
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
      <div className="flex justify-center pb-8">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-12 py-5 font-bold rounded-full transition-all hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] shadow-xl"
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