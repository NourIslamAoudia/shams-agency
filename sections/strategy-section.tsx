"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { BrandLogo } from "@/components/brand-logo";

const strategyItems = [
  {
    title: "Clear & Collaborative Process",
    number: "01",
    tone: "lime",
  },
  {
    title: "Design That Converts",
    number: "02",
    tone: "navy",
  },
  {
    title: "Problem-Driven Systems",
    number: "03",
    tone: "lime",
  },
  {
    title: "Built to Scale",
    number: "04",
    tone: "navy",
  },
  {
    title: "Focus on Usability",
    number: "05",
    tone: "lime",
  },
  {
    title: "We Listen First",
    number: "06",
    tone: "navy",
  },
] as const;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function StrategySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="strategy" className="min-h-[100svh] scroll-mt-4 overflow-x-hidden bg-navy px-5 py-12 text-off-white sm:px-8 sm:py-16 lg:flex lg:items-center lg:px-[3.75rem] lg:py-20">
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: false, amount: 0.18 }}
        variants={sectionVariants}
        className="mx-auto w-full max-w-[1500px]"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(18rem,0.28fr)] lg:items-start">
          <motion.div variants={itemVariants} className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-white/78">
              <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
              Our Strategy
            </div>
            <h2 className="max-w-[62rem] text-[clamp(2.45rem,12vw,6rem)] font-black leading-[0.88] tracking-normal sm:text-[clamp(3rem,8vw,6rem)] lg:text-[clamp(2.5rem,5.5vw,6rem)]">
              Our <span className="text-lime">strategy</span> of working with you
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-sm justify-self-start text-sm font-semibold leading-6 text-white/62 sm:text-base sm:leading-7 lg:justify-self-end"
          >
            We understand your goals, shape the right digital direction, then build clean systems
            that are useful, stable and ready to grow.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-9 grid overflow-hidden rounded-[1.2rem] border border-white/10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
        >
          {strategyItems.map((item) => (
            <motion.article
              key={item.number}
              variants={itemVariants}
              className={
                item.tone === "navy"
                  ? "min-h-40 border-white/10 bg-[#101f2d] p-5 text-off-white sm:border-l lg:min-h-48 xl:min-h-56"
                  : "min-h-40 border-white/10 bg-lime p-5 text-navy sm:border-l lg:min-h-48 xl:min-h-56"
              }
            >
              <div className="flex h-full flex-col justify-between gap-10">
                <h3 className="max-w-[13rem] text-lg font-black leading-none">{item.title}</h3>
                <p
                  className={
                    item.tone === "navy"
                      ? "font-mono text-sm font-black text-lime"
                      : "font-mono text-sm font-black text-navy/60"
                  }
                >
                  {item.number}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center">
            {["R", "C", "I"].map((letter, index) => (
              <span
                key={letter}
                className="-ml-2 first:ml-0 inline-flex size-9 items-center justify-center rounded-full border-2 border-navy bg-off-white text-xs font-black text-navy"
                style={{ zIndex: 3 - index }}
              >
                {letter}
              </span>
            ))}
            <span className="-ml-2 inline-flex size-9 items-center justify-center rounded-full border-2 border-navy bg-lime text-sm font-black text-navy">
              +
            </span>
            <p className="ml-4 text-sm font-bold text-white/62">
              Team alignment before every build
            </p>
          </div>

          <div className="flex items-baseline gap-3">
            <p className="text-5xl font-black text-lime sm:text-6xl">03</p>
            <p className="max-w-44 text-sm font-bold leading-5 text-white/62">
              Core specialists moving one product forward.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
