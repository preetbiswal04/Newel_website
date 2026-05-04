"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CaseStudyCardProps {
  id: string;
  slug: string;
  title: string;
  client?: string;
  industry?: string;
  teaser: string;
  image: string;
}

export const CaseStudyCard = ({ slug, title, client, industry, image }: CaseStudyCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Link href={`/case-studies/${slug}`} className="block group underline-none focus:outline-none">
      <div
        ref={containerRef}
        className="flex flex-col gap-6"
      >
        {/* Thumbnail Area */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#111]">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          />
          
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Top-Right Category Tag */}
          {industry && (
            <div className="absolute top-6 left-6 z-10">
              <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">
                {industry}
              </span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-4 px-2">
          <div className="flex items-center gap-4">
            {client && (
              <span className="text-[10px] font-bold text-blue-500/80 uppercase tracking-[0.2em]">
                {client}
              </span>
            )}
            <div className="h-px flex-grow bg-white/5 group-hover:bg-blue-500/20 transition-colors duration-700" />
          </div>

          <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-white leading-[1.25] tracking-tight group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>

          <div className="flex items-center gap-2 text-white/60 text-[10px] uppercase tracking-widest pt-2 group-hover:text-blue-400 transition-colors duration-500">
            <span>View Project</span>
            <ArrowRight size={12} className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </Link>
  );
};
