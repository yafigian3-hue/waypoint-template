import { content } from "../../lib/content";
import { SectionLabel } from "../shared/section-label";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y border-ink bg-ink py-16 text-paper sm:py-20 lg:py-28">
      <div className="container">
        <SectionLabel light>FROM THE TEAMS</SectionLabel>
        <h2 className="my-5 max-w-4xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-paper">
          {content.testimonials[0].quote}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-3 md:gap-5">
          {content.testimonials.map((item) => (
            <article
              key={item.name}
              className="group border border-paper/15 bg-paper/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brass/70 hover:bg-paper/10 sm:p-7"
            >
              <div className="flex items-center justify-between border-b border-paper/15 pb-5">
                <span className="font-mono text-2xl leading-none text-brass">
                  &ldquo;
                </span>
                <span className="h-px w-11 bg-brass/60 transition-all duration-300 group-hover:w-16" />
              </div>
              <p className="mt-6 text-sm leading-7 text-paper/80">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-paper/15 pt-4">
                <div className="font-semibold text-paper">{item.name}</div>
                <div className="text-xs leading-5 text-paper/55">
                  {item.role} · {item.company}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
