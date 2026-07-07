"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { siteNavigation } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  activePath?: string;
};

export function SiteHeader({ activePath = "/" }: SiteHeaderProps) {
  const reduceMotion = useReducedMotion();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const activeUnderlinePath = hoveredPath ?? activePath;

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="py-2.5 lg:py-3"
    >
      <Container className="grid grid-cols-[auto_auto] items-center justify-between gap-5 lg:grid-cols-[auto_1fr_auto]">
        <Link href="/" aria-label="Shams Agency home" className="shrink-0">
          <BrandLogo priority className="w-[8rem] sm:w-36 lg:w-[10.25rem]" />
        </Link>

        <nav
          aria-label="Main navigation"
          onMouseLeave={() => setHoveredPath(null)}
          className="hidden items-center justify-center gap-8 rounded-full px-6 py-3 lg:flex xl:gap-10"
        >
          {siteNavigation.map((item) => {
            const isActive = item.href === activePath;

            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredPath(item.href)}
                onFocus={() => setHoveredPath(item.href)}
                onBlur={() => setHoveredPath(null)}
                className={cn(
                  "group relative text-base font-medium text-navy transition-colors hover:text-purple",
                  isActive && "font-bold",
                )}
              >
                {item.label}
                {activeUnderlinePath === item.href ? (
                  <motion.span
                    layoutId="site-nav-underline"
                    className="absolute -bottom-3 left-0 h-1 w-full rounded-full bg-lime"
                    transition={{
                      duration: reduceMotion ? 0 : 0.32,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="inline-flex h-10 items-center gap-3 rounded-full bg-purple px-2 pl-5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(66,34,229,0.24)] transition-colors hover:bg-[#3519c7] sm:h-11 sm:pl-6 sm:text-base"
        >
          <span className="hidden sm:inline">Let&apos;s Talk</span>
          <span className="grid size-7 place-items-center rounded-full bg-lime text-navy sm:size-8">
            <ArrowRight aria-hidden="true" size={19} />
          </span>
        </Link>
      </Container>
    </motion.header>
  );
}
