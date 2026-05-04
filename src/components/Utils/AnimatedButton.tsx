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
    "bg-white border border-gray-200 text-black hover:bg-gray-100",
  outline:
    "bg-transparent border-2 border-white text-white hover:bg-white/10",
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
      initial="initial"
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 h-12 px-8 min-w-[160px] rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden cursor-pointer",
        variantStyles[variant],
        className
      )}
    >
      <span className="relative z-10 whitespace-nowrap">{children}</span>

      <motion.div
        variants={{
          initial: { x: 0 },
          hover: { x: 4 },
        }}
        className="relative z-10 flex items-center"
      >
        {icon ?? <ArrowRight size={18} />}
      </motion.div>
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
