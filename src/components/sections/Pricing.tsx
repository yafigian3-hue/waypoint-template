import { useState } from "react";
import { Check } from "lucide-react";
import { content } from "../../lib/content";
import { SectionLabel } from "../shared/section-label";
import { CtaButton } from "../shared/cta-button";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-20 md:py-[120px]" id="pricing">
      <div className="container">
        <div className="text-center">
          <SectionLabel>PRICING</SectionLabel>
          <h2 className="mx-auto my-5 max-w-2xl font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
            {content.pricing.headline}
          </h2>
          <p className="mx-auto mb-6 max-w-[500px] leading-[1.65] text-slate">
            {content.pricing.subheadline}
          </p>
          <button
            onClick={() => setAnnual(!annual)}
            className="inline-flex gap-0.5 border border-slate/20 p-[3px] text-[11px]"
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
        <div className="mt-[50px] grid grid-cols-1 gap-[38px] md:grid-cols-3 md:gap-[18px]">
          {content.pricing.tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative border p-[25px] ${
                tier.highlighted
                  ? "border-[1.5px] border-brass"
                  : "border-slate/20"
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
              <div className="my-7 font-display text-[38px] font-semibold tracking-[-0.02em]">
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
              <ul className="mt-[30px] flex flex-col gap-[13px] text-xs">
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
