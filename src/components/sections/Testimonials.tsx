import { content } from "../../lib/content";
import { SectionLabel } from "../shared/section-label";

export default function Testimonials() {
  return (
    <section className="bg-ink py-20 text-paper md:py-[120px]">
      <div className="container">
        <SectionLabel light>FROM THE TEAMS</SectionLabel>
        <h2 className="my-5 max-w-[800px] font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
          {content.testimonials[0].quote}
        </h2>
        <div className="mt-[65px] grid grid-cols-1 gap-[38px] md:grid-cols-3 md:gap-[18px]">
          {content.testimonials.map((item) => (
            <article key={item.name} className="border-t border-[#444a45] pt-5">
              <div className="mb-6 text-brass">&ldquo;</div>
              <p className="text-[13px] leading-[1.6] text-[#d8ddd7]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-[#444a45] pt-4">
                <div className="font-semibold">{item.name}</div>
                <div className="text-[11px] text-[#aab0aa]">
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
