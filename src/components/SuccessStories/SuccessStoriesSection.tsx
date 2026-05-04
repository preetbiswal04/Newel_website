"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SuccessStory {
  id: number;
  title: string;
  industry: string;
  client: string;
  image: string;
  link: string;
}

const STORIES: SuccessStory[] = [
  {
    id: 1,
    title: "Predictive Analytics for Global Energy Resilience",
    industry: "Energy",
    client: "EuroGrid Solutions",
    image: "https://images.unsplash.com/photo-1466611653911-954ffea1127b?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Automating Risk Assessment in High-Frequency Trading",
    industry: "FinTech",
    client: "Stellar Asset Management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Accelerating Drug Discovery with Orchestrated Agent Networks",
    industry: "HealthTech",
    client: "BioGen Systems",
    image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Supply Chain Optimization with Generative AI Agents",
    industry: "Logistics",
    client: "Global Logistics Group",
    image: "https://images.unsplash.com/photo-1586528116311-ad86d7c7ce80?q=80&w=800&auto=format&fit=crop",
    link: "#",
  }
];

export const SuccessStoriesSection = () => {
  return (
    <section className="relative z-20 isolate pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="container-page">
        
        {/* Header Area */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-blue-800 mb-6"
            >
              Leading the Way: <br />
              AI-Powered Success Stories
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-blue-700/70 leading-relaxed max-w-xl"
            >
              We deliver AI transformation services to guide enterprises into the new era of AI. 
              Our measurable outcomes demonstrate the real-world value of specialized intelligence.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start md:items-end gap-2"
          >
            <a 
              href="#"
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#ff6b47]"
            >
              See our case studies
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Native Horizontal Scroll Area */}
        <div className="no-scrollbar relative overflow-x-auto overflow-y-hidden pb-4">
          <div className="flex min-w-max snap-x snap-mandatory gap-8 pr-6 md:gap-10 md:pr-12">
            {STORIES.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Scrollbar Customization for modern browsers */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

const StoryCard = ({ story, index }: { story: SuccessStory; index: number }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.a
      href={story.link}
      className="group flex min-h-[520px] w-[84vw] max-w-[420px] flex-shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-blue-600/10 bg-white/40 shadow-sm backdrop-blur-md transition-all duration-500 hover:shadow-xl md:w-[400px] lg:w-[410px]"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl bg-slate-200/40">
        {!imgFailed ? (
          <img
            src={story.image}
            alt={story.title}
            onError={() => setImgFailed(true)}
            className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-300/70 to-slate-500/40" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col px-8 pb-10 pt-7 md:px-9 md:pb-11 md:pt-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="px-3 py-1 bg-blue-600/10 text-[10px] font-bold uppercase tracking-widest text-blue-600">
            {story.industry}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {story.client}
          </span>
        </div>

        <h3 className="mb-6 line-clamp-3 text-xl font-bold leading-tight text-blue-800 transition-colors group-hover:text-blue-600 md:text-2xl">
          {story.title}
        </h3>

        <div className="mt-auto flex items-center gap-2 pt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors group-hover:text-gray-900">
          View Case Study
          <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
      </div>
    </motion.a>
  );
};

