"use client";

import React, { useState } from "react";
import { Plus, Minus, Flame } from "lucide-react";
import { Button } from "@/components/Utils/Button";

const JOBS = [
  {
    id: "asp-net-mvc",
    title: "ASP.NET MVC",
    requirements: "Requirements:-",
    experience: "3 + Year",
    skills: "ASP.NET MVC DEVELOPER WEB API SQL SERVER JAVASCRIPT ANGULAR JS"
  },
  {
    id: "net-core",
    title: ".NET CORE",
    requirements: "Requirements:-",
    experience: "3 + Year",
    skills: ".NET CORE DEVELOPER C# SQL SERVER AZURE"
  },
  {
    id: "business-analyst",
    title: "BUSINESS ANALYST",
    requirements: "Requirements:-",
    experience: "2 + Year",
    skills: "REQUIREMENT GATHERING AGILE JIRA SQL POWERBI"
  }
];

export const JobBoard = () => {
  const [openJob, setOpenJob] = useState<string | null>("asp-net-mvc");

  const toggleJob = (id: string) => {
    setOpenJob(openJob === id ? null : id);
  };

  return (
    <section id="open-positions" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container-page flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Accordion */}
        <div className="flex-1 w-full max-w-2xl">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#0A1128] mb-10 tracking-tight">
            We are looking for
          </h2>

          <div className="flex flex-col gap-4">
            {JOBS.map((job) => {
              const isOpen = openJob === job.id;
              
              return (
                <div 
                  key={job.id} 
                  className={`bg-white transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-t-[3px] border-orange-500 shadow-[0_10px_40px_rgba(0,0,0,0.06)]' 
                      : 'border-b border-slate-200'
                  }`}
                >
                  {/* Header */}
                  <button 
                    onClick={() => toggleJob(job.id)}
                    className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-[15px] text-[#0A1128] uppercase tracking-wide">
                      {job.title}
                    </span>
                    <span className={isOpen ? "text-orange-500" : "text-[#0A1128]"}>
                      {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {/* Body */}
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[400px] pb-8 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="w-full h-px bg-slate-100 mb-6" />
                    
                    <div className="space-y-3 text-[14px] text-[#4A5568] font-medium mb-8">
                      <p className="text-[#3182CE]">{job.requirements}</p>
                      <p><span className="font-bold text-[#2D3748]">Experience :</span> {job.experience}</p>
                      <p><span className="font-bold text-[#2D3748]">Skills :</span> {job.skills}</p>
                    </div>

                    <Button 
                      variant="secondary" 
                      size="md" 
                      href="/contact" 
                      icon={<Flame size={16} />}
                      className="bg-[#0A1128] text-white hover:bg-slate-800 rounded-lg px-8 shadow-md"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Illustration/Image */}
        <div className="flex-1 hidden lg:flex items-center justify-center sticky top-32">
          {/* We use a high-quality relevant image as a placeholder for the isometric vector */}
          <div className="relative w-full max-w-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
              alt="Team collaboration" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};
