"use client";

import React from "react";
import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/data/aboutData";

export default function ClientLogos() {
  // Double the logos array for seamless infinite scroll
  const row1 = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  const row2 = [...CLIENT_LOGOS.slice().reverse(), ...CLIENT_LOGOS.slice().reverse()];

  return (
    <section id="about-clients" className="w-full py-24 md:py-32 bg-[#f9fafb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="h-[55px] w-full" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-4">
            Trusted Worldwide
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Transforming{" "}
            <div className="h-[75px] w-full" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Global Leaders
              <div className="h-[50px] w-full" />
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row 1 — scroll left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f9fafb] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f9fafb] to-transparent z-10" />
        <div className="flex animate-marquee-left gap-6">
          {row1.map((name, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 px-8 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center min-w-[180px]"
            >
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — scroll right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f9fafb] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f9fafb] to-transparent z-10" />
        <div className="flex animate-marquee-right gap-6">
          {row2.map((name, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 px-8 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center min-w-[180px]"
            >
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[100px] w-full" />
    </section>
  );
}
