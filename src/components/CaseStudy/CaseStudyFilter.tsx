"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Healthcare", "Finance", "Logistics", "Energy", "Retails"];

export const CaseStudyFilter = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-black border-b border-white/10 py-6 mb-16 relative z-10 font-bold uppercase tracking-widest">
      <div className="mx-auto max-w-[1440px] px-8 md:px-12 flex items-center gap-8 overflow-x-auto no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`text-sm font-bold uppercase tracking-widest transition-all relative py-2 ${
              activeTab === cat ? "text-white" : "text-white/40 hover:text-white"
            }`}
          >
            {cat}
            {activeTab === cat && (
              <motion.div 
                layoutId="activeFilter"
                className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-white" 
              />
            )}
          </button>
        ))}
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
