// Utility functions for paint calculator calculations

import { MeasurementUnit, PaintFinish, CalculationResult } from "./types"
import { PAINT_COVERAGE, PRIMER_COVERAGE, STANDARD_DOOR_SIZE, STANDARD_WINDOW_SIZE } from "./constants"

/**
 * Convert measurement to square feet
 */
export const convertToSquareFeet = (value: number, unit: MeasurementUnit): number => {
    if (unit === "meters") return value * 10.764 // m² to ft²
    return value // already in feet
}

/**
 * Convert square feet to gallons or liters based on unit
 */
export const convertAreaToVolume = (area: number, coverage: number): number => {
    return area / coverage
}

/**
 * Calculate paint needed for a project
 */
export interface CalculatePaintParams {
    roomLength: number
    roomWidth: number
    roomHeight: number
    measurementUnit: MeasurementUnit
    paintCeiling: boolean
    doors: number
    windows: number
    paintFinish: PaintFinish
    coats: number
    needsPrimer: boolean
    pricePerGallon?: number
}

export const calculatePaint = (params: CalculatePaintParams): CalculationResult | null => {
    const {
        roomLength,
        roomWidth,
        roomHeight,
        measurementUnit,
        paintCeiling,
        doors,
        windows,
        paintFinish,
        coats,
        needsPrimer,
        pricePerGallon,
    } = params

    if (roomLength > 0 && roomWidth > 0 && roomHeight > 0) {
        // Calculate wall area (all 4 walls)
        const wall1Area = roomLength * roomHeight
        const wall2Area = roomWidth * roomHeight
        const totalWallArea = (wall1Area * 2) + (wall2Area * 2)

        // Calculate ceiling area if needed
        const ceilingArea = paintCeiling ? roomLength * roomWidth : 0

        // Calculate total area before subtracting openings
        let totalArea = totalWallArea + ceilingArea

        // Subtract doors and windows
        const doorArea = doors * STANDARD_DOOR_SIZE
        const windowArea = windows * STANDARD_WINDOW_SIZE
        totalArea = totalArea - doorArea - windowArea

        // Convert to square feet if needed
        const totalAreaInSqFt = convertToSquareFeet(totalArea, measurementUnit)

        // Get coverage based on paint finish
        const coverage = PAINT_COVERAGE[paintFinish]
        const coveragePerGallon = measurementUnit === "feet" ? coverage.perGallon : coverage.perLiter

        // Calculate paint needed for one coat
        const paintNeededPerCoat = convertAreaToVolume(totalAreaInSqFt, coveragePerGallon)

        // Calculate total paint with coats
        const totalPaintNeeded = paintNeededPerCoat * coats

        // Calculate cans needed (round up to nearest whole gallon/liter)
        const cansNeeded = Math.ceil(totalPaintNeeded)

        // Calculate primer if needed
        let primerNeeded: number | undefined
        let primerCansNeeded: number | undefined
        if (needsPrimer) {
            const primerCoverage = measurementUnit === "feet" ? PRIMER_COVERAGE.perGallon : PRIMER_COVERAGE.perLiter
            primerNeeded = convertAreaToVolume(totalAreaInSqFt, primerCoverage)
            primerCansNeeded = Math.ceil(primerNeeded)
        }

        // Calculate cost if price provided
        let totalCost: number | undefined
        let costPerArea: number | undefined
        if (pricePerGallon && pricePerGallon > 0) {
            const price = pricePerGallon
            totalCost = cansNeeded * price
            if (primerCansNeeded) {
                totalCost += primerCansNeeded * (price * 0.8) // Primer typically costs 20% less
            }
            costPerArea = totalCost / totalAreaInSqFt
        }

        return {
            totalArea: totalAreaInSqFt,
            paintNeededPerCoat,
            totalPaintNeeded,
            cansNeeded,
            primerNeeded,
            primerCansNeeded,
            totalCost,
            costPerArea,
        }
    }

    return null
}

/**
 * Round to specified decimal places
 */
export const roundTo = (value: number, decimals: number = 2): number => {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}
