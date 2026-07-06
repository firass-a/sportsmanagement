"use client";

import { Medal, Trophy } from "lucide-react";

export type PodiumPlacement = {
  rank: number;
  athlete: string;
  result: string;
};

export type EventPodium = {
  event: string;
  branch: string;
  date: string;
  placements: PodiumPlacement[];
};

const PODIUM_ORDER = [2, 1, 3] as const;

const SLOT_STYLE: Record<number, { bar: string; badge: string; label: string }> = {
  1: {
    bar: "bg-gradient-to-t from-amber-500 to-amber-300",
    badge: "bg-amber-100 text-amber-800 ring-amber-200",
    label: "🥇",
  },
  2: {
    bar: "bg-gradient-to-t from-slate-400 to-slate-200",
    badge: "bg-slate-100 text-slate-700 ring-slate-200",
    label: "🥈",
  },
  3: {
    bar: "bg-gradient-to-t from-orange-500 to-orange-300",
    badge: "bg-orange-100 text-orange-800 ring-orange-200",
    label: "🥉",
  },
};

const BAR_HEIGHT: Record<number, { default: string; compact: string }> = {
  1: { default: "h-[72px]", compact: "h-14" },
  2: { default: "h-[52px]", compact: "h-10" },
  3: { default: "h-[40px]", compact: "h-8" },
};

function PodiumSlot({
  rank,
  athlete,
  result,
  compact,
}: PodiumPlacement & { compact?: boolean }) {
  const style = SLOT_STYLE[rank];
  const height = compact ? BAR_HEIGHT[rank].compact : BAR_HEIGHT[rank].default;

  return (
    <div className={`flex flex-1 flex-col items-center ${compact ? "max-w-[96px]" : "max-w-[130px]"}`}>
      <div className={`mb-2 w-full text-center ${compact ? "min-h-[40px]" : "min-h-[48px]"}`}>
        <p className={`truncate font-semibold text-asl-navy ${compact ? "text-[11px]" : "text-xs"}`}>
          {athlete}
        </p>
        <span
          className={`mt-1 inline-block rounded-full px-1.5 py-0.5 text-[10px] font-bold ring-1 ${style.badge}`}
        >
          {result}
        </span>
      </div>
      <div
        className={`flex w-full flex-col items-center justify-start rounded-t-lg shadow-sm ${height} ${style.bar} pt-1.5`}
      >
        <span className="text-sm leading-none">{style.label}</span>
        <span className="mt-0.5 text-[10px] font-bold text-white/90">{rank}</span>
      </div>
    </div>
  );
}

function EmptySlot({ rank, compact }: { rank: number; compact?: boolean }) {
  const height = compact ? BAR_HEIGHT[rank].compact : BAR_HEIGHT[rank].default;
  return (
    <div className={`flex flex-1 flex-col items-center ${compact ? "max-w-[96px]" : "max-w-[130px]"}`}>
      <div className={`mb-2 w-full text-center ${compact ? "min-h-[40px]" : "min-h-[48px]"}`} />
      <div
        className={`flex w-full items-center justify-center rounded-t-lg border border-dashed border-slate-200 bg-slate-50 ${height} text-xs font-medium text-slate-300`}
      >
        {rank}
      </div>
    </div>
  );
}

export function EventPodiumCard({
  podium,
  compact,
}: {
  podium: EventPodium;
  compact?: boolean;
}) {
  const byRank = new Map(podium.placements.map((p) => [p.rank, p]));

  return (
    <article className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm md:p-4">
      <header className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-asl-orange/10">
          <Trophy className="h-3.5 w-3.5 text-asl-orange" strokeWidth={2.5} />
        </div>
        <div className="min-w-0">
          <h3 className={`truncate font-bold text-asl-navy ${compact ? "text-xs" : "text-sm"}`}>
            {podium.event}
          </h3>
          <p className="text-[10px] text-slate-500">
            {podium.branch} · {podium.date}
          </p>
        </div>
      </header>

      <div className={`flex items-end justify-center ${compact ? "gap-1.5" : "gap-3"}`}>
        {PODIUM_ORDER.map((rank) => {
          const placement = byRank.get(rank);
          if (placement) {
            return <PodiumSlot key={rank} {...placement} compact={compact} />;
          }
          return <EmptySlot key={rank} rank={rank} compact={compact} />;
        })}
      </div>
    </article>
  );
}

export function ChampionshipResultsPodium({
  podiums,
  compact,
}: {
  podiums: EventPodium[];
  compact?: boolean;
}) {
  return (
    <div className={`grid gap-3 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
      {podiums.map((podium) => (
        <EventPodiumCard key={podium.event} podium={podium} compact={compact} />
      ))}
    </div>
  );
}

export function MedalSummaryStrip() {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-3">
      {[
        { count: 6, label: "ذهبية", emoji: "🥇", cls: "bg-amber-50 text-amber-800 border-amber-100" },
        { count: 5, label: "فضية", emoji: "🥈", cls: "bg-slate-50 text-slate-700 border-slate-200" },
        { count: 4, label: "برونزية", emoji: "🥉", cls: "bg-orange-50 text-orange-800 border-orange-100" },
      ].map((m) => (
        <div
          key={m.label}
          className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${m.cls}`}
        >
          <Medal className="h-4 w-4 opacity-60" />
          <span className="text-lg font-bold">{m.count}</span>
          <span className="text-xs font-medium">
            {m.emoji} {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}
