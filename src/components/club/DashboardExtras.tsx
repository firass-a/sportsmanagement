"use client";

import Link from "next/link";
import {
  Bot,
  Calendar,
  CheckSquare,
  CreditCard,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { ScheduleTimeline } from "@/components/club/ScheduleTimeline";
import {
  ModuleSection,
  StatusBadge,
} from "@/components/club/module/ModuleUI";
import {
  dashboardAiInsights,
  dashboardTasks,
  digitalCardsStats,
} from "@/lib/club/modules/extended-mock-data";

const quickActions = [
  {
    label: "تفعيل بطاقة",
    href: "/club/digital-cards",
    icon: CreditCard,
    iconBg: "bg-asl-orange/15 ring-asl-orange/25",
    iconColor: "text-asl-orange",
    bar: "bg-asl-orange",
  },
  {
    label: "حصة تدريب",
    href: "/club/trainings",
    icon: Calendar,
    iconBg: "bg-asl-blue/15 ring-asl-blue/25",
    iconColor: "text-asl-blue",
    bar: "bg-asl-blue",
  },
  {
    label: "تقرير أدبي",
    href: "/club/literary-report",
    icon: Sparkles,
    iconBg: "bg-purple-100 ring-purple-200",
    iconColor: "text-purple-600",
    bar: "bg-purple-500",
  },
  {
    label: "بطولة",
    href: "/club/championships",
    icon: Trophy,
    iconBg: "bg-emerald-100 ring-emerald-200",
    iconColor: "text-emerald-600",
    bar: "bg-emerald-500",
  },
];

export function DashboardExtras() {
  return (
    <div className="mt-5 space-y-5">
      <ScheduleTimeline
        title="جدول اليوم"
        subtitle="كل نشاطات النادي في نظرة واحدة"
      />

      <ModuleSection title="تفعيل البطاقات 2026" icon={CreditCard} iconColor="orange">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {digitalCardsStats.slice(0, 4).map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4"
            >
              <p className="text-xs text-slate-500">{s.label}</p>
              <p className="mt-1 text-xl font-bold text-asl-navy">{s.value}</p>
            </div>
          ))}
        </div>
        <Link
          href="/club/digital-cards"
          className="mt-3 inline-flex text-sm font-medium text-asl-orange hover:underline"
        >
          إدارة البطاقات ←
        </Link>
      </ModuleSection>

      <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
        <ModuleSection title="إجراءات سريعة" icon={Zap} iconColor="orange" className="!mt-0 flex flex-col">
          <div className="grid flex-1 grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group relative flex min-h-[120px] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <span className={`absolute inset-x-0 top-0 h-1 ${action.bar}`} />
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ring-2 ${action.iconBg}`}
                >
                  <action.icon
                    className={`h-7 w-7 ${action.iconColor}`}
                    strokeWidth={2.5}
                  />
                </div>
                <span className="text-center text-sm font-bold text-asl-navy">
                  {action.label}
                </span>
              </Link>
            ))}
          </div>
        </ModuleSection>

        <ModuleSection
          title="المهام العاجلة"
          icon={CheckSquare}
          iconColor="red"
          className="!mt-0 flex flex-col"
        >
          <ul className="flex flex-1 flex-col gap-2">
            {dashboardTasks.map((task) => {
              const urgent = task.priority === "عالية";
              return (
                <li
                  key={task.task}
                  className={`flex items-start justify-between gap-3 rounded-xl border px-4 py-3 transition ${
                    urgent
                      ? "border-red-200 bg-red-50/90 shadow-sm"
                      : "border-amber-100 bg-amber-50/50"
                  }`}
                >
                  <div className="min-w-0">
                    <p
                      className={`text-sm font-bold ${urgent ? "text-red-900" : "text-asl-navy"}`}
                    >
                      {task.task}
                    </p>
                    <p className={`mt-0.5 text-xs ${urgent ? "text-red-600/80" : "text-slate-500"}`}>
                      موعد: {task.due}
                    </p>
                  </div>
                  <StatusBadge status={task.priority} />
                </li>
              );
            })}
          </ul>
        </ModuleSection>
      </div>

      <ModuleSection title="رؤى ذكية" icon={Bot} iconColor="blue">
        <ul className="grid gap-3 sm:grid-cols-2">
          {dashboardAiInsights.map((insight) => (
            <li
              key={insight}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-asl-orange/15">
                <Sparkles className="h-4 w-4 text-asl-orange" strokeWidth={2.5} />
              </div>
              <p className="text-sm font-medium leading-relaxed text-asl-navy">{insight}</p>
            </li>
          ))}
        </ul>
      </ModuleSection>
    </div>
  );
}
