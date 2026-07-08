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
      className="absolute inset-y-0 left-0 z-10 w-[92%] max-w-[31rem] bg-[linear-gradient(90deg,rgba(25,46,69,0.98)_0%,rgba(25,46,69,0.94)_44%,rgba(25,46,69,0.76)_66%,rgba(25,46,69,0.38)_86%,rgba(25,46,69,0)_100%)] p-4 text-white sm:w-[74%] sm:p-5 lg:w-[24rem] xl:w-[28%] xl:min-w-[17rem] xl:p-[clamp(1rem,1.65vw,1.5rem)]"
    >
      <p className="text-[clamp(0.8rem,0.9vw,0.95rem)] text-white/80">Powered by</p>
      <p className="mt-0.5 text-[clamp(1rem,1.25vw,1.25rem)] font-extrabold text-lime">
        Shams Agency
      </p>

      <div className="mt-4 divide-y divide-white/14 xl:mt-[clamp(0.55rem,1.25vh,1rem)]">
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
            className="flex min-w-0 items-center gap-3 py-2.5 xl:gap-3.5 xl:py-[clamp(0.28rem,0.72vh,0.52rem)]"
          >
            <BrandLogo
              decorative
              variant="mark"
              className="size-7 shrink-0 xl:size-[clamp(1.55rem,1.9vw,1.95rem)]"
            />
            <span className="min-w-0 truncate text-sm font-extrabold text-white xl:text-[clamp(0.78rem,0.95vw,0.95rem)]">
              {service}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
