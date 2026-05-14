"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/data/caseStudies";
import Link from "next/link";

export const CaseStudyGrid = () => {
  // Skip the first (featured) case study since it's shown in the hero
  const remaining = CASE_STUDIES.slice(1);

  return (
    <div className="w-full bg-black pt-12 pb-24">
      <div className="container-page">
        {/* ── Cards Grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {remaining.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GridCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Grid Card ─────────────────────────────────────────────────────── */
const GridCard = ({ item }: { item: any }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Link
      href={`/case-studies/${item.slug}`}
      className="group block overflow-hidden rounded-2xl bg-[#111] relative"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Industry Pill */}
        {item.industry && (
          <span className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full">
            {item.industry}
          </span>
        )}

        {!imgFailed ? (
          <img
            src={item.image}
            alt={item.title}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900" />
        )}

        {/* Hover overlay with content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content that slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-white/50 text-[11px] font-medium mb-1">{item.client}</p>
          <h3 className="font-poppins font-semibold text-white text-[15px] leading-snug">
            {item.innerTitle || item.title}
          </h3>
          <div className="flex items-center gap-1.5 mt-3 text-white/70 text-[12px] font-medium">
            <span>↳</span>
            <span>Read more</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
