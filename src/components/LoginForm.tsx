"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  FileCheck,
  Lock,
  Shield,
  User,
} from "lucide-react";
import { useState } from "react";
import { AthleteBackground } from "@/components/AthleteBackground";
import { CornerDecorations } from "@/components/CornerDecorations";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

type LoginFormProps = {
  variant: "national" | "club";
};

export function LoginForm({ variant }: LoginFormProps) {
  const router = useRouter();
  const { t, dir } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const isNational = variant === "national";
  const title = isNational ? t.login.nationalTitle : t.login.clubTitle;

  const accent = isNational
    ? {
        bar: "bg-asl-navy",
        icon: "bg-asl-navy/10 text-asl-navy",
        focus: "focus:border-asl-navy focus:ring-asl-navy/15",
        btn: "bg-asl-navy hover:bg-asl-navy-light",
        link: "text-asl-navy hover:text-asl-blue",
      }
    : {
        bar: "bg-asl-orange",
        icon: "bg-asl-orange/10 text-asl-orange",
        focus: "focus:border-asl-orange focus:ring-asl-orange/20",
        btn: "bg-asl-orange hover:bg-asl-orange-dark",
        link: "text-asl-orange hover:text-asl-orange-dark",
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (variant === "club") {
      router.push("/club/dashboard");
    } else {
      router.push("/national/dashboard");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <AthleteBackground />
      <CornerDecorations />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-lg items-center justify-between px-4 pt-6 md:px-6 md:pt-8">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-asl-navy/10 bg-white/80 px-4 py-2 text-sm font-medium text-asl-navy shadow-sm backdrop-blur-sm transition hover:border-asl-orange/30 hover:bg-white"
          >
            <ArrowLeft
              className={`h-4 w-4 ${dir === "ltr" ? "rotate-180" : ""}`}
            />
            {t.login.back}
          </Link>
          <LanguageSwitcher />
        </div>

        <main className="mx-auto flex w-full max-w-lg flex-1 flex-col px-4 py-8 md:px-6 md:py-10">
          <div className="mb-6 flex flex-col items-center text-center">
            <Logo size="md" className="mb-4" />
            <div
              className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${accent.icon}`}
            >
              {isNational ? (
                <FileCheck className="h-6 w-6" strokeWidth={1.5} />
              ) : (
                <Shield className="h-6 w-6" strokeWidth={1.5} />
              )}
            </div>
            <h1 className="text-xl font-bold text-asl-navy md:text-2xl">
              {title}
            </h1>
            <p className="mt-1.5 text-sm text-asl-navy/65">{t.login.subtitle}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="overflow-hidden rounded-2xl border border-asl-navy/8 bg-white shadow-xl shadow-asl-navy/8"
          >
            <div className={`h-1.5 ${accent.bar}`} />

            <div className="p-6 md:p-8">
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-asl-navy"
                >
                  {t.login.username}
                </label>
                <div className="relative">
                  <User className="absolute start-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-asl-navy/35" />
                  <input
                    id="username"
                    type="text"
                    placeholder={t.login.usernamePlaceholder}
                    className={`w-full rounded-xl border border-asl-navy/10 bg-asl-gray/50 py-3 ps-11 pe-4 text-asl-navy outline-none transition ${accent.focus}`}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-asl-navy"
                >
                  {t.login.password}
                </label>
                <div className="relative">
                  <Lock className="absolute start-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-asl-navy/35" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t.login.passwordPlaceholder}
                    className={`w-full rounded-xl border border-asl-navy/10 bg-asl-gray/50 py-3 ps-11 pe-11 text-asl-navy outline-none transition ${accent.focus}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute end-3.5 top-1/2 -translate-y-1/2 text-asl-navy/35 transition hover:text-asl-navy"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-asl-navy/70">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-asl-navy/20 text-asl-orange focus:ring-asl-orange/30"
                  />
                  {t.login.remember}
                </label>
                <button
                  type="button"
                  className={`font-medium transition hover:underline ${accent.link}`}
                >
                  {t.login.forgot}
                </button>
              </div>

              <button
                type="submit"
                className={`w-full rounded-xl py-3.5 text-base font-semibold text-white shadow-md transition hover:shadow-lg ${accent.btn}`}
              >
                {t.login.submit}
              </button>
            </div>
          </form>
        </main>

        <Footer />
      </div>
    </div>
  );
}
