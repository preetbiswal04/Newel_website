"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SERVICES } from "@/data/servicesData";

const EASE: Easing = "easeOut";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-[#06060A] min-h-screen text-white">

      {/* ── Navbar spacer (same as case-studies) ──────────── */}
      <div className="h-[150px] w-full" />

      {/* ═══════════════════════════════════════════════════════
          HERO / HEADING SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-page relative text-center">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="flex items-center justify-center gap-2 text-sm text-white/35 mb-6"
          >
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight size={13} className="text-white/20" />
            <span className="text-white/60">Services</span>
          </motion.nav>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-5"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: EASE }}
            className="text-white/45 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From staffing and cloud to RPA and DOOH — Newel Technologies delivers
            end-to-end technology and talent services that power your digital transformation.
          </motion.p>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
            className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-8 rounded-full"
          />
        </div>
      </section>

      {/* ── Spacer (same as case-studies) ─────────────────── */}
      <div className="h-[150px] w-full" />

      {/* ═══════════════════════════════════════════════════════
          SERVICES CARD GRID (matches CaseStudyGrid layout)
      ═══════════════════════════════════════════════════════ */}
      <div className="container-page">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.slug} variants={itemVariants}>
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <div
                  className={[
                    "relative flex flex-col h-full",
                    "rounded-2xl border border-white/[0.08] bg-white/[0.025]",
                    "p-8 overflow-hidden",
                    "transition-all duration-500",
                    "group-hover:-translate-y-2",
                    "group-hover:border-blue-500/35 group-hover:bg-white/[0.05]",
                    "group-hover:shadow-[0_12px_48px_rgba(59,130,246,0.12)]",
                  ].join(" ")}
                >
                  {/* Top accent line (slides in on hover) */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />

                  {/* Glow overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                  {/* Icon */}
                  <div className="relative z-10 text-4xl mb-6">{service.icon}</div>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="relative z-10 text-sm text-white/40 leading-relaxed flex-grow">
                    {service.tagline}
                  </p>

                  {/* Read More */}
                  <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-semibold text-blue-400/80 group-hover:text-blue-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Spacer ───────────────────────────────────────── */}
      <div className="h-[150px] w-full" />

      {/* ═══════════════════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════════════════ */}
      <div className="container-page pb-48">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          className="relative rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/20 px-8 py-16 md:py-20 text-center overflow-hidden"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/12 via-transparent to-transparent pointer-events-none" />

          <h2 className="relative text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Ready to Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Started?
            </span>
          </h2>
          <p className="relative text-white/45 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Talk to our experts and discover how Newel Technologies can accelerate
            your business goals with the right service mix.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_36px_rgba(59,130,246,0.4)] text-sm"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
      <div className="h-[100px] w-full" />

    </main>
  );
}
