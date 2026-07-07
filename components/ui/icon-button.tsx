"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type IconButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
  label: string;
};

export function IconButton({ children, className, href, label }: IconButtonProps) {
  return (
    <motion.div whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.96 }}>
      <Link
        href={href}
        aria-label={label}
        className={cn(
          "grid size-11 place-items-center rounded-full bg-white text-navy transition-colors hover:bg-lime",
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
