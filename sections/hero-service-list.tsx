"use client";

import { motion, useReducedMotion } from "framer-motion";

import { BrandLogo } from "@/components/brand-logo";
import { heroServices } from "@/lib/site-content";

export function HeroServiceList() {
  const reduceMotion = useReducedMotion();
  const viewport = { once: false, amount: 0.35 };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: -24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ delay: 0.7, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-y-0 left-0 z-10 w-[84%] max-w-[29rem] bg-gradient-to-r from-navy via-navy/90 to-transparent p-4 text-white sm:w-[68%] sm:p-5 lg:w-[24rem] xl:w-[28%] xl:min-w-[17rem] xl:p-[clamp(1rem,1.65vw,1.5rem)]"
    >
      <p className="text-[clamp(0.8rem,0.9vw,0.95rem)] text-white/80">Powered by</p>
      <p className="mt-0.5 text-[clamp(1rem,1.25vw,1.25rem)] font-extrabold text-lime">
        Shams Agency
      </p>

      <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:mt-[clamp(0.55rem,1.25vh,1rem)] xl:block xl:divide-y xl:divide-white/15">
        {heroServices.map((service, index) => (
          <motion.div
            key={service}
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{
              delay: 0.84 + index * 0.055,
              duration: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex min-w-0 items-center gap-2.5 rounded-full bg-white/10 px-3 py-2 xl:gap-3.5 xl:rounded-none xl:bg-transparent xl:px-0 xl:py-[clamp(0.28rem,0.72vh,0.52rem)]"
          >
            <BrandLogo
              decorative
              variant="mark"
              className="size-6 shrink-0 xl:size-[clamp(1.55rem,1.9vw,1.95rem)]"
            />
            <span className="min-w-0 truncate text-sm font-semibold xl:text-[clamp(0.78rem,0.95vw,0.95rem)]">
              {service}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
