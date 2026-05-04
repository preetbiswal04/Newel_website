import { Inter, Roboto, DM_Serif_Display, Poppins } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Newel | High-End Digital Solutions",
  description: "Replicating the premium feel of McKinsey/QuantumBlack for the next generation of enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.variable} ${roboto.variable} ${dmSerif.variable} ${poppins.variable} font-sans antialiased relative`}>
        {/* Global Background Image */}
        <div className="fixed inset-0 z-[-10]">
          <img 
            src="/global-bg.jpg" 
            alt="Global Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
        </div>
        
        <div className="noise-bg" />
        <div className="cinematic-glow opacity-30" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


