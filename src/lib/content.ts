export const content = {
  nav: {
    links: [
      { label: "Product", href: "#product" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Start for free",
  },
  hero: {
    eyebrow: "ERROR MONITORING FOR MODERN BACKENDS",
    headline: "Stop guessing.\nStart tracing.",
    subheadline:
      "Waypoint helps engineering teams find the root cause of production errors before your users do.",
    primary: "Start for free",
    secondary: "See how it works",
  },
  logos: ["Northstar Labs", "Vector Systems", "Orbit Cloud", "Lumen Stack"],
  problem: {
    eyebrow: "PROBLEM",
    headline: "Production errors never come with enough context.",
    body: "A stack trace shows where it broke. Waypoint shows you why.",
    cards: [
      {
        title: "Alerts without context",
        text: "Your team gets notified, but still has to open five dashboards to understand what happened.",
      },
      {
        title: "Hidden root causes",
        text: "An error in Service A often starts with a small change in Service C.",
      },
      {
        title: "Slow incident response",
        text: "Every minute spent guessing is a minute your customers are waiting.",
      },
    ],
  },
  solution: {
    eyebrow: "SOLUTION",
    headline: "One place to see what's actually happening.",
    body: "Waypoint connects errors to the request, service, deployment, and the people who can fix them.",
    features: [
      {
        title: "Automatic root cause",
        text: "Trace an error down to the exact line of code that caused the request to fail.",
      },
      {
        title: "Actionable alerts",
        text: "Send full context to Slack, PagerDuty, or the workflow of your choice.",
      },
      {
        title: "Service dashboards",
        text: "See the health of every service from one structured dashboard.",
      },
    ],
  },
  how: {
    headline: "From error to root cause in three steps",
    steps: [
      {
        title: "Connect Waypoint to your services",
        text: "Add Waypoint to your backend services and start sending errors automatically.",
      },
      {
        title: "Waypoint monitors every request automatically",
        text: "Every request is analyzed to surface errors, failure patterns, and technical context.",
      },
      {
        title: "Your team gets alerts with full context",
        text: "When something fails, the right person receives a full alert with root cause and stack trace.",
      },
    ],
  },
  preview: {
    headline: "See what's actually happening in production",
    tabs: [
      {
        label: "Error tracking",
        text: "Monitor every API error and see which services are affected in real time.",
      },
      {
        label: "Root cause",
        text: "Trace an error down to the line of code that caused the request to fail.",
      },
      {
        label: "Team alerts",
        text: "Make sure every incident reaches the right team with the context they need.",
      },
    ],
  },
  testimonials: [
    {
      quote:
        "Waypoint cut the time we spend finding the cause of errors from hours to minutes.",
      name: "Raka Pratama",
      role: "Backend Engineer",
      company: "Northstar Labs",
    },
    {
      quote:
        "Now we know which service is having issues before customers start contacting support.",
      name: "Maya Chen",
      role: "Engineering Lead",
      company: "Vector Systems",
    },
    {
      quote:
        "The context Waypoint provides makes incident response much faster.",
      name: "Dimas Arya",
      role: "Senior Software Engineer",
      company: "Orbit Cloud",
    },
  ],
  pricing: {
    headline: "Simple pricing for every stage of growth",
    subheadline: "Start small, then scale up as your production traffic grows.",
    tiers: [
      {
        name: "Starter",
        price: "19",
        description: "For small teams just getting started.",
        features: [
          "5,000 error events / month",
          "7-day error history",
          "Basic error tracking",
          "Email alerts",
        ],
        highlighted: false,
      },
      {
        name: "Pro",
        price: "49",
        description: "For teams running production workloads.",
        features: [
          "50,000 error events / month",
          "90-day error history",
          "Automatic root cause",
          "Slack & PagerDuty",
          "Service dashboards",
        ],
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For organizations with compliance and SLA requirements.",
        features: [
          "Unlimited error events",
          "Custom data retention",
          "Advanced access control",
          "SLA & priority support",
          "Custom integrations",
        ],
        highlighted: false,
      },
    ],
  },
  faq: [
    {
      q: "Can Waypoint be used without changing my code?",
      a: "Waypoint requires a lightweight integration in your service so errors and request context can be sent to the monitoring system.",
    },
    {
      q: "How does automatic root cause work?",
      a: "Waypoint analyzes the stack trace, request context, service, and error patterns to help identify the source of the failure.",
    },
    {
      q: "Is there a free trial without a credit card?",
      a: "Yes. You can try Waypoint without entering a credit card during the trial period.",
    },
    {
      q: "Is Waypoint only for backend APIs?",
      a: "Waypoint currently focuses on monitoring backend APIs and services. Support for other types of monitoring is on our roadmap.",
    },
    {
      q: "How long is error data retained?",
      a: "Retention depends on your plan. The Pro plan provides up to 90 days of error history.",
    },
    {
      q: "Can Waypoint connect to our incident workflow?",
      a: "Yes. Waypoint is designed to connect with tools like Slack and PagerDuty so alerts flow directly into your team's workflow.",
    },
  ],
} as const;

export type PreviewTab = (typeof content.preview.tabs)[number]["label"];
export type FAQ = (typeof content.faq)[number];
export type PricingTier = (typeof content.pricing.tiers)[number];

export const previewRows = [
  { service: "api-gateway", status: "healthy", latency: "142ms" },
  { service: "payments", status: "degraded", latency: "1.8s" },
  { service: "notifications", status: "healthy", latency: "98ms" },
];
export const errorLines = [
  "POST /v1/checkout",
  "PaymentTimeoutError",
  "at processPayment (payments.ts:84)",
  "at async handler (route.ts:21)",
];
export const integrationIcons = ["Slack", "PagerDuty", "GitHub", "Sentry"];
export const footerColumns = [
  { title: "Product", links: ["Features", "Pricing", "Integrations"] },
  { title: "Company", links: ["About", "Blog", "Contact"] },
  { title: "Resources", links: ["Documentation", "Changelog", "Status"] },
];
export const footerTagline =
  "Error monitoring that shows you the path to root cause.";
export const ctaFinal = {
  headline: "Stop guessing. Start tracing.",
  subheadline: "Find the cause of production errors before your users do.",
  label: "Start for free",
};
