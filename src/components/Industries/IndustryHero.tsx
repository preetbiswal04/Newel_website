"use client";

import React from "react";
import { motion } from "framer-motion";

interface IndustryHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

export const IndustryHero = ({ title, subtitle, description, image }: IndustryHeroProps) => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="container-page relative z-10 px-6 md:px-12">
        <div className="max-w-3xl">
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block"
            >
              {subtitle}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};
