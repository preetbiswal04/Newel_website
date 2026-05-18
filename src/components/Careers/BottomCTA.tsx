"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const BottomCTA = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[40px] p-12 md:p-20 text-center flex flex-col items-center justify-center min-h-[400px]"
          style={{
            background: "linear-gradient(135deg, #4338ca 0%, #312e81 50%, #1e1b4b 100%)",
          }}
        >
          {/* Top-right decorative glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)" }}
          />
          {/* Bottom-left decorative glow */}
          <div
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-8">
              Build the future of AI with us.
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Don't see a role that fits? We're always looking for exceptional talent to help us redefine enterprise intelligence.
            </p>

            <Link href="/contact" className="inline-block group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white text-[#312e81] px-10 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
              >
                Get in touch
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
