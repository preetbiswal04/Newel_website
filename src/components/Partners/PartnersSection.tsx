"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/Utils/Button";

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
    name: "Pravin Narhe",
    role: "Chief AI Strategist",
    image: "/Pravin-Narhe.jpg",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Y. W.",
    role: "Head of ML Engineering",
    image: "/YW.png",
    linkedin: "#",
  },
  {
    id: 3,
    name: "S. S.",
    role: "Data Ethics Director",
    image: "/SS.png.crdownload",
    linkedin: "#",
  },
  {
    id: 4,
    name: "V. P.",
    role: "Lead Platform Architect",
    image: "/VP.jpeg.crdownload",
    linkedin: "#",
  },
  {
    id: 5,
    name: "A. T.",
    role: "AI Innovation Partner",
    image: "/AT.png.crdownload",
    linkedin: "#",
  },
];

export const PartnersSection = () => {
  return (
    <section 
      className="relative w-full pb-20 pt-10 md:pb-32 md:pt-16 bg-[#E5E7EB]"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-[40%_60%] md:gap-0">

          {/* Left Column: Sticky Content */}
          <div className="md:sticky md:top-40 md:h-fit md:pr-24 md:border-r-2 md:border-slate-400 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-blue-500" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
                  Collaborate with AI Partners
                </span>
              </div>
              <h2 className="mb-6 text-[2.5rem] md:text-[3.1rem] lg:text-[4.5rem] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950">
                Expertise that <br />
                drives impact
              </h2>
              <p className="mb-6 max-w-sm text-slate-600 text-[0.98rem] leading-8 md:text-[1.02rem]">
                Strategic collaboration with industry-leading pioneers to build, scale, and govern AI-first enterprises.
              </p>

              <div className="flex flex-col gap-4">
                {/* CTA */}
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  About us
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Vertical List of Cards */}
          <div className="flex flex-col gap-16 md:gap-32 md:pl-24">
            {PARTNERS.map((partner, index) => (
              <React.Fragment key={partner.id}>
                <Card partner={partner} index={index} />
                {index !== PARTNERS.length - 1 && (
                  <div className="h-px w-full bg-slate-300 md:hidden" />
                )}
              </React.Fragment>
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
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white aspect-[4/5] md:aspect-[16/10]">
        <img
          src={partner.image}
          alt={partner.name}
          className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content Overlay on Card for Premium Look */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 drop-shadow-2xl">
              {partner.name}
            </h3>
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-blue-500" />
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400">
                {partner.role}
              </p>
            </div>
          </motion.div>

          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
            <a
              href={partner.linkedin}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-2xl hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300"
            >
              <ExternalLink size={26} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
