import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/contact" },
] as const;

const socialLinks = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "YouTube", href: "#", icon: FaYoutube },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-black text-off-white">
      <Image
        src="/images/cta/image%208.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-34 mix-blend-screen"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgba(222,255,4,0.2),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(8,14,20,0.92)_48%,rgba(0,0,0,0.98)_100%)]" />

      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-start">
          <div>
            <BrandLogo variant="mark" className="mb-7 size-12" />
            <p className="font-mono text-sm font-black uppercase tracking-[0.18em] text-lime">
              Shams Agency
            </p>
            <div className="mt-4 flex max-w-2xl items-start gap-5">
              <h2 className="text-[clamp(2.2rem,4.5vw,4.9rem)] font-black uppercase leading-[0.86] tracking-normal">
                Collaborate with Shams and start your design journey
              </h2>
              <Link
                href="/contact"
                aria-label="Start a project with Shams Agency"
                className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-lime text-navy shadow-[0_0_40px_rgba(222,255,4,0.34)] transition-transform hover:scale-105 sm:size-20"
              >
                <ArrowUpRight aria-hidden="true" className="size-8" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-9 lg:items-end">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-black uppercase tracking-[0.12em] text-white/68">
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
              © 2026 Shams Agency. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-[clamp(4.5rem,14vw,15rem)] font-black uppercase leading-none tracking-normal text-white drop-shadow-[0_14px_28px_rgba(66,34,229,0.35)]">
            Shams-2026
          </p>
        </div>
      </Container>
    </footer>
  );
}
