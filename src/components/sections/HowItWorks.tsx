import { motion } from "framer-motion";

import { content } from "../../lib/content";
import {
  howHeader,
  howStep,
  howStepHover,
  motionTransitions,
} from "../../lib/animations";
import { SectionLabel } from "../shared/section-label";

export default function HowItWorks() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate/10 bg-paper-dim py-16 sm:py-20 lg:py-28"
      id="how-it-works"
    >
      <div className="container">
        <motion.div
          {...howHeader}
          transition={motionTransitions.standard}
          className="text-center"
        >
          <SectionLabel>{content.how.eyebrow}</SectionLabel>

          <h2 className="mx-auto my-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink">
            {content.how.headline}
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-3 md:gap-5">
          {content.how.steps.map((step, i) => (
            <motion.article
              key={step.title}
              {...howStep}
              transition={{
                ...motionTransitions.standard,
                delay: 0.1 + i * 0.12,
              }}
              whileHover={{
                ...howStepHover,
                transition: motionTransitions.fast,
              }}
              className="group relative border border-slate/20 bg-paper p-6 shadow-[6px_6px_0_rgba(18,24,31,0.08)] transition-all duration-300 hover:border-brass/60 hover:shadow-[7px_7px_0_rgba(18,24,31,0.1)] sm:p-7"
            >
              <div className="flex items-center justify-between pb-5">
                <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-11 bg-brass/50 transition-all duration-300 group-hover:w-16" />
              </div>

              <div className="border-t border-slate/10 pt-7">
                <h3 className="mb-3 text-lg font-medium tracking-[-0.03em] text-ink">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-slate">{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
