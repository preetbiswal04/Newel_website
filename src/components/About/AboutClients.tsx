"use client";

import React from "react";
import { motion } from "framer-motion";

const CLIENTS = [
  { name: "JM FINANCIAL", class: "font-serif font-bold uppercase tracking-wide text-xl md:text-2xl" },
  { name: "IIFL", class: "font-sans font-black uppercase tracking-widest text-2xl md:text-3xl" },
  { name: "nuvama", class: "font-sans font-medium lowercase tracking-tighter text-2xl md:text-3xl" },
  { name: "RELIANCE", class: "font-sans font-extrabold uppercase tracking-widest text-lg md:text-xl" },
  { name: "Avanse", class: "font-sans italic font-bold tracking-tight text-xl md:text-2xl" },
  { name: "HeroFinCorp", class: "font-serif font-bold tracking-tight text-xl md:text-2xl" },
  { name: "SHAREKHAN", class: "font-sans font-black uppercase text-xl md:text-2xl" },
  { name: "YES SECURITIES", class: "font-sans font-semibold uppercase tracking-widest text-base md:text-lg" },
  { name: "CREDIT SAISON", class: "font-serif font-bold uppercase tracking-wider text-lg md:text-xl" },
  { name: "TATA MOTORS", class: "font-sans font-black uppercase tracking-widest text-lg md:text-xl" },
  { name: "Alpha Alternatives", class: "font-serif italic font-semibold text-lg md:text-xl" },
  { name: "Edelweiss", class: "font-sans font-light uppercase tracking-[0.2em] md:tracking-[0.3em] text-base md:text-lg" },
  { name: "RBL BANK", class: "font-sans font-black uppercase tracking-tighter text-xl md:text-2xl" },
  { name: "chiratae", class: "font-serif italic lowercase tracking-wide text-2xl md:text-3xl" },
  { name: "ACE LANSDOWNE", class: "font-serif uppercase tracking-widest text-base md:text-lg" },
  { name: "MOTILAL OSWAL", class: "font-sans font-semibold uppercase tracking-wide text-lg md:text-xl" },
  { name: "AMBIT", class: "font-serif font-black uppercase tracking-widest text-xl md:text-2xl" },
  { name: "VERTIV", class: "font-sans font-black uppercase tracking-tighter text-xl md:text-2xl" },
  { name: "envea", class: "font-sans font-bold lowercase tracking-normal text-2xl md:text-3xl" },
  { name: "Bandhan", class: "font-serif font-bold tracking-wide text-xl md:text-2xl" },
  { name: "Gallagher", class: "font-serif font-medium tracking-wide text-xl md:text-2xl" }
];

export const AboutClients = () => {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A] relative border-t border-white/5">
      <div className="container-page relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium leading-[1.2] text-white/90"
          >
            Our Efforts Have <span className="text-blue-500">Transformed</span> How You <br className="hidden md:block" /> Experience These <span className="text-blue-500">Global Leaders</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-16 items-center justify-items-center">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="w-full flex items-center justify-center group cursor-pointer p-2"
            >
              <h3 className={`text-white/90 group-hover:text-white group-hover:scale-105 transition-all duration-500 text-center drop-shadow-sm ${client.class}`}>
                {client.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
