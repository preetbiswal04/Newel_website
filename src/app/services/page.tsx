"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SERVICES_DATA 
} from "@/data/servicesData";
import { SOLUTIONS_DATA } from "@/data/solutionsData";
import { 
  Cloud, 
  Shield, 
  Network, 
  Layers, 
  Zap, 
  Database, 
  Cpu, 
  Activity, 
  Briefcase,
  Search,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Check
} from "lucide-react";
import Link from "next/link";

const ICON_MAP: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={32} />,
  Shield: <Shield size={32} />,
  Network: <Network size={32} />,
  Layers: <Layers size={32} />,
  Zap: <Zap size={32} />,
  Database: <Database size={32} />,
  Cpu: <Cpu size={32} />,
  Activity: <Activity size={32} />,
  Briefcase: <Briefcase size={32} />,
  Search: <Search size={32} />,
  CheckCircle: <CheckCircle size={32} />,
  Sparkles: <Sparkles size={32} />,
};

export default function AllServicesPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F6] overflow-hidden">
      {/* ── Hero Section (Light Grey) ── */}
      <section className="pt-48 pb-32 bg-[#F3F4F6] text-slate-900 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="container-page mx-auto relative z-10">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
            >
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Our Expertise</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-none"
            >
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-2xl font-medium"
            >
              Comprehensive technology solutions designed to power your digital transformation journey with precision and scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Services Categories ── */}
      {SERVICES_DATA.filter(category => category.id !== "ai-data-solutions").map((category, catIdx) => {
        const isWhiteSection = catIdx % 2 === 0;
        return (
          <section key={category.id} className={`py-16 ${isWhiteSection ? "bg-white text-black" : "bg-[#0c0c1d] text-white"}`}>
            <div className="container-page mx-auto">
              <div className="flex items-center gap-6 mb-16">
                <h2 className={`text-2xl font-black uppercase tracking-[0.3em] whitespace-nowrap ${isWhiteSection ? "text-slate-900" : "text-white"}`}>
                  {category.name}
                </h2>
                <div className={`h-px flex-1 ${isWhiteSection ? "bg-slate-200" : "bg-white/10"}`} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, idx) => (
                  <ServiceCard key={service.id} item={service} type="services" index={idx} isDark={!isWhiteSection} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="py-40 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="container-page mx-auto relative z-10 space-y-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Ready to <span className="text-blue-500">Transform?</span>
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            Let's discuss how our specialized services can accelerate your business objectives.
          </p>
          <div className="pt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-white text-black font-black text-xl hover:bg-blue-500 hover:text-white transition-all shadow-2xl shadow-white/5"
            >
              Get in Touch <ChevronRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ item, type, index, isDark }: { item: any; type: string; index: number, isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link
        href={`/${type}/${item.slug}`}
        className={`block h-full p-6 rounded-[20px] border transition-all duration-500 hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm ${
          isDark 
            ? "bg-white/[0.03] border-white/5 hover:bg-white/[0.07] hover:border-blue-500/30" 
            : "bg-slate-50 border-slate-200 hover:bg-white hover:shadow-2xl hover:shadow-black/5 hover:border-blue-600/30"
        }`}
      >
        <div className={`absolute top-8 right-8 p-3 rounded-full transition-all duration-500 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 ${
          isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-600/10 text-blue-600"
        }`}>
          <ArrowUpRight size={18} />
        </div>

        <div className="flex flex-col h-full gap-4 relative z-10">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg ${
            isDark 
              ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white shadow-blue-500/10" 
              : "bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white shadow-blue-600/10"
          }`}>
            {ICON_MAP[item.icon] ? React.cloneElement(ICON_MAP[item.icon] as React.ReactElement, { size: 20 }) : <Layers size={20} />}
          </div>
          
          <div className="space-y-4">
            <h3 className={`text-base font-bold transition-colors ${
              isDark ? "text-white group-hover:text-blue-400" : "text-slate-900 group-hover:text-blue-600"
            }`}>
              {item.title}
            </h3>
            
            {/* Tagline */}
            <p className={`leading-relaxed font-medium text-sm ${
              isDark ? "text-white/75" : "text-slate-500"
            }`}>
              {item.tagline}
            </p>

            {/* Sub Items (Matching SS) */}
            {item.subItems && item.subItems.length > 0 && (
              <ul className="mt-6 space-y-3">
                {item.subItems.map((sub: any, i: number) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={14} className={isDark ? "text-blue-400" : "text-blue-600"} />
                    <span className={`text-sm font-semibold tracking-tight ${isDark ? "text-white/70" : "text-slate-700"}`}>
                      {sub.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className={`mt-auto pt-4 flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}>
            Learn More
            <ChevronRight size={18} />
          </div>
        </div>
        
        {/* Subtle background glow on hover (only for dark mode) */}
        {isDark && (
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-600/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        )}
      </Link>
    </motion.div>
  );
}
