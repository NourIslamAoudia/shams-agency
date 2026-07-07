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
      "Focused on clean interfaces, responsive builds and front-end systems for modern product teams.",
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
      "Builds complete product flows from interface to backend logic, with practical deployment experience.",
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
    summary: "Works on backend foundations, data flow and the systems that keep products reliable.",
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
    <section className="pb-16 pt-6 sm:pb-24 lg:pb-28">
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
                The Team
              </div>
              <h2 className="max-w-5xl text-[clamp(3rem,7.4vw,7.25rem)] font-black leading-[0.84] tracking-normal text-navy">
                Built by <span className="text-lime">people</span> with real{" "}
                <span className="text-lime">project work.</span>
              </h2>
            </div>

            <p className="max-w-xl text-base font-semibold leading-7 text-navy/62 sm:text-lg">
              Three builders behind Shams digital work, each bringing hands-on experience from
              <span className="font-black text-lime"> telecom</span>,{" "}
              <span className="font-black text-lime">product</span> and{" "}
              <span className="font-black text-lime">backend</span> systems.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} className="mt-10 space-y-4 lg:mt-14">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                tabIndex={0}
                variants={itemVariants}
                className="group overflow-hidden rounded-[1.35rem] border border-navy/10 bg-white/55 p-5 shadow-[0_18px_60px_rgba(25,46,69,0.07)] outline-none backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:bg-lime hover:shadow-[0_28px_90px_rgba(25,46,69,0.16)] focus:bg-lime focus:shadow-[0_28px_90px_rgba(25,46,69,0.16)] sm:p-6 lg:p-7"
              >
                <div className="grid gap-5 lg:grid-cols-[0.08fr_0.62fr_0.22fr_0.08fr] lg:items-center">
                  <p className="font-mono text-xs font-black tracking-[0.18em] text-navy/38 transition-colors group-hover:text-navy/70 group-focus:text-navy/70">
                    {String(index + 1).padStart(2, "0")}.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative size-16 overflow-hidden rounded-full border border-navy/10 bg-navy transition-transform duration-500 group-hover:scale-110 group-focus:scale-110 sm:size-20">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      {"profileUrl" in member ? (
                        <a
                          href={member.profileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-2xl font-black leading-none text-navy transition-colors hover:text-purple sm:text-3xl"
                        >
                          {member.name}
                        </a>
                      ) : (
                        <h3 className="text-2xl font-black leading-none text-navy sm:text-3xl">
                          {member.name}
                        </h3>
                      )}
                      <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-navy/45 transition-colors group-hover:text-navy/70 group-focus:text-navy/70">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div aria-hidden="true" />

                  <div className="flex justify-start lg:justify-end">
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
                      <span className="inline-flex size-11 items-center justify-center rounded-full bg-navy text-off-white">
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid max-h-0 gap-5 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-96 group-hover:pt-6 group-hover:opacity-100 group-focus:max-h-96 group-focus:pt-6 group-focus:opacity-100 lg:grid-cols-[0.5fr_0.28fr_0.22fr]">
                  <div>
                    <p className="max-w-2xl text-base font-bold leading-7 text-navy/76">
                      {member.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-navy/10 bg-white/60 px-3 py-1 text-xs font-black text-navy/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 font-mono text-xs font-black uppercase tracking-[0.18em] text-navy/45">
                      Companies
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

                  <div className="rounded-2xl border border-navy/10 bg-white/45 p-4">
                    <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-navy/45">
                      Role
                    </p>
                    <p className="mt-2 text-2xl font-black text-navy">{member.role}</p>
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
    <p className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-2.5 py-1 text-xs font-black text-navy/70 shadow-sm lg:inline-flex">
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
