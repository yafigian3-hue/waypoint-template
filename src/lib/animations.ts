import type { Transition } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const motionTransitions = {
  fast: {
    duration: 0.18,
    ease: easeOut,
  } satisfies Transition,

  standard: {
    duration: 0.5,
    ease: easeOut,
  } satisfies Transition,

  slow: {
    duration: 0.7,
    ease: easeOut,
  } satisfies Transition,

  route: {
    duration: 0.9,
    ease: easeOut,
  } satisfies Transition,

  pulse: {
    duration: 2.4,
    repeat: Infinity,
    ease: "easeInOut",
  } satisfies Transition,

  signal: {
    duration: 1,
    ease: "easeInOut",
  } satisfies Transition,
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 18,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fadeUpLarge = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -40,
    y: 18,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const revealX = {
  initial: {
    opacity: 0,
    scaleX: 0,
  },
  animate: {
    opacity: 1,
    scaleX: 1,
  },
};

export const hoverLift = {
  y: -3,
};

export const hoverLiftLarge = {
  y: -4,
};

export const pulseScale = {
  scale: [1, 1.08, 1],
};

export const pulseOpacity = {
  opacity: [0.5, 1, 0.5],
};

export function getDelay(base: number, index: number, step: number) {
  return base + index * step;
}

export const logoCloudLabel = {
  initial: {
    opacity: 0,
    y: 8,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.7,
  },
};

export const logoCloudItem = {
  initial: {
    opacity: 0,
    y: 8,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.7,
  },
};

export const logoCloudHover = {
  y: -2,
};

export const problemHeader = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.4,
  },
};

export const problemCard = {
  initial: {
    opacity: 0,
    y: 28,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.25,
  },
};

export const problemCardHover = {
  y: -4,
};

export const solutionHeader = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.4,
  },
};

export const solutionCard = {
  initial: {
    opacity: 0,
    x: 28,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.25,
  },
};

export const solutionCardHover = {
  y: -4,
};

export const solutionIconHover = {
  rotate: -4,
  scale: 1.04,
};

export const howHeader = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.4,
  },
};

export const howStep = {
  initial: {
    opacity: 0,
    y: 32,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.25,
  },
};

export const howStepHover = {
  y: -4,
};

export const howStepSignalHover = {
  width: "64px",
};

export const previewHeader = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.4,
  },
};

export const previewDashboard = {
  initial: {
    opacity: 0,
    y: 32,
    scale: 0.985,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const previewItem = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const previewHover = {
  y: -2,
};

export const testimonialHeader = {
  initial: {
    opacity: 0,
    y: 28,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.4,
  },
};

export const testimonialCard = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.25,
  },
};

export const testimonialCardHover = {
  y: -5,
};

export const testimonialQuoteHover = {
  x: 3,
};

export const pricingHeader = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.4,
  },
};

export const pricingToggle = {
  initial: {
    opacity: 0,
    y: 12,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.6,
  },
};

export const pricingCard = {
  initial: {
    opacity: 0,
    y: 32,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const pricingCardHover = {
  y: -5,
};

export const pricingToggleHover = {
  y: -1,
};

export const faqHeader = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.4,
  },
};

export const faqItem = {
  initial: {
    opacity: 0,
    y: 18,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
};

export const faqItemHover = {
  x: 3,
};

export const faqAnswer = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: "auto",
  },
  exit: {
    opacity: 0,
    height: 0,
  },
};

export const logoCloudHeader = {
  initial: {
    opacity: 0,
    y: 16,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.6,
  },
};

export const logoCloudLogo = {
  initial: {
    opacity: 0,
    y: 14,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.6,
  },
};

export const logoCloudLogoHover = {
  y: -3,
};

export const finalCtaRoute = {
  initial: {
    opacity: 0,
    x: -24,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.6,
  },
};

export const finalCtaContent = {
  initial: {
    opacity: 0,
    y: 28,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.4,
  },
};

export const finalCtaButton = {
  initial: {
    opacity: 0,
    y: 16,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.5,
  },
};

export const finalCtaButtonHover = {
  y: -3,
};