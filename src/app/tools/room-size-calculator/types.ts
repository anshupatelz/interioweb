// Type definitions for room size calculator

export type RoomShape = "rectangle" | "square" | "l-shape" | "circular"
export type MeasurementUnit = "feet" | "meters"
export type RoomType = "bedroom" | "living-room" | "kitchen" | "bathroom" | "office" | "dining-room" | "other"

export interface CalculationResult {
    floorArea: number // in square feet or square meters
    wallArea: number // total wall area
    perimeter: number // room perimeter
    ceilingArea: number // same as floor area
    volume: number // room volume (cubic feet or meters)
    paintableArea: number // wall + ceiling area
    carpetRolls?: number // number of carpet rolls needed
    paintGallons?: number // gallons of paint needed
    roomCategory?: string // small, medium, large, extra-large
    recommendedFurniture?: string[] // furniture recommendations
}

export interface RoomDimensions {
    length: string
    width: string
    height: string
}

export interface LShapeDimensions {
    length1: string
    width1: string
    length2: string
    width2: string
    height: string
}

export interface CircularDimensions {
    diameter: string
    height: string
}
