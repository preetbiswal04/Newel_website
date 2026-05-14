"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LEADERS = [
  {
    name: "Saurabh Singh",
    role: "CEO & Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sudeep Srivastava",
    role: "Director & Co-founder",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Prateek Saxena",
    role: "Director & Co-founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Peeyush Singh",
    role: "Director & Co-founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dileep Gupta",
    role: "Director & Co-founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  }
];

export const AboutLeadership = () => {
  return (
    <section className="py-24 md:py-32 bg-black relative">
      <div className="container-page">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-white mb-8"
          >
            Our Core Leadership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 leading-relaxed text-base md:text-lg lg:text-[1.05rem]"
          >
            Our leadership team bridges the gap between vision and action, steering us with a hands-on approach. They lead by example and coach each one of us to carry bold ideas from the white-board to the real-world. Curiosity flourishes here and results speak louder than titles.
          </motion.p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-6 xl:gap-8">
          {LEADERS.map((leader, index) => (
            <motion.div 
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container with specific border radius matching the design */}
              <div className="relative w-full aspect-[3/4] lg:aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-5 border border-white/5 shadow-xl">
                <Image 
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              {/* Text Information */}
              <div className="px-1">
                <h4 className="text-white font-bold text-lg md:text-xl mb-1 group-hover:text-blue-400 transition-colors duration-300">
                  {leader.name}
                </h4>
                <p className="text-white/50 text-sm font-medium">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
