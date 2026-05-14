"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutROI = () => {
  return (
    <section className="py-16 md:py-20 bg-black relative">
      <div className="container-page relative z-10">
        <div className="relative w-full min-h-[400px] md:min-h-[480px] flex items-center justify-start">
          
          {/* Image Container */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[80%] lg:w-[70%] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
             {/* Using a high-quality office/collaboration image */}
             <Image 
               src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
               alt="Team Collaboration"
               fill
               className="object-cover"
             />
             {/* Subtle gradient overlay for better text contrast on mobile */}
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:hidden" />
          </div>

          {/* Text Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 bg-[#1A1A1A] p-8 md:p-10 lg:p-12 rounded-[1.5rem] md:rounded-[2rem] w-[90%] md:w-[55%] lg:w-[38%] mx-auto md:mx-0 shadow-2xl border border-white/5 my-12 md:my-0"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-5 leading-tight">
              We Keep Our Eye On The ROI
            </h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              Every solution we build begins with a solid business case. We connect each feature to its ROI, set measurable performance targets, and track them from day one. By refining user journeys, streamlining workflows, and tuning infrastructure, we cut waste and lift conversions. The results show up in real numbers on your balance sheet, not just in a report.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
