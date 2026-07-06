"use client";

import { useMemo, useState, type ComponentType } from "react";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Grid3X3,
  List,
  Plus,
  Search,
  Trophy,
  Volleyball,
  Waves,
} from "lucide-react";
import {
  SCHEDULE_HOUR_END,
  SCHEDULE_HOUR_START,
  scheduleCurrentHour,
  scheduleEvents,
  scheduleResources,
  type ScheduleEvent,
  type ScheduleResource,
} from "@/lib/club/modules/extended-mock-data";

const HOUR_WIDTH = 76;
const ROW_HEIGHT = 68;
const RESOURCE_WIDTH = 200;

const HOURS = Array.from(
  { length: SCHEDULE_HOUR_END - SCHEDULE_HOUR_START + 1 },
  (_, i) => SCHEDULE_HOUR_START + i,
);

const resourceIcons: Record<
  ScheduleResource["icon"],
  ComponentType<{ className?: string }>
> = {
  football: Volleyball,
  court: Grid3X3,
  martial: Dumbbell,
  pool: Waves,
  office: Building2,
};

function formatHour(h: number) {
  const hour = Math.floor(h);
  const mins = Math.round((h - hour) * 60);
  const period = hour >= 12 ? "م" : "ص";
  const display = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  if (mins === 0) return `${display} ${period}`;
  return `${display}:${mins.toString().padStart(2, "0")} ${period}`;
}

function formatHourLabel(h: number) {
  const period = h >= 12 ? "م" : "ص";
  const display = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${display} ${period}`;
}

function eventStyle(variant: ScheduleEvent["variant"], isLive: boolean) {
  if (variant === "festival") {
    return "border-violet-600 bg-violet-600 text-white shadow-sm";
  }
  if (variant === "meeting") {
    return "border-asl-blue/25 bg-asl-blue/5 text-asl-navy";
  }
  if (isLive || variant === "active") {
    return "border-emerald-500 bg-emerald-500 text-white shadow-md ring-2 ring-emerald-400/40";
  }
  return "border-slate-200 bg-slate-50 text-asl-navy hover:border-slate-300";
}

type ViewMode = "day" | "week" | "month";
type LayoutMode = "grid" | "list";

type ScheduleTimelineProps = {
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  className?: string;
};

export function ScheduleTimeline({
  title = "الجدول الزمني",
  subtitle = "كل نشاطات النادي في نظرة واحدة",
  showHeader = true,
  className = "",
}: ScheduleTimelineProps) {
  const [view, setView] = useState<ViewMode>("day");
  const [layout, setLayout] = useState<LayoutMode>("grid");
  const [search, setSearch] = useState("");
  const [resourceFilter, setResourceFilter] = useState("all");

  const timelineWidth = HOURS.length * HOUR_WIDTH;
  const nowLeft =
    ((scheduleCurrentHour - SCHEDULE_HOUR_START) /
      (SCHEDULE_HOUR_END - SCHEDULE_HOUR_START)) *
    timelineWidth;

  const filteredResources = useMemo(() => {
    if (resourceFilter === "all") return scheduleResources;
    return scheduleResources.filter((r) => r.id === resourceFilter);
  }, [resourceFilter]);

  const filteredEvents = useMemo(() => {
    const q = search.trim().toLowerCase();
    return scheduleEvents.filter((e) => {
      if (resourceFilter !== "all" && e.resourceId !== resourceFilter) return false;
      if (!q) return true;
      return (
        e.title.toLowerCase().includes(q) ||
        e.subtitle.toLowerCase().includes(q)
      );
    });
  }, [search, resourceFilter]);

  const eventsByResource = useMemo(() => {
    const map = new Map<string, ScheduleEvent[]>();
    for (const r of filteredResources) map.set(r.id, []);
    for (const e of filteredEvents) {
      const list = map.get(e.resourceId);
      if (list) list.push(e);
    }
    return map;
  }, [filteredResources, filteredEvents]);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {showHeader && (
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-asl-navy">{title}</h2>
            <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg border border-slate-200 p-0.5">
              <button
                type="button"
                onClick={() => setLayout("list")}
                className={`rounded-md p-2 transition ${
                  layout === "list"
                    ? "bg-asl-navy text-white"
                    : "text-slate-400 hover:text-asl-navy"
                }`}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setLayout("grid")}
                className={`rounded-md p-2 transition ${
                  layout === "grid"
                    ? "bg-asl-navy text-white"
                    : "text-slate-400 hover:text-asl-navy"
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg bg-asl-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-asl-navy-light"
            >
              <Plus className="h-4 w-4" />
              حجز جديد
            </button>
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 px-5 py-3">
        <div className="relative min-w-[180px] flex-1">
          <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="بحث في الجدول..."
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pe-3 ps-9 text-sm text-asl-navy outline-none focus:border-asl-orange/50 focus:ring-1 focus:ring-asl-orange/20"
          />
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-asl-navy transition hover:bg-slate-50"
          >
            اليوم
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-50"
            aria-label="Previous"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-50"
            aria-label="Next"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-[140px] text-center text-sm font-semibold text-asl-navy">
            3 – 9 يوليو 2026
          </span>
        </div>

        <div className="flex rounded-lg border border-slate-200 p-0.5">
          {(["day", "week", "month"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                view === v
                  ? "bg-asl-navy text-white"
                  : "text-slate-500 hover:text-asl-navy"
              }`}
            >
              {v === "day" ? "يوم" : v === "week" ? "أسبوع" : "شهر"}
            </button>
          ))}
        </div>
      </div>

      {layout === "list" ? (
        <ul className="divide-y divide-slate-100 p-4">
          {filteredEvents
            .sort((a, b) => a.startHour - b.startHour)
            .map((e) => {
              const resource = scheduleResources.find((r) => r.id === e.resourceId);
              const isLive =
                scheduleCurrentHour >= e.startHour &&
                scheduleCurrentHour < e.endHour;
              return (
                <li
                  key={e.id}
                  className="flex items-center gap-4 py-3"
                >
                  <span className="w-24 shrink-0 text-sm font-bold text-asl-orange">
                    {formatHour(e.startHour)} – {formatHour(e.endHour)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-asl-navy">{e.title}</p>
                    <p className="text-xs text-slate-500">
                      {e.subtitle} · {resource?.name}
                    </p>
                  </div>
                  {isLive && (
                    <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">
                      الآن
                    </span>
                  )}
                </li>
              );
            })}
        </ul>
      ) : (
        <div className="overflow-x-auto">
          <div className="flex min-w-max">
            {/* Resource labels — sticky on scroll */}
            <div
              className="sticky start-0 z-20 shrink-0 border-e border-slate-200 bg-white"
              style={{ width: RESOURCE_WIDTH }}
            >
              <div className="flex h-10 items-end border-b border-slate-200 px-3 pb-2">
                <select
                  value={resourceFilter}
                  onChange={(e) => setResourceFilter(e.target.value)}
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-asl-navy outline-none"
                >
                  <option value="all">كل المرافق</option>
                  {scheduleResources.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
              {filteredResources.map((resource) => {
                const Icon = resourceIcons[resource.icon];
                return (
                  <div
                    key={resource.id}
                    className="flex items-center gap-2.5 border-b border-slate-100 px-3"
                    style={{ height: ROW_HEIGHT }}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-asl-navy/5">
                      <Icon className="h-4 w-4 text-asl-navy" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-asl-navy">
                        {resource.name}
                      </p>
                      <p className="truncate text-[10px] text-slate-500">
                        {resource.sports}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timeline grid — LTR for time axis readability */}
            <div dir="ltr" className="relative shrink-0" style={{ width: timelineWidth }}>
              {/* Hour headers */}
              <div className="flex h-10 border-b border-slate-200">
                {HOURS.map((h) => (
                  <div
                    key={h}
                    className="shrink-0 border-e border-slate-100 px-1 pb-1 pt-2 text-center text-[11px] font-medium text-slate-400"
                    style={{ width: HOUR_WIDTH }}
                  >
                    {formatHourLabel(h)}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="relative border-b border-slate-100"
                  style={{ height: ROW_HEIGHT }}
                >
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex">
                    {HOURS.map((h) => (
                      <div
                        key={h}
                        className="shrink-0 border-e border-slate-100"
                        style={{ width: HOUR_WIDTH }}
                      />
                    ))}
                  </div>

                  {/* Events */}
                  {(eventsByResource.get(resource.id) ?? []).map((event) => {
                    const left =
                      ((event.startHour - SCHEDULE_HOUR_START) /
                        (SCHEDULE_HOUR_END - SCHEDULE_HOUR_START)) *
                      timelineWidth;
                    const width =
                      ((event.endHour - event.startHour) /
                        (SCHEDULE_HOUR_END - SCHEDULE_HOUR_START)) *
                      timelineWidth;
                    const isLive =
                      scheduleCurrentHour >= event.startHour &&
                      scheduleCurrentHour < event.endHour;

                    return (
                      <div
                        key={event.id}
                        className={`absolute top-1.5 flex min-w-[60px] flex-col justify-center rounded-lg border px-2 py-1 transition ${eventStyle(event.variant, isLive)}`}
                        style={{
                          left: left + 2,
                          width: Math.max(width - 4, 56),
                          height: ROW_HEIGHT - 12,
                        }}
                      >
                        {event.variant === "festival" ? (
                          <>
                            <div className="flex items-center gap-1">
                              <Trophy className="h-3 w-3 shrink-0" />
                              <p className="truncate text-[11px] font-bold leading-tight">
                                {event.title}
                              </p>
                            </div>
                            <p className="truncate text-[9px] opacity-80">
                              {formatHour(event.startHour)} – {formatHour(event.endHour)}
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="truncate text-[11px] font-bold leading-tight">
                              {event.title}
                            </p>
                            <p
                              className={`truncate text-[9px] leading-tight ${
                                isLive || event.variant === "active"
                                  ? "text-white/85"
                                  : "text-slate-500"
                              }`}
                            >
                              {event.subtitle}
                            </p>
                            <p
                              className={`truncate text-[9px] ${
                                isLive || event.variant === "active"
                                  ? "text-white/70"
                                  : "text-slate-400"
                              }`}
                            >
                              {formatHour(event.startHour)} – {formatHour(event.endHour)}
                            </p>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}

              {/* Current time indicator */}
              {scheduleCurrentHour >= SCHEDULE_HOUR_START &&
                scheduleCurrentHour <= SCHEDULE_HOUR_END && (
                  <div
                    className="pointer-events-none absolute bottom-0 top-10 z-10 w-0.5 bg-asl-orange"
                    style={{ left: nowLeft }}
                  >
                    <div className="absolute -start-1 top-0 h-2.5 w-2.5 rounded-full bg-asl-orange" />
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
