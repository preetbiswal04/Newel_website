import { CareersHero } from "@/components/Careers/CareersHero";
import { ValueCards } from "@/components/Careers/ValueCards";
import { BenefitsGrid } from "@/components/Careers/BenefitsGrid";
import { JobBoard } from "@/components/Careers/JobBoard";
import { BottomCTA } from "@/components/Careers/BottomCTA";

export const metadata = {
  title: "Careers | Newel",
  description:
    "Join us on our mission to accelerate the world's transition to AI-first enterprises.",
};

export default function CareersPage() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden">
      <div className="relative z-10 text-[#1a1a1a]">
        <div className="h-[100px] w-full" />
        <CareersHero />
        <div className="h-[100px] w-full" />
        <ValueCards />
        <div className="h-[100px] w-full" />
        <BenefitsGrid />
        <div className="h-[100px] w-full" />
        <JobBoard />
        <div className="h-[100px] w-full" />
        <BottomCTA />
        <div className="h-[100px] w-full" />
      </div>
    </main>
  );
}
