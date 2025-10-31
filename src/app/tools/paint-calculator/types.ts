// Type definitions for paint calculator

export type SurfaceType = "walls" | "ceiling" | "trim"
export type PaintType = "interior" | "exterior"
export type PaintFinish = "flat" | "eggshell" | "satin" | "semi-gloss" | "gloss"
export type MeasurementUnit = "feet" | "meters"

export interface CalculationResult {
    totalArea: number
    paintNeededPerCoat: number // in gallons or liters
    totalPaintNeeded: number // paint needed * coats
    cansNeeded: number
    primerNeeded?: number
    primerCansNeeded?: number
    totalCost?: number
    costPerArea?: number
}

export interface RoomDimensions {
    length: string
    width: string
    height: string
}

export interface Coverage {
    perGallon: number // sq ft per gallon
    perLiter: number // sq m per liter
}
