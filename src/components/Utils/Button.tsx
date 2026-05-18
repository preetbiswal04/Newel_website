"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  showIcon?: boolean;
  className?: string;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30",
  secondary: "bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-xl",
  outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  ghost: "bg-transparent text-blue-600 hover:bg-blue-50/50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-6 text-sm",
  md: "h-12 px-8 text-base",
  lg: "h-14 px-10 text-lg",
  xl: "h-16 px-12 text-xl",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  showIcon = true,
  className,
  disabled = false,
}) => {
  const content = (
    <motion.span
      whileHover={disabled ? {} : { y: -2, scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 rounded-xl font-bold transition-all duration-300 overflow-hidden cursor-pointer whitespace-nowrap border-none outline-none focus:outline-none focus:ring-0",
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed grayscale",
        className
      )}
    >
      <span className="relative z-10">{children}</span>

      {showIcon && (
        <motion.div
          variants={{
            initial: { x: 0 },
            hover: { x: 4 },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative z-10"
        >
          {icon ?? <ArrowRight size={size === "sm" ? 16 : 20} strokeWidth={2.5} />}
        </motion.div>
      )}

      {/* Shimmer Effect on Hover */}
      {!disabled && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>
      )}
    </motion.span>
  );

  if (href && !disabled) {
    return <Link href={href} className="inline-block border-none outline-none focus:outline-none focus:ring-0">{content}</Link>;
  }

  return (
    <button type="button" onClick={onClick} disabled={disabled} className="focus:outline-none">
      {content}
    </button>
  );
};
