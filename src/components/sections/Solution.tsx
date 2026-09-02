import { Route, Bell, LayoutDashboard } from "lucide-react";
import { content } from "../../lib/content";
import { SectionLabel } from "../shared/section-label";
import { CtaButton } from "../shared/cta-button";

export default function Solution() {
  return (
    <section className="bg-paper-dim py-20 md:py-[120px]">
      <div className="container grid grid-cols-1 gap-[55px] md:grid-cols-[0.9fr_1.1fr] md:gap-[100px]">
        <div>
          <SectionLabel>{content.solution.eyebrow}</SectionLabel>
          <h2 className="my-5 font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
            {content.solution.headline}
          </h2>
          <p className="max-w-[500px] leading-[1.65] text-slate">
            {content.solution.body}
          </p>
          <CtaButton href="#how-it-works" className="mt-6">
            See how it works
          </CtaButton>
        </div>
        <div className="flex flex-col gap-7">
          {content.solution.features.map((feature, i) => (
            <article
              key={feature.title}
              className="flex gap-[17px] border-b border-slate/20 pb-[27px]"
            >
              <div className="grid size-[35px] flex-none place-items-center border border-ink [&>svg]:w-4">
                {
                  [
                    <Route key="route" />,
                    <Bell key="bell" />,
                    <LayoutDashboard key="dash" />,
                  ][i]
                }
              </div>
              <div>
                <h3 className="mb-2 text-[17px] tracking-[-0.03em]">
                  {feature.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-slate">
                  {feature.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
