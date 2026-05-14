"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Facebook, 
  Instagram,
  ChevronRight
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 selection:bg-blue-600/10 selection:text-blue-600">
      <div className="container-page">
        {/* ── Header ── */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0c0c1d] tracking-tight leading-tight"
          >
            Why To Wait, Lets Connect <br className="hidden md:block" /> Now
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 w-24 bg-blue-600 mx-auto mt-8 rounded-full"
          />
        </div>

        {/* ── Contact Card ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row"
        >
          {/* Left Side: Info */}
          <div className="lg:w-[40%] bg-slate-50/50 p-10 md:p-16 border-r border-slate-100 flex flex-col justify-between">
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Our Location</p>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    504, Sunrise Business Park, Rd Number 16, Neheru Nagar, Wagle Industrial Estate, Thane West, Thane, Maharashtra 400604
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Phone size={22} />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Call Us</p>
                  <div className="space-y-1">
                    <p className="text-slate-600 font-bold">+91 9664323315</p>
                    <p className="text-slate-600 font-bold">+91 7208081012</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Email Us</p>
                  <p className="text-slate-600 font-bold">enquiry@neweltechnologies.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-16 border-t border-slate-200/60 mt-16 lg:mt-0">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Follow Us on</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-[#0c0c1d] hover:text-white transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-[#0c0c1d] hover:text-white transition-all duration-300">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1 p-10 md:p-16 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Your Subject" 
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium resize-none"
                />
              </div>

              <button className="group relative w-full md:w-auto bg-[#0c0c1d] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3 active:scale-95">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
