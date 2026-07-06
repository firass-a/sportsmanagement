"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeftRight,
  Award,
  Calendar,
  Camera,
  CheckCircle2,
  Gavel,
  GraduationCap,
  IdCard,
  Info,
  Settings,
  Trophy,
  Zap,
} from "lucide-react";
import {
  DistributionDonutChart,
  SeasonTrendLineChart,
} from "@/components/charts/ChartStyles";
import { AlgeriaActivityMap } from "@/components/national/AlgeriaActivityMap";
import { DashboardCard } from "@/components/national/DashboardCard";
import {
  dashboardAlerts,
  latestRequests,
  latestTournaments,
} from "@/lib/national/modules/mock-data";
import { licenseDistribution, seasonTrendData } from "@/lib/national/data";

const alertIcons = {
  warn: { icon: AlertTriangle, bg: "bg-orange-100", color: "text-orange-600" },
  calendar: { icon: Calendar, bg: "bg-blue-100", color: "text-blue-600" },
  info: { icon: Info, bg: "bg-sky-100", color: "text-sky-600" },
  success: { icon: CheckCircle2, bg: "bg-green-100", color: "text-green-600" },
  gavel: { icon: Gavel, bg: "bg-purple-100", color: "text-purple-600" },
  error: { icon: AlertTriangle, bg: "bg-red-100", color: "text-red-600" },
};

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    جارية: "bg-green-100 text-green-700",
    قائمة: "bg-purple-100 text-purple-700",
    قادمة: "bg-purple-100 text-purple-700",
    منتهية: "bg-slate-100 text-slate-600",
    "قيد المراجعة": "bg-orange-100 text-orange-700",
    "في الانتظار": "bg-blue-100 text-blue-700",
    "ينقص وثائق": "bg-slate-100 text-slate-600",
    مقبول: "bg-green-100 text-green-700",
    معلق: "bg-blue-100 text-blue-700",
  };
  return (
    <span
      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${styles[status] ?? "bg-slate-100 text-slate-600"}`}
    >
      {status}
    </span>
  );
}

const shortcuts = [
  { label: "إصدار إجازة", href: "/national/licenses", icon: IdCard, color: "bg-blue-500" },
  { label: "طلب تحويل", href: "/national/transfers", icon: ArrowLeftRight, color: "bg-green-500" },
  { label: "إنشاء بطولة", href: "/national/tournaments", icon: Trophy, color: "bg-orange-500" },
  { label: "الفريق الوطني", href: "/national/national-team", icon: Award, color: "bg-purple-500" },
  { label: "إنشاء تربص", href: "/national/training-camps", icon: GraduationCap, color: "bg-teal-500" },
  { label: "امتحان رتبة", href: "/national/rank-exams", icon: Award, color: "bg-amber-500" },
  { label: "ألبوم صور", href: "/national/album", icon: Camera, color: "bg-pink-500" },
  { label: "إحصائيات", href: "/national/statistics", icon: Zap, color: "bg-indigo-500" },
  { label: "الإعدادات", href: "/national/settings", icon: Settings, color: "bg-slate-600" },
];

export function DashboardWidgets() {
  return (
    <div className="mt-5 space-y-5">
      <div className="grid items-stretch gap-5 lg:grid-cols-12">
        <DashboardCard
          title="إحصائيات عامة للموسم / 2027"
          className="lg:col-span-5"
          centered
        >
          <div className="w-full">
            <SeasonTrendLineChart data={seasonTrendData} height={260} />
          </div>
        </DashboardCard>

        <DashboardCard
          title="توزيع الإجازات حسب النوع"
          className="lg:col-span-4"
          centered
        >
          <DistributionDonutChart
            data={licenseDistribution}
            total="45,782"
            totalLabel="إجمالي"
            height={210}
            centered
          />
        </DashboardCard>

        <DashboardCard
          title="التنبيهات والمهام"
          badge={5}
          className="lg:col-span-3"
        >
          <ul className="flex w-full flex-1 flex-col justify-center space-y-3">
            {dashboardAlerts.map((alert) => {
              const cfg = alertIcons[alert.type as keyof typeof alertIcons] ?? alertIcons.info;
              const Icon = cfg.icon;
              return (
                <li key={alert.message} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${cfg.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${cfg.color}`} strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-snug text-asl-navy">{alert.message}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{alert.date}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link
            href="/national/settings"
            className="mt-4 block w-full text-center text-sm font-semibold text-asl-blue hover:underline"
          >
            عرض جميع التنبيهات
          </Link>
        </DashboardCard>
      </div>

      <div className="grid items-stretch gap-5 lg:grid-cols-12">
        <DashboardCard
          title="نشاط الرابطات"
          className="min-h-[320px] lg:col-span-3"
          centered
        >
          <AlgeriaActivityMap />
        </DashboardCard>

        <DashboardCard
          title="أحدث البطولات"
          className="min-h-[320px] lg:col-span-3"
        >
          <ul className="flex w-full flex-1 flex-col justify-center space-y-4">
            {latestTournaments.map((t) => (
              <li key={t.name} className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-asl-orange/10">
                  <Trophy className="h-6 w-6 text-asl-orange" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug text-asl-navy">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {"category" in t
                      ? String(t.category)
                      : String((t as { level?: string }).level ?? "")}
                  </p>
                </div>
                <StatusPill status={t.status} />
              </li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard
          title="أحدث الطلبات"
          className="min-h-[320px] lg:col-span-3"
        >
          <ul className="flex w-full flex-1 flex-col justify-center space-y-4">
            {latestRequests.map((req) => (
              <li key={req.name} className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-asl-navy/10 text-sm font-bold text-asl-navy">
                  {"initials" in req
                    ? String(req.initials)
                    : req.name.slice(0, 2)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-asl-navy">
                    {req.type}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    {"role" in req
                      ? String(req.role)
                      : String((req as { club?: string }).club ?? "")}
                  </p>
                </div>
                <StatusPill status={req.status} />
              </li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard
          title="اختصارات سريعة"
          className="min-h-[320px] lg:col-span-3"
          centered
        >
          <div className="grid w-full grid-cols-3 gap-3">
            {shortcuts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 p-3 transition hover:border-asl-orange/30 hover:bg-white hover:shadow-md"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md ${item.color}`}
                >
                  <item.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <span className="text-center text-xs font-semibold leading-tight text-asl-navy">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}
