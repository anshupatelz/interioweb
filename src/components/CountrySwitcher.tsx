"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useInternational } from "@/contexts/InternationalContext"
import { COUNTRIES } from "@/lib/i18n-config"

export function CountrySwitcher() {
    const { country, setCountry } = useInternational()

    const popularCountries = ["US", "GB", "CA", "AU", "IN", "AE"]
    const otherCountries = Object.keys(COUNTRIES).filter(
        (code) => !popularCountries.includes(code)
    )

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline">{country.currency.symbol}</span>
                    <span className="text-xs text-muted-foreground">{country.code}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Select Your Region</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Popular Countries */}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    Popular Regions
                </div>
                {popularCountries.map((code) => {
                    const countryConfig = COUNTRIES[code]
                    return (
                        <DropdownMenuItem
                            key={code}
                            onClick={() => setCountry(code)}
                            className={country.code === code ? "bg-secondary" : ""}
                        >
                            <div className="flex items-center justify-between w-full">
                                <span>{countryConfig.name}</span>
                                <span className="text-xs text-muted-foreground ml-2">
                                    {countryConfig.currency.symbol} {countryConfig.currency.code}
                                </span>
                            </div>
                        </DropdownMenuItem>
                    )
                })}

                <DropdownMenuSeparator />

                {/* Other Countries */}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    Other Regions
                </div>
                {otherCountries.map((code) => {
                    const countryConfig = COUNTRIES[code]
                    return (
                        <DropdownMenuItem
                            key={code}
                            onClick={() => setCountry(code)}
                            className={country.code === code ? "bg-secondary" : ""}
                        >
                            <div className="flex items-center justify-between w-full">
                                <span>{countryConfig.name}</span>
                                <span className="text-xs text-muted-foreground ml-2">
                                    {countryConfig.currency.symbol} {countryConfig.currency.code}
                                </span>
                            </div>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
