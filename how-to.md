# Agent Prompt: Backend Developer Bento Portfolio (Astro + Tailwind + Cloudflare Pages)

## Role & Objective

You are an expert frontend/fullstack engineer specializing in Astro, Tailwind CSS, and Cloudflare Pages deployment. Your task is to build a complete, production-ready **bento-style dark portfolio website** for a backend developer, inspired by boidushya.com. The site must be fully functional, visually polished, and deployable to Cloudflare Pages.

---

## Owner Profile

- **Name**: Fadd
- **Role**: Backend Developer + IT Student
- **Workplace**: Mosu (modern Solution), Tangerang, Indonesia
- **Stack**: Bun, ElysiaJS, Node.js, Laravel, Python, Astro, MongoDB, PostgreSQL, SQLite, Docker
- **Side interests**: Game dev (Godot 4), AI/LLM integration, web scraping, photography
- **Featured projects**:
  1. **Jogja Belajar Radio (JBR)** — radio script generator platform with batch `.docx` generation, Deepseek API integration, Bun + ElysiaJS backend, dark green/amber UI
  2. **Agentic AI System** — local/cloud hybrid using Ollama (Qwen 2.5-9B), MCP server, Playwright, SQLite, automating GitHub pushes, LMS submissions, WhatsApp notifications
  3. **Python Web Crawlers** — targeting Indonesian news sites (CNBC Indonesia, Kompas.com), MongoDB storage, rotating user-agents, cronjob support
  4. **Logic Block Puzzle** — 2D educational drag-and-drop game, Godot 4, Scratch-style mechanics
  5. **Laravel Ticketing System** — portfolio project with Midtrans payment integration, dompdf PDF generation
- **Social links**: GitHub, LinkedIn (fill with placeholder `#` if unknown)

---

## Design Specification

### Visual Style
- **Theme**: Pure dark — background `#0e0e0e`, cards `#161616`, borders `#252525`
- **Accent colors**: Amber `#f5a623` (primary), muted green `#4ade80` (secondary/online status)
- **Typography**: 
  - Display/name: `Instrument Serif` or `Playfair Display` (Google Fonts)
  - Body/UI: `Geist` or `DM Sans` (Google Fonts)
- **Hero**: Full-width dark atmospheric background (CSS only — dark gradient with subtle noise texture, NO real photos), avatar placeholder circle, name + title below
- **Navigation**: Flat tab-style — Projects | Work | Contact (no Blog tab unless specified)
- **Bento grid layout** for Projects page:
  - Featured project card: `col-span-2` or `col-span-3`, large, shows project name + short desc + tech tags + links
  - Medium cards: `col-span-1 row-span-2` 
  - Small cards: `col-span-1 row-span-1`
  - Each card shows: project icon/emoji, name, 1-line description, tech stack tags, GitHub/live link buttons
- **Work page**: Vertical list, each item has company logo placeholder (colored circle with initials), title, company name, date range, 2-line description
- **Contact page**: Just social links — GitHub, LinkedIn, Email — displayed as large flat buttons, no form

### Aesthetic Rules
- NO gradients on cards (flat dark fills only)
- NO drop shadows (use subtle borders instead: `1px solid #252525`)
- Minimal animations: fade-in on page load (`opacity: 0 → 1`, `translateY(8px) → 0`), hover: card border lightens to `#3a3a3a`
- Tech stack tags: small pill badges, `bg-[#1f1f1f]` with `text-[#888]`, `border border-[#2a2a2a]`
- Links/buttons: flat, no border-radius > 6px, hover state darkens slightly
- Active nav tab: white text + `font-weight: 500`, inactive: `text-[#555]`

---

## Technical Specification

### Stack
```
Astro 4.x
Tailwind CSS 3.x (with @tailwindcss/typography)
TypeScript
@astrojs/cloudflare adapter
Cloudflare Pages (deployment target)
```

### Project Structure
```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts          ← Zod schemas for collections
│   │   ├── projects/
│   │   │   ├── jbr.md
│   │   │   ├── agentic-ai.md
│   │   │   ├── web-crawler.md
│   │   │   ├── logic-block-puzzle.md
│   │   │   └── laravel-ticketing.md
│   │   └── work/
│   │       └── balai-tekkomdik.md
│   ├── layouts/
│   │   └── BaseLayout.astro   ← shared layout: hero header + nav + slot
│   ├── components/
│   │   ├── BentoGrid.astro    ← CSS grid wrapper
│   │   ├── ProjectCard.astro  ← accepts: title, desc, tags[], links{}, size, emoji
│   │   ├── WorkItem.astro     ← accepts: title, company, period, desc, initials, color
│   │   └── NavTabs.astro      ← tab navigation with active state
│   └── pages/
│       ├── index.astro        ← redirect to /projects
│       ├── projects.astro
│       ├── work.astro
│       └── contact.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### astro.config.mjs
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [tailwind()],
});
```

### Content Collection Schema (src/content/config.ts)
```ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    emoji: z.string(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    live: z.string().optional(),
    featured: z.boolean().default(false),
    size: z.enum(['large', 'medium', 'small']).default('small'),
    order: z.number().default(99),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
    initials: z.string(),
    accentColor: z.string(),
    current: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { projects, work };
```

### Bento Grid Layout Logic (projects.astro)
```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import BentoGrid from '../components/BentoGrid.astro';
import ProjectCard from '../components/ProjectCard.astro';

const projects = await getCollection('projects');
const sorted = projects.sort((a, b) => a.data.order - b.data.order);
---

<BaseLayout title="Projects" activeTab="projects">
  <BentoGrid>
    {sorted.map(p => (
      <ProjectCard
        title={p.data.title}
        description={p.data.description}
        emoji={p.data.emoji}
        tags={p.data.tags}
        github={p.data.github}
        live={p.data.live}
        size={p.data.size}
        featured={p.data.featured}
      />
    ))}
  </BentoGrid>
</BaseLayout>
```

### BentoGrid.astro
```astro
<div class="grid grid-cols-3 gap-3 auto-rows-[180px]">
  <slot />
</div>
```

Cards use Tailwind span classes based on `size` prop:
- `large` → `col-span-2 row-span-2`
- `medium` → `col-span-1 row-span-2`
- `small` → `col-span-1 row-span-1`

### BaseLayout.astro Structure
```
<html>
  <head> ← Google Fonts, meta, title </head>
  <body class="bg-[#0e0e0e] text-white min-h-screen">
    <!-- Hero Header -->
    <header>
      <div class="hero-bg"> ← CSS noise/grain texture overlay </div>
      <div class="profile">
        <div class="avatar"> ← colored circle with "F" initial </div>
        <h1>Fadd</h1>
        <p>Backend Developer · IT Student</p>
      </div>
    </header>
    <!-- Nav Tabs -->
    <NavTabs activeTab={activeTab} />
    <!-- Page Content -->
    <main>
      <slot />
    </main>
  </body>
</html>
```

### Hero Background CSS (pure CSS, no image)
```css
.hero-bg {
  background: 
    radial-gradient(ellipse at 20% 50%, rgba(30,30,30,0.8) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(20,20,20,0.9) 0%, transparent 50%),
    #0a0a0a;
  /* Noise texture via SVG filter */
  filter: none;
  position: relative;
}
.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.4;
  pointer-events: none;
}
```

---

## Content Data

### Projects (fill into .md frontmatter)

**jbr.md**
```yaml
title: "Jogja Belajar Radio"
description: "Radio script generator platform with AI-powered batch .docx generation for broadcast programs"
emoji: "📻"
tags: ["Bun", "ElysiaJS", "Deepseek API", "TypeScript", "docx"]
github: "#"
live: "#"
featured: true
size: "large"
order: 1
```

**agentic-ai.md**
```yaml
title: "Agentic AI System"
description: "Local/cloud hybrid AI agent automating GitHub pushes, LMS submissions, and WhatsApp notifications"
emoji: "🤖"
tags: ["Ollama", "MCP", "Playwright", "SQLite", "Bun"]
github: "#"
featured: false
size: "medium"
order: 2
```

**web-crawler.md**
```yaml
title: "Indonesian News Crawler"
description: "Web crawlers targeting CNBC Indonesia & Kompas.com with MongoDB storage and cronjob support"
emoji: "🕷️"
tags: ["Python", "MongoDB", "BeautifulSoup", "Cronjob"]
github: "#"
featured: false
size: "small"
order: 3
```

**logic-block-puzzle.md**
```yaml
title: "Logic Block Puzzle"
description: "2D educational drag-and-drop game built in Godot 4 with Scratch-style block mechanics"
emoji: "🧩"
tags: ["Godot 4", "GDScript", "Game Dev"]
github: "#"
featured: false
size: "small"
order: 4
```

**laravel-ticketing.md**
```yaml
title: "Laravel Ticketing System"
description: "Ticketing platform with Midtrans payment integration and PDF generation via dompdf"
emoji: "🎫"
tags: ["Laravel", "PHP", "Midtrans", "MySQL"]
github: "#"
featured: false
size: "medium"
order: 5
```

### Work (fill into .md frontmatter)

**balai-tekkomdik.md**
```yaml
title: "Backend Developer"
company: "Balai Tekkomdik DIY"
period: "2024 – Present"
description: "Building backend systems for educational media platforms at the Yogyakarta regional education technology center. Working in a two-person team handling all backend architecture and API development."
initials: "BT"
accentColor: "#1a3a2a"
current: true
order: 1
```

---

## Implementation Instructions for Agent

1. **Scaffold project** — run `npm create astro@latest` with the empty template, then install dependencies: `@astrojs/tailwind @astrojs/cloudflare tailwindcss`

2. **Configure Tailwind** — extend theme with custom colors:
```js
// tailwind.config.mjs
theme: {
  extend: {
    colors: {
      card: '#161616',
      border: '#252525',
      'border-hover': '#3a3a3a',
      accent: '#f5a623',
      'accent-green': '#4ade80',
      muted: '#555555',
      tag: '#1f1f1f',
    },
    gridAutoRows: {
      'bento': '180px',
    }
  }
}
```

3. **Build components in order**: BaseLayout → NavTabs → BentoGrid → ProjectCard → WorkItem

4. **Page load animation** — add to BaseLayout `<style>`:
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
main { animation: fadeUp 0.35s ease forwards; }
```

5. **ProjectCard hover effect**:
```css
.card { border: 1px solid #252525; transition: border-color 0.15s ease; }
.card:hover { border-color: #3a3a3a; }
```

6. **Tech tag style**:
```html
<span class="text-xs px-2 py-0.5 rounded bg-[#1f1f1f] text-[#666] border border-[#2a2a2a]">
  {tag}
</span>
```

7. **wrangler.toml** (for Cloudflare Pages):
```toml
name = "fadd-portfolio"
compatibility_date = "2024-01-01"
pages_build_output_dir = "dist"
```

8. **Deploy command** to document in README:
```bash
# Build
bun run build

# Preview locally
bun run preview

# Deploy to Cloudflare Pages (connect repo via dashboard, or:)
npx wrangler pages deploy dist
```

9. **Environment variables** — if adding Spotify/GitHub stats API later, add to Cloudflare Pages dashboard → Settings → Environment Variables, and create `src/pages/api/[endpoint].ts` as Pages Functions.

10. **Responsiveness** — bento grid collapses:
```
Desktop (≥1024px): grid-cols-3
Tablet (≥640px):   grid-cols-2  
Mobile (<640px):   grid-cols-1, all cards auto height
```

---

## Quality Checklist

Before finishing, verify:
- [ ] All pages render without errors (`astro check`)
- [ ] Active tab highlights correctly on each page
- [ ] Bento grid: featured JBR card is `col-span-2 row-span-2` (visually dominant)
- [ ] Cards have consistent padding (`p-5`), no content overflow
- [ ] Tech tags wrap properly on small cards
- [ ] Page transition animation works on first load
- [ ] `astro.config.mjs` uses `output: 'hybrid'` and cloudflare adapter
- [ ] `wrangler.toml` exists and points to `dist`
- [ ] README includes setup + deploy instructions
- [ ] No hardcoded colors outside Tailwind config (use CSS variables or Tailwind classes)
- [ ] Mobile layout tested: cards stack to single column

---

## Output Expected

Deliver a complete, runnable Astro project — all files, all content. Do not skip any file. The site should be immediately deployable to Cloudflare Pages by running `bun run build` and pushing to a connected GitHub repo.