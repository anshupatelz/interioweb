# InterioWeb Design System
## Inspired by Luxury Interior Design Aesthetics

### 🎨 Color Palette

#### Primary Colors (Warm Neutrals)
- **Background**: Warm off-white `oklch(0.9900 0.0020 85)`
- **Foreground**: Deep charcoal with warm undertone `oklch(0.2500 0.0100 60)`
- **Primary**: Rich warm brown-charcoal `oklch(0.2200 0.0120 50)`

#### Accent Colors (Sophisticated Warm Tones)
- **Secondary**: Warm honey/gold tone `oklch(0.7500 0.0800 75)` 
  - Replaces the bright green #19C37D
  - Evokes luxury, warmth, and elegance
  - Inspired by natural materials and warm lighting

#### Supporting Colors
- **Muted**: Soft beige `oklch(0.9500 0.0100 80)`
- **Accent**: Very light warm tan `oklch(0.8800 0.0500 65)`
- **Border**: Soft warm gray `oklch(0.8800 0.0080 75)`

### ✍️ Typography

#### Headings (Serif)
- **Font Family**: Playfair Display (primary), Cormorant Garamond, EB Garamond, Georgia (fallbacks)
- **Weight**: 400-500 (lighter, more elegant)
- **Letter Spacing**: -0.02em to -0.03em (tighter for sophistication)
- **Line Height**: 1.2

#### Body Text (Sans Serif)
- **Font Family**: Inter, system fonts
- **Features**: Kerning and ligatures enabled for polish

### 📐 Spacing & Layout

#### Border Radius
- **Base**: 0.75rem (12px) - softer than before
- Creates organic, approachable feel
- Matches arched elements in reference design

#### Shadows (Warm-tinted)
- Very subtle with warm undertones
- Lighter and more refined
- Examples:
  - `--shadow`: `0 2px 8px -2px hsl(30 20% 0% / 0.06)`
  - `--shadow-lg`: `0 8px 20px -4px hsl(30 20% 0% / 0.10)`

### 🎯 Design Principles

1. **Warmth Over Coolness**
   - Warm beiges and tans instead of cool grays
   - Subtle warm undertones in all neutrals
   - Honey/gold accent instead of green

2. **Elegance Through Typography**
   - Serif fonts for headlines (luxury feel)
   - Generous white space
   - Careful letter spacing

3. **Subtle Sophistication**
   - Muted, refined colors
   - Soft shadows with warm tones
   - Organic shapes and rounded corners

4. **Natural Material Inspiration**
   - Colors inspired by wood, stone, linen
   - Warm lighting references
   - Textures suggested through subtle variations

### 🖼️ UI Components

#### Buttons
- **Primary**: Dark charcoal with warm white text
- **Secondary**: Warm gold with dark text
- **Hover**: Subtle scale (1.02) + shadow increase

#### Cards
- Off-white background with subtle warm border
- Soft shadow with warm undertone
- Hover: Increase shadow, warm gold border hint

#### Hero Sections
- Gradient from warm white to subtle beige/tan
- Large serif headlines
- Ample breathing room

### 📊 Usage Guidelines

#### When to Use Secondary (Gold) Color
- Call-to-action buttons
- Important metrics/stats
- Active navigation states
- Hover states for interactive elements
- Badge accents

#### When to Use Primary (Charcoal)
- Body text
- Icons
- Primary buttons
- Strong emphasis text

### 🌟 Key Differences from Previous Design

| Element | Before | After |
|---------|--------|-------|
| Accent Color | Bright Green #19C37D | Warm Gold/Honey |
| Background | Pure White | Warm Off-White |
| Headlines | Sans-serif (Inter) | Serif (Playfair Display) |
| Shadows | Cool gray, strong | Warm-tinted, subtle |
| Border Radius | 1rem | 0.75rem |
| Overall Feel | Modern Tech | Luxury Interior |

### 💡 Implementation Tips

1. **Use gradients sparingly** - Subtle warm gradients for hero sections
2. **Let content breathe** - Generous padding and margins
3. **Typography hierarchy** - Serif for display, sans-serif for body
4. **Warm whites always** - Never use pure white (#FFFFFF)
5. **Shadow subtlety** - Less is more, warm undertones

### 🎨 CSS Custom Classes

```css
.gradient-warm - Warm beige/tan gradient
.gradient-subtle - Subtle off-white to beige
.shadow-luxury - Refined shadow with warm tone
.border-warm - Soft warm gray border
```

### 📱 Responsive Considerations

- Maintain generous spacing on mobile
- Scale typography smoothly with clamp()
- Keep touch targets comfortable (min 44px)
- Preserve elegant proportions at all sizes

---

**Design Philosophy**: Bring the warmth, elegance, and sophistication of high-end interior spaces into the digital experience. Every color, font choice, and spacing decision should evoke the feeling of walking into a beautifully designed room.
