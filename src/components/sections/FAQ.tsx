import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { content } from "../../lib/content";
import {
  faqAnswer,
  faqHeader,
  faqItem,
  faqItemHover,
  motionTransitions,
} from "../../lib/animations";
import { SectionLabel } from "../shared/section-label";

function FAQList() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="border-t border-slate/20">
      {content.faq.map((item, index) => {
        const isActive = active === index;

        return (
          <motion.div
            key={item.q}
            {...faqItem}
            transition={{
              ...motionTransitions.standard,
              delay: 0.08 + index * 0.06,
            }}
            whileHover={faqItemHover}
            className="border-b border-slate/20"
          >
            <button
              onClick={() => setActive(isActive ? null : index)}
              aria-expanded={isActive}
              className="group flex w-full items-center gap-4 py-5 text-left sm:py-6"
            >
              <span className="w-7 shrink-0 font-mono text-[9px] font-semibold tracking-[0.14em] text-brass sm:w-8 sm:text-[10px]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0 flex-1 text-sm font-medium tracking-[-0.01em] text-ink sm:text-[15px]">
                {item.q}
              </span>

              <span className="grid size-7 shrink-0 place-items-center border border-slate/20 text-slate transition-all duration-200 group-hover:border-ink group-hover:text-ink sm:size-8">
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  {...faqAnswer}
                  transition={motionTransitions.fast}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pl-11 pr-8 text-sm leading-7 text-slate sm:pl-12 sm:pr-10">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      className="border-t border-slate/20 py-16 sm:py-20 lg:py-28"
      id="faq"
    >
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
        <motion.div
          {...faqHeader}
          transition={motionTransitions.standard}
          className="md:sticky md:top-24 md:self-start"
        >
          <SectionLabel>FAQ</SectionLabel>

          <h2 className="my-5 max-w-md font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink">
            Frequently asked questions
          </h2>

          <p className="max-w-[420px] text-sm leading-7 text-slate sm:text-base">
            Still have questions?{" "}
            <a
              href="mailto:hello@waypoint.dev"
              className="font-medium text-ink underline decoration-slate/40 underline-offset-4 transition-colors duration-200 hover:text-brass"
            >
              Contact us.
            </a>
          </p>
        </motion.div>

        <FAQList />
      </div>
    </section>
  );
}
