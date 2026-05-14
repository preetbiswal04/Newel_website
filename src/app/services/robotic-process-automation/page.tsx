"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PhoneCall, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck,
  Cpu,
  Workflow,
  Settings,
  Zap,
  BarChart
} from "lucide-react";
import Link from "next/link";

export default function RPA() {
  const offerings = [
    {
      title: "RPA Strategy & Roadmap",
      description: "Identify and prioritise high-impact automation opportunities across your organization with a phased roadmap that balances ROI and complexity.",
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      title: "Custom Bot Development",
      description: "Design and build intelligent bots using leading RPA platforms to automate repetitive, rules-based tasks with 100% accuracy and 24/7 availability.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: "Cognitive Automation",
      description: "Integrate AI and Machine Learning with RPA to handle unstructured data and make complex decisions — moving beyond simple task automation.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Automation CoE Setup",
      description: "Establish a Center of Excellence to govern, scale, and maintain your automation initiatives — ensuring long-term success and consistency.",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      title: "Process Mining & Optimization",
      description: "Analyze your existing workflows to uncover bottlenecks and inefficiencies — optimizing processes before they are automated.",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      title: "RPA Support & Maintenance",
      description: "Ensure your digital workforce remains productive with proactive monitoring, troubleshooting, and continuous optimization of your bot fleet.",
      icon: <Activity className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#E5E7EB] selection:bg-blue-500/30 selection:text-blue-900">
      {/* ── Section 1: Full-page Hero ── */}
      <section
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/robotic-pic.jpg')",
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
              <Sparkles size={16} className="animate-pulse" />
              Intelligent Automation
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Robotic Process
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Free your workforce from mechanical tasks. We deploy robots that behave like people, enabling your teams to focus on high-value innovation.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-end gap-10 pt-4"
            >
              {[
                { value: "92%", label: "Compliance" },
                { value: "90%", label: "Accuracy" },
                { value: "59%", label: "Cost Reduction" },
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
                Automate Now
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
                    Digital Workforce Transformation
                  </h2>
                </div>
                <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
                  <p>
                    "In our banks we have people behaving like robots doing mechanical things, tomorrow we're going to have robots behaving like people." RPA is not just about cost — it's about accuracy, compliance, and freeing human talent for creative work.
                  </p>
                  <p>
                    The benefits of RPA adoption are significant. Payback is typically reported at less than 12 months, with an average 20% of full-time equivalent capacity provided by robots — allowing your business to scale without linear headcount growth.
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
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700"
                  >
                    <source src="/robotic-vd.mp4" type="video/mp4" />
                  </video>
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

      {/* ── Section 3: WHAT WE OFFER (LIGHT GREY) ── */}
      <section className="bg-[#E5E7EB] py-32 relative overflow-hidden border-t border-slate-200">
        <div className="container-page mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">Automation Services</span>
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
                    <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">Operational Excellence</span>
                    <h2 className="text-4xl font-black text-slate-950 leading-tight">Why Newel</h2>
                  </div>
               </div>
               <div className="md:w-2/3 space-y-8">
                  <p className="text-2xl font-medium text-slate-800 leading-snug">
                    Newel has a proven track record of deploying RPA across high-stakes financial operations.
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-600/5 flex items-center justify-center">
                       <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-lg text-slate-500 italic leading-relaxed">
                      "We combine technical RPA mastery with deep process understanding — ensuring that your automations are resilient, compliant, and deliver maximum business value."
                    </p>
                  </div>
                  
                  {/* Capability grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                     <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-bold text-slate-700">Improved Compliance</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-bold text-slate-700">Quality & Accuracy</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-bold text-slate-700">Improved Productivity</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-bold text-slate-700">Cost Reduction</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
