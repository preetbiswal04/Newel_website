"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Network, Sparkles, Activity, Share2, Workflow, Globe, Search, Zap, Monitor } from "lucide-react";
import Link from "next/link";

export default function DOOHPage() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ fontFamily: 'RecklessNeue, sans-serif' }}>
      {/* ── Section 1: Full-page Hero ── */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/AI- img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

        {/* Animated glow accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 container-page mx-auto py-32 flex w-full justify-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 w-full max-w-[640px] text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-bold tracking-wider uppercase"
            >
              <Monitor size={16} className="animate-pulse" />
              Innovative Digital Out-of-Home Media Solutions
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              DOOH
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Media Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl">
              Captivate your audience in the real world. We provide innovative 
              DOOH media solutions that leverage data and creative technology 
              for modern brand engagement.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-start gap-8 pt-4"
            >
              {[
                { value: "1M+", label: "Monthly Reach" },
                { value: "Dynamic", label: "Content Delivery" },
                { value: "Real-time", label: "Analytics" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-2xl shadow-black/30 hover:shadow-cyan-400/20 active:scale-95"
              >
                <Monitor size={22} className="group-hover:rotate-12 transition-transform" />
                Launch Campaign
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade to black */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ── Section 2: DOOH Details ── */}
      <section className="bg-black py-24 relative">
        {/* Subtle glow accents */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="container-page mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left: Visual Content */}
              <div className="lg:w-1/2 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                 <img 
                   src="/home-img-7.jpg" 
                   alt="DOOH Media Visual" 
                   className="w-full h-full object-cover min-h-[400px] lg:min-h-[550px] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                 />
              </div>

              {/* Right: Content */}
              <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-widest">
                    <Activity size={18} />
                    Immersive Brand Engagement
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    Beyond Static: <br /> Programmatic Real-World Media
                  </h2>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                    We bridge the digital and physical worlds. Our DOOH practice 
                    utilizes programmatic ad serving and dynamic creative optimization 
                    to deliver highly relevant content across a massive network of 
                    premium digital displays.
                  </p>
                </div>

                {/* Capability list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Network size={20} />, text: "Programmatic Ad Serving" },
                    { icon: <Zap size={20} />, text: "Dynamic Optimization" },
                    { icon: <Workflow size={20} />, text: "Interactive Screen Exp" },
                    { icon: <Search size={20} />, text: "Audience Analytics" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="group flex items-center gap-3 bg-white/[0.06] backdrop-blur-md px-4 py-3.5 rounded-xl border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-9 h-9 bg-cyan-400/10 flex items-center justify-center rounded-lg text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300 shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Premium CTA */}
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-xl font-bold text-white overflow-hidden w-fit active:scale-95 transition-transform duration-200"
                >
                  {/* Gradient border effect */}
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 p-[1.5px]">
                    <span className="block w-full h-full rounded-[10px] bg-black group-hover:bg-transparent transition-colors duration-500" />
                  </span>
                  <PhoneCall size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:text-white transition-colors duration-500">Engage Audience</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
