"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "About Us",
    paragraphs: [
      "Newel Technologies – Information Technology Company provides turnkey solution with LED or LCD Digital Bill boards, Standees, Video walls in DOOH to Media houses.",
      "Based on branding requirements and locations, Newel offers Electronic Media solutions of LED –LCD displays with varieties of sizes, high brightness, high definition, and rich colors. LED matrix displays are offered with different pitches."
    ]
  },
  {
    title: "Display Solution considers",
    paragraphs: [],
    specs: [
      { label: "Pitch–", value: "minimum P1.5 mm till P25 mm based on Minimum viewing range." },
      { label: "Display Size–", value: "targets of intelligibility are designed based on maximum viewing distance." },
      { label: "Brightness–", value: "b3 to b6+ or 400 to 10000 NITs depending on ambient light variation." },
      { label: "Contrast–", value: "Levels L1 to L4 based on color resolutions." },
      { label: "Quality of Electronic circuits–", value: "Receiving Cards, Sending card and Controller Cards are designed to utilize full capacity of dynamic performance of Matrix cards, with high refresh rate." }
    ]
  }
];

export default function DoohPage() {
  const [current, setCurrent] = useState(0);

  const goTo = (dir: number) => {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <main className="min-h-screen pt-24 pb-20 overflow-hidden">
      <section className="container-page mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 relative z-10">
            {/* Slide indicator dot */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    i === current
                      ? "border-slate-800 bg-slate-800"
                      : "border-slate-300 bg-transparent hover:border-slate-500"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-8">
                  {slide.title}
                </h1>

                <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed max-w-lg font-medium">
                  {slide.paragraphs?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  {slide.specs?.map((spec, i) => (
                    <p key={i}>
                      <span className="font-bold text-slate-900">{spec.label}</span>{" "}
                      {spec.value}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={() => goTo(-1)}
                className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 hover:border-slate-800 hover:text-slate-800 transition-all duration-300 active:scale-90"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => goTo(1)}
                className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 hover:border-slate-800 hover:text-slate-800 transition-all duration-300 active:scale-90"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative w-full max-w-xl group"
            >
              <div className="absolute -inset-10 bg-blue-400/10 blur-[100px] rounded-full group-hover:bg-blue-400/20 transition-colors duration-700" />
              <img
                src="/dooh-hero.png"
                alt="DOOH LED Display"
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:drop-shadow-[0_30px_60px_rgba(37,99,235,0.15)] transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 -right-20 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 -left-20 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
    </main>
  );
}
