"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const AboutDivisions = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          
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
                Pioneer the AI Revolution <br className="hidden lg:block" /> through <span className="font-bold">Newel Technologies</span>
              </h3>
              <p className="text-white/90 text-sm md:text-[1.05rem] leading-relaxed mb-10 max-w-[90%]">
                While others just build software, we build intelligent ecosystems. Newel Technologies is our AI Center of Excellence that represents our commitment to embedding mission-critical AI into the core of enterprise operations.
              </p>
              
              <Link href="/services/generative-ai" className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300">
                Explore Our Newel Technologies Services
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

        </div>
      </div>
    </section>
  );
};
