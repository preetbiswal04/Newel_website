"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const AboutDivisions = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          
          {/* Left Card - AI Focus */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#2563EB] rounded-[2.5rem] p-10 md:p-12 lg:p-14 relative overflow-hidden flex flex-col min-h-[550px] lg:min-h-[650px] group"
          >
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_2px,_transparent_2px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 flex-grow">
              <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-medium text-white mb-6 leading-tight tracking-tight">
                Pioneer the AI Revolution <br className="hidden lg:block" /> through <span className="font-bold italic">InventivAI</span>
              </h3>
              <p className="text-white/90 text-sm md:text-[1.05rem] leading-relaxed mb-10 max-w-[90%]">
                While others just build software, we build intelligent ecosystems. InventivAI is our AI Center of Excellence that represents our commitment to embedding mission-critical AI into the core of enterprise operations.
              </p>
              
              <Link href="/services/generative-ai" className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300">
                Explore Our InventivAI Services
              </Link>
            </div>

            {/* Bottom Graphic */}
            <div className="absolute bottom-0 left-0 right-0 h-[40%] md:h-[45%] mt-8">
               {/* Using an Unsplash image of a robotic hand / tech abstract */}
               <div className="relative w-full h-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2048&auto=format&fit=crop"
                    alt="AI Revolution"
                    fill
                    className="object-cover object-top mix-blend-overlay opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient to blend image smoothly into the blue card */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB] via-[#2563EB]/40 to-transparent" />
               </div>
            </div>
          </motion.div>

          {/* Right Card - Digital Focus */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#FFA3FF] rounded-[2.5rem] p-10 md:p-12 lg:p-14 relative overflow-hidden flex flex-col min-h-[550px] lg:min-h-[650px] group"
          >
            <div className="relative z-10 flex-grow">
              <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-medium text-black mb-6 leading-tight tracking-tight">
                Amplify Your Market Presence <br className="hidden lg:block" /> with <span className="font-bold">Newel Digital</span>
              </h3>
              <p className="text-black/80 text-sm md:text-[1.05rem] leading-relaxed mb-10 max-w-[95%]">
                Building exceptional digital products is only half the equation. Newel Digital completes your success story by ensuring your innovations reach and resonate with the right audiences. Our full-spectrum digital marketing division combines data-driven strategies with creative excellence to drive user acquisition, enhance brand visibility, and maximize your digital ROI.
              </p>
              
              <Link href="/services" className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-sm">
                View Newel Digital Offerings
              </Link>
            </div>

            {/* Bottom Graphic: Stylized Browser Window */}
            <div className="absolute bottom-0 left-8 right-8 lg:left-12 lg:right-12 h-[35%] md:h-[40%]">
               <div className="relative w-full h-full bg-[#CCFF00] rounded-t-2xl overflow-hidden shadow-2xl group-hover:-translate-y-4 transition-transform duration-500 ease-out flex flex-col border border-black/5">
                  {/* Browser Header */}
                  <div className="h-8 bg-white/90 flex items-center px-4 gap-2 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-black/20" />
                    <div className="w-2 h-2 rounded-full bg-black/20" />
                    <div className="w-2 h-2 rounded-full bg-black/20" />
                    <div className="ml-4 w-32 h-4 bg-black/5 rounded-full flex items-center px-2">
                       <span className="text-[8px] font-medium text-black/40">Newel Digital</span>
                    </div>
                  </div>
                  {/* Browser Content */}
                  <div className="w-full h-full bg-[#050505] p-6 relative flex flex-col justify-end">
                     <p className="text-[#CCFF00] font-serif italic text-3xl md:text-4xl leading-tight mb-2 z-10">
                       Newel <br/>Digital
                     </p>
                     {/* Large Decorative Letter */}
                     <div className="absolute bottom-[-10px] right-2 text-white/5 text-[8rem] font-serif leading-none select-none">
                       N
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
