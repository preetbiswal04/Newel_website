"use client";

import React from "react";
import { motion } from "framer-motion";
import { AboutHero } from "@/components/About/AboutHero";
import { AboutStats } from "@/components/About/AboutStats";
import { AboutTimeline } from "@/components/About/AboutTimeline";
import { AboutClients } from "@/components/About/AboutClients";
import { AboutROI } from "@/components/About/AboutROI";
import { AboutResponsibilities } from "@/components/About/AboutResponsibilities";
import { AboutDivisions } from "@/components/About/AboutDivisions";
import { AboutEmployeeTestimonials } from "@/components/About/AboutEmployeeTestimonials";
import { AboutLeadership } from "@/components/About/AboutLeadership";
import { AboutEnergy } from "@/components/About/AboutEnergy";
import { BeyondWorkSection } from "@/components/BeyondWork/BeyondWorkSection";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <AboutHero />
      <AboutStats />
      <AboutTimeline />
      <AboutClients />
      <AboutROI />
      <AboutResponsibilities />
      <AboutDivisions />
      <AboutEmployeeTestimonials />
      <AboutEnergy />
      <AboutLeadership />
      <BeyondWorkSection />
    </main>
  );
}
