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
    <section className="overflow-hidden py-[70px] md:py-[80px] lg:py-[90px]">
      <div className="container grid w-full grid-cols-1 items-center gap-[55px] md:grid-cols-2 md:gap-20">
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
            className="mb-[25px] mt-[22px] font-display text-[clamp(48px,7vw,88px)] font-semibold leading-[0.98] tracking-[-0.02em]"
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
            Set up in 5 minutes · No credit card required
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
            className="relative z-10 w-full border border-slate/20 bg-paper p-[21px] shadow-[12px_14px_0_rgba(18,24,31,0.06)] md:absolute md:right-0 md:top-[42px] md:w-[min(390px,82%)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[.15em] text-slate">
                Live incident
              </span>

              <span className="font-mono text-[9px] text-status">
                ● 2 min ago
              </span>
            </div>

            <div className="mt-5 flex items-start gap-3">
              {/* Alert pulse */}
              <motion.div
                animate={pulseScale}
                transition={motionTransitions.pulse}
                className="grid size-9 shrink-0 place-items-center bg-status/10 text-status"
              >
                <CircleAlert size={17} />
              </motion.div>

              <div>
                <div className="font-mono text-xs font-semibold">
                  PaymentTimeoutError
                </div>

                <div className="mt-1 font-mono text-[10px] text-slate">
                  payments-service · POST /checkout
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-slate/20 pt-3 font-mono text-[10px] text-slate">
              <span className="text-brass">root cause</span> · database
              connection pool exhausted
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
            className="relative z-10 mt-4 w-full border border-ink bg-ink p-[21px] text-paper shadow-[10px_10px_0_rgba(184,134,63,0.28)] md:absolute md:bottom-[25px] md:left-2.5 md:mt-0 md:w-[min(300px,70%)]"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] text-slate">
              <GitBranch size={13} />
              Trace path
            </div>

            <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px]">
              <span>api-gateway</span>

              <ArrowRight size={11} className="text-slate" />

              <span>checkout</span>

              <ArrowRight size={11} className="text-slate" />

              {/* Active service pulse */}
              <motion.span
                animate={pulseOpacity}
                transition={motionTransitions.pulse}
                className="text-brass"
              >
                payments
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
