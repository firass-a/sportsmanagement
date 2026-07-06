"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { clubNavItems } from "@/lib/club/data";

export function MainMenuBar() {
  const { t } = useLanguage();
  const c = t.club;

  const menuItems = clubNavItems.filter(
    (item) => item.key !== "statistics" && item.key !== "dashboard",
  );

  return (
    <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
      <h3 className="mb-4 text-center text-sm font-bold text-asl-navy">
        {c.mainMenu}
      </h3>
      <div className="flex flex-wrap items-start justify-center gap-4 md:gap-6">
        {menuItems.map(({ key, icon: Icon, href }) => (
          <Link
            key={key}
            href={href}
            className="flex w-[72px] flex-col items-center gap-2 transition hover:opacity-80"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-asl-blue/15 ring-2 ring-asl-blue/25">
              <Icon className="h-6 w-6 text-asl-blue" strokeWidth={2.5} />
            </div>
            <span className="text-center text-[10px] font-semibold leading-tight text-asl-navy/80">
              {c.nav[key]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
