"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LeadForm from "@/components/LeadForm"
import { ArrowLeft, LayoutGrid, Info, DollarSign, Package } from "lucide-react"

type TileType = "floor" | "wall"
type MeasurementUnit = "feet" | "meters"
type TileSizeUnit = "inches" | "mm" | "cm"

export default function TileCalculatorPage() {
    // Basic inputs
    const [tileType, setTileType] = useState<TileType>("floor")
    const [measurementUnit, setMeasurementUnit] = useState<MeasurementUnit>("feet")
    const [tileSizeUnit, setTileSizeUnit] = useState<TileSizeUnit>("inches")

    // Area dimensions
    const [roomLength, setRoomLength] = useState("")
    const [roomWidth, setRoomWidth] = useState("")
    const [totalArea, setTotalArea] = useState("")

    // Tile dimensions
    const [tilePreset, setTilePreset] = useState("")
    const [tileLength, setTileLength] = useState("")
    const [tileWidth, setTileWidth] = useState("")

    // Advanced options
    const [gapSize, setGapSize] = useState("0.25")
    const [wastePercentage, setWastePercentage] = useState("10")

    // Box and pricing
    const [tilesPerBox, setTilesPerBox] = useState("")
    const [pricePerBox, setPricePerBox] = useState("")
    const [pricePerTile, setPricePerTile] = useState("")

    // Results
    const [result, setResult] = useState<{
        roomArea: number
        tileArea: number
        tilesNeeded: number
        tilesWithWaste: number
        boxesNeeded?: number
        totalCost?: number
        costPerSqUnit?: number
    } | null>(null)

    // Preset tile sizes (in inches)
    const tilePresets: Record<string, { length: number; width: number; label: string }> = {
        "12x12": { length: 12, width: 12, label: '12" × 12"' },
        "18x18": { length: 18, width: 18, label: '18" × 18"' },
        "24x24": { length: 24, width: 24, label: '24" × 24"' },
        "12x24": { length: 12, width: 24, label: '12" × 24"' },
        "6x24": { length: 6, width: 24, label: '6" × 24" (Plank)' },
        "8x48": { length: 8, width: 48, label: '8" × 48" (Plank)' },
        "4x12": { length: 4, width: 12, label: '4" × 12" (Subway)' },
        "3x6": { length: 3, width: 6, label: '3" × 6" (Subway)' },
    }

    const handlePresetChange = (preset: string) => {
        setTilePreset(preset)
        if (preset && tilePresets[preset]) {
            const { length, width } = tilePresets[preset]
            setTileLength(length.toString())
            setTileWidth(width.toString())
        }
    }

    const convertToSquareFeet = (value: number, unit: MeasurementUnit): number => {
        if (unit === "meters") return value * 10.764 // m² to ft²
        return value // already in feet
    }

    const convertTileSizeToInches = (value: number, unit: TileSizeUnit): number => {
        if (unit === "mm") return value / 25.4
        if (unit === "cm") return value / 2.54
        return value // already in inches
    }

    const calculateTiles = () => {
        const rLength = parseFloat(roomLength)
        const rWidth = parseFloat(roomWidth)
        const tLength = parseFloat(tileLength)
        const tWidth = parseFloat(tileWidth)
        const gap = parseFloat(gapSize)
        const waste = parseFloat(wastePercentage)

        if ((rLength > 0 && rWidth > 0) || parseFloat(totalArea) > 0) {
            // Calculate room area
            let roomArea = parseFloat(totalArea) || (rLength * rWidth)
            roomArea = convertToSquareFeet(roomArea, measurementUnit)

            // Convert tile dimensions to inches
            const tileLengthInches = convertTileSizeToInches(tLength, tileSizeUnit)
            const tileWidthInches = convertTileSizeToInches(tWidth, tileSizeUnit)

            // Add gap to tile dimensions
            const effectiveTileLength = tileLengthInches + gap
            const effectiveTileWidth = tileWidthInches + gap

            // Calculate tile area in square feet
            const tileArea = (effectiveTileLength / 12) * (effectiveTileWidth / 12)

            const tilesNeeded = Math.ceil(roomArea / tileArea)
            const tilesWithWaste = Math.ceil(tilesNeeded * (1 + waste / 100))

            let boxesNeeded: number | undefined
            let totalCost: number | undefined
            let costPerSqUnit: number | undefined

            // Calculate boxes if tiles per box is provided
            if (tilesPerBox && parseFloat(tilesPerBox) > 0) {
                boxesNeeded = Math.ceil(tilesWithWaste / parseFloat(tilesPerBox))
            }

            // Calculate cost
            if (pricePerBox && boxesNeeded) {
                totalCost = boxesNeeded * parseFloat(pricePerBox)
                costPerSqUnit = totalCost / roomArea
            } else if (pricePerTile) {
                totalCost = tilesWithWaste * parseFloat(pricePerTile)
                costPerSqUnit = totalCost / roomArea
            }

            setResult({
                roomArea,
                tileArea,
                tilesNeeded,
                tilesWithWaste,
                boxesNeeded,
                totalCost,
                costPerSqUnit
            })
        }
    }

    const resetCalculator = () => {
        setRoomLength("")
        setRoomWidth("")
        setTotalArea("")
        setTileLength("")
        setTileWidth("")
        setTilePreset("")
        setGapSize("0.25")
        setWastePercentage("10")
        setTilesPerBox("")
        setPricePerBox("")
        setPricePerTile("")
        setResult(null)
    }

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-accent/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link href="/tools" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors bg-secondary/10 rounded-lg px-3 py-1">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Tools
                        </Link>

                        <div className="mb-4 text-secondary flex justify-center">
                            <LayoutGrid className="h-8 w-8" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Advanced Tile Calculator
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Professional tile calculator with advanced options for accurate material estimation,
                            cost calculation, and project planning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Configuration Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            {/* Tile Type */}
                            <Card className="rounded-xl border">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <LayoutGrid className="h-5 w-5 text-secondary" />
                                        Tile Type
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button
                                            variant={tileType === "floor" ? "default" : "outline"}
                                            className="rounded-full"
                                            onClick={() => setTileType("floor")}
                                        >
                                            Floor Tile
                                        </Button>
                                        <Button
                                            variant={tileType === "wall" ? "default" : "outline"}
                                            className="rounded-full"
                                            onClick={() => setTileType("wall")}
                                        >
                                            Wall Tile
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Measurement Unit */}
                            <Card className="rounded-xl border">
                                <CardHeader>
                                    <CardTitle className="text-lg">Area Unit</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button
                                            variant={measurementUnit === "feet" ? "default" : "outline"}
                                            className="rounded-full"
                                            onClick={() => setMeasurementUnit("feet")}
                                        >
                                            Feet
                                        </Button>
                                        <Button
                                            variant={measurementUnit === "meters" ? "default" : "outline"}
                                            className="rounded-full"
                                            onClick={() => setMeasurementUnit("meters")}
                                        >
                                            Meters
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Tile Size Unit */}
                            <Card className="rounded-xl border">
                                <CardHeader>
                                    <CardTitle className="text-lg">Tile Size Unit</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-3 gap-2">
                                        <Button
                                            variant={tileSizeUnit === "inches" ? "default" : "outline"}
                                            className="rounded-full"
                                            onClick={() => setTileSizeUnit("inches")}
                                        >
                                            Inches
                                        </Button>
                                        <Button
                                            variant={tileSizeUnit === "cm" ? "default" : "outline"}
                                            className="rounded-full"
                                            onClick={() => setTileSizeUnit("cm")}
                                        >
                                            CM
                                        </Button>
                                        <Button
                                            variant={tileSizeUnit === "mm" ? "default" : "outline"}
                                            className="rounded-full"
                                            onClick={() => setTileSizeUnit("mm")}
                                        >
                                            MM
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Main Calculator */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            {/* Left Column - Inputs */}
                            <div className="lg:col-span-3 space-y-6">
                                {/* Area to Cover */}
                                <Card className="rounded-xl border">
                                    <CardHeader>
                                        <CardTitle>Area to Cover</CardTitle>
                                        <CardDescription>Enter dimensions or total area</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <Tabs defaultValue="dimensions" className="w-full">
                                            <TabsList className="grid w-full grid-cols-2">
                                                <TabsTrigger value="dimensions">By Dimensions</TabsTrigger>
                                                <TabsTrigger value="total">Total Area</TabsTrigger>
                                            </TabsList>
                                            <TabsContent value="dimensions" className="space-y-4 mt-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="roomLength">
                                                            Length ({measurementUnit === "feet" ? "ft" : "m"})
                                                        </Label>
                                                        <Input
                                                            id="roomLength"
                                                            type="number"
                                                            placeholder={measurementUnit === "feet" ? "20" : "6"}
                                                            value={roomLength}
                                                            onChange={(e) => {
                                                                setRoomLength(e.target.value)
                                                                setTotalArea("")
                                                            }}
                                                            min="0"
                                                            step="0.1"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="roomWidth">
                                                            Width ({measurementUnit === "feet" ? "ft" : "m"})
                                                        </Label>
                                                        <Input
                                                            id="roomWidth"
                                                            type="number"
                                                            placeholder={measurementUnit === "feet" ? "15" : "4.5"}
                                                            value={roomWidth}
                                                            onChange={(e) => {
                                                                setRoomWidth(e.target.value)
                                                                setTotalArea("")
                                                            }}
                                                            min="0"
                                                            step="0.1"
                                                        />
                                                    </div>
                                                </div>
                                            </TabsContent>
                                            <TabsContent value="total" className="mt-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="totalArea">
                                                        Total Area (sq {measurementUnit === "feet" ? "ft" : "m"})
                                                    </Label>
                                                    <Input
                                                        id="totalArea"
                                                        type="number"
                                                        placeholder={measurementUnit === "feet" ? "300" : "28"}
                                                        value={totalArea}
                                                        onChange={(e) => {
                                                            setTotalArea(e.target.value)
                                                            setRoomLength("")
                                                            setRoomWidth("")
                                                        }}
                                                        min="0"
                                                        step="0.1"
                                                    />
                                                </div>
                                            </TabsContent>
                                        </Tabs>
                                    </CardContent>
                                </Card>

                                {/* Tile Size */}
                                <Card className="rounded-xl border">
                                    <CardHeader>
                                        <CardTitle>Tile Size</CardTitle>
                                        <CardDescription>Choose preset or enter custom size</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {tileSizeUnit === "inches" && (
                                            <div className="space-y-2">
                                                <Label>Standard Sizes (Quick Select)</Label>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                                    {Object.entries(tilePresets).map(([key, preset]) => (
                                                        <Button
                                                            key={key}
                                                            variant={tilePreset === key ? "default" : "outline"}
                                                            className="h-auto py-2 rounded-lg text-xs"
                                                            onClick={() => handlePresetChange(key)}
                                                        >
                                                            {preset.label}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="tileLength">
                                                    Length ({tileSizeUnit})
                                                </Label>
                                                <Input
                                                    id="tileLength"
                                                    type="number"
                                                    placeholder={tileSizeUnit === "inches" ? "12" : tileSizeUnit === "cm" ? "30" : "300"}
                                                    value={tileLength}
                                                    onChange={(e) => {
                                                        setTileLength(e.target.value)
                                                        setTilePreset("")
                                                    }}
                                                    min="0"
                                                    step="0.1"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="tileWidth">
                                                    Width ({tileSizeUnit})
                                                </Label>
                                                <Input
                                                    id="tileWidth"
                                                    type="number"
                                                    placeholder={tileSizeUnit === "inches" ? "12" : tileSizeUnit === "cm" ? "30" : "300"}
                                                    value={tileWidth}
                                                    onChange={(e) => {
                                                        setTileWidth(e.target.value)
                                                        setTilePreset("")
                                                    }}
                                                    min="0"
                                                    step="0.1"
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Advanced Options */}
                                <Card className="rounded-xl border">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Info className="h-5 w-5 text-secondary" />
                                            Advanced Options
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="gapSize">Gap Size (inches)</Label>
                                                <Input
                                                    id="gapSize"
                                                    type="number"
                                                    placeholder="0.25"
                                                    value={gapSize}
                                                    onChange={(e) => setGapSize(e.target.value)}
                                                    step="0.05"
                                                />
                                                <p className="text-xs text-muted-foreground">Grout line spacing</p>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="waste">Waste Allowance</Label>
                                                <Select value={wastePercentage} onValueChange={setWastePercentage}>
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="5">5% - Minimal</SelectItem>
                                                        <SelectItem value="10">10% - Standard</SelectItem>
                                                        <SelectItem value="15">15% - Complex</SelectItem>
                                                        <SelectItem value="20">20% - Diagonal</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Box & Pricing (Optional) */}
                                <Card className="rounded-xl border border-secondary/30 bg-secondary/5">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <CardTitle className="flex items-center gap-2">
                                                    <Package className="h-5 w-5 text-secondary" />
                                                    Box Size & Pricing
                                                </CardTitle>
                                                <CardDescription>Optional - for cost calculation</CardDescription>
                                            </div>
                                            <Badge variant="secondary">Optional</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="tilesPerBox">Tiles per Box</Label>
                                                <Input
                                                    id="tilesPerBox"
                                                    type="number"
                                                    placeholder="10"
                                                    value={tilesPerBox}
                                                    onChange={(e) => setTilesPerBox(e.target.value)}
                                                    min="0"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="pricePerBox">Price per Box ($)</Label>
                                                <Input
                                                    id="pricePerBox"
                                                    type="number"
                                                    placeholder="50"
                                                    value={pricePerBox}
                                                    onChange={(e) => {
                                                        setPricePerBox(e.target.value)
                                                        setPricePerTile("")
                                                    }}
                                                    min="0"
                                                    step="0.01"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center text-sm text-muted-foreground">— OR —</div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pricePerTile">Price per Tile ($)</Label>
                                            <Input
                                                id="pricePerTile"
                                                type="number"
                                                placeholder="5.00"
                                                value={pricePerTile}
                                                onChange={(e) => {
                                                    setPricePerTile(e.target.value)
                                                    setPricePerBox("")
                                                }}
                                                min="0"
                                                step="0.01"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <Button onClick={calculateTiles} size="lg" className="flex-1 rounded-full">
                                        Calculate
                                    </Button>
                                    <Button onClick={resetCalculator} size="lg" variant="outline" className="rounded-full">
                                        Reset
                                    </Button>
                                </div>
                            </div>

                            {/* Right Column - Results */}
                            <div className="lg:col-span-2">
                                <Card className="rounded-xl border-2 border-secondary/30 bg-gradient-to-br from-secondary/10 to-secondary/5 sticky top-8">
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
                                                                ${result.totalCost.toFixed(2)}
                                                            </div>
                                                        </div>

                                                        {result.costPerSqUnit && (
                                                            <div className="p-3 bg-background/50 rounded-lg border text-center">
                                                                <div className="text-xs text-muted-foreground">Cost per sq ft</div>
                                                                <div className="text-lg font-semibold">${result.costPerSqUnit.toFixed(2)}</div>
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
                            </div>
                        </div>

                        {/* Tips Section */}
                        <Card className="mt-8 rounded-xl border">
                            <CardHeader>
                                <CardTitle>Professional Tips</CardTitle>
                            </CardHeader>
                            <CardContent className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-sm flex items-center gap-2">
                                        <span className="h-6 w-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs">1</span>
                                        Measure Accurately
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Measure each wall individually and account for irregularities. Include doorways and alcoves in your calculations.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-sm flex items-center gap-2">
                                        <span className="h-6 w-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs">2</span>
                                        Consider Pattern Layout
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Diagonal patterns, herringbone, or intricate designs require 15-20% extra tiles for cutting and waste.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-sm flex items-center gap-2">
                                        <span className="h-6 w-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs">3</span>
                                        Account for Grout Lines
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Standard grout lines are 1/8" to 1/4". Larger format tiles typically use smaller grout lines.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-sm flex items-center gap-2">
                                        <span className="h-6 w-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs">4</span>
                                        Order from Same Batch
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Tile colors can vary between production batches. Order all tiles at once and verify batch numbers match.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Lead Form Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Need Professional <span className="text-secondary">Design Help?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Let our team of experts help you bring your interior design vision to life.
                        </p>
                    </div>

                    <LeadForm
                        source="tool-tile-calculator"
                        title="Work with Our Design Team"
                        description="Tell us about your project and we'll create a custom solution for you."
                        showProjectDetails={true}
                    />
                </div>
            </section>

            <Footer />
        </div>
    )
}
