"use client";

import { useMemo } from "react";
import { MapPin, User } from "lucide-react";
import { StatusBadge } from "@/components/club/module/ModuleUI";
import type { PlanningEvent } from "@/lib/club/modules/extended-mock-data";

type EventTimetableProps = {
  events: PlanningEvent[];
  title?: string;
  subtitle?: string;
  className?: string;
};

function formatDateHeader(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("ar-DZ", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function EventTimetable({
  events,
  title,
  subtitle,
  className = "",
}: EventTimetableProps) {
  const grouped = useMemo(() => {
    const sorted = [...events].sort(
      (a, b) =>
        a.date.localeCompare(b.date) || (a.time ?? "").localeCompare(b.time ?? ""),
    );
    const map = new Map<string, PlanningEvent[]>();
    for (const e of sorted) {
      const list = map.get(e.date) ?? [];
      list.push(e);
      map.set(e.date, list);
    }
    return [...map.entries()];
  }, [events]);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {(title || subtitle) && (
        <div className="border-b border-slate-100 px-5 py-4">
          {title && <h3 className="font-bold text-asl-navy">{title}</h3>}
          {subtitle && (
            <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
          )}
        </div>
      )}

      <div className="divide-y divide-slate-100">
        {grouped.map(([date, dayEvents]) => (
          <section key={date} className="p-4 sm:p-5">
            <h4 className="mb-3 text-sm font-bold text-asl-navy">
              {formatDateHeader(date)}
            </h4>
            <ul className="space-y-0">
              {dayEvents.map((event, i) => (
                <li key={event.id} className="relative flex gap-4 pb-4 last:pb-0">
                  {/* timeline rail */}
                  {i < dayEvents.length - 1 && (
                    <span
                      className="absolute start-[2.125rem] top-8 bottom-0 w-px bg-slate-200"
                      aria-hidden
                    />
                  )}
                  <span className="w-14 shrink-0 pt-1 text-sm font-bold text-asl-orange">
                    {event.time ?? "—"}
                  </span>
                  <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0 rounded-full bg-asl-orange ring-4 ring-asl-orange/20" />
                  <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="font-semibold text-asl-navy">{event.title}</p>
                      {event.status && <StatusBadge status={event.status} />}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                      {event.person && (
                        <span className="inline-flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {event.person}
                          {event.role && ` · ${event.role}`}
                        </span>
                      )}
                      {event.place && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.place}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {grouped.length === 0 && (
        <p className="py-12 text-center text-sm text-slate-400">
          لا توجد مهمات مجدولة
        </p>
      )}
    </div>
  );
}
