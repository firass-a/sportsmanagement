"use client";

import {
  Bell,
  Expand,
  Mail,
  Menu,
  Shield,
  UserCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type TopHeaderProps = {
  onMenuToggle?: () => void;
};

export function TopHeader({ onMenuToggle }: TopHeaderProps) {
  const { t } = useLanguage();
  const c = t.club;

  return (
    <header
      dir="ltr"
      className="relative z-20 flex h-14 shrink-0 items-center gap-3 border-b border-white/10 bg-asl-navy px-3 text-white md:px-5"
    >
      {/* Left — page title (next to sidebar) */}
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
        <h1 className="truncate text-sm font-semibold md:text-base">{c.title}</h1>
      </div>

      {/* Right — language, actions, user profile */}
      <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:gap-3">
        <LanguageSwitcher dark />

        <button
          type="button"
          className="hidden rounded-lg p-2 transition hover:bg-white/10 md:block"
          aria-label="Fullscreen"
        >
          <Expand className="h-5 w-5" />
        </button>

        <button
          type="button"
          className="relative rounded-lg p-2 transition hover:bg-white/10"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute end-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
            5
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
            <p className="text-xs font-semibold">{c.username}</p>
            <p className="text-[10px] text-white/60">{c.userCode}</p>
          </div>
          <UserCircle
            className="h-8 w-8 shrink-0 text-white/90 sm:h-9 sm:w-9"
            strokeWidth={1.25}
          />
        </div>
      </div>
    </header>
  );
}
