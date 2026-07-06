"use client";

import type { LucideIcon } from "lucide-react";
import { NationalEmblem } from "@/components/national/NationalEmblem";
import { useLanguage } from "@/contexts/LanguageContext";
import { nationalInfo } from "@/lib/national/modules/types";

type NationalModuleHeaderProps = {
  title: string;
  subtitle?: string;
  registration?: string;
  season?: string;
  wilaya?: string;
  status?: string;
  actions?: { label: string; icon: LucideIcon; primary?: boolean }[];
};

export function NationalModuleHeader({
  title,
  subtitle,
  registration = nationalInfo.registration,
  season = nationalInfo.season,
  wilaya = nationalInfo.wilaya,
  status = nationalInfo.status,
  actions = [],
}: NationalModuleHeaderProps) {
  const { dir } = useLanguage();

  return (
    <div
      dir={dir}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-l from-asl-navy via-asl-navy-light to-asl-navy shadow-sm"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(243,112,33,0.12),transparent_55%)]" />
      <div className="relative flex flex-col gap-4 p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex min-w-0 flex-1 items-start gap-3 md:gap-4">
            <NationalEmblem className="h-14 w-14 shrink-0 drop-shadow-md md:h-16 md:w-16" />
            <div className="min-w-0 flex-1">
              <h1 className="text-base font-bold leading-snug text-white sm:text-lg md:text-xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-1.5 text-xs leading-relaxed text-white/80 sm:text-sm">
                  {subtitle}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="w-fit rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90 sm:text-xs">
                  رقم الاعتماد: {registration}
                </span>
                <span className="w-fit rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90 sm:text-xs">
                  الموسم: {season}
                </span>
                <span className="w-fit rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90 sm:text-xs">
                  {wilaya}
                </span>
                <span className="w-fit rounded-lg bg-asl-orange/25 px-3 py-1.5 text-[11px] font-semibold text-asl-orange sm:text-xs">
                  {status}
                </span>
              </div>
            </div>
          </div>

          {actions.length > 0 && (
            <div className="flex shrink-0 flex-wrap items-center gap-2 lg:pt-1">
              {actions.map(({ label, icon: Icon, primary }) => (
                <button
                  key={label}
                  type="button"
                  dir={dir}
                  className={`inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                    primary
                      ? "bg-asl-orange text-white shadow-sm hover:bg-asl-orange-dark"
                      : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <span>{label}</span>
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
