"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Alekhya",
    role: "Business Analyst",
    quote: "Joining Newel Technologies as a fresher has been a great learning experience for me. The organization has provided the right guidance, opportunities, and exposure that helped me grow professionally and build confidence as a Business Analyst.",
    smallImage: "/Alekhya-emp.jpg",
    largeImage: "/Alekhya-emp.jpg",
    tech: [
      { name: "SQL", bg: "bg-[#E34F26]", color: "text-white", textClass: "text-xs md:text-sm" },
      { name: "Jira", bg: "bg-[#1572B6]", color: "text-white", textClass: "text-xs md:text-sm" },
      { name: "PBI", bg: "bg-[#F7DF1E]", color: "text-black", textClass: "text-xs md:text-sm" },
      { name: "Agile", bg: "bg-[#282C34]", color: "text-[#61DAFB]", textClass: "text-xs" }
    ]
  },
  {
    id: 2,
    name: "Junaid",
    role: "Developer",
    quote: "Newel Technologies didn't just give me a role it gave me a career. Every project, every challenge, every late night is building the engineer I'm becoming.",
    smallImage: "/janaid-emp.jpg",
    largeImage: "/janaid-emp.jpg",
    tech: [
      { name: "Next", bg: "bg-[#000000]", color: "text-white", textClass: "text-xs md:text-sm" },
      { name: "React", bg: "bg-[#61DAFB]", color: "text-black", textClass: "text-xs md:text-sm" },
      { name: "Node", bg: "bg-[#339933]", color: "text-white", textClass: "text-xs md:text-sm" },
      { name: "PSQL", bg: "bg-[#336791]", color: "text-white", textClass: "text-xs" }
    ]
  }
];

export const AboutEmployeeTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container-page">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8"
          >
            Here Are a Few Thoughts Shared by <br className="hidden md:block"/> <span className="font-bold">Our Employees</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
          
          {/* Left Side: Details & Quote */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-full">
            
            {/* Top Row: Image, Info, Tech Stack */}
            <div className="flex flex-col sm:flex-row gap-6 h-auto sm:h-40">
              
              {/* Profile Image */}
              <motion.div 
                key={`img-${current.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full sm:w-40 h-40 rounded-[2rem] relative overflow-hidden shrink-0 border border-white/10"
              >
                <Image 
                  src={current.smallImage}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Info Card */}
              <motion.div 
                key={`info-${current.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex-1 bg-[#161616] rounded-[2rem] p-6 flex flex-col justify-center border border-white/5"
              >
                <h4 className="text-white text-xl md:text-2xl font-semibold mb-1">{current.name}</h4>
                <p className="text-white/50 text-sm md:text-base">{current.role}</p>
              </motion.div>

              {/* Tech Stack Card */}
              <motion.div 
                key={`tech-${current.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex-1 bg-[#161616] rounded-[2rem] p-6 flex items-center justify-center gap-3 md:gap-4 border border-white/5"
              >
                {current.tech.map((t, i) => (
                  <div 
                    key={i} 
                    className={`w-10 h-10 md:w-12 md:h-12 ${t.bg} ${t.color} flex items-center justify-center rounded-xl font-bold ${t.textClass || "text-sm"} shadow-lg`}
                  >
                    {t.name}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Row: Quote Card */}
            <motion.div 
              key={`quote-${current.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex-1 w-full bg-[#161616] rounded-[2rem] p-8 md:p-12 relative flex flex-col border border-white/5"
            >
              <Quote className="text-[#0055FF] fill-[#0055FF] w-12 h-12 mb-6 rotate-180 opacity-90" />
              <p className="text-white/90 text-lg md:text-xl lg:text-[1.35rem] leading-relaxed max-w-2xl font-medium">
                "{current.quote}"
              </p>

              {/* Navigation Arrows */}
              <div className="absolute bottom-8 right-8 flex gap-4">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Tall Image */}
          <div className="lg:col-span-1 h-[400px] lg:h-full">
            <motion.div 
              key={`large-img-${current.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full rounded-[2rem] relative overflow-hidden border border-white/10"
            >
              <Image 
                src={current.largeImage}
                alt={current.name}
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
