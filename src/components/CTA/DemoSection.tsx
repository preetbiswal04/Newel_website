"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/Utils/Button";

export const DemoSection = () => {
  return (
    <section 
      className="w-full pb-10 md:pb-16 pt-0"
    >
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-stretch border-t border-blue-600/10">
          
          {/* Left Content */}
          <div className="flex-1 py-16 md:py-24 md:pr-20 flex flex-col justify-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[2.5rem] md:text-[3.1rem] lg:text-[4.5rem] font-semibold leading-[1.06] tracking-[-0.03em] text-slate-950 mb-8"
            >
              See Newel <span className="text-blue-500">in action!</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-slate-600 text-[0.98rem] leading-8 md:text-[1.02rem] mb-12 max-w-xl"
            >
              Watch the 15 minute on-demand demo to get an overview of the Newel Enterprise AI Platform.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-[240px]"
                icon={<Play size={20} fill="currentColor" />}
              >
                Watch Demo
              </Button>
              
              <Button 
                variant="primary" 
                size="lg"
                className="w-full sm:w-[240px]"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Visual (Abstract Line Art) */}
          <div className="md:w-1/2 relative overflow-hidden min-h-[400px] md:min-h-full flex items-center justify-center">
            <img 
              src="/demo_banner_abstract_1776844946313.png" 
              alt="Abstract AI Visualization"
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[10s] hover:scale-110"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
