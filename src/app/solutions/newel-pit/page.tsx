"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Activity, 
  Clock, 
  FileText, 
  Search, 
  ArrowRight,
  Sparkles,
  Database,
  Users,
  Settings,
  Lock,
  Calendar,
  Smartphone,
  ChevronRight,
  TrendingUp,
  BarChart3
} from "lucide-react";
import Link from "next/link";

export default function NewelPITPage() {
  const problemPoints = [
    {
      title: "Spreadsheet-Based Tracking",
      desc: "Blackout periods, pre-clearances, and trade declarations managed in Excel — error-prone and invisible to regulators.",
      icon: <FileText className="w-6 h-6 text-orange-400" />,
    },
    {
      title: "Email Approval Chains",
      desc: "No SLA enforcement, no audit trail, and no automatic expiry — stale approvals slip through unnoticed.",
      icon: <Zap className="w-6 h-6 text-orange-400" />,
    },
    {
      title: "Zero Real-Time Surveillance",
      desc: "Violations are discovered after the fact. Manual checks can't keep pace with trading activity.",
      icon: <Activity className="w-6 h-6 text-orange-400" />,
    },
    {
      title: "Audit-Unready Documentation",
      desc: "Scrambling to reconstruct audit trails from inboxes — adding risk to an already stressful process.",
      icon: <Shield className="w-6 h-6 text-orange-400" />,
    },
  ];

  const modules = [
    {
      id: "01",
      title: "Insider & Access Management",
      points: [
        "Role-based access — Administrator, Compliance Officer, Insider, Auditor",
        "Connected person mapping covering immediate relatives and corporate entities",
        "Complete effective-date tracking with timestamps and change history",
      ],
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "02",
      title: "Trading Window & Blackout Control",
      points: [
        "Automated closures triggered by financial results, board meetings, and UPSI events",
        "Visual blackout calendar with insider-category-specific restriction rules",
        "Emergency overrides logged with full audit trail",
      ],
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: "03",
      title: "Trade Pre-Clearance & Approval",
      points: [
        "Digital requests submitted in under 5 minutes — no paper, no email",
        "SLA-backed approvals: 24h standard, 4h urgent, with escalation",
        "Real-time rule validation — blackout check, holding period, and threshold",
      ],
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: "04",
      title: "Trade Declaration & Disclosure",
      points: [
        "Post-trade declarations linked to original pre-clearance — full traceability",
        "OCR-based broker contract note upload and validation",
        "Achieving 99.7% on-time declaration rate",
      ],
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: "05",
      title: "Surveillance & Rule Engine",
      points: [
        "No-code, visual rule builder for compliance teams",
        "Real-time violation detection in under 1 minute",
        "Dynamic insider risk scoring with tailored monitoring intensity",
      ],
      icon: <Search className="w-5 h-5" />,
    },
    {
      id: "06",
      title: "Dashboards, MIS & Reporting",
      points: [
        "Executive and operational dashboards for compliance status",
        "Pre-formatted SEBI disclosure reports: Form A, B, C, D",
        "Standard reports in under 30 seconds",
      ],
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  const benefits = [
    { label: "Reduction in manual effort", value: "75%" },
    { label: "Reduction in violations", value: "90%" },
    { label: "Platform uptime SLA", value: "99.9%" },
    { label: "Audit query response time", value: "<1 Day" },
  ];

  const roadmap = [
    {
      period: "Q3 2025",
      title: "AI-Based Anomaly Detection",
      desc: "Machine learning algorithms analyse trading patterns to surface suspicious activity rule-based systems miss.",
    },
    {
      period: "Q4 2025",
      title: "Mobile App for Insiders",
      desc: "Native iOS and Android — pre-clearance requests and trade declarations on the go.",
    },
    {
      period: "Q1 2026",
      title: "Regulator Portal Integration",
      desc: "Direct API integration with SEBI and stock exchange portals for automated submissions.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      {/* ── Section 1: Hero (Matching SS Layout) ── */}
      <section className="relative w-full min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[160px] rounded-full animate-pulse" />
           <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container-page mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Content */}
          <div className="lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">Next-Gen Compliance</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
                Newel <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  PIT
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-xl">
                End-to-end SEBI PIT Compliance — automated, audit-ready, and built for NBFCs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6"
            >
               <div className="p-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 shadow-2xl shadow-cyan-500/20">
                  <div className="bg-white text-black px-10 py-5 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-transparent hover:text-white transition-all duration-300">
                    <Link href="/contact" className="flex items-center gap-3">
                      Request Demo <ChevronRight size={20} />
                    </Link>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:w-1/2 relative perspective-1000"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img 
                  src="/newel-pit-dashboard.png" 
                  alt="Newel PIT Dashboard" 
                  className="w-full h-auto shadow-inner"
                  onError={(e) => {
                    // Fallback to a placeholder if the image fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hidden md:block">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                      <CheckCircle2 size={24} />
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase text-white/50">Status</p>
                      <p className="text-sm font-bold">100% Compliant</p>
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section className="py-32 bg-zinc-950/50">
        <div className="container-page mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-orange-500 font-black text-xs uppercase tracking-[0.3em]">The Crisis</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                PIT Compliance Is Broken <br /> When It's Manual
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                SEBI's PIT Regulations carry penalties of up to ₹25 Cr. Yet most manage it through spreadsheets — leaving them exposed to operational blind spots.
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {problemPoints.map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-orange-500/30 transition-all duration-500 group"
                >
                  <div className="mb-6 p-3 rounded-xl bg-orange-500/10 w-fit group-hover:bg-orange-500 group-hover:text-black transition-all duration-500">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Solution / Modules ── */}
      <section className="py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 blur-[200px] rounded-full pointer-events-none" />
        
        <div className="container-page mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
            <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em]">Platform Modules</span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">One Platform. <br /> Zero Guesswork.</h2>
            <p className="text-white/50 text-lg">Everything you need to manage exceptions, not processes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod, idx) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500 h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black text-white/10 group-hover:text-cyan-400/20 transition-colors">{mod.id}</span>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    {mod.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white leading-tight">{mod.title}</h3>
                <ul className="space-y-4 flex-1">
                  {mod.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-white/50 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            
            {/* Last item: Audit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 flex flex-col justify-center text-center space-y-6"
            >
               <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto">
                 <Shield size={40} />
               </div>
               <h3 className="text-2xl font-bold text-white">Audit & Training</h3>
               <p className="text-white/60 text-sm leading-relaxed">
                 Immutable logs with cryptographic integrity and mandatory insider training with 98% completion tracking.
               </p>
               <button className="text-cyan-400 font-bold flex items-center gap-2 justify-center hover:gap-4 transition-all">
                  Full Feature List <ChevronRight size={18} />
               </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Why Newel PIT (Stats) ── */}
      <section className="py-32 bg-white text-black rounded-[60px] mx-4 my-10 relative overflow-hidden">
        <div className="container-page mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                  <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                    Built for <br />
                    <span className="text-blue-600">Compliance Teams.</span>
                  </h2>
                  <p className="text-xl text-black/60 font-medium">
                    Not IT Departments. Designed by professionals who understand the operational rhythms of SEBI regulations.
                  </p>
               </div>
               
               <div className="grid grid-cols-2 gap-8">
                  {benefits.map((b) => (
                    <div key={b.label} className="space-y-2">
                       <p className="text-5xl font-black tracking-tighter">{b.value}</p>
                       <p className="text-xs font-bold uppercase tracking-widest text-black/40">{b.label}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
               {[
                 { title: "100% SEBI PIT Aligned", desc: "Built ground-up to comply with SEBI Regulations, 2015 and Schedule B." },
                 { title: "No IT Dependency", desc: "Configure rules and manage insiders without raising IT tickets." },
                 { title: "Cloud-Native & Secure", desc: "Enterprise-grade encryption and 99.9% uptime SLA." },
                 { title: "Audit-Ready Always", desc: "Immutable logs mean you're never scrambling when auditors arrive." }
               ].map((item, idx) => (
                 <div key={idx} className="p-8 rounded-3xl bg-black/5 flex gap-6 items-start hover:bg-black hover:text-white transition-all duration-500 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                       <CheckCircle2 size={16} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                       <p className="text-black/50 group-hover:text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Roadmap ── */}
      <section className="py-32 relative">
        <div className="container-page mx-auto">
           <div className="text-center mb-20 space-y-4">
              <span className="text-indigo-400 font-black text-xs uppercase tracking-[0.3em]">Future Vision</span>
              <h2 className="text-4xl md:text-6xl font-black text-white">What's Coming</h2>
           </div>

           <div className="relative">
              {/* Line */}
              <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block" />

              <div className="space-y-20">
                 {roadmap.map((item, idx) => (
                   <div key={item.period} className={`flex flex-col lg:flex-row gap-10 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                      <div className="lg:w-1/2 flex justify-center lg:justify-end">
                         <div className={`p-8 rounded-[40px] bg-white/[0.02] border border-white/5 max-w-md space-y-4 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                            <span className="text-cyan-400 font-black text-sm uppercase tracking-widest">{item.period}</span>
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                         </div>
                      </div>
                      <div className="relative z-10 w-12 h-12 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center hidden lg:flex">
                         <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                      </div>
                      <div className="lg:w-1/2" />
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── CTA Footer ── */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-cyan-500/10" />
        <div className="container-page mx-auto relative z-10 text-center space-y-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
            Ready for <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Seamless Compliance?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link 
               href="/contact" 
               className="px-12 py-6 rounded-2xl bg-white text-black font-black text-lg hover:bg-cyan-400 transition-all duration-300"
             >
               Talk to a Specialist
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
