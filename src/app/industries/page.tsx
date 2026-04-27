"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustriesSectionGrid } from "@/components/Industries/IndustriesSectionGrid";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="h-[100px] w-full" />

      {/* Hero Section for Industries Page */}
      <section className="pt-32 pb-20 bg-[#001540] text-white">
        <div className="container-page px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
              Industries
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed max-w-2xl">
              Driving innovation and digital transformation across diverse global sectors through state-of-the-art technology and strategic intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reusing the IndustriesSection which now has the card layout */}
      <IndustriesSectionGrid />
    </main>
  );
}
