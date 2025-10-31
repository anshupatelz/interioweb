// International configuration and utilities

export interface CountryConfig {
    code: string
    name: string
    currency: {
        code: string
        symbol: string
        name: string
    }
    locale: string
    language: string
    measurementSystem: "metric" | "imperial"
    timezone: string
}

export const COUNTRIES: Record<string, CountryConfig> = {
    US: {
        code: "US",
        name: "United States",
        currency: { code: "USD", symbol: "$", name: "US Dollar" },
        locale: "en-US",
        language: "en",
        measurementSystem: "imperial",
        timezone: "America/New_York",
    },
    CA: {
        code: "CA",
        name: "Canada",
        currency: { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
        locale: "en-CA",
        language: "en",
        measurementSystem: "metric",
        timezone: "America/Toronto",
    },
    GB: {
        code: "GB",
        name: "United Kingdom",
        currency: { code: "GBP", symbol: "£", name: "British Pound" },
        locale: "en-GB",
        language: "en",
        measurementSystem: "metric",
        timezone: "Europe/London",
    },
    AU: {
        code: "AU",
        name: "Australia",
        currency: { code: "AUD", symbol: "A$", name: "Australian Dollar" },
        locale: "en-AU",
        language: "en",
        measurementSystem: "metric",
        timezone: "Australia/Sydney",
    },
    IN: {
        code: "IN",
        name: "India",
        currency: { code: "INR", symbol: "₹", name: "Indian Rupee" },
        locale: "en-IN",
        language: "en",
        measurementSystem: "metric",
        timezone: "Asia/Kolkata",
    },
    AE: {
        code: "AE",
        name: "United Arab Emirates",
        currency: { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
        locale: "en-AE",
        language: "en",
        measurementSystem: "metric",
        timezone: "Asia/Dubai",
    },
    SG: {
        code: "SG",
        name: "Singapore",
        currency: { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
        locale: "en-SG",
        language: "en",
        measurementSystem: "metric",
        timezone: "Asia/Singapore",
    },
    NZ: {
        code: "NZ",
        name: "New Zealand",
        currency: { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
        locale: "en-NZ",
        language: "en",
        measurementSystem: "metric",
        timezone: "Pacific/Auckland",
    },
    DE: {
        code: "DE",
        name: "Germany",
        currency: { code: "EUR", symbol: "€", name: "Euro" },
        locale: "de-DE",
        language: "de",
        measurementSystem: "metric",
        timezone: "Europe/Berlin",
    },
    FR: {
        code: "FR",
        name: "France",
        currency: { code: "EUR", symbol: "€", name: "Euro" },
        locale: "fr-FR",
        language: "fr",
        measurementSystem: "metric",
        timezone: "Europe/Paris",
    },
    ES: {
        code: "ES",
        name: "Spain",
        currency: { code: "EUR", symbol: "€", name: "Euro" },
        locale: "es-ES",
        language: "es",
        measurementSystem: "metric",
        timezone: "Europe/Madrid",
    },
    IT: {
        code: "IT",
        name: "Italy",
        currency: { code: "EUR", symbol: "€", name: "Euro" },
        locale: "it-IT",
        language: "it",
        measurementSystem: "metric",
        timezone: "Europe/Rome",
    },
    JP: {
        code: "JP",
        name: "Japan",
        currency: { code: "JPY", symbol: "¥", name: "Japanese Yen" },
        locale: "ja-JP",
        language: "ja",
        measurementSystem: "metric",
        timezone: "Asia/Tokyo",
    },
    BR: {
        code: "BR",
        name: "Brazil",
        currency: { code: "BRL", symbol: "R$", name: "Brazilian Real" },
        locale: "pt-BR",
        language: "pt",
        measurementSystem: "metric",
        timezone: "America/Sao_Paulo",
    },
    MX: {
        code: "MX",
        name: "Mexico",
        currency: { code: "MXN", symbol: "MX$", name: "Mexican Peso" },
        locale: "es-MX",
        language: "es",
        measurementSystem: "metric",
        timezone: "America/Mexico_City",
    },
}

// Default configuration (fallback)
export const DEFAULT_COUNTRY: CountryConfig = COUNTRIES.US

// Currency conversion rates (update periodically or use API)
export const CURRENCY_RATES: Record<string, number> = {
    USD: 1.0,
    CAD: 1.36,
    GBP: 0.79,
    EUR: 0.92,
    AUD: 1.53,
    INR: 83.12,
    AED: 3.67,
    SGD: 1.34,
    NZD: 1.65,
    JPY: 149.50,
    BRL: 4.98,
    MXN: 17.25,
}

// Get country config by code
export function getCountryConfig(countryCode: string): CountryConfig {
    return COUNTRIES[countryCode] || DEFAULT_COUNTRY
}

// Convert currency
export function convertCurrency(
    amount: number,
    fromCurrency: string,
    toCurrency: string
): number {
    const fromRate = CURRENCY_RATES[fromCurrency] || 1
    const toRate = CURRENCY_RATES[toCurrency] || 1
    const usdAmount = amount / fromRate
    return usdAmount * toRate
}

// Format currency for locale
export function formatCurrency(
    amount: number,
    currencyCode: string,
    locale: string
): string {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount)
}

// Format number for locale
export function formatNumber(value: number, locale: string): string {
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value)
}

// Get user's country from various sources
export async function detectUserCountry(): Promise<string> {
    try {
        // Try geolocation API first
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()
        return data.country_code || "US"
    } catch (error) {
        // Fallback to browser language
        const browserLang = navigator.language
        if (browserLang.includes("GB")) return "GB"
        if (browserLang.includes("CA")) return "CA"
        if (browserLang.includes("AU")) return "AU"
        if (browserLang.includes("IN")) return "IN"
        if (browserLang.includes("DE")) return "DE"
        if (browserLang.includes("FR")) return "FR"
        if (browserLang.includes("ES")) return "ES"
        if (browserLang.includes("IT")) return "IT"
        if (browserLang.includes("JP")) return "JP"
        if (browserLang.includes("BR")) return "BR"
        if (browserLang.includes("MX")) return "MX"
        return "US"
    }
}

// Supported languages
export const SUPPORTED_LANGUAGES = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
]

