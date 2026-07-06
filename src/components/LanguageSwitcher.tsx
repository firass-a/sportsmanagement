"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { locales, type Locale } from "@/lib/i18n/config";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe
        className={`h-4 w-4 ${dark ? "text-white/70" : "text-asl-navy/60"}`}
        aria-hidden
      />
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className={`max-w-[5.5rem] cursor-pointer rounded-lg border px-2 py-1.5 text-xs outline-none transition focus:ring-2 sm:max-w-none sm:px-3 sm:text-sm ${
          dark
            ? "border-white/20 bg-white/10 text-white hover:border-white/40 focus:border-asl-orange focus:ring-asl-orange/20"
            : "border-asl-navy/10 bg-white/80 text-asl-navy hover:border-asl-orange/40 focus:border-asl-orange focus:ring-asl-orange/20"
        }`}
        aria-label="Language"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {t.lang[l]}
          </option>
        ))}
      </select>
    </div>
  );
}
