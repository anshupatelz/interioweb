# Paint Calculator - Modular Architecture

A comprehensive, SEO-optimized paint calculator built with Next.js 15, TypeScript, and shadcn/ui components.

## 📁 File Structure

```
paint-calculator/
├── types.ts                 # TypeScript type definitions
├── constants.ts             # Paint coverage rates, finish options, defaults
├── utils.ts                 # Calculation logic
├── CalculatorInputs.tsx     # Input components (5 sections)
├── CalculatorResults.tsx    # Results display component
├── ProfessionalTips.tsx     # Expert tips component
├── IntroSection.tsx         # SEO-optimized intro with features
├── SEOContent.tsx          # FAQ and content sections with schemas
├── seo-content.ts          # 10 FAQs + 8 detailed content sections
├── metadata.ts             # Page metadata (deprecated, using layout.tsx)
├── layout.tsx              # Page layout with metadata
├── page.tsx                # Main page orchestration
└── README.md               # This file
```

## 🏗️ Architecture Overview

### Core Files

#### `types.ts`
Defines TypeScript interfaces and types:
- `PaintType`: "interior" | "exterior"
- `PaintFinish`: "flat" | "eggshell" | "satin" | "semi-gloss" | "gloss"
- `MeasurementUnit`: "feet" | "meters"
- `CalculationResult`: Interface for calculation output
- `RoomDimensions`: Room measurement interface
- `Coverage`: Coverage rates interface

#### `constants.ts`
Contains all static data:
- `PAINT_COVERAGE`: Coverage rates per finish type (varying from 300-400 sq ft/gallon)
- `PRIMER_COVERAGE`: Primer coverage rate (350 sq ft/gallon)
- `PAINT_FINISHES`: Array of finish options with descriptions
- `COATS_OPTIONS`: 1-3 coats with recommendations
- `STANDARD_DOOR_SIZE`: 20 sq ft
- `STANDARD_WINDOW_SIZE`: 15 sq ft
- `PROFESSIONAL_TIPS`: 4 expert painting tips
- `DEFAULT_*`: Default values for all inputs

#### `utils.ts`
Core calculation logic:
- `calculatePaint()`: Main calculation function
  - Calculates wall area (all 4 walls)
  - Adds ceiling area if selected
  - Subtracts door and window areas
  - Converts units if needed
  - Applies coverage rates based on finish
  - Calculates primer if needed
  - Estimates costs
- `convertToSquareFeet()`: Unit conversion
- `convertAreaToVolume()`: Area to paint volume conversion

### Component Files

#### `CalculatorInputs.tsx`
Five input components:

1. **PaintTypeSelector**
   - Interior/Exterior toggle buttons
   - Icon-based visual selection

2. **RoomDimensionsInput**
   - Length, width, height inputs
   - Inline unit selector (feet/meters)
   - Visual room measurement guide

3. **SurfaceOptions**
   - Paint ceiling toggle switch
   - Door count input (standard 20 sq ft each)
   - Window count input (standard 15 sq ft each)
   - Helper text with standard sizes

4. **PaintSpecifications**
   - Paint finish dropdown (5 options with descriptions)
   - Number of coats selector (1-3)
   - Primer toggle switch
   - Visual finish indicators

5. **CostCalculation**
   - Price per gallon input
   - Dynamic currency symbol from i18n context
   - Optional badge indicator
   - Average price reference

#### `CalculatorResults.tsx`
Results display with:
- Total surface area
- Paint needed per coat
- Total paint required (with coats)
- Number of cans to buy
- Extra paint indicator
- Primer requirements (conditional)
- Cost breakdown (conditional)
- Cost per square foot
- Pro tip card

#### `ProfessionalTips.tsx`
- 4 professional tips in card grid
- Numbered tip indicators
- Hover effects
- Responsive 2-column layout

### SEO Components

#### `IntroSection.tsx`
- H1 with primary keywords
- 3 status badges (Free, Instant, Professional)
- Extended description paragraph with keyword density
- 4 feature cards:
  - Accurate Calculations
  - Multiple Finishes
  - Cost Estimation
  - Smart Features
- Additional SEO-rich content paragraphs

#### `SEOContent.tsx`
Three main components:

1. **FAQSection**
   - 10 comprehensive FAQs using Accordion component
   - Structured for FAQ rich snippets
   - Questions target long-tail keywords

2. **DetailedContentSection**
   - 8 in-depth content sections
   - 2000+ words total content
   - Topics:
     - Understanding Paint Coverage Rates
     - Choosing the Right Paint Finish
     - The Critical Role of Primer
     - Accurate Room Measurement Techniques
     - Calculating Paint for Multiple Coats
     - Comprehensive Paint Project Cost Estimation
     - Professional Painting Tips for Superior Results
     - Common Painting Mistakes and How to Avoid Them

3. **Structured Data Schemas**:
   - `PaintCalculatorSchema`: WebApplication schema
   - `FAQSchema`: FAQPage schema with all questions
   - `BreadcrumbSchema`: Site navigation breadcrumb

#### `seo-content.ts`
Static content data:
- `PAINT_CALCULATOR_FAQS`: 10 FAQ objects
- `PAINT_CALCULATOR_CONTENT`: 8 detailed content sections
- `PAINT_CALCULATOR_KEYWORDS`: 15 target keywords

#### `layout.tsx`
Page-level metadata:
- SEO-optimized title and description
- 15 targeted keywords
- OpenGraph tags for social sharing
- Twitter card metadata
- Canonical URL
- Robots directives

### Main Page

#### `page.tsx`
Orchestrates all components:
- State management for all inputs
- Real-time calculation using `useMemo`
- Reset functionality
- Responsive grid layout
- Structured data injection
- Progressive component rendering:
  1. Schemas (hidden)
  2. Intro section
  3. Calculator tool
  4. Professional tips
  5. FAQ section
  6. Detailed content

## 🎨 Design Features

### Color System
- Uses OKLCH color space for consistent colors
- Secondary color accents throughout
- Gradient backgrounds on key cards
- Hover states on interactive elements

### Responsive Layout
- Mobile-first design
- Tablet: Adjusted grid layouts
- Desktop: Two-column calculator layout
- Large screens: Maximum width constraint (7xl)

### Component Patterns
- Consistent card styling with `rounded-xl`
- Icon prefixes for visual hierarchy
- Badge usage for status indicators
- Separator lines for section breaks
- Loading states for empty results

## 🌐 International Features

### Currency Support
- Uses `useCurrency` hook from international context
- Dynamic currency symbol display
- Supports 15 country currencies
- Automatic currency detection from IP

### Unit Support
- Feet and meters for room dimensions
- Automatic conversion to square feet internally
- Coverage rates adjust based on unit selection

## 📊 Calculation Logic

### Wall Area
```
Wall Area = (Length × Height + Width × Height) × 2
```

### Ceiling Area
```
Ceiling Area = Length × Width (if selected)
```

### Total Surface
```
Total Surface = Wall Area + Ceiling Area - (Doors × 20) - (Windows × 15)
```

### Paint Needed
```
Paint Per Coat = Total Surface ÷ Coverage Rate (varies by finish)
Total Paint = Paint Per Coat × Number of Coats
Cans Needed = CEIL(Total Paint)
```

### Primer Calculation
```
Primer Needed = Total Surface ÷ Primer Coverage (350 sq ft/gal)
Primer Cans = CEIL(Primer Needed)
```

### Cost Estimation
```
Paint Cost = Cans Needed × Price Per Gallon
Primer Cost = Primer Cans × (Price Per Gallon × 0.8)
Total Cost = Paint Cost + Primer Cost
Cost Per Area = Total Cost ÷ Total Surface
```

## 🎯 Coverage Rates by Finish

| Finish Type | Coverage (sq ft/gal) | Coverage (sq m/L) |
|-------------|---------------------|-------------------|
| Flat        | 400                 | 12                |
| Eggshell    | 400                 | 12                |
| Satin       | 350                 | 10.5              |
| Semi-Gloss  | 350                 | 10.5              |
| Gloss       | 300                 | 9                 |
| Primer      | 350                 | 10.5              |

## 🚀 Key Features

- ✅ Real-time calculation with instant results
- ✅ Support for 5 paint finish types
- ✅ Multiple coats calculation (1-3 coats)
- ✅ Optional primer calculation
- ✅ Door and window deduction
- ✅ Ceiling area option
- ✅ Cost estimation with dynamic currency
- ✅ Feet and meters support
- ✅ Professional painting tips
- ✅ 10 comprehensive FAQs
- ✅ 2000+ words of SEO content
- ✅ Structured data for search engines
- ✅ Responsive design
- ✅ International currency support

## 📈 SEO Optimization

### On-Page SEO
- Keyword-optimized H1, H2, H3 tags
- Meta title and description
- 15 targeted keywords
- Internal linking structure
- Image alt text (when images added)
- Clean URL structure

### Content SEO
- 2000+ words of unique, valuable content
- 10 FAQ items targeting long-tail keywords
- Natural keyword density
- Related topic coverage
- Expert advice and tips

### Technical SEO
- Structured data (3 schema types)
- OpenGraph tags for social media
- Twitter card metadata
- Canonical URL
- Mobile-responsive design
- Fast loading times
- Semantic HTML structure

### Keywords Targeted
Primary: "paint calculator", "how much paint do i need"
Secondary: "paint coverage calculator", "room paint calculator", "paint cost calculator"
Long-tail: "calculate paint for room", "gallons of paint needed", "primer calculator"

## 🛠️ Future Enhancements

Potential additions:
- [ ] Save calculations
- [ ] PDF report export
- [ ] Multiple room calculation
- [ ] Paint brand recommendations
- [ ] Color visualizer
- [ ] Project timeline estimator
- [ ] Shopping list generator
- [ ] Video tutorials
- [ ] Before/after gallery
- [ ] User reviews and ratings

## 📝 Usage Example

```typescript
import PaintCalculator from './page'

// The component manages its own state and renders the complete page
<PaintCalculator />
```

## 🔧 Maintenance

When updating:
1. **Coverage rates**: Update `PAINT_COVERAGE` in `constants.ts`
2. **Tips**: Modify `PROFESSIONAL_TIPS` in `constants.ts`
3. **FAQs**: Edit `PAINT_CALCULATOR_FAQS` in `seo-content.ts`
4. **Content**: Update sections in `PAINT_CALCULATOR_CONTENT` in `seo-content.ts`
5. **Metadata**: Adjust SEO tags in `layout.tsx`
6. **Calculations**: Modify functions in `utils.ts`

## 📚 Dependencies

- React 19
- Next.js 15.3.4
- TypeScript
- shadcn/ui components:
  - Button, Card, Input, Label
  - Select, Switch, Badge
  - Accordion, Separator
- Lucide React icons
- International context (`useCurrency` hook)

## 🎓 Learning Resources

The modular architecture demonstrates:
- Component composition patterns
- State management with React hooks
- Real-time calculations with `useMemo`
- TypeScript type safety
- SEO best practices
- Structured data implementation
- Responsive design techniques
- International currency handling

Perfect for studying modern React/Next.js development patterns and SEO optimization strategies.
