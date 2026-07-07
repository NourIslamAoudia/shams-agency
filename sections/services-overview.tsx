"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion, type MotionStyle, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { servicesPageItems } from "@/lib/site-content";
import type { ServiceItem } from "@/types/site";

const ease = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease, staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -56 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

type CardMotionStyle = {
  opacity?: MotionStyle["opacity"];
  transform?: MotionStyle["transform"];
  willChange?: MotionStyle["willChange"];
  zIndex?: number;
};

export function ServicesOverview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pb-14 pt-6 sm:pb-20 lg:pb-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.18 }}
          variants={sectionVariants}
        >
          <motion.div
            variants={itemVariants}
            className="grid gap-6 border-t border-navy/10 pt-8 lg:grid-cols-[0.72fr_0.58fr] lg:items-end lg:pt-10"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/60 px-3 py-1 text-xs font-semibold text-navy/70 shadow-sm">
                <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
                Our Services
              </div>
              <h1 className="max-w-4xl text-[clamp(3.4rem,8vw,8.75rem)] font-black leading-[0.82] tracking-normal text-navy">
                Our Services
              </h1>
            </div>

            <p className="max-w-xl text-base font-semibold leading-7 text-navy/62 sm:text-lg">
              Digital systems, deployment and support services built for Shams Djazair and teams
              that need reliable technology with a clean visual edge.
            </p>
          </motion.div>

          <ServicesSmoothShowcase reduceMotion={reduceMotion} />
        </motion.div>
      </Container>
    </section>
  );
}

function ServicesSmoothShowcase({ reduceMotion }: { reduceMotion: boolean | null }) {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const cardCount = servicesPageItems.length;

  useEffect(() => {
    if (reduceMotion || cardCount < 2) {
      return;
    }

    const root = showcaseRef.current;

    if (!root) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    let media: ReturnType<typeof gsap.matchMedia> | undefined;
    const ctx = gsap.context(() => {
      media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-service-card]"));

        if (cards.length < 2) {
          return;
        }

        gsap.set(cards, {
          autoAlpha: 0,
          force3D: true,
          xPercent: -110,
        });
        gsap.set(cards[0], {
          autoAlpha: 1,
          xPercent: 0,
        });
        cards.forEach((card, index) => {
          gsap.set(card, { zIndex: index + 1 });
        });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            anticipatePin: 1,
            end: () => `+=${(cards.length - 1) * window.innerHeight}`,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1.1,
            start: "top 25%",
            trigger: root,
          },
        });

        for (let index = 0; index < cards.length - 1; index += 1) {
          timeline.to(
            cards[index],
            {
              autoAlpha: 0,
              duration: 1,
              xPercent: 110,
            },
            index,
          );
          timeline.fromTo(
            cards[index + 1],
            {
              autoAlpha: 0,
              xPercent: -110,
            },
            {
              autoAlpha: 1,
              duration: 1,
              xPercent: 0,
            },
            index,
          );
        }

        ScrollTrigger.refresh();
      });
    }, root);

    return () => {
      media?.revert();
      ctx.revert();
    };
  }, [cardCount, reduceMotion]);

  if (reduceMotion || cardCount < 2) {
    return (
      <div className="mx-auto mt-8 max-w-[1584px] space-y-7 lg:mt-12 lg:space-y-10">
        {servicesPageItems.map((service, index) => (
          <SmoothServiceCard
            key={service.title}
            index={index}
            mode="static"
            reduceMotion={reduceMotion}
            service={service}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-[1584px] lg:mt-12">
      <div className="space-y-7 lg:hidden">
        {servicesPageItems.map((service, index) => (
          <SmoothServiceCard
            key={service.title}
            index={index}
            mode="static"
            reduceMotion={reduceMotion}
            service={service}
          />
        ))}
      </div>

      <div ref={showcaseRef} className="hidden lg:block">
        <div className="relative aspect-[1584/672] overflow-hidden">
          {servicesPageItems.map((service, index) => (
            <SmoothServiceCard
              key={service.title}
              index={index}
              mode="stacked"
              motionStyle={{
                opacity: index === 0 ? 1 : 0,
                transform: index === 0 ? "translate3d(0%, 0, 0)" : "translate3d(-110%, 0, 0)",
                willChange: "transform, opacity",
                zIndex: index + 1,
              }}
              reduceMotion={false}
              service={service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SmoothServiceCard({
  index,
  mode = "static",
  motionStyle,
  reduceMotion,
  service,
}: {
  index: number;
  mode?: "stacked" | "static";
  motionStyle?: CardMotionStyle;
  reduceMotion: boolean | null;
  service: ServiceItem;
}) {
  return (
    <motion.article
      data-service-card={mode === "stacked" ? "true" : undefined}
      initial={mode === "static" && !reduceMotion ? "hidden" : false}
      style={motionStyle}
      variants={mode === "static" ? cardVariants : undefined}
      viewport={{ once: false, amount: 0.22 }}
      whileInView={mode === "static" && !reduceMotion ? "visible" : undefined}
      className={`group relative aspect-[1584/672] overflow-hidden rounded-[1.25rem] border border-navy/10 bg-navy text-off-white shadow-[0_26px_80px_rgba(25,46,69,0.16)] sm:rounded-[1.75rem] lg:rounded-[2rem]${
        mode === "stacked" ? " absolute inset-0 w-full" : ""
      }`}
    >
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1584px) 1584px, 100vw"
          className="object-cover"
          priority={index === 0}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,46,69,0.96)_0%,rgba(25,46,69,0.88)_31%,rgba(25,46,69,0.48)_59%,rgba(66,34,229,0.1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_84%,rgba(224,255,4,0.16),transparent_31%)]" />

      <div className="relative flex h-full max-w-[43rem] flex-col justify-center p-3 sm:p-8 lg:p-12 xl:p-14">
        <p className="mb-2 font-mono text-[0.63rem] font-black tracking-[0.16em] text-lime sm:mb-5 sm:text-sm">
          ({String(index + 1).padStart(2, "0")})
        </p>

        <h2 className="max-w-[13ch] text-[clamp(1.2rem,6.6vw,7.1rem)] font-black leading-[0.86] tracking-normal">
          <span className="text-lime">{service.title.split(" ")[0]}</span>
          {service.title.includes(" ") ? (
            <>
              <br />
              {service.title.split(" ").slice(1).join(" ")}
            </>
          ) : null}
        </h2>

        <p className="mt-2 line-clamp-2 max-w-xl text-[0.63rem] font-medium leading-4 text-white/78 sm:mt-6 sm:text-base sm:leading-7 lg:line-clamp-none">
          {service.description}
        </p>

        <div className="mt-3 sm:mt-7">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-lime px-3 py-2 text-[0.68rem] font-black text-navy transition-colors hover:bg-off-white sm:gap-3 sm:px-5 sm:py-3 sm:text-sm"
          >
            Discover More
            <ArrowUpRight aria-hidden="true" className="size-3.5 sm:size-[18px]" />
          </Link>
        </div>

        <div className="mt-7 hidden max-w-2xl flex-wrap gap-x-5 gap-y-2 sm:flex">
          {service.tags.map((tag, tagIndex) => (
            <span
              key={tag}
              className={
                tagIndex === 0
                  ? "text-xs font-semibold text-white/80"
                  : "text-xs font-semibold text-lime"
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
