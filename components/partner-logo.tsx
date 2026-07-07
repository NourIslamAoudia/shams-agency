import type { PartnerLogoItem } from "@/types/site";
import { cn } from "@/lib/utils";

type PartnerLogoProps = {
  className?: string;
  partner: PartnerLogoItem;
};

export function PartnerLogo({ className, partner }: PartnerLogoProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3 text-navy/45", className)}>
      <PartnerMark mark={partner.mark} />
      <div className="text-left leading-none">
        <p className="text-[clamp(0.72rem,0.9vw,0.9rem)] font-extrabold uppercase tracking-[0.16em]">
          {partner.name}
        </p>
        {partner.caption ? (
          <p className="mt-1 text-[0.48rem] font-bold uppercase tracking-[0.22em]">
            {partner.caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function PartnerMark({ mark }: Pick<PartnerLogoItem, "mark">) {
  const common = "h-8 w-8 shrink-0 fill-none stroke-current stroke-[4] text-navy/38";

  if (mark === "grid") {
    return (
      <span className="grid size-8 shrink-0 grid-cols-2 gap-1 text-navy/38">
        <span className="rounded-[2px] bg-current" />
        <span className="rounded-[2px] bg-current" />
        <span className="rounded-[2px] bg-current" />
        <span className="rounded-[2px] bg-current" />
      </span>
    );
  }

  if (mark === "data") {
    return (
      <svg aria-hidden="true" viewBox="0 0 40 40" className={common}>
        <path d="M10 8h10c8 0 13 5 13 12s-5 12-13 12H10" />
        <path d="M10 14h9c4 0 7 2 7 6s-3 6-7 6h-9" />
      </svg>
    );
  }

  if (mark === "cloud") {
    return (
      <svg aria-hidden="true" viewBox="0 0 44 40" className={common}>
        <path d="M14 31h18c5 0 9-4 9-9s-4-9-9-9h-1C28 8 23 5 18 7c-5 1-8 5-8 10-5 1-8 4-8 8 0 3 3 6 7 6h5" />
      </svg>
    );
  }

  if (mark === "novatek") {
    return (
      <svg aria-hidden="true" viewBox="0 0 40 40" className={common}>
        <path d="M9 27 27 9h8L17 27H9Z" />
        <path d="M13 31h9l9-9h-9l-9 9Z" />
      </svg>
    );
  }

  if (mark === "synergix") {
    return (
      <svg aria-hidden="true" viewBox="0 0 44 40" className={common}>
        <path d="M29 9H16L7 20l9 11h13" />
        <path d="M17 20h20" />
        <path d="M28 9 37 20l-9 11" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 42 40" className={common}>
      <path d="M6 9h16L36 20 22 31H6" />
      <path d="M3 20h27" />
      <path d="M9 4 22 20 9 36" />
    </svg>
  );
}
