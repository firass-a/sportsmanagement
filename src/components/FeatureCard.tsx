"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  FileCheck,
  Medal,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type FeatureCardProps = {
  variant: "national" | "club";
  href: string;
};

export function FeatureCard({ variant, href }: FeatureCardProps) {
  const { t, dir } = useLanguage();
  const isNational = variant === "national";

  return (
    <div
      className={`flex min-h-[420px] flex-col rounded-3xl p-8 shadow-lg md:min-h-[460px] md:p-10 ${
        isNational ? "bg-asl-navy" : "bg-gradient-to-b from-asl-orange to-asl-orange-dark"
      }`}
    >
      <div className="mb-6 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 bg-white/5">
          {isNational ? (
            <FileCheck className="h-9 w-9 text-white" strokeWidth={1.5} />
          ) : (
            <Shield className="h-9 w-9 text-white" strokeWidth={1.5} />
          )}
        </div>
      </div>

      <h2 className="mb-5 text-center text-xl font-bold leading-snug text-white md:text-2xl">
        {isNational ? t.cards.national.title : t.cards.club.title}
      </h2>

      {isNational && (
        <div className="mb-6 flex justify-center gap-8 md:gap-10">
          {[
            { icon: Shield, label: t.cards.national.club },
            { icon: Medal, label: t.cards.national.leagues },
            { icon: Building2, label: t.cards.national.federations },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10">
                <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-center text-xs font-medium text-white/90">
                {label}
              </span>
            </div>
          ))}
        </div>
      )}

      <p className="mb-auto text-center text-sm leading-relaxed text-white/85 md:text-[0.95rem]">
        {isNational ? t.cards.national.description : t.cards.club.description}
      </p>

      <Link
        href={href}
        className={`mt-8 flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-110 ${
          isNational ? "bg-asl-blue" : "bg-asl-orange/80"
        }`}
      >
        <span>{isNational ? t.cards.national.enter : t.cards.club.enter}</span>
        <ArrowLeft
          className={`h-5 w-5 ${dir === "ltr" ? "rotate-180" : ""}`}
          strokeWidth={2.5}
        />
      </Link>
    </div>
  );
}
