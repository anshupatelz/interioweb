// Metadata is exported from metadata.ts
// This file must be "use client" for interactivity
"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowLeft, Paintbrush } from "lucide-react"
import { PaintType, PaintFinish, MeasurementUnit, CalculationResult } from "./types"
import { DEFAULT_PAINT_TYPE, DEFAULT_FINISH, DEFAULT_COATS, DEFAULT_MEASUREMENT_UNIT } from "./constants"
import { calculatePaint } from "./utils"
import {
    PaintTypeSelector,
    RoomDimensionsInput,
    SurfaceOptions,
    PaintSpecifications,
    CostCalculation,
} from "./CalculatorInputs"
import { CalculatorResults } from "./CalculatorResults"
import { ProfessionalTips } from "./ProfessionalTips"
import { IntroSection } from "./IntroSection"
import { FAQSection, DetailedContentSection, PaintCalculatorSchema, FAQSchema, BreadcrumbSchema } from "./SEOContent"

export default function PaintCalculatorPage() {
    // Paint type state
    const [paintType, setPaintType] = useState<PaintType>(DEFAULT_PAINT_TYPE)

    // Measurement unit state
    const [measurementUnit, setMeasurementUnit] = useState<MeasurementUnit>(DEFAULT_MEASUREMENT_UNIT)

    // Room dimensions state
    const [length, setLength] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")

    // Surface options state
    const [paintCeiling, setPaintCeiling] = useState(false)
    const [numberOfDoors, setNumberOfDoors] = useState("2")
    const [numberOfWindows, setNumberOfWindows] = useState("2")

    // Paint specifications state
    const [paintFinish, setPaintFinish] = useState<PaintFinish>(DEFAULT_FINISH)
    const [coats, setCoats] = useState(DEFAULT_COATS.toString())
    const [needsPrimer, setNeedsPrimer] = useState(false)

    // Cost calculation state
    const [pricePerGallon, setPricePerGallon] = useState("")

    // Calculate results
    const result: CalculationResult | null = useMemo(() => {
        const roomLength = parseFloat(length)
        const roomWidth = parseFloat(width)
        const roomHeight = parseFloat(height)
        const doors = parseInt(numberOfDoors) || 0
        const windows = parseInt(numberOfWindows) || 0
        const coatsNum = parseInt(coats) || 1
        const price = pricePerGallon ? parseFloat(pricePerGallon) : undefined

        if (
            isNaN(roomLength) ||
            isNaN(roomWidth) ||
            isNaN(roomHeight) ||
            roomLength <= 0 ||
            roomWidth <= 0 ||
            roomHeight <= 0
        ) {
            return null
        }

        return calculatePaint({
            roomLength,
            roomWidth,
            roomHeight,
            measurementUnit,
            paintCeiling,
            doors,
            windows,
            paintFinish,
            coats: coatsNum,
            needsPrimer,
            pricePerGallon: price,
        })
    }, [
        length,
        width,
        height,
        measurementUnit,
        paintCeiling,
        numberOfDoors,
        numberOfWindows,
        paintFinish,
        coats,
        needsPrimer,
        pricePerGallon,
    ])

    // Calculate function (calculation already happens automatically with useMemo)
    const handleCalculate = () => {
        // Scroll to results on mobile
        if (window.innerWidth < 1024) {
            const resultsElement = document.querySelector('[data-results]')
            if (resultsElement) {
                resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }

    // Reset all values
    const handleReset = () => {
        setPaintType(DEFAULT_PAINT_TYPE)
        setMeasurementUnit(DEFAULT_MEASUREMENT_UNIT)
        setLength("")
        setWidth("")
        setHeight("")
        setPaintCeiling(false)
        setNumberOfDoors("2")
        setNumberOfWindows("2")
        setPaintFinish(DEFAULT_FINISH)
        setCoats(DEFAULT_COATS.toString())
        setNeedsPrimer(false)
        setPricePerGallon("")
    }

    return (
        <div className="min-h-screen">
            {/* SEO Schema Markup */}
            <PaintCalculatorSchema />
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
                            <Paintbrush className="h-8 w-8" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Advanced Paint Calculator
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Professional paint calculator with coverage rates, multiple finishes, primer calculation,
                            and cost estimation for accurate project planning.
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
                                {/* Paint Type Selector */}
                                <PaintTypeSelector paintType={paintType} setPaintType={setPaintType} />

                                {/* Room Dimensions */}
                                <RoomDimensionsInput
                                    measurementUnit={measurementUnit}
                                    setMeasurementUnit={setMeasurementUnit}
                                    length={length}
                                    setLength={setLength}
                                    width={width}
                                    setWidth={setWidth}
                                    height={height}
                                    setHeight={setHeight}
                                />

                                {/* Surface Options */}
                                <SurfaceOptions
                                    paintCeiling={paintCeiling}
                                    setPaintCeiling={setPaintCeiling}
                                    numberOfDoors={numberOfDoors}
                                    setNumberOfDoors={setNumberOfDoors}
                                    numberOfWindows={numberOfWindows}
                                    setNumberOfWindows={setNumberOfWindows}
                                />

                                {/* Paint Specifications */}
                                <PaintSpecifications
                                    paintFinish={paintFinish}
                                    setPaintFinish={setPaintFinish}
                                    coats={coats}
                                    setCoats={setCoats}
                                    needsPrimer={needsPrimer}
                                    setNeedsPrimer={setNeedsPrimer}
                                />

                                {/* Cost Calculation */}
                                <CostCalculation
                                    pricePerGallon={pricePerGallon}
                                    setPricePerGallon={setPricePerGallon}
                                />

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-2">
                                    <Button onClick={handleCalculate} size="lg" className="flex-1 rounded-full h-12">
                                        Calculate Results
                                    </Button>
                                    <Button onClick={handleReset} size="lg" variant="outline" className="rounded-full px-6">
                                        Reset
                                    </Button>
                                </div>
                            </div>

                            {/* Right Column - Results */}
                            <div className="lg:col-span-1">
                                <CalculatorResults result={result} />
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
