"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const BeyondWorkSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-black overflow-hidden select-none">
      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-8"
        >

          <div className="flex flex-col w-full gap-4 md:gap-6">
            <h2 className="text-[18vw] md:text-[22vw] font-black text-white leading-[0.85] tracking-[-0.05em] uppercase">
              BEYOND
            </h2>
            <h2 className="text-[18vw] md:text-[22vw] font-black text-white leading-[0.85] tracking-[-0.05em] uppercase">
              WORK
            </h2>
          </div>

          <div className="max-w-2xl mt-8">
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-12">
              At Newel, innovation isn't just about code—it's about the people who write it. 
              Discover our culture of passion, creativity, and global impact.
            </p>

            <Link 
              href="/beyond-work"
              className="group inline-flex items-center gap-4 text-white font-bold text-lg hover:text-blue-500 transition-colors"
            >
              Experience Our Story
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative large text in background */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-[0.03]">
        <h3 className="text-[30vw] font-black text-white leading-none uppercase select-none">
          CULTURE
        </h3>
      </div>
    </section>
  );
};
