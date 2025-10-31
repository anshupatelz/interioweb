# Room Size Calculator

A professional room measurement calculator built with Next.js 15, TypeScript, and shadcn/ui components.

## Overview

Calculate accurate measurements for any room shape including floor area, wall area, perimeter, and volume. Get project estimates for paint, carpet, and furniture recommendations based on room size.

## Features

- ✅ **Multiple Room Shapes**: Rectangle, Square, L-Shape, and Circular rooms
- ✅ **Accurate Calculations**: Floor area, wall area, perimeter, and volume
- ✅ **Room Type Presets**: Quick calculations for bedrooms, kitchens, bathrooms, etc.
- ✅ **Unit Support**: Both feet and meters measurements
- ✅ **Project Estimates**: Paint gallons and carpet rolls needed
- ✅ **Furniture Recommendations**: Size-appropriate furniture suggestions
- ✅ **Room Size Categories**: Small, Medium, Large, Extra Large classification
- ✅ **Professional Tips**: Expert measurement and planning advice
- ✅ **SEO Optimized**: 10 FAQs and 8 detailed content sections (2000+ words)
- ✅ **Structured Data**: JSON-LD schemas for better search visibility

## File Structure

```
room-size-calculator/
├── types.ts                 # TypeScript type definitions
├── constants.ts             # Room presets, categories, tips
├── utils.ts                 # Calculation logic
├── CalculatorInputs.tsx     # Input components
├── CalculatorResults.tsx    # Results display
├── ProfessionalTips.tsx     # Tips component
├── IntroSection.tsx         # SEO intro section
├── seo-content.ts           # SEO content (FAQs, articles, keywords)
├── SEOContent.tsx           # SEO components and structured data
├── metadata.ts              # Page metadata
├── page.tsx                 # Main page component
└── README.md                # This file
```

## Calculations

### Rectangle/Square Rooms
- **Floor Area**: Length × Width
- **Perimeter**: 2 × (Length + Width)
- **Wall Area**: Perimeter × Height
- **Volume**: Floor Area × Height

### L-Shaped Rooms
- **Floor Area**: (L1 × W1) + (L2 × W2)
- **Perimeter**: Sum of all outer edges
- **Wall Area**: Perimeter × Height
- **Volume**: Floor Area × Height

### Circular Rooms
- **Floor Area**: π × (Diameter/2)²
- **Perimeter**: π × Diameter
- **Wall Area**: Perimeter × Height
- **Volume**: Floor Area × Height

## Room Size Categories

| Category | Size Range (sq ft) | Typical Rooms |
|----------|-------------------|---------------|
| Small | 0 - 150 | Bathroom, small office |
| Medium | 151 - 300 | Bedroom, kitchen |
| Large | 301 - 500 | Master bedroom, living room |
| Extra Large | 501+ | Large living areas, open concepts |

## Room Type Presets

- **Bedroom**: 12' × 12' × 8' (144 sq ft)
- **Master Bedroom**: 16' × 14' × 9' (224 sq ft)
- **Living Room**: 18' × 14' × 9' (252 sq ft)
- **Kitchen**: 12' × 10' × 8' (120 sq ft)
- **Bathroom**: 8' × 5' × 8' (40 sq ft)
- **Office**: 10' × 10' × 8' (100 sq ft)
- **Dining Room**: 14' × 12' × 9' (168 sq ft)

## Project Estimates

### Paint Calculation
- Coverage: 350 sq ft per gallon
- Includes walls + ceiling
- Rounded up to nearest gallon

### Carpet Calculation
- Standard roll width: 12 feet
- Calculates rolls needed based on room dimensions
- Accounts for waste and seaming

## Furniture Recommendations

### Small Rooms (0-150 sq ft)
- Twin or full-size bed
- Compact desk or nightstand
- Small wardrobe or dresser
- Reading chair (optional)

### Medium Rooms (151-300 sq ft)
- Queen or full-size bed
- Standard desk with chair
- Dresser and nightstands
- Accent chair or small seating area

### Large Rooms (301-500 sq ft)
- King or queen-size bed
- Large desk with storage
- Full dresser set with mirror
- Seating area with 2-3 chairs
- Additional storage furniture

### Extra Large Rooms (501+ sq ft)
- King-size bed with headboard
- Executive desk setup
- Complete dresser ensemble
- Full seating area with sofa/chairs
- Entertainment center or bookshelf
- Multiple storage solutions

## Component Structure

### RoomShapeSelector
Allows users to select from 4 room shapes:
- Rectangle
- Square
- L-Shape
- Circular

### RoomDimensionsInput
Dynamic input fields based on room shape:
- **Rectangle/Square**: Length, Width, Height
- **L-Shape**: Two sets of Length/Width + Height
- **Circular**: Diameter, Height
- Room type presets for quick setup
- Unit toggle (Feet/Meters)

### CalculatorResults
Displays:
- Floor area with size category badge
- Perimeter measurement
- Wall area
- Room volume
- Paint needed estimate
- Carpet rolls needed
- Furniture recommendations

### ProfessionalTips
4 expert tips covering:
- Accurate measurement techniques
- Accounting for irregular features
- Standard ceiling heights
- Room functionality planning

## Usage Example

```tsx
import RoomSizeCalculatorPage from './page'

// The component manages its own state and renders the complete page
<RoomSizeCalculatorPage />
```

## Technical Details

### State Management
- Room shape selection
- Measurement unit (feet/meters)
- Dimensions for each room shape
- Room preset selection
- Auto-calculation with useMemo

### Real-time Calculation
Results update automatically as inputs change using React's `useMemo` hook for optimal performance.

### Responsive Design
- Mobile: Stacked layout with sticky results
- Tablet: Adjusted grid layouts
- Desktop: 3-column grid (2 inputs + 1 results)
- Large screens: Maximum width constraint

## SEO Optimization

- Keyword-optimized title and description
- OpenGraph and Twitter card metadata
- Structured intro section with keywords
- Professional tips for content depth
- Clean URL structure

## Future Enhancements

- [ ] Multiple room calculations in one session
- [ ] Save and export room measurements
- [ ] 3D room visualization
- [ ] HVAC sizing calculations
- [ ] Acoustic treatment recommendations
- [ ] Lighting requirements calculator
- [ ] Detailed flooring material calculator
- [ ] PDF report generation

## Development

Built with:
- Next.js 15.3.4
- TypeScript
- shadcn/ui components
- Lucide React icons
- Tailwind CSS

## Related Tools

- [Tile Calculator](/tools/tile-calculator) - For flooring tile calculations
- [Paint Calculator](/tools/paint-calculator) - Detailed paint requirements

---

Perfect for homeowners, interior designers, contractors, and real estate professionals who need accurate room measurements for renovation planning, furniture shopping, or property listings.
