"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { ModulePanel } from "@/components/club/module/ModuleUI";

export function ModuleDashboardShell({ children }: { children: ReactNode }) {
  return <div className="mt-5 space-y-5">{children}</div>;
}

export function PanelHeader({
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

export function TransferPath({ from, to }: { from: string; to: string }) {
  return (
    <div className="flex min-w-[220px] items-center gap-2" dir="rtl">
      <span className="max-w-[130px] truncate rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-medium text-slate-700">
        {from}
      </span>
      <span className="flex shrink-0 items-center rounded-full bg-asl-orange/15 p-1">
        <ArrowLeft className="h-4 w-4 animate-pulse text-asl-orange" strokeWidth={2.5} />
      </span>
      <span className="max-w-[130px] truncate rounded-lg bg-asl-orange/10 px-2.5 py-1.5 text-[11px] font-semibold text-asl-orange ring-1 ring-asl-orange/20">
        {to}
      </span>
    </div>
  );
}

export function HighlightCard({
  children,
  urgent = false,
  className = "",
}: {
  children: ReactNode;
  urgent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
        urgent
          ? "animate-highlight border-amber-200/80 bg-gradient-to-br from-amber-50/80 to-white"
          : "border-slate-100 bg-white hover:border-asl-orange/20"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function InfoPanel({
  icon,
  title,
  iconBg,
  iconColor,
  urgent = false,
  children,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  iconBg: string;
  iconColor: string;
  urgent?: boolean;
  children: ReactNode;
  className?: string;
}) {
  if (urgent) {
    return (
      <HighlightCard urgent className={`h-full ${className}`}>
        <PanelHeader icon={icon} title={title} iconBg={iconBg} iconColor={iconColor} />
        {children}
      </HighlightCard>
    );
  }
  return (
    <ModulePanel className={`h-full ${className}`}>
      <PanelHeader icon={icon} title={title} iconBg={iconBg} iconColor={iconColor} />
      {children}
    </ModulePanel>
  );
}

export function MiniList({ items }: { items: { label: string; value: string }[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2 text-[11px]"
        >
          <span className="min-w-0 truncate font-medium text-asl-navy">{item.label}</span>
          <span className="shrink-0 font-bold text-slate-600">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}

export function BottomPanels({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{children}</div>;
}

export function TaskList({
  tasks,
}: {
  tasks: { task: string; due: string; priority: string }[];
}) {
  return (
    <ul className="space-y-1.5">
      {tasks.map((t) => (
        <li
          key={t.task}
          className={`flex items-start justify-between gap-2 rounded-lg border px-3 py-2 transition hover:shadow-sm ${
            t.priority === "عاجل"
              ? "border-red-100 bg-red-50/50"
              : "border-slate-100 bg-white"
          }`}
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
  );
}
