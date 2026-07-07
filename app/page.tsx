import { SiteHeader } from "@/components/site-header";
import { AboutAgency } from "@/sections/about-agency";
import { HomeHero } from "@/sections/home-hero";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-off-white text-navy">
      <SiteHeader activePath="/" />
      <HomeHero />
      <AboutAgency />
    </div>
  );
}
