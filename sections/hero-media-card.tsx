"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { IconButton } from "@/components/ui/icon-button";
import { brandAssets, socialLinks } from "@/lib/site-content";
import { HeroServiceList } from "@/sections/hero-service-list";
import type { SocialItem } from "@/types/site";

const socialIconMap: Record<SocialItem["icon"], IconType> = {
  behance: FaBehance,
  dribbble: FaDribbble,
  github: FaGithub,
  linkedin: FaLinkedinIn,
};

export function HeroMediaCard() {
  const reduceMotion = useReducedMotion();
  const viewport = { once: false, amount: 0.35 };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-5 h-[22rem] overflow-hidden rounded-[1.7rem] bg-navy shadow-[0_24px_70px_rgba(25,46,69,0.16)] sm:h-[27rem] lg:h-[clamp(18.5rem,42vh,31rem)] lg:rounded-[2rem]"
    >
      <motion.div
        animate={reduceMotion ? undefined : { scale: [1.03, 1.055, 1.03], x: ["0%", "-1%", "0%"] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        className="absolute inset-0"
      >
        <Image
          src={brandAssets.hero}
          alt="Digital product systems by Shams Agency"
          fill
          priority
          sizes="(min-width: 1500px) 1380px, calc(100vw - 40px)"
          className="object-cover object-center"
        />
      </motion.div>

      <HeroServiceList />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.92 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={viewport}
        transition={{ delay: 0.95, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[8%] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-base font-semibold text-white lg:flex"
      >
        <IconButton
          href="/work"
          label="View projects"
          className="size-[clamp(4.1rem,5.5vw,5.4rem)] border-2 border-lime shadow-2xl"
        >
          <ArrowUpRight aria-hidden="true" className="size-[clamp(1.9rem,2.5vw,2.4rem)]" />
        </IconButton>
        <span>View Projects</span>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 22 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ delay: 1.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[7%] right-[4%] hidden text-white lg:block"
      >
        <p className="mb-3 text-lg font-medium">Follow Us</p>
        <div className="flex items-center gap-2.5">
          {socialLinks.map((item) => (
            <HeroSocialLink key={item.label} item={item} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroSocialLink({ item }: { item: SocialItem }) {
  const SocialIcon = socialIconMap[item.icon];

  return (
    <IconButton href={item.href} label={item.label} className="size-10 xl:size-11">
      <SocialIcon aria-hidden="true" className="size-4 xl:size-5" />
    </IconButton>
  );
}
