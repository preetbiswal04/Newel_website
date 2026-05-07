"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES } from "@/data/caseStudies";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const CaseStudyGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Skip the first (featured) case study since it's shown in the hero
  const remaining = CASE_STUDIES.slice(1);
  const totalPages = Math.ceil(remaining.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = remaining.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full bg-black pb-24">
      <div className="container-page">

        {/* ── Cards Grid ─────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <GridCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Pagination ──────────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-between items-center border-t border-white/10 pt-10">
            <span className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-mono">
              Page {currentPage} — {totalPages}
            </span>

            <div className="flex items-center gap-4">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 500, behavior: "smooth" });
                }}
                className={cn(
                  "flex items-center gap-3 px-7 py-3 border rounded-full text-white text-[11px] font-bold uppercase tracking-widest transition-all duration-300",
                  currentPage === 1
                    ? "opacity-20 cursor-not-allowed border-white/20"
                    : "border-white/20 hover:bg-white hover:text-black hover:border-white"
                )}
              >
                <ArrowRight size={14} className="rotate-180" />
                Previous
              </button>

              <button
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 500, behavior: "smooth" });
                }}
                className={cn(
                  "flex items-center gap-3 px-7 py-3 border rounded-full text-white text-[11px] font-bold uppercase tracking-widest transition-all duration-300",
                  currentPage === totalPages
                    ? "opacity-20 cursor-not-allowed border-white/20"
                    : "border-white/20 hover:bg-white hover:text-black hover:border-white"
                )}
              >
                Next
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}
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
