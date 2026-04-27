import React from "react";
import { CaseStudyHero } from "@/components/CaseStudy/CaseStudyHero";
import { CaseStudyGrid } from "@/components/CaseStudy/CaseStudyGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Newel Technologies",
  description: "Explore how Newel Technologies partners with industry leaders to build, scale, and govern AI-first enterprises.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ff]">
      <div className="h-[150px] w-full" />
      <CaseStudyHero />
      <div className="h-[150px] w-full" />
      <CaseStudyGrid />
      <div className="h-[200px] w-full" />
    </main>
  );
}
