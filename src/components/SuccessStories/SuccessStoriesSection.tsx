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
    <section className="relative z-20 pb-32 md:pb-64 pt-[400px] isolate">
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
        <div className="relative overflow-x-auto no-scrollbar pb-12 overflow-y-hidden">
          <div className="flex gap-8 md:gap-12 min-w-max pr-12">
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
  return (
    <motion.a
      href={story.link}
      className="flex-shrink-0 w-[85vw] md:w-[450px] flex flex-col bg-white/40 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-blue-600/10"
    >
      {/* Thumbnail */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-blue-600/10 text-[10px] font-bold uppercase tracking-widest text-blue-600">
            {story.industry}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {story.client}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold leading-tight text-blue-800 group-hover:text-blue-600 transition-colors mb-8">
          {story.title}
        </h3>

        <div className="mt-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-900 transition-colors">
          View Case Study
          <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
      </div>
    </motion.a>
  );
};
