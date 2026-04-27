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
    className="flex flex-col gap-5 p-2"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
      {icon}
    </div>
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-bold text-blue-700 tracking-tight">{title}</h3>
      <p className="text-blue-900/60 text-sm leading-relaxed max-w-[260px]">
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
      description: "Integrate with your favorite tools and libraries across the entire AI ecosystem."
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Governed & Secure",
      description: "Enterprise-grade security and full reproducibility for all your AI projects."
    },
    {
      icon: <Cpu size={22} />,
      title: "Scalable Infra",
      description: "Provision compute instantly across on-prem, hybrid, or multi-cloud environments."
    },
    {
      icon: <Users size={22} />,
      title: "Collaborative",
      description: "Seamlessly share assets, knowledge, and models across global teams."
    }
  ];

  return (
    <div className="flex flex-col gap-20">
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

      <div className="flex justify-center">
        <motion.button
          whileHover={{ x: 5 }}
          className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-4 font-bold rounded-sm transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/20"
        >
          Explore the platform
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </div>
  );
};
