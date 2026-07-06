"use client";

import {
  Bell,
  Mail,
  Menu,
  Search,
  Shield,
  UserCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { NationalEmblem } from "./NationalEmblem";

type TopHeaderProps = {
  onMenuToggle?: () => void;
};

export function TopHeader({ onMenuToggle }: TopHeaderProps) {
  const { t } = useLanguage();
  const n = t.national;

  return (
    <header
      dir="ltr"
      className="relative z-20 flex h-14 shrink-0 items-center gap-3 border-b border-white/10 bg-asl-navy px-3 text-white md:px-5"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-3">
        <button
          type="button"
          onClick={onMenuToggle}
          className="shrink-0 rounded-lg p-2 transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Shield
          className="hidden h-5 w-5 shrink-0 text-asl-orange sm:block"
          strokeWidth={1.75}
        />
        <h1 className="truncate text-sm font-semibold md:text-base">{n.title}</h1>
      </div>

      <div className="hidden max-w-xs flex-1 md:flex">
        <div className="relative w-full">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            type="search"
            placeholder={n.searchPlaceholder}
            className="w-full rounded-lg border border-white/10 bg-white/10 py-2 ps-9 pe-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-asl-orange/50"
          />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:gap-3">
        <LanguageSwitcher dark />

        <button
          type="button"
          className="relative rounded-lg p-2 transition hover:bg-white/10"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute end-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
            7
          </span>
        </button>

        <button
          type="button"
          className="relative hidden rounded-lg p-2 transition hover:bg-white/10 sm:block"
          aria-label="Messages"
        >
          <Mail className="h-5 w-5" />
          <span className="absolute end-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-asl-orange text-[10px] font-bold">
            3
          </span>
        </button>

        <div className="ms-1 flex items-center gap-2 border-s border-white/20 ps-2 sm:ms-2 sm:gap-2.5 sm:ps-3 md:ps-4">
          <div className="hidden text-end leading-tight md:block">
            <p className="text-xs font-semibold">{n.userName}</p>
            <p className="text-[10px] text-white/60">{n.userRole}</p>
          </div>
          <NationalEmblem className="h-8 w-8 sm:h-9 sm:w-9" />
        </div>
      </div>
    </header>
  );
}
