"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LEADERS = [
  {
    name: "Mr. Pravin Narhe",
    role: "CEO",
    image: "/Pravin-Narhe.jpg",
  },
  {
    name: "Mr. Yogesh Wadile",
    role: "Delivery Head",
    image: "/YW.png",
  },
  {
    name: "Mr. Sachin Shinde",
    role: "COO",
    image: "/SS.png",
  },
  {
    name: "Mr. Vishwas Punekar",
    role: "Director",
    image: "/VP.jpeg",
  },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
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
