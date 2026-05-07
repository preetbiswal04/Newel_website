"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function OutsystemsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="container-page mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
                Out<span className="text-blue-600">Systems</span>
              </h1>
              
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-lg font-medium">
                <p>
                  OutSystems is a powerful, feature-packed low-code development 
                  platform for large enterprises or developers looking to publish 
                  straight to consumer app stores. Platform for the development of 
                  mobile and web enterprise applications, which run in the cloud, on-premises 
                  or in hybrid environments.
                </p>
                <p>
                  This is a mature, well-designed tool that builds good-looking apps 
                  and handles the entire software development lifecycle. It also saves 
                  organization employee quality time in critical work compared to 
                  hiring, compliance etc.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 active:scale-95"
              >
                <PhoneCall size={20} className="group-hover:rotate-12 transition-transform" />
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Illustration */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative w-full max-w-xl group"
            >
              <div className="absolute -inset-10 bg-blue-400/10 blur-[100px] rounded-full group-hover:bg-blue-400/20 transition-colors duration-700" />
              <img 
                src="/outsystems-hero.png" 
                alt="OutSystems Low-Code Development Platform" 
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:drop-shadow-[0_30px_60px_rgba(37,99,235,0.15)] transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="container-page mx-auto mt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-slate-900">What We Offer</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "High-quality web/mobile apps development with the OutSystems Platform.",
              "Outsystem consultant on demand."
            ].map((offer, index) => (
              <motion.div
                key={offer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white/60 backdrop-blur-md px-5 py-4 rounded-xl border border-white/50 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-blue-600/10 flex items-center justify-center rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-sm font-bold text-slate-800 leading-tight">{offer}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed top-1/4 -right-20 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 -left-20 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
    </main>
  );
}
