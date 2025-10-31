// Calculator results component

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Maximize, Paintbrush, Box, Sofa, TrendingUp, Ruler } from "lucide-react"
import { CalculationResult } from "./types"
import { ROOM_SIZE_CATEGORIES } from "./constants"

interface CalculatorResultsProps {
    result: CalculationResult | null
    measurementUnit: "feet" | "meters"
}

export function CalculatorResults({ result, measurementUnit }: CalculatorResultsProps) {
    if (!result) {
        return (
            <div className="sticky top-6">
                <Card className="rounded-xl border-dashed border-2 border-muted">
                    <CardContent className="py-12">
                        <div className="text-center text-muted-foreground">
                            <Ruler className="h-12 w-12 mx-auto mb-4 opacity-30" />
                            <p className="text-lg font-medium">Ready to Calculate</p>
                            <p className="text-sm mt-2">Enter your room dimensions to see detailed measurements</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const {
        floorArea,
        wallArea,
        perimeter,
        volume,
        paintableArea,
        paintGallons,
        carpetRolls,
        roomCategory,
        recommendedFurniture,
    } = result

    const unit = measurementUnit === "feet" ? "ft" : "m"
    const areaUnit = measurementUnit === "feet" ? "sq ft" : "sq m"
    const volumeUnit = measurementUnit === "feet" ? "cu ft" : "cu m"

    // Get room size category info
    const categoryInfo = roomCategory ? ROOM_SIZE_CATEGORIES[roomCategory as keyof typeof ROOM_SIZE_CATEGORIES] : null

    return (
        <div className="sticky top-6 space-y-4">
            {/* Main Results Card */}
            <Card className="rounded-xl border-2 border-secondary/50 bg-gradient-to-br from-secondary/5 to-transparent">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-2xl">Room Measurements</CardTitle>
                            <CardDescription>Complete room size analysis</CardDescription>
                        </div>
                        {categoryInfo && (
                            <Badge className="text-base px-4 py-1.5" variant="secondary">
                                {categoryInfo.label}
                            </Badge>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Floor Area */}
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-secondary/10 rounded-md">
                                <Maximize className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Floor Area</p>
                                <p className="text-xl font-semibold">{floorArea.toFixed(2)} {areaUnit}</p>
                            </div>
                        </div>
                    </div>

                    {/* Perimeter */}
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-secondary/10 rounded-md">
                                <Ruler className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Perimeter</p>
                                <p className="text-xl font-semibold">{perimeter.toFixed(2)} {unit}</p>
                            </div>
                        </div>
                    </div>

                    {/* Wall Area */}
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-secondary/10 rounded-md">
                                <Paintbrush className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Wall Area</p>
                                <p className="text-xl font-semibold">{wallArea.toFixed(2)} {areaUnit}</p>
                            </div>
                        </div>
                    </div>

                    {/* Volume */}
                    <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-secondary/20 rounded-md">
                                <Box className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Room Volume</p>
                                <p className="text-2xl font-bold">{volume.toFixed(2)} {volumeUnit}</p>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Additional Calculations */}
                    <div className="space-y-3 pt-2">
                        <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Project Estimates
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-secondary/5 rounded-lg">
                                <p className="text-xs text-muted-foreground mb-1">Paint Needed</p>
                                <p className="text-lg font-semibold">{paintGallons} gal</p>
                            </div>
                            {carpetRolls && (
                                <div className="p-3 bg-secondary/5 rounded-lg">
                                    <p className="text-xs text-muted-foreground mb-1">Carpet Rolls</p>
                                    <p className="text-lg font-semibold">{carpetRolls} rolls</p>
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Furniture Recommendations */}
            {recommendedFurniture && recommendedFurniture.length > 0 && (
                <Card className="rounded-xl border border-secondary/30">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Sofa className="h-5 w-5 text-secondary" />
                            Furniture Recommendations
                        </CardTitle>
                        <CardDescription>Suggested furniture for this room size</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {recommendedFurniture.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                    <span className="text-secondary mt-0.5">•</span>
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
