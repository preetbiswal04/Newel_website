"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { SERVICES } from "@/data/servicesData";

/* ─── animation helpers ────────────────────────────────────────────────── */
const EASE: Easing = "easeOut";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.65, delay, ease: EASE },
});

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="bg-white min-h-screen text-[#002D72]">

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION — Redesigned to match neweltechnologies.com
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F4FF] to-white border-b border-blue-100">
        {/* Subtle mesh background detail */}
        <div className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#002D72 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />

        {/* Navbar spacer */}
        <div className="h-[120px] w-full" />

        <div className="container-page relative py-16 md:py-24">
          <div className="max-w-5xl">
            {/* Breadcrumb */}
            <motion.nav
              {...fadeUp(0)}
              className="flex items-center gap-2 text-sm text-blue-600/60 mb-8 font-medium"
            >
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight size={13} className="text-blue-200" />
              <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
              <ChevronRight size={13} className="text-blue-200" />
              <span className="text-blue-900 font-semibold">{service.title}</span>
            </motion.nav>

            {/* Title */}
            <motion.h1
              {...fadeUp(0.05)}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-[#002D72] mb-8"
            >
              {service.title}
              <div className="h-[75px] w-full" />
            </motion.h1>

            {/* Combined Tagline + Hero Description for "same content" exact match */}
            <motion.div {...fadeUp(0.12)} className="space-y-6">
              <p className="text-blue-900/80 text-lg md:text-xl leading-relaxed max-w-4xl font-medium">
                {service.tagline}
              </p>
              <p className="text-blue-900/60 text-lg leading-relaxed max-w-4xl">
                {service.heroDescription}
              </p>
              <div className="h-[70px] w-full" />
            </motion.div>

            {/* Button */}
            <motion.div {...fadeUp(0.2)} className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#002D72] hover:bg-blue-800 text-white font-bold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/20"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="h-[100px] w-full" />

      {/* ══════════════════════════════════════════════════════════
          WHAT WE OFFER / SUPPORT SERVICES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-50">
        <div className="container-page">
          <div className="max-w-5xl">

            <motion.div {...fadeUp()} className="mb-16">
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
                What we offer
              </h4>
              <div className="h-[15px] w-full" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#002D72] tracking-tight">
                Support Services
              </h2>
              <div className="h-[75px] w-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {service.whatWeOffer.map((item, idx) => (
                <motion.div
                  key={item}
                  {...fadeUp(0.05 * idx)}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group border border-transparent hover:border-blue-100"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-[#002D72] shrink-0 group-hover:bg-[#002D72] group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-blue-900/70 text-[16px] leading-relaxed font-medium group-hover:text-[#002D72] transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="h-[100px] w-full" />

      {/* ══════════════════════════════════════════════════════════
          METHODOLOGY (6-STEP FLOW)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#002D72] text-white overflow-hidden">
        <div className="container-page">
          <div className="h-[75px] w-full" />
          <motion.div {...fadeUp()} className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Our Methodology
            </h2>
            <div className="h-[100px] w-full" />
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[2px] bg-white/10 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {service.processSteps.map((step, idx) => (
                <motion.div
                  key={step.label}
                  {...fadeUp(idx * 0.1)}
                  className="group text-center"
                >
                  {/* Step bubble */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white text-[#002D72] flex items-center justify-center font-black text-xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {step.label.slice(0, 1)}
                  </div>

                  <h4 className="text-white font-black uppercase tracking-widest text-sm mb-3">
                    {step.label}
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {step.description}
                  </p>
                  <div className="h-[100px] w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="h-[100px] w-full" />

      {/* ══════════════════════════════════════════════════════════
          TECHNOLOGY STACK
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container-page">
          <motion.div {...fadeUp()} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#002D72] tracking-tight">
              Technologies
            </h2>
            <div className="h-[75px] w-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.techStack.map((group, idx) => (
              <motion.div
                key={group.category}
                {...fadeUp(idx * 0.1)}
                className="p-8 rounded-2xl bg-[#F8FAFF] border border-blue-50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1"
              >
                <h5 className="text-[#002D72] font-black text-sm uppercase tracking-wider mb-6 border-b border-blue-100 pb-4">
                  {group.category}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-white border border-blue-100 rounded-lg text-blue-900/70 text-sm font-semibold shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-[100px] w-full" />

      {/* ══════════════════════════════════════════════════════════
          FOOTER CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#002D72]">
        <div className="container-page text-center">
          <div className="h-[70px] w-full" />
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Get Started
            </h2>
            <div className="h-[50px] w-full" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-[#002D72] font-bold px-12 py-5 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
      <div className="h-[100px] w-full" />

    </main>
  );
}
