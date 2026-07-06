"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { NationalEmblem } from "./NationalEmblem";

const BANNER_IMAGE = "/images/banner-header.png";

export function WelcomeBanner() {
  const { t } = useLanguage();
  const n = t.national;

  return (
    <div
      className="relative min-h-[190px] overflow-hidden rounded-2xl bg-cover shadow-sm md:min-h-[210px]"
      style={{
        backgroundImage: `url('${BANNER_IMAGE}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-asl-navy/90 via-asl-navy/50 to-transparent" />

      <div className="relative flex h-full min-h-[190px] items-center px-5 py-6 md:min-h-[210px] md:px-10">
        <div className="flex w-full items-center justify-start gap-5 md:gap-8">
          <NationalEmblem className="h-20 w-20 shrink-0 drop-shadow-lg md:h-24 md:w-24" />

          <div className="max-w-xl text-start">
            <p className="text-lg font-bold text-asl-orange drop-shadow-sm md:text-xl">
              {n.bannerPart}
            </p>
            <p className="mt-1 text-xl font-bold text-white md:text-2xl">
              {n.bannerTitle}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-base">
              {n.bannerSubtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
