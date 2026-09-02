import type { Transition } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const motionTransitions = {
  fast: {
    duration: 0.2,
  } satisfies Transition,

  standard: {
    duration: 0.6,
    ease: easeOut,
  } satisfies Transition,

  slow: {
    duration: 0.8,
    ease: easeOut,
  } satisfies Transition,

  route: {
    duration: 1,
    ease: easeOut,
  } satisfies Transition,

  pulse: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  } satisfies Transition,

  signal: {
    duration: 1.2,
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
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fadeUpLarge = {
  initial: {
    opacity: 0,
    y: 40,
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
    y: 30,
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
  y: -5,
};

export const hoverLiftLarge = {
  y: -6,
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
