// Calculator results component

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Droplet, Package, DollarSign, Ruler, Layers, TrendingUp } from "lucide-react"
import { CalculationResult } from "./types"
import { useCurrency } from "@/hooks/useCurrency"

interface CalculatorResultsProps {
    result: CalculationResult | null
}

export function CalculatorResults({ result }: CalculatorResultsProps) {
    const { formatSimple } = useCurrency()

    if (!result) {
        return (
            <Card className="rounded-xl border-dashed border-2 border-muted" data-results>
                <CardContent className="py-12">
                    <div className="text-center text-muted-foreground">
                        <Droplet className="h-12 w-12 mx-auto mb-4 opacity-30" />
                        <p className="text-lg font-medium">Ready to Calculate</p>
                        <p className="text-sm mt-2">Enter your room dimensions and paint specifications to see results</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    const {
        totalArea,
        paintNeededPerCoat,
        totalPaintNeeded,
        cansNeeded,
        primerNeeded,
        primerCansNeeded,
        totalCost,
        costPerArea,
    } = result

    return (
        <div className="space-y-4" data-results>
            {/* Main Results Card */}
            <Card className="rounded-xl border-2 border-secondary/50 bg-gradient-to-br from-secondary/5 to-transparent">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-2xl">Calculation Results</CardTitle>
                            <CardDescription>Your paint requirements for this project</CardDescription>
                        </div>
                        <Badge className="text-base px-4 py-1.5" variant="secondary">
                            <Droplet className="h-4 w-4 mr-1.5" />
                            {totalPaintNeeded.toFixed(2)} gal
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Surface Area */}
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-secondary/10 rounded-md">
                                <Ruler className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Total Surface Area</p>
                                <p className="text-xl font-semibold">{totalArea.toFixed(2)} sq ft</p>
                            </div>
                        </div>
                    </div>

                    {/* Paint Per Coat */}
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-secondary/10 rounded-md">
                                <Layers className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Paint Needed per Coat</p>
                                <p className="text-xl font-semibold">{paintNeededPerCoat.toFixed(2)} gallons</p>
                            </div>
                        </div>
                    </div>

                    {/* Total Paint Needed */}
                    <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-secondary/20 rounded-md">
                                <Droplet className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Total Paint Required</p>
                                <p className="text-2xl font-bold">{totalPaintNeeded.toFixed(2)} gallons</p>
                            </div>
                        </div>
                    </div>

                    {/* Cans to Buy */}
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-secondary/10 rounded-md">
                                <Package className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Cans to Buy</p>
                                <p className="text-xl font-semibold">{cansNeeded} gallon can{cansNeeded > 1 ? 's' : ''}</p>
                            </div>
                        </div>
                        {cansNeeded && <Badge variant="outline">{(cansNeeded - totalPaintNeeded).toFixed(2)} gal extra</Badge>}
                    </div>

                    {/* Primer Section */}
                    {primerNeeded !== undefined && primerCansNeeded !== undefined && (
                        <>
                            <Separator />
                            <div className="space-y-3 pt-2">
                                <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                    <Package className="h-4 w-4" />
                                    Primer Requirements
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 bg-secondary/5 rounded-lg">
                                        <p className="text-xs text-muted-foreground mb-1">Primer Needed</p>
                                        <p className="text-lg font-semibold">{primerNeeded.toFixed(2)} gal</p>
                                    </div>
                                    <div className="p-3 bg-secondary/5 rounded-lg">
                                        <p className="text-xs text-muted-foreground mb-1">Cans to Buy</p>
                                        <p className="text-lg font-semibold">{primerCansNeeded} can{primerCansNeeded > 1 ? 's' : ''}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>

            {/* Cost Breakdown Card */}
            {totalCost !== undefined && costPerArea !== undefined && (
                <Card className="rounded-xl border border-secondary/30">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-secondary" />
                            Cost Breakdown
                        </CardTitle>
                        <CardDescription>Estimated project costs</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg">
                            <div>
                                <p className="text-sm text-muted-foreground">Total Project Cost</p>
                                <p className="text-2xl font-bold">{formatSimple(totalCost)}</p>
                            </div>
                            <Badge variant="secondary" className="text-base px-3 py-1">
                                <TrendingUp className="h-4 w-4 mr-1.5" />
                                Estimated
                            </Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                            <p className="text-sm text-muted-foreground">Cost per Square Foot</p>
                            <p className="text-lg font-semibold">{formatSimple(costPerArea)}/sq ft</p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Quick Tips */}
            <Card className="rounded-xl border border-secondary/20 bg-secondary/5">
                <CardContent className="py-4">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-secondary/20 rounded-md mt-0.5">
                            <Package className="h-4 w-4 text-secondary" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium">Pro Tip</p>
                            <p className="text-sm text-muted-foreground">
                                Always buy slightly more paint than calculated to account for touch-ups and slight
                                variations in coverage. Keep extra paint sealed for future touch-ups.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
