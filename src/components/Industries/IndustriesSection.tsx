"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart2,
  ChevronRight,
  Cpu,
  PieChart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type IndustryItem = {
  id: string;
  tabLabel: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  accent: string;
  stat: {
    value: string;
    label: string;
  };
};

const INDUSTRIES: IndustryItem[] = [
  {
    id: "financial-services",
    tabLabel: "Financial Services",
    icon: TrendingUp,
    tag: "Banking & Lending",
    title: "Transforming Financial Services with Intelligent Automation",
    description:
      "Empowering banks, NBFCs, and capital market firms to harness AI for smarter decision-making, faster operations, and superior customer outcomes.",
    bullets: [
      "AI-driven risk assessment & credit scoring",
      "Regulatory compliance & fraud detection",
      "Algorithmic trading & portfolio optimization",
      "Customer lifecycle management & personalization",
    ],
    image: "/finance-market.jpg",
    accent: "#1e40af",
    stat: { value: "3x", label: "Faster credit decisions" },
  },
  {
    id: "capital-markets",
    tabLabel: "Capital Markets",
    icon: BarChart2,
    tag: "Trading & Analytics",
    title: "Next-Gen Capital Markets Intelligence",
    description:
      "Accelerating trade execution and market insights with real-time analytics and AI models built for the pace of modern capital markets.",
    bullets: [
      "Real-time market data analytics & dashboards",
      "Quantitative research & strategy backtesting",
      "Automated reporting & regulatory filing",
      "Cross-asset risk management & hedging",
    ],
    image: "/dynamic-data-visualization-3d.jpg",
    accent: "#1d4ed8",
    stat: { value: "99.9%", label: "Uptime on trading infra" },
  },
  {
    id: "electronics-industry",
    tabLabel: "Electronics Industry",
    icon: Cpu,
    tag: "Manufacturing & Ops",
    title: "Transforming Electronics Operations with AI-Powered Automation",
    description:
      "Helping industrial enterprises move from rule-based operations to intelligent, decision-driven workflows that scale across the supply chain.",
    bullets: [
      "AI-driven quotation intelligence & order orchestration",
      "Predictive compliance monitoring & anomaly detection",
      "Intelligent reconciliation & supply chain insights",
      "Cognitive workflow automation for service operations",
    ],
    image: "/networks-training.jpg",
    accent: "#1e3a8a",
    stat: { value: "40%", label: "Reduction in cycle time" },
  },
  {
    id: "wealth-management",
    tabLabel: "Wealth Management",
    icon: PieChart,
    tag: "HNI & Retail Investors",
    title: "Elevating Wealth Management with AI-First Platforms",
    description:
      "Delivering personalized investment experiences at scale for HNIs and retail investors alike - powered by intelligent advisory engines.",
    bullets: [
      "Robo-advisory & goal-based financial planning",
      "Portfolio analytics & performance attribution",
      "Client onboarding & KYC automation",
      "Multi-asset allocation & rebalancing engines",
    ],
    image: "/wealth.jpg",
    accent: "#1e40af",
    stat: { value: "5x", label: "AUM growth for clients" },
  },
];

export const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = INDUSTRIES[activeIndex];
  const Icon = active.icon;

  return (
    <section
      className="relative w-full overflow-hidden pb-8 md:pb-12"
      style={{
        backgroundImage: 'url("/home-img-7.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />
      <div className="container-page relative z-10 font-sans">
        <div className="mx-auto mb-8 w-full max-w-[1200px] text-left md:mb-10">
          <span className="mb-3 inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
            <span className="inline-block h-px w-7 bg-blue-400" />
            Industries We Serve
          </span>
          <h2 className="max-w-[14ch] font-sans text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950 md:text-[3.1rem] lg:text-[4.5rem]">
            Powering AI <span className="text-blue-500">Across Industries</span>
          </h2>
          <p className="mt-4 max-w-[52ch] font-sans text-[0.98rem] leading-8 text-slate-600 md:text-[1.02rem]">
            Sector-specific AI solutions built for the realities of regulated, high-stakes
            environments.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[1200px]">

          <div
            role="tablist"
            aria-label="Industries"
            className="mt-1 mb-7 flex w-full items-center gap-3 overflow-x-auto px-1 pb-2 pt-1 sm:justify-start"
          >
            {INDUSTRIES.map((industry, idx) => (
              <button
                key={industry.id}
                id={`industry-tab-${industry.id}`}
                role="tab"
                aria-selected={activeIndex === idx}
                aria-controls={`industry-panel-${industry.id}`}
                onClick={() => setActiveIndex(idx)}
                className={`relative overflow-hidden whitespace-nowrap rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300
        ${activeIndex === idx
                    ? "border-slate-700 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                  }`}
              >
                {activeIndex === idx && (
                  <motion.span
                    layoutId="active-industry-tab"
                    className="absolute inset-0 rounded-full bg-slate-700"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{industry.tabLabel}</span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              id={`industry-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`industry-tab-${active.id}`}
              initial={{ opacity: 0, y: 24 }}

              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg lg:min-h-[520px] lg:flex-row lg:items-stretch"
            >
              <div className="flex h-full w-full flex-col justify-between p-6 sm:p-8 lg:w-[55%] lg:px-9 lg:py-7">
                <div className="flex flex-col gap-5">
                  <span
                    className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]"
                    style={{
                      color: active.accent,
                      borderColor: `${active.accent}22`,
                      backgroundColor: `${active.accent}0d`,
                    }}
                  >
                    <Icon size={12} />
                    {active.tag}
                  </span>

                  <div className="space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Industry Solution
                    </span>
                    <h3 className="max-w-[17ch] text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-[1.95rem] lg:text-[2rem]">
                      {active.title}
                    </h3>
                    <p className="max-w-[52ch] text-[0.95rem] leading-[1.62] text-slate-600 lg:text-[1rem]">
                      {active.description}
                    </p>
                  </div>
                </div>

                <div className="mt-7 border-t border-slate-100 pt-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Key Capabilities
                  </span>
                  <ul className="mt-3.5 grid gap-3 lg:grid-cols-2">
                    {active.bullets.map((bullet, i) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.06 + i * 0.07 }}
                        className="flex min-h-[78px] items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                      >
                        <span
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                          style={{
                            borderColor: `${active.accent}22`,
                            backgroundColor: `${active.accent}10`,
                            color: active.accent,
                          }}
                        >
                          <ChevronRight size={13} />
                        </span>
                        <span className="text-[13px] font-medium leading-[1.55] text-slate-700">
                          {bullet}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>
              <div className="relative h-[320px] w-full overflow-hidden sm:h-[380px] lg:h-auto lg:min-h-[520px] lg:w-[45%] lg:self-stretch">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.tabLabel}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="absolute inset-0 block h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div >
    </section >
  );
};
