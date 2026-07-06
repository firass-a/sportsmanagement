"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import { nationalNavItems, type NationalNavKey } from "@/lib/national/data";
import { NationalEmblem } from "./NationalEmblem";

type SidebarProps = {
  activeNav?: NationalNavKey;
  collapsed?: boolean;
};

export function Sidebar({ activeNav = "dashboard", collapsed }: SidebarProps) {
  const { t } = useLanguage();
  const n = t.national;

  return (
    <aside
      className={`flex h-full shrink-0 flex-col bg-asl-navy-dark text-white transition-all ${
        collapsed ? "w-[72px]" : "w-[260px]"
      }`}
    >
      <div className="border-b border-white/10 px-4 py-5">
        <Logo size="sm" onDark />
        {!collapsed && (
          <p className="mt-2 text-center text-[11px] leading-relaxed text-white/70">
            {n.platformSubtitle}
          </p>
        )}
      </div>

      <div className="mx-3 mt-4 rounded-xl bg-asl-navy/80 p-3">
        <div className="flex items-start gap-3">
          <NationalEmblem className="h-12 w-12 shrink-0" />
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-snug">{n.userName}</p>
              <p className="mt-1 text-[10px] text-asl-orange">{n.userRole}</p>
              <p className="text-[10px] text-white/50">{n.season}</p>
            </div>
          )}
        </div>
      </div>

      <nav className="mt-3 flex-1 overflow-y-auto px-2 pb-4">
        <ul className="space-y-0.5">
          {nationalNavItems.map((item) => {
            const isActive = item.key === activeNav;
            const isHighlight = item.highlight;
            const Icon = item.icon;
            const label = n.nav[item.key];

            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-asl-orange font-semibold text-white"
                      : isHighlight
                        ? "text-asl-orange hover:bg-white/5"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                  title={collapsed ? label : undefined}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${
                      isActive ? "text-white" : "text-asl-orange"
                    }`}
                    strokeWidth={2.5}
                  />
                  {!collapsed && (
                    <>
                      <span className="min-w-0 flex-1 truncate leading-snug">
                        {label}
                      </span>
                      <ChevronDown className="h-3.5 w-3.5 shrink-0 rotate-[-90deg] opacity-40" />
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {!collapsed && (
        <div className="border-t border-white/10 px-4 py-3">
          <p className="text-center text-[10px] text-white/40">{n.sidebarFooter}</p>
        </div>
      )}
    </aside>
  );
}
