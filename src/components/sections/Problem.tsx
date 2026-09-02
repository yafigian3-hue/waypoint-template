import { content } from "../../lib/content";
import { SectionLabel } from "../shared/section-label";

export default function Problem() {
  return (
    <section className="py-20 md:py-[120px]" id="product">
      <div className="container">
        <div className="max-w-2xl">
          <SectionLabel>{content.problem.eyebrow}</SectionLabel>
          <h2 className="my-5 font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
            {content.problem.headline}
          </h2>
          <p className="max-w-[500px] leading-[1.65] text-slate">
            {content.problem.body}
          </p>
        </div>
        <div className="mt-[68px] grid grid-cols-1 gap-[38px] md:grid-cols-3 md:gap-[18px]">
          {content.problem.cards.map((card, i) => (
            <article className="border-t border-ink pt-[18px]" key={card.title}>
              <span className="font-mono text-[10px] text-brass">0{i + 1}</span>
              <h3 className="mb-2.5 mt-8 text-[17px] tracking-[-0.03em]">
                {card.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-slate">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
