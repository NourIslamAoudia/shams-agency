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
    description:
      "We build fast, modern websites for brands that need a sharp digital presence, clear messaging and smooth performance.",
    image: "/images/services/webdev.png",
    tags: ["Websites", "Performance", "SEO", "Launch"],
  },
  {
    title: "Mobile Development",
    description:
      "We design and develop useful mobile experiences for customers, teams and clean-energy operations across the Shams ecosystem.",
    image: "/images/services/mobildev.png",
    tags: ["Mobile Apps", "UX/UI", "Dashboards", "Operations"],
  },
  {
    title: "Desktop Systems",
    description:
      "We create reliable desktop tools and internal systems for workflows that need speed, stability and long-term support.",
    image: "/images/services/discktoop.png",
    tags: ["Desktop Setup", "Workstations", "IT Support", "Security"],
  },
  {
    title: "Deployment",
    description:
      "We prepare, publish and connect digital products with clean release flows, secure hosting and production-ready checks.",
    image: "/images/services/deploy.png",
    tags: ["Hosting", "CI/CD", "Monitoring", "Security"],
  },
  {
    title: "Maintenance",
    description:
      "We keep your platforms healthy after launch with updates, fixes, backups, monitoring and steady product improvements.",
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
