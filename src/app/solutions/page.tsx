"use client";

import React from "react";
import { motion } from "framer-motion";
import { SOLUTIONS_DATA } from "@/data/solutionsData";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

export default function SolutionsPage() {
  const solutions = SOLUTIONS_DATA[0].items;

  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-20">
      <div className="container-page mx-auto">
        <div className="max-w-3xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">Enterprise Ready</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Scalable, secure, and purpose-built platforms designed to transform complex operational and compliance workflows for modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="group relative p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] group-hover:text-blue-500/10 transition-colors uppercase">
                 {item.title.split(' ')[1] || item.title}
               </div>
               
               <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-all duration-500">
                    <Sparkles size={32} />
                  </div>
                  <h2 className="text-4xl font-black">{item.title}</h2>
                  <p className="text-white/50 text-lg leading-relaxed max-w-sm">
                    {item.tagline}
                  </p>
                  <Link 
                    href={`/solutions/${item.slug}`}
                    className="inline-flex items-center gap-3 text-blue-400 font-bold hover:gap-5 transition-all"
                  >
                    Explore Solution <ChevronRight size={20} />
                  </Link>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
