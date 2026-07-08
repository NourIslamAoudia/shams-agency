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
      className="relative mt-5 h-[33rem] overflow-hidden rounded-[1.35rem] bg-navy shadow-[0_24px_70px_rgba(25,46,69,0.16)] sm:h-[32rem] sm:rounded-[1.7rem] md:h-[29rem] lg:h-[clamp(24rem,42vh,31rem)] lg:rounded-[2rem]"
    >
      <motion.div
        animate={reduceMotion ? undefined : { scale: [1.03, 1.055, 1.03], x: ["0%", "-1%", "0%"] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        className="absolute inset-0"
      >
        <Image
          src={brandAssets.heroMobile}
          alt="Digital product systems by Shams Agency"
          fill
          priority
          sizes="calc(100vw - 40px)"
          className="object-cover object-center sm:hidden"
        />
        <Image
          src={brandAssets.hero}
          alt="Digital product systems by Shams Agency"
          fill
          priority
          sizes="(min-width: 1500px) 1380px, calc(100vw - 40px)"
          className="hidden object-cover object-[64%_center] sm:block xl:object-center"
        />
      </motion.div>
      <HeroServiceList />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.92 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={viewport}
        transition={{ delay: 0.95, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-4 left-4 z-20 flex items-center gap-3 text-sm font-semibold text-white sm:bottom-5 lg:bottom-[8%] lg:left-1/2 lg:-translate-x-1/2 lg:flex-col lg:text-base"
      >
        <IconButton
          href="/#services"
          label="View projects"
          className="size-12 border-2 border-lime shadow-2xl sm:size-14 lg:size-[clamp(4.1rem,5.5vw,5.4rem)]"
        >
          <ArrowUpRight aria-hidden="true" className="size-5 lg:size-[clamp(1.9rem,2.5vw,2.4rem)]" />
        </IconButton>
        <span>View Projects</span>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 22 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ delay: 1.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-4 right-4 z-20 hidden text-white sm:block lg:bottom-[7%] lg:right-[4%]"
      >
        <p className="mb-3 hidden text-lg font-medium lg:block">Follow Us</p>
        <div className="flex items-center gap-2 sm:gap-2.5">
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
    <IconButton href={item.href} label={item.label} className="size-9 lg:size-10 xl:size-11">
      <SocialIcon aria-hidden="true" className="size-4 xl:size-5" />
    </IconButton>
  );
}
