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
  ArrowUpRight,
  Menu,
  X
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

  const cleanPathname = pathname?.replace(/\/$/, "");
  const isLightPage = !pathname || cleanPathname === "/contact" || cleanPathname === "/services" || cleanPathname === "/careers";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileLink, setExpandedMobileLink] = useState<string | null>(null);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setHoveredLink(null);
    setMobileMenuOpen(false);
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
          (isScrolled || isLightPage || mobileMenuOpen)
            ? "bg-white/95 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm"
            : "bg-transparent border-b border-transparent py-4"
        )}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-page flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo isScrolled={isScrolled || isLightPage || mobileMenuOpen} />
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
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-black/5 active:scale-95 transition-all z-50 shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-slate-800" />
            ) : (
              <Menu size={24} className={isLightPage || isScrolled ? "text-slate-800" : "text-white"} />
            )}
          </button>

          {/* Full-width Mega Menu (Desktop Only) */}
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

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 top-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-3xl flex flex-col pt-24 px-6 pb-8 overflow-y-auto min-h-screen"
              >
                <nav className="flex flex-col gap-y-1">
                  {NAV_LINKS.map((link) => {
                    const hasSubMenu = link.hasDropdown;
                    const isExpanded = expandedMobileLink === link.name;
                    
                    return (
                      <div key={link.name} className="border-b border-slate-100/80 py-2">
                        {hasSubMenu ? (
                          <div>
                            <button
                              onClick={() => setExpandedMobileLink(isExpanded ? null : link.name)}
                              className="w-full flex items-center justify-between py-3 text-base font-black uppercase tracking-[0.1em] text-slate-800 transition-colors"
                            >
                              <span>{link.name}</span>
                              <ChevronDown
                                size={18}
                                className={cn("transition-transform duration-300 text-slate-500", isExpanded && "rotate-180 text-blue-600")}
                              />
                            </button>
                            
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden bg-slate-50/50 rounded-2xl px-4 py-2 mt-1 mb-3 space-y-3"
                                >
                                  {link.data.map((cat: any) => (
                                    <div key={cat.id} className="space-y-1 pt-2 first:pt-0">
                                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {cat.name}
                                      </p>
                                      <div className="flex flex-col gap-y-2.5 pl-2 pt-1">
                                        {(cat.services || cat.items || []).map((subItem: any) => (
                                          <Link
                                            key={subItem.id}
                                            href={`/${link.type}/${subItem.slug}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-[13px] font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between"
                                          >
                                            <span>{subItem.title}</span>
                                            <ChevronRight size={14} className="text-slate-400" />
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-3 text-base font-black uppercase tracking-[0.1em] text-slate-800 hover:text-blue-600 transition-colors"
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};
