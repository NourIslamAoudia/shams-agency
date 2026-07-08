import type {
  AgencyStat,
  NavItem,
  PartnerLogoItem,
  ProcessStep,
  ServiceItem,
  SocialItem,
} from "@/types/site";

export const brandAssets = {
  hero: "/images/cta/image%2014.png",
  logoWithText: "/images/logowithtext.png",
  simpleLogo: "/images/shams_agency_icon_cropped.png",
} as const;

export const siteNavigation: NavItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#team", label: "Team" },
  { href: "/#strategy", label: "Strategy" },
  { href: "/#contact", label: "Contact" },
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
    description:
      "Fast, responsive websites with clear structure, strong visuals and the technical base needed for long-term growth.",
    image: "/images/services/webdev.png",
    tags: ["Websites", "Performance", "SEO", "Content"],
  },
  {
    title: "Mobile Development",
    description:
      "Mobile interfaces for customers and internal teams, designed around simple journeys and dependable daily use.",
    image: "/images/services/mobildev.png",
    tags: ["Mobile Apps", "UX/UI", "Product Flow", "Operations"],
  },
  {
    title: "Desktop Systems",
    description:
      "Internal desktop tools and business systems for workflows that need stability, speed and practical support.",
    image: "/images/services/discktoop.png",
    tags: ["Desktop Apps", "Workstations", "IT Support", "Security"],
  },
  {
    title: "Deployment",
    description:
      "Production setup, hosting and release support so your product goes live cleanly and stays easy to maintain.",
    image: "/images/services/deploy.png",
    tags: ["Hosting", "Release", "Monitoring", "Security"],
  },
  {
    title: "Maintenance",
    description:
      "Ongoing updates, fixes and monitoring to keep platforms secure, current and ready for the next improvement.",
    image: "/images/services/mantu.png",
    tags: ["Updates", "Backups", "Support", "Optimization"],
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
