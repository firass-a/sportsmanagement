import type { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  badge?: number;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  centered?: boolean;
};

export function DashboardCard({
  title,
  badge,
  action,
  children,
  className = "",
  centered = false,
}: DashboardCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm md:p-6 ${className}`}
    >
      <div className="mb-4 flex shrink-0 items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-asl-navy">{title}</h3>
          {badge !== undefined && (
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-bold text-white">
              {badge}
            </span>
          )}
        </div>
        {action}
      </div>
      <div
        className={`flex flex-1 flex-col ${centered ? "items-center justify-center" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
