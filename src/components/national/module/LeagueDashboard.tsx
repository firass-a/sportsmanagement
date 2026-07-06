"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  Building2,
  Calendar,
  ChevronLeft,
  ClipboardList,
  IdCard,
  Network,
  Trophy,
} from "lucide-react";
import {
  DistributionDonutChart,
  SeasonTrendBarChart,
} from "@/components/charts/ChartStyles";
import {
  ModuleAlerts,
  ModuleDataTable,
  ModulePanel,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import { NationalAdminStats } from "@/components/national/module/NationalAdminStats";
import {
  leagueAlerts,
  leagueClubs,
  leaguePendingLicenses,
  leagueSportDistribution,
  leagueStats,
  leagueTasks,
  leagueLicenseTrend,
  leagueUpcomingTournaments,
} from "@/lib/national/modules/mock-data";

const scopeItems = [
  { label: "النوادي المنخرطة", value: "34", color: "bg-asl-orange" },
  { label: "الفروع الرياضية", value: "86", color: "bg-asl-blue" },
  { label: "الرياضيون المرخصون", value: "1,280", color: "bg-emerald-500" },
  { label: "المدربون / الحكام", value: "142", color: "bg-purple-500" },
];

function PanelHeader({
  icon: Icon,
  title,
  iconBg,
  iconColor,
  badge,
}: {
  icon: LucideIcon;
  title: string;
  iconBg: string;
  iconColor: string;
  badge?: ReactNode;
}) {
  return (
    <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-3">
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className={`h-4 w-4 ${iconColor}`} strokeWidth={2.5} />
      </div>
      <h3 className="text-sm font-bold text-asl-navy">{title}</h3>
      {badge}
    </div>
  );
}

export function LeagueDashboard() {
  return (
    <div className="mt-5 space-y-5">
      <ModuleAlerts alerts={leagueAlerts} />
      <NationalAdminStats title="مؤشرات الرابطة" stats={leagueStats} columns={6} />

      {/* Charts row */}
      <div className="grid gap-4 lg:grid-cols-2">
        <ModulePanel>
          <PanelHeader
            icon={IdCard}
            title="تطور الإجازات والرياضيين"
            iconBg="bg-asl-orange/10"
            iconColor="text-asl-orange"
          />
          <SeasonTrendBarChart data={leagueLicenseTrend} height={220} />
        </ModulePanel>
        <ModulePanel>
          <PanelHeader
            icon={Trophy}
            title="توزيع الإجازات حسب الرياضة"
            iconBg="bg-asl-blue/10"
            iconColor="text-asl-blue"
          />
          <DistributionDonutChart
            data={leagueSportDistribution}
            total="1,280"
            totalLabel="إجمالي"
            height={180}
            centered
          />
        </ModulePanel>
      </div>

      {/* Full-width clubs table */}
      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-asl-orange/10">
              <Building2 className="h-4 w-4 text-asl-orange" strokeWidth={2.5} />
            </div>
            <h2 className="text-base font-bold text-asl-navy">النوادي المنخرطة</h2>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">
              {leagueClubs.length}
            </span>
          </div>
          <button
            type="button"
            className="flex items-center gap-1 text-xs font-semibold text-asl-blue hover:underline"
          >
            عرض الكل
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
        </div>
        <ModuleDataTable
          columns={[
            { key: "name", label: "النادي" },
            { key: "branches", label: "الفروع" },
            { key: "athletes", label: "الرياضيون" },
            { key: "licenses", label: "الإجازات" },
            {
              key: "status",
              label: "الحالة",
              render: (row) => <StatusBadge status={String(row.status)} />,
            },
          ]}
          rows={leagueClubs}
          searchPlaceholder="بحث في النوادي..."
        />
      </div>

      {/* Bottom panels — full width, no wasted column space */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <ModulePanel className="h-full">
          <PanelHeader
            icon={Network}
            title="نطاق الرابطة"
            iconBg="bg-asl-blue/10"
            iconColor="text-asl-blue"
          />
          <p className="mb-3 text-xs leading-relaxed text-slate-600">
            الرابطة الولائية هي الحلقة التنظيمية بين الاتحادية والنوادي. تتابع الانخراط،
            الإجازات، التحويلات والمنافسات.
          </p>
          <div className="space-y-1.5">
            {scopeItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${item.color}`} />
                  <span className="text-[11px] font-medium text-asl-navy">{item.label}</span>
                </div>
                <span className="text-xs font-bold text-asl-navy">{item.value}</span>
              </div>
            ))}
          </div>
        </ModulePanel>

        <ModulePanel className="h-full">
          <PanelHeader
            icon={ClipboardList}
            title="مهام الرابطة"
            iconBg="bg-amber-100"
            iconColor="text-amber-600"
            badge={
              <span className="mr-auto rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600">
                {leagueTasks.filter((t) => t.priority === "عاجل").length} عاجلة
              </span>
            }
          />
          <ul className="space-y-1.5">
            {leagueTasks.map((t) => (
              <li
                key={t.task}
                className="flex items-start justify-between gap-2 rounded-lg border border-slate-100 px-3 py-2"
              >
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-asl-navy">{t.task}</p>
                  <p className="text-[10px] text-slate-400">{t.due}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold ${
                    t.priority === "عاجل"
                      ? "bg-red-100 text-red-700"
                      : t.priority === "متوسط"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {t.priority}
                </span>
              </li>
            ))}
          </ul>
        </ModulePanel>

        <ModulePanel className="h-full">
          <PanelHeader
            icon={IdCard}
            title="إجازات معلقة"
            iconBg="bg-asl-orange/10"
            iconColor="text-asl-orange"
            badge={
              <span className="mr-auto rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-orange-700">
                {leaguePendingLicenses.length}
              </span>
            }
          />
          <ul className="space-y-1.5">
            {leaguePendingLicenses.map((l) => (
              <li
                key={l.name}
                className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2"
              >
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-semibold text-asl-navy">{l.name}</p>
                  <p className="text-[10px] text-slate-400">{l.club}</p>
                </div>
                <StatusBadge status={l.status} />
              </li>
            ))}
          </ul>
        </ModulePanel>

        <ModulePanel className="h-full">
          <PanelHeader
            icon={Calendar}
            title="منافسات قادمة"
            iconBg="bg-green-100"
            iconColor="text-green-600"
          />
          <ul className="space-y-1.5">
            {leagueUpcomingTournaments.map((t) => (
              <li
                key={t.name}
                className="rounded-lg border border-slate-100 px-3 py-2"
              >
                <p className="text-[11px] font-semibold leading-snug text-asl-navy">
                  {t.name}
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">{t.date}</span>
                  <StatusBadge status={t.status} />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-200/60 bg-amber-50/50 p-2.5">
            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
            <p className="text-[10px] leading-relaxed text-amber-900/80">
              4 منافسات جارية — تأكد من قوائم المشاركين قبل المواعيد.
            </p>
          </div>
        </ModulePanel>
      </div>
    </div>
  );
}
