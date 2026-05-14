"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Cloud,
  Shield,
  Network,
  Layers,
  Zap,
  Database,
  Cpu,
  Activity,
  Briefcase,
  Search,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/servicesData";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import { Logo } from "./Logo";

/* ─── icon map ───────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={28} strokeWidth={1.5} />,
  Shield: <Shield size={28} strokeWidth={1.5} />,
  Network: <Network size={28} strokeWidth={1.5} />,
  Layers: <Layers size={28} strokeWidth={1.5} />,
  Zap: <Zap size={28} strokeWidth={1.5} />,
  Database: <Database size={28} strokeWidth={1.5} />,
  Cpu: <Cpu size={28} strokeWidth={1.5} />,
  Activity: <Activity size={28} strokeWidth={1.5} />,
  Briefcase: <Briefcase size={28} strokeWidth={1.5} />,
};

const NAV_LINKS = [
  { name: "Services", href: "/services", hasDropdown: true, data: SERVICES_DATA, type: "services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about-us" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

function NavItemCard({ item, type, onClick }: { item: any; type: string; onClick?: () => void }) {
  return (
    <div className="relative group/card h-full">
      <Link
        href={`/${type}/${item.slug}`}
        onClick={onClick}
        className="flex flex-col items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:bg-black/[0.03] hover:shadow-xl hover:shadow-black/5 group"
      >
        <div className="text-slate-900 mb-1">
          <div className="[&>svg]:w-9 [&>svg]:h-9 opacity-90 group-hover/card:text-blue-600 group-hover/card:scale-110 transition-all duration-500">
            {ICON_MAP[item.icon] ?? <Cloud />}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-[15px] font-bold text-slate-900 leading-tight group-hover/card:text-blue-600 transition-colors">
            {item.title}
          </p>
          <p className="text-[13px] text-slate-700 font-medium leading-relaxed max-w-[260px] group-hover/card:text-slate-900 transition-colors">
            {item.tagline}
          </p>
        </div>
      </Link>
    </div>
  );
}

/* ─── MegaMenu ────────────────────────────────────────────────── */
function MegaMenu({ data, type, onMouseEnter, onMouseLeave, onItemClick }: any) {
  const [activeCategory, setActiveCategory] = useState(data[0].id);
  const activeCat = data.find((c: any) => c.id === activeCategory)!;
  const items = activeCat.services || activeCat.industries || [];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 right-0 z-[100] bg-white/95 backdrop-blur-3xl border-t border-black/5 shadow-[0_40px_80px_rgba(0,0,0,0.12)] overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container-page flex min-h-[460px]">
        {/* Left Sidebar: Categories */}
        <div className="w-[300px] border-r border-black/5 py-12 flex flex-col gap-0.5">
          {data.map((cat: any) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-3 px-8 py-5 text-left transition-all group",
                activeCategory === cat.id
                  ? "bg-black/5"
                  : "hover:bg-black/[0.02]"
              )}
            >
              <ChevronRight
                size={16}
                className={cn(
                  "transition-all duration-300",
                  activeCategory === cat.id ? "text-blue-600 translate-x-0 opacity-100" : "text-black/20 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                )}
              />
              <span className={cn(
                "text-[15px] font-bold tracking-tight transition-colors",
                activeCategory === cat.id ? "text-blue-600" : "text-slate-500 group-hover:text-slate-900"
              )}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Right Content: Services Grid */}
        <div className="flex-1 p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
              {items.map((item: any) => (
                <NavItemCard key={item.id} item={item} type={type} onClick={onItemClick} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Navbar ──────────────────────────────────────────────────── */
export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menu when route changes
  useEffect(() => {
    setHoveredLink(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      <AnimatePresence>
        {hoveredLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[40] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0c0c1d]/95 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-8"
        )}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-page flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo isScrolled={false} />
          </Link>

          {/* Right-aligned Navigation */}
          <div className="hidden lg:flex items-center gap-x-8">
            <nav className="flex items-center gap-x-8">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.name}
                  className="h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                >
                  <Link
                    href={link.href}
                    onClick={() => setHoveredLink(null)}
                    className={cn(
                      "text-[12px] font-bold tracking-[0.15em] uppercase flex items-center gap-1.5 transition-all duration-300",
                      hoveredLink === link.name ? "text-blue-400" : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform duration-300", hoveredLink === link.name && "rotate-180")}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center gap-6 ml-6 border-l border-white/10 pl-8">
              <button className="text-white/70 hover:text-white transition-colors">
                <Globe size={18} />
              </button>
              <button className="text-white/70 hover:text-white transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Full-width Mega Menu */}
          <AnimatePresence>
            {hoveredLink && NAV_LINKS.find(l => l.name === hoveredLink)?.hasDropdown && (
              <MegaMenu
                key={hoveredLink}
                data={NAV_LINKS.find(l => l.name === hoveredLink)?.data || []}
                type={NAV_LINKS.find(l => l.name === hoveredLink)?.type || ""}
                onMouseEnter={() => handleMouseEnter(hoveredLink)}
                onMouseLeave={handleMouseLeave}
                onItemClick={() => setHoveredLink(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};
