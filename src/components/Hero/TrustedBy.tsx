"use client";

import React from "react";

interface LogoItem {
  name: string;
  color: string;
  fontWeight?: string;
  secondaryText?: string;
  secondaryColor?: string;
}

const LOGOS: LogoItem[] = [
  { name: "JM FINANCIAL", color: "#1a1a6e", fontWeight: "800" },
  { name: "IIFL", color: "#d4a017", fontWeight: "900" },
  { name: "TYGER", color: "#2563eb", fontWeight: "700", secondaryText: "CAPITAL", secondaryColor: "#64748b" },
  { name: "nuvama", color: "#1e3a5f", fontWeight: "700" },
  { name: "RELIANCE", color: "#003087", fontWeight: "800", secondaryText: "Securities", secondaryColor: "#003087" },
  { name: "AVANSE", color: "#4a9b4a", fontWeight: "700" },
  { name: "HeroFinCorp.", color: "#e21937", fontWeight: "700" },
  { name: "Sharekhan", color: "#1a1a6e", fontWeight: "700" },
  { name: "YES SECURITIES", color: "#0072bc", fontWeight: "800" },
  { name: "CREDIT SAISON", color: "#c41230", fontWeight: "800", secondaryText: "INDIA", secondaryColor: "#c41230" },
  { name: "TATA Motors Finance", color: "#003087", fontWeight: "700" },
  { name: "ALPHA ALTERNATIVES", color: "#1a1a6e", fontWeight: "800" },
  { name: "Edelweiss", color: "#003d6b", fontWeight: "700" },
  { name: "RBL BANK", color: "#e94e1b", fontWeight: "800" },
  { name: "Chiratae", color: "#2e7d32", fontWeight: "600", secondaryText: "VENTURES", secondaryColor: "#2e7d32" },
  { name: "ACE LANSDOWNE", color: "#1a1a1a", fontWeight: "700", secondaryText: "INDIA", secondaryColor: "#666" },
  { name: "AMBIT", color: "#1a1a6e", fontWeight: "700" },
  { name: "Bandhan", color: "#e53935", fontWeight: "700", secondaryText: "Mutual Fund", secondaryColor: "#e53935" },
  { name: "Motilal Oswal", color: "#8b6914", fontWeight: "700" },
  { name: "VERTIV", color: "#1a1a1a", fontWeight: "700" },
  { name: "envea", color: "#0097a7", fontWeight: "700" },
  { name: "Gallagher", color: "#1a1a6e", fontWeight: "700" },
];

export const TrustedBy = () => {
  return (
    <section
      className="w-full bg-[#E5E7EB] py-16 md:py-24 border-y border-slate-200/50 overflow-hidden"
    >
      <div className="container-page">
        <div className="text-center mb-8">
          <p className="text-[10px] md:text-[11px] font-bold text-blue-700 uppercase tracking-[0.4em]">
            Trusted by leading enterprises
          </p>
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* CSS-based infinite scroll — much smoother than JS animation */}
          <div className="marquee-track">
            <div className="marquee-content">
              {LOGOS.map((logo, idx) => (
                <LogoPlaceholder key={`a-${idx}`} logo={logo} />
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {LOGOS.map((logo, idx) => (
                <LogoPlaceholder key={`b-${idx}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Smooth CSS animation */}
      <style jsx global>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 45s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-content {
          display: flex;
          align-items: center;
          gap: 60px;
          padding-right: 60px;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

const LogoPlaceholder = ({ logo }: { logo: LogoItem }) => {
  return (
    <div
      className="flex items-center justify-center shrink-0 cursor-pointer"
      style={{ transition: "opacity 0.4s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      <div className="flex flex-col items-center gap-0">
        <span
          style={{
            color: logo.color,
            fontWeight: logo.fontWeight || "700",
          }}
          className="text-lg md:text-2xl tracking-tight leading-tight"
        >
          {logo.name}
        </span>
        {logo.secondaryText && (
          <span
            style={{ color: logo.secondaryColor || logo.color }}
            className="text-[8px] md:text-[10px] font-semibold uppercase tracking-[0.15em] leading-tight"
          >
            {logo.secondaryText}
          </span>
        )}
      </div>
    </div>
  );
};
