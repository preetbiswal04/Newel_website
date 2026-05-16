"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Zap, Sparkles, Heart } from "lucide-react";

const VALUES = [
  {
    icon: <Users className="w-6 h-6 text-indigo-500/80" />,
    title: "Make it customer-driven",
    description:
      "Our customers are our partners. We solve real pain points. Our aim is to wow our customers and help our admins, end users, and their company succeed.",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-500/80" />,
    title: "Make it happen",
    description:
      "We are dependable, gritty, and bias toward action, focusing on delivering high-quality, impactful work today without losing sight of our long term goals.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-500/80" />,
    title: "Make it better",
    description:
      "We continually make our product, company, and ourselves better. We are owners who constructively question the status quo and normalize giving and receiving feedback.",
  },
  {
    icon: <Heart className="w-6 h-6 text-pink-500/80" />,
    title: "Make it together",
    description:
      "We are one team. We work with integrity, transparency, trust, and respect. We celebrate diversity of thought and opinion. We help each other through ups and downs.",
  },
];

export const ValueCards = () => {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-start justify-center min-h-[380px] h-full transition-all duration-300 group"
              style={{
                background: "linear-gradient(135deg, #ffffff, #f3e8ff, #f5efe6)",
                borderRadius: "24px",
                padding: "32px",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="mb-6 p-3 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-all duration-300">
                {React.cloneElement(value.icon as React.ReactElement, { className: "w-6 h-6 text-purple-600" } as any)}
              </div>
              <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-4 leading-tight tracking-tight group-hover:text-purple-700 transition-colors">
                {value.title}
              </h3>
              <p className="text-[#4b5563] leading-[1.6] text-[15px] font-medium opacity-90">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
