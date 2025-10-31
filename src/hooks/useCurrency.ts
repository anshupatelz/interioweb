"use client"

import { useInternational } from "@/contexts/InternationalContext"
import { convertCurrency, formatCurrency, formatNumber, CURRENCY_RATES } from "@/lib/i18n-config"

export function useCurrency() {
    const { currency, currencySymbol, locale } = useInternational()

    const format = (amount: number, fromCurrency: string = "USD"): string => {
        const converted = convertCurrency(amount, fromCurrency, currency)
        return formatCurrency(converted, currency, locale)
    }

    const formatSimple = (amount: number): string => {
        return `${currencySymbol}${formatNumber(amount, locale)}`
    }

    const convert = (amount: number, fromCurrency: string = "USD"): number => {
        return convertCurrency(amount, fromCurrency, currency)
    }

    return {
        currency,
        currencySymbol,
        locale,
        format,
        formatSimple,
        convert,
        rates: CURRENCY_RATES,
    }
}
