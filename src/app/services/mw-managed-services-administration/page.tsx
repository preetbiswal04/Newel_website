"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PhoneCall, 
  Activity, 
  Settings, 
  ShieldCheck, 
  Workflow, 
  Search, 
  BarChart3, 
  CheckCircle2,
  Sparkles,
  Shield,
  Layers,
  Zap,
  Server
} from "lucide-react";
import Link from "next/link";

export default function MWManagedServicesPage() {
  const offerings = [
    {
      title: "24x7 Middleware Monitoring & Support",
      description: "Round-the-clock monitoring of your middleware environments with alert-based incident response, defined escalation paths, and SLA-backed resolution — minimising application downtime.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Administration & Configuration Management",
      description: "Ongoing administration of WebLogic, WebSphere, JBoss, Tomcat, nginx, and IIS — including deployment support, configuration management, datasource administration, and user management.",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      title: "Patch Management",
      description: "Systematic middleware patching — applying security patches, critical fixes, and minor updates with change-controlled processes, pre-production validation, and rollback procedures.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Deployment Support",
      description: "Manage application deployments across middleware environments — coordinating release windows, executing deployments, monitoring post-deployment health, and managing rollbacks if required.",
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      title: "Log Analysis & Troubleshooting",
      description: "Analyse middleware logs to diagnose and resolve application errors, connectivity issues, performance degradation, and unexpected failures — with root-cause analysis and remediation documentation.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Governance & Reporting",
      description: "Weekly health reports covering middleware availability, incidents, patch status, and performance trends — giving application and infrastructure teams full operational visibility.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  const tags = [
    "Middleware Managed Services", "WebLogic", "WebSphere", "JBoss", "Tomcat", "nginx", "IIS", "24x7 Support"
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* ── Section 1: Full-page Hero ── */}
      <section
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/home-img-7.jpg')",
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
              <Layers size={16} className="animate-pulse" />
              Connective Tissue Excellence
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Middleware Managed
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Services & Admin
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Keep your middleware layer healthy, stable, and continuously optimised — without the overhead of in-house expertise.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-end gap-10 pt-4"
            >
              {[
                { value: "24/7", label: "Monitoring" },
                { value: "Zero", label: "Message Loss" },
                { value: "SLA", label: "Guaranteed" },
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
                <PhoneCall size={22} className="group-hover:rotate-12 transition-transform" />
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Overview ── */}
      <section className="bg-black py-24 relative overflow-hidden border-t border-white/5">
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
                    The Critical Glue of Enterprise IT
                  </h2>
                </div>
                <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
                  <p>
                    Middleware is the connective tissue of enterprise IT — and when it fails, everything fails.
                  </p>
                  <p>
                    WebLogic, WebSphere, JBoss, Tomcat, and nginx sit between your applications and your infrastructure, handling critical functions like transaction management, message queuing, and service orchestration. Newel ensures stability, performance, and security for these foundational systems.
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
                    alt="Middleware Managed Services Visual" 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                       <Zap className="w-10 h-10 text-cyan-400" />
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: WHAT WE OFFER ── */}
      <section className="bg-zinc-950 py-32 relative overflow-hidden">
        <div className="container-page mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em]">Full-Stack Control</span>
            <h2 className="text-4xl md:text-6xl font-black text-white">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: WHY NEWEL ── */}
      <section className="bg-black py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="container-page mx-auto relative z-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/[0.05] to-transparent p-12 md:p-20 rounded-[40px] border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="md:w-1/3">
                  <div className="space-y-4">
                    <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em]">Seamless Integration</span>
                    <h2 className="text-4xl font-black text-white leading-tight">Why Newel</h2>
                  </div>
               </div>
               <div className="md:w-2/3 space-y-8">
                  <p className="text-2xl font-medium text-white/90 leading-snug">
                    Newel's full-stack ownership model covers Database → OS → Middleware → Application.
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                       <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-lg text-white/60 italic leading-relaxed">
                      "A single vendor managing your entire stack eliminates cross-vendor finger-pointing and significantly reduces MTTR when issues arise."
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/40 font-bold uppercase tracking-widest">
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
