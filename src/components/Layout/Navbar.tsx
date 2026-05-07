"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Cloud, Shield, Network, Layers, Zap, Database, Cpu, Activity, Briefcase, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES_DATA, SubService } from "@/data/servicesData";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import { Logo } from "./Logo";

/* ─── icon map ───────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={26} strokeWidth={1.5} />,
  Shield: <Shield size={26} strokeWidth={1.5} />,
  Network: <Network size={26} strokeWidth={1.5} />,
  Layers: <Layers size={26} strokeWidth={1.5} />,
  Zap: <Zap size={26} strokeWidth={1.5} />,
  Database: <Database size={26} strokeWidth={1.5} />,
  Cpu: <Cpu size={26} strokeWidth={1.5} />,
  Activity: <Activity size={26} strokeWidth={1.5} />,
  Briefcase: <Briefcase size={26} strokeWidth={1.5} />,
};

const NAV_LINKS = [
  { name: "Services", href: "/services", hasDropdown: true, data: SERVICES_DATA, type: "services" },
  { name: "Industries", href: "/industries", hasDropdown: true, data: INDUSTRIES_DATA, type: "industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "#" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

function NavItemCard({ item, type }: { item: any; type: string }) {
  return (
    <div className="relative group/card h-full">
      <Link
        href={`/${type}/${item.slug}`}
        className="flex items-start gap-4 p-4 rounded-[16px] hover:bg-white/60 transition-all duration-300 h-full"
      >
        <div className="w-12 h-12 shrink-0 rounded-[12px] bg-blue-50 flex items-center justify-center text-blue-600 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all duration-300 shadow-sm">
          <div className="[&>svg]:w-6 [&>svg]:h-6">
            {ICON_MAP[item.icon] ?? <Cloud />}
          </div>
        </div>

        <div className="flex flex-col gap-1.5 pt-0.5">
          <p className="text-[15px] font-bold text-slate-950 leading-tight group-hover/card:text-blue-700 transition-colors">
            {item.title}
          </p>
          <p className="text-[13px] text-slate-700 font-medium leading-relaxed max-w-[320px]">
            {item.tagline}
          </p>
        </div>
      </Link>
    </div>
  );
}

/* ─── MegaMenu ────────────────────────────────────────────────── */
function MegaMenu({ data, type, onMouseEnter, onMouseLeave }: any) {
  const [activeCategory, setActiveCategory] = useState(data[0].id);
  const activeCat = data.find((c: any) => c.id === activeCategory)!;
  const items = activeCat.services || activeCat.industries || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className="absolute top-[calc(100%+24px)] left-0 right-0 flex justify-center z-[100] before:content-[''] before:absolute before:-top-[24px] before:w-full before:h-[24px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-[24px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-slate-200/60 overflow-hidden w-full max-w-[1140px] flex min-h-[400px]">

        {/* Left Section: Discover */}
        <div className="w-[320px] py-8 px-6 bg-white/50 border-r border-slate-200/40 flex flex-col">
          <h3 className="text-[11px] font-black text-slate-800 mb-6 uppercase tracking-[0.2em] px-3">
            Discover
          </h3>
          <div className="flex flex-col gap-2">
            {data.map((cat: any) => (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-4 p-3 rounded-xl text-left transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] ring-1 ring-slate-200/60"
                    : "hover:bg-slate-200/50"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 transition-transform",
                  activeCategory === cat.id ? "bg-blue-600 text-white shadow-md scale-105" : "bg-slate-200 text-slate-800"
                )}>
                  <div className="[&>svg]:w-5 [&>svg]:h-5">
                    {ICON_MAP[cat.icon] ?? <Layers size={20} />}
                  </div>
                </div>
                <span className={cn(
                  "text-[15px] font-bold tracking-tight",
                  activeCategory === cat.id ? "text-blue-700" : "text-slate-900"
                )}>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: Solutions */}
        <div className="flex-1 py-8 px-8 bg-transparent flex flex-col">
          <div className="flex items-center justify-between mb-6 px-2">
            <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">
              Solutions
            </h3>
            <Link href={`/${type}`} className="text-[12px] font-extrabold text-blue-600 hover:text-blue-700 flex items-center gap-1">
              VIEW ALL <ChevronRight size={14} />
            </Link>
          </div>

          <div className="px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="grid grid-cols-2 gap-x-6 gap-y-4"
              >
                {items.slice(0, 6).map((item: any) => (
                  <NavItemCard key={item.id} item={item} type={type} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Navbar ──────────────────────────────────────────────────── */
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  // Case Studies is now a dark theme page, so we don't force dark text on it
  const isLightPage = false; // Update this if other pages need to be explicitly light
  const useDarkTheme = isScrolled || isLightPage;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 20);

      // Smart Navbar logic: Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        // Scrolling down and passed a threshold
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredLink(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredLink(null), 200);
  };

  return (
    <>
      {/* ── Full-width yellow.ai-style Navbar ─────────────────── */}
      <div
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          "w-full container-page flex items-center justify-between",
          isScrolled ? "top-4" : "top-6"
        )}
      >
        {/* ── Logo ─────────────────────────────────── */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="shrink-0">
            <Logo isScrolled={useDarkTheme} />
          </Link>
        </div>

        <nav
          className={cn(
            "h-[64px] relative shrink-0 transition-all duration-500", 
            isScrolled 
              ? "rounded-full border backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]" 
              : "bg-transparent border-transparent shadow-none",
            isScrolled 
              ? (useDarkTheme ? "bg-white/40 border-slate-200/50" : "bg-white/10 border-white/30")
              : ""
          )}
        >
          <div className="h-full px-6 md:px-10 flex items-center justify-center transition-all duration-500">
            {/* 1. Nav links map */}
            <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-10">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.name}
                  className="flex items-center"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "py-4 text-[14px] font-bold tracking-[0.1em] uppercase flex items-center gap-1",
                      useDarkTheme ? "text-slate-900" : "text-white"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} />}
                  </Link>
                </div>
              ))}
            </div>

            {/* 2. MEGA MENU MOVED HERE (Outside the loop) */}
            <AnimatePresence>
              {hoveredLink && NAV_LINKS.find(l => l.name === hoveredLink)?.hasDropdown && (
                <MegaMenu
                  key={hoveredLink} // Important for animation
                  data={NAV_LINKS.find(l => l.name === hoveredLink)?.data || []}
                  type={NAV_LINKS.find(l => l.name === hoveredLink)?.type || ""}
                  onMouseEnter={() => handleMouseEnter(hoveredLink)}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </AnimatePresence>

            {/* Mobile toggle button... */}
          </div>
        </nav>
        
        {/* Right side spacer to perfectly center the nav */}
        <div className="flex-1 hidden lg:block" />
      </div>
    </>
  );
};
