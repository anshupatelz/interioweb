// Constants for paint calculator

import { PaintFinish, Coverage } from "./types"

// Paint coverage per gallon/liter (varies by finish)
export const PAINT_COVERAGE: Record<PaintFinish, Coverage> = {
    flat: { perGallon: 400, perLiter: 12 }, // sq ft per gallon, sq m per liter
    eggshell: { perGallon: 400, perLiter: 12 },
    satin: { perGallon: 350, perLiter: 10.5 },
    "semi-gloss": { perGallon: 350, perLiter: 10.5 },
    gloss: { perGallon: 300, perLiter: 9 },
}

// Primer coverage (typically covers more than paint)
export const PRIMER_COVERAGE = {
    perGallon: 350, // sq ft per gallon
    perLiter: 10.5, // sq m per liter
}

// Default values
export const DEFAULT_PAINT_TYPE = "interior"
export const DEFAULT_MEASUREMENT_UNIT = "feet"
export const DEFAULT_COATS = "2"
export const DEFAULT_FINISH: PaintFinish = "eggshell"
export const DEFAULT_DOORS = "2"
export const DEFAULT_WINDOWS = "2"

// Paint finish options with descriptions
export const PAINT_FINISHES = [
    { value: "flat", label: "Flat/Matte", description: "No shine, hides imperfections" },
    { value: "eggshell", label: "Eggshell", description: "Slight sheen, easy to clean" },
    { value: "satin", label: "Satin", description: "Soft sheen, durable" },
    { value: "semi-gloss", label: "Semi-Gloss", description: "Shiny, moisture-resistant" },
    { value: "gloss", label: "Gloss", description: "High shine, very durable" },
]

// Number of coats options
export const COATS_OPTIONS = [
    { value: "1", label: "1 Coat - Touch-up only" },
    { value: "2", label: "2 Coats - Standard (Recommended)" },
    { value: "3", label: "3 Coats - Dark colors or dramatic change" },
]

// Standard door and window sizes (in sq ft)
export const STANDARD_DOOR_SIZE = 20 // sq ft
export const STANDARD_WINDOW_SIZE = 15 // sq ft

// Professional tips content
export const PROFESSIONAL_TIPS = [
    {
        number: 1,
        title: "Measure Accurately",
        description: "Measure wall length, width, and height. Don't forget to measure all walls separately as room dimensions can vary.",
    },
    {
        number: 2,
        title: "Account for Multiple Coats",
        description: "Most paint jobs require 2 coats for even coverage. Dark colors or dramatic color changes may need 3 coats.",
    },
    {
        number: 3,
        title: "Choose the Right Finish",
        description: "Use flat for ceilings, eggshell/satin for walls, and semi-gloss for trim and high-moisture areas like bathrooms.",
    },
    {
        number: 4,
        title: "Always Buy Extra",
        description: "Purchase 10-15% more paint than calculated for touch-ups and future repairs. Paint batches can vary in color.",
    },
]
