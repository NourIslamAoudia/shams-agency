"use client";

import { motion, useReducedMotion } from "framer-motion";

import { PartnerLogo } from "@/components/partner-logo";
import { partnerLogos } from "@/lib/site-content";

export function PartnerStrip() {
  const reduceMotion = useReducedMotion();
  const viewport = { once: false, amount: 0.4 };

  return (
    <div className="grid grid-cols-2 items-center gap-y-4 py-[clamp(0.65rem,1.5vh,1.25rem)] sm:grid-cols-3 lg:grid-cols-6">
      {partnerLogos.map((partner, index) => (
        <motion.div
          key={partner.name}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 1.08 + index * 0.055, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-h-10 items-center justify-center border-navy/10 px-3 lg:border-r lg:last:border-r-0"
        >
          <PartnerLogo partner={partner} />
        </motion.div>
      ))}
    </div>
  );
}
