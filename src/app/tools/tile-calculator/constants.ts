// Constants for tile calculator

import { TilePreset } from "./types"

// Preset tile sizes (in inches)
export const TILE_PRESETS: Record<string, TilePreset> = {
    "12x12": { length: 12, width: 12, label: '12" × 12"' },
    "18x18": { length: 18, width: 18, label: '18" × 18"' },
    "24x24": { length: 24, width: 24, label: '24" × 24"' },
    "12x24": { length: 12, width: 24, label: '12" × 24"' },
    "6x24": { length: 6, width: 24, label: '6" × 24" (Plank)' },
    "8x48": { length: 8, width: 48, label: '8" × 48" (Plank)' },
    "4x12": { length: 4, width: 12, label: '4" × 12" (Subway)' },
    "3x6": { length: 3, width: 6, label: '3" × 6" (Subway)' },
}

// Default values
export const DEFAULT_GAP_SIZE = "0.25"
export const DEFAULT_WASTE_PERCENTAGE = "10"

// Waste percentage options
export const WASTE_OPTIONS = [
    { value: "5", label: "5% - Minimal waste" },
    { value: "10", label: "10% - Standard (Recommended)" },
    { value: "15", label: "15% - Complex patterns" },
    { value: "20", label: "20% - Diagonal layouts" },
]

// Professional tips content
export const PROFESSIONAL_TIPS = [
    {
        number: 1,
        title: "Measure Accurately",
        description: "Measure each wall individually and account for irregularities. Include doorways and alcoves in your calculations.",
    },
    {
        number: 2,
        title: "Consider Pattern Layout",
        description: "Diagonal patterns, herringbone, or intricate designs require 15-20% extra tiles for cutting and waste.",
    },
    {
        number: 3,
        title: "Account for Grout Lines",
        description: "Standard grout lines are 1/8\" to 1/4\". Larger format tiles typically use smaller grout lines.",
    },
    {
        number: 4,
        title: "Order from Same Batch",
        description: "Tile colors can vary between production batches. Order all tiles at once and verify batch numbers match.",
    },
]
