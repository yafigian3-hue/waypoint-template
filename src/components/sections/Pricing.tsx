import { useState } from "react";
import { Check } from "lucide-react";
import { content } from "../../lib/content";
import { SectionLabel } from "../shared/section-label";
import { CtaButton } from "../shared/cta-button";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      className="relative overflow-hidden border-b border-slate/10 bg-paper-dim py-16 sm:py-20 lg:py-28"
      id="pricing"
    >
      <div className="container">
        <div className="text-center">
          <SectionLabel>PRICING</SectionLabel>
          <h2 className="mx-auto my-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink">
            {content.pricing.headline}
          </h2>
          <p className="mx-auto mb-6 max-w-[500px] leading-[1.65] text-slate">
            {content.pricing.subheadline}
          </p>
          <button
            onClick={() => setAnnual(!annual)}
            className="inline-flex gap-1 border border-slate/20 bg-paper p-1 text-[10px] font-semibold uppercase tracking-[0.12em] shadow-[4px_4px_0_rgba(18,24,31,0.06)]"
          >
            <span
              className={`px-[11px] py-2 ${!annual ? "bg-ink text-paper" : "text-slate"}`}
            >
              Monthly
            </span>
            <span
              className={`px-[11px] py-2 ${annual ? "bg-ink text-paper" : "text-slate"}`}
            >
              Yearly <b className="font-semibold text-brass">-20%</b>
            </span>
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-3 md:gap-5">
          {content.pricing.tiers.map((tier) => (
            <article
              key={tier.name}
              className={`group relative border bg-paper p-6 shadow-[6px_6px_0_rgba(18,24,31,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_rgba(184,134,63,0.2)] sm:p-7 ${
                tier.highlighted
                  ? "border-brass shadow-[6px_6px_0_rgba(184,134,63,0.3)]"
                  : "border-slate/20 hover:border-brass/60"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-2.5 right-4 bg-brass px-[7px] py-1 font-mono text-[8px] uppercase tracking-wider text-paper">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-[17px] tracking-[-0.03em]">{tier.name}</h3>
              <p className="mt-2.5 text-[13px] leading-[1.6] text-slate">
                {tier.description}
              </p>
              <div className="my-7 font-display text-[clamp(2.25rem,5vw,3rem)] font-semibold tracking-[-0.045em] text-ink">
                {tier.price !== "Custom" && (
                  <small className="font-sans text-xs font-normal text-slate">
                    $
                  </small>
                )}
                {tier.price !== "Custom"
                  ? annual
                    ? Math.round(Number(tier.price) * 0.8)
                    : tier.price
                  : tier.price}
                {tier.price !== "Custom" && (
                  <small className="font-sans text-xs font-normal text-slate">
                    /mo
                  </small>
                )}
              </div>
              <CtaButton
                variant={tier.highlighted ? "dark" : "light"}
                className="w-full"
              >
                {tier.name === "Enterprise"
                  ? "Contact us"
                  : `Get started with ${tier.name}`}
              </CtaButton>
              <ul className="mt-8 flex flex-col gap-3 border-t border-slate/10 pt-6 text-sm">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-slate"
                  >
                    <Check size={14} className="flex-none text-brass" />{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
