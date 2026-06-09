# Boidushya — Portfolio

Personal portfolio of **Boidushya**, a Frontend Developer & Design Engineer. A single-page React app with tabbed navigation, animated page transitions, and interactive project previews.

## Tech Stack

| Layer | Choices |
|---|---|
| **Framework** | React 18 + TypeScript |
| **Build** | Vite 4 |
| **Styling** | Tailwind CSS 3 + CSS custom properties |
| **Animation** | [Motion](https://motion.dev) (formerly Framer Motion) 12.x |
| **Data** | React Query 5 (TanStack) |
| **UI Primitives** | Radix UI (Hover Card) |
| **Routing** | Tab state via React Context + URL search params |
| **Analytics** | Google Analytics 4 |
| **Formatting** | Biome |

---

## Design System

### Color Palette

The entire site uses a **dark-only** theme (`color-scheme: dark`), built around warm off-whites on a near-black background.

```css
--color-fg:           hsla(40, 26%, 85%, 1);   /* primary text — warm cream */
--color-fg-lighter:   hsla(40, 26%, 95%, 1);   /* brighter variant */
--color-fg-secondary: hsla(40, 20%, 72%, 1);   /* muted / description text */
--color-bg:           hsla(0, 0%, 9%, 1);      /* page background — near black */
--color-bg-secondary: hsla(0, 0%, 19%, 1);     /* elevated surfaces */
```

All colors are warm-toned (40° hue) to avoid the harshness of pure grays. No light mode exists — the palette is deliberately unipolar.

### Typography

- **Primary:** [Satoshi](https://api.fontshare.com/v2/css?f[]=satoshi@1) (via Fontshare CDN, `display=swap`)
- **Fallback stack:** `Avenir Next`, `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, Roboto, Oxygen, Ubuntu, Cantarell, `Open Sans`, `Helvetica Neue`, sans-serif
- **Weights used:** 400 (regular), 600 (semibold), 700 (bold)
- **Headings:** `font-weight: 600`, `line-height: 1.2`
- **h1:** `2rem`, white
- **h3:** `1.5rem`, used as section titles

### Layout

- **Container:** `max-width: 640px` centered, `padding-inline: 1rem`
- Content is narrow and focused — a reading-optimized single column
- **Mobile breakpoint:** `640px`

### Interface Patterns

- **Glassmorphism:** Used sparingly — the macOS dock preview uses `bg-white/20 backdrop-blur`, and project cards use border `border-zinc-500/15` with `rounded-2xl`.
- **Gradient masks:** The bento card overlay (`bento-content-mask`) uses a 16-stop linear gradient to fade preview content into the dark background, creating depth without hard edges.
- **Background image:** A Breaking Bad still (`/bg3.jpg`) sits behind the hero with a gradient fade at the bottom (`linear-gradient` from transparent → 75% opacity → solid `--color-bg`), blending the image into the page.
- **Dot patterns:** `rang-bg` uses a `radial-gradient` dot grid at 48px spacing; `eip-bg` uses layered linear gradients for a blueprint/grid aesthetic.

---

## Architecture

```
src/
├── App.tsx                          # Root — orchestrates BG, hero, nav, tab content, banner
├── main.tsx                         # Entry — providers (QueryClient, TabContext) + GA init
├── components/
│   ├── bg-container.tsx             # Full-width background image with gradient fade
│   ├── hero-wrapper.tsx             # Avatar + name + title
│   ├── nav.tsx                      # Tab bar (Projects / Work / Music / Contact) + Blog link
│   ├── link-preview.tsx             # Hover card with screenshot preview (Radix + Motion)
│   ├── sections/
│   │   ├── projects.tsx             # Bento grid of project cards
│   │   ├── work.tsx                 # Career timeline with animated logos
│   │   ├── music.tsx                # YouTube playlist fetcher + song grid
│   │   ├── contact.tsx              # Social link list
│   │   └── banner.tsx               # Dismissible promo banner
│   ├── projects/                    # Lazy-loaded preview components (one per project)
│   │   ├── BentoProjectCard.tsx     # Reusable bento card shell
│   │   ├── better-lyrics.tsx        # Synced lyric reveal + canvas background
│   │   ├── rang.tsx                 # Color-matching game with confetti
│   │   ├── eip-6963.tsx             # State-cycling connect button
│   │   ├── blog.tsx                 # Bouncing heart icon
│   │   ├── rezonance.tsx            # Music player with NumberFlow timer
│   │   ├── portfolio-website.tsx    # macOS dock magnification
│   │   ├── flow-hackathon.tsx       # Conway's Game of Life
│   │   └── ... (video-based previews)
│   └── shared/
│       ├── AnimatedContainer.tsx    # Stagger container wrapper
│       ├── AnimatedLink.tsx         # Animated anchor tag
│       ├── AnimatedListItem.tsx     # Animated list item
│       ├── FallbackIcon.tsx         # SVG placeholder for broken images
│       └── GameOfLife.tsx           # Reusable Conway's Game of Life canvas
├── contexts/
│   └── TabContext.tsx               # Active tab state, URL sync, provider
├── utils/
│   ├── animations.ts                # All Motion variants (the animation language)
│   ├── bento-config.ts              # Grid layout ordering + size mapping
│   ├── constants.tsx                # Project data, work history, lazy imports
│   ├── functions.ts                 # cn(), HSL utilities, color manipulation
│   ├── hooks.ts                     # useColorAnimation, useLyricsAnimation, useResizeObserver
│   ├── music.ts                     # YouTube API helpers + types
│   ├── projects.ts                  # ProjectItem type + text constants
│   └── contact.ts                   # Social links + text constants
└── styles/
    ├── index.css                    # Tailwind directives
    └── App.css                      # Design tokens, layout, keyframes, component styles
```

### State Management

- **Tab routing:** `TabContext` holds the active tab (`"projects" | "work" | "music" | "contact"`), synced to `?tab=` URL param via `pushState`. The nav reads/writes this context; `App.tsx` uses it to conditionally render the active section inside an `AnimatePresence`.
- **Server state:** React Query fetches YouTube playlist data (stale-while-revalidate).
- **Component state:** `useState` for local UI (banner visibility, video load states, color transitions).

---

## Animation System

All animations are defined centrally in [src/utils/animations.ts](src/utils/animations.ts) as Motion `Variants` objects. The system is **compositional** — containers define stagger timing, children define their own entry animation, and the two compose automatically through Motion's variant propagation.

### Page Transitions

When the user switches tabs, [App.tsx](src/App.tsx) uses `AnimatePresence mode="wait"` with `pageTransitionVariants`:

| Phase | Properties |
|---|---|
| **initial** | `opacity: 0.25`, `y: 12px`, `filter: blur(2px)` |
| **animate** | `opacity: 1`, `y: 0`, `filter: blur(0px)` |
| **exit** | `opacity: 0.25`, `y: 12px`, `filter: blur(2px)`, `duration: 0.1s` |

The blur drop-off (2px → 0) creates a subtle "snapping into focus" sensation. Exit is intentionally fast (100ms) so the incoming tab appears responsive. The `mode="wait"` ensures the exiting section fully unmounts before the new one enters — no overlapping.

### Stagger Containers

Two container variants propagate stagger delays to direct children:

| Variant | Stagger | Section |
|---|---|---|
| `staggerContainerVariants` | `0.1s` per child | Projects, Music, Contact |
| `fastStaggerContainerVariants` | `0.125s` per child | Work |

Containers themselves have no visual properties — they only define `transition.staggerChildren`. Children must declare their own `variants` for the stagger to take effect.

### Item Entry Variants

Each section uses a direction-specific item variant. All four share the same core pattern:

```
opacity: 0, filter: blur(3px)  →  opacity: 1, filter: blur(0px)
```

| Variant | Motion | Offset |
|---|---|---|
| `slideUpItemVariants` | y | 12px ↑ | Projects, Contact |
| `slideDownItemVariants` | y | −20px ↓ | Work |
| `slideLeftItemVariants` | x | −20px ← | (available) |
| `slideRightItemVariants` | x | −12px → | Music |

### Hover / Presence Variants

`hoverVariants` drives the **BentoProjectCard** description reveal via `AnimatePresence mode="popLayout"`:

- **initial/animate:** `scale: 0.95 → 1`, `blur(3px) → 0`, `opacity: 0 → 1`
- **exit:** `scale: 0.95`, `blur(5px)`, `opacity: 0`, `duration: 0.1s`

The `popLayout` mode allows the description to animate out while the shorter no-description state animates in simultaneously.

### Work Section: Visual Hierarchy Animations

The Work section uses three coordinated animations to establish hierarchy between current and past roles:

**`glowVariants`** — Current employer logo glow:
- `opacity: 0, scale: 0` → `opacity: 1, scale: 1` over `1s` with `0.5s` delay
- A duplicate `<img>` behind the logo with `blur-xl saturate-150` creates a soft colored halo

**`getGrayscaleAnimation(grayScale)`** — Past roles:
- `filter: grayscale(0%)` → `grayscale(100%)` over `0.5s` after `1.25s` delay
- Combined with `getOpacityAnimation` (`opacity: 1` → `0.6`) on the text

The result: when the Work tab opens, the current role's logo glows brightly while past roles fade to monochrome, creating a clear "you are here" signal.

---

## CSS Keyframe Animations

Defined in [App.css](src/styles/App.css):

| Keyframe | Duration | Easing | Purpose |
|---|---|---|---|
| `slide-in-left` | 0.2s | `cubic-bezier(.25,.46,.45,.94)` | Horizontal slide-in from left |
| `slide-in-right` | 0.2s | `cubic-bezier(.25,.46,.45,.94)` | Horizontal slide-in from right |
| `slide-out-left` | 0.2s | `cubic-bezier(.25,.46,.45,.94)` | Exit to left |
| `slide-out-right` | 0.2s | `cubic-bezier(.25,.46,.45,.94)` | Exit to right |
| `revealColor` | 0.3s | linear | Clip-path reveal (`inset 0 100% 0 0` → `inset 0 0 0 0`) for word highlighting in BetterLyrics |
| `spin` | 1s | linear | Full rotation |
| `spin-slow` | 6s | linear | Slow rotation (Tailwind utility) |
| `animateLoadingLogo` | 1.5s | ease | SVG stroke-dashoffset cycle: draws outline → fills → resets |
| `rotateLoadingLogo` | 1.5s | `cubic-bezier(.68,-.55,.51,1.57)` | Overshooting rotation for the loading spinner — the elastic easing creates a whip-like snap |

### The Loading Spinner

The `.loading-icon-wrapper` SVG combines both `animateLoadingLogo` and `rotateLoadingLogo` simultaneously:
- `stroke-dasharray: 50px`, `stroke-dashoffset: 50px` — the outline draws/fills cyclically
- `rotateLoadingLogo` rotates the entire SVG with an elastic overshoot — it spins, then snaps past the endpoint and rebounds. This is the only place in the app that uses a non-standard cubic-bezier for character rather than utility.

---

## Spring Physics

The **LinkPreview** ([link-preview.tsx](src/components/link-preview.tsx)) is the only component using spring-based motion:

**Entrance spring** (snappy, responsive):
```
stiffness: 550, damping: 30, mass: 1.2
```
This creates a fast pop-in with a subtle bounce — the card overshoots slightly and settles quickly. High stiffness + moderate damping = responsive but not jarring.

**Mouse-tracking spring** (smooth follow):
```
stiffness: 100, damping: 15
```
The preview card follows horizontal mouse movement with a loose, laggy feel. Low stiffness + low damping = the card "drifts" toward the cursor rather than snapping to it.

**EIP-6963 button width spring** (morphing):
```
stiffness: 200, damping: 20
```
The connect button's width animates to match different text content. Moderate stiffness = visible morphing motion without feeling sluggish.

---

## Component Animation Details

### LinkPreview ([link-preview.tsx](src/components/link-preview.tsx))

A hover card that shows a website screenshot. The most complex single-component animation in the app:

1. **Mouse tracking:** `useMotionValue` captures horizontal mouse position relative to the trigger element. `useSpring` smooths it. The preview card's `x` style follows.
2. **Entrance:** Spring (`stiffness: 550`) from `scale: 0.5, y: 24, opacity: 0` → `scale: 1, y: 0, opacity: 1`. The entrance origin is set to `origin-[50%_calc(100%_-_32px)]` so it scales from the trigger point.
3. **Exit:** Quick (`duration: 0.15s`) scale-to-zero with `y: 48`.
4. **Image preloading:** A hidden `<img>` renders on mount to warm the browser cache before the user hovers.
5. **Screenshot service:** Uses Microlink API with dark color scheme and mobile viewport parameters.

### BentoProjectCard ([BentoProjectCard.tsx](src/components/projects/BentoProjectCard.tsx))

Each project card in the bento grid layers several effects:

1. **Entrance:** `slideUpItemVariants` via parent stagger container in `AnimatedContainer`.
2. **Grayscale → Color:** The preview layer (`Suspense` wrapper with the lazy component) has `sm:grayscale group-hover:grayscale-0` with `transition-all duration-[400ms] ease-in-out`. Cards are desaturated by default and bloom into color on hover.
3. **Description reveal:** `AnimatePresence mode="popLayout"` with `hoverVariants` — the description paragraph slides up and fades in.
4. **Gradient mask:** A 16-stop linear gradient (`bento-content-mask`) overlays the preview, fading from near-opaque at the bottom to fully transparent at ~73% height. This ensures text in the description area is always readable regardless of the preview content.
5. **Accessibility:** A transparent `<a>` covers the entire card for click targets; `focus-visible:outline-dashed` provides keyboard navigation visibility.

### Banner ([banner.tsx](src/components/sections/banner.tsx))

A promotional banner for Better Lyrics:

- **Entrance:** `AnimatePresence mode="wait"` — slides from `y: "-100%", opacity: 0` to `y: 0, opacity: 1`.
- **Timing:** Appears 500ms after mount (if not previously dismissed).
- **Persistence:** `localStorage.setItem("showBanner", "false")` on dismiss.
- **Design:** Indigo color scheme with a large faded logo watermark, two CTA buttons (Learn More / No thanks).

---

## Preview Component Animations

Each project card renders a lazy-loaded `PreviewComponent` inside the bento card. These are the most visually distinctive animations in the app.

### BetterLyrics ([better-lyrics.tsx](src/components/projects/better-lyrics.tsx))

A synced lyric reveal system with two concurrent layers:

**Layer 1 — Canvas background:**
Two radial gradients orbit at different speeds and directions. The hues shift continuously:
- Gradient 1: `hue1 = 280 + sin(time * 0.5) * 40` — purple-to-pink range
- Gradient 2: `hue2 = 320 + cos(time * 0.7) * 35` — pink-to-red range
- Both rendered at 60fps with `globalCompositeOperation: "overlay"` for a luminous blending effect

**Layer 2 — Lyric text:**
- Lines auto-scroll via `transform: translateY(...)` with `transition: 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)` (Material Design standard easing)
- The **current word** is highlighted using `revealColor` — a `clip-path: inset` animation that sweeps from left to right over 0.3s, revealing the word in white
- **Past lines:** `opacity: 0.1` — barely visible
- **Future lines:** `opacity: 0.3` — dimly visible, creating anticipation
- The scroll position centers the current line at ~72px from the top of the visible area

The entire sequence cycles through Tame Impala's "Feels Like We Only Go Backwards" automatically.

### Rang ([rang.tsx](src/components/projects/rang.tsx))

A color-accuracy game simulation with a multi-phase animation loop:

**Phase 1 — Color transition (5 seconds):**
`useColorAnimation` interpolates HSL values in 5 discrete steps at 1-second intervals. Each step moves the current color closer to the target.

**Phase 2 — Confetti burst:**
When the color reaches its target, `canvas-confetti` fires 100 particles with colors derived from the target hue at different lightness levels. Particles originate from `y: 0.8` (bottom of the card) with `spread: 80`, `gravity: 0.5`, `startVelocity: 30`.

**Phase 3 — New target:**
A new random target color is generated and the cycle repeats after a 5-second pause.

**Visual design:**
- A large centered square shows the **target color** with a darker border
- A smaller inset square shows the **current interpolated color**
- The **hex value** of the current color is overlaid with `AnimatePresence` key-based transitions — each new hex fades in from below
- Background: `radial-gradient` dot pattern (`rgba(0,0,0,0.15)` dots at 48px spacing)
- All color transitions use `transition-colors duration-500` for smooth HSL interpolation

### EIP-6963 ([eip-6963.tsx](src/components/projects/eip-6963.tsx))

A multi-step wallet connect button simulation cycling through 3 states:

```
Connect → Connecting... → Connected → (repeat)
```

Each state transition uses `AnimatePresence mode="wait"`:

1. **Content change:** The icon + text wrapper exits with `y: -6, opacity: 0` and enters from `y: 6, opacity: 0` (vertical slide-swap, `duration: 0.25s`).
2. **Button width:** A hidden measurement element with `opacity-0 pointer-events-none` renders the current state's content. A `ResizeObserver` reads its width. The button's actual `width` animates via spring (`stiffness: 200, damping: 20`) to match — the button smoothly morphs between narrow ("Connect") and wide ("Connecting...").
3. **Spinner:** The middle state's icon is an SVG circle with `animate={{ rotate: 360 }}` at `1s linear infinite` — a continuous rotation with a quarter-opacity track and solid arc.

**Background:** Blueprint-style grid using layered linear gradients on an indigo background, sized at 36px intervals.

### Rezonance ([rezonance.tsx](src/components/projects/rezonance.tsx))

A simulated music player for "Feels Like We Only Go Backwards" by Tame Impala:

1. **Progress bar:** A `width` CSS transition updates every second — `duration: 200ms, ease: linear` — progressing from 0 to 100% over 94 seconds (the actual track length), then resetting.
2. **Animated timer:** Uses `@number-flow/react` — minutes and seconds tick independently with smooth digit rollover animations. The seconds digit is capped at 5 in the tens place (`digits: { 1: { max: 5 } }`).
3. **Player controls:** Play/pause/skip buttons with `transition-colors` hover effects. The play button is a prominent white circle with shadow.
4. **Background:** Warm gradient (`from-red-900 via-orange-900 to-pink-900`) matching the album aesthetic.

### PortfolioWebsite ([portfolio-website.tsx](src/components/projects/portfolio-website.tsx))

A macOS-style dock with magnification:

1. **Virtual cursor:** A sine wave drives a virtual cursor position: `mouseX = (sin(t) + 1) * 0.5 * (width - 32) + 16`. Updates every 30ms via `setInterval`.
2. **Icon sizing:** Each of 4 icons computes distance to the cursor. Size = `baseSize + cos(dist/maxDistance * π/2) * 16`. The cosine falloff creates the classic macOS magnification curve — icons near the cursor grow smoothly.
3. **Spring animation:** Icon sizes are animated via `motion.div` with `type: "spring", stiffness: 300, damping: 30` — responsive bounce as icons grow/shrink.
4. **Glass dock:** The dock container uses `bg-white/20 backdrop-blur`, `border-white/20`, `rounded-xl` — a subtle glassmorphic surface over the `/mac.png` desktop background.

### Blog ([blog.tsx](src/components/projects/blog.tsx))

A heart-shaped "like" button with a bouncy idle animation:

**Outer container (red circle):**
```
scale:  [1, 1.2, 0.9, 1.05, 1]
rotate: [0, -5, 5, -2, 0]
y:      [0, -2, 2, -2, 0]
```

**Inner heart SVG:**
```
scale:  [1, 1.1, 1]
rotate: [0, 10, -10, 5, 0]
```

Both run `duration: 0.8s` with `repeatDelay: 2s` and `repeat: Infinity`. The 2-second pause between bounces creates a heartbeat rhythm — a quick double-beat (the multi-keyframe bounce) followed by a long rest.

**Background:** Diagonal gradient from transparent red to transparent pink — minimal and unobtrusive.

### FlowHackathon ([flow-hackathon.tsx](src/components/projects/flow-hackathon.tsx))

Conway's Game of Life running on an HTML canvas:

- **Grid:** Cell size 4px, initialized with ~15% random live cells
- **Update rate:** 24fps (throttled via `time - lastUpdate > 1000/24`)
- **Stuck detection:** Each grid state is hashed to a binary string. A `Set` tracks the last 10 states. If the same state appears 3 consecutive times, the grid is re-initialized with a fresh random seed — preventing static or oscillator lock-in.
- **Coloring:** `(x + y) % colors.length` cycles through the provided palette (Flow brand green + white)
- **Toroidal edges:** The grid wraps — neighbor counting uses modulo on both axes
- **Resize handling:** `ResizeObserver` on the canvas element triggers re-initialization

### Video-based Previews

`WalletConnectDocs`, `DopeUI`, `TomJerry`, `CampUIKit`, and `CampSDK` use a shared video pattern:

```tsx
<video autoPlay loop muted playsInline preload="auto">
  <source src="/video.mp4" type="video/mp4" />
</video>
```

- **Fade-in:** `opacity-0` → `opacity-100` via `transition-opacity duration-500`, triggered by `onLoadedData`
- Videos are preloaded in [index.html](index.html) via `<link rel="preload" as="video">` tags
- `object-cover` ensures the video fills the card area without distortion

---

## Transition Summary

| Transition | Mechanism | Duration | Easing |
|---|---|---|---|
| Tab switch | `AnimatePresence mode="wait"` + `pageTransitionVariants` | animate: default, exit: 0.1s | default (ease) |
| Stagger children | `staggerChildren` on container variants | 0.1s or 0.125s per child | default |
| Item slide-up/down/left/right | Item variants with blur + opacity + position | default (~0.3s) | default |
| Project description hover | `AnimatePresence mode="popLayout"` + `hoverVariants` | enter: default, exit: 0.1s | default |
| Link preview entrance | Spring animation | physics-based | stiffness: 550, damping: 30 |
| Link preview exit | Tween | 0.15s | default |
| Grayscale fade (work logos) | `motion.img` with filter tween | 0.5s | default, delay: 1.25s |
| Logo glow (current work) | `motion.img` with scale + opacity | 1s | default, delay: 0.5s |
| Banner slide-in | `AnimatePresence` + y tween | default | default |
| Nav tab opacity | CSS `transition-opacity` | 0.2s | default |
| Bento grayscale | CSS `transition-all` | 400ms | ease-in-out |
| Video load fade | CSS `transition-opacity` | 0.5s | default |
| EIP button width | Spring animation | physics-based | stiffness: 200, damping: 20 |
| EIP state swap | `AnimatePresence` + y/o tween | 0.25s | default |
| BetterLyrics scroll | CSS `transition: transform` | 0.5s | `cubic-bezier(0.4, 0, 0.2, 1)` |
| BetterLyrics word reveal | CSS `revealColor` keyframe | 0.3s | linear |
| BetterLyrics canvas | `requestAnimationFrame` | continuous | — |
| Rang color steps | `setInterval` + state updates | 1s per step | — |
| Rang confetti | `canvas-confetti` | ~3-5s | physics-based |
| Rang hex swap | `AnimatePresence` key-based | default | default |
| Blog heart bounce | keyframes on `motion.button` | 0.8s + 2s delay | default |
| Dock icon resize | Spring animation | physics-based | stiffness: 300, damping: 30 |
| Game of Life | `requestAnimationFrame` (24fps throttle) | continuous | — |
| NumberFlow digits | `@number-flow/react` | continuous | built-in spring |
| Rezonance progress | CSS `transition: width` | 0.2s | linear |
| Loading spinner | CSS keyframes | 1.5s | ease + elastic bezier |

---

## Performance Patterns

- **Lazy loading:** All 17 project previews use `React.lazy()` with dynamic `import()` — only the visible preview's code is loaded.
- **Video preloading:** All 4 MP4 previews are preloaded via `<link rel="preload">` in the HTML head.
- **Image preloading:** External avatars (Twitter, GitHub) are preloaded.
- **`React.memo`:** Used on `BentoProjectCard` and `WorkItem` to prevent re-renders during stagger animations.
- **`useMemo`:** Animation configs in `WorkItem` are memoized per item.
- **Canvas throttling:** Game of Life renders at 24fps instead of 60fps.
- **AbortController:** The color animation hook uses `AbortController` for clean cleanup of intervals and timeouts on unmount.
- **`useRef` for DOM access:** Canvas contexts, animation frame IDs, and interval/timeout references are stored in refs to avoid re-render overhead.
- **Biome for linting/formatting:** Fast, zero-config tooling.

---

## Running Locally

```bash
# Install
bun install

# Develop
bun dev

# Build
bun run build

# Lint
bun lint

# Format
bun format
```

---

## Deployment

Built with Vite. The `build` script runs `tsc` type-checking followed by `vite build`. Deploy the `dist/` folder to any static host.