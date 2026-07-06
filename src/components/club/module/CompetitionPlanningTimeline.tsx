"use client";

import { useCallback, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { StatusBadge } from "@/components/club/module/ModuleUI";

export type CompetitionPlan = {
  name: string;
  level: string;
  branch: string;
  date: string;
  registrationDeadline: string;
  venue: string;
  participants: number;
  roster: string;
  status: string;
  phase: string;
};

const TODAY = "2026-07-15";
const PLANNING_PHASES = ["التخطيط", "التسجيل", "القائمة", "المباريات", "التقرير"];

const FULL_PHASES = [
  "التخطيط",
  "التسجيل مفتوح",
  "تحضير القائمة",
  "مرحلة المباريات",
  "التقرير",
];

function daysUntil(dateStr: string) {
  const diff = new Date(dateStr).getTime() - new Date(TODAY).getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function phaseIndex(phase: string) {
  const idx = FULL_PHASES.indexOf(phase);
  return idx === -1 ? 0 : idx;
}

function rosterPercent(roster: string) {
  const match = roster.match(/(\d+)\/(\d+)/);
  if (!match) return null;
  return Math.round((Number(match[1]) / Number(match[2])) * 100);
}

function formatShortDate(date: string) {
  const [, month, day] = date.split("-");
  return `${day}/${month}`;
}

type CompetitionPlanningTimelineProps = {
  competitions: CompetitionPlan[];
  onOpenCalendar?: () => void;
  onViewAll?: () => void;
};

export function CompetitionPlanningTimeline({
  competitions,
  onOpenCalendar,
  onViewAll,
}: CompetitionPlanningTimelineProps) {
  const sorted = useMemo(
    () => [...competitions].sort((a, b) => a.date.localeCompare(b.date)),
    [competitions],
  );

  const defaultIndex = useMemo(() => {
    const activeIdx = sorted.findIndex((c) => c.status === "نشطة");
    if (activeIdx >= 0) return activeIdx;
    const upcomingIdx = sorted.findIndex((c) => daysUntil(c.date) >= 0);
    return upcomingIdx >= 0 ? upcomingIdx : 0;
  }, [sorted]);

  const [active, setActive] = useState(defaultIndex);

  const selected = sorted[active];
  const progressPct = sorted.length > 1 ? (active / (sorted.length - 1)) * 100 : 0;

  const goTo = useCallback(
    (index: number) => {
      setActive(Math.max(0, Math.min(sorted.length - 1, index)));
    },
    [sorted.length],
  );

  if (!selected) return null;

  const rosterPct = rosterPercent(selected.roster);
  const currentPhase = phaseIndex(selected.phase);
  const days = daysUntil(selected.date);
  const isLive = selected.status === "نشطة";

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-2 text-base text-slate-600">
        <p>
          <span className="font-semibold text-asl-navy">{sorted.length}</span> منافسات
          {onOpenCalendar && (
            <>
              {" · "}
              <button
                type="button"
                onClick={onOpenCalendar}
                className="font-medium text-asl-blue hover:underline"
              >
                التقويم
              </button>
            </>
          )}
        </p>
        <p className="text-sm tabular-nums text-slate-500">
          {active + 1} / {sorted.length}
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-3xl items-center gap-4 px-2">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active <= 0}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-asl-blue/30 hover:text-asl-navy disabled:opacity-25"
          aria-label="السابق"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="relative min-w-0 flex-1 pb-12 pt-2">
          <div className="absolute inset-x-0 top-[13px] h-1 rounded-full bg-slate-200" />
          <div
            className="absolute start-0 top-[13px] h-1 rounded-full bg-asl-orange transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />

          <div className="relative flex justify-between gap-2">
            {sorted.map((competition, index) => {
              const isSelected = index === active;
              const isPast = daysUntil(competition.date) < 0 && competition.status !== "نشطة";
              const isLiveNode = competition.status === "نشطة";

              return (
                <button
                  key={competition.name}
                  type="button"
                  onClick={() => goTo(index)}
                  className="group flex min-w-0 flex-1 flex-col items-center px-1 sm:max-w-[120px]"
                >
                  <span
                    className={`relative z-10 block rounded-full border-[3px] transition-all ${
                      isSelected ? "h-6 w-6" : "h-5 w-5"
                    } ${
                      isSelected
                        ? isLiveNode
                          ? "border-green-500 bg-green-500 shadow-md shadow-green-200"
                          : "border-asl-orange bg-asl-orange shadow-md shadow-asl-orange/30"
                        : isPast
                          ? "border-slate-300 bg-slate-300"
                          : "border-slate-300 bg-white group-hover:border-asl-blue"
                    }`}
                  />

                  <span
                    className={`mt-4 block w-full text-center text-sm tabular-nums leading-none ${
                      isSelected ? "font-bold text-asl-orange" : "font-medium text-slate-500"
                    }`}
                  >
                    {formatShortDate(competition.date)}
                  </span>

                  <span
                    className={`mt-1.5 line-clamp-2 w-full text-center text-sm leading-snug ${
                      isSelected ? "font-semibold text-asl-navy" : "text-slate-600"
                    }`}
                    title={competition.branch}
                  >
                    {competition.branch}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active >= sorted.length - 1}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-asl-blue/30 hover:text-asl-navy disabled:opacity-25"
          aria-label="التالي"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <article
        key={selected.name}
        className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg font-bold leading-snug text-asl-navy md:text-xl">{selected.name}</h3>
            <p className="mt-1.5 text-sm text-slate-500">
              {isLive
                ? "جارية الآن"
                : days > 0
                  ? `بعد ${days} يوم`
                  : days === 0
                    ? "اليوم"
                    : "منتهية"}
              {" · "}
              {selected.date}
            </p>
          </div>
          <StatusBadge status={selected.status} />
        </div>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-5 text-sm text-slate-600">
          <span className="font-medium text-asl-navy">{selected.level}</span>
          <span className="text-slate-300">|</span>
          <span>{selected.branch}</span>
          <span className="text-slate-300">|</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0 text-asl-blue" />
            {selected.venue}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-lg bg-slate-50 px-4 py-3">
            <p className="text-slate-500">آخر تسجيل</p>
            <p className="mt-1 font-semibold text-asl-navy">{selected.registrationDeadline}</p>
          </div>
          <div className="rounded-lg bg-slate-50 px-4 py-3">
            <p className="text-slate-500">القائمة</p>
            <p className="mt-1 font-semibold text-asl-navy">{selected.roster}</p>
          </div>
        </div>

        {rosterPct !== null && (
          <div className="mt-5">
            <div className="mb-2 flex justify-between text-sm text-slate-600">
              <span>اكتمال القائمة</span>
              <span className="font-bold text-asl-navy">{rosterPct}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-asl-blue transition-all duration-500"
                style={{ width: `${rosterPct}%` }}
              />
            </div>
          </div>
        )}

        <div className="mt-5 border-t border-slate-100 pt-5">
          <p className="mb-3 text-sm font-medium text-slate-500">مرحلة التخطيط</p>
          <div className="flex items-center justify-between gap-2">
            {PLANNING_PHASES.map((label, phaseIdx) => {
              const done = phaseIdx < currentPhase;
              const current = phaseIdx === currentPhase;
              return (
                <div key={label} className="flex flex-1 flex-col items-center gap-2">
                  <span
                    className={`h-2 w-full rounded-full ${
                      done ? "bg-green-400" : current ? "bg-asl-orange" : "bg-slate-200"
                    }`}
                  />
                  <span
                    className={`text-xs leading-tight ${
                      current ? "font-bold text-asl-orange" : done ? "font-medium text-green-600" : "text-slate-400"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </article>

      {onViewAll && (
        <div className="text-center">
          <button
            type="button"
            onClick={onViewAll}
            className="text-base font-medium text-asl-blue hover:underline"
          >
            عرض كل البطولات
          </button>
        </div>
      )}
    </div>
  );
}
