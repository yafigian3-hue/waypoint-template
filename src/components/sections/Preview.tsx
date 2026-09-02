import { useState } from "react";
import {
  ArrowRight,
  Activity,
  Bell,
  Bug,
  CircleAlert,
  LayoutDashboard,
  Route,
  Search,
} from "lucide-react";
import {
  content,
  errorLines,
  previewRows,
  type PreviewTab,
} from "../../lib/content";
import { SectionLabel } from "../shared/section-label";

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

export default function Preview() {
  return (
    <section className="pb-[100px] pt-20 md:pt-[120px]">
      <div className="container">
        <SectionLabel>PRODUCT PREVIEW</SectionLabel>
        <h2 className="my-5 font-display text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em]">
          {content.preview.headline}
        </h2>
        <DashboardPreview />
      </div>
    </section>
  );
}
