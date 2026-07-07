import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";

const strategyItems = [
  {
    title: "Clear & Collaborative Process",
    number: "01",
    tone: "lime",
  },
  {
    title: "Design That Converts",
    number: "02",
    tone: "navy",
  },
  {
    title: "Problem-Driven Systems",
    number: "03",
    tone: "lime",
  },
  {
    title: "Built to Scale",
    number: "04",
    tone: "navy",
  },
  {
    title: "Focus on Usability",
    number: "05",
    tone: "lime",
  },
  {
    title: "We Listen First",
    number: "06",
    tone: "navy",
  },
] as const;

export function StrategySection() {
  return (
    <section className="pb-16 pt-4 sm:pb-24 lg:pb-28">
      <Container>
        <div className="overflow-hidden rounded-[1.75rem] bg-navy px-5 py-8 text-off-white shadow-[0_28px_90px_rgba(25,46,69,0.16)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_0.36fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-white/78">
                <BrandLogo decorative variant="mark" className="size-5 shrink-0" />
                Our Strategy
              </div>
              <h2 className="max-w-5xl text-[clamp(2.5rem,6.6vw,6.6rem)] font-black leading-[0.86] tracking-normal">
                Our <span className="text-lime">strategy</span> of working with you
              </h2>
            </div>

            <p className="max-w-sm text-sm font-semibold leading-6 text-white/62 sm:text-base sm:leading-7">
              We understand your goals, shape the right digital direction, then build clean systems
              that are useful, stable and ready to grow.
            </p>
          </div>

          <div className="mt-9 grid overflow-hidden rounded-[1.2rem] border border-white/10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {strategyItems.map((item) => (
              <article
                key={item.number}
                className={
                  item.tone === "navy"
                    ? "min-h-40 border-white/10 bg-[#101f2d] p-5 text-off-white sm:border-l lg:min-h-48"
                    : "min-h-40 border-white/10 bg-lime p-5 text-navy sm:border-l lg:min-h-48"
                }
              >
                <div className="flex h-full flex-col justify-between gap-10">
                  <h3 className="max-w-[13rem] text-lg font-black leading-none">{item.title}</h3>
                  <p
                    className={
                      item.tone === "navy"
                        ? "font-mono text-sm font-black text-lime"
                        : "font-mono text-sm font-black text-navy/60"
                    }
                  >
                    {item.number}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              {["R", "C", "I"].map((letter, index) => (
                <span
                  key={letter}
                  className="-ml-2 first:ml-0 inline-flex size-9 items-center justify-center rounded-full border-2 border-navy bg-off-white text-xs font-black text-navy"
                  style={{ zIndex: 3 - index }}
                >
                  {letter}
                </span>
              ))}
              <span className="-ml-2 inline-flex size-9 items-center justify-center rounded-full border-2 border-navy bg-lime text-sm font-black text-navy">
                +
              </span>
              <p className="ml-4 text-sm font-bold text-white/62">
                Team alignment before every build
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <p className="text-5xl font-black text-lime sm:text-6xl">03</p>
              <p className="max-w-44 text-sm font-bold leading-5 text-white/62">
                Core specialists moving one product forward.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
