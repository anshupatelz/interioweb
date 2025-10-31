"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { CountryConfig, DEFAULT_COUNTRY, getCountryConfig, detectUserCountry } from "@/lib/i18n-config"

interface InternationalContextType {
    country: CountryConfig
    setCountry: (countryCode: string) => void
    isLoading: boolean
    currency: string
    currencySymbol: string
    locale: string
    measurementSystem: "metric" | "imperial"
}

const InternationalContext = createContext<InternationalContextType | undefined>(undefined)

export function InternationalProvider({ children }: { children: ReactNode }) {
    const [country, setCountryState] = useState<CountryConfig>(DEFAULT_COUNTRY)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check if user has a saved preference
        const savedCountry = localStorage.getItem("user-country")

        if (savedCountry) {
            setCountryState(getCountryConfig(savedCountry))
            setIsLoading(false)
        } else {
            // Auto-detect country
            detectUserCountry().then((countryCode) => {
                const config = getCountryConfig(countryCode)
                setCountryState(config)
                localStorage.setItem("user-country", countryCode)
                setIsLoading(false)
            }).catch(() => {
                setIsLoading(false)
            })
        }
    }, [])

    const setCountry = (countryCode: string) => {
        const config = getCountryConfig(countryCode)
        setCountryState(config)
        localStorage.setItem("user-country", countryCode)
    }

    const value: InternationalContextType = {
        country,
        setCountry,
        isLoading,
        currency: country.currency.code,
        currencySymbol: country.currency.symbol,
        locale: country.locale,
        measurementSystem: country.measurementSystem,
    }

    return (
        <InternationalContext.Provider value={value}>
            {children}
        </InternationalContext.Provider>
    )
}

export function useInternational() {
    const context = useContext(InternationalContext)
    if (context === undefined) {
        throw new Error("useInternational must be used within an InternationalProvider")
    }
    return context
}
