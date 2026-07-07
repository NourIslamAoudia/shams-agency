export type NavItem = {
  href: string;
  label: string;
};

export type SocialItem = {
  href: string;
  icon: "behance" | "dribbble" | "github" | "linkedin";
  label: string;
};

export type PartnerLogoItem = {
  caption?: string;
  mark: "cloud" | "data" | "grid" | "nexora" | "novatek" | "synergix";
  name: string;
};

export type AgencyStat = {
  label: string;
  value: string;
};
