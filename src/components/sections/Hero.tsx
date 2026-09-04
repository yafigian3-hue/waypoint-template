import { motion } from "framer-motion";
import { ArrowRight, CircleAlert, GitBranch } from "lucide-react";

import { content } from "../../lib/content";
import {
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  fadeUpLarge,
  hoverLift,
  hoverLiftLarge,
  motionTransitions,
  pulseOpacity,
  pulseScale,
  revealX,
} from "../../lib/animations";

import { CtaButton } from "../shared/cta-button";
import { SectionLabel } from "../shared/section-label";
import { RouteMarker } from "../shared/route-marker";

export default function Hero() {
  return (
    <section className="overflow-hidden border-b border-slate/10 py-16 sm:py-20 lg:py-24">
      <div className="container grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* LEFT CONTENT */}
        <div>
          {/* Eyebrow */}
          <motion.div {...fadeUp} transition={motionTransitions.standard}>
            <SectionLabel>{content.hero.eyebrow}</SectionLabel>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUpLarge}
            transition={{
              ...motionTransitions.slow,
              delay: 0.1,
            }}
            className="mb-6 mt-5 max-w-2xl font-display text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-ink"
          >
            {content.hero.headline.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp}
            transition={{
              ...motionTransitions.standard,
              delay: 0.2,
            }}
            className="max-w-[480px] text-base leading-[1.65] text-slate"
          >
            {content.hero.subheadline}
          </motion.p>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            transition={{
              ...motionTransitions.standard,
              delay: 0.3,
            }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <CtaButton href="#start">{content.hero.primary}</CtaButton>

            <CtaButton href="#how-it-works" variant="text">
              {content.hero.secondary}
            </CtaButton>
          </motion.div>

          {/* Trust line */}
          <motion.div
            {...fadeIn}
            transition={{
              ...motionTransitions.slow,
              delay: 0.5,
            }}
            className="mt-6 flex items-center gap-2 text-[11px] text-slate"
          >
            <span className="inline-block size-1.5 rounded-full bg-brass" />
            {content.hero.trust}
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative min-h-[420px] md:min-h-[390px]">
          {/* Route */}
          <div className="absolute left-[-12px] right-[-12px] top-[43%] z-0 block rotate-[-24deg] md:left-[-48px] md:right-[-45px] md:top-[49%]">
            <motion.div
              {...revealX}
              transition={{
                ...motionTransitions.route,
                delay: 0.3,
              }}
              className="origin-left"
            >
              <RouteMarker />

              <motion.span
                initial={{ left: "0%" }}
                animate={{ left: "100%" }}
                transition={{
                  ...motionTransitions.signal,
                  delay: 0.65,
                }}
                className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass shadow-[0_0_0_4px_rgba(184,134,63,0.12)]"
              />
            </motion.div>
          </div>

          {/* Incident Card */}
          <motion.div
            {...fadeRight}
            transition={{
              ...motionTransitions.slow,
              delay: 0.4,
            }}
            whileHover={{
              ...hoverLiftLarge,
              transition: motionTransitions.fast,
            }}
            className="relative z-10 w-full border border-slate/20 bg-paper p-5 shadow-[8px_8px_0_rgba(18,24,31,0.06)] transition-colors duration-300 hover:border-brass/50 md:absolute md:right-0 md:top-10 md:w-[min(390px,82%)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[.15em] text-slate">
                {content.hero.incident.label}
              </span>

              <span className="font-mono text-[9px] text-status">
                ● {content.hero.incident.time}
              </span>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <motion.div
                animate={pulseScale}
                transition={motionTransitions.pulse}
                className="grid size-9 shrink-0 place-items-center bg-status/10 text-status"
              >
                <CircleAlert size={17} />
              </motion.div>

              <div>
                <div className="font-mono text-xs font-semibold">
                  {content.hero.incident.error}
                </div>

                <div className="mt-1 font-mono text-[10px] text-slate">
                  {content.hero.incident.service}
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-slate/20 pt-3 font-mono text-[10px] text-slate">
              <span className="text-brass">root cause</span> ·{" "}
              {content.hero.incident.rootCause}
            </div>
          </motion.div>

          {/* Trace Card */}
          <motion.div
            {...fadeLeft}
            transition={{
              ...motionTransitions.slow,
              delay: 0.65,
            }}
            whileHover={{
              ...hoverLift,
              transition: motionTransitions.fast,
            }}
            className="relative z-10 mt-4 w-full border border-ink bg-ink p-5 text-paper shadow-[8px_8px_0_rgba(184,134,63,0.24)] md:absolute md:bottom-6 md:left-2.5 md:mt-0 md:w-[min(300px,70%)]"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] text-slate">
              <GitBranch size={13} />
              {content.hero.trace.label}
            </div>

            <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px]">
              {content.hero.trace.services.map((service, index) => (
                <span key={service} className="flex items-center gap-1.5">
                  {index > 0 && <ArrowRight size={11} className="text-slate" />}

                  <motion.span
                    animate={
                      index === content.hero.trace.services.length - 1
                        ? pulseOpacity
                        : undefined
                    }
                    transition={motionTransitions.pulse}
                    className={
                      index === content.hero.trace.services.length - 1
                        ? "text-brass"
                        : undefined
                    }
                  >
                    {service}
                  </motion.span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
