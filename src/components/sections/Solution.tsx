import { motion } from "framer-motion";
import { Bell, LayoutDashboard, Route } from "lucide-react";

import { content } from "../../lib/content";
import {
  motionTransitions,
  solutionCard,
  solutionCardHover,
  solutionHeader,
  solutionIconHover,
} from "../../lib/animations";
import { SectionLabel } from "../shared/section-label";
import { CtaButton } from "../shared/cta-button";

const solutionIcons = [Route, Bell, LayoutDashboard];

export default function Solution() {
  return (
    <section className="relative overflow-hidden border-y border-slate/10 bg-paper-dim py-16 sm:py-20 lg:py-28">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-24">
        <motion.div {...solutionHeader} transition={motionTransitions.standard}>
          <SectionLabel>{content.solution.eyebrow}</SectionLabel>

          <h2 className="my-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink">
            {content.solution.headline}
          </h2>

          <p className="max-w-xl text-sm leading-7 text-slate sm:text-base">
            {content.solution.body}
          </p>

          <CtaButton href="#how-it-works" className="mt-6">
            {content.solution.cta}
          </CtaButton>
        </motion.div>

        <div className="grid gap-4 sm:gap-5">
          {content.solution.features.map((feature, i) => {
            const Icon = solutionIcons[i];

            return (
              <motion.article
                key={feature.title}
                {...solutionCard}
                transition={{
                  ...motionTransitions.standard,
                  delay: 0.1 + i * 0.1,
                }}
                whileHover={{
                  ...solutionCardHover,
                  transition: motionTransitions.fast,
                }}
                className="group flex gap-5 border border-slate/20 bg-paper p-6 shadow-[6px_6px_0_rgba(18,24,31,0.08)] transition-all duration-300 hover:border-brass/60 hover:shadow-[7px_7px_0_rgba(18,24,31,0.1)] sm:p-7"
              >
                <motion.div
                  whileHover={solutionIconHover}
                  transition={motionTransitions.fast}
                  className="grid size-11 flex-none place-items-center border border-ink bg-ink text-paper transition-colors duration-300 group-hover:border-brass group-hover:bg-brass group-hover:text-ink"
                >
                  <Icon size={16} strokeWidth={1.8} />
                </motion.div>

                <div>
                  <h3 className="mb-2 text-base font-medium tracking-[-0.03em] text-ink sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate">{feature.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
