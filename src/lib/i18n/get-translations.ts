import type { Locale, TranslationKeys } from "./config";
import ar from "./translations/ar.json";
import fr from "./translations/fr.json";
import en from "./translations/en.json";

const translations: Record<Locale, TranslationKeys> = { ar, fr, en };

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}
