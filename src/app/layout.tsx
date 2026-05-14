import { Inter, Roboto, DM_Serif_Display, Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { ExitIntentPopup } from "@/components/Utils/ExitIntentPopup";

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

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={`${inter.variable} ${roboto.variable} ${dmSerif.variable} ${poppins.variable} ${plusJakarta.variable} font-sans antialiased relative bg-white`}>
        <Navbar />
        {children}
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  );
}


