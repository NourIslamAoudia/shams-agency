import { SiteHeader } from "@/components/site-header";
import { ServicesOverview } from "@/sections/services-overview";
import { TeamCredits } from "@/sections/team-credits";

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-off-white text-navy">
      <SiteHeader activePath="/services" />
      <ServicesOverview />
      <TeamCredits />
    </div>
  );
}
