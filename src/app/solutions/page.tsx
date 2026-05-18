"use client";

import React from "react";
import { motion } from "framer-motion";
import { SOLUTIONS_DATA } from "@/data/solutionsData";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";

export default function SolutionsPage() {
  const solutions = SOLUTIONS_DATA[0].items;

  return (
    <main className="relative min-h-screen text-white pt-40 pb-20 flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/solutions-home-page (2).jpg"
          alt="Solutions Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
      </div>

      <div className="container-page mx-auto relative z-10">
        <div className="max-w-4xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Enterprise Ready</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight drop-shadow-xl text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl font-light drop-shadow-md">
            Scalable, secure, and purpose-built platforms designed to transform complex operational and compliance workflows for modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="group relative p-10 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl"
            >
               <div className="absolute top-0 right-0 p-8 text-7xl font-black text-white/5 group-hover:text-blue-400/10 transition-colors uppercase select-none">
                 {item.title.split(' ')[1] || item.title}
               </div>
               
               <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-300 group-hover:bg-blue-500 group-hover:text-white shadow-inner transition-all duration-500">
                    <Sparkles size={28} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-sm">{item.title}</h2>
                  <p className="text-white/70 text-lg leading-relaxed max-w-sm font-light">
                    {item.tagline}
                  </p>
                  <Link 
                    href={`/solutions/${item.slug}`}
                    className="inline-flex items-center gap-3 text-blue-300 font-semibold hover:text-blue-200 hover:gap-5 transition-all duration-300"
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
