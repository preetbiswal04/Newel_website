"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIETY_ITEMS, WORKPLACE_ITEMS } from "@/data/aboutData";

export default function SocietyWorkplace() {
  const [mode, setMode] = useState<"society" | "workplace">("society");
  const items = mode === "society" ? SOCIETY_ITEMS : WORKPLACE_ITEMS;

  return (
    <section id="about-society" className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="h-[100px] w-full" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-4">
            Beyond Business
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-10">
            We Actively Seek Opportunities to{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Better Our World
            </span>
          </h2>

          {/* Toggle witch */}
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 gap-1">
            {(["society", "workplace"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setMode(tab)}
                className={`relative px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${mode === tab ? "text-white" : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {mode === tab && (
                  <motion.div
                    layoutId="society-tab"
                    className="absolute inset-0 bg-gray-900 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "society" ? "Society (CSR)" : "Workplace (Events)"}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
        <div className="h-[100px] w-full" />

        {/* Photo Mosaic Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group relative rounded-2xl overflow-hidden ${i === 0 ? "sm:col-span-2 sm:row-span-2 min-h-[300px]" : "min-h-[200px]"
                  }`}
              >
                {/* Gradient background (photo placeholder) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
                />

                {/* Content overlay */}
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                  <div className="bg-black/20 backdrop-blur-md rounded-xl p-4 group-hover:bg-black/30 transition-colors">
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="h-[100px] w-full" />
        </AnimatePresence>
      </div>
    </section>
  );
}
