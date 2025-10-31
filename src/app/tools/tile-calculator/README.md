# Tile Calculator - Modular Structure

This directory contains a professional, modular tile calculator with separated concerns for better maintainability.

## 📁 File Structure

```
tile-calculator/
├── page.tsx                    # Main page component (orchestration)
├── types.ts                    # TypeScript type definitions
├── constants.ts                # Static data and configuration
├── utils.ts                    # Calculation logic and utilities
├── CalculatorInputs.tsx        # All input components
├── CalculatorResults.tsx       # Results display component
└── ProfessionalTips.tsx        # Tips section component
```

## 📄 File Descriptions

### `types.ts`
Defines all TypeScript types and interfaces:
- `TileType`: "floor" | "wall"
- `MeasurementUnit`: "feet" | "meters"
- `TileSizeUnit`: "inches" | "mm" | "cm"
- `CalculationResult`: Interface for calculation results
- `TilePreset`: Interface for preset tile sizes

### `constants.ts`
Contains all static data:
- `TILE_PRESETS`: 8 common tile sizes (12×12, 18×18, 24×24, etc.)
- `DEFAULT_GAP_SIZE`: Default grout spacing (0.25 inches)
- `DEFAULT_WASTE_PERCENTAGE`: Default waste allowance (10%)
- `WASTE_OPTIONS`: Waste percentage dropdown options
- `PROFESSIONAL_TIPS`: 4 professional tips with content

### `utils.ts`
Pure calculation functions:
- `convertToSquareFeet()`: Convert measurements to square feet
- `convertTileSizeToInches()`: Convert tile sizes to inches
- `calculateTiles()`: Main calculation logic (tiles needed, cost, boxes)

### `CalculatorInputs.tsx`
All input components (5 components):
- `TileTypeSelector`: Floor/Wall toggle
- `AreaInput`: Room dimensions or total area tabs
- `TileSizeInput`: Preset tiles + custom dimensions
- `AdvancedOptions`: Gap size & waste percentage
- `CostCalculation`: Optional pricing inputs

### `CalculatorResults.tsx`
Results display component:
- Total area calculation
- Exact tiles needed
- Recommended tiles (with waste)
- Boxes needed (optional)
- Total cost estimate (optional)
- Cost per square foot
- Professional tips

### `ProfessionalTips.tsx`
Professional tips section with 4 tips:
1. Measure Accurately
2. Consider Pattern Layout
3. Account for Grout Lines
4. Order from Same Batch

### `page.tsx`
Main orchestration component:
- State management (all input states)
- Handler functions (calculate, reset, preset change)
- Layout composition (hero, calculator, lead form)
- Component integration

## 🔄 Data Flow

```
User Input → CalculatorInputs → State (page.tsx) → handleCalculate() → 
calculateTiles(utils.ts) → CalculationResult → CalculatorResults (display)
```

## 🎯 Benefits of This Structure

### ✅ Separation of Concerns
- **Types**: Centralized type definitions
- **Constants**: Easy to update presets and defaults
- **Utils**: Testable pure functions
- **Components**: Reusable, focused components
- **Page**: Orchestration only

### ✅ Maintainability
- Each file has a single, clear purpose
- Easy to locate specific functionality
- Changes are isolated to relevant files
- No massive 700+ line files

### ✅ Reusability
- Input components can be used in other calculators
- Utility functions can be tested independently
- Constants can be shared across tools
- Types ensure consistency

### ✅ Scalability
- Easy to add new tile presets (just update constants.ts)
- Simple to add new calculation features (extend utils.ts)
- Can create more calculator tools using same patterns
- Component library for future tools

### ✅ Testing
- Pure functions in utils.ts are easily testable
- Components can be unit tested
- Constants can be validated
- Type safety prevents runtime errors

## 🚀 Usage Example

### Adding a New Tile Preset

**constants.ts:**
```typescript
export const TILE_PRESETS: Record<string, TilePreset> = {
    // ...existing presets
    "6x36": { length: 6, width: 36, label: '6" × 36" (Wood Look)' },
}
```

### Adding a New Calculation

**utils.ts:**
```typescript
export const calculateGroutNeeded = (
    roomArea: number,
    tileSize: number,
    gapSize: number
): number => {
    // Add your calculation logic
    return groutNeeded
}
```

### Creating a New Input Component

**CalculatorInputs.tsx:**
```typescript
export function GroutCalculator({ ... }: GroutCalculatorProps) {
    return (
        <Card>
            {/* Your component JSX */}
        </Card>
    )
}
```

## 📊 State Management

All state is managed in `page.tsx` using React hooks:
- **Basic Inputs**: tileType, units
- **Dimensions**: roomLength, roomWidth, totalArea
- **Tile Info**: tilePreset, tileLength, tileWidth
- **Options**: gapSize, wastePercentage
- **Pricing**: tilesPerBox, pricePerBox, pricePerTile
- **Results**: CalculationResult object

State is passed to components via props, keeping components pure and predictable.

## 🎨 Component Props Pattern

All components follow a consistent props pattern:
```typescript
interface ComponentProps {
    value: string
    setValue: (value: string) => void
    // Additional specific props
}
```

This makes components:
- Easy to understand
- Type-safe
- Testable
- Reusable

## 🔧 Future Enhancements

Potential improvements using this structure:
1. **Add unit tests** for utils.ts functions
2. **Create more calculators** (paint, flooring) using same components
3. **Add localStorage** to persist user inputs
4. **Implement share feature** to save/load calculations
5. **Add PDF export** of calculation results
6. **Internationalization** (i18n) support in constants.ts
7. **Custom hook** for calculator logic (useCalculator)
8. **Storybook** integration for component documentation

## 📝 Notes

- All components use shadcn/ui for consistent styling
- Inline unit selectors prevent unit mismatch errors
- Results panel is sticky on desktop (lg:sticky lg:top-8)
- Mobile-responsive with single column layout
- Professional color coding (emerald for cost, secondary for highlights)
