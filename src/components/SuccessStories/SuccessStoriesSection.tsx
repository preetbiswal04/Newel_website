"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SuccessStory {
  id: number;
  title: string;
  teaser: string;
  industry: string;
  client: string;
  image: string;
  link: string;
}

const STORIES: SuccessStory[] = [
  {
    id: 1,
    title: "Predictive Analytics for Global Energy Resilience",
    teaser:
      "EuroGrid leveraged our AI platform to predict grid failures 48 hours ahead, reducing outage incidents by 62% across 14 countries.",
    industry: "Energy",
    client: "EuroGrid Solutions",
    image:
      "https://images.unsplash.com/photo-1466611653911-954ffea1127b?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Automating Risk Assessment in High-Frequency Trading",
    teaser:
      "A renowned asset management firm built an AI-based ETF-like investing product to enhance financial performance and improve risk management.",
    industry: "Financial Services",
    client: "Stellar Asset Management",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Accelerating Drug Discovery with Orchestrated Agent Networks",
    teaser:
      "BioGen reduced the average pre-clinical research cycle from 18 months to under 6 using our multi-agent AI orchestration framework.",
    industry: "HealthTech",
    client: "BioGen Systems",
    image:
      "https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Supply Chain Optimization with Generative AI Agents",
    teaser:
      "Global Logistics Group cut fulfilment costs by 31% and improved delivery accuracy to 99.4% using autonomous AI supply-chain agents.",
    industry: "Logistics",
    client: "Global Logistics Group",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad86d7c7ce80?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

export const SuccessStoriesSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 md:py-28">
      <div className="container-page">

        {/* ── Headline ───────────────────────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-poppins font-bold text-white text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] mb-16 md:mb-20 max-w-2xl"
        >
          Explore How Our Clients Are Thriving in the New Era of AI
        </motion.h2>

        {/* ── Story List ─────────────────────────────────────────────── */}
        <div className="flex flex-col divide-y divide-white/10">
          {STORIES.map((story, index) => (
            <StoryRow key={story.id} story={story} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ── Individual Row ─────────────────────────────────────────────────── */
const StoryRow = ({ story, index }: { story: SuccessStory; index: number }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.a
      href={story.link}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 md:grid-cols-[420px_1fr] gap-8 md:gap-14 py-10 md:py-14 items-center cursor-pointer"
    >
      {/* Left — Image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#111] flex-shrink-0">
        {/* Industry pill */}
        <span className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full">
          {story.industry}
        </span>

        {!imgFailed ? (
          <img
            src={story.image}
            alt={story.title}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900" />
        )}
      </div>

      {/* Right — Content */}
      <div className="flex flex-col gap-4">
        {/* Client label */}
        <p className="text-white/40 text-[13px] font-medium tracking-wide">
          {story.client}
        </p>

        {/* Title */}
        <h3 className="font-poppins font-bold text-white text-2xl md:text-[1.85rem] leading-snug group-hover:text-white/80 transition-colors duration-300">
          {story.title}
        </h3>

        {/* Teaser */}
        <p className="text-white/50 text-[15px] leading-relaxed max-w-lg">
          {story.teaser}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-2 mt-2 text-white/60 text-[14px] font-medium group-hover:text-white transition-colors duration-300">
          <span className="text-white/40 group-hover:text-white transition-colors">↳</span>
          <span>Read more</span>
        </div>
      </div>
    </motion.a>
  );
};
