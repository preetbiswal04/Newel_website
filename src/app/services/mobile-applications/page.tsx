"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Smartphone, Tablet, Globe, Zap } from "lucide-react";
import Link from "next/link";

export default function MobileApplicationPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="container-page mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
                Mobile <br />
                <span className="text-blue-600">Application</span>
              </h1>
              
              <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-lg font-medium">
                <p>
                  It is important for every business to invest in mobile app development services as 
                  studies suggest that the community of app users increases very speedily with each passing year. 
                  The correct business case of mobile app can take business to new heights.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 active:scale-95"
              >
                <PhoneCall size={20} className="group-hover:rotate-12 transition-transform" />
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Illustration */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative w-full max-w-xl group"
            >
              <div className="absolute -inset-10 bg-blue-400/10 blur-[100px] rounded-full group-hover:bg-blue-400/20 transition-colors duration-700" />
              <img 
                src="/mobile-app-hero.png" 
                alt="Mobile Application Illustration" 
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:drop-shadow-[0_30px_60px_rgba(37,99,235,0.15)] transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Types Section */}
      <section className="container-page mx-auto mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Native", 
              desc: "Optimized for specific platforms (iOS/Android) for peak performance.",
              icon: <Smartphone size={32} />,
              border: "border-orange-100",
              color: "text-orange-600"
            },
            { 
              title: "Hybrid", 
              desc: "Combining web and native technologies for multi-platform reach.",
              icon: <Zap size={32} />,
              border: "border-teal-100",
              color: "text-teal-600"
            },
            { 
              title: "Cross Platform", 
              desc: "Build once, deploy everywhere with high-quality user experiences.",
              icon: <Tablet size={32} />,
              border: "border-blue-100",
              color: "text-blue-600"
            },
            { 
              title: "Progressive Web App", 
              desc: "Web-based apps that offer a native-like experience on any device.",
              icon: <Globe size={32} />,
              border: "border-pink-100",
              color: "text-pink-600"
            }
          ].map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-6 rounded-xl border ${type.border} shadow-sm hover:shadow-md transition-all duration-500 text-center space-y-4 flex flex-col items-center`}
            >
              <div className={`${type.color}`}>
                {type.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-wide">{type.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{type.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Decorative Elements */}
      <div className="fixed top-1/4 -right-20 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 -left-20 w-80 h-80 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
    </main>
  );
}
