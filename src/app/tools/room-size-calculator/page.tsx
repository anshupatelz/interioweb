// Metadata is exported from metadata.ts
// This file must be "use client" for interactivity
"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowLeft, Home } from "lucide-react"
import { RoomShape, MeasurementUnit, CalculationResult } from "./types"
import { DEFAULT_SHAPE, DEFAULT_MEASUREMENT_UNIT, DEFAULT_HEIGHT } from "./constants"
import { calculateRectangularRoom, calculateLShapeRoom, calculateCircularRoom } from "./utils"
import { RoomShapeSelector, RoomDimensionsInput } from "./CalculatorInputs"
import { CalculatorResults } from "./CalculatorResults"
import { ProfessionalTips } from "./ProfessionalTips"
import { IntroSection } from "./IntroSection"
import { FAQSection, DetailedContentSection, generateStructuredData } from "./SEOContent"

export default function RoomSizeCalculatorPage() {
    // Add structured data for SEO
    const structuredData = generateStructuredData()

    // Basic inputs
    const [roomShape, setRoomShape] = useState<RoomShape>(DEFAULT_SHAPE)
    const [measurementUnit, setMeasurementUnit] = useState<MeasurementUnit>(DEFAULT_MEASUREMENT_UNIT)

    // Rectangle/Square dimensions
    const [length, setLength] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState(DEFAULT_HEIGHT)

    // L-shape dimensions
    const [length2, setLength2] = useState("")
    const [width2, setWidth2] = useState("")

    // Circular dimensions
    const [diameter, setDiameter] = useState("")

    // Room preset
    const [roomPreset, setRoomPreset] = useState("custom")

    // Calculate results based on room shape
    const result: CalculationResult | null = useMemo(() => {
        if (roomShape === "circular") {
            return calculateCircularRoom({
                diameter,
                height,
                measurementUnit,
            })
        } else if (roomShape === "l-shape") {
            return calculateLShapeRoom({
                length1: length,
                width1: width,
                length2,
                width2,
                height,
                measurementUnit,
            })
        } else {
            // Rectangle or Square
            return calculateRectangularRoom({
                length,
                width,
                height,
                measurementUnit,
            })
        }
    }, [roomShape, length, width, height, length2, width2, diameter, measurementUnit])

    const resetCalculator = () => {
        setLength("")
        setWidth("")
        setHeight(DEFAULT_HEIGHT)
        setLength2("")
        setWidth2("")
        setDiameter("")
        setRoomPreset("custom")
        setRoomShape(DEFAULT_SHAPE)
        setMeasurementUnit(DEFAULT_MEASUREMENT_UNIT)
    }

    return (
        <div className="min-h-screen">
            {structuredData}
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
                            <Home className="h-8 w-8" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Advanced Room Size Calculator
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Professional room measurement calculator for accurate floor area, wall area, perimeter,
                            and volume calculations. Supports all room shapes.
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
                                {/* Room Shape Selector */}
                                <RoomShapeSelector roomShape={roomShape} setRoomShape={setRoomShape} />

                                {/* Room Dimensions */}
                                <RoomDimensionsInput
                                    measurementUnit={measurementUnit}
                                    setMeasurementUnit={setMeasurementUnit}
                                    roomShape={roomShape}
                                    length={length}
                                    setLength={setLength}
                                    width={width}
                                    setWidth={setWidth}
                                    height={height}
                                    setHeight={setHeight}
                                    length2={length2}
                                    setLength2={setLength2}
                                    width2={width2}
                                    setWidth2={setWidth2}
                                    diameter={diameter}
                                    setDiameter={setDiameter}
                                    roomPreset={roomPreset}
                                    setRoomPreset={setRoomPreset}
                                />

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-2">
                                    <Button
                                        onClick={() => {
                                            // Trigger a re-render or scroll to results on mobile
                                            if (window.innerWidth < 1024 && result) {
                                                document.querySelector('[data-results]')?.scrollIntoView({ behavior: 'smooth' })
                                            }
                                        }}
                                        size="lg"
                                        className="flex-1 rounded-full h-12"
                                        disabled={!result}
                                    >
                                        Calculate Results
                                    </Button>
                                    <Button onClick={resetCalculator} size="lg" variant="outline" className="rounded-full px-6">
                                        Reset
                                    </Button>
                                </div>
                            </div>

                            {/* Right Column - Results */}
                            <div className="lg:col-span-1">
                                <CalculatorResults result={result} measurementUnit={measurementUnit} />
                            </div>
                        </div>

                        {/* Introduction Section */}
                        <IntroSection />

                        {/* Tips Section */}
                        <ProfessionalTips />

                        {/* FAQ Section */}
                        <div className="mt-12">
                            <FAQSection />
                        </div>

                        {/* Detailed Content Section */}
                        <div className="mt-12">
                            <DetailedContentSection />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
