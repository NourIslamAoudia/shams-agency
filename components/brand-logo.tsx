import Image from "next/image";

import { brandAssets } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  decorative?: boolean;
  priority?: boolean;
  variant?: "full" | "mark";
};

export function BrandLogo({
  className,
  decorative = false,
  priority = false,
  variant = "full",
}: BrandLogoProps) {
  const isFullLogo = variant === "full";

  return (
    <Image
      src={isFullLogo ? brandAssets.logoWithText : brandAssets.simpleLogo}
      alt={decorative ? "" : "Shams Agency"}
      aria-hidden={decorative ? true : undefined}
      width={isFullLogo ? 1619 : 28}
      height={isFullLogo ? 971 : 28}
      priority={priority}
      className={cn("object-contain", isFullLogo && "h-auto", className)}
    />
  );
}
