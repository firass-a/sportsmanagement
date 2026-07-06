"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultLocale,
  localeConfig,
  type Locale,
  type TranslationKeys,
} from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/get-translations";

type LanguageContextValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  t: TranslationKeys;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("asl-locale") as Locale | null;
    if (stored && localeConfig[stored]) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const { dir } = localeConfig[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, mounted]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("asl-locale", next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      dir: localeConfig[locale].dir,
      t: getTranslations(locale),
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
