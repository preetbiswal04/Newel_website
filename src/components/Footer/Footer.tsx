"use client";

import React from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  ChevronUp, 
} from "lucide-react";
import { motion } from "framer-motion";

// Custom SVGs for missing brand icons in this Lucide version
const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      "Application Development",
      "Mobile Applications",
      "Data Analytics",
      "AWS services",
      "Application Re-engineering",
      "Quality Assurance",
      "Robotic Process Automation",
      "IT Staff Augmentation",
      "Outsystems",
      "DOOH"
    ],
    quickLinks: [
      "Home",
      "About Us",
      "Services",
      "Industries",
      "Careers",
      "Contact Us"
    ],
    industries: [
      "BFSI",
      "Retails",
      "EPC (Engineering, Procurement & Construction)",
      "Oil & GAS",
      "Infrastructure",
      "Chemical",
      "Healthcare",
      "Defence",
      "Renewable Energy"
    ]
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-slate-900 bg-black">
      {/* Background Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="text-3xl font-black tracking-tighter text-white mb-2">
                NEWEL<span className="text-[#3b82f6]">.</span>
              </div>
              <p className="text-sm text-white/60 font-medium tracking-wide uppercase">Newel Technologies Pvt Ltd.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <p className="text-sm text-white/70 leading-relaxed">
                  504, Sunrise Business Park, Rd Number 16,<br />
                  Neheru Nagar, Wagle Industrial Estate, Thane<br />
                  West, Thane, Maharashtra 400604
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:enquiry@neweltechnologies.com" className="text-sm text-white/70 hover:text-white transition-colors">
                  enquiry@neweltechnologies.com
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <a href="tel:+919664323316" className="text-sm text-white/70 hover:text-white transition-colors">
                    +91 9664323316
                  </a>
                </div>
                <div className="flex items-center gap-4 ml-9">
                  <a href="tel:+917208061012" className="text-sm text-white/70 hover:text-white transition-colors">
                    +91 7208061012
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {[
                { icon: TwitterIcon, href: "#", color: "bg-[#1DA1F2]" },
                { icon: LinkedinIcon, href: "#", color: "bg-[#0077b5]" },
                { icon: GithubIcon, href: "#", color: "bg-white/10" },
                { icon: InstagramIcon, href: "#", color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className={`${social.color} w-10 h-10 flex items-center justify-center rounded-lg text-white shadow-md hover:shadow-lg transition-all border border-white/10 hover:border-white/30`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-bold text-white border-white/20 mb-8 uppercase tracking-widest border-b-2 pb-2 inline-block">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white border-white/20 mb-8 uppercase tracking-widest border-b-2 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div>
            <h4 className="text-lg font-bold text-white border-white/20 mb-8 uppercase tracking-widest border-b-2 pb-2 inline-block">Industries</h4>
            <ul className="space-y-4">
              {footerLinks.industries.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs text-white/40 mb-2 leading-relaxed max-w-2xl">
              Reg. Office : B-9,Phase 2,Cosmos Hawaiian , GB Road , Thane, Maharashtra. CIN : U72900MH2016PTC283148
            </p>
            <p className="text-xs text-white/50 font-bold uppercase tracking-widest">
              All Rights Reserved. Copyright @2021 <span className="text-[#3b82f6]">Newel Technologies Pvt LTD</span>.
            </p>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <motion.button 
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-50 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center shadow-2xl border border-white/20 transition-all group"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </footer>
  );
};
