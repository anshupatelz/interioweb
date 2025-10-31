// Constants for room size calculator

import { RoomShape, RoomType } from "./types"

// Room shape options
export const ROOM_SHAPES = [
    { value: "rectangle", label: "Rectangle", description: "Standard rectangular room" },
    { value: "square", label: "Square", description: "Equal length and width" },
    { value: "l-shape", label: "L-Shape", description: "Two connected rectangles" },
    { value: "circular", label: "Circular", description: "Round or circular room" },
] as const

// Room type presets with typical dimensions (in feet)
export const ROOM_TYPE_PRESETS: Record<string, { length: number; width: number; height: number; description: string }> = {
    "bedroom": { length: 12, width: 12, height: 8, description: "Standard bedroom - 144 sq ft" },
    "master-bedroom": { length: 16, width: 14, height: 9, description: "Master bedroom - 224 sq ft" },
    "living-room": { length: 18, width: 14, height: 9, description: "Living room - 252 sq ft" },
    "kitchen": { length: 12, width: 10, height: 8, description: "Standard kitchen - 120 sq ft" },
    "bathroom": { length: 8, width: 5, height: 8, description: "Full bathroom - 40 sq ft" },
    "office": { length: 10, width: 10, height: 8, description: "Home office - 100 sq ft" },
    "dining-room": { length: 14, width: 12, height: 9, description: "Dining room - 168 sq ft" },
}

// Default values
export const DEFAULT_SHAPE: RoomShape = "rectangle"
export const DEFAULT_MEASUREMENT_UNIT = "feet"
export const DEFAULT_HEIGHT = "8" // Standard ceiling height in feet

// Paint coverage rate (square feet per gallon)
export const PAINT_COVERAGE_PER_GALLON = 350

// Standard carpet roll width (feet)
export const CARPET_ROLL_WIDTH = 12

// Room size categories (in square feet)
export const ROOM_SIZE_CATEGORIES = {
    small: { min: 0, max: 150, label: "Small" },
    medium: { min: 151, max: 300, label: "Medium" },
    large: { min: 301, max: 500, label: "Large" },
    "extra-large": { min: 501, max: Infinity, label: "Extra Large" },
}

// Furniture recommendations by room size
export const FURNITURE_RECOMMENDATIONS: Record<string, string[]> = {
    small: [
        "Twin or full-size bed",
        "Compact desk or nightstand",
        "Small wardrobe or dresser",
        "Reading chair (optional)",
    ],
    medium: [
        "Queen or full-size bed",
        "Standard desk with chair",
        "Dresser and nightstands",
        "Accent chair or small seating area",
    ],
    large: [
        "King or queen-size bed",
        "Large desk with storage",
        "Full dresser set with mirror",
        "Seating area with 2-3 chairs",
        "Additional storage furniture",
    ],
    "extra-large": [
        "King-size bed with headboard",
        "Executive desk setup",
        "Complete dresser ensemble",
        "Full seating area with sofa/chairs",
        "Entertainment center or bookshelf",
        "Multiple storage solutions",
    ],
}

// Professional tips content
export const PROFESSIONAL_TIPS = [
    {
        title: "Measure Twice, Calculate Once",
        description: "Always measure each wall individually as rooms are rarely perfectly square. Use a laser measure for accuracy and measure at multiple points along each wall.",
    },
    {
        title: "Account for Irregular Features",
        description: "Subtract areas for built-in features like fireplaces, large windows, or architectural elements when calculating paintable surfaces or flooring needs.",
    },
    {
        title: "Standard Ceiling Heights",
        description: "Most modern homes have 8-9 foot ceilings, while older homes may have 7-8 feet. Luxury homes often feature 10-12 foot ceilings. Measure your specific ceiling height for accurate calculations.",
    },
    {
        title: "Room Functionality Planning",
        description: "Consider room purpose when planning layouts. Bedrooms need 3-5 feet clearance around beds, living rooms need conversation areas 8-10 feet apart, and kitchens need efficient work triangles.",
    },
]
