"use client";

import { Headphones, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 mt-auto bg-asl-navy py-4 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row md:gap-4">
        <div className="flex items-center gap-2 text-sm">
          <ShieldCheck className="h-5 w-5 shrink-0 text-asl-orange" strokeWidth={1.5} />
          <span>{t.platform.secure}</span>
        </div>

        <p className="text-center text-xs text-white/80 md:text-sm">
          {t.platform.copyright}
        </p>

        <div className="flex items-center gap-2 text-sm">
          <Headphones className="h-5 w-5 shrink-0 text-asl-orange" strokeWidth={1.5} />
          <span>{t.platform.support}</span>
        </div>
      </div>
    </footer>
  );
}
