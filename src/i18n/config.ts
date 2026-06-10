import { Locale } from "@/types";
import zh from "./translations/zh";
import en from "./translations/en";

const translations = { zh, en } as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/en")) return "en";
  return "zh";
}

export { translations };
