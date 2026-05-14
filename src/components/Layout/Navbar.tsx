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
  Globe,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/servicesData";
import { SOLUTIONS_DATA } from "@/data/solutionsData";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import { Logo } from "./Logo";

/* ─── icon map ───────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={32} strokeWidth={1.5} />,
  Shield: <Shield size={32} strokeWidth={1.5} />,
  Network: <Network size={32} strokeWidth={1.5} />,
  Layers: <Layers size={32} strokeWidth={1.5} />,
  Zap: <Zap size={32} strokeWidth={1.5} />,
  Database: <Database size={32} strokeWidth={1.5} />,
  Cpu: <Cpu size={32} strokeWidth={1.5} />,
  Activity: <Activity size={32} strokeWidth={1.5} />,
  Briefcase: <Briefcase size={32} strokeWidth={1.5} />,
};

const NAV_LINKS = [
  { name: "Services", href: "/services", hasDropdown: true, data: SERVICES_DATA, type: "services" },
  { name: "Solutions", href: "/solutions", hasDropdown: true, data: SOLUTIONS_DATA, type: "solutions" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about-us" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

function NavItemCard({ item, type, onClick }: { item: any; type: string; onClick?: () => void }) {
  return (
    <Link
      href={`/${type}/${item.slug}`}
      onClick={onClick}
      className="group/card relative flex flex-col gap-4 p-5 rounded-2xl transition-all duration-500 hover:bg-black/[0.03] border border-transparent hover:border-black/5"
    >
      <div className="flex items-start justify-between">
        <div className="text-blue-600 group-hover/card:text-blue-700 transition-colors duration-500">
          <div className="[&>svg]:w-8 [&>svg]:h-8 opacity-80 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-500">
            {ICON_MAP[item.icon] ?? <Cloud />}
          </div>
        </div>
        <ArrowUpRight size={16} className="text-black/10 group-hover/card:text-blue-600 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-300 opacity-0 group-hover/card:opacity-100" />
      </div>

      <div className="space-y-2">
        <p className="text-[14px] font-bold text-slate-900 tracking-tight group-hover/card:text-blue-600 transition-colors">
          {item.title}
        </p>
        <p className="text-[12px] text-slate-500 font-medium leading-relaxed group-hover/card:text-slate-700 transition-colors line-clamp-2">
          {item.tagline}
        </p>
      </div>
    </Link>
  );
}

/* ─── MegaMenu ────────────────────────────────────────────────── */
function MegaMenu({ data, type, onMouseEnter, onMouseLeave, onItemClick }: any) {
  const [activeCategory, setActiveCategory] = useState(data[0].id);
  const activeCat = data.find((c: any) => c.id === activeCategory)!;
  const items = activeCat.services || activeCat.industries || activeCat.items || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-0 right-0 z-[100] bg-white/95 backdrop-blur-3xl border-t border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container-page flex min-h-[500px]">
        {/* Left Sidebar: Categories */}
        <div className="w-[320px] border-r border-black/5 py-10 pr-6 flex flex-col gap-1">
          {data.map((cat: any) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center justify-between px-6 py-4 rounded-xl text-left transition-all group",
                activeCategory === cat.id
                  ? "bg-black/[0.05] shadow-inner shadow-black/5"
                  : "hover:bg-black/[0.02]"
              )}
            >
              <span className={cn(
                "text-[14px] font-bold tracking-tight transition-colors",
                activeCategory === cat.id ? "text-blue-600" : "text-slate-500 group-hover:text-slate-900"
              )}>
                {cat.name}
              </span>
              <ChevronRight
                size={14}
                className={cn(
                  "transition-all duration-300",
                  activeCategory === cat.id ? "text-blue-600 translate-x-0 opacity-100" : "text-black/10 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                )}
              />
            </button>
          ))}
        </div>

        {/* Right Content: Services Grid */}
        <div className="flex-1 p-10 pl-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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

  const isLightPage = pathname === "/contact";

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
    timeoutRef.current = setTimeout(() => setHoveredLink(null), 300);
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
          (isScrolled || isLightPage)
            ? "bg-white/95 backdrop-blur-xl border-b border-black/5 py-4"
            : "bg-[#0c0c1d]/95 backdrop-blur-xl border-b border-white/5 py-4",
          !isScrolled && !isLightPage && "bg-transparent py-8"
        )}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-page flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo isScrolled={isScrolled || isLightPage} />
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
                      "text-[12px] font-black tracking-[0.15em] uppercase flex items-center gap-1.5 transition-all duration-300",
                      hoveredLink === link.name 
                        ? "text-blue-600" 
                        : (isScrolled || isLightPage ? "text-slate-600 hover:text-blue-600" : "text-white/80 hover:text-white")
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
            <div className={cn(
              "flex items-center gap-6 ml-6 border-l pl-8",
              isScrolled || isLightPage ? "border-black/10" : "border-white/10"
            )}>
              <button className={cn(
                "transition-colors",
                isScrolled || isLightPage ? "text-slate-600 hover:text-blue-600" : "text-white/70 hover:text-white"
              )}>
                <Globe size={18} />
              </button>
              <button className={cn(
                "transition-colors",
                isScrolled || isLightPage ? "text-slate-600 hover:text-blue-600" : "text-white/70 hover:text-white"
              )}>
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
