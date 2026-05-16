"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "workplace", name: "Work Place" },
];

const IMAGES = {
  workplace: [
    "/1.jpeg",
    "/culture-2.jpeg",
    "/culture-3.jpeg",
    "/culture-4.jpeg",
    "/culture-5.jpeg",
    "/culture-6.jpeg",
  ],
};

export const AboutEnergy = () => {
  const [activeTab, setActiveTab] = useState("workplace");

  return (
    <section className="py-24 md:py-32 bg-white text-black overflow-hidden">
      <div className="container-page">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-12 leading-tight"
          >
            We, Newelites actively seek <br className="hidden md:block" /> 
            opportunities to better our
          </motion.h2>

          {/* Static Display for Work Place */}
          <div className="inline-flex p-1 bg-zinc-100 rounded-full mb-20 relative">
            <div className="px-8 md:px-16 py-3 md:py-4 rounded-full text-sm md:text-base font-bold bg-black text-white relative z-10">
              Work Place
            </div>
          </div>

          <div className="text-left max-w-5xl">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              The Energy That Drives Us
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-3xl"
            >
              Being named 'Best Place to Work' isn't an accident—it's the result of a deliberate focus on creating an environment where our team can excel. This is a glimpse into the collaborative spaces, candid moments, and vibrant culture that make Newel a place where top talent chooses to grow.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Auto-sliding Image Carousel */}
      <div className="mt-12 relative w-full overflow-hidden">
        {/* Side Fades for Premium Look */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee-infinite py-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3">
              {IMAGES.workplace.map((src, idx) => (
                <div 
                  key={idx} 
                  className="w-[300px] md:w-[450px] aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-100 flex-shrink-0 relative border border-zinc-200"
                >
                  <Image
                    src={src}
                    alt={`Culture ${idx}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle overlay for the Newel look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          animation: marquee-infinite 40s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
