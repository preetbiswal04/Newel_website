import AboutHero from "@/components/About/AboutHero";
import DecadeTimeline from "@/components/About/DecadeTimeline";
import ClientLogos from "@/components/About/ClientLogos";
import AwardsRecognition from "@/components/About/AwardsRecognition";
import PhilosophyCulture from "@/components/About/PhilosophyCulture";
import FlagshipSpotlights from "@/components/About/FlagshipSpotlights";
import TestimonialsSection from "@/components/About/TestimonialsSection";
import LeadershipGrid from "@/components/About/LeadershipGrid";
import SocietyWorkplace from "@/components/About/SocietyWorkplace";
import FAQSection from "@/components/About/FAQSection";

export const metadata = {
  title: "About Us | Newel Technologies — 500+ Engineers, 200+ Digital Products",
  description:
    "Learn about Newel Technologies — a digital engineering powerhouse trusted by enterprises across 35+ industries to transform bold visions into market-leading realities.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* 1. Hero — full viewport dark video background */}
      <AboutHero />
      <div className="h-[100px] w-full" />

      {/* 2. Timeline — white bg */}
      <DecadeTimeline />
      <div className="h-[100px] w-full" />

      {/* 3. Client Logos — light gray bg */}
      <ClientLogos />
      <div className="h-[100px] w-full" />

      {/* 4. Awards — white bg */}
      <AwardsRecognition />
      <div className="h-[100px] w-full" />

      {/* 5. Philosophy & Culture — light gray bg */}
      <PhilosophyCulture />
      <div className="h-[100px] w-full" />

      {/* 6. Flagship Spotlights — dark bg */}
      <FlagshipSpotlights />
      <div className="h-[100px] w-full" />

      {/* 7. Testimonials — white bg */}
      <TestimonialsSection />
      <div className="h-[100px] w-full" />

      {/* 8. Leadership — light gray bg */}
      <LeadershipGrid />
      <div className="h-[100px] w-full" />

      {/* 9. Society / Workplace — white bg */}
      <SocietyWorkplace />
      <div className="h-[100px] w-full" />

      {/* 10. FAQ — light gray bg */}
      <FAQSection />
    </main>
  );
}
