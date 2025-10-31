// Calculator results display component

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, DollarSign, Package, LayoutGrid } from "lucide-react"
import { CalculationResult } from "./types"
import { useCurrency } from "@/hooks/useCurrency"

interface CalculatorResultsProps {
    result: CalculationResult | null
    wastePercentage: string
}

export function CalculatorResults({ result, wastePercentage }: CalculatorResultsProps) {
    const { formatSimple } = useCurrency()
    return (
        <Card className="rounded-xl border-2 border-secondary/30 bg-gradient-to-br from-secondary/10 to-secondary/5 lg:sticky lg:top-8">
            <CardHeader>
                <CardTitle>Calculation Results</CardTitle>
                <CardDescription>Your project materials estimate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {result ? (
                    <>
                        <div className="p-4 bg-background/80 backdrop-blur rounded-lg border">
                            <div className="text-xs text-muted-foreground mb-1">Total Area</div>
                            <div className="text-2xl font-bold">{result.roomArea.toFixed(2)} sq ft</div>
                        </div>

                        <div className="p-4 bg-background/80 backdrop-blur rounded-lg border">
                            <div className="text-xs text-muted-foreground mb-1">Tiles Needed (Exact)</div>
                            <div className="text-2xl font-bold">{result.tilesNeeded} tiles</div>
                        </div>

                        <div className="p-5 bg-secondary/20 backdrop-blur rounded-lg border-2 border-secondary">
                            <div className="flex items-center justify-between mb-2">
                                <div className="text-xs text-muted-foreground">Recommended to Order</div>
                                <Badge variant="secondary">{wastePercentage}% waste</Badge>
                            </div>
                            <div className="text-3xl font-bold text-secondary">{result.tilesWithWaste} tiles</div>
                        </div>

                        {result.boxesNeeded && (
                            <div className="p-4 bg-background/80 backdrop-blur rounded-lg border">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                                    <Package className="h-3 w-3" />
                                    Boxes Needed
                                </div>
                                <div className="text-2xl font-bold">{result.boxesNeeded} boxes</div>
                            </div>
                        )}

                        {result.totalCost && (
                            <>
                                <div className="p-4 bg-emerald-500/10 backdrop-blur rounded-lg border border-emerald-500/30">
                                    <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 mb-1">
                                        <DollarSign className="h-3 w-3" />
                                        Total Cost Estimate
                                    </div>
                                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                                        {formatSimple(result.totalCost)}
                                    </div>
                                </div>

                                {result.costPerSqUnit && (
                                    <div className="p-3 bg-background/50 rounded-lg border text-center">
                                        <div className="text-xs text-muted-foreground">Cost per sq ft</div>
                                        <div className="text-lg font-semibold">{formatSimple(result.costPerSqUnit)}</div>
                                    </div>
                                )}
                            </>
                        )}

                        <div className="pt-4 border-t">
                            <div className="text-xs text-muted-foreground space-y-1">
                                <p className="flex items-start gap-2">
                                    <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                    <span>Always order a few extra tiles for future repairs</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                    <span>Check tile batch numbers match when ordering</span>
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-12 text-muted-foreground">
                        <LayoutGrid className="h-12 w-12 mx-auto mb-4 opacity-20" />
                        <p>Enter your measurements and</p>
                        <p>click Calculate to see results</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
