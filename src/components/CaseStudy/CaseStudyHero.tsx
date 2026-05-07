"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/caseStudies";

export const CaseStudyHero = () => {
  const featured = CASE_STUDIES[0];

  return (
    <section className="w-full bg-black text-white">

      {/* ─────────────────────────────────────────────────────
          PART 1: Big Headline Header
      ───────────────────────────────────────────────────── */}
      <div className="container-page pt-40 md:pt-48 pb-16 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-white leading-[1.1] tracking-[-0.01em] max-w-[680px]"
          style={{ fontWeight: 400, fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)" }}
        >
          Explore How Our Clients Are Thriving in the New Era of AI
        </motion.h1>
      </div>

      {/* ─────────────────────────────────────────────────────
          PART 2: Featured Case Study – Image Left, Content Right
      ───────────────────────────────────────────────────── */}
      <div className="container-page pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href={`/case-studies/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#111]">
              {featured.industry && (
                <span className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full">
                  {featured.industry}
                </span>
              )}
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5">
              {featured.client && (
                <p className="text-white/40 text-[13px] font-medium tracking-wide">
                  {featured.client}
                </p>
              )}

              <h2 className="font-poppins font-bold text-white text-2xl md:text-3xl lg:text-[2rem] leading-snug group-hover:text-white/75 transition-colors duration-300">
                {featured.innerTitle || featured.title}
              </h2>

              <p className="text-white/50 text-[15px] leading-relaxed">
                {featured.teaser}
              </p>

              <div className="flex items-center gap-2 text-white/50 text-[14px] font-medium group-hover:text-white transition-colors duration-300">
                <span className="text-white/30 group-hover:text-white transition-colors">↳</span>
                <span>Read more</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

    </section>
  );
};
