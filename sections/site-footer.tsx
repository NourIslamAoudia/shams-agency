import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
  { label: "About Us", href: "/#about" },
  { label: "FAQ", href: "/#contact" },
] as const;

const socialLinks = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "YouTube", href: "#", icon: FaYoutube },
] as const;

export function SiteFooter() {
  return (
    <footer id="footer" className="relative isolate min-h-[100svh] scroll-mt-4 overflow-x-hidden bg-black text-off-white lg:h-[100svh]">
      <Image
        src="/images/cta/image%208.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-34 mix-blend-screen"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgba(222,255,4,0.2),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(8,14,20,0.92)_48%,rgba(0,0,0,0.98)_100%)]" />

      <Container className="flex min-h-[100svh] flex-col justify-between py-9 sm:py-12 lg:h-[100svh] lg:min-h-0 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-start">
          <div>
            <BrandLogo variant="full" className="mb-5 h-auto w-32 sm:w-40 lg:w-44" />
            <div className="flex max-w-3xl flex-col items-start gap-4 sm:flex-row">
              <h2 className="text-[clamp(2rem,10vw,4rem)] font-black uppercase leading-[0.88] tracking-normal sm:text-[clamp(2.4rem,6vw,4rem)] lg:text-[clamp(2rem,3.65vw,4rem)]">
                Collaborate with Shams and start your design journey
              </h2>
              <Link
                href="/#contact"
                aria-label="Start a project with Shams Agency"
                className="group relative inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-lime text-navy transition-transform duration-300 hover:scale-105 sm:size-16 lg:size-20"
              >
                <span className="absolute inset-0 rounded-full border border-lime/80 border-t-white/70 transition-transform duration-700 group-hover:rotate-180" />
                <span className="relative size-8 overflow-hidden">
                  <ArrowUpRight
                    aria-hidden="true"
                    className="absolute inset-0 size-8 transition-transform duration-300 group-hover:-translate-y-8 group-hover:translate-x-8"
                  />
                  <ArrowUpRight
                    aria-hidden="true"
                    className="absolute inset-0 size-8 -translate-x-8 translate-y-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-black uppercase tracking-[0.12em] text-white/68 sm:gap-x-8">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link className="transition-colors hover:text-lime" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/78 transition-colors hover:border-lime hover:bg-lime hover:text-navy"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </Link>
              ))}
            </div>

            <p className="text-xs font-semibold text-white/54">
              &copy; 2026 Shams Agency. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 lg:mt-8">
          <p className="break-words text-[clamp(3.2rem,18vw,11rem)] font-black uppercase leading-none tracking-normal text-white drop-shadow-[0_14px_28px_rgba(66,34,229,0.35)] sm:whitespace-nowrap sm:text-[clamp(4.5rem,13vw,11rem)] lg:text-[clamp(3.5rem,10vw,11rem)]">
            Shams-2026
          </p>
        </div>
      </Container>
    </footer>
  );
}
