import { content } from "../../lib/content";

export default function LogoCloud() {
  return (
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
  );
}
