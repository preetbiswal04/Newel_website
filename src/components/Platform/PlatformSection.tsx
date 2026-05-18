"use client";

import React from "react";
import { PowerBlock } from "./PowerBlock";
import { ServicePillars } from "./ServicePillars";

export const PlatformSection = () => {
  return (
    <div className="w-full bg-[#E5E7EB] pt-4 md:pt-6 flex flex-col gap-8 md:gap-10 pb-4">
      <PowerBlock />
      <div className="container-page">
        <ServicePillars />
      </div>
    </div>
  );
};
