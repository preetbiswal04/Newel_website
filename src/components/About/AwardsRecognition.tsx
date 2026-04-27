"use client";

import React from "react";
import { motion } from "framer-motion";
import { AWARDS_DATA } from "@/data/aboutData";
import { Award } from "lucide-react";

export default function AwardsRecognition() {
  return (
    <section id="about-awards" className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-4">
            Awards & Accolades
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Recognition That{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Speaks Volumes
            </span>
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {AWARDS_DATA.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 cursor-default"
            >
              {/* Year badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Award size={12} />
                {award.year}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors">
                {award.title}
              </h3>

              {/* Category */}
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {award.category}
              </span>

              {/* Decorative corner glow on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
