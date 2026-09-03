import { content } from "../../lib/content";
import { SectionLabel } from "../shared/section-label";

export default function Problem() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate/10 py-16 sm:py-20 lg:py-28"
      id="product"
    >
      <div className="container">
        <div className="max-w-3xl">
          <SectionLabel>{content.problem.eyebrow}</SectionLabel>
          <h2 className="my-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink">
            {content.problem.headline}
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate sm:text-base">
            {content.problem.body}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-3">
          {content.problem.cards.map((card, i) => (
            <article
              className="group border border-slate/20 bg-paper p-6 shadow-[6px_6px_0_rgba(18,24,31,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/60 hover:shadow-[7px_7px_0_rgba(18,24,31,0.1)] sm:p-7"
              key={card.title}
            >
              <div className="flex items-center justify-between border-b border-slate/10 pb-4">
                <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-brass">
                  0{i + 1}
                </span>
                <span className="h-px w-10 bg-brass/50 transition-all duration-300 group-hover:w-16" />
              </div>
              <h3 className="mb-3 mt-6 text-lg font-medium tracking-[-0.03em] text-ink">
                {card.title}
              </h3>
              <p className="text-sm leading-6 text-slate">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
