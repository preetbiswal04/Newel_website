"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, MonitorPlay, LayoutGrid, Database, ArrowRight } from "lucide-react";

export const TransformationSection = () => {
  const cards = [
    {
      icon: <RefreshCw size={24} />,
      title: "Strategic Technology Consulting",
      desc: "From architecture audits to digital transformation strategy, we help leaders align technology with business goals for measurable ROI.",
      btnText: "View Consulting Services",
    },
    {
      icon: <MonitorPlay size={24} />,
      title: "Digital Product Development",
      desc: "As your digital product engineering company, we handle the full lifecycle of software development—from cloud applications to ERP systems.",
      btnText: "View Product Engineering",
    },
    {
      icon: <LayoutGrid size={24} />,
      title: "AI, Data and Analytics Solutions",
      desc: "We integrate advanced AI, generative AI, and machine learning models to automate operations and personalize experiences at scale.",
      btnText: "View AI Services",
    },
    {
      icon: <Database size={24} />,
      title: "Cloud Operations & Cybersecurity",
      desc: "We engineer cloud-native environments rooted in Zero Trust principles, ensuring your infrastructure is as scalable as it is impenetrable.",
      btnText: "View Cloud Services",
    },
  ];

  return (
    <section
      className="relative w-full py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/abstract-textured-backgound%20(1).jpg')" }}
    >
      {/* Background is fully visible */}

      <div className="container-page w-full relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[44px] leading-tight text-slate-900 tracking-tight"
          >
            <span className="font-medium">Beyond Development.</span><br />
            <span className="font-bold">We Deliver Transformation.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex"
            >
              <motion.div
                whileHover="hover"
                transition={{
                  duration: 1,
                  ease: "backInOut",
                }}
                variants={{
                  hover: {
                    scale: 1.05,
                  },
                }}
                className="relative h-[420px] w-full shrink-0 overflow-hidden rounded-xl bg-purple-500 p-8 shadow-lg cursor-pointer"
              >
                <div className="relative z-10 text-white flex flex-col h-full pointer-events-none">
                  <span className="mb-4 block w-fit rounded-full bg-white/30 p-2 text-white">
                    {card.icon}
                  </span>

                  <motion.h3
                    initial={{ scale: 0.95 }}
                    variants={{
                      hover: {
                        scale: 1,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                    }}
                    className="mb-3 block origin-top-left text-2xl font-black leading-[1.2]"
                  >
                    {card.title}
                  </motion.h3>

                  <p className="text-white/90 text-[14px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <button className="absolute bottom-6 left-6 right-6 z-20 rounded border-2 border-white bg-white py-3 text-center text-[13px] font-black uppercase tracking-wider text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white shadow-sm">
                  {card.btnText}
                </button>

                <SquishyBackground />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full flex justify-center mt-12 md:mt-16"
        >
          <button className="text-[14px] font-bold text-slate-900 border-2 border-slate-900 rounded-full px-8 py-3 hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-lg hover:-translate-y-1">
            View All Services
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const SquishyBackground = () => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      preserveAspectRatio="none"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};
