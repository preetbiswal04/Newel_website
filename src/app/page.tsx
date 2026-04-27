import { HeroSection } from "@/components/Hero/HeroSection";
import { TrustedBy } from "@/components/Hero/TrustedBy";
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
      <div className="w-full py-20">
        <TrustedBy />
      </div>

      <div className="space-y-32 md:space-y-48 w-full pb-32">
        <PlatformSection />
        <IndustriesSection />
        <WhyNewel />
        <div className="h-[300px] w-full" />
        <OnePlatform />
        <PartnersSection />
        <div className="h-[300px] w-full" />
        <SuccessStoriesSection />
        <div className="h-[100px] w-full" />
        <DemoSection />
        <div className="h-[300px] w-full" />
      </div>
    </main>
  );
}


