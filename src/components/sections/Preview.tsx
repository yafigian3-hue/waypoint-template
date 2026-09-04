import { motion } from "framer-motion";

import { content } from "../../lib/content";
import { motionTransitions, previewHeader } from "../../lib/animations";
import { SectionLabel } from "../shared/section-label";
import DashboardPreview from "./DashboardPreview";

export default function Preview() {
  return (
    <section className="relative overflow-hidden border-b border-slate/10 bg-paper-dim pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="container">
        <motion.div {...previewHeader} transition={motionTransitions.standard}>
          <SectionLabel>{content.preview.eyebrow}</SectionLabel>

          <h2 className="my-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink">
            {content.preview.headline}
          </h2>
        </motion.div>

        <DashboardPreview />
      </div>
    </section>
  );
}
