"use client";

import { motion, useReducedMotion } from "framer-motion";

import { HeroMediaCard } from "@/sections/hero-media-card";
import { PartnerStrip } from "@/sections/partner-strip";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/brand-logo";

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const viewport = { once: false, amount: 0.35 };

  return (
    <section className="pb-4 pt-1 lg:pb-0 lg:pt-1">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -16, scale: 0.98 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
              viewport={viewport}
              transition={{ delay: 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 inline-flex max-w-full items-center gap-3 rounded-full border border-navy/15 bg-white/60 px-4 py-1.5 text-sm font-medium text-navy shadow-sm sm:px-5 sm:text-base"
            >
              <BrandLogo decorative variant="mark" className="size-9 shrink-0 sm:size-10" />
              <span className="truncate">We design, develop and deploy digital products</span>
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={viewport}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl text-[clamp(2.65rem,4.55vw,4.85rem)] font-black uppercase leading-[0.92] tracking-normal text-navy"
            >
              We build <span className="text-lime">digital</span>
              <br />
              experiences
              <br />
              that drive results
            </motion.h1>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ delay: 0.38, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md border-l-2 border-lime pl-5 text-base leading-7 text-navy/90 sm:text-lg lg:mb-4"
          >
            From branding to web development, mobile apps, desktop systems and AI solutions - we
            help businesses grow in the{" "}
            <strong className="font-bold text-navy">digital era.</strong>
          </motion.p>
        </div>

        <HeroMediaCard />
        <PartnerStrip />
      </Container>
    </section>
  );
}
