"use client";

import React from "react";
import { PowerBlock } from "./PowerBlock";
import { ServicePillars } from "./ServicePillars";

export const PlatformSection = () => {
  return (
    <div className="w-full">
      <PowerBlock />
      <div className="bg-[#E5E7EB] py-20 md:py-32">
        <div className="container-page">
          <ServicePillars />
        </div>
      </div>
    </div>
  );
};
