// Utility functions for room size calculations

import { MeasurementUnit, CalculationResult } from "./types"
import { PAINT_COVERAGE_PER_GALLON, CARPET_ROLL_WIDTH, ROOM_SIZE_CATEGORIES, FURNITURE_RECOMMENDATIONS } from "./constants"

/**
 * Convert between measurement units
 */
export const convertToSquareFeet = (value: number, unit: MeasurementUnit): number => {
    if (unit === "meters") return value * 10.764 // m² to ft²
    return value
}

export const convertToFeet = (value: number, unit: MeasurementUnit): number => {
    if (unit === "meters") return value * 3.281 // m to ft
    return value
}

export const convertToCubicFeet = (value: number, unit: MeasurementUnit): number => {
    if (unit === "meters") return value * 35.315 // m³ to ft³
    return value
}

/**
 * Determine room size category
 */
export const getRoomCategory = (area: number): string => {
    for (const [key, category] of Object.entries(ROOM_SIZE_CATEGORIES)) {
        if (area >= category.min && area <= category.max) {
            return key
        }
    }
    return "extra-large"
}

/**
 * Calculate room dimensions for rectangular rooms
 */
export interface RectangularRoomParams {
    length: string
    width: string
    height: string
    measurementUnit: MeasurementUnit
}

export const calculateRectangularRoom = (params: RectangularRoomParams): CalculationResult | null => {
    const { length, width, height, measurementUnit } = params

    const l = parseFloat(length)
    const w = parseFloat(width)
    const h = parseFloat(height)

    if (isNaN(l) || isNaN(w) || isNaN(h) || l <= 0 || w <= 0 || h <= 0) {
        return null
    }

    // Calculate floor area
    const floorArea = l * w

    // Calculate perimeter
    const perimeter = 2 * (l + w)

    // Calculate wall area (4 walls)
    const wallArea = perimeter * h

    // Calculate volume
    const volume = floorArea * h

    // Calculate paintable area (walls + ceiling)
    const paintableArea = wallArea + floorArea

    // Calculate paint needed (gallons)
    const paintGallons = Math.ceil(paintableArea / PAINT_COVERAGE_PER_GALLON)

    // Calculate carpet rolls needed
    const carpetRolls = Math.ceil(w / CARPET_ROLL_WIDTH) * Math.ceil(l / CARPET_ROLL_WIDTH)

    // Get room category and furniture recommendations
    const roomCategory = getRoomCategory(floorArea)
    const recommendedFurniture = FURNITURE_RECOMMENDATIONS[roomCategory]

    return {
        floorArea,
        wallArea,
        perimeter,
        ceilingArea: floorArea,
        volume,
        paintableArea,
        paintGallons,
        carpetRolls,
        roomCategory,
        recommendedFurniture,
    }
}

/**
 * Calculate room dimensions for L-shaped rooms
 */
export interface LShapeRoomParams {
    length1: string
    width1: string
    length2: string
    width2: string
    height: string
    measurementUnit: MeasurementUnit
}

export const calculateLShapeRoom = (params: LShapeRoomParams): CalculationResult | null => {
    const { length1, width1, length2, width2, height, measurementUnit } = params

    const l1 = parseFloat(length1)
    const w1 = parseFloat(width1)
    const l2 = parseFloat(length2)
    const w2 = parseFloat(width2)
    const h = parseFloat(height)

    if (isNaN(l1) || isNaN(w1) || isNaN(l2) || isNaN(w2) || isNaN(h) ||
        l1 <= 0 || w1 <= 0 || l2 <= 0 || w2 <= 0 || h <= 0) {
        return null
    }

    // Calculate floor area (two rectangles)
    const area1 = l1 * w1
    const area2 = l2 * w2
    const floorArea = area1 + area2

    // Calculate perimeter (outer edges only)
    const perimeter = l1 + w1 + l2 + w2 + Math.abs(l1 - l2) + Math.abs(w1 - w2)

    // Calculate wall area
    const wallArea = perimeter * h

    // Calculate volume
    const volume = floorArea * h

    // Calculate paintable area
    const paintableArea = wallArea + floorArea

    // Calculate paint needed
    const paintGallons = Math.ceil(paintableArea / PAINT_COVERAGE_PER_GALLON)

    // Calculate carpet rolls needed
    const maxWidth = Math.max(w1, w2)
    const maxLength = Math.max(l1, l2)
    const carpetRolls = Math.ceil(maxWidth / CARPET_ROLL_WIDTH) * Math.ceil(maxLength / CARPET_ROLL_WIDTH)

    // Get room category and furniture recommendations
    const roomCategory = getRoomCategory(floorArea)
    const recommendedFurniture = FURNITURE_RECOMMENDATIONS[roomCategory]

    return {
        floorArea,
        wallArea,
        perimeter,
        ceilingArea: floorArea,
        volume,
        paintableArea,
        paintGallons,
        carpetRolls,
        roomCategory,
        recommendedFurniture,
    }
}

/**
 * Calculate room dimensions for circular rooms
 */
export interface CircularRoomParams {
    diameter: string
    height: string
    measurementUnit: MeasurementUnit
}

export const calculateCircularRoom = (params: CircularRoomParams): CalculationResult | null => {
    const { diameter, height, measurementUnit } = params

    const d = parseFloat(diameter)
    const h = parseFloat(height)

    if (isNaN(d) || isNaN(h) || d <= 0 || h <= 0) {
        return null
    }

    const radius = d / 2

    // Calculate floor area (π * r²)
    const floorArea = Math.PI * radius * radius

    // Calculate perimeter (circumference: 2 * π * r)
    const perimeter = 2 * Math.PI * radius

    // Calculate wall area (circumference * height)
    const wallArea = perimeter * h

    // Calculate volume
    const volume = floorArea * h

    // Calculate paintable area
    const paintableArea = wallArea + floorArea

    // Calculate paint needed
    const paintGallons = Math.ceil(paintableArea / PAINT_COVERAGE_PER_GALLON)

    // Get room category and furniture recommendations
    const roomCategory = getRoomCategory(floorArea)
    const recommendedFurniture = FURNITURE_RECOMMENDATIONS[roomCategory]

    return {
        floorArea,
        wallArea,
        perimeter,
        ceilingArea: floorArea,
        volume,
        paintableArea,
        paintGallons,
        roomCategory,
        recommendedFurniture: recommendedFurniture,
    }
}

/**
 * Round to specified decimal places
 */
export const roundTo = (value: number, decimals: number = 2): number => {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}
