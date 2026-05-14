"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ShieldCheck } from "lucide-react";

export const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const hasShown = useRef(false);

  useEffect(() => {
    // Don't re-show if already dismissed this session
    const dismissed = sessionStorage.getItem("exitPopupDismissed");
    if (dismissed) return;

    const trigger = () => {
      if (!hasShown.current) {
        hasShown.current = true;
        setVisible(true);
      }
    };

    // Primary: fires when mouse exits the document viewport from the TOP
    // (toward browser chrome — back button, address bar, tabs)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        trigger();
      }
    };

    // Fallback: mouseout with no relatedTarget means mouse left the page entirely
    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) {
        trigger();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("exitPopupDismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("exitPopupDismissed", "true");
    }, 2500);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-[9999] inset-0 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-4xl pointer-events-auto flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl shadow-black/60">

              {/* ── Left Panel ── */}
              <div
                className="lg:w-5/12 relative flex flex-col justify-between p-10 md:p-12 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0f0c1d 0%, #1a1040 50%, #0d1a3a 100%)",
                }}
              >
                {/* Glow accents */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/20 blur-[60px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-cyan-300 text-xs font-bold tracking-widest uppercase">
                    <Sparkles size={12} className="animate-pulse" />
                    Leaving Already?
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    Let&apos;s Build Something{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Extraordinary
                    </span>
                  </h2>

                  <p className="text-white/60 text-sm leading-relaxed">
                    Thousands of enterprises trust Newel to transform their operations with AI. Don&apos;t leave without telling us your goals — we&apos;ll come back with a tailored strategy.
                  </p>
                </div>

                {/* Trust badge */}
                <div className="relative z-10 mt-8 flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <ShieldCheck size={20} className="text-cyan-400 shrink-0" />
                  <p className="text-xs text-white/50 leading-snug">
                    <span className="text-white/80 font-semibold">Fast 2-minute response.</span>{" "}
                    Fully NDA-protected & confidential.
                  </p>
                </div>
              </div>

              {/* ── Right Panel: Form ── */}
              <div className="lg:w-7/12 bg-white flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between px-8 pt-8 pb-4 border-b border-slate-100">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Free Consultation</p>
                    <h3 className="text-lg font-black text-slate-900 leading-tight">
                      Share Your Requirements
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Help our experts understand your vision and create a customized plan.</p>
                  </div>
                  <button
                    onClick={handleClose}
                    aria-label="Close popup"
                    className="ml-4 mt-1 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors duration-200 shrink-0"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Form / Success */}
                <div className="flex-1 px-8 py-6">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-2">
                          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-black text-slate-900">Message Received!</h4>
                        <p className="text-slate-500 text-sm max-w-xs">Our team will reach out within 2 minutes. Get ready to build something great.</p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        id="exit-intent-form"
                      >
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label htmlFor="exit-name" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</label>
                            <input
                              id="exit-name"
                              type="text"
                              required
                              placeholder="Your full name"
                              value={form.name}
                              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="exit-email" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Company Email *</label>
                            <input
                              id="exit-email"
                              type="email"
                              required
                              placeholder="you@company.com"
                              value={form.email}
                              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-1">
                          <label htmlFor="exit-phone" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Number</label>
                          <input
                            id="exit-phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={form.phone}
                            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                          />
                        </div>

                        {/* Message */}
                        <div className="space-y-1">
                          <label htmlFor="exit-message" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Describe Your Project</label>
                          <textarea
                            id="exit-message"
                            rows={3}
                            placeholder="Help us come back better prepared — share your goals, challenges, or ideas..."
                            value={form.message}
                            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          id="exit-intent-submit"
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 active:scale-[0.98]"
                        >
                          <Send size={16} />
                          Submit — Get a Free Strategy Session
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
