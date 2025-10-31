// Metadata is exported from metadata.ts
// This file must be "use client" for interactivity
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LeadForm from "@/components/LeadForm"
import { ArrowLeft, LayoutGrid } from "lucide-react"
import { TileType, MeasurementUnit, TileSizeUnit, CalculationResult } from "./types"
import { TILE_PRESETS, DEFAULT_GAP_SIZE, DEFAULT_WASTE_PERCENTAGE } from "./constants"
import { calculateTiles as calculateTilesUtil } from "./utils"
import {
    TileTypeSelector,
    AreaInput,
    TileSizeInput,
    AdvancedOptions,
    CostCalculation,
} from "./CalculatorInputs"
import { CalculatorResults } from "./CalculatorResults"
import { ProfessionalTips } from "./ProfessionalTips"
import { FAQSection, DetailedContentSection, TileCalculatorSchema, FAQSchema, BreadcrumbSchema } from "./SEOContent"
import { IntroSection } from "./IntroSection"

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
    const [gapSize, setGapSize] = useState(DEFAULT_GAP_SIZE)
    const [wastePercentage, setWastePercentage] = useState(DEFAULT_WASTE_PERCENTAGE)

    // Box and pricing
    const [tilesPerBox, setTilesPerBox] = useState("")
    const [pricePerBox, setPricePerBox] = useState("")
    const [pricePerTile, setPricePerTile] = useState("")

    // Results
    const [result, setResult] = useState<CalculationResult | null>(null)

    const handlePresetChange = (preset: string) => {
        setTilePreset(preset)
        if (preset && TILE_PRESETS[preset]) {
            const { length, width } = TILE_PRESETS[preset]
            setTileLength(length.toString())
            setTileWidth(width.toString())
        }
    }

    const handleCalculate = () => {
        const calculationResult = calculateTilesUtil({
            roomLength,
            roomWidth,
            totalArea,
            tileLength,
            tileWidth,
            gapSize,
            wastePercentage,
            tilesPerBox,
            pricePerBox,
            pricePerTile,
            measurementUnit,
            tileSizeUnit,
        })
        setResult(calculationResult)
    }

    const resetCalculator = () => {
        setRoomLength("")
        setRoomWidth("")
        setTotalArea("")
        setTileLength("")
        setTileWidth("")
        setTilePreset("")
        setGapSize(DEFAULT_GAP_SIZE)
        setWastePercentage(DEFAULT_WASTE_PERCENTAGE)
        setTilesPerBox("")
        setPricePerBox("")
        setPricePerTile("")
        setResult(null)
    }

    return (
        <div className="min-h-screen">
            {/* SEO Schema Markup */}
            <TileCalculatorSchema />
            <FAQSchema />
            <BreadcrumbSchema />

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
            <section className="py-12 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">

                        {/* Main Calculator */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Column - Inputs */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Tile Type Selector */}
                                <TileTypeSelector tileType={tileType} setTileType={setTileType} />

                                {/* Area to Cover */}
                                <AreaInput
                                    measurementUnit={measurementUnit}
                                    setMeasurementUnit={setMeasurementUnit}
                                    roomLength={roomLength}
                                    setRoomLength={setRoomLength}
                                    roomWidth={roomWidth}
                                    setRoomWidth={setRoomWidth}
                                    totalArea={totalArea}
                                    setTotalArea={setTotalArea}
                                />

                                {/* Tile Size */}
                                <TileSizeInput
                                    tileSizeUnit={tileSizeUnit}
                                    setTileSizeUnit={setTileSizeUnit}
                                    tilePreset={tilePreset}
                                    setTilePreset={setTilePreset}
                                    tileLength={tileLength}
                                    setTileLength={setTileLength}
                                    tileWidth={tileWidth}
                                    setTileWidth={setTileWidth}
                                    onPresetChange={handlePresetChange}
                                />

                                {/* Advanced Options */}
                                <AdvancedOptions
                                    gapSize={gapSize}
                                    setGapSize={setGapSize}
                                    wastePercentage={wastePercentage}
                                    setWastePercentage={setWastePercentage}
                                />

                                {/* Cost Calculation */}
                                <CostCalculation
                                    tilesPerBox={tilesPerBox}
                                    setTilesPerBox={setTilesPerBox}
                                    pricePerBox={pricePerBox}
                                    setPricePerBox={setPricePerBox}
                                    pricePerTile={pricePerTile}
                                    setPricePerTile={setPricePerTile}
                                />

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-2">
                                    <Button onClick={handleCalculate} size="lg" className="flex-1 rounded-full h-12">
                                        Calculate Results
                                    </Button>
                                    <Button onClick={resetCalculator} size="lg" variant="outline" className="rounded-full px-6">
                                        Reset
                                    </Button>
                                </div>
                            </div>

                            {/* Right Column - Results */}
                            <div className="lg:col-span-1">
                                <CalculatorResults result={result} wastePercentage={wastePercentage} />
                            </div>
                        </div>

                        {/* Introduction Section */}
                        <IntroSection />

                        {/* Tips Section */}
                        <ProfessionalTips />

                        {/* Detailed Content Section */}
                        <DetailedContentSection />

                        {/* FAQ Section */}
                        <FAQSection />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
