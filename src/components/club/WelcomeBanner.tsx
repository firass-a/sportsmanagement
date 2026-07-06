"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ClubCrest } from "./ClubCrest";

const BANNER_IMAGE = "/images/banner-header.jpg";

export function WelcomeBanner() {
  const { t } = useLanguage();
  const c = t.club;

  return (
    <div
      className="relative min-h-[190px] overflow-hidden rounded-2xl bg-cover shadow-sm md:min-h-[210px]"
      style={{
        backgroundImage: `url('${BANNER_IMAGE}')`,
        backgroundPosition: "center 45%",
      }}
    >
      {/* Overlay for text readability — darker on the right (RTL text side) */}
      <div className="absolute inset-0 bg-gradient-to-l from-asl-navy/85 via-asl-navy/45 to-transparent" />

      <div className="relative flex h-full min-h-[190px] items-center px-5 py-6 md:min-h-[210px] md:px-10">
        <div className="flex w-full items-center justify-start gap-5 md:gap-8">
          <ClubCrest className="h-24 w-20 shrink-0 drop-shadow-lg md:h-32 md:w-28" />

          <div className="max-w-lg text-start">
            <p className="text-2xl font-bold text-asl-orange drop-shadow-sm md:text-3xl">
              {c.welcome}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white/90 md:text-base">
              {c.welcomeSystem}
            </p>
            <p className="mt-2 text-base font-bold text-white md:text-lg">
              {c.welcomeClub}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
