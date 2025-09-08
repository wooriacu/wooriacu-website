import type { APIRoute } from "astro"

// Import translation files
import en from "../i18n/en.json"
import es from "../i18n/es.json"

// Define supported locales
export const locales = ["en", "es"] as const
export const defaultLocale = "en" as const
export type Locale = (typeof locales)[number]

// Translation dictionaries
const translations = {
  en,
  es,
} as const

// Utility function to get translations for a locale
export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}

// Helper function to get nested translation values
export function t(locale: Locale, key: string): string {
  const translation = getTranslations(locale)

  // Support nested keys like "nav.home"
  const keys = key.split(".")
  let result: any = translation

  for (const k of keys) {
    if (result && typeof result === "object" && k in result) {
      result = result[k]
    } else {
      // Fallback to English if translation not found
      const fallback = translations[defaultLocale]
      let fallbackResult: any = fallback

      for (const k of keys) {
        if (
          fallbackResult &&
          typeof fallbackResult === "object" &&
          k in fallbackResult
        ) {
          fallbackResult = fallbackResult[k]
        } else {
          return key // Return key if no translation found
        }
      }
      return fallbackResult
    }
  }

  return typeof result === "string" ? result : key
}

// Helper function to detect locale from URL path
export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname
  const segments = pathname.split("/").filter(Boolean)

  // Check if first segment is a locale
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return segments[0] as Locale
  }

  return defaultLocale
}

// Helper function to generate localized URLs
export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove leading slash
  const cleanPath = path.startsWith("/") ? path.slice(1) : path

  if (locale === defaultLocale) {
    return `/${cleanPath}`
  }

  return `/${locale}/${cleanPath}`
}

// Helper function to get alternate language URL
export function getAlternateLocaleUrl(
  currentLocale: Locale,
  path: string = ""
): string {
  const alternateLocale = currentLocale === "en" ? "es" : "en"
  return getLocalizedPath(path, alternateLocale)
}
