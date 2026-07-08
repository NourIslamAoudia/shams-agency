"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";

type Company = "djezzy" | "mobilis" | "shams";

const teamMembers = [
  {
    name: "Ramy Bezriche",
    role: "Front End",
    image: "/images/team/ramy.png",
    summary:
      "Turns interface designs into fast, responsive front-end experiences with attention to detail.",
    projects: [
      { company: "djezzy", label: "Djezzy One", year: "2025" },
      { company: "shams", label: "Shams", year: "2026" },
    ],
    skills: ["UI build", "React", "Performance", "Design systems"],
  },
  {
    name: "Graba Chakib",
    role: "Full Stack",
    image: "/images/team/graba.jpg",
    summary:
      "Connects product interfaces with backend logic, APIs and deployment workflows.",
    projects: [
      { company: "mobilis", label: "Mobilis", year: "2025" },
      { company: "shams", label: "Shams", year: "2026" },
    ],
    skills: ["Full stack", "APIs", "Dashboards", "Deployment"],
  },
  {
    name: "Nour Islam Aoudia",
    role: "Backend",
    image: "/images/team/islam.jpg",
    profileUrl:
      "https://www.linkedin.com/in/nour-islam-aoudia-594b5026a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B54AXGOzWT5ScNdvG7IkfyA%3D%3D",
    summary: "Builds backend foundations, data flows and services that keep products reliable.",
    projects: [{ company: "shams", label: "Shams", year: "2026" }],
    skills: ["Backend", "Databases", "Security", "Services"],
  },
] as const;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function TeamCredits() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="team" className="scroll-mt-4 pb-16 pt-6 sm:pb-24 lg:pb-28">
      <Container>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: false, amount: 0.18 }}
          variants={sectionVariants}
          className="border-t border-navy/10 pt-8 lg:pt-12"
        >
          <motion.div
            variants={itemVariants}
            className="grid gap-6 lg:grid-cols-[0.9fr_0.5fr] lg:items-end"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/65 px-3 py-1 text-xs font-semibold text-navy/70 shadow-sm">
                <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
                Team
              </div>
              <h2 className="max-w-5xl text-[clamp(2.35rem,11vw,6.5rem)] font-black leading-[0.88] tracking-normal text-navy sm:text-[clamp(2.9rem,8vw,6.5rem)] lg:text-[clamp(3rem,6.4vw,6.5rem)]">
                The people behind the work
              </h2>
            </div>

            <p className="max-w-xl text-base font-semibold leading-7 text-navy/62 sm:text-lg">
              A small technical team with hands-on experience across telecom, product interfaces
              and backend systems.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} className="mt-9 space-y-4 lg:mt-12">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                tabIndex={0}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-[1.1rem] border border-navy/10 bg-white/75 p-5 shadow-[0_18px_55px_rgba(25,46,69,0.06)] outline-none backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/10 hover:bg-white hover:shadow-[0_24px_70px_rgba(25,46,69,0.1)] focus:border-navy/10 focus:bg-white sm:p-6 lg:p-7"
              >
                <div className="grid gap-5 pr-14 lg:grid-cols-[0.06fr_0.28fr_0.33fr_0.24fr_0.09fr] lg:items-center lg:pr-0">
                  <p className="font-mono text-xs font-black tracking-[0.14em] text-navy/35 lg:pt-2 lg:self-start">
                    {String(index + 1).padStart(2, "0")}.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative size-16 overflow-hidden rounded-full border border-navy/10 bg-navy shadow-sm sm:size-20">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      {"profileUrl" in member ? (
                        <a
                          href={member.profileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="break-words text-xl font-black leading-none text-navy transition-colors hover:text-purple sm:text-3xl"
                        >
                          {member.name}
                        </a>
                      ) : (
                        <h3 className="break-words text-xl font-black leading-none text-navy sm:text-3xl">
                          {member.name}
                        </h3>
                      )}
                      <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-navy/45 sm:text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="max-w-xl text-sm font-semibold leading-6 text-navy/68 sm:text-base">
                      {member.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-navy/10 bg-off-white px-3 py-1 text-xs font-black text-navy/62"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-navy/35">
                      Project work
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.projects.map((project) => (
                        <ProjectBadge
                          key={`${project.label}-${project.year}`}
                          company={project.company}
                          label={project.label}
                          year={project.year}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-20 right-5 flex justify-start sm:right-6 lg:static lg:justify-end">
                    {"profileUrl" in member ? (
                      <a
                        href={member.profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${member.name} LinkedIn profile`}
                        className="inline-flex size-11 items-center justify-center rounded-full bg-navy text-off-white transition-colors hover:bg-purple"
                      >
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    ) : (
                      <span className="inline-flex size-11 items-center justify-center rounded-full bg-navy/8 text-navy/40">
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function ProjectBadge({
  company,
  label,
  year,
}: {
  company: Company;
  label: string;
  year: string;
}) {
  return (
    <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-navy/10 bg-white px-2.5 py-1 text-xs font-black text-navy/70 shadow-sm lg:inline-flex">
      <CompanyLogo company={company} />
      <span>{label}</span>
      <span className="text-navy/32">-</span>
      <span className="text-purple">{year}</span>
    </p>
  );
}

function CompanyLogo({ company }: { company: Company }) {
  if (company === "shams") {
    return <BrandLogo decorative variant="mark" className="size-5 shrink-0" />;
  }

  const logos = {
    djezzy: "/images/company/Djezzy-Logo-Vector.svg-.png",
    mobilis: "/images/company/logo_mobilis_arabe.png",
  } as const;

  return (
    <Image
      src={logos[company]}
      alt=""
      width={72}
      height={24}
      className="h-5 w-auto shrink-0 object-contain"
    />
  );
}
