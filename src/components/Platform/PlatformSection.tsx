"use client";

import React from "react";
import { PowerBlock } from "./PowerBlock";
import { ServicePillars } from "./ServicePillars";

export const PlatformSection = () => {
  return (
    <section
      style={{ paddingTop: '50px', paddingBottom: '50px' }}
      className="w-full"
    >
      <div className="container-page flex flex-col gap-32 md:gap-48">
        <PowerBlock />
        <ServicePillars />
      </div>
    </section>
  );
};
