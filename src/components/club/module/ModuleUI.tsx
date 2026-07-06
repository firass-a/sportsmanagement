"use client";

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Archive,
  Award,
  BarChart3,
  Calendar,
  ClipboardList,
  FileText,
  QrCode,
  Shield,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";
import { ClubCrest } from "@/components/club/ClubCrest";
import { clubInfo } from "@/lib/club/modules/types";

const statIcons: LucideIcon[] = [
  Users,
  UserCheck,
  Calendar,
  ClipboardList,
  FileText,
  BarChart3,
  Shield,
  Trophy,
  Activity,
  Award,
];

type ModulePageHeaderProps = {
  title: string;
  subtitle?: string;
  actions?: { label: string; icon: LucideIcon; primary?: boolean }[];
};

export function ModulePageHeader({
  title,
  subtitle,
  actions = [],
}: ModulePageHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-l from-asl-navy via-asl-navy-light to-asl-navy shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(243,112,33,0.12),transparent_55%)]" />
      <div className="relative flex flex-col gap-4 p-4 md:flex-row md:items-start md:justify-between md:p-5">
        <div className="flex items-start gap-4">
          <ClubCrest className="h-16 w-14 shrink-0 drop-shadow-md md:h-20 md:w-[4.5rem]" />
          <div>
            <h1 className="text-lg font-bold text-white md:text-xl">{title}</h1>
            {subtitle && (
              <p className="mt-1 text-sm text-white/75">{subtitle}</p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90">
                رقم الاعتماد: {clubInfo.registration}
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90">
                {clubInfo.wilaya} – {clubInfo.commune}
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90">
                العهدة: {clubInfo.mandateStart} → {clubInfo.mandateEnd}
              </span>
              <span className="rounded-full bg-asl-orange/20 px-2.5 py-1 text-[11px] font-semibold text-asl-orange">
                {clubInfo.status}
              </span>
            </div>
          </div>
        </div>
        {actions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {actions.map(({ label, icon: Icon, primary }) => (
              <button
                key={label}
                type="button"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition md:text-sm ${
                  primary
                    ? "bg-asl-orange text-white shadow-sm hover:bg-asl-orange-dark"
                    : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={2.5} />
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ModuleStatGrid({
  stats,
}: {
  stats: { label: string; value: string | number }[];
}) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {stats.map((s, i) => {
        const color = i % 2 === 0 ? "orange" : "blue";
        const Icon = statIcons[i % statIcons.length];
        const iconBg =
          color === "orange"
            ? "bg-asl-orange/15 ring-asl-orange/20"
            : "bg-asl-blue/15 ring-asl-blue/20";
        const iconColor =
          color === "orange" ? "text-asl-orange" : "text-asl-blue";

        return (
          <div
            key={s.label}
            className="flex flex-col items-center rounded-xl bg-white px-4 py-5 shadow-sm"
          >
            <div
              className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ring-2 ${iconBg}`}
            >
              <Icon className={`h-7 w-7 ${iconColor}`} strokeWidth={2.5} />
            </div>
            <p className="text-3xl font-bold text-asl-navy">{s.value}</p>
            <p className="mt-1.5 text-center text-sm font-semibold leading-snug text-asl-navy/70">
              {s.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/** Slim horizontal KPI row — use on module dashboards instead of full stat grid */
export function ModuleCompactStatRow({
  stats,
}: {
  stats: { label: string; value: string | number; accent?: "orange" | "blue" | "warn" }[];
}) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
        >
          <p
            className={`text-2xl font-bold ${
              s.accent === "warn"
                ? "text-asl-orange"
                : s.accent === "blue"
                  ? "text-asl-blue"
                  : "text-asl-navy"
            }`}
          >
            {s.value}
          </p>
          <p className="mt-0.5 text-xs font-medium text-slate-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ModuleAlerts({
  alerts,
}: {
  alerts: { message: string; type: string }[];
}) {
  if (!alerts.length) return null;
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      {alerts.map((a, i) => (
        <div
          key={i}
          className={`flex flex-1 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium shadow-sm md:text-sm ${
            a.type === "warning"
              ? "bg-amber-50 text-amber-900"
              : a.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-asl-blue/10 text-asl-navy"
          }`}
        >
          <span
            className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
              a.type === "warning"
                ? "bg-asl-orange"
                : a.type === "success"
                  ? "bg-green-500"
                  : "bg-asl-blue"
            }`}
          />
          {a.message}
        </div>
      ))}
    </div>
  );
}

export function ModuleTabs({
  tabs,
  active,
  onChange,
}: {
  tabs: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="mt-5 flex gap-1 overflow-x-auto border-b border-slate-200 pb-px">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`shrink-0 border-b-2 px-4 py-2.5 text-xs font-semibold transition md:text-sm ${
            active === tab.id
              ? "border-asl-orange text-asl-orange"
              : "border-transparent text-asl-navy/65 hover:border-slate-300 hover:text-asl-navy"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function ModuleSection({
  title,
  icon: Icon,
  iconColor = "orange",
  children,
  className = "",
}: {
  title: string;
  icon?: LucideIcon;
  iconColor?: "orange" | "blue" | "red";
  children: React.ReactNode;
  className?: string;
}) {
  const colorClass =
    iconColor === "orange"
      ? "text-asl-orange"
      : iconColor === "red"
        ? "text-red-600"
        : "text-asl-blue";
  const ringClass =
    iconColor === "orange"
      ? "bg-asl-orange/15 ring-asl-orange/20"
      : iconColor === "red"
        ? "bg-red-100 ring-red-200"
        : "bg-asl-blue/15 ring-asl-blue/20";

  return (
    <section className={`mt-4 ${className}`}>
      <div className="mb-3 flex items-center gap-2">
        {Icon && (
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ring-2 ${ringClass}`}
          >
            <Icon className={`h-4 w-4 ${colorClass}`} strokeWidth={2.5} />
          </div>
        )}
        <h2 className="text-base font-bold text-asl-navy">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function ModulePanel({
  children,
  className = "",
  noPadding = false,
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) {
  return (
    <div
      className={`rounded-xl bg-white shadow-sm ${noPadding ? "" : "p-4"} ${className}`}
    >
      {children}
    </div>
  );
}

export function ModuleDataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  searchPlaceholder = "بحث...",
  title,
}: {
  columns: {
    key: string;
    label: string;
    render?: (row: T) => React.ReactNode;
  }[];
  rows: T[];
  searchPlaceholder?: string;
  title?: string;
}) {
  const showSearch = searchPlaceholder !== "";
  const showHeader = Boolean(title) || showSearch;

  return (
    <ModulePanel noPadding>
      {showHeader && (
        <div className="flex flex-col gap-3 border-b border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">
          {title && (
            <h3 className="text-sm font-bold text-asl-navy">{title}</h3>
          )}
          {showSearch && (
            <input
              type="search"
              placeholder={searchPlaceholder}
              className="w-full rounded-lg border border-gray-200 bg-asl-gray/50 px-3 py-2 text-sm outline-none transition focus:border-asl-orange focus:bg-white focus:ring-2 focus:ring-asl-orange/20 sm:max-w-xs"
            />
          )}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-asl-gray/60">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-start text-xs font-bold text-asl-navy/70"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-50 transition last:border-0 hover:bg-asl-gray/40"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-asl-navy">
                    {col.render
                      ? col.render(row)
                      : String(row[col.key] ?? "—")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModulePanel>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    نشط: "bg-green-100 text-green-700",
    نشطة: "bg-green-100 text-green-700",
    "تحتاج تحديثاً": "bg-amber-100 text-amber-700",
    مفعلة: "bg-green-100 text-green-700",
    "مفعلة لسنة 2026": "bg-green-100 text-green-700",
    "مفعلة 2026": "bg-green-100 text-green-700",
    "تحتاج وثائق": "bg-red-100 text-red-700",
    معتمد: "bg-asl-blue/15 text-asl-blue",
    معتمدة: "bg-green-100 text-green-700",
    قادم: "bg-purple-100 text-purple-700",
    جاري: "bg-green-100 text-green-700",
    "التسجيل مفتوح": "bg-blue-100 text-blue-700",
    منتهي: "bg-slate-100 text-slate-600",
    مصادق: "bg-green-100 text-green-700",
    مكتمل: "bg-green-100 text-green-700",
    مكتملة: "bg-green-100 text-green-700",
    "قيد التنفيذ": "bg-amber-100 text-amber-700",
    "قيد التصويت": "bg-amber-100 text-amber-700",
    "تحضير القائمة": "bg-asl-blue/15 text-asl-blue",
    "مرحلة المباريات": "bg-green-100 text-green-700",
    التخطيط: "bg-slate-100 text-slate-600",
    "في انتظار التفعيل": "bg-asl-orange/15 text-asl-orange-dark",
    "ناقصة وثائق": "bg-red-100 text-red-700",
    "ينقص وثائق": "bg-red-100 text-red-700",
    "قيد المراجعة": "bg-orange-100 text-orange-700",
    "في الانتظار": "bg-blue-100 text-blue-700",
    قادمة: "bg-purple-100 text-purple-700",
    قائمة: "bg-purple-100 text-purple-700",
    جارية: "bg-green-100 text-green-700",
    موقوف: "bg-gray-100 text-gray-600",
    منجز: "bg-green-100 text-green-700",
    مبرمج: "bg-asl-blue/15 text-asl-blue",
    مؤكدة: "bg-green-100 text-green-700",
    مبرمجة: "bg-asl-blue/15 text-asl-blue",
    مقبول: "bg-green-100 text-green-700",
    مرفوض: "bg-red-100 text-red-700",
    "غير مكتمل": "bg-red-100 text-red-700",
    "تمت القرعة": "bg-green-100 text-green-700",
    "لم تُجرَ بعد": "bg-slate-100 text-slate-600",
    "لم يُرفع": "bg-red-100 text-red-700",
    مرسل: "bg-slate-100 text-slate-600",
    عالية: "bg-red-100 text-red-700",
    متوسطة: "bg-amber-100 text-amber-700",
    منشور: "bg-green-100 text-green-700",
    مجدول: "bg-asl-blue/15 text-asl-blue",
    "الدعوات مرسلة": "bg-purple-100 text-purple-700",
    "في انتظار تأكيدات": "bg-amber-100 text-amber-700",
    "في انتظار المحضر": "bg-orange-100 text-orange-700",
    منتهٍ: "bg-slate-100 text-slate-600",
    مؤجل: "bg-amber-100 text-amber-700",
    ملغى: "bg-red-100 text-red-700",
    مؤرشف: "bg-gray-100 text-gray-600",
    جديد: "bg-asl-blue/15 text-asl-blue",
    "يحتاج متابعة": "bg-amber-100 text-amber-700",
    متأخر: "bg-red-100 text-red-700",
    عادي: "bg-slate-100 text-slate-600",
    مهم: "bg-amber-100 text-amber-700",
    عاجل: "bg-red-100 text-red-700",
  };
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${colors[status] ?? "bg-gray-100 text-gray-700"}`}
    >
      {status}
    </span>
  );
}

export function BranchCards({
  items,
  variant = "team",
  layout = "grid",
}: {
  items: {
    name: string;
    teams?: number;
    athletes: number;
    coaches: number;
    upcoming: number;
    status: string;
    type: string;
  }[];
  variant?: "team" | "individual";
  layout?: "grid" | "list";
}) {
  const accent = variant === "team" ? "orange" : "blue";
  const accentBar = accent === "orange" ? "bg-asl-orange" : "bg-asl-blue";
  const iconBg =
    accent === "orange"
      ? "bg-asl-orange/15 ring-asl-orange/20"
      : "bg-asl-blue/15 ring-asl-blue/20";
  const iconColor =
    accent === "orange" ? "text-asl-orange" : "text-asl-blue";
  const btnClass =
    accent === "orange"
      ? "bg-asl-orange hover:bg-asl-orange-dark"
      : "bg-asl-blue hover:bg-asl-blue-light";
  const Icon = variant === "team" ? Users : Trophy;
  const showTeams = variant === "team";

  if (layout === "list") {
    return (
      <div className="flex flex-col gap-2">
        {items.map((b) => (
          <div
            key={b.name}
            className="flex items-center gap-3 rounded-xl bg-asl-gray/40 p-3 transition hover:bg-asl-gray/70"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-2 ${iconBg}`}
            >
              <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={2.5} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-bold text-asl-navy">{b.name}</h3>
                <StatusBadge status={b.status} />
              </div>
              <p className="mt-0.5 text-xs text-asl-navy/60">
                {showTeams && `${b.teams ?? 0} فرق · `}
                {b.athletes} رياضي · {b.coaches} مدرب ·{" "}
                <span className="font-semibold text-asl-orange">
                  {b.upcoming} منافسة
                </span>
              </p>
            </div>
            <button
              type="button"
              className={`shrink-0 rounded-lg px-3 py-2 text-xs font-semibold text-white transition ${btnClass}`}
            >
              الدخول
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((b) => (
        <div
          key={b.name}
          className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
        >
          <div className={`h-1 ${accentBar}`} />
          <div className="p-4">
            <div className="mb-4 flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-2 ${iconBg}`}
                >
                  <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-asl-navy">{b.name}</h3>
                  <p className="text-[11px] text-asl-navy/50">
                    {variant === "team" ? "رياضة جماعية" : "رياضة فردية"}
                  </p>
                </div>
              </div>
              <StatusBadge status={b.status} />
            </div>
            <div
              className={`grid gap-2 ${showTeams ? "grid-cols-4" : "grid-cols-3"}`}
            >
              {showTeams && (
                <div className="rounded-lg bg-asl-gray/70 px-2 py-2.5 text-center">
                  <p className="text-lg font-bold text-asl-navy">
                    {b.teams ?? 0}
                  </p>
                  <span className="text-[10px] font-semibold text-asl-navy/50">
                    فرق
                  </span>
                </div>
              )}
              <div className="rounded-lg bg-asl-gray/70 px-2 py-2.5 text-center">
                <p className="text-lg font-bold text-asl-navy">{b.athletes}</p>
                <span className="text-[10px] font-semibold text-asl-navy/50">
                  رياضيون
                </span>
              </div>
              <div className="rounded-lg bg-asl-gray/70 px-2 py-2.5 text-center">
                <p className="text-lg font-bold text-asl-navy">{b.coaches}</p>
                <span className="text-[10px] font-semibold text-asl-navy/50">
                  مدربون
                </span>
              </div>
              <div className="rounded-lg bg-asl-gray/70 px-2 py-2.5 text-center">
                <p className="text-lg font-bold text-asl-orange">
                  {b.upcoming}
                </p>
                <span className="text-[10px] font-semibold text-asl-navy/50">
                  قادمة
                </span>
              </div>
            </div>
            <button
              type="button"
              className={`mt-4 w-full rounded-lg py-2.5 text-xs font-semibold text-white transition ${btnClass}`}
            >
              الدخول إلى الفرع
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function BranchPanel({
  title,
  count,
  items,
  variant,
  icon: PanelIcon,
  iconColor = "orange",
}: {
  title: string;
  count: number;
  items: {
    name: string;
    teams?: number;
    athletes: number;
    coaches: number;
    upcoming: number;
    status: string;
    type: string;
  }[];
  variant: "team" | "individual";
  icon: LucideIcon;
  iconColor?: "orange" | "blue";
}) {
  const colorClass =
    iconColor === "orange" ? "text-asl-orange" : "text-asl-blue";
  const ringClass =
    iconColor === "orange"
      ? "bg-asl-orange/15 ring-asl-orange/20"
      : "bg-asl-blue/15 ring-asl-blue/20";
  const badgeClass =
    iconColor === "orange"
      ? "bg-asl-orange/15 text-asl-orange"
      : "bg-asl-blue/15 text-asl-blue";

  return (
    <ModulePanel className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full ring-2 ${ringClass}`}
          >
            <PanelIcon className={`h-4 w-4 ${colorClass}`} strokeWidth={2.5} />
          </div>
          <h3 className="text-sm font-bold text-asl-navy">{title}</h3>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-bold ${badgeClass}`}
        >
          {count}
        </span>
      </div>
      <BranchCards items={items} variant={variant} layout="list" />
    </ModulePanel>
  );
}

export function ModuleListCard({
  items,
}: {
  items: {
    title: string;
    subtitle?: string;
    meta?: string;
    badge?: string;
    icon?: LucideIcon;
  }[];
}) {
  return (
    <ModulePanel>
      <div className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon ?? Calendar;
          return (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-xl bg-asl-gray/50 p-4 transition hover:bg-asl-gray/80"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-asl-blue/15 ring-2 ring-asl-blue/20">
                <Icon className="h-5 w-5 text-asl-blue" strokeWidth={2.5} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-asl-navy">{item.title}</p>
                {item.subtitle && (
                  <p className="mt-0.5 text-xs text-asl-navy/60">
                    {item.subtitle}
                  </p>
                )}
                {item.meta && (
                  <p className="mt-1 text-[11px] font-medium text-asl-navy/50">
                    {item.meta}
                  </p>
                )}
              </div>
              {item.badge && (
                <span className="shrink-0 rounded-lg bg-asl-orange/15 px-2.5 py-1 text-xs font-bold text-asl-orange">
                  {item.badge}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </ModulePanel>
  );
}

export function ModuleEmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
}) {
  return (
    <ModulePanel className="py-10 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-asl-gray ring-2 ring-asl-navy/10">
        <Icon className="h-8 w-8 text-asl-navy/30" strokeWidth={2} />
      </div>
      <p className="text-base font-bold text-asl-navy">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-asl-navy/60">
        {description}
      </p>
      {actionLabel && (
        <button
          type="button"
          className="mt-5 rounded-lg bg-asl-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-asl-orange-dark"
        >
          {actionLabel}
        </button>
      )}
    </ModulePanel>
  );
}

export function ModuleDigitalCard({
  name,
  branch,
  category,
  cardNumber,
  activation,
}: {
  name: string;
  branch: string;
  category: string;
  cardNumber: string;
  activation: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-asl-navy via-asl-navy-light to-asl-navy shadow-md">
      <div className="relative p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(243,112,33,0.2),transparent_50%)]" />
        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-white/60">
              ASL SPORTS
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <QrCode className="h-5 w-5 text-white/80" />
            </div>
          </div>
          <p className="text-lg font-bold text-white">{name}</p>
          <p className="mt-1 text-sm text-white/75">
            {branch} · {category}
          </p>
          <p className="mt-3 font-mono text-sm font-bold text-asl-orange">
            {cardNumber}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <StatusBadge status={activation} />
            <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/70">
              2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ModuleSplitGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-2">{children}</div>
  );
}
