import { ctaFinal } from "../../lib/content";
import { SectionLabel } from "../shared/section-label";
import { RouteMarker } from "../shared/route-marker";
import { CtaButton } from "../shared/cta-button";

export default function FinalCta() {
  return (
    <section className="bg-ink pb-[85px] pt-[75px] text-paper" id="start">
      <div className="container">
        <RouteMarker variant="brass" className="mb-12" />
        <SectionLabel light>GET STARTED</SectionLabel>
        <h2 className="mb-5 mt-[22px] font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
          {ctaFinal.headline}
        </h2>
        <p className="max-w-[480px] leading-[1.6] text-paper-dim">
          {ctaFinal.subheadline}
        </p>
        <CtaButton variant="light" className="mt-[18px]">
          {ctaFinal.label}
        </CtaButton>
      </div>
    </section>
  );
}
