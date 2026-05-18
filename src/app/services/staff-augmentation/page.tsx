"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PhoneCall, 
  Users, 
  Briefcase, 
  Search, 
  Workflow, 
  ShieldCheck, 
  Layers, 
  CheckCircle2,
  Sparkles,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function ITStaffAugmentationPage() {
  const offerings = [
    {
      title: "Technology Specialists On-Demand",
      description: "Access experienced professionals across databases (Oracle, MSSQL, PostgreSQL, MongoDB), cloud (AWS, Azure), middleware (WebLogic, JBoss, Tomcat), application development, RPA, and AI/ML.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Project-Based Engagement",
      description: "Bring in specialists for specific projects — migrations, modernisation programmes, audit remediations, performance tuning — with a defined scope, timeline, and deliverables.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Embedded Team Augmentation",
      description: "Augment your existing team with Newel resources who work alongside your people — bringing specialist skills while transferring knowledge and integrating with your ways of working.",
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      title: "Managed Delivery Teams",
      description: "For larger programmes, we provide complete delivery teams — project manager, architects, developers, QA, and support — operating under Newel's delivery governance and quality standards.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Primary & Secondary Resource Coverage",
      description: "Ensure continuity during leave, attrition, or peak demand without disruption to operations or delivery through our primary and secondary resource coverage for critical roles.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Skill-Specific Sourcing",
      description: "We source and vet candidates for niche and specialist skills — reducing your sourcing overhead whether it's a specific database version or emerging AI technology.",
      icon: <Search className="w-6 h-6" />,
    },
  ];

  const tags = [
    "IT Staff Augmentation", "Contract Staffing", "Technology Talent", "DBA", "Cloud", "DevOps", "React", "Python", "RPA", "AI/ML"
  ];

  return (
    <main className="min-h-screen bg-[#E5E7EB] selection:bg-blue-500/30 selection:text-blue-900">
      {/* ── Section 1: Full-page Hero ── */}
      <section
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/AI- img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

        {/* Animated glow accents */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 container-page mx-auto py-32 flex w-full justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 w-full max-w-[720px] text-right flex flex-col items-end"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-sm font-bold tracking-wider uppercase"
            >
              <Zap size={16} className="animate-pulse" />
              Agile Talent Solutions
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              IT Staff
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Augmentation
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              The right skills, exactly when you need them — without the overhead of permanent hiring.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-end gap-10 pt-4"
            >
              {[
                { value: "100+", label: "Tech Professionals" },
                { value: "Rapid", label: "Onboarding" },
                { value: "Flexible", label: "Engagements" },
              ].map((stat) => (
                <div key={stat.label} className="text-right">
                  <p className="text-3xl md:text-4xl font-black text-white tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] text-cyan-400 font-black uppercase tracking-widest mt-1 opacity-80">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 shadow-2xl shadow-black/30 hover:shadow-cyan-400/20 active:scale-95"
              >
                <Users size={22} className="group-hover:rotate-12 transition-transform" />
                Find Your Talent
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Overview (ONLY BLACK SECTION) ── */}
      <section className="bg-black py-24 relative overflow-hidden border-t border-white/5 text-white">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
        
        <div className="container-page mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 space-y-8"
             >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-cyan-400" />
                    <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em]">Overview</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                    Scale with Precision
                  </h2>
                </div>
                <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
                  <p>
                    Technology projects don't always align with your permanent headcount. You need a senior DBA for a six-month migration, a DevOps engineer for your CI/CD pipeline, or a full delivery team for a transformation programme.
                  </p>
                  <p>
                    Newel's IT Staff Augmentation practice provides skilled, pre-vetted technology professionals on a flexible basis — allowing you to move fast without making permanent commitments you're not ready for.
                  </p>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="lg:w-1/2 relative"
             >
                <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent z-10" />
                  <img 
                    src="/home-img-7.jpg" 
                    alt="Staff Augmentation Visual" 
                    className="w-full h-full object-cover grayscale brightness-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                       <Sparkles className="w-10 h-10 text-cyan-400" />
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: WHAT WE OFFER (LIGHT GREY) ── */}
      <section className="bg-[#E5E7EB] py-32 relative overflow-hidden border-t border-slate-200">
        <div className="container-page mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">Managed Capacity</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-white shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/5 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: WHY NEWEL (LIGHT GREY) ── */}
      <section className="bg-[#E5E7EB] py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="container-page mx-auto relative z-10">
          <div className="max-w-5xl mx-auto bg-white p-12 md:p-20 rounded-[40px] border border-slate-200 shadow-xl shadow-blue-900/5">
            <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="md:w-1/3">
                  <div className="space-y-4">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">Industry Depth</span>
                    <h2 className="text-4xl font-black text-slate-950 leading-tight">Why Newel</h2>
                  </div>
               </div>
               <div className="md:w-2/3 space-y-8">
                  <p className="text-2xl font-medium text-slate-800 leading-snug">
                    Newel has 100+ professionals across financial services technology disciplines.
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-600/5 flex items-center justify-center">
                       <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-lg text-slate-500 italic leading-relaxed">
                      "We understand the domain, delivery standards, and compliance expectations — so resources integrate quickly and contribute from day one."
                    </p>
                  </div>
                  
                  {/* Client focus */}
                  <p className="text-slate-500 text-sm font-medium">
                    Our clients span NBFCs, broking firms, banks, and financial groups across India.
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-md bg-blue-600/5 border border-blue-600/20 text-xs text-blue-600 font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
