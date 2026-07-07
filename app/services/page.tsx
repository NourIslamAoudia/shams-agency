import { SiteHeader } from "@/components/site-header";
import { ServicesOverview } from "@/sections/services-overview";

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-off-white text-navy">
      <SiteHeader activePath="/services" />
      <ServicesOverview />
    </div>
  );
}
