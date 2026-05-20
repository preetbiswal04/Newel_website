"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send
} from "lucide-react";

// Custom SVGs for missing brand icons in this Lucide version
const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function ContactPage() {
  // Use the backend URL from env so local and production can point to different servers.
  const contactApiBase = (
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
  )
    .trim()
    .replace(/\/$/, "");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(`${contactApiBase}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-16 selection:bg-blue-600/10 selection:text-blue-600">
      <div className="container-page">
        {/* ── Header ── */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0c0c1d] tracking-tight leading-tight"
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
          <div className="lg:w-[40%] bg-white p-8 md:p-12 border-r border-slate-100 flex flex-col justify-between">
            <div className="space-y-8">
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
            <div className="pt-10 border-t border-slate-200/60 mt-10 lg:mt-0">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Follow Us on</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-[#0c0c1d] hover:text-white transition-all duration-300">
                  <FacebookIcon size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-[#0c0c1d] hover:text-white transition-all duration-300">
                  <InstagramIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1 p-8 md:p-12 bg-white">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {submitStatus === "success" && (
                <div className="p-4 mb-6 bg-green-50 border border-green-200 rounded-2xl">
                  <p className="text-green-700 font-semibold">
                    ✓ Message sent successfully! We'll contact you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 mb-6 bg-red-50 border border-red-200 rounded-2xl">
                  <p className="text-red-700 font-semibold">
                    ✗ Error: {errorMessage}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Your Phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                />
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Your Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              <div className="space-y-2">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-white focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="group relative w-full md:w-auto bg-[#0c0c1d] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
