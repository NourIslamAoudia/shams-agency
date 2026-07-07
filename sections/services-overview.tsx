"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
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
    <section className="pb-14 pt-6 sm:pb-20 lg:pb-24">
      <Container>
        <div className="grid gap-6 border-t border-navy/10 pt-8 lg:grid-cols-[0.72fr_0.58fr] lg:items-end lg:pt-10">
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
            Digital systems, deployment and support services built for Shams Djazair and teams that
            need reliable technology with a clean visual edge.
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

      media.add("(min-width: 1024px)", () => {
        const cards = Array.from(deck.querySelectorAll<HTMLElement>("[data-pinned-service-card]"));
        const peek = 64;

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
    <>
      <div className="lg:hidden">
        <Container>
          <StaticServicesShowcase />
        </Container>
      </div>

      <div
        ref={showcaseRef}
        className="relative mt-8 hidden h-screen w-screen items-center overflow-hidden lg:flex lg:mt-12"
        style={
          {
            "--service-card-height": "calc(var(--service-card-width) * 672 / 1584)",
            "--service-card-top": "calc((100vh - var(--service-card-height)) / 2)",
            "--service-card-width": "min(72vw, 1280px)",
          } as CSSProperties
        }
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-[4vw] top-[7vh] text-[13vw] font-black leading-none tracking-normal text-navy/[0.035]">
            SERVICES
          </div>
          <div className="absolute left-[4vw] right-[4vw] top-[16vh] h-px bg-navy/10" />
          <div className="absolute bottom-[12vh] left-[4vw] right-[4vw] h-px bg-navy/10" />
          <div className="absolute right-[7vw] top-[18vh] h-24 w-24 rounded-full border border-navy/10" />
          <div className="absolute bottom-[15vh] right-[12vw] h-3 w-3 rounded-full bg-lime shadow-[0_0_32px_rgba(224,255,4,0.75)]" />
        </div>

        <div className="pointer-events-none absolute left-[4vw] top-[8vh] z-30 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-navy/70 shadow-sm backdrop-blur">
            <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
            Service Stack
          </div>
          <span className="font-mono text-xs font-black tracking-[0.18em] text-navy/45">
            Scroll to explore
          </span>
        </div>

        <div className="pointer-events-none absolute right-[4vw] top-[8vh] z-30 text-right">
          <p className="font-mono text-xs font-black tracking-[0.18em] text-navy/45">
            {String(servicesPageItems.length).padStart(2, "0")} SERVICES
          </p>
          <p className="mt-1 max-w-56 text-sm font-semibold leading-5 text-navy/60">
            Digital work, launch support and long-term care in one flow.
          </p>
        </div>

        <div ref={deckRef} className="relative h-full w-full">
          {servicesPageItems.map((service, index) => (
            <ServiceCard
              key={service.title}
              className="absolute left-[4vw] top-[var(--service-card-top)]"
              dataPinnedCard
              index={index}
              pinned
              service={service}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-[7vh] left-[4vw] z-30 flex gap-3">
          {["Strategy", "Build", "Deploy", "Support"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-navy/10 bg-white/55 px-4 py-2 text-xs font-black text-navy/65 shadow-sm backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-[7vh] right-[4vw] z-30 font-mono text-xs font-black tracking-[0.18em] text-navy/45">
          Cards exit left / reverse on scroll up
        </div>
      </div>
    </>
  );
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
          : "aspect-[1584/672] rounded-[1.25rem] border border-navy/10 sm:rounded-[1.75rem] lg:rounded-[2rem]",
        className,
      )}
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
    </article>
  );
}
