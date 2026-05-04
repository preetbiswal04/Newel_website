"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

interface Partner {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "Dr. Elena Rossi",
    role: "Chief AI Strategist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Head of ML Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=388&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Data Ethics Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=388&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Lead Platform Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=388&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Amina Al-Farsi",
    role: "AI Innovation Partner",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=388&auto=format&fit=crop",
    linkedin: "#",
  },
];

export const PartnersSection = () => {
  return (
    <section className="relative w-full pb-10 pt-2 md:pb-16 md:pt-4">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-[40%_60%] md:gap-0">

          {/* Left Column: Sticky Content */}
          <div className="md:sticky md:top-40 md:h-fit md:pr-24 md:border-r md:border-blue-600/10 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mb-6 inline-block text-[11px] font-bold tracking-[0.3em] text-blue-600 uppercase">
                Collaborate with AI Partners
              </span>
              <h2 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-blue-800 lg:text-6xl">
                Expertise that <br />
                drives impact
              </h2>
              <p className="mb-6 max-w-sm text-lg leading-relaxed text-blue-700/60">
                Strategic collaboration with industry-leading pioneers to build, scale, and govern AI-first enterprises.
              </p>

              <div className="flex flex-col gap-4">
                {/* CTA */}
                <button className="group relative flex w-fit items-center gap-3 overflow-hidden rounded-full border border-blue-600/20 bg-blue-600/5 px-8 py-4 font-semibold text-blue-800 transition-all hover:bg-blue-800 hover:text-white">
                  <span className="relative z-10 flex items-center gap-3">
                    About us
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Vertical List of Cards */}
          <div className="flex flex-col gap-16 md:gap-32 md:pl-24">
            {PARTNERS.map((partner, index) => (
              <Card key={partner.id} partner={partner} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const Card = ({ partner, index }: { partner: Partner; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-2xl group"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 aspect-[4/5] md:aspect-[16/10]">
        <img
          src={partner.image}
          alt={partner.name}
          className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent opacity-80" />

        {/* Content Overlay on Card for Premium Look */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">{partner.name}</h3>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/60 mb-6">
              {partner.role}
            </p>
          </motion.div>

          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
            <a
              href={partner.linkedin}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/10 backdrop-blur-md text-blue-600 border border-blue-600/20 shadow-2xl hover:scale-110 transition-transform"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

