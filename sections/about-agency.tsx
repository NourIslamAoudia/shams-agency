"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { agencyStats } from "@/lib/site-content";

const aboutHeadline = [
  { text: "We're" },
  { text: "the" },
  { text: "digital" },
  { text: "department" },
  { text: "inside" },
  { text: "Shams", highlight: true },
  { text: "Djazair,", highlight: true },
  { text: "building" },
  { text: "the" },
  { text: "online" },
  { text: "systems" },
  { text: "that" },
  { text: "help" },
  { text: "clean-energy" },
  { text: "ideas" },
  { text: "move" },
  { text: "faster." },
] as const;

const aboutParagraph = [
  { text: "As" },
  { text: "part" },
  { text: "of" },
  { text: "one" },
  { text: "of" },
  { text: "Algeria's" },
  { text: "solar-energy" },
  { text: "players," },
  { text: "Shams" },
  { text: "Agency" },
  { text: "brings" },
  { text: "a" },
  { text: "builder's" },
  { text: "mindset" },
  { text: "to" },
  { text: "branding," },
  { text: "websites," },
  { text: "apps," },
  { text: "dashboards" },
  { text: "and" },
  { text: "AI" },
  { text: "tools." },
  { text: "We" },
  { text: "connect" },
  { text: "the" },
  { text: "parent" },
  { text: "company's" },
  { text: "renewable-energy" },
  { text: "mission" },
  { text: "with" },
  { text: "digital" },
  { text: "products" },
  { text: "that" },
  { text: "look", strong: true },
  { text: "sharp,", strong: true },
  { text: "work", strong: true },
  { text: "clearly,", strong: true },
  { text: "and", strong: true },
  { text: "scale.", strong: true },
] as const;

export function AboutAgency() {
  const reduceMotion = useReducedMotion();
  const revealRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ["start 82%", "end 48%"],
  });
  const viewport = { once: false, margin: "-15% 0px", amount: 0.2 };

  return (
    <section id="about" className="relative scroll-mt-4 overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-lime/20 blur-3xl" />

      <Container>
        <motion.div
          ref={revealRef}
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

              <ScrollScrubTextReveal progress={scrollYProgress} reduceMotion={reduceMotion} />
            </div>

            <ScrollScrubAboutWord progress={scrollYProgress} reduceMotion={reduceMotion} />
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
            <ScrollScrubParagraphReveal progress={scrollYProgress} reduceMotion={reduceMotion} />

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

function ScrollScrubTextReveal({
  progress,
  reduceMotion,
}: {
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const label =
    "We're the digital department inside Shams Djazair, building the online systems that help clean-energy ideas move faster.";

  if (reduceMotion) {
    return (
      <h2 className="max-w-5xl text-[clamp(1.9rem,9vw,4rem)] font-black leading-[1.04] tracking-normal text-navy sm:text-[clamp(2rem,5.6vw,4rem)] lg:text-[clamp(2rem,3.65vw,4rem)]">
        We&apos;re the digital department inside{" "}
        <span className="text-purple">Shams Djazair</span>, building the online systems that help
        clean-energy ideas move faster.
      </h2>
    );
  }

  return (
    <h2
      aria-label={label}
      className="max-w-5xl text-[clamp(1.9rem,9vw,4rem)] font-black leading-[1.04] tracking-normal sm:text-[clamp(2rem,5.6vw,4rem)] lg:text-[clamp(2rem,3.65vw,4rem)]"
    >
      {aboutHeadline.map((word, index) => (
        <RevealWord
          key={`${word.text}-${index}`}
          highlight={"highlight" in word}
          index={index}
          progress={progress}
          revealSize={0.08}
          segmentStart={0}
          segmentSpan={0.28}
          total={aboutHeadline.length}
          word={word.text}
        />
      ))}
    </h2>
  );
}

function RevealWord({
  highlight,
  index,
  progress,
  revealSize = 0.16,
  segmentSpan = 0.78,
  segmentStart = 0,
  total,
  word,
}: {
  highlight: boolean;
  index: number;
  progress: MotionValue<number>;
  revealSize?: number;
  segmentSpan?: number;
  segmentStart?: number;
  total: number;
  word: string;
}) {
  const start = Math.min(segmentStart + (index / total) * segmentSpan, 0.94);
  const end = Math.min(start + revealSize, 1);
  const opacity = useTransform(progress, [start, end], [0.22, 1]);
  const color = useTransform(
    progress,
    [start, end],
    highlight ? ["rgba(66, 34, 229, 0.22)", "#4222e5"] : ["rgba(25, 46, 69, 0.22)", "#192e45"],
  );

  return (
    <>
      <motion.span aria-hidden="true" className="inline-block" style={{ color, opacity }}>
        {word}
      </motion.span>{" "}
    </>
  );
}

function ScrollScrubAboutWord({
  progress,
  reduceMotion,
}: {
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const opacity = useTransform(progress, [0.14, 0.36], [0.025, 0.1]);

  if (reduceMotion) {
    return (
      <p className="text-right text-[clamp(3rem,7vw,7rem)] font-black leading-none text-navy/[0.08] max-lg:hidden">
        about
      </p>
    );
  }

  return (
    <motion.p
      aria-hidden="true"
      className="text-right text-[clamp(3rem,7vw,7rem)] font-black leading-none text-navy max-lg:hidden"
      style={{ opacity }}
    >
      about
    </motion.p>
  );
}

function ScrollScrubParagraphReveal({
  progress,
  reduceMotion,
}: {
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const label =
    "As part of one of Algeria's solar-energy players, Shams Agency brings a builder's mindset to branding, websites, apps, dashboards and AI tools. We connect the parent company's renewable-energy mission with digital products that look sharp, work clearly, and scale.";

  if (reduceMotion) {
    return (
      <p className="max-w-5xl text-[clamp(1.05rem,4.6vw,2rem)] font-semibold leading-[1.35] text-navy/60 sm:text-[clamp(1.15rem,3vw,2rem)] lg:text-[clamp(1.2rem,2vw,2rem)]">
        As part of one of Algeria&apos;s solar-energy players, Shams Agency brings a
        builder&apos;s mindset to branding, websites, apps, dashboards and AI tools. We connect the
        parent company&apos;s renewable-energy mission with digital products that{" "}
        <strong className="font-black text-navy">look sharp, work clearly, and scale.</strong>
      </p>
    );
  }

  return (
    <p
      aria-label={label}
      className="max-w-5xl text-[clamp(1.05rem,4.6vw,2rem)] font-semibold leading-[1.35] sm:text-[clamp(1.15rem,3vw,2rem)] lg:text-[clamp(1.2rem,2vw,2rem)]"
    >
      {aboutParagraph.map((word, index) => (
        <RevealParagraphWord
          key={`${word.text}-${index}`}
          index={index}
          progress={progress}
          strong={"strong" in word}
          total={aboutParagraph.length}
          word={word.text}
        />
      ))}
    </p>
  );
}

function RevealParagraphWord({
  index,
  progress,
  strong,
  total,
  word,
}: {
  index: number;
  progress: MotionValue<number>;
  strong: boolean;
  total: number;
  word: string;
}) {
  const start = Math.min(0.24 + (index / total) * 0.34, 0.9);
  const end = Math.min(start + 0.07, 1);
  const opacity = useTransform(progress, [start, end], [0.24, 1]);
  const color = useTransform(
    progress,
    [start, end],
    strong ? ["rgba(25, 46, 69, 0.24)", "#192e45"] : ["rgba(25, 46, 69, 0.24)", "rgba(25, 46, 69, 0.62)"],
  );

  return (
    <>
      <motion.span
        aria-hidden="true"
        className={strong ? "inline-block font-black" : "inline-block"}
        style={{ color, opacity }}
      >
        {word}
      </motion.span>{" "}
    </>
  );
}
