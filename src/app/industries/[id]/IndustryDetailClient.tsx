"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { IndustryHero } from "@/components/Industries/IndustryHero";
import { IndustryPageData } from "@/data/industryPagesData";

type IndustryDetailClientProps = {
  data: IndustryPageData;
};

export default function IndustryDetailClient({
  data,
}: IndustryDetailClientProps) {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <IndustryHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        description={data.heroDescription}
        image={data.heroImage}
      />

      <section className="py-24 px-6 md:px-12">
        <div className="container-page max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white uppercase tracking-tight leading-tight">
              {data.introHeading}{" "}
              <span className="text-blue-500">{data.introHighlight}</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
              {data.introText}
            </p>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl inline-block text-left">
              <blockquote className="text-xl font-serif italic text-blue-300 leading-relaxed">
                {data.quote}
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10 bg-[#0a0a0a]">
        <div className="container-page px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Key Challenges <span className="text-blue-500">We Deliver</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {data.challenges.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex items-start gap-6 transition-all duration-300"
              >
                <CheckCircle2 className="w-8 h-8 text-blue-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-32" />
    </main>
  );
}
