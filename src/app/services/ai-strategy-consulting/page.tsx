"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PhoneCall, 
  Compass, 
  Target, 
  Search, 
  Map, 
  Scale, 
  Database, 
  Users, 
  ShieldCheck, 
  CheckCircle2,
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function AIStrategyPage() {
  const offerings = [
    {
      title: "AI Readiness Assessment",
      description: "We evaluate your data maturity, infrastructure, talent, and business processes to give you an honest picture of where you stand and what it takes to move forward.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Use Case Identification & Prioritisation",
      description: "We work with your business and technology teams to identify high-impact AI opportunities — ranked by feasibility, ROI, and strategic fit — so you invest where it matters most.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "AI Roadmap Development",
      description: "A phased, time-bound roadmap covering quick wins, foundational capability builds, and long-term transformation milestones — tied directly to business outcomes.",
      icon: <Map className="w-6 h-6" />,
    },
    {
      title: "Governance & Ethics Framework",
      description: "We help you define AI policies, model governance standards, explainability requirements, and responsible AI principles — critical for regulated industries like banking and financial services.",
      icon: <Scale className="w-6 h-6" />,
    },
    {
      title: "Technology & Vendor Selection",
      description: "Unbiased guidance on the right AI platforms, tools, and cloud services for your use case — whether that's open-source, cloud-native, or hybrid.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "AI Centre of Excellence (CoE) Design",
      description: "We help organisations set up internal AI capabilities — team structures, processes, tooling, and operating models — to ensure AI scales beyond the first project.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#E5E7EB] selection:bg-blue-500/30 selection:text-blue-900">
      {/* ── Section 1: Full-page Hero ── */}
      <section
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/Ai-Strategy-ANd-Consulting.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

        {/* Animated glow accents */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 container-page mx-auto py-32 flex w-full justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 w-full max-w-[720px] text-right flex flex-col items-end"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-bold tracking-wider uppercase"
            >
              <Compass size={16} className="animate-pulse" />
              Strategic Roadmap for the AI Landscape
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              AI Strategy &
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Consulting
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Turn AI ambition into a clear, executable roadmap — aligned to your business, your data, and your risk appetite.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-end gap-10 pt-4"
            >
              {[
                { value: "40%", label: "Increase in ROI" },
                { value: "6mo", label: "Faster TTM" },
                { value: "100%", label: "Business Alignment" },
              ].map((stat) => (
                <div key={stat.label} className="text-right">
                  <p className="text-3xl md:text-4xl font-black text-white tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] text-cyan-400 font-black uppercase tracking-widest mt-1 opacity-80">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-2xl shadow-black/30 hover:shadow-cyan-400/20 active:scale-95"
              >
                <PhoneCall size={22} className="group-hover:rotate-12 transition-transform" />
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Overview (ONLY BLACK SECTION) ── */}
      <section className="bg-black py-24 relative overflow-hidden border-t border-white/5 text-white">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
        
        <div className="container-page mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 space-y-8"
             >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-cyan-400" />
                    <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em]">Overview</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                    Bridging the Gap from Curiosity to Action
                  </h2>
                </div>
                <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
                  <p>
                    Most organisations know they need AI. Few know where to start, what to prioritise, or how to govern it responsibly. 
                    Newel's AI Strategy & Consulting practice bridges that gap — helping financial services firms, NBFCs, and enterprises move from curiosity to confident, measurable action.
                  </p>
                  <p>
                    We don't push AI for AI's sake. We help you figure out where AI creates real business value, what's feasible with your existing data and infrastructure, and how to adopt it in a way that's governed, compliant, and built to scale.
                  </p>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="lg:w-1/2 relative"
             >
                <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent z-10" />
                  <img 
                    src="/Ai-Strategy-ANd-Consulting.png" 
                    alt="AI Strategy" 
                    className="w-full h-full object-cover grayscale brightness-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                       <Cpu className="w-10 h-10 text-cyan-400" />
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: WHAT WE OFFER (LIGHT GREY) ── */}
      <section className="bg-[#E5E7EB] py-32 relative overflow-hidden border-t border-slate-200">
        <div className="container-page mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-white shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/5 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: WHY NEWEL (LIGHT GREY) ── */}
      <section className="bg-[#E5E7EB] py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="container-page mx-auto relative z-10">
          <div className="max-w-5xl mx-auto bg-white p-12 md:p-20 rounded-[40px] border border-slate-200 shadow-xl shadow-blue-900/5">
            <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="md:w-1/3">
                  <div className="space-y-4">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">The Newel Edge</span>
                    <h2 className="text-4xl font-black text-slate-950 leading-tight">Why Newel</h2>
                  </div>
               </div>
               <div className="md:w-2/3 space-y-8">
                  <p className="text-2xl font-medium text-slate-800 leading-snug">
                    Newel has delivered AI solutions across lending, compliance, risk, and operations for financial institutions. 
                    We bring practitioner experience — not just advisory slides.
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-600/5 flex items-center justify-center">
                       <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-lg text-slate-500 italic leading-relaxed">
                      "Our strategy engagements are grounded in what we've built, deployed, and seen work in production."
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
