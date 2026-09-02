import { content } from "../../lib/content";
import { SectionLabel } from "../shared/section-label";

export default function HowItWorks() {
  return (
    <section
      className="border-b border-slate/20 py-20 md:py-[120px]"
      id="how-it-works"
    >
      <div className="container">
        <div className="text-center">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="mx-auto my-5 max-w-2xl font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
            {content.how.headline}
          </h2>
        </div>
        <div className="mt-[65px] grid grid-cols-1 gap-[38px] md:grid-cols-3 md:gap-5">
          {content.how.steps.map((step, i) => (
            <article
              className="relative border-l border-route pl-[22px]"
              key={step.title}
            >
              <div className="font-mono text-[11px] text-route">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2.5 mt-[50px] text-[17px] tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-slate">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
