import React from "react";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, CASE_STUDIES } from "@/data/caseStudies";
import { CaseDetailHero } from "@/components/CaseStudy/CaseDetailHero";
import { ThreePillars } from "@/components/CaseStudy/ThreePillars";
import { ScrollProgress } from "@/components/CaseStudy/ScrollProgress";
import { FloatingCTA } from "@/components/CaseStudy/FloatingCTA";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.client || 'Case Study'} | Newel Technologies`,
    description: caseStudy.teaser || caseStudy.subtitle,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const isBlackTheme = true;

  return (
    <main className={`min-h-screen relative transition-colors duration-700 bg-[#050505] text-white`}>
      <ScrollProgress isDark={isBlackTheme} />
      <CaseDetailHero 
        title={caseStudy.innerTitle || caseStudy.title}
        video={caseStudy.video}
        image={caseStudy.image}
        isDark={isBlackTheme}
      />
      
      <div className={isBlackTheme ? "dark-theme-content" : ""}>
        <ThreePillars 
          overview={caseStudy.overview}
          location={caseStudy.location}
          year={caseStudy.year}
          services={caseStudy.services}
          input={caseStudy.input}
          reasoning={caseStudy.reasoning}
          outcomes={caseStudy.outcomes}
          isDark={isBlackTheme}
        />
      </div>

      {/* Vertical Spacer for Footer breathing room */}
      <div className="h-[200px] w-full" />
      
      <FloatingCTA isDark={isBlackTheme} />
    </main>
  );
}
