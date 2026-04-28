"use client";

import React from "react";
import { motion } from "framer-motion";
import { FLAGSHIP_PRODUCTS } from "@/data/aboutData";
import { ArrowRight } from "lucide-react";

export default function FlagshipSpotlights() {
  return (
    <section id="about-flagships" className="w-full py-24 md:py-32 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="h-[100px] w-full" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Our Flagship Products
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Products That{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Redefine Enterprise
              <div className="h-[70px] w-full" />
            </span>
          </h2>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FLAGSHIP_PRODUCTS.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-500"
            >
              <div className="h-[50px] w-full" />
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

              <div className="relative p-8 md:p-10">
                {/* Icon + Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/50 font-medium">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="h-[50px] w-full" />
                <p className="text-base text-white/60 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="h-[40px] w-full" />

                {/* How it works */}
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
                    How It Works
                  </p>
                  <div className="h-[50px] w-full" />
                  <p className="text-sm text-white/50 leading-relaxed font-mono">
                    {product.howItWorks}
                  </p>
                  <div className="h-[40px] w-full" />
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/cta"
                >
                  Learn more
                  <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-[100px] w-full" />
    </section>
  );
}
