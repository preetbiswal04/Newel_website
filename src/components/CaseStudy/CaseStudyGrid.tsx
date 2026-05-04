"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudyCard } from "./CaseStudyCard";
import { CASE_STUDIES } from "@/data/caseStudies";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const CaseStudyGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const gridCols = 3;

  const totalPages = Math.ceil(CASE_STUDIES.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = CASE_STUDIES.slice(startIndex, startIndex + itemsPerPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <div className="container-page pb-48">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          exit={{ opacity: 0, y: -20 }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridCols} gap-x-12 gap-y-24`}
        >
          {currentItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <CaseStudyCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Premium Pagination */}
      <div className="mt-48 flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5">
        <div className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-mono">
          Page {currentPage} <span className="mx-4 text-blue-400/40">—</span> {totalPages}
        </div>

        <div className="flex items-center gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage((p) => Math.max(1, p - 1));
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
            className={cn(
              "group flex items-center gap-4 px-8 py-4 border border-white/20 text-white rounded-full transition-all duration-500",
              currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:bg-white hover:text-black hover:border-white"
            )}
          >
            <ArrowRight size={16} className="rotate-180" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Previous</span>
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => {
              setCurrentPage((p) => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
            className={cn(
              "group flex items-center gap-4 px-8 py-4 border border-white/20 text-white rounded-full transition-all duration-500",
              currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:bg-white hover:text-black hover:border-white"
            )}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Next</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
