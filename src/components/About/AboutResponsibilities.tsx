"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutResponsibilities = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5"
          >
             {/* Using a high-quality office collaboration image */}
             <Image 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
               alt="Team Responsibilities"
               fill
               className="object-cover"
             />
             <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center max-w-xl"
          >
            <h3 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-white mb-6 md:mb-8 leading-tight">
              We Own Responsibilities
            </h3>
            <p className="text-white/70 leading-relaxed text-base md:text-[1.05rem]">
              We employ the latest infrastructure, tech stacks, management processes, and security measures gained from a diverse collective portfolio of seasoned strategists, designers, and developers in <strong className="text-white">35+</strong> prominent industries. This helps us fulfil any client demand without compromising the output quality, quicker than the industry-best delivery timelines.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
