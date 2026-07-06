"use client";

import {
  ArrowLeftRight,
  Building2,
  Calendar,
  ClipboardList,
  FileText,
  Shield,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";

const statIcons = [
  Building2,
  Users,
  ClipboardList,
  ArrowLeftRight,
  Trophy,
  Calendar,
  Shield,
  FileText,
  UserCheck,
];

type Stat = { label: string; value: string | number };

type NationalAdminStatsProps = {
  title?: string;
  stats: Stat[];
  columns?: 4 | 6 | 7;
};

export function NationalAdminStats({
  title,
  stats,
  columns = 6,
}: NationalAdminStatsProps) {
  const colClass =
    columns === 7
      ? "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
      : columns === 6
        ? "sm:grid-cols-3 lg:grid-cols-6"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className="mt-4">
      {title ? (
        <h2 className="mb-3 text-sm font-bold text-asl-navy">{title}</h2>
      ) : null}
      <div className={`grid grid-cols-2 gap-4 ${colClass}`}>
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
    </div>
  );
}
