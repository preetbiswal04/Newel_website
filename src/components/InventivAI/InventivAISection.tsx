import React from 'react';
import Image from 'next/image';
import { Terminal, Eye, Database, CheckCheck, Sparkles, Settings } from 'lucide-react';

export const InventivAISection = () => {
  const cards = [
    {
      title: "GenAI Integration",
      icon: (
        <div className="relative inline-block">
          <Terminal className="w-7 h-7 text-white" />
          <Sparkles className="w-3.5 h-3.5 text-blue-400 absolute -top-1 -right-1" />
        </div>
      ),
      items: ["AI Agents", "Chatbots", "Coding Assistants"],
    },
    {
      title: "Computer Vision",
      icon: <Eye className="w-7 h-7 text-white" />,
      items: ["Quality Control", "Facial Recognition"],
    },
    {
      title: "Data Engineering",
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
            <div className="absolute top-8 left-8 z-10 flex items-center gap-1">
              <span className="text-4xl font-bold tracking-tight text-white flex items-center">
                InventivA<span className="text-blue-400">i</span>
                <Sparkles className="w-6 h-6 text-blue-400 ml-1 mb-3" />
              </span>
            </div>
            
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
            <div className="space-y-4">
              <h2 className="text-4xl md:text-[2.75rem] font-medium leading-tight text-gray-300">
                Building AI Ecosystem
                <br />
                <span className="text-white font-bold">That Align With Your Organization</span>
              </h2>
              <p className="text-gray-300 text-[1.1rem] leading-relaxed max-w-[95%]">
                <strong className="text-white font-semibold">InventivAI</strong> is our dedicated center of excellence, to help enterprises navigate the AI revolution. From custom LLMs to automated workflows, we move your business beyond the hype into practical, revenue-generating AI implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <div key={idx} className="bg-[#050505] border border-[#222] rounded-2xl p-6 flex flex-col hover:border-gray-600 transition-colors duration-300">
                  <div className="mb-6 h-12 w-12 flex items-center justify-center rounded-xl bg-transparent border-none">
                    {card.icon}
                  </div>
                  <h3 className="text-[1.05rem] font-semibold text-white mb-6">
                    {card.title}
                  </h3>
                  <ul className="space-y-4 mt-auto">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCheck className="w-5 h-5 text-blue-500 shrink-0" />
                        <span className="text-sm font-medium text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};
