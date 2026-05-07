"use client";

import React from "react";
import { PowerBlock } from "./PowerBlock";
import { ServicePillars } from "./ServicePillars";

export const PlatformSection = () => {
  return (
    <section
      style={{ 
        paddingTop: '80px', 
        paddingBottom: '0px',
        backgroundImage: 'url("/purple-img.jpg")',
        backgroundSize: '110%',
        backgroundPosition: 'center 10%',
        backgroundRepeat: 'no-repeat'
      }}
      className="w-full"
    >
      <div className="container-page flex flex-col gap-16 md:gap-24">
        <PowerBlock />
        <ServicePillars />
      </div>
    </section>
  );
};
