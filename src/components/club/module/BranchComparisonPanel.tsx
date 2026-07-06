"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type BranchRow = {
  branch: string;
  athletes: number;
  trainings: number;
  attendance: string;
  championships: number;
  achievements: string;
};

const METRICS = [
  { id: "athletes", label: "الرياضيون", color: "#1a6fd4" },
  { id: "trainings", label: "التدريبات", color: "#f37021" },
  { id: "attendance", label: "الحضور %", color: "#27AE60" },
  { id: "championships", label: "البطولات", color: "#9B51E0" },
] as const;

type MetricId = (typeof METRICS)[number]["id"];

function metricValue(row: BranchRow, id: MetricId) {
  if (id === "attendance") return parseInt(row.attendance, 10) || 0;
  return row[id];
}

export function BranchComparisonPanel({ branches }: { branches: BranchRow[] }) {
  const { dir } = useLanguage();
  const isRtl = dir === "rtl";
  const [metric, setMetric] = useState<MetricId>("athletes");

  const active = METRICS.find((m) => m.id === metric)!;

  const chartData = useMemo(
    () =>
      [...branches]
        .map((b) => ({
          branch: b.branch,
          value: metricValue(b, metric),
        }))
        .sort((a, b) => b.value - a.value),
    [branches, metric],
  );

  const max = Math.max(...chartData.map((d) => d.value), 1);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {METRICS.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMetric(m.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              metric === m.id
                ? "text-white shadow-sm"
                : "border border-slate-200 bg-white text-asl-navy hover:border-asl-blue/30"
            }`}
            style={
              metric === m.id ? { backgroundColor: m.color } : undefined
            }
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
        <p className="mb-4 text-sm font-bold text-asl-navy">
          مقارنة الفروع — {active.label}
        </p>
        <div className="space-y-4">
          {chartData.map((item) => {
            const pct = Math.round((item.value / max) * 100);
            return (
              <div key={item.branch}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-semibold text-asl-navy">{item.branch}</span>
                  <span className="font-bold" style={{ color: active.color }}>
                    {item.value}
                    {metric === "attendance" ? "%" : ""}
                  </span>
                </div>
                <div className="h-4 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${isRtl ? "ms-auto" : ""}`}
                    style={{
                      width: `${pct}%`,
                      background: `linear-gradient(to bottom, ${active.color}, ${active.color}cc)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {branches.map((branch) => (
          <div
            key={branch.branch}
            className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
          >
            <p className="mb-3 text-base font-bold text-asl-navy">{branch.branch}</p>
            <div className="space-y-2.5">
              {METRICS.map((m) => {
                const val = metricValue(branch, m.id);
                const branchMax = Math.max(
                  ...branches.map((b) => metricValue(b, m.id)),
                  1,
                );
                const pct = Math.round((val / branchMax) * 100);
                return (
                  <div key={m.id} className="flex items-center gap-3">
                    <span className="w-20 shrink-0 text-xs font-medium text-slate-500">
                      {m.label}
                    </span>
                    <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: m.color,
                        }}
                      />
                    </div>
                    <span className="w-10 shrink-0 text-end text-xs font-bold text-asl-navy">
                      {val}
                      {m.id === "attendance" ? "%" : ""}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 border-t border-slate-100 pt-2 text-xs text-asl-orange">
              {branch.achievements}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
