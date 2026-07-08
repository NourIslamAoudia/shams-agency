"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const normalizedActivePath = activePath === "/" ? "/#home" : activePath;
  const [activeSectionPath, setActiveSectionPath] = useState(normalizedActivePath);
  const activeUnderlinePath = hoveredPath ?? activeSectionPath;

  useEffect(() => {
    const sectionIds = siteNavigation
      .map((item) => item.href.split("#")[1])
      .filter((id): id is string => Boolean(id));

    const updateActiveSection = () => {
      const viewportLine = window.innerHeight * 0.38;

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) {
          continue;
        }

        const rect = section.getBoundingClientRect();

        if (rect.top <= viewportLine && rect.bottom >= viewportLine) {
          setActiveSectionPath(`/#${id}`);
          return;
        }
      }

      if (window.scrollY < 80) {
        setActiveSectionPath("/#home");
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-50 py-2.5 lg:py-3"
    >
      <Container className="grid grid-cols-[auto_auto_auto] items-center justify-between gap-3 lg:grid-cols-[auto_1fr_auto] lg:gap-5">
        <Link
          href="/#home"
          aria-label="Shams Agency home"
          onClick={() => setActiveSectionPath("/#home")}
          className="shrink-0"
        >
          <BrandLogo priority className="w-[6.75rem] sm:w-36 lg:w-[10.25rem]" />
        </Link>

        <nav
          aria-label="Main navigation"
          onMouseLeave={() => setHoveredPath(null)}
          className="hidden items-center justify-center gap-8 rounded-full px-6 py-3 lg:flex xl:gap-10"
        >
          {siteNavigation.map((item) => {
            const isActive = item.href === activeSectionPath;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveSectionPath(item.href)}
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
          href="/#contact"
          onClick={() => setActiveSectionPath("/#contact")}
          className="inline-flex h-10 items-center gap-3 rounded-full bg-purple px-2 pl-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(66,34,229,0.24)] transition-colors hover:bg-[#3519c7] sm:h-11 sm:pl-6 sm:text-base"
        >
          <span className="hidden sm:inline">Let&apos;s Talk</span>
          <span className="grid size-7 place-items-center rounded-full bg-lime text-navy sm:size-8">
            <ArrowRight aria-hidden="true" size={19} />
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-grid size-10 place-items-center rounded-full border border-navy/10 bg-white/70 text-navy shadow-sm backdrop-blur lg:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </Container>

      {isMenuOpen ? (
        <Container className="lg:hidden">
          <motion.nav
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 overflow-hidden rounded-[1.25rem] border border-navy/10 bg-off-white/96 p-3 shadow-[0_20px_60px_rgba(25,46,69,0.16)] backdrop-blur"
          >
            <div className="grid gap-1">
              {siteNavigation.map((item) => {
                const isActive = item.href === activeSectionPath;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveSectionPath(item.href);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-black text-navy transition-colors hover:bg-lime",
                      isActive && "bg-lime",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/#contact"
              onClick={() => {
                setActiveSectionPath("/#contact");
                setIsMenuOpen(false);
              }}
              className="mt-3 flex items-center justify-between rounded-xl bg-purple px-4 py-3 text-base font-black text-white"
            >
              Let&apos;s Talk
              <span className="grid size-8 place-items-center rounded-full bg-lime text-navy">
                <ArrowRight aria-hidden="true" size={19} />
              </span>
            </Link>
          </motion.nav>
        </Container>
      ) : null}
    </motion.header>
  );
}
