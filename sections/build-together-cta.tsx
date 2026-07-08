"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";

export function BuildTogetherCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative min-h-[100svh] scroll-mt-4 overflow-hidden text-off-white">
      <motion.div
        initial={reduceMotion ? false : { scale: 1.08, opacity: 0.72 }}
        whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/cta/image%209.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,46,69,0.96)_0%,rgba(25,46,69,0.86)_48%,rgba(25,46,69,0.46)_100%)] lg:bg-[linear-gradient(90deg,rgba(25,46,69,0.92)_0%,rgba(25,46,69,0.72)_34%,rgba(25,46,69,0.28)_68%,rgba(25,46,69,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/65 to-transparent" />

      <Container className="relative flex min-h-[100svh] items-center py-16 sm:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 42 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-lime shadow-sm backdrop-blur"
          >
            <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
            Start the build
          </motion.div>

          <h2 className="max-w-4xl text-[clamp(2.75rem,14vw,8rem)] font-black leading-[0.86] tracking-normal sm:text-[clamp(3.6rem,10vw,8rem)] lg:text-[clamp(3.2rem,8vw,8rem)]">
            Let&apos;s build something amazing together
          </h2>

          <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-white/76 sm:text-xl sm:leading-8">
            Whether you&apos;re starting fresh or scaling up, our team is ready to shape the digital
            system that moves your idea forward.
          </p>

          <div className="mt-9">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-md bg-lime px-6 py-4 text-sm font-black text-navy transition-colors hover:bg-off-white"
            >
              Let&apos;s Talk
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-navy text-lime">
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </span>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
