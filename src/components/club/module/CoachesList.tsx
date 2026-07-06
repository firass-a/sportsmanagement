"use client";

import { useMemo, useState } from "react";
import { GraduationCap, Search } from "lucide-react";
import { StatusBadge } from "@/components/club/module/ModuleUI";

export type CoachRow = {
  name: string;
  number: string;
  card: string;
  branch: string;
  role: string;
  team: string;
  sportType: string;
  certificate: string;
  activation: string;
  attendance: string;
  status: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

export function CoachesList({
  coaches,
  selectedName,
  onSelect,
  showSearch = true,
}: {
  coaches: CoachRow[];
  selectedName?: string;
  onSelect?: (coach: CoachRow) => void;
  showSearch?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState("all");

  const branches = useMemo(
    () => [...new Set(coaches.map((c) => c.branch))],
    [coaches],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return coaches.filter((c) => {
      if (branch !== "all" && c.branch !== branch) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.branch.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.team.toLowerCase().includes(q)
      );
    });
  }, [coaches, query, branch]);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {showSearch && (
        <div className="flex flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="بحث بالاسم، الفرع أو الصفة..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pe-3 ps-9 text-sm outline-none focus:border-asl-orange/50 focus:ring-1 focus:ring-asl-orange/20"
            />
          </div>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-asl-navy outline-none"
          >
            <option value="all">كل الفروع</option>
            {branches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <span className="text-xs text-slate-500">{filtered.length} مدرب</span>
        </div>
      )}

      <ul className="divide-y divide-slate-100">
        {filtered.map((coach) => {
          const selected = selectedName === coach.name;
          return (
            <li key={coach.number}>
              <button
                type="button"
                onClick={() => onSelect?.(coach)}
                className={`flex w-full items-center gap-4 px-4 py-4 text-start transition hover:bg-slate-50 ${
                  selected ? "bg-asl-orange/5 ring-1 ring-inset ring-asl-orange/20" : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-asl-navy to-asl-navy-light text-sm font-bold text-white">
                  {initials(coach.name)}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-bold text-asl-navy">{coach.name}</p>
                    <span className="text-[10px] font-medium text-slate-400">
                      {coach.number}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-slate-600">
                    {coach.branch}
                    <span className="mx-1.5 text-slate-300">·</span>
                    {coach.role}
                    {coach.team !== "—" && (
                      <>
                        <span className="mx-1.5 text-slate-300">·</span>
                        {coach.team}
                      </>
                    )}
                  </p>
                </div>

                <div className="hidden shrink-0 flex-col items-end gap-1.5 sm:flex">
                  <StatusBadge status={coach.activation} />
                  <span className="text-xs text-slate-500">
                    حضور {coach.attendance}
                  </span>
                </div>

                <div className="shrink-0 sm:hidden">
                  <StatusBadge status={coach.status} />
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center gap-2 py-12 text-slate-500">
          <GraduationCap className="h-8 w-8 text-slate-300" />
          <p className="text-sm">لا يوجد مدربون مطابقون للبحث</p>
        </div>
      )}
    </div>
  );
}
