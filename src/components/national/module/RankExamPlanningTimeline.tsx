"use client";

import { useCallback, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Users } from "lucide-react";
import { StatusBadge } from "@/components/club/module/ModuleUI";

export type RankExamPlan = {
  name: string;
  sport: string;
  rank: string;
  date: string;
  registrationDeadline: string;
  venue: string;
  wilaya: string;
  registered: number;
  capacity: number;
  committeeHead: string;
  status: string;
  phase: string;
};

const TODAY = "2026-07-15";

const EXAM_PHASES = ["الإعلان", "التسجيل", "اللجنة", "الامتحان", "النتائج", "الشهادات"];

const FULL_PHASES = [
  "الإعلان",
  "التسجيل",
  "تشكيل اللجنة",
  "يوم الامتحان",
  "النتائج",
  "الشهادات",
];

function daysUntil(dateStr: string) {
  const diff = new Date(dateStr).getTime() - new Date(TODAY).getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function phaseIndex(phase: string) {
  const map: Record<string, number> = {
    الإعلان: 0,
    التسجيل: 1,
    "تشكيل اللجنة": 2,
    اللجنة: 2,
    "يوم الامتحان": 3,
    الامتحان: 3,
    النتائج: 4,
    الشهادات: 5,
  };
  return map[phase] ?? 0;
}

function formatShortDate(date: string) {
  const [, month, day] = date.split("-");
  return `${day}/${month}`;
}

function formatDisplayDate(date: string) {
  const [y, m, d] = date.split("-");
  return `${d}/${m}/${y}`;
}

type RankExamPlanningTimelineProps = {
  exams: RankExamPlan[];
  onOpenCalendar?: () => void;
  onViewAll?: () => void;
};

export function RankExamPlanningTimeline({
  exams,
  onOpenCalendar,
  onViewAll,
}: RankExamPlanningTimelineProps) {
  const sorted = useMemo(
    () => [...exams].sort((a, b) => a.date.localeCompare(b.date)),
    [exams],
  );

  const defaultIndex = useMemo(() => {
    const openIdx = sorted.findIndex(
      (e) => e.status === "التسجيل مفتوح" || e.status === "جاري",
    );
    if (openIdx >= 0) return openIdx;
    const upcomingIdx = sorted.findIndex((e) => daysUntil(e.date) >= 0 && e.status !== "منتهي");
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

  const regPct = Math.round((selected.registered / selected.capacity) * 100);
  const currentPhase = phaseIndex(selected.phase);
  const days = daysUntil(selected.date);
  const isOpen = selected.status === "التسجيل مفتوح";

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-2 text-base text-slate-600">
        <p>
          <span className="font-semibold text-asl-navy">{sorted.length}</span> امتحانات مبرمجة
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

      <div className="mx-auto flex w-full max-w-4xl items-center gap-4 px-2">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active <= 0}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-asl-blue/30 hover:text-asl-navy disabled:opacity-25"
          aria-label="السابق"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="relative min-w-0 flex-1 pb-14 pt-2">
          <div className="absolute inset-x-0 top-[13px] h-1 rounded-full bg-slate-200" />
          <div
            className="absolute start-0 top-[13px] h-1 rounded-full bg-asl-orange transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />

          <div className="relative flex justify-between gap-1">
            {sorted.map((exam, index) => {
              const isSelected = index === active;
              const isPast = daysUntil(exam.date) < 0 || exam.status === "منتهي";
              const isLive = exam.status === "التسجيل مفتوح";

              return (
                <button
                  key={exam.name}
                  type="button"
                  onClick={() => goTo(index)}
                  className="group flex min-w-0 flex-1 flex-col items-center px-0.5 sm:max-w-[100px]"
                >
                  <span
                    className={`relative z-10 block rounded-full border-[3px] transition-all ${
                      isSelected ? "h-6 w-6" : "h-5 w-5"
                    } ${
                      isSelected
                        ? isLive
                          ? "border-purple-500 bg-purple-500 shadow-md shadow-purple-200"
                          : "border-asl-orange bg-asl-orange shadow-md shadow-asl-orange/30"
                        : isPast
                          ? "border-slate-300 bg-slate-300"
                          : "border-slate-300 bg-white group-hover:border-asl-blue"
                    }`}
                  />
                  <span
                    className={`mt-3 block w-full text-center text-xs tabular-nums leading-none sm:text-sm ${
                      isSelected ? "font-bold text-asl-orange" : "font-medium text-slate-500"
                    }`}
                  >
                    {formatShortDate(exam.date)}
                  </span>
                  <span
                    className={`mt-1 line-clamp-2 w-full text-center text-[10px] leading-snug sm:text-xs ${
                      isSelected ? "font-semibold text-asl-navy" : "text-slate-600"
                    }`}
                    title={exam.sport}
                  >
                    {exam.sport}
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
        className="mx-auto w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-asl-orange">{selected.rank}</p>
            <h3 className="mt-1 text-lg font-bold leading-snug text-asl-navy md:text-xl">{selected.name}</h3>
            <p className="mt-1.5 text-sm text-slate-500">
              {isOpen
                ? "التسجيل مفتوح"
                : days > 0
                  ? `بعد ${days} يوم`
                  : days === 0
                    ? "اليوم"
                    : "منتهي"}
              {" · "}
              {formatDisplayDate(selected.date)}
            </p>
          </div>
          <StatusBadge status={selected.status} />
        </div>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-5 text-sm text-slate-600">
          <span className="font-medium text-asl-navy">{selected.sport}</span>
          <span className="text-slate-300">|</span>
          <span>{selected.wilaya}</span>
          <span className="text-slate-300">|</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0 text-asl-blue" />
            {selected.venue}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-lg bg-slate-50 px-4 py-3">
            <p className="text-slate-500">آخر تسجيل</p>
            <p className="mt-1 font-semibold text-asl-navy">{formatDisplayDate(selected.registrationDeadline)}</p>
          </div>
          <div className="rounded-lg bg-slate-50 px-4 py-3">
            <p className="text-slate-500">المرشحون</p>
            <p className="mt-1 inline-flex items-center gap-1 font-semibold text-asl-navy">
              <Users className="h-3.5 w-3.5 text-asl-orange" />
              {selected.registered}/{selected.capacity}
            </p>
          </div>
          <div className="col-span-2 rounded-lg bg-slate-50 px-4 py-3 sm:col-span-1">
            <p className="text-slate-500">رئيس اللجنة</p>
            <p className="mt-1 font-semibold text-asl-navy">{selected.committeeHead}</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex justify-between text-sm text-slate-600">
            <span>اكتمال التسجيل</span>
            <span className="font-bold text-asl-navy">{regPct}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                regPct >= 90 ? "bg-green-500" : regPct >= 60 ? "bg-asl-blue" : "bg-asl-orange"
              }`}
              style={{ width: `${regPct}%` }}
            />
          </div>
        </div>

        <div className="mt-5 border-t border-slate-100 pt-5">
          <p className="mb-3 text-sm font-medium text-slate-500">مراحل التخطيط</p>
          <div className="flex items-center justify-between gap-1">
            {EXAM_PHASES.map((label, phaseIdx) => {
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
                    className={`text-[10px] leading-tight sm:text-xs ${
                      current ? "font-bold text-asl-orange" : done ? "font-medium text-green-600" : "text-slate-400"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            المرحلة الحالية: <span className="font-semibold text-asl-navy">{FULL_PHASES[currentPhase]}</span>
          </p>
        </div>
      </article>

      {onViewAll && (
        <div className="text-center">
          <button
            type="button"
            onClick={onViewAll}
            className="text-base font-medium text-asl-blue hover:underline"
          >
            عرض كل الامتحانات
          </button>
        </div>
      )}
    </div>
  );
}
