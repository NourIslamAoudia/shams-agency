"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Megaphone,
  Palette,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { servicesPageItems } from "@/lib/site-content";
import type { ServiceItem } from "@/types/site";

const ease = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const serviceIcons: Record<ServiceItem["visual"], LucideIcon> = {
  ai: Bot,
  apps: Smartphone,
  brand: Palette,
  marketing: Megaphone,
  web: Code2,
};

export function ServicesOverview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pb-14 pt-6 sm:pb-20 lg:pb-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.18 }}
          variants={sectionVariants}
        >
          <motion.div
            variants={itemVariants}
            className="grid gap-6 border-t border-navy/10 pt-8 lg:grid-cols-[0.72fr_0.58fr] lg:items-end lg:pt-10"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/60 px-3 py-1 text-xs font-semibold text-navy/70 shadow-sm">
                <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
                Our Services
              </div>
              <h1 className="max-w-4xl text-[clamp(3.4rem,8vw,8.75rem)] font-black leading-[0.82] tracking-normal text-navy">
                Our Services
              </h1>
            </div>

            <p className="max-w-xl text-base font-semibold leading-7 text-navy/62 sm:text-lg">
              Digital systems, brand work and launch support for Shams Djazair and ambitious
              clean-energy teams that need clear, useful products.
            </p>
          </motion.div>

          <div className="mt-8 space-y-6 lg:mt-12 lg:space-y-8">
            {servicesPageItems.map((service, index) => (
              <ServiceShowcaseCard
                key={service.title}
                index={index}
                reduceMotion={reduceMotion}
                service={service}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function ServiceShowcaseCard({
  index,
  reduceMotion,
  service,
}: {
  index: number;
  reduceMotion: boolean | null;
  service: ServiceItem;
}) {
  const Icon = serviceIcons[service.visual];

  return (
    <motion.article
      variants={itemVariants}
      style={{ top: `${92 + index * 14}px`, zIndex: index + 1 }}
      className="group relative grid min-h-[34rem] overflow-hidden rounded-[1.75rem] border border-navy/10 bg-navy text-off-white shadow-[0_26px_80px_rgba(25,46,69,0.16)] lg:sticky lg:min-h-[min(42rem,74vh)] lg:grid-cols-[0.95fr_1.05fr] lg:rounded-[2rem]"
    >
      <div className="relative order-2 flex min-h-[19rem] items-center justify-center overflow-hidden bg-lime p-5 text-navy sm:min-h-[23rem] sm:p-8 lg:order-1 lg:min-h-full">
        <ServiceVisual
          icon={Icon}
          index={index}
          reduceMotion={reduceMotion}
          visual={service.visual}
        />
      </div>

      <div className="order-1 flex flex-col p-6 sm:p-8 lg:order-2 lg:p-10 xl:p-12">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-sm font-black tracking-[0.18em] text-lime">
            ({String(index + 1).padStart(2, "0")})
          </p>

          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 8, x: 2, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          >
            <Link
              href="/contact"
              aria-label={`Discover more about ${service.title}`}
              className="grid size-12 place-items-center rounded-full border border-white/18 bg-white/7 text-off-white transition-colors hover:border-lime hover:bg-lime hover:text-navy"
            >
              <ArrowUpRight aria-hidden="true" size={22} />
            </Link>
          </motion.div>
        </div>

        <div className="my-auto py-10 lg:py-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
            <Icon aria-hidden="true" size={16} />
            Shams Agency
          </div>

          <h2 className="max-w-3xl text-[clamp(2.5rem,5.5vw,6.7rem)] font-black leading-[0.88] tracking-normal transition-colors duration-300 group-hover:text-lime">
            {service.title}
          </h2>

          <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white/70 sm:text-lg sm:leading-8">
            {service.description}
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-off-white transition-colors hover:border-lime hover:bg-lime hover:text-navy"
        >
          Discover More
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </motion.article>
  );
}

function ServiceVisual({
  icon: Icon,
  index,
  reduceMotion,
  visual,
}: {
  icon: LucideIcon;
  index: number;
  reduceMotion: boolean | null;
  visual: ServiceItem["visual"];
}) {
  const visualLabels: Record<ServiceItem["visual"], string[]> = {
    ai: ["automation", "dashboards", "workflows"],
    apps: ["mobile", "web apps", "internal tools"],
    brand: ["identity", "campaigns", "systems"],
    marketing: ["content", "landing pages", "growth"],
    web: ["websites", "performance", "launch"],
  };

  return (
    <div className="relative grid w-full max-w-[34rem] place-items-center">
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 1.4, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { delay: index * 0.1, duration: 5.5, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative aspect-[1.28] w-full max-w-[31rem] overflow-hidden rounded-[1.5rem] bg-navy p-5 shadow-[0_28px_75px_rgba(25,46,69,0.24)]"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="size-2.5 rounded-full bg-lime" />
            <span className="size-2.5 rounded-full bg-off-white/70" />
            <span className="size-2.5 rounded-full bg-purple" />
          </div>
          <BrandLogo decorative variant="mark" className="size-7" />
        </div>

        <div className="mt-8 grid grid-cols-[0.72fr_1fr] gap-4">
          <div className="rounded-[1rem] bg-lime p-4 text-navy">
            <Icon aria-hidden="true" className="size-9" />
            <p className="mt-8 text-2xl font-black leading-none">{visual}</p>
          </div>

          <div className="space-y-3">
            {visualLabels[visual].map((label) => (
              <div key={label} className="rounded-full border border-white/10 bg-white/7 px-4 py-3">
                <p className="text-sm font-bold text-off-white">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-8 -right-8 size-32 rounded-full border-[22px] border-purple/75" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { x: [0, 8, 0], y: [0, -6, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { delay: 0.2 + index * 0.08, duration: 4.8, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute -bottom-4 right-2 hidden w-40 rounded-[1.1rem] bg-off-white p-4 text-navy shadow-[0_18px_50px_rgba(25,46,69,0.16)] sm:block"
      >
        <p className="text-xs font-black uppercase tracking-[0.16em] text-purple">Live</p>
        <p className="mt-2 text-2xl font-black leading-none">Ready</p>
      </motion.div>
    </div>
  );
}
