import React from 'react';
import Image from 'next/image';
import { Terminal, Eye, Database, CheckCheck, Sparkles, Settings, Activity, ArrowUpRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const InventivAISection = () => {
  const cards = [
    {
      title: "Generative AI",
      href: "/services/generative-ai",
      icon: (
        <div className="relative inline-block">
          <Terminal className="w-7 h-7 text-white" />
          <Sparkles className="w-3.5 h-3.5 text-blue-400 absolute -top-1 -right-1" />
        </div>
      ),
      items: ["AI Agents", "Chatbots", "Coding Assistants"],
    },
    {
      title: "Data Analysis",
      href: "/services/data-analysis",
      icon: <Activity className="w-7 h-7 text-white" />,
      items: ["Quality Control", "Facial Recognition"],
    },
    {
      title: "Data Engineering",
      href: "/services/data-engineering-for-ai",
      icon: (
        <div className="relative inline-block">
          <Database className="w-7 h-7 text-white" />
          <Settings className="w-3.5 h-3.5 text-blue-400 absolute -bottom-1 -right-1" />
        </div>
      ),
      items: ["Building the infrastructure that feeds the AI."],
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container-page mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Column - Image */}
          <div className="relative w-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="/A1-vd.mov"
            />
            {/* Optional gradient overlay if text needs better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <h2 className="text-[2.5rem] md:text-[3.1rem] lg:text-[3.8rem] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
                Building AI Ecosystem
                <br />
                <span className="text-blue-400">That Align With Your Organization</span>
              </h2>
              <p className="text-gray-300 text-[1rem] leading-8 md:text-[1.05rem] max-w-[95%]">
                <strong className="text-white font-semibold">Our AI Center of Excellence</strong> helps enterprises navigate the AI revolution. From custom LLMs to automated workflows, we move your business beyond the hype into practical, revenue-generating AI implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <Link key={idx} href={card.href} className="group">
                  <div className="h-full bg-[#050505] border border-[#222] rounded-2xl p-6 flex flex-col group-hover:border-blue-500/50 group-hover:bg-blue-500/[0.02] transition-all duration-300 relative">
                    <div className="absolute top-6 right-6 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                    <div className="mb-6 h-12 w-12 flex items-center justify-center rounded-xl bg-transparent border-none">
                      {card.icon}
                    </div>
                    <h3 className="text-[1.05rem] font-semibold text-white mb-6 group-hover:text-blue-400 transition-colors">
                      {card.title}
                    </h3>
                    <ul className="space-y-4 mt-auto">
                      {card.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <CheckCheck className="w-5 h-5 text-blue-500 shrink-0" />
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};
