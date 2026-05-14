"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PhoneCall, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Briefcase, 
  Sparkles,
  Shield,
  Activity,
  Users
} from "lucide-react";
import Link from "next/link";

export default function ContractStaffingPage() {
  const offerings = [
    {
      title: "Rapid Sourcing",
      description: "Quickly identify and source top-tier technical talent through our extensive network and proprietary database — reducing time-to-fill for critical project roles.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Technical Vetting",
      description: "Every candidate undergoes a rigorous technical assessment by our domain experts — ensuring they possess the specific skills and experience your project demands.",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: "Payroll & Compliance Management",
      description: "We handle the entire administrative overhead — including payroll processing, statutory compliance, benefits management, and contract administration.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Global Talent Pool",
      description: "Access a diverse pool of specialized IT professionals across various geographies — enabling you to build distributed teams with specialized niche skills.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Scale on Demand",
      description: "Flexibly scale your technical workforce up or down based on project requirements, budget cycles, or seasonal demand — without the burden of permanent hiring.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Project-Based Staffing",
      description: "Hire specialized experts for specific project durations or deliverables — ensuring you have the right skills for every phase of the development lifecycle.",
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const tags = [
    "Contract Staffing", "Third Party Hiring", "Talent Acquisition", "IT Recruitment", "Staff Augmentation", "Payroll Management"
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* ── Section 1: Full-page Hero ── */}
      <section
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/AI- img.jpg')",
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
              <Briefcase size={16} className="animate-pulse" />
              Agile Talent Acquisition
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Contract Staffing
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                & Third-Party Hiring
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Access top-tier technical talent on demand. Flexible and scalable staffing solutions tailored to your project needs.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-end gap-10 pt-4"
            >
              {[
                { value: "48hr", label: "Response Time" },
                { value: "95%", label: "Retention" },
                { value: "500+", label: "Verified Experts" },
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
                Find Your Talent
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Overview ── */}
      <section className="bg-black py-24 relative overflow-hidden border-t border-white/5">
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
                    Beyond Simple Placement
                  </h2>
                </div>
                <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
                  <p>
                    We manage the entire talent lifecycle for your contract needs. From rapid sourcing and rigorous vetting to third-party payroll management — ensuring you have the right experts at the right time.
                  </p>
                  <p>
                    Our approach reduces the long-term overhead and administrative complexity of hiring, allowing your internal teams to focus on core business objectives while we handle the workforce logistics.
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
                    src="/home-img-7.jpg" 
                    alt="Contract Staffing Visual" 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                       <Users className="w-10 h-10 text-cyan-400" />
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: WHAT WE OFFER ── */}
      <section className="bg-zinc-950 py-32 relative overflow-hidden">
        <div className="container-page mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em]">Talent Excellence</span>
            <h2 className="text-4xl md:text-6xl font-black text-white">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: WHY NEWEL ── */}
      <section className="bg-black py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="container-page mx-auto relative z-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/[0.05] to-transparent p-12 md:p-20 rounded-[40px] border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="md:w-1/3">
                  <div className="space-y-4">
                    <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em]">Verified Experts</span>
                    <h2 className="text-4xl font-black text-white leading-tight">Why Newel</h2>
                  </div>
               </div>
               <div className="md:w-2/3 space-y-8">
                  <p className="text-2xl font-medium text-white/90 leading-snug">
                    Newel has a verified pool of 500+ technical experts across cloud, database, middleware, and application development.
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                       <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-lg text-white/60 italic leading-relaxed">
                      "We understand the technical depth required for enterprise roles. Our experts are ready to deploy into your environment within 48-72 hours."
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/40 font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
