// Utility functions for tile calculator calculations

import { MeasurementUnit, TileSizeUnit, CalculationResult } from "./types"

/**
 * Convert measurement to square feet
 */
export const convertToSquareFeet = (value: number, unit: MeasurementUnit): number => {
    if (unit === "meters") return value * 10.764 // m² to ft²
    return value // already in feet
}

/**
 * Convert tile size to inches
 */
export const convertTileSizeToInches = (value: number, unit: TileSizeUnit): number => {
    if (unit === "mm") return value / 25.4
    if (unit === "cm") return value / 2.54
    return value // already in inches
}

/**
 * Calculate tiles needed for a project
 */
export interface CalculateTilesParams {
    roomLength: string
    roomWidth: string
    totalArea: string
    tileLength: string
    tileWidth: string
    gapSize: string
    wastePercentage: string
    tilesPerBox: string
    pricePerBox: string
    pricePerTile: string
    measurementUnit: MeasurementUnit
    tileSizeUnit: TileSizeUnit
}

export const calculateTiles = (params: CalculateTilesParams): CalculationResult | null => {
    const {
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
    } = params

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

        return {
            roomArea,
            tileArea,
            tilesNeeded,
            tilesWithWaste,
            boxesNeeded,
            totalCost,
            costPerSqUnit,
        }
    }

    return null
}
