"use client";

import {
  Bike,
  CircleDot,
  Dumbbell,
  Footprints,
  MoreHorizontal,
  Swords,
  Table2,
  Trophy,
  Volleyball,
  Waves,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const sports = [
  { icon: CircleDot, label: "Football" },
  { icon: Trophy, label: "Basketball" },
  { icon: Volleyball, label: "Volleyball" },
  { icon: CircleDot, label: "Handball" },
  { icon: Waves, label: "Swimming" },
  { icon: Footprints, label: "Athletics" },
  { icon: Dumbbell, label: "Weightlifting" },
  { icon: Bike, label: "Cycling" },
  { icon: Table2, label: "Table Tennis" },
  { icon: Swords, label: "Karate" },
  { icon: CircleDot, label: "Tennis" },
  { icon: MoreHorizontal, label: "More" },
];

export function SportsIconBar() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="rounded-full bg-white px-5 py-4 shadow-md md:px-10 md:py-5">
        <div className="flex items-center justify-between gap-2 overflow-x-auto">
          {sports.map(({ icon: Icon, label }) => (
            <Icon
              key={label}
              className="h-6 w-6 shrink-0 text-asl-blue md:h-7 md:w-7"
              strokeWidth={2}
              aria-label={label}
            />
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-asl-navy/70 md:text-base">
        {t.platform.sportsCaption}
      </p>
    </div>
  );
}
