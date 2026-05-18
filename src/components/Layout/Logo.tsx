"use client";

import React from "react";
import Image from "next/image";

export const Logo = ({ isScrolled = false }: { isScrolled?: boolean }) => {
  return (
    <div className="flex items-center cursor-pointer">
      <Image
        src="/Newel Technologies extra.png"
        alt="Newel Technologies"
        width={220}
        height={70}
        className={`object-contain h-12 md:h-14 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
        priority
      />
    </div>
  );
};
