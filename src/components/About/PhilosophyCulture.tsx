"use client";

import React from "react";
import { motion } from "framer-motion";
import { CULTURE_VALUES } from "@/data/aboutData";
import { Target, BarChart3, Zap, CheckCircle2 } from "lucide-react";

export default function PhilosophyCulture() {
  return (
    <section id="about-philosophy" className="w-full py-24 md:py-32 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* ── Block 1: Eye on ROI ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-10 md:p-16"
        >
          {/* Noise */}
          <div className="h-[100px] w-full" />
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
          />

          <div className="relative flex flex-col md:flex-row items-start gap-8">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
              <Target size={32} className="text-cyan-300" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Eye on ROI
              </h3>
              <div className="h-[50px] w-full" />
              <p className="text-lg text-white/70 leading-relaxed max-w-3xl">
                Every solution we build begins with a solid business case. We connect each feature to its ROI, set measurable performance targets, and track them from day one. By refining user journeys, streamlining workflows, and tuning infrastructure, we cut waste and lift conversions. The results show up in real numbers on your balance sheet, not just in a report.
              </p>
              <div className="h-[10px] w-full" />
            </div>
          </div>
        </motion.div>

        {/* ── Block 2: Capability Stat ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
        >

          {/* Big number */}
          <div className="text-center md:text-left flex-shrink-0">
            <div className="flex items-end gap-2">
              <div className="h-[100px] w-full" />
              <span className="text-7xl md:text-9xl font-black bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-none">
                35+
              </span>
              <div className="h-[100px] w-full" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mt-3">
              Industries Served
            </p>
            <div className="h-[100px] w-full" />
          </div>

          {/* Supporting text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 size={24} className="text-blue-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Battle-Tested Across Verticals
              </h3>
              <div className="h-[100px] w-full" />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We employ the latest infrastructure, tech stacks, management processes, and security measures gained from a diverse collective portfolio of seasoned strategists, designers, and developers across 35+ prominent industries. This helps us fulfil any client demand without compromising output quality, quicker than industry-best delivery timelines.
            </p>
          </div>
        </motion.div>

        {/* ── Block 3: Work Culture ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-gray-100 p-10 md:p-14"
        >
          <div className="h-[70px] w-full" />
          <div className="flex items-center gap-3 mb-8">
            <Zap size={24} className="text-amber-500" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              We Work Tirelessly
            </h3>
          </div>
          <p className="text-base text-gray-500 mb-8 max-w-2xl">
            In an inclusive, progressive, and symbiotic environment that won us the &ldquo;Best Place To Work&rdquo; award.
          </p>
          <div className="h-[70px] w-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CULTURE_VALUES.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 leading-relaxed">
                  {val}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="h-[100px] w-full" />
      </div>
    </section>
  );
}
