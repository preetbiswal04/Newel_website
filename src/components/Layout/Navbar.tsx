"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Cloud, Shield, Network, Layers, Zap, Database, Cpu, Activity, Briefcase, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
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

/* ─── NavItemCard ─────────────────────────────────────────────── */
function NavItemCard({ item, type }: { item: any; type: string }) {
  return (
    <Link
      href={`/${type}/${item.slug}`}
      className="group/card flex flex-col items-start gap-4 p-4 hover:opacity-80 transition-all duration-200"
    >
      <div className="text-white">
        {ICON_MAP[item.icon] ?? <Cloud size={32} strokeWidth={1} />}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[13px] font-bold text-white uppercase tracking-wider leading-tight">
          {item.title}
        </p>
        <p className="text-[13px] text-white/60 leading-relaxed font-light">
          {item.tagline}
        </p>
      </div>
    </Link>
  );
}

/* ─── MegaMenu ────────────────────────────────────────────────── */
function MegaMenu({
  data,
  type,
  onMouseEnter,
  onMouseLeave,
}: {
  data: any[];
  type: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState(data[0].id);
  const activeCat = data.find((c) => c.id === activeCategory)!;
  const items = activeCat.services || activeCat.industries || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 right-0 z-[100]"
      style={{ top: "84px" }} // Adjusted for 64px height + 20px gap approx
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-[#121624]/80 backdrop-blur-2xl border-t border-white/5 shadow-2xl">
        <div className="max-w-[1440px] mx-auto flex" style={{ minHeight: "450px" }}>

          {/* ── Left sidebar ────────────────────────────── */}
          <div className="w-[320px] shrink-0 border-r border-white/10 flex flex-col gap-y-4 p-4">
            {data.map((cat) => (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat.id)}
                className={cn(
                  "group/tab flex items-center gap-4 px-6 py-4 text-left transition-all duration-200 rounded-lg",
                  activeCategory === cat.id
                    ? "bg-[#1d2438] text-white"
                    : "text-white/70 hover:bg-[#1d2438]/50 hover:text-white"
                )}
              >
                <ChevronRight
                  size={16}
                  className={cn(
                    "transition-transform",
                    activeCategory === cat.id ? "text-white" : "text-white/40"
                  )}
                />
                <span className="text-[15px] font-medium">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          {/* ── Right content ───────────────────────────── */}
          <div className="flex-1 p-12 bg-[#121624]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-12"
              >
                {items.map((item: any) => (
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
      <nav
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          "rounded-full border border-white/10",
          "backdrop-blur-3xl transition-colors duration-500",
          "shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.1)]",
          isScrolled
            ? "top-4 w-full max-w-[1200px] bg-black/40"
            : "top-6 w-full max-w-[1400px] bg-transparent"
        )}
        style={{ height: "64px" }}
      >
        <div className="h-full max-w-[1440px] mx-auto px-26 flex items-center relative">

          {/* ── Logo on the left ───────────────────────────────── */}
          <Link href="/" className="shrink-0 pt-1">
            <Logo />
          </Link>

          {/* ── Nav links — absolutely centered ────────────────── */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-x-10 xl:gap-x-12">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative flex items-center"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "py-2 text-[13px] font-semibold transition-all duration-300 tracking-[0.12em] uppercase whitespace-nowrap flex items-center gap-1",
                    "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-300 text-white/50",
                        hoveredLink === link.name && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Mega Menu */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <MegaMenu
                        data={link.data || []}
                        type={link.type || ""}
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                      />
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* ── Mobile toggle ───────────────────────────────────── */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* ── Mobile menu ─────────────────────────────────────── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-[#0A1628]/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden lg:hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-bold text-white hover:text-blue-400 transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
