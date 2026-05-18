"use client";

import React from "react";
import { Layers, ShieldCheck, Cpu, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Utils/Button";

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
    className="group flex flex-col gap-5 p-6 rounded-[20px] bg-white border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 cursor-pointer hover:bg-white hover:border-blue-400 hover:shadow-[0_40px_80px_rgba(51,76,149,0.12)]"
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
      className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-sm"
    >
      {icon}
    </motion.div>

    {/* TEXT */}
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-bold text-[#002D72] tracking-tight group-hover:text-blue-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-600 text-[0.85rem] font-medium leading-relaxed">
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
    <div className="flex flex-col gap-6">
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
        <Button variant="primary" size="md" href="/services">
          Explore the platform
        </Button>
      </div>
    </div>
  );
};