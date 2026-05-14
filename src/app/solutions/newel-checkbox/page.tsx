"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  AlertTriangle, 
  LayoutDashboard, 
  ListTodo, 
  Share2, 
  Bell, 
  Users, 
  Link as LinkIcon, 
  BarChart3, 
  ChevronRight,
  Sparkles,
  Zap,
  Activity,
  Clock,
  ShieldCheck,
  Target
} from "lucide-react";
import Link from "next/link";

export default function NewelCheckBoxPage() {
  const problems = [
    {
      title: "No Single Source of Truth",
      desc: "Tasks live in emails, WhatsApp, and personal lists — scattered with no central visibility.",
      icon: <LayoutDashboard className="w-6 h-6 text-red-400" />,
    },
    {
      title: "Zero Accountability",
      desc: "No one knows who was responsible or why a task slipped — making escalation impossible.",
      icon: <Users className="w-6 h-6 text-red-400" />,
    },
    {
      title: "No TAT Tracking",
      desc: "Breaches are discovered too late — after the customer or regulator has already noticed.",
      icon: <Clock className="w-6 h-6 text-red-400" />,
    },
    {
      title: "Manual Reporting Overhead",
      desc: "Hours spent building status reports that should generate themselves automatically.",
      icon: <BarChart3 className="w-6 h-6 text-red-400" />,
    },
  ];

  const features = [
    {
      title: "Monthly & Team Dashboards",
      desc: "At-a-glance visibility for daily task counts, active projects, and TAT-breached items in one place.",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      title: "Smart Task Management",
      desc: "Create recurring tasks (daily, weekly, monthly) with subtasks and assign to individuals or groups.",
      icon: <ListTodo className="w-5 h-5" />,
    },
    {
      title: "CheckList View",
      desc: "Focused view of Today's Tasks, This Week, and Upcoming — so no one starts a day without a plan.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      title: "Task Transfer & Escalation",
      desc: "Close tasks or transfer them to others when needed — keeping work moving during absences.",
      icon: <Share2 className="w-5 h-5" />,
    },
    {
      title: "Alerts & Notifications",
      desc: "Automated alerts for upcoming deadlines and TAT breaches — so nothing slips through.",
      icon: <Bell className="w-5 h-5" />,
    },
    {
      title: "Team Hierarchy",
      desc: "Reflect your org structure — team leads see their team's work, and everyone knows their owner.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Core System Integration",
      desc: "Connect to existing core systems to pull task triggers from real operational events.",
      icon: <LinkIcon className="w-5 h-5" />,
    },
    {
      title: "Completed Task Review",
      desc: "Access history with timestamps and status to identify bottlenecks and improve processes.",
      icon: <Activity className="w-5 h-5" />,
    },
  ];

  const targets = [
    { title: "Compliance Teams", desc: "Managing daily, weekly, and monthly checklist obligations." },
    { title: "Loan Operations", desc: "Tracking processing tasks, follow-ups, and disbursement workflows." },
    { title: "Risk & Audit", desc: "Managing review cycles, exception tracking, and sign-off workflows." },
    { title: "Back-Office", desc: "Running EOD/BOD tasks, reconciliation, and reporting." },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      {/* ── Section 1: Hero ── */}
      <section className="relative w-full min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
           <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-cyan-600/10 blur-[180px] rounded-full animate-pulse" />
           <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full" />
        </div>

        <div className="container-page mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Target size={16} className="text-cyan-400" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">Operational Excellence</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
                Newel <br />
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  CheckBox
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-xl">
                Task management built for operations teams — not project managers. Structured, trackable, and always on time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6"
            >
               <div className="p-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-2xl shadow-cyan-500/20">
                  <div className="bg-white text-black px-10 py-5 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-transparent hover:text-white transition-all duration-300">
                    <Link href="/contact" className="flex items-center gap-3">
                      Start Your Trial <ChevronRight size={20} />
                    </Link>
                  </div>
               </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                <img 
                  src="/newel-checkbox-dashboard.png" 
                  alt="Newel CheckBox Dashboard" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The Crisis ── */}
      <section className="py-32 bg-zinc-950/50">
        <div className="container-page mx-auto">
           <div className="flex flex-col lg:flex-row gap-20 items-start">
             <div className="lg:w-1/2 lg:sticky lg:top-32">
                <span className="text-red-500 font-black text-xs uppercase tracking-[0.3em]">The Bottleneck</span>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mt-6">
                  Operational Tasks Are <br /> Falling Through <br /> the Cracks
                </h2>
                <p className="text-white/50 text-lg mt-8 leading-relaxed max-w-lg">
                  Most teams run on WhatsApp and Excel. Tasks get missed. Deadlines slip. No one knows who owns what. Newel CheckBox brings order to the chaos.
                </p>
             </div>
             
             <div className="lg:w-1/2 space-y-6">
               {problems.map((prob, idx) => (
                 <motion.div
                    key={prob.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-10 rounded-[32px] bg-white/[0.03] border border-white/5 hover:border-red-500/20 transition-all duration-500"
                 >
                   <div className="flex gap-8 items-start">
                     <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0">
                       {prob.icon}
                     </div>
                     <div>
                       <h3 className="text-xl font-bold mb-3">{prob.title}</h3>
                       <p className="text-white/40 text-sm leading-relaxed">{prob.desc}</p>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* ── Section 3: Platform Features ── */}
      <section className="py-32">
        <div className="container-page mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
             <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em]">Platform Features</span>
             <h2 className="text-4xl md:text-6xl font-black text-white">Structure Your Ops. <br /> Own Your Day.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold mb-4">{feat.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Who It's For ── */}
      <section className="py-32 bg-cyan-950/20 rounded-[60px] mx-4 my-10 relative overflow-hidden">
        <div className="container-page mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
               <div className="space-y-6">
                  <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                    Built for <br />
                    <span className="text-cyan-400">Financial Ops.</span>
                  </h2>
                  <p className="text-xl text-white/60 font-medium max-w-lg">
                    Designed for the reality of financial services — where tasks are recurring, deadlines are regulatory, and accountability is non-negotiable.
                  </p>
               </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {targets.map((target, idx) => (
                 <div key={idx} className="p-10 rounded-[32px] bg-white/[0.05] border border-white/10 hover:bg-cyan-500 hover:text-black transition-all duration-500 group">
                    <h4 className="text-2xl font-black mb-4">{target.title}</h4>
                    <p className="text-white/40 group-hover:text-black/70 text-sm leading-relaxed">{target.desc}</p>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="mt-20 p-10 rounded-3xl bg-white/5 text-center border border-white/10">
             <p className="text-lg font-medium text-white/70 italic">
               "Ideal for any team that currently runs operations through WhatsApp, email, or Excel."
             </p>
          </div>
        </div>
      </section>

      {/* ── Section 5: Why CheckBox ── */}
      <section className="py-32">
        <div className="container-page mx-auto">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black">Why Newel CheckBox</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Designed for Ops, Not Projects", desc: "Built around recurring rhythms — daily, weekly, and monthly tasks that keep ops running." },
                { title: "TAT Enforcement Built In", desc: "Set turnaround time expectations and get alerts before the breach happens." },
                { title: "Zero Spreadsheet Dependency", desc: "Replace status emails and Excel trackers with automated visibility." }
              ].map((item, idx) => (
                <div key={idx} className="p-10 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-6">
                   <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <ShieldCheck size={24} />
                   </div>
                   <h3 className="text-xl font-bold">{item.title}</h3>
                   <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-40 text-center">
         <div className="container-page mx-auto space-y-12">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
              Stop the <br />
              <span className="text-cyan-400">Chaos Today.</span>
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-cyan-400 text-black font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-cyan-400/20"
            >
              Get Started <ChevronRight size={24} />
            </Link>
         </div>
      </section>
    </main>
  );
}
