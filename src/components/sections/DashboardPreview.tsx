import { motion } from "framer-motion";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
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
import {
  motionTransitions,
  previewDashboard,
  previewHover,
  previewItem,
} from "../../lib/animations";

function ErrorTrackingView() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {content.preview.dashboard.metrics.map(
          ([label, value, change], index) => (
            <motion.div
              key={label}
              {...previewItem}
              transition={{
                ...motionTransitions.standard,
                delay: 0.08 + index * 0.07,
              }}
              whileHover={previewHover}
              className="border border-slate/15 bg-paper p-3.5 transition-colors duration-200 hover:border-brass/60"
            >
              <div className="font-mono text-[8px] uppercase text-slate">
                {label}
              </div>
              <div className="mt-2 text-xl font-semibold tracking-tight">
                {value}
              </div>
              <div className="mt-1 font-mono text-[9px] text-status">
                {change}
              </div>
            </motion.div>
          ),
        )}
      </div>

      <motion.div
        {...previewItem}
        transition={{ ...motionTransitions.standard, delay: 0.3 }}
        className="mt-3 border border-slate/20 p-3"
      >
        <div className="mb-3 flex justify-between">
          <span className="font-mono text-[9px] uppercase text-slate">
            {content.preview.dashboard.recentErrorsLabel}
          </span>
          <Search size={13} className="text-slate" />
        </div>

        {previewRows.map((row, index) => (
          <motion.div
            key={row.service}
            {...previewItem}
            transition={{
              ...motionTransitions.standard,
              delay: 0.34 + index * 0.06,
            }}
            className="flex items-center justify-between border-t border-slate/20 py-2.5 font-mono text-[10px]"
          >
            <span className="flex items-center gap-2">
              <span
                className={`size-1.5 rounded-full ${row.status === "degraded" ? "bg-status" : "bg-ink"}`}
              />
              {row.service}
            </span>
            <span className="text-slate">{row.latency}</span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

function RootCauseView() {
  const { rootCause, traceAction } = content.preview.dashboard;

  return (
    <motion.div
      {...previewItem}
      transition={motionTransitions.standard}
      className="border border-slate/20 p-4"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-[10px] text-status">
          <CircleAlert size={14} />
          {rootCause.error}
        </div>

        <span className="font-mono text-[9px] text-slate">
          {rootCause.service}
        </span>
      </div>

      <div className="border-y border-slate/20 py-3">
        <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-brass">
          Root cause
        </div>
        <div className="mt-2 text-sm font-medium text-ink">
          {rootCause.cause}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-slate">
        <Route size={12} />
        {rootCause.endpoint}
      </div>

      {errorLines.map((line, index) => (
        <motion.div
          key={line}
          {...previewItem}
          transition={{
            ...motionTransitions.standard,
            delay: 0.08 + index * 0.05,
          }}
          className="border-t border-slate/20 py-2 font-mono text-[10px] text-slate"
        >
          {line}
        </motion.div>
      ))}

      <button className="mt-4 border border-ink px-3 py-2 font-mono text-[9px]">
        {traceAction} <ArrowRight className="ml-1 inline" size={11} />
      </button>
    </motion.div>
  );
}

function TeamAlertsView() {
  const { teamAlerts, teamAlertsLabel } = content.preview.dashboard;

  return (
    <motion.div
      {...previewItem}
      transition={motionTransitions.standard}
      className="border border-slate/20 p-3"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase text-slate">
          {teamAlertsLabel}
        </span>
        <Bell size={13} className="text-slate" />
      </div>

      {teamAlerts.map((alert, index) => (
        <motion.div
          key={`${alert.service}-${alert.time}`}
          {...previewItem}
          transition={{
            ...motionTransitions.standard,
            delay: 0.06 + index * 0.07,
          }}
          className="border-t border-slate/20 py-3"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className={`size-1.5 shrink-0 rounded-full ${alert.severity === "critical" ? "bg-status" : alert.severity === "warning" ? "bg-brass" : "bg-ink"}`}
                />
                <span className="font-mono text-[10px] font-semibold">
                  {alert.message}
                </span>
              </div>

              <div className="mt-1 font-mono text-[9px] text-slate">
                {alert.service}
              </div>
            </div>

            <span className="shrink-0 font-mono text-[9px] text-slate">
              {alert.time}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function DashboardPreview() {
  const [tab, setTab] = useState<PreviewTab>(content.preview.defaultTab);

  return (
    <motion.div
      {...previewDashboard}
      transition={motionTransitions.slow}
      className="mt-10 overflow-hidden border border-slate/20 bg-paper shadow-[8px_8px_0_rgba(18,24,31,0.1)] transition-shadow duration-300 hover:shadow-[10px_10px_0_rgba(184,134,63,0.2)] sm:mt-12 lg:mt-14"
    >
      <div className="flex min-h-12 items-center justify-between border-b border-slate/15 bg-paper px-4 py-3 sm:px-5">
        <div className="flex gap-1.5">
          <i className="block size-1.5 rounded-full bg-slate/20" />
          <i className="block size-1.5 rounded-full bg-slate/20" />
          <i className="block size-1.5 rounded-full bg-slate/20" />
        </div>

        <span className="font-mono text-[10px] tracking-wide text-slate">
          {content.preview.browser.host} /{" "}
          {tab.toLowerCase().replaceAll(" ", "-")}
        </span>

        <div className="size-3 rounded-full bg-slate/20" />
      </div>

      <div className="flex min-h-[360px]">
        <aside className="hidden w-44 flex-none border-r border-slate/15 bg-ink px-3.5 py-6 text-paper md:block">
          <div className="mb-8 flex items-center gap-2 font-mono text-[10px] font-semibold">
            <span className="grid size-5 place-items-center bg-ink text-paper">
              <Route size={11} />
            </span>
            {content.preview.dashboard.sidebar.brand}
          </div>

          {content.preview.dashboard.sidebar.items.map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-2 px-2.5 py-2 font-mono text-[10px] ${item === "Errors" ? "bg-paper-dim text-ink" : "text-slate"}`}
            >
              {index === 0 ? (
                <LayoutDashboard size={13} />
              ) : index === 1 ? (
                <Bug size={13} />
              ) : index === 2 ? (
                <Activity size={13} />
              ) : (
                <Bell size={13} />
              )}
              {item}
            </div>
          ))}
        </aside>

        <div className="min-w-0 flex-1 p-4 sm:p-6">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[.18em] text-slate">
                {content.preview.dashboard.context}
              </div>
              <h4 className="mt-1 text-lg font-semibold tracking-tight">
                {tab}
              </h4>
            </div>

            <span className="inline-flex items-center gap-1 border border-slate/20 px-2 py-1 font-mono text-[9px] text-slate">
              <span className="size-1.5 rounded-full bg-status" />
              {content.preview.dashboard.liveLabel}
            </span>
          </div>

          <div className="mb-5 flex gap-1 overflow-auto border-b border-slate/20">
            {content.preview.tabs.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => setTab(item.label)}
                whileHover={previewHover}
                transition={motionTransitions.fast}
                className={`whitespace-nowrap px-3 pb-2 font-mono text-[10px] ${tab === item.label ? "border-b-2 border-brass text-ink" : "text-slate"}`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {tab === "Error tracking" && <ErrorTrackingView />}
          {tab === "Root cause" && <RootCauseView />}
          {tab === "Team alerts" && <TeamAlertsView />}
        </div>
      </div>
    </motion.div>
  );
}
