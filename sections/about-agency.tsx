"use client";

import { motion, useReducedMotion } from "framer-motion";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { agencyStats } from "@/lib/site-content";

export function AboutAgency() {
  const reduceMotion = useReducedMotion();
  const viewport = { once: false, margin: "-15% 0px", amount: 0.2 };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-lime/20 blur-3xl" />

      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative border-t border-navy/10 pt-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/60 px-3 py-1 text-xs font-semibold text-navy/70 shadow-sm">
                <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
                About us
              </div>

              <h2 className="max-w-5xl text-[clamp(2rem,3.65vw,4rem)] font-black leading-[1.04] tracking-normal text-navy">
                We&apos;re the digital department inside{" "}
                <span className="text-purple">Shams Djazair</span>, building the online systems that
                help clean-energy ideas move faster.
              </h2>
            </div>

            <p className="text-right text-[clamp(3rem,7vw,7rem)] font-black leading-none text-navy/[0.08] max-lg:hidden">
              about
            </p>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
            <p className="max-w-5xl text-[clamp(1.2rem,2vw,2rem)] font-semibold leading-[1.35] text-navy/60">
              As part of one of Algeria&apos;s solar-energy players, Shams Agency brings a
              builder&apos;s mindset to branding, websites, apps, dashboards and AI tools. We
              connect the parent company&apos;s renewable-energy mission with digital products that{" "}
              <strong className="font-black text-navy">look sharp, work clearly, and scale.</strong>
            </p>

            <div className="rounded-[1.5rem] bg-navy p-5 text-off-white shadow-[0_20px_60px_rgba(25,46,69,0.14)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lime">
                Shams Agency
              </p>
              <p className="mt-3 text-lg font-semibold leading-7">
                A focused digital team backed by Shams Djazair&apos;s clean-energy ecosystem.
              </p>
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 grid grid-cols-2 gap-5 border-t border-navy/10 pt-6 lg:grid-cols-4"
          >
            {agencyStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[clamp(1.75rem,3vw,3rem)] font-black leading-none text-navy">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-navy/55">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
