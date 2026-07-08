"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { servicesPageItems } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types/site";

export function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-4 pb-14 pt-6 sm:pb-20 lg:pb-24">
      <Container>
        <div className="grid gap-6 border-t border-navy/10 pt-8 lg:grid-cols-[0.72fr_0.58fr] lg:items-end lg:pt-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/60 px-3 py-1 text-xs font-semibold text-navy/70 shadow-sm">
              <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
              Services
            </div>
            <h2 className="max-w-4xl text-[clamp(2.45rem,12vw,6.5rem)] font-black leading-[0.88] tracking-normal text-navy sm:text-[clamp(3rem,8vw,6.5rem)] lg:text-[clamp(3rem,5.8vw,6.5rem)]">
              Our Services
            </h2>
          </div>

          <p className="max-w-xl text-base font-semibold leading-7 text-navy/62 sm:text-lg">
            We help plan, build and maintain the web, mobile and internal systems that support real
            operations, not just launch-day impressions.
          </p>
        </div>
      </Container>

      <ServicesShowcase />
    </section>
  );
}

function ServicesShowcase() {
  const reduceMotion = useReducedMotion();
  const showcaseRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const showcase = showcaseRef.current;
    const deck = deckRef.current;

    if (!showcase || !deck) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    let media: ReturnType<typeof gsap.matchMedia> | undefined;
    const ctx = gsap.context(() => {
      media = gsap.matchMedia();

      media.add("(max-width: 1023px)", () => {
        return setupPinnedServiceCards(deck, showcase, 20);
      });

      media.add("(min-width: 1024px)", () => {
        return setupPinnedServiceCards(deck, showcase, 64);
      });
    }, showcase);

    return () => {
      media?.revert();
      ctx.revert();
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <Container>
        <StaticServicesShowcase />
      </Container>
    );
  }

  return (
    <div
      ref={showcaseRef}
      className="relative mt-8 flex h-[100svh] w-full items-center overflow-hidden bg-off-white [--service-card-height:min(72svh,34rem)] [--service-card-top:calc((100svh-var(--service-card-height))/2)] [--service-card-width:min(86vw,25rem)] sm:[--service-card-height:min(68svh,36rem)] sm:[--service-card-width:min(82vw,36rem)] lg:mt-12 lg:[--service-card-height:calc(var(--service-card-width)*672/1584)] lg:[--service-card-width:min(76vw,1280px)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4vw] right-[4vw] top-[16vh] h-px bg-navy/10" />
        <div className="absolute bottom-[12vh] left-[4vw] right-[4vw] h-px bg-navy/10" />
      </div>

      <div className="pointer-events-none absolute left-[4vw] top-[6vh] z-30 flex items-center gap-3 sm:top-[8vh]">
        <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-3 py-1 text-xs font-semibold text-navy/70 shadow-sm backdrop-blur">
          <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
          Service focus
        </div>
      </div>

      <div className="pointer-events-none absolute right-[4vw] top-[8vh] z-30 hidden text-right sm:block">
        <p className="font-mono text-xs font-black tracking-[0.14em] text-navy/45">
          {String(servicesPageItems.length).padStart(2, "0")} SERVICES
        </p>
        <p className="mt-1 max-w-56 text-sm font-semibold leading-5 text-navy/60">
          Planning, delivery and long-term support from one team.
        </p>
      </div>

      <div ref={deckRef} className="relative h-full w-full">
        {servicesPageItems.map((service, index) => (
          <ServiceCard
            key={service.title}
            className="absolute left-[5vw] top-[var(--service-card-top)] sm:left-[4vw]"
            dataPinnedCard
            index={index}
            pinned
            service={service}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-[6vh] left-[4vw] z-30 hidden gap-3 sm:flex lg:bottom-[7vh]">
        {["Plan", "Design", "Build", "Support"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-navy/10 bg-white/60 px-4 py-2 text-xs font-semibold text-navy/65 shadow-sm backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function setupPinnedServiceCards(
  deck: HTMLDivElement,
  showcase: HTMLDivElement,
  peek: number,
) {
  const cards = Array.from(deck.querySelectorAll<HTMLElement>("[data-pinned-service-card]"));

  if (cards.length === 0) {
    return;
  }

  const getLeftExitX = () => {
    const cardWidth = cards[0]?.offsetWidth ?? 0;
    return -(cardWidth + window.innerWidth * 0.08);
  };

  gsap.set(cards, {
    autoAlpha: 1,
    force3D: true,
    x: (index) => index * peek,
    zIndex: (index) => cards.length - index,
  });

  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      anticipatePin: 1,
      end: () => `+=${cards.length * window.innerHeight}`,
      invalidateOnRefresh: true,
      pin: true,
      scrub: 1,
      start: "top top",
      trigger: showcase,
    },
  });

  cards.forEach((card, index) => {
    timeline.to(
      card,
      {
        autoAlpha: 0,
        duration: 1,
        x: () => getLeftExitX(),
      },
      index,
    );

    if (cards[index + 1]) {
      timeline.to(
        cards.slice(index + 1),
        {
          duration: 1,
          x: (cardIndex) => cardIndex * peek,
        },
        index,
      );
    }
  });

  ScrollTrigger.refresh();

  return () => {
    timeline.scrollTrigger?.kill();
    timeline.kill();
    gsap.set(cards, { clearProps: "opacity,visibility,transform,zIndex" });
  };
}

function StaticServicesShowcase() {
  return (
    <div className="mx-auto mt-8 max-w-[1584px] space-y-7 lg:mt-12 lg:space-y-10">
      {servicesPageItems.map((service, index) => (
        <ServiceCard key={service.title} index={index} service={service} />
      ))}
    </div>
  );
}

function ServiceCard({
  className,
  dataPinnedCard = false,
  index,
  pinned = false,
  service,
}: {
  className?: string;
  dataPinnedCard?: boolean;
  index: number;
  pinned?: boolean;
  service: ServiceItem;
}) {
  return (
    <article
      data-pinned-service-card={dataPinnedCard ? "true" : undefined}
      className={cn(
        "group relative overflow-hidden bg-navy text-off-white shadow-[0_26px_80px_rgba(25,46,69,0.16)]",
        pinned
          ? "h-[var(--service-card-height)] w-[var(--service-card-width)] shrink-0 rounded-[1.75rem] border border-navy/10"
          : "min-h-[31rem] rounded-[1.25rem] border border-navy/10 sm:min-h-[34rem] sm:rounded-[1.75rem] md:min-h-[36rem] lg:aspect-[1584/672] lg:min-h-0 lg:rounded-[2rem]",
        className,
      )}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[58%] sm:inset-0 sm:h-auto">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1584px) 1584px, 100vw"
          className="object-cover object-[82%_center] sm:object-[68%_center] lg:object-center"
          priority={index === 0}
        />
      </div>

      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(25,46,69,0.96)_0%,rgba(25,46,69,0.88)_31%,rgba(25,46,69,0.48)_59%,rgba(66,34,229,0.1)_100%)] sm:block" />
      <div className="absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(180deg,rgba(25,46,69,0)_0%,rgba(25,46,69,0.98)_28%,rgba(25,46,69,1)_100%)] sm:hidden" />

      <div className="relative flex h-full max-w-[43rem] flex-col justify-end p-4 sm:justify-center sm:p-8 lg:p-12 xl:p-14">
        <div className="sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0">
          <p className="mb-2 font-mono text-[0.68rem] font-black tracking-[0.14em] text-lime sm:mb-5 sm:text-sm">
            ({String(index + 1).padStart(2, "0")})
          </p>

          <h2 className="w-full max-w-full break-words text-[clamp(1.65rem,7.8vw,2.35rem)] font-black leading-[0.92] tracking-normal sm:text-[clamp(3rem,8vw,5.4rem)] md:text-[clamp(3.4rem,7vw,6rem)] lg:max-w-[13ch] lg:text-[clamp(3rem,6.6vw,7.1rem)] lg:leading-[0.86]">
            <span className="text-lime">{service.title.split(" ")[0]}</span>
            {service.title.includes(" ") ? (
              <>
                <br />
                {service.title.split(" ").slice(1).join(" ")}
              </>
            ) : null}
          </h2>

          <p className="mt-2 max-w-xl text-xs font-medium leading-5 text-white/82 sm:mt-6 sm:text-base sm:leading-7">
            {service.description}
          </p>

          <div className="mt-3 sm:mt-7">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-md bg-lime px-3 py-2 text-xs font-black text-navy transition-colors hover:bg-off-white sm:gap-3 sm:px-5 sm:py-3 sm:text-sm"
            >
              Talk to us
              <ArrowUpRight aria-hidden="true" className="size-3.5 sm:size-[18px]" />
            </Link>
          </div>

          <div className="mt-3 flex max-w-2xl flex-wrap gap-x-3 gap-y-1.5 sm:mt-7 sm:gap-x-5 sm:gap-y-2">
            {service.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className={
                  tagIndex === 0
                    ? "text-[0.68rem] font-semibold text-white/80 sm:text-xs"
                    : "text-[0.68rem] font-semibold text-lime sm:text-xs"
                }
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
