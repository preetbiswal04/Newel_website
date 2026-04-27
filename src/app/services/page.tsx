"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  Cloud, 
  Shield, 
  Network, 
  Layers, 
  Zap, 
  Database, 
  Cpu, 
  Activity, 
  Briefcase 
} from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA, ServiceCategory, SubService } from "@/data/servicesData";

const iconMap: any = {
  Cloud,
  Shield,
  Network,
  Layers,
  Zap,
  Database,
  Cpu,
  Activity,
  Briefcase
};

export default function ServicesPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(SERVICES_DATA[0].id);

  const activeCategory = SERVICES_DATA.find(cat => cat.id === activeCategoryId) || SERVICES_DATA[0];

  return (
    <main className="bg-[#0B0F19] min-h-screen text-white">
      {/* Spacer for potential fixed header */}
      <div className="h-32 md:h-48" />

      {/* Hero Section */}
      <section className="px-8 md:px-16 lg:px-24 mb-24">
        <div className="max-w-[1440px] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white/90"
          >
            Our Offerings
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-20 bg-blue-600 mt-6"
          />
        </div>
      </section>

      {/* Main Split-Screen Interface */}
      <section className="px-8 md:px-16 lg:px-24 pb-32">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row min-h-[600px]">
          
          {/* Left Rail - Category Navigation */}
          <aside className="md:w-[22%] border-r border-white/10">
            <div className="flex md:flex-col overflow-x-auto no-scrollbar md:overflow-visible h-full">
              {SERVICES_DATA.map((category) => (
                <button
                  key={category.id}
                  onMouseEnter={() => setActiveCategoryId(category.id)}
                  className={`flex items-center gap-4 px-6 py-6 text-left transition-all duration-300 group relative ${
                    activeCategoryId === category.id 
                      ? "text-white" 
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {/* Background Highlight */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${activeCategoryId === category.id ? "bg-white/[0.05] opacity-100" : "opacity-0 group-hover:bg-white/[0.02] group-hover:opacity-100"}`} />
                  
                  {/* Chevron Icon */}
                  <ChevronRight size={16} className={`relative z-10 transition-all duration-300 ${activeCategoryId === category.id ? "text-white translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-40 group-hover:translate-x-0"}`} />
                  
                  {/* Text */}
                  <span className="relative z-10 font-medium tracking-wide text-[14px]">{category.name}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Right Area - Sub-Offering Grid */}
          <div className="md:w-[78%] md:pl-20 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategoryId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20"
              >
                {activeCategory.services.map((service) => {
                  const Icon = iconMap[service.icon] || Briefcase;
                  return (
                    <Link 
                      key={service.id} 
                      href={`/services/${service.slug}`}
                      className="group block"
                    >
                      <div className="mb-8 group-hover:translate-y-[-4px] transition-transform duration-500">
                        <Icon className="text-white w-10 h-10 stroke-[1.2]" />
                      </div>
                      <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-white mb-4 group-hover:text-blue-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[13px] text-white/40 leading-relaxed font-light">
                        {service.tagline}
                      </p>
                    </Link>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
