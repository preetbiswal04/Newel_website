"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

interface IndustryData {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  bullets: string[];
  image: string; // Place images in public/industries/ folder
}

const INDUSTRIES: IndustryData[] = [
  {
    id: "financial-services",
    tabLabel: "Financial Services",
    title: "Transforming Financial Services with Intelligent Automation",
    description: "Empowering banks, NBFCs, and capital market firms to harness AI for smarter decision-making.",
    bullets: [
      "AI-driven risk assessment & credit scoring",
      "Regulatory compliance & fraud detection",
      "Algorithmic trading & portfolio optimization",
      "Customer lifecycle management & personalization",
    ],
    image: "/finance service.jpg",
  },
  {
    id: "capital-markets",
    tabLabel: "Capital Markets",
    title: "Next-Gen Capital Markets Intelligence",
    description: "Accelerating trade execution and market insights with real-time analytics and AI models.",
    bullets: [
      "Real-time market data analytics & dashboards",
      "Quantitative research & strategy backtesting",
      "Automated reporting & regulatory filing",
      "Cross-asset risk management & hedging",
    ],
    image: "/capital market.jpg",
  },
  {
    id: "insurance",
    tabLabel: "Insurance",
    title: "Reimagining Insurance with Data-Driven Insights",
    description: "Building end-to-end digital insurance platforms powered by predictive analytics.",
    bullets: [
      "Predictive underwriting & claims processing",
      "Fraud analytics & anomaly detection",
      "Customer segmentation & retention modeling",
      "Automated policy management & renewals",
    ],
    image: "/insurance.jpg",
  },
  {
    id: "wealth-management",
    tabLabel: "Wealth Management",
    title: "Elevating Wealth Management with AI-First Platforms",
    description: "Delivering personalized investment experiences at scale for HNIs and retail investors alike.",
    bullets: [
      "Robo-advisory & goal-based financial planning",
      "Portfolio analytics & performance attribution",
      "Client onboarding & KYC automation",
      "Multi-asset allocation & rebalancing engines",
    ],
    image: "/wealth.jpg",
  },
];

export const IndustriesSection = () => {
  const [activeIndex, setActiveTab] = useState(0);
  const activeTab = Math.min(activeIndex, INDUSTRIES.length - 1);

  return (
    <section
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
      className="w-full"
    >
      <div className="container-page">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 block">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 leading-tight">
            Powering AI Across Industries
          </h2>
        </div>

        {/* Tab Bar - Minimal Underline Style */}
        <div className="flex justify-start mb-20 overflow-x-auto pb-2 scrollbar-hide no-scrollbar border-b border-blue-600/10">
          <div className="flex gap-12 min-w-max">
            {INDUSTRIES.map((industry, idx) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(idx)}
                className={`
                  relative py-4 text-sm md:text-base font-bold transition-all duration-300 flex-shrink-0
                  ${activeTab === idx
                    ? "text-blue-700"
                    : "text-blue-600/40 hover:text-blue-600"
                  }
                `}
              >
                {industry.tabLabel}
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={INDUSTRIES[activeTab].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          >
            {/* Left Column: Text Content */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 leading-snug mb-4">
                  {INDUSTRIES[activeTab].title}
                </h3>
                <p className="text-blue-700/60 text-base md:text-lg font-light leading-relaxed">
                  {INDUSTRIES[activeTab].description}
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-4">
                {INDUSTRIES[activeTab].bullets.map((bullet, idx) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-blue-700/70"
                  >
                    <ChevronRight
                      size={18}
                      className="text-blue-400 mt-1 shrink-0"
                    />
                    <span className="text-sm md:text-base font-light leading-relaxed">
                      {bullet}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base transition-colors duration-300 w-fit"
              >
                <span className="relative">
                  Learn more
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-600 group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Right Column: Image */}
            <div className="relative lg:mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/10"
              >
                <img
                  src={INDUSTRIES[activeTab].image}
                  alt={INDUSTRIES[activeTab].tabLabel}
                  className="w-full aspect-[4/3] object-cover"
                  loading={activeTab === 0 ? "eager" : "lazy"}
                />
                {/* Subtle gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </motion.div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-blue-500/5 blur-[80px] rounded-full -z-10" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

