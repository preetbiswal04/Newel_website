"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/aboutData";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<"client" | "employee">("client");
  const filtered = TESTIMONIALS.filter((t) => t.type === activeTab);

  return (
    <section id="about-testimonials" className="w-full py-24 md:py-32 bg-white">
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
            Voices That Matter
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-10">
            Here Are a Few{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Thoughts Shared
            </span>
            <div className="h-[50px] w-full" />
          </h2>

          {/* Tab toggle */}
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 gap-1">
            {(["client", "employee"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${activeTab === tab
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="testimonial-tab"
                    className="absolute inset-0 bg-gray-900 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "client" ? "Client Stories" : "Employee Stories"}
                </span>
              </button>
            ))}
          </div>
          <div className="h-[100px] w-full" />
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                {/* Quote icon */}
                <Quote size={24} className="text-blue-200 mb-4" />

                {/* Quote text */}
                <p className="text-base text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-white">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">
                      {testimonial.role} · {testimonial.company}
                    </p>
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
