"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black shadow-lg hover:shadow-xl",
  outline:
    "bg-transparent border-2 border-white/30 text-white hover:border-white hover:bg-white/10",
  ghost:
    "bg-transparent border border-slate-300 text-slate-900 hover:bg-slate-100",
};

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className,
}) => {
  const content = (
    <motion.span
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 h-14 px-10 min-w-[180px] rounded-full font-bold text-base transition-all duration-500 overflow-hidden cursor-pointer",
        variantStyles[variant],
        className
      )}
    >
      {/* Premium Shimmer Effect */}
      {variant === "primary" && (
        <motion.div
          variants={{
            initial: { x: "-100%", opacity: 0 },
            hover: { x: "100%", opacity: 0.5 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent z-0 pointer-events-none"
        />
      )}

      <span className="relative z-10 whitespace-nowrap">{children}</span>

      <motion.div
        variants={{
          initial: { x: 0, scale: 1 },
          hover: { x: 5, scale: 1.1 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative z-10 flex items-center"
      >
        {icon ?? <ArrowRight size={20} strokeWidth={2.5} />}
      </motion.div>

      {/* Button Glow on Hover */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        className="absolute inset-0 bg-white/10 z-0 transition-opacity duration-300"
      />
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
};
