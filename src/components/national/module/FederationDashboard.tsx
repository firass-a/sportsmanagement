"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ClipboardList,
  FileText,
  Network,
  Shield,
} from "lucide-react";
import {
  ModuleAlerts,
  ModuleDataTable,
  ModulePanel,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import { NationalAdminStats } from "@/components/national/module/NationalAdminStats";
import {
  federationAlerts,
  federationLeagues,
  federationStats,
} from "@/lib/national/modules/mock-data";

const adminTasks = [
  { task: "مراجعة وثائق 3 رابطات", priority: "عاجل", due: "08/07/2026" },
  { task: "اعتماد قائمة الحكام الوطنيين", priority: "متوسط", due: "15/07/2026" },
  { task: "تصدير تقرير الإجازات — Q2", priority: "متوسط", due: "20/07/2026" },
  { task: "تحديث لائحة البطولات الرسمية", priority: "عادي", due: "01/08/2026" },
];

const recentDecisions = [
  { title: "اعتماد بطولة وطنية — الجودو", date: "15 ماي 2026" },
  { title: "تمديد فترة التحويلات", date: "10 ماي 2026" },
  { title: "تفعيل موسم 2026/2027", date: "01 سبتمبر 2026" },
];

const hierarchy = [
  { level: "الاتحادية الوطنية", count: "1", color: "bg-asl-navy" },
  { level: "الرابطات الولائية", count: "48", color: "bg-asl-orange" },
  { level: "النوادي الرسمية", count: "620", color: "bg-asl-blue" },
  { level: "الرياضيون / المدربون / الحكام", count: "20,585", color: "bg-emerald-500" },
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
      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className={`h-4 w-4 ${iconColor}`} strokeWidth={2.5} />
      </div>
      <h3 className="text-sm font-bold text-asl-navy">{title}</h3>
      {badge}
    </div>
  );
}

export function FederationDashboard() {
  return (
    <div className="mt-5 space-y-5">
      <ModuleAlerts alerts={federationAlerts} />
      <NationalAdminStats title="مؤشرات الاتحادية" stats={federationStats} />

      {/* Full-width table */}
      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-asl-orange/10">
              <Network className="h-4 w-4 text-asl-orange" strokeWidth={2.5} />
            </div>
            <h2 className="text-base font-bold text-asl-navy">الرابطات التابعة</h2>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">
              {federationLeagues.length}
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
            { key: "name", label: "الرابطة" },
            { key: "wilaya", label: "الولاية" },
            { key: "clubs", label: "النوادي" },
            { key: "licenses", label: "الإجازات" },
            {
              key: "status",
              label: "الحالة",
              render: (row) => <StatusBadge status={String(row.status)} />,
            },
          ]}
          rows={federationLeagues}
          searchPlaceholder="بحث في الرابطات..."
        />
      </div>

      {/* Bottom row — equal columns, full width, no orphaned space */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <ModulePanel className="h-full">
          <PanelHeader
            icon={Building2}
            title="ملخص وطني"
            iconBg="bg-asl-blue/10"
            iconColor="text-asl-blue"
          />
          <p className="mb-3 text-xs leading-relaxed text-slate-600">
            التسلسل الإداري: الاتحادية ← الرابطات ← النوادي ← الرياضيون.
          </p>
          <div className="space-y-1.5">
            {hierarchy.map((item) => (
              <div
                key={item.level}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${item.color}`} />
                  <span className="truncate text-[11px] font-medium text-asl-navy">
                    {item.level}
                  </span>
                </div>
                <span className="shrink-0 text-xs font-bold text-asl-navy">{item.count}</span>
              </div>
            ))}
          </div>
        </ModulePanel>

        <ModulePanel className="h-full">
          <PanelHeader
            icon={ClipboardList}
            title="مهام إدارية"
            iconBg="bg-amber-100"
            iconColor="text-amber-600"
            badge={
              <span className="mr-auto rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600">
                {adminTasks.filter((t) => t.priority === "عاجل").length} عاجلة
              </span>
            }
          />
          <ul className="space-y-1.5">
            {adminTasks.map((t) => (
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
            icon={CheckCircle2}
            title="قرارات أخيرة"
            iconBg="bg-green-100"
            iconColor="text-green-600"
          />
          <ul className="space-y-1.5">
            {recentDecisions.map((d) => (
              <li
                key={d.title}
                className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2"
              >
                <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-asl-blue" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold leading-snug text-asl-navy">
                    {d.title}
                  </p>
                  <p className="text-[10px] text-slate-400">{d.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </ModulePanel>

        <ModulePanel className="h-full border border-amber-200/60 bg-amber-50/40">
          <PanelHeader
            icon={AlertTriangle}
            title="تنبيه إداري"
            iconBg="bg-amber-200/60"
            iconColor="text-amber-700"
          />
          <p className="text-xs leading-relaxed text-amber-900/80">
            3 رابطات لم تُحدّث وثائقها القانونية. يلزم المتابعة قبل نهاية الموسم.
          </p>
          <div className="mt-3 space-y-2 rounded-lg bg-white/60 p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">رابطات متأخرة</span>
              <span className="font-bold text-red-600">3</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">آخر موعد</span>
              <span className="font-bold text-asl-navy">31/08/2026</span>
            </div>
          </div>
          <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-asl-navy py-2 text-xs font-semibold text-white transition hover:bg-asl-navy-light"
          >
            <Shield className="h-3.5 w-3.5" />
            مراجعة الوثائق
          </button>
        </ModulePanel>
      </div>
    </div>
  );
}
