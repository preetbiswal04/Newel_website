"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Years in Financial Services",
    bgColor: "bg-[#E9D5FF]", // Light Purple
    textColor: "text-[#581C87]",
  },
  {
    number: "20+",
    label: "Active Clients",
    bgColor: "bg-[#ECFCCB]", // Light Lime/Green
    textColor: "text-[#365314]",
  },
  {
    number: "40+",
    label: "Custom Solutions Delivered",
    bgColor: "bg-[#CFFAFE]", // Light Cyan/Blue
    textColor: "text-[#164E63]",
  },
  {
    number: "25+",
    label: "Automation Projects Deployed in Production",
    bgColor: "bg-[#FEF9C3]", // Light Yellow
    textColor: "text-[#713F12]",
  },
];

export const AboutStats = () => {
  return (
    <section className="bg-black text-white py-12 md:py-20 overflow-hidden">
      <div className="container-page">
        {/* Intro Text Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-2xl lg:text-[28px] font-medium leading-[1.4] tracking-tight text-white/90"
          >
            We are an <span className="text-white">AI-first technology company</span> trusted by India's leading <span className="text-white">NBFCs, broking firms, and financial institutions</span> to transform how they operate, comply, and compete. Armed with production-grade AI, intelligent automation, and deep financial services expertise. With over a decade of experience—we don't just modernise businesses, we make them <span className="text-white/40">smarter, faster, and future-ready.</span>
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${stat.bgColor} p-7 rounded-[24px] h-[180px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1`}
            >
              <h3 className={`text-4xl md:text-5xl font-bold tracking-tighter ${stat.textColor}`}>
                {stat.number}
              </h3>
              <p className={`text-[13px] md:text-[14px] font-bold leading-tight max-w-[140px] uppercase tracking-wider ${stat.textColor} opacity-80`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
