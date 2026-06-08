# Design System Inspired by Boidushya

## 1. Visual Theme & Atmosphere

The Boidushya design system embodies a sophisticated, minimalist aesthetic with dramatic contrast and refined elegance. Built on a foundation of deep dark neutrals and warm beige accents, the system creates a contemplative, gallery-like experience that celebrates creative work. The color palette draws inspiration from earthy tones—warm creams, deep charcoals, and muted burgundies—evoking an intimate, personal studio space. Typography is clean and modern with generous whitespace, allowing projects and content to breathe. The overall mood is professional yet approachable, striking a balance between artistic expression and functional clarity.

**Key Characteristics**

- Deep, dark backgrounds (`#0F172A`, `#07080F`) with cream and beige accents (`#C6BCA9`, `#E3DCCF`)
- Warm, muted earth tones for depth and visual interest
- Minimalist layout with deliberate use of negative space
- Soft shadows and subtle elevation for hierarchy
- Warm typography anchored in sans-serif Satoshi family
- Refined interactive elements with smooth, intentional interactions

## 2. Color Palette & Roles

### Primary
- **Deep Navy** (`#0F172A`): Primary background for hero sections and prominent surfaces
- **Dark Charcoal** (`#07080F`): Deepest background layer, highest contrast regions

### Accent Colors
- **Warm Beige** (`#C6BCA9`): Primary accent for secondary text, links, and highlighted elements
- **Cream** (`#E3DCCF`): Lighter accent for tertiary text and subtle UI elements
- **Peach** (`#FED7AA`): Warm highlight accent for special emphasis
- **Off-White** (`#FFF9EC`, `#FFFBF8`): Warmest neutral backgrounds

### Interactive
- **Electric Blue** (`#4F46E5`): Primary call-to-action buttons and interactive focus states (inferred: indigo/violet)
- **Deep Red** (`#EF4444`): Alert, warning, and secondary interactive states (inferred)
- **Wine Red** (`#831843`, `#7F1D1D`): Accent interactive elements and hover states
- **Dark Brown** (`#7C2D12`): Tertiary interactive elements

### Neutral Scale
- **White** (`#FFFFFF`): Primary text on dark backgrounds, high contrast content
- **Light Gray** (`#E5E7EB`): Border strokes, dividers, subtle backgrounds
- **Medium Gray** (`#D4D4D8`): Secondary borders, low-contrast elements
- **Dark Gray** (`#71717A`): Muted secondary text
- **Charcoal** (`#171717`): Fallback text color

### Surface & Borders
- **Transparent Black** (`#0000`): Default transparent background for overlays and neutral states
- **Subtle Border Gray** (`#E5E7EB`): Primary border color for cards and containers
- **Muted Border** (rgba(82, 82, 91, 0.2)): Subtle borders on light backgrounds

## 3. Typography Rules

### Font Family
- **Primary**: Satoshi, ui-sans-serif, system-ui, -apple-system, sans-serif
- **Secondary**: Fallback to system sans-serif stack for universal compatibility

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / H1 | Satoshi | 32px | 600 | 38.4px | 0px | Hero section headings and page titles |
| Heading / H3 | Satoshi | 24px | 600 | 28.8px | 0px | Section headings and project titles |
| Subheading / H4 | Satoshi | 14px | 500 | 20px | 0px | Small headings and labels |
| Body | Satoshi | 16px | 400 | 24px | 0px | Primary content text and descriptions |
| Link | Satoshi | 16px | 700 | 24px | 0px | Navigation links and action links |
| Link Alt | Satoshi | 16px | 400 | 24px | 0px | Inline links within body content |
| Button | Satoshi | 12px | 600 | 16px | 0px | Button labels and compact actions |

### Principles
- **Hierarchy through weight and size**: Use weight variations (400, 500, 600) to establish visual dominance
- **Generous line heights**: Maintain 1.5x base multiplier for readability in warm, minimal spaces
- **Consistent font family**: Satoshi throughout for unified, modern voice
- **Size progression**: Use defined breakpoints (12px → 14px → 16px → 24px → 32px) to create clear hierarchy
- **Link emphasis**: Links use bold weight (700) to signal interactivity distinctly

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background**: `#4F46E5` (electric blue/indigo)
- **Text Color**: `#FFFFFF` (white)
- **Font Size**: `12px`
- **Font Weight**: `600`
- **Padding**: `8px 8px 8px 8px`
- **Border Radius**: `12px`
- **Border**: `0px solid #E5E7EB`
- **Height**: `32px`
- **Line Height**: `16px`
- **Hover State**: Darken to `#3730A3` with shadow `0px 10px 15px -3px rgba(0, 0, 0, 0.1)`
- **Active State**: Background `#312E81`

#### Icon Button
- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `#EF4444` (deep red)
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Padding**: `6px 6px 5px 6px`
- **Border Radius**: `9999px` (fully rounded)
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Height**: `33px`
- **Width**: `34px`
- **Line Height**: `24px`
- **Hover State**: Background `rgba(239, 68, 68, 0.1)`

#### Ghost Button
- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `#E3DCCF` (cream)
- **Font Size**: `12px`
- **Font Weight**: `400`
- **Padding**: `8px 16px 8px 16px`
- **Border Radius**: `9999px` (fully rounded)
- **Border**: `1px solid rgba(82, 82, 91, 0.2)` (subtle muted border)
- **Height**: `34px`
- **Line Height**: `16px`
- **Hover State**: Background `rgba(227, 220, 207, 0.08)`, Border `rgba(82, 82, 91, 0.4)`

#### Navigation Button (Text Link)
- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `rgba(255, 255, 255, 0.6)` (muted white)
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Padding**: `0px`
- **Border Radius**: `0px`
- **Border**: `0px`
- **Height**: `24px`
- **Line Height**: `24px`
- **Hover State**: Text Color `#FFFFFF` (full white), underline appearance

### Navigation

#### Navigation Bar
- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `#E3DCCF` (cream)
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Padding**: `16px 0px 16px 0px` (vertical padding)
- **Border Radius**: `0px`
- **Border**: `0px`
- **Height**: `96px` (with vertical centering)
- **Line Height**: `24px`
- **Spacing Between Items**: `24px` gap
- **Active Link**: Bold weight (700), color `#FFFFFF`
- **Hover Links**: Color `#FFFFFF`, slight shadow effect

### Cards & Containers

#### Project Card
- **Background**: `rgba(0, 0, 0, 0.4)` (semi-transparent dark overlay)
- **Border**: `1px solid rgba(82, 82, 91, 0.2)`
- **Border Radius**: `12px`
- **Padding**: `16px`
- **Box Shadow**: `0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)` (md elevation)
- **Text Color**: `#E3DCCF` (cream for description), `#FFFFFF` (white for titles)
- **Hover State**: Border `rgba(82, 82, 91, 0.4)`, slight lift with `0px 20px 25px -5px rgba(0, 0, 0, 0.15)` shadow

#### Notification Card (Psst! Card)
- **Background**: Linear gradient from `#0F172A` to `#1E1B4B` (deep blue-purple gradient)
- **Border**: `2px solid #4F46E5` (electric blue)
- **Border Radius**: `12px`
- **Padding**: `20px 24px`
- **Text Color**: `#FFFFFF` (white headings), `rgba(255, 255, 255, 0.8)` (muted body)
- **Box Shadow**: `0px 25px 50px -12px rgba(0, 0, 0, 0.25)` (lg elevation with depth)

### Inputs & Forms

#### Text Input
- **Background**: `rgba(255, 255, 255, 0.05)` (very subtle white overlay)
- **Border**: `1px solid rgba(82, 82, 91, 0.3)`
- **Border Radius**: `8px`
- **Padding**: `8px 12px`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Text Color**: `#E3DCCF` (cream text)
- **Placeholder Color**: `rgba(227, 220, 207, 0.5)`
- **Focus State**: Border `#4F46E5`, Box Shadow `0px 0px 0px 3px rgba(79, 70, 229, 0.1)`
- **Height**: `36px`

#### Select / Dropdown
- **Background**: `rgba(255, 255, 255, 0.05)`
- **Border**: `1px solid rgba(82, 82, 91, 0.3)`
- **Border Radius**: `8px`
- **Padding**: `8px 12px`
- **Font Size**: `16px`
- **Text Color**: `#E3DCCF`
- **Focus State**: Border `#4F46E5`, shadow consistent with text input

### Links

#### Text Link (Primary)
- **Color**: `#C6BCA9` (warm beige)
- **Font Size**: `16px`
- **Font Weight**: `700`
- **Line Height**: `24px`
- **Text Decoration**: None (default), underline on hover
- **Hover State**: Color `#FFFFFF`, underline `2px solid #C6BCA9`

#### Text Link (Secondary)
- **Color**: `#C6BCA9` (warm beige)
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Line Height**: `24px`
- **Text Decoration**: None
- **Hover State**: Color `#FFFFFF`, opacity fade

### Badges

#### Status Badge
- **Background**: `rgba(79, 70, 229, 0.2)` (blue tint)
- **Text Color**: `#4F46E5`
- **Padding**: `4px 8px`
- **Border Radius**: `9999px`
- **Font Size**: `12px`
- **Font Weight**: `600`
- **Border**: `1px solid #4F46E5`

#### Accent Badge
- **Background**: `rgba(131, 24, 67, 0.2)` (wine red tint)
- **Text Color**: `#831843`
- **Padding**: `4px 8px`
- **Border Radius**: `9999px`
- **Font Size**: `12px`
- **Font Weight**: `600`
- **Border**: `1px solid #831843`

## 5. Layout Principles

### Spacing System

Base unit: **8px** (octal system)

Scale progression:
- **8px**: Minimum spacing, icon padding, tight grouping
- **12px**: Compact element spacing, small gaps
- **16px**: Standard padding for containers, form fields
- **20px**: Medium gaps between element groups
- **24px**: Standard gap between sections and navigation items
- **32px**: Large section spacing
- **96px**: Hero section padding, major section breaks

**Usage Context**:
- Margins between sections: `24px` to `32px`
- Card internal padding: `16px` to `24px`
- Button padding: `8px` horizontal, `8px` vertical
- Form field spacing: `12px` gap between fields
- Navigation items: `24px` gap

### Grid & Container

- **Max Width**: `1200px` (main container)
- **Column Strategy**: 12-column grid with flexible breakpoints; projects displayed in 2–3 columns depending on viewport
- **Gutter**: `24px` between columns
- **Padding**: `16px` horizontal on mobile, `24px` on tablet, `32px` on desktop
- **Section Patterns**: Full-width hero with `96px` vertical padding; stacked cards in grid below

### Whitespace Philosophy

Generous, intentional whitespace creates visual breathing room and emphasizes craftsmanship. Negative space is treated as an active design element, not empty void. Content is centered with ample margins, allowing featured projects and text to command attention. Vertical rhythm is maintained through consistent `24px` and `32px` gaps, creating a calm, gallery-like experience.

### Border Radius Scale

- **0px**: Navigation elements, full-width sections (no radius)
- **2px**: Tight, minimal radius for small images and subtle definition
- **8px**: Medium containers, image thumbnails, input fields
- **12px**: Primary cards, buttons, containers requiring softer appearance
- **9999px**: Fully rounded buttons, circular badges, pill-shaped elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| None | No shadow, transparent background | Navigation, text links, minimal UI |
| Subtle (lg) | `0px 1px 2px 0px rgba(0, 0, 0, 0.05)` | Dividers, very subtle card elevation |
| Medium (md) | `0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)` | Standard cards, project containers, interactive hover states |
| Large (sm) | `0px 25px 50px -12px rgba(0, 0, 0, 0.25)` | Modal cards, notification popups, prominent alerts |
| Maximum | `0px 25px 50px -12px rgba(0, 0, 0, 0.25)` with gradient overlay | Hero sections with image overlays |

**Shadow Philosophy**: Shadows are minimal and sophisticated, used sparingly to indicate depth and interactivity rather than create drama. The system favors subtle elevation over bold drop shadows, maintaining the minimalist aesthetic. Shadows increase on hover/focus to signal interactivity, then retreat when interaction concludes.

## 7. Do's and Don'ts

### Do

- **Use the warm beige palette** (`#C6BCA9`, `#E3DCCF`) for secondary text and accents to maintain warmth against dark backgrounds
- **Maintain generous padding** around content (minimum `16px`) to preserve the spacious, gallery-like feel
- **Apply soft shadows** (md and lg elevations) on card hover to create subtle depth feedback
- **Keep navigation minimal** and functional; let content be the hero
- **Use cream text** (`#E3DCCF`) for descriptions and secondary information
- **Apply the bold weight** (700) to links to clearly signal interactivity
- **Organize projects in grid layouts** with consistent `24px` gaps between items
- **Leverage full-width backgrounds** with dark navy/charcoal for hero sections
- **Employ white** (`#FFFFFF`) for primary headings and high-contrast, important content
- **Reserve electric blue** (`#4F46E5`) for primary CTAs only, ensuring they stand out

### Don't

- **Avoid bright, saturated colors** that conflict with the warm earth tone palette
- **Don't use multiple accent colors simultaneously**; choose one warm tone per element group
- **Avoid excessive shadows** or multiple shadow layers; keep elevation subtle and purposeful
- **Don't compress whitespace** or reduce padding for mobile—maintain breathing room
- **Avoid using light backgrounds** without dark text; always maintain contrast for readability
- **Don't apply rounded corners** to full-width hero sections or navigation
- **Avoid mixing font families**; stick to Satoshi throughout
- **Don't place text directly on images** without a semi-transparent overlay (`rgba(0, 0, 0, 0.4)` minimum)
- **Avoid using the wine red accent** (`#831843`) for body text; reserve for interactive states and badges
- **Don't stack more than 3 interactive elements** horizontally at mobile widths

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | `320px–639px` | Single-column layout, 16px padding, 12px gaps, full-width cards, stacked navigation |
| Tablet | `640px–1023px` | Two-column grid, 24px padding, 20px gaps, compact cards, horizontal nav with wrapping |
| Desktop | `1024px–1200px` | 2–3 column grid, 32px padding, 24px gaps, full-width sections, optimized navigation bar |
| Large Desktop | `1201px+` | Max width container `1200px`, centered with auto margins, full visual hierarchy applied |

### Touch Targets

- **Minimum interactive size**: `44px × 44px` (buttons, links, icon targets)
- **Recommended size**: `48px × 48px` for primary actions
- **Padding around targets**: Minimum `8px` to prevent accidental activation
- **Spacing between buttons**: Minimum `12px` to prevent overlap on touch devices

### Collapsing Strategy

- **Mobile (320px–639px)**:
  - Navigation collapses to icon-based menu (hamburger or bottom nav)
  - Grid projects change from multi-column to single-column stack
  - Horizontal padding reduces from `32px` to `16px`
  - Gap between cards reduces from `24px` to `16px`
  - Typography remains consistent but may reduce to 14px for body on very small screens
  - Modals and cards expand to fill viewport width minus `16px` padding
  - Buttons expand to full width or maintain `44px` minimum height

- **Tablet (640px–1023px)**:
  - Navigation remains horizontal with text labels
  - Projects grid shifts to 2-column layout
  - Padding adjusts to `24px` horizontal
  - Card sizes remain responsive with consistent aspect ratios
  - Gaps between items: `20px`

- **Desktop (1024px+)**:
  - Full navigation bar with all items visible
  - Projects grid can expand to 3 columns
  - Container max width: `1200px`, centered
  - Padding: `32px` horizontal
  - Gaps: `24px` between items
  - Hero sections utilize full width for impact

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Electric Blue (`#4F46E5`)
- **Secondary CTA**: Deep Red (`#EF4444`)
- **Primary Background**: Deep Navy (`#0F172A`)
- **Secondary Background**: Dark Charcoal (`#07080F`)
- **Primary Text**: White (`#FFFFFF`)
- **Secondary Text**: Cream (`#E3DCCF`)
- **Accent Text**: Warm Beige (`#C6BCA9`)
- **Borders**: Light Gray (`#E5E7EB`) or subtle muted (`rgba(82, 82, 91, 0.2)`)
- **Heading Text**: White (`#FFFFFF`)
- **Link Color**: Warm Beige (`#C6BCA9`), bold weight (700)

### Iteration Guide

1. **Always use Satoshi font family** with fallback to system sans-serif stack; maintain consistent font weights (400, 500, 600, 700) for hierarchy
2. **Apply dark navy** (`#0F172A`) or charcoal (`#07080F`) as primary background with white or cream text for maximum contrast
3. **Reserve electric blue** (`#4F46E5`) exclusively for primary CTAs and focus states; use wine red (`#831843`) and deep red (`#EF4444`) only for secondary interactions
4. **Implement padding in 8px multiples**: `8px`, `16px`, `24px`, `32px`, `96px`; use `24px` as default section gap
5. **Apply soft shadows** (md or lg elevation) on card hover; keep default state shadow-free or use lg elevation only for alerts/notifications
6. **Maintain 44px minimum touch target** with `8px` padding around interactive elements on mobile
7. **Use border radius** of `12px` for cards/containers, `9999px` for buttons/badges, `8px` for inputs, `0px` for sections
8. **Ensure contrast ratios** minimum 4.5:1 for WCAG AA; use white (`#FFFFFF`) on dark backgrounds, cream (`#E3DCCF`) on very dark backgrounds
9. **Implement line heights** at 1.5x font size: 16px body → 24px line height, 14px subheading → 20px line height, 12px button → 16px line height
10. **Collapse layouts progressively**: mobile (single column, 16px padding), tablet (2 columns, 24px padding), desktop (2–3 columns, 32px padding); maintain whitespace throughout