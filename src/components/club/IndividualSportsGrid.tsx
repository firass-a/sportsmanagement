"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { individualSports } from "@/lib/club/data";

const imagePosition: Partial<
  Record<(typeof individualSports)[number]["key"], string>
> = {
  cycling: "50% 28%",
  athletics: "50% 42%",
  shooting: "50% 35%",
  karate: "50% 20%",
  swimming: "50% 30%",
  boxing: "50% 40%",
  tennis: "50% 55%",
};

export function IndividualSportsGrid({
  variant = "default",
}: {
  variant?: "default" | "large";
}) {
  const { t } = useLanguage();
  const sp = t.club.sports;
  const isLarge = variant === "large";

  return (
    <div
      className={`rounded-xl bg-white shadow-sm ${isLarge ? "p-5 md:p-6" : "p-4"}`}
    >
      <h3
        className={`font-bold text-asl-navy ${isLarge ? "mb-5 text-base" : "mb-3 text-sm"}`}
      >
        {t.club.individualSports}
      </h3>
      <div
        className={
          isLarge
            ? "grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4"
            : "grid grid-cols-3 gap-2"
        }
      >
        {individualSports.map(({ key, image }) => (
          <div
            key={key}
            className={
              isLarge
                ? "group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 transition hover:shadow-lg"
                : "relative h-[72px] overflow-hidden rounded-lg shadow-sm ring-1 ring-black/5 sm:h-20"
            }
          >
            <Image
              src={image}
              alt={sp[key]}
              fill
              sizes={isLarge ? "(max-width:640px) 50vw, 25vw" : "120px"}
              className={`object-cover ${isLarge ? "transition duration-300 group-hover:scale-105" : ""}`}
              style={{ objectPosition: imagePosition[key] ?? "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span
              className={`absolute inset-x-0 bottom-0 z-10 text-center font-bold text-white drop-shadow ${
                isLarge
                  ? "px-2 pb-3 text-sm"
                  : "px-1.5 pb-1.5 text-[10px] sm:text-[11px]"
              }`}
            >
              {sp[key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
