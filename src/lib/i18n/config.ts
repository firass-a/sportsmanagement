export type Locale = "ar" | "fr" | "en";

export const locales: Locale[] = ["ar", "fr", "en"];
export const defaultLocale: Locale = "ar";

export const localeConfig: Record<
  Locale,
  { dir: "rtl" | "ltr"; label: string }
> = {
  ar: { dir: "rtl", label: "العربية" },
  fr: { dir: "ltr", label: "Français" },
  en: { dir: "ltr", label: "English" },
};

export type TranslationKeys = typeof import("./translations/ar.json");
