import type {
  AgencyStat,
  NavItem,
  PartnerLogoItem,
  ProcessStep,
  ServiceItem,
  SocialItem,
} from "@/types/site";

export const brandAssets = {
  hero: "/images/herosectionimage-v2.png",
  logoWithText: "/images/logowithtext.png",
  simpleLogo: "/images/shams_agency_icon_cropped.png",
} as const;

export const siteNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroServices = [
  "Web Development",
  "Mobile Apps",
  "Desktop Systems",
  "AI Solutions",
  "Deployment",
  "Maintenance",
];

export const socialLinks: SocialItem[] = [
  { href: "#", icon: "linkedin", label: "LinkedIn" },
  { href: "#", icon: "dribbble", label: "Dribbble" },
  { href: "#", icon: "behance", label: "Behance" },
  { href: "#", icon: "github", label: "GitHub" },
];

export const partnerLogos: PartnerLogoItem[] = [
  { caption: "Technologies", mark: "nexora", name: "Nexora" },
  { mark: "grid", name: "Pixelora" },
  { mark: "data", name: "Datafuse" },
  { mark: "cloud", name: "Cloudvant" },
  { mark: "novatek", name: "Novatek" },
  { mark: "synergix", name: "Synergix" },
];

export const agencyStats: AgencyStat[] = [
  { value: "2020", label: "Shams Djazair founded" },
  { value: "11-50", label: "Parent company team" },
  { value: "PV + AI", label: "Energy and digital systems" },
  { value: "DZ + Africa", label: "Market focus" },
];

export const servicesPageItems: ServiceItem[] = [
  {
    title: "Web Development",
    description: "Fast, modern websites that turn Shams ideas into clear digital experiences.",
    visual: "web",
  },
  {
    title: "Branding & Strategy",
    description: "Visual systems, campaigns and positioning built around the Shams ecosystem.",
    visual: "brand",
  },
  {
    title: "Digital Marketing",
    description: "Launch-ready content, landing pages and campaigns for measurable growth.",
    visual: "marketing",
  },
  {
    title: "AI & Automation",
    description: "Smart workflows, dashboards and internal tools that save teams time.",
    visual: "ai",
  },
  {
    title: "Mobile & Web Apps",
    description: "Useful applications for customers, staff and clean-energy operations.",
    visual: "apps",
  },
];

export const workflowSteps: ProcessStep[] = [
  {
    title: "Discovery & Brief",
    description:
      "We collect the goal, audience, offer and operational context, then turn it into a clear digital plan for Shams teams.",
  },
  {
    title: "Prototype & Design",
    description:
      "We shape the core journey, visual direction and interactive prototype before production starts, so every screen has a reason.",
  },
  {
    title: "Build, Launch & Iterate",
    description:
      "We develop the experience, connect the tools, test the details and keep improving after launch with real feedback.",
  },
];
