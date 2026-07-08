"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { workflowSteps } from "@/lib/site-content";
import type { ProcessStep } from "@/types/site";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: smoothEase },
  },
};

export function ProcessWorkflow() {
  const reduceMotion = useReducedMotion();
  const viewport = { once: false, amount: 0.3, margin: "-12% 0px" };

  return (
    <section className="pb-14 pt-2 sm:pb-20 lg:pb-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewport}
          variants={sectionVariants}
          className="relative overflow-hidden rounded-[2rem] bg-navy p-5 text-off-white shadow-[0_28px_90px_rgba(25,46,69,0.22)] sm:p-7 lg:rounded-[2.4rem] lg:p-10"
        >
          <div className="relative grid gap-5 xl:grid-cols-[0.72fr_1.28fr] xl:items-stretch">
            <motion.div
              variants={itemVariants}
              className="grid gap-4 rounded-[1.65rem] border border-white/12 bg-white/[0.04] p-5 sm:p-7"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                  <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
                  Workflow
                </div>

                <h2 className="mt-8 max-w-[18rem] text-5xl font-black leading-[0.94] tracking-normal text-off-white sm:max-w-[24rem] sm:text-6xl xl:text-7xl">
                  How we process?
                </h2>

                <p className="mt-5 max-w-sm text-sm font-medium leading-6 text-white/65 sm:text-base sm:leading-7">
                  A simple production flow for turning Shams ideas into clear digital products.
                </p>
              </div>

              <motion.div
                variants={itemVariants}
                className="relative mt-auto rounded-[1.35rem] bg-off-white p-5 text-navy shadow-[0_18px_45px_rgba(0,0,0,0.14)] sm:p-6"
              >
                <p className="max-w-[28rem] text-3xl font-black leading-[1.02] tracking-normal sm:text-4xl xl:text-[2.75rem]">
                  Well-planned <span className="text-purple">digital workflow</span> with clean{" "}
                  <span className="text-lime [text-shadow:0_1px_0_#192E45]">launch process</span>{" "}
                  execution.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-[1.65rem] border border-white/25 bg-navy/40 p-5 backdrop-blur-sm sm:p-7 lg:p-9 xl:min-h-full"
            >
              <div className="grid sm:grid-rows-[repeat(3,minmax(12rem,1fr))]">
                {workflowSteps.map((step, index) => (
                  <WorkflowStep
                    key={step.title}
                    index={index}
                    reduceMotion={reduceMotion}
                    step={step}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function WorkflowStep({
  index,
  reduceMotion,
  step,
}: {
  index: number;
  reduceMotion: boolean | null;
  step: ProcessStep;
}) {
  return (
    <motion.article
      variants={itemVariants}
      className="group grid min-h-0 gap-4 border-white/14 py-5 [&:not(:last-child)]:border-b sm:grid-cols-[3.5rem_5.5rem_1fr] sm:items-start lg:py-6 xl:grid-cols-[4rem_6.5rem_1fr]"
    >
      <motion.p
        whileHover={reduceMotion ? undefined : { scale: 1.08, x: 3 }}
        className="font-mono text-2xl font-black leading-none text-lime sm:text-3xl"
      >
        {String(index + 1).padStart(2, "0")}
      </motion.p>

      <ProcessArrow reduceMotion={reduceMotion} />

      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-3xl font-black leading-[0.98] tracking-normal text-off-white transition-colors duration-300 group-hover:text-lime sm:text-4xl lg:text-[2.65rem]">
            {step.title}
          </h3>

          <motion.a
            href="/#contact"
            aria-label={`Start ${step.title}`}
            whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 8, x: 2, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-white/18 bg-white/5 text-off-white transition-colors duration-300 hover:border-lime hover:bg-lime hover:text-navy"
          >
            <ArrowUpRight aria-hidden="true" size={21} />
          </motion.a>
        </div>

        <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-white/68 sm:text-base sm:leading-7">
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}

function ProcessArrow({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 120 20"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: false, amount: 0.9 }}
      className="hidden h-5 w-24 text-off-white/85 sm:mt-1 sm:block xl:w-28"
    >
      <motion.path
        d="M4 10H104"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        variants={{
          hidden: { pathLength: 0, opacity: 0.35 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.7, ease: smoothEase },
          },
        }}
      />
      <motion.path
        d="M96 4L106 10L96 16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        variants={{
          hidden: { opacity: 0, x: -8 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { delay: 0.2, duration: 0.45, ease: smoothEase },
          },
        }}
      />
    </motion.svg>
  );
}
