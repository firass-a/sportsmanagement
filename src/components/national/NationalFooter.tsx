"use client";

import { Award, Building2, Network, Shield, Trophy, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { nationalFooterStats } from "@/lib/national/data";

const footerIcons = {
  federations: Shield,
  leagues: Network,
  clubs: Building2,
  sports: Trophy,
  ageGroups: Users,
  seasons: Award,
};

export function NationalFooter() {
  const { t } = useLanguage();
  const f = t.national.footer;

  return (
    <footer className="mt-5 rounded-2xl bg-[#0D1B3E] px-5 py-4 text-white">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {nationalFooterStats.map((item) => {
          const Icon = footerIcons[item.key];
          return (
            <div
              key={item.key}
              className="flex flex-col items-center gap-1.5 text-center"
            >
              <Icon className="h-6 w-6 text-asl-orange" strokeWidth={1.75} />
              <span className="text-xl font-bold leading-none">{item.value}</span>
              <span className="text-xs leading-snug text-white/75">
                {f[item.key]}
              </span>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
