"use client";

import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { nationalQuickStats } from "@/lib/national/data";

export function QuickStats() {
  const { t } = useLanguage();
  const s = t.national.stats;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-bold text-asl-navy">{t.national.statistics}</h2>
        <Link
          href="/national/statistics"
          className="inline-flex items-center gap-1 text-xs font-medium text-asl-orange hover:underline"
        >
          <BarChart3 className="h-3.5 w-3.5" />
          {t.national.viewFullStatistics}
        </Link>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {nationalQuickStats.map(({ key, value, trend, icon: Icon }) => (
          <div
            key={key}
            className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-3 shadow-sm"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-asl-orange/10">
              <Icon className="h-5 w-5 text-asl-orange" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <p className="text-lg font-bold leading-none text-asl-navy">{value}</p>
              <p className="mt-0.5 truncate text-[10px] font-medium text-asl-navy/60 sm:text-xs">
                {s[key]}
              </p>
              {trend && (
                <p
                  className={`text-[10px] font-semibold ${
                    trend.startsWith("+") ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {trend}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
