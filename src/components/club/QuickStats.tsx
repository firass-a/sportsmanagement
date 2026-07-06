"use client";

import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { quickStatsData } from "@/lib/club/data";

export function QuickStats() {
  const { t } = useLanguage();
  const s = t.club.stats;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-bold text-asl-navy">{t.club.statistics}</h2>
        <Link
          href="/club/statistics"
          className="inline-flex items-center gap-1 text-xs font-medium text-asl-orange hover:underline"
        >
          <BarChart3 className="h-3.5 w-3.5" />
          {t.club.viewFullStatistics}
        </Link>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {quickStatsData.map(({ key, value, icon: Icon }) => (
          <div
            key={key}
            className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-2.5 py-2 shadow-sm sm:flex-col sm:gap-1 sm:px-3 sm:py-3"
          >
            <Icon
              className="h-4 w-4 shrink-0 text-asl-orange sm:mb-0.5 sm:h-5 sm:w-5"
              strokeWidth={2.5}
            />
            <div className="min-w-0 sm:text-center">
              <p className="text-base font-bold leading-none text-asl-navy sm:text-xl">
                {value}
              </p>
              <p className="mt-0.5 truncate text-[10px] font-medium text-asl-navy/60 sm:text-xs">
                {s[key]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
