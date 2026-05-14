"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Utils/Button";
import Link from "next/link";
import { useEffect } from "react";

const CARDS = [
  {
    id: 1,
    title: "Strategic Technology Consulting",
    desc: "From architecture audits to digital transformation strategy, we help leaders align technology with business goals for measurable ROI.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    color: "bg-blue-600",
    href: "/services/ai-strategy-consulting"
  },
  {
    id: 2,
    title: "Digital Product Development",
    desc: "As your digital product engineering company, we handle the full lifecycle of software development—from cloud applications to ERP systems.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    color: "bg-purple-600",
    href: "/services/website-development"
  },
  {
    id: 3,
    title: "AI, Data and Analytics Solutions",
    desc: "We integrate advanced AI, generative AI, and machine learning models to automate operations and personalize experiences at scale.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    color: "bg-indigo-600",
    href: "/services/data-analysis"
  },
  {
    id: 4,
    title: "Cloud Operations & Cybersecurity",
    desc: "We engineer cloud-native environments rooted in Zero Trust principles, ensuring your infrastructure is as scalable as it is impenetrable.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    color: "bg-slate-800",
    href: "/services/cloud-strategy-migration"
  },
];

export const TransformationSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % CARDS.length);
  const prev = () => setIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative w-full py-24 bg-[#E5E7EB] overflow-hidden">
      <div className="container-page relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[3.1rem] lg:text-[4.5rem] font-bold leading-[1.06] tracking-[-0.03em] text-slate-950"
          >
            <span className="font-medium text-slate-900">Beyond Development.</span><br />
            <span className="text-blue-600">We Deliver Transformation.</span>
          </motion.h2>
        </div>

        <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[650px]">
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 md:left-4 z-40 p-4 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg text-slate-950 hover:bg-blue-600 hover:text-white transition-all hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 md:right-4 z-40 p-4 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg text-slate-950 hover:bg-blue-600 hover:text-white transition-all hidden md:block"
          >
            <ChevronRight size={24} />
          </button>

          {/* Stacked Cards Container */}
          <div className="relative w-full max-w-4xl h-[450px] md:h-[550px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {CARDS.map((card, i) => {
                const isCenter = i === index;
                const isLeft = i === (index - 1 + CARDS.length) % CARDS.length;
                const isRight = i === (index + 1) % CARDS.length;

                if (!isCenter && !isLeft && !isRight) return null;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, scale: 0.8, x: isLeft ? -200 : isRight ? 200 : 0 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.4,
                      scale: isCenter ? 1 : 0.85,
                      x: isCenter ? 0 : isLeft ? -150 : 150,
                      zIndex: isCenter ? 30 : 10,
                      rotateY: isCenter ? 0 : isLeft ? 15 : -15,
                    }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    className="absolute w-[85%] md:w-[600px] h-full"
                  >
                    <Link href={card.href} className="block w-full h-full">
                      <div className="w-full h-full rounded-[2.5rem] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-white overflow-hidden flex flex-col group cursor-pointer">
                        {/* Image Area */}
                        <div className="relative h-[60%] md:h-[65%] w-full bg-blue-50 overflow-hidden">
                          <img 
                            src={card.image} 
                            alt={card.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
                          
                          {/* Redirect Icon */}
                          <div className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                            <ArrowUpRight size={24} />
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 p-8 md:p-10 bg-white">
                          <h3 className="text-xl md:text-2xl font-bold text-[#002D72] mb-3 leading-tight">
                            {card.title}
                          </h3>
                          <p className="text-slate-500 text-sm md:text-base font-medium line-clamp-2 md:line-clamp-none">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-blue-600" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/services">
            <Button variant="primary" size="lg" className="min-w-[240px] bg-[#002D72] text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
