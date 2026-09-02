import { motion } from "framer-motion";
import { ArrowRight, CircleAlert, GitBranch } from "lucide-react";
import { content } from "../../lib/content";
import { CtaButton } from "../shared/cta-button";
import { SectionLabel } from "../shared/section-label";
import { RouteMarker } from "../shared/route-marker";

export default function Hero() {
  return (
    <section className="overflow-hidden pb-[100px] pt-[75px] md:pt-[110px]">
      <div className="container grid grid-cols-1 items-center gap-[55px] md:grid-cols-2 md:gap-20">
        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SectionLabel>{content.hero.eyebrow}</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-[25px] mt-[22px] font-display text-[clamp(48px,7vw,88px)] font-semibold leading-[0.98] tracking-[-0.02em]"
          >
            {content.hero.headline.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[480px] text-base leading-[1.65] text-slate"
          >
            {content.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <CtaButton href="#start">{content.hero.primary}</CtaButton>

            <a
              href="#how-it-works"
              className="inline-flex min-h-[42px] items-center gap-2.5 text-xs font-medium transition-transform duration-200 hover:translate-x-1"
            >
              {content.hero.secondary}

              <span className="grid size-7 place-items-center border border-slate/20">
                <ArrowRight size={14} />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="mt-6 flex items-center gap-2 text-[11px] text-slate"
          >
            <span className="inline-block size-1.5 rounded-full bg-brass" />
            Set up in 5 minutes · No credit card required
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative min-h-[300px] md:min-h-[390px]">
          {/* Route */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[-48px] right-[-45px] top-[49%] hidden origin-left rotate-[-24deg] md:block"
          >
            <RouteMarker />

            <motion.span
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: 1.2,
                delay: 0.65,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 size-2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-brass shadow-[0_0_0_4px_rgba(184,134,63,0.12)]"
            />
          </motion.div>

          {/* Incident Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.2,
              },
            }}
            className="relative w-full border border-slate/20 bg-paper p-[21px] shadow-[12px_14px_0_rgba(18,24,31,0.06)] md:absolute md:right-0 md:top-[42px] md:w-[min(390px,82%)]"
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
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
            initial={{
              opacity: 0,
              x: -40,
              y: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -5,
            }}
            className="relative mt-4 w-full border border-ink bg-ink p-[21px] text-paper shadow-[10px_10px_0_rgba(184,134,63,0.28)] md:absolute md:bottom-[25px] md:left-2.5 md:mt-0 md:w-[min(300px,70%)]"
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

              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
