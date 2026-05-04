"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface IndustryData {
  id: string;
  title: string;
  description: string;
  image: string;
}

const INDUSTRIES: IndustryData[] = [
  {
    id: "bfsi",
    title: "BFSI",
    description: "The biggest trend defining the global financial services industry is digital disruption. Unless banks and other financial institutions embrace technology, they risk falling behind.",
    image: "/finance service.jpg",
  },
  {
    id: "retail",
    title: "RETAIL",
    description: "Creating meaningful experiences to enhance customer journeys in today's digital world. Retail is undergoing a massive transformation with AI and data-driven insights.",
    image: "/capital market.jpg",
  },
  {
    id: "epc",
    title: "EPC",
    description: "Streamlining complex project lifecycles from concept to commissioning. We provide integrated digital platforms that improve collaboration and optimize supply chain procurement.",
    image: "/insurance.jpg",
  },
  {
    id: "oil-gas",
    title: "OIL & GAS",
    description: "Driving operational excellence in a high-stakes environment. Our technology solutions help energy companies optimize asset performance and ensure safety compliance.",
    image: "/wealth.jpg",
  },
  {
    id: "infrastructure",
    title: "INFRASTRUCTURE",
    description: "Building the backbone of modern society with intelligent digital solutions. We support engineering firms in managing large-scale assets through advanced simulation.",
    image: "/enterprise.jpg",
  },
  {
    id: "engineering",
    title: "ENGINEERING",
    description: "Precision mechanical components and 3D CAD design on high-resolution screens. Powering the next generation of engineering excellence with data-driven insights.",
    image: "/finance service.jpg",
  },
  {
    id: "oem",
    title: "OEM",
    description: "Revolutionizing manufacturing through smart, connected ecosystems. We help OEMs integrate IoT and digital twin technology to transform product performance.",
    image: "/capital market.jpg",
  },
  {
    id: "heavy-equipment",
    title: "HEAVY EQUIPMENT",
    description: "Large excavators or construction machinery with digital sensor overlays. Powerful, high-tech industrial solutions for the heavy equipment industry.",
    image: "/insurance.jpg",
  },
  {
    id: "chemical-healthcare",
    title: "CHEMICAL HEALTHCARE",
    description: "Modern laboratory solutions for chemical and healthcare industries. Clean, sterile, and tech-advanced platforms for research and development.",
    image: "/wealth.jpg",
  },
  {
    id: "it-ites",
    title: "IT/ITEs",
    description: "Scaling agility and performance for the digital enterprise. Modernizing legacy infrastructure and deploying robust cloud-native solutions.",
    image: "/enterprise.jpg",
  },
  {
    id: "semiconductors",
    title: "SEMICONDUCTORS",
    description: "Powering the next generation of technological advancement. Accelerating R&D cycles and optimizing yield management in chip manufacturing.",
    image: "/finance service.jpg",
  },
];

const IndustryCard = ({ industry, index }: { industry: IndustryData; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group bg-white border border-gray-100 overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[280px] shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Content Area */}
      <div className="w-full sm:w-[55%] p-6 sm:p-8 flex flex-col justify-center relative z-10 bg-white">
        <h3 className="text-xl sm:text-2xl font-black text-[#001540] mb-3 tracking-tight uppercase">
          {industry.title}
        </h3>
        <p className="text-[#4A5568] text-sm sm:text-[15px] leading-relaxed mb-6 line-clamp-3 sm:line-clamp-none">
          {industry.description}
        </p>
        <Link href={`/industries/${industry.id}`} className="flex items-center gap-2 text-[#001540] font-bold text-sm uppercase tracking-wider group/btn w-fit">
          Read More
          <span className="text-[#FFB800] text-xl transition-transform group-hover/btn:translate-x-1">→</span>
        </Link>
      </div>

      {/* Slanted Image Area */}
      <div
        className="relative w-full h-[200px] sm:h-full sm:w-[50%] sm:absolute sm:right-0 sm:top-0 z-0 overflow-hidden sm:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)]"
      >
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>
    </motion.div>
  );
};

export const IndustriesSectionGrid = () => {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container-page px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#001540] mb-4">
            Industries
          </h2>
          <div className="w-20 h-1.5 bg-[#FFB800] mx-auto rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {INDUSTRIES.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
