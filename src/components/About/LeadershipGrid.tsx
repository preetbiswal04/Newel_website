"use client";

import React from "react";
import { motion } from "framer-motion";
import { LEADERSHIP_TEAM } from "@/data/aboutData";
import { ArrowRight } from "lucide-react";

export default function LeadershipGrid() {
  return (
    <section id="about-leadership" className="w-full py-24 md:py-32 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="h-[100px] w-full" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 mb-4">
            The People Behind The Vision
          </p>
          <div className="h-[70px] w-full" />
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Our Core{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Leadership
              <div className="h-[100px] w-full" />
            </span>
          </h2>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {LEADERSHIP_TEAM.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Avatar */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-2xl font-bold text-white">{leader.initials}</span>
              </div>

              {/* Name & Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
              <p className="text-sm text-gray-500 font-medium">{leader.title}</p>
            </motion.div>
          ))}
          <div className="h-[100px] w-full" />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors group"
          >
            View Our Core Team
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="h-[50px] w-full" />
        </motion.div>
      </div>
    </section>
  );
}
