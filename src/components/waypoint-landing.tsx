import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  X,
  Activity,
  Bell,
  Bug,
  CircleAlert,
  GitBranch,
  LayoutDashboard,
  Route,
  Search,
} from "lucide-react";
import {
  content,
  ctaFinal,
  errorLines,
  footerColumns,
  footerTagline,
  previewRows,
  type PreviewTab,
} from "../lib/content";

function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2 font-mono text-sm font-semibold tracking-[-0.04em]"
      aria-label="Waypoint home"
    >
      <span className="grid size-7 place-items-center bg-ink text-paper">
        <Route size={16} strokeWidth={1.7} />
      </span>
      WAYPOINT
    </a>
  );
}

function Button({
  children,
  variant = "dark",
  href = "#start",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "dark" | "light" | "text";
  href?: string;
  className?: string;
}) {
  const variants: Record<typeof variant, string> = {
    dark: "bg-ink text-paper px-[17px]",
    light: "border border-paper/50 bg-paper text-ink px-[17px]",
    text: "px-0 font-medium",
  };
  return (
    <a
      href={href}
      className={`inline-flex min-h-[42px] items-center justify-center gap-2.5 text-xs font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={15} />
    </a>
  );
}

function RouteLine({
  className = "",
  variant = "route",
}: {
  className?: string;
  variant?: "route" | "brass";
}) {
  const color =
    variant === "brass" ? "border-brass bg-brass" : "border-route bg-route";
  return (
    <div
      className={`relative flex h-[27px] items-center ${className}`}
      aria-hidden="true"
    >
      <span
        className={`size-2 rounded-full border bg-paper ${variant === "brass" ? "border-brass" : "border-route"}`}
      />
      <span
        className={`flex-1 border-t border-dashed opacity-80 ${variant === "brass" ? "border-brass" : "border-route"}`}
      />
      <span className={`size-2 rounded-full ${color}`} />
    </div>
  );
}

function DashboardPreview() {
  const [tab, setTab] = useState<PreviewTab>("Error tracking");
  return (
    <div className="mt-[50px] overflow-hidden border border-slate/20 bg-white shadow-[18px_18px_0_rgba(18,24,31,0.08)]">
      <div className="flex items-center justify-between border-b border-slate/20 px-[15px] py-[11px]">
        <div className="flex gap-1.5">
          <i className="block size-1.5 rounded-full bg-slate/20" />
          <i className="block size-1.5 rounded-full bg-slate/20" />
          <i className="block size-1.5 rounded-full bg-slate/20" />
        </div>
        <span className="font-mono text-[10px] tracking-wide text-slate">
          app.waypoint.dev / {tab.toLowerCase().replace(" ", "-")}
        </span>
        <div className="size-3 rounded-full bg-slate/20" />
      </div>
      <div className="flex min-h-[360px]">
        <aside className="hidden w-[170px] flex-none border-r border-slate/20 px-3.5 py-[22px] md:block">
          <div className="mb-8 flex items-center gap-2 font-mono text-[10px] font-semibold">
            <span className="grid size-5 place-items-center bg-ink text-paper">
              <Route size={11} />
            </span>
            WAYPOINT
          </div>
          {["Overview", "Errors", "Services", "Alerts"].map((x, i) => (
            <div
              key={x}
              className={`flex items-center gap-2 px-2.5 py-2 font-mono text-[10px] ${
                i === 1 ? "bg-paper-dim text-ink" : "text-slate"
              }`}
            >
              {i === 0 ? (
                <LayoutDashboard size={13} />
              ) : i === 1 ? (
                <Bug size={13} />
              ) : i === 2 ? (
                <Activity size={13} />
              ) : (
                <Bell size={13} />
              )}
              {x}
            </div>
          ))}
        </aside>
        <div className="min-w-0 flex-1 p-4 sm:p-6">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[.18em] text-slate">
                Production / errors
              </div>
              <h4 className="mt-1 text-lg font-semibold tracking-tight">
                {tab}
              </h4>
            </div>
            <span className="inline-flex items-center gap-1 border border-slate/20 px-2 py-1 font-mono text-[9px] text-slate">
              <span className="size-1.5 rounded-full bg-status" /> Live
            </span>
          </div>
          <div className="mb-5 flex gap-1 overflow-auto border-b border-slate/20">
            {content.preview.tabs.map((item) => (
              <button
                key={item.label}
                onClick={() => setTab(item.label)}
                className={`whitespace-nowrap px-3 pb-2 font-mono text-[10px] ${
                  tab === item.label
                    ? "border-b-2 border-brass text-ink"
                    : "text-slate"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {tab === "Error tracking" ? (
            <>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  ["Total errors", "1,284", "+12.4%"],
                  ["Affected services", "3", "+1 today"],
                  ["Error rate", "0.42%", "-8.1%"],
                ].map(([label, value, change]) => (
                  <div className="border border-slate/20 p-3" key={label}>
                    <div className="font-mono text-[8px] uppercase text-slate">
                      {label}
                    </div>
                    <div className="mt-2 text-xl font-semibold tracking-tight">
                      {value}
                    </div>
                    <div className="mt-1 font-mono text-[9px] text-status">
                      {change}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 border border-slate/20 p-3">
                <div className="mb-3 flex justify-between">
                  <span className="font-mono text-[9px] uppercase text-slate">
                    Recent errors
                  </span>
                  <Search size={13} className="text-slate" />
                </div>
                {previewRows.map((row) => (
                  <div
                    key={row.service}
                    className="flex items-center justify-between border-t border-slate/20 py-2.5 font-mono text-[10px]"
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`size-1.5 rounded-full ${row.status === "degraded" ? "bg-status" : "bg-ink"}`}
                      />
                      {row.service}
                    </span>
                    <span className="text-slate">{row.latency}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="border border-slate/20 p-4">
              <div className="mb-3 flex items-center gap-2 font-mono text-[10px] text-status">
                <CircleAlert size={14} /> PaymentTimeoutError
              </div>
              {errorLines.map((line) => (
                <div
                  key={line}
                  className="border-t border-slate/20 py-2 font-mono text-[10px] text-slate"
                >
                  {line}
                </div>
              ))}
              <button className="mt-4 border border-ink px-3 py-2 font-mono text-[9px]">
                View full trace <ArrowRight className="ml-1 inline" size={11} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-10 border-b border-slate/20 bg-paper/92 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {content.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-slate transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <Button href="#start">{content.nav.cta}</Button>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container flex flex-col gap-[18px] border-t border-slate/20 pb-[26px] pt-5 text-sm">
          {content.nav.links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button href="#start">{content.nav.cta}</Button>
        </nav>
      )}
    </header>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[.14em] leading-[1.4] ${
        light ? "text-paper" : "text-slate"
      }`}
    >
      <span className="h-px w-6 bg-brass" aria-hidden="true" />
      {children}
    </div>
  );
}

function FAQList() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="border-t border-slate/20">
      {content.faq.map((item, i) => (
        <div className="border-b border-slate/20" key={item.q}>
          <button
            onClick={() => setActive(active === i ? null : i)}
            aria-expanded={active === i}
            className="flex w-full items-center justify-between gap-[15px] border-0 bg-transparent py-5 text-left text-sm"
          >
            <span>{item.q}</span>
            <ChevronDown
              size={17}
              className={`flex-none transition-transform duration-200 ${active === i ? "rotate-180" : ""}`}
            />
          </button>
          {active === i && (
            <p className="mb-5 mr-[30px] max-w-[580px] text-[13px] leading-[1.65] text-slate">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function WaypointLanding() {
  const [annual, setAnnual] = useState(false);
  return (
    <main id="top">
      <Nav />

      <section className="overflow-hidden pb-[100px] pt-[75px] md:pt-[110px]">
        <div className="container grid grid-cols-1 items-center gap-[55px] md:grid-cols-2 md:gap-20">
          <div>
            <SectionLabel>{content.hero.eyebrow}</SectionLabel>
            <h1 className="mb-[25px] mt-[22px] font-display text-[clamp(48px,7vw,88px)] font-semibold leading-[0.98] tracking-[-0.02em]">
              {content.hero.headline.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-[480px] text-base leading-[1.65] text-slate">
              {content.hero.subheadline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#start">{content.hero.primary}</Button>
              <a
                href="#how-it-works"
                className="inline-flex min-h-[42px] items-center gap-2.5 text-xs font-medium"
              >
                {content.hero.secondary}
                <span className="grid size-7 place-items-center border border-slate/20">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-[11px] text-slate">
              <span className="inline-block size-1.5 rounded-full bg-brass" />
              Set up in 5 minutes · No credit card required
            </div>
          </div>
          <div className="relative min-h-[370px] md:min-h-[390px]">
            <RouteLine className="absolute left-[-48px] right-[-45px] top-[49%] rotate-[-24deg]" />
            <div className="absolute right-0 top-[42px] w-[min(390px,82%)] border border-slate/20 bg-paper p-[21px] shadow-[12px_14px_0_rgba(18,24,31,0.06)]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[.15em] text-slate">
                  Live incident
                </span>
                <span className="font-mono text-[9px] text-status">
                  ● 2 min ago
                </span>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <div className="grid size-9 shrink-0 place-items-center bg-status/10 text-status">
                  <CircleAlert size={17} />
                </div>
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
            </div>
            <div className="absolute bottom-[25px] left-2.5 w-[min(300px,70%)] border border-ink bg-ink p-[21px] text-paper shadow-[10px_10px_0_rgba(184,134,63,0.28)]">
              <div className="flex items-center gap-2 font-mono text-[10px] text-slate">
                <GitBranch size={13} /> Trace path
              </div>
              <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px]">
                <span>api-gateway</span>
                <ArrowRight size={11} className="text-slate" />
                <span>checkout</span>
                <ArrowRight size={11} className="text-slate" />
                <span className="text-brass">payments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate/20 py-[22px]">
        <div className="container flex flex-wrap items-center justify-between gap-5">
          <span className="font-mono text-[9px] uppercase tracking-[.16em] text-slate">
            Trusted by engineering teams at
          </span>
          {content.logos.map((logo) => (
            <span
              key={logo}
              className="font-mono text-xs font-semibold text-slate"
            >
              {logo}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-[120px]" id="product">
        <div className="container">
          <div className="max-w-2xl">
            <SectionLabel>{content.problem.eyebrow}</SectionLabel>
            <h2 className="my-5 font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
              {content.problem.headline}
            </h2>
            <p className="max-w-[500px] leading-[1.65] text-slate">
              {content.problem.body}
            </p>
          </div>
          <div className="mt-[68px] grid grid-cols-1 gap-[38px] md:grid-cols-3 md:gap-[18px]">
            {content.problem.cards.map((card, i) => (
              <article
                className="border-t border-ink pt-[18px]"
                key={card.title}
              >
                <span className="font-mono text-[10px] text-brass">
                  0{i + 1}
                </span>
                <h3 className="mb-2.5 mt-8 text-[17px] tracking-[-0.03em]">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-slate">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-dim py-20 md:py-[120px]">
        <div className="container grid grid-cols-1 gap-[55px] md:grid-cols-[0.9fr_1.1fr] md:gap-[100px]">
          <div>
            <SectionLabel>{content.solution.eyebrow}</SectionLabel>
            <h2 className="my-5 font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
              {content.solution.headline}
            </h2>
            <p className="max-w-[500px] leading-[1.65] text-slate">
              {content.solution.body}
            </p>
            <Button href="#how-it-works" className="mt-6">
              See how it works
            </Button>
          </div>
          <div className="flex flex-col gap-7">
            {content.solution.features.map((feature, i) => (
              <article
                key={feature.title}
                className="flex gap-[17px] border-b border-slate/20 pb-[27px]"
              >
                <div className="grid size-[35px] flex-none place-items-center border border-ink [&>svg]:w-4">
                  {
                    [
                      <Route key="route" />,
                      <Bell key="bell" />,
                      <LayoutDashboard key="dash" />,
                    ][i]
                  }
                </div>
                <div>
                  <h3 className="mb-2 text-[17px] tracking-[-0.03em]">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-slate">
                    {feature.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate/20 py-20 md:py-[120px]"
        id="how-it-works"
      >
        <div className="container">
          <div className="text-center">
            <SectionLabel>HOW IT WORKS</SectionLabel>
            <h2 className="mx-auto my-5 max-w-2xl font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
              {content.how.headline}
            </h2>
          </div>
          <div className="mt-[65px] grid grid-cols-1 gap-[38px] md:grid-cols-3 md:gap-5">
            {content.how.steps.map((step, i) => (
              <article
                className="relative border-l border-route pl-[22px]"
                key={step.title}
              >
                <div className="font-mono text-[11px] text-route">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2.5 mt-[50px] text-[17px] tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-slate">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[100px] pt-20 md:pt-[120px]">
        <div className="container">
          <SectionLabel>PRODUCT PREVIEW</SectionLabel>
          <h2 className="my-5 font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
            {content.preview.headline}
          </h2>
          <DashboardPreview />
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-[120px]">
        <div className="container">
          <SectionLabel light>FROM THE TEAMS</SectionLabel>
          <h2 className="my-5 max-w-[800px] font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
            {content.testimonials[0].quote}
          </h2>
          <div className="mt-[65px] grid grid-cols-1 gap-[38px] md:grid-cols-3 md:gap-[18px]">
            {content.testimonials.map((item) => (
              <article
                key={item.name}
                className="border-t border-[#444a45] pt-5"
              >
                <div className="mb-6 text-brass">&ldquo;</div>
                <p className="text-[13px] leading-[1.6] text-[#d8ddd7]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-[#444a45] pt-4">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-[11px] text-[#aab0aa]">
                    {item.role} · {item.company}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-[120px]" id="pricing">
        <div className="container">
          <div className="text-center">
            <SectionLabel>PRICING</SectionLabel>
            <h2 className="mx-auto my-5 max-w-2xl font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
              {content.pricing.headline}
            </h2>
            <p className="mx-auto mb-6 max-w-[500px] leading-[1.65] text-slate">
              {content.pricing.subheadline}
            </p>
            <button
              onClick={() => setAnnual(!annual)}
              className="inline-flex gap-0.5 border border-slate/20 p-[3px] text-[11px]"
            >
              <span
                className={`px-[11px] py-2 ${!annual ? "bg-ink text-paper" : "text-slate"}`}
              >
                Monthly
              </span>
              <span
                className={`px-[11px] py-2 ${annual ? "bg-ink text-paper" : "text-slate"}`}
              >
                Yearly <b className="font-semibold text-brass">-20%</b>
              </span>
            </button>
          </div>
          <div className="mt-[50px] grid grid-cols-1 gap-[38px] md:grid-cols-3 md:gap-[18px]">
            {content.pricing.tiers.map((tier) => (
              <article
                key={tier.name}
                className={`relative border p-[25px] ${
                  tier.highlighted
                    ? "border-[1.5px] border-brass"
                    : "border-slate/20"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-2.5 right-4 bg-brass px-[7px] py-1 font-mono text-[8px] uppercase tracking-wider text-paper">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-[17px] tracking-[-0.03em]">{tier.name}</h3>
                <p className="mt-2.5 text-[13px] leading-[1.6] text-slate">
                  {tier.description}
                </p>
                <div className="my-7 font-display text-[38px] font-semibold tracking-[-0.02em]">
                  {tier.price !== "Custom" && (
                    <small className="font-sans text-xs font-normal text-slate">
                      $
                    </small>
                  )}
                  {tier.price !== "Custom"
                    ? annual
                      ? Math.round(Number(tier.price) * 0.8)
                      : tier.price
                    : tier.price}
                  {tier.price !== "Custom" && (
                    <small className="font-sans text-xs font-normal text-slate">
                      /mo
                    </small>
                  )}
                </div>
                <Button
                  variant={tier.highlighted ? "dark" : "light"}
                  className="w-full"
                >
                  {tier.name === "Enterprise"
                    ? "Contact us"
                    : `Get started with ${tier.name}`}
                </Button>
                <ul className="mt-[30px] flex flex-col gap-[13px] text-xs">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-slate"
                    >
                      <Check size={14} className="flex-none text-brass" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-slate/20 py-20 md:py-[120px]"
        id="faq"
      >
        <div className="container grid grid-cols-1 gap-[55px] md:grid-cols-[0.9fr_1.1fr] md:gap-[100px]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="my-5 font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
              Frequently asked questions
            </h2>
            <p className="max-w-[500px] leading-[1.65] text-slate">
              Still have questions?{" "}
              <a
                href="mailto:hello@waypoint.dev"
                className="underline underline-offset-[3px]"
              >
                Contact us.
              </a>
            </p>
          </div>
          <FAQList />
        </div>
      </section>

      <section className="bg-ink pb-[85px] pt-[75px] text-paper" id="start">
        <div className="container">
          <RouteLine variant="brass" className="mb-12" />
          <SectionLabel light>GET STARTED</SectionLabel>
          <h2 className="mb-5 mt-[22px] font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
            {ctaFinal.headline}
          </h2>
          <p className="max-w-[480px] leading-[1.6] text-paper-dim">
            {ctaFinal.subheadline}
          </p>
          <Button variant="light" className="mt-[18px]">
            {ctaFinal.label}
          </Button>
        </div>
      </section>

      <footer>
        <div className="container flex flex-col justify-between gap-[50px] py-[65px] md:flex-row">
          <div>
            <Logo />
            <p className="mt-[18px] max-w-[230px] text-xs leading-[1.6] text-slate">
              {footerTagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-[35px] md:gap-20">
            {footerColumns.map((column) => (
              <div
                key={column.title}
                className="flex min-w-[90px] flex-col gap-3"
              >
                <div className="text-[10px] uppercase tracking-widest text-slate">
                  {column.title}
                </div>
                {column.links.map((link) => (
                  <a
                    href="#product"
                    key={link}
                    className="text-[11px] text-slate"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="container flex justify-between border-t border-slate/20 pb-[25px] pt-[18px]">
          <span className="text-[11px] text-slate">
            © {new Date().getFullYear()} Waypoint, Inc.
          </span>
          <span className="flex gap-4 text-[11px] text-slate">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </span>
        </div>
      </footer>
    </main>
  );
}
