
import { HeroSection } from "@/components/Hero/HeroSection";
import { TrustedBy } from "@/components/Hero/TrustedBy";
import { TransformationSection } from "@/components/Transformation/TransformationSection";
import { InventivAISection } from "@/components/InventivAI/InventivAISection";
import { PlatformSection } from "@/components/Platform/PlatformSection";
import { IndustriesSection } from "@/components/Industries/IndustriesSection";
import { WhyNewel } from "@/components/WhyNewel/WhyNewel";
import { SuccessStoriesSection } from "@/components/SuccessStories/SuccessStoriesSection";
import { DemoSection } from "@/components/CTA/DemoSection";
import { OnePlatform } from "@/components/WhyNewel/OnePlatform";
import { PartnersSection } from "@/components/Partners/PartnersSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-transparent">
      <HeroSection />

      <div className="space-y-16 md:space-y-24 w-full pb-10">
        <div className="w-full">
          <TransformationSection />
          <InventivAISection />
        </div>
        
        <div className="w-full">
          <TrustedBy />
        </div>

        <PlatformSection />
        <IndustriesSection />
        <WhyNewel />
        <OnePlatform />
        <PartnersSection />
        <SuccessStoriesSection />

        <DemoSection />

      </div>
    </main>
  );
}



