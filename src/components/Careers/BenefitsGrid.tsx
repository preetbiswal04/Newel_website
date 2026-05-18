"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Coins,
  PieChart,
  MapPin,
  Users2,
  Calendar,
  Eye,
  Rocket,
  Coffee,
} from "lucide-react";

const BENEFITS = [
  {
    icon: <Heart size={18} />,
    title: "Healthcare",
    description:
      "Happy and healthy go together. We cover medical, dental, and vision for you and yours.",
  },
  {
    icon: <Coins size={18} />,
    title: "Competitive comp",
    description:
      "Have a real stake in your job and your future with competitive stock options.",
  },
  {
    icon: <PieChart size={18} />,
    title: "401k / PF",
    description:
      "Employees can easily save for the future through simple, automatic contributions.",
  },
  {
    icon: <Users2 size={18} />,
    title: "Company events",
    description: "We're driven and we enjoy the ride — with year-round team events.",
  },
  {
    icon: <Rocket size={18} />,
    title: "Learning & development",
    description:
      "We offer a learning stipend to help you grow and achieve your goals.",
  },
  {
    icon: <Eye size={18} />,
    title: "Transparent culture",
    description:
      "By default, we keep things open and accessible to make better decisions together, faster.",
  },
];

export const BenefitsGrid = () => {
  return (
    <section 
      className="py-[60px] bg-transparent"
    >
      <div className="container-page">
        {/* Section heading */}
        <div className="mb-10">
          <p 
            className="uppercase tracking-[2px] font-semibold mb-2 text-purple-600"
          >
            Benefits
          </p>
          <h2 className="text-[36px] font-bold text-gray-900 mb-10 leading-tight">
            Everything you need to do your best work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)" }}
              className="bg-white rounded-[16px] border border-purple-100 transition-all duration-300 flex flex-col h-full group"
              style={{ padding: "30px 28px" }}
            >
              {/* Icon Container */}
              <div 
                className="flex items-center justify-center shrink-0 transition-colors duration-300"
                style={{ 
                  width: "48px", 
                  height: "48px", 
                  background: "#f5f3ff", 
                  color: "#7c3aed", 
                  borderRadius: "12px", 
                  marginBottom: "18px" 
                }}
              >
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-bold text-gray-900 mb-[10px] leading-[1.3] group-hover:text-purple-600 transition-colors">
                {benefit.title}
              </h3>

              {/* Text */}
              <p className="text-gray-500 text-[14px] leading-[1.6]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
