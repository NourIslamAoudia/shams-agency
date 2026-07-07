import type { AgencyStat, NavItem, PartnerLogoItem, SocialItem } from "@/types/site";

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
