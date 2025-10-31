// Type definitions for tile calculator

export type TileType = "floor" | "wall"
export type MeasurementUnit = "feet" | "meters"
export type TileSizeUnit = "inches" | "mm" | "cm"

export interface CalculationResult {
    roomArea: number
    tileArea: number
    tilesNeeded: number
    tilesWithWaste: number
    boxesNeeded?: number
    totalCost?: number
    costPerSqUnit?: number
}

export interface TilePreset {
    length: number
    width: number
    label: string
}
