import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { content } from "../../lib/content";
import { SectionLabel } from "../shared/section-label";

function FAQList() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="border-t border-slate/20">
      {content.faq.map((item, i) => (
        <div className="border-b border-slate/20" key={item.q}>
          <button
            onClick={() => setActive(active === i ? null : i)}
            aria-expanded={active === i}
            className="flex w-full items-center justify-between gap-[15px] border-0 bg-transparent py-5 text-left text-sm"
          >
            <span>{item.q}</span>
            <ChevronDown
              size={17}
              className={`flex-none transition-transform duration-200 ${active === i ? "rotate-180" : ""}`}
            />
          </button>
          {active === i && (
            <p className="mb-5 mr-[30px] max-w-[580px] text-[13px] leading-[1.65] text-slate">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="border-t border-slate/20 py-20 md:py-[120px]" id="faq">
      <div className="container grid grid-cols-1 gap-[55px] md:grid-cols-[0.9fr_1.1fr] md:gap-[100px]">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="my-5 font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
            Frequently asked questions
          </h2>
          <p className="max-w-[500px] leading-[1.65] text-slate">
            Still have questions?{" "}
            <a
              href="mailto:hello@waypoint.dev"
              className="underline underline-offset-[3px]"
            >
              Contact us.
            </a>
          </p>
        </div>
        <FAQList />
      </div>
    </section>
  );
}
