import { motion } from "framer-motion";

import { ctaFinal } from "../../lib/content";
import {
  finalCtaButton,
  finalCtaButtonHover,
  finalCtaContent,
  finalCtaRoute,
  motionTransitions,
} from "../../lib/animations";
import { SectionLabel } from "../shared/section-label";
import { RouteMarker } from "../shared/route-marker";
import { CtaButton } from "../shared/cta-button";

export default function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-ink pb-20 pt-16 text-paper sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24"
      id="start"
    >
      <div className="container">
        <motion.div
          {...finalCtaRoute}
          transition={motionTransitions.route}
          className="mb-10 sm:mb-12"
        >
          <RouteMarker variant="brass" />
        </motion.div>

        <motion.div
          {...finalCtaContent}
          transition={motionTransitions.standard}
        >
          <SectionLabel light>GET STARTED</SectionLabel>

          <h2 className="mb-5 mt-5 max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] font- leading-[0.94] tracking-[-0.045em] text-paper">
            {ctaFinal.headline}
          </h2>

          <p className="max-w-[500px] text-sm leading-7 text-paper/65 sm:text-base">
            {ctaFinal.subheadline}
          </p>
        </motion.div>

        <motion.div
          {...finalCtaButton}
          transition={{
            ...motionTransitions.standard,
            delay: 0.2,
          }}
          whileHover={{
            ...finalCtaButtonHover,
            transition: motionTransitions.fast,
          }}
          className="mt-7"
        >
          <CtaButton variant="light">{ctaFinal.label}</CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
