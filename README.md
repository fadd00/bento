# Andhika Hutama (Dhika) — Personal Portfolio

Client-facing portfolio website for **Andhika Hutama (Dhika)**, Backend Specialist and Startup Co-Builder. Built with Astro, React, TypeScript, and Tailwind CSS.

## Overview

- **Role:** Backend Specialist & Co-Builder at MOSU
- **Core Stack:** Go (Golang), PHP (Laravel), Node.js, PostgreSQL, MySQL, CI/CD, Docker
- **Live Contact:** WhatsApp: [+62 823-1018-0884](https://wa.me/6282310180884) &bull; Email: `andhikahutama9@gmail.com`

## Features

- **Backend & Web First Filtering:** Prioritizes commercial backend and web projects with an accessible filter for game systems.
- **Interactive Case Study Modal:** Deep dives into architectural highlights, roles, and technical implementations.
- **High-Trust Experience:** Real startup experience at MOSU and educational portal work at Balai Tekkomdik (`jogjabelajar.org`).
- **Stack & Services Section:** Clear breakdown of client-ready capabilities (API engineering, database modeling, CI/CD pipelines).
- **Fast Conversion Funnel:** 1-click WhatsApp messaging, instant email copying, and CV download.

## Project Structure

```text
├── src/
│   ├── components/
│   │   ├── sections/      # Projects, Work, Stack, Music, Contact tabs
│   │   ├── shared/        # ProjectCard, ProjectModal, WorkItem
│   │   ├── App.tsx        # Tab state orchestrator & layout
│   │   ├── NavTabs.tsx    # Responsive tab navigation
│   │   └── ProfileSection.tsx # Hero positioning & fast action buttons
│   ├── content/
│   │   ├── projects/      # Markdown collection for projects
│   │   └── work/          # Markdown collection for work history
│   ├── layouts/           # Astro HTML BaseLayout with SEO meta tags
│   └── pages/             # Astro static routing
└── public/                # Static assets (images, avatars, cv.pdf)
```

## Getting Started

```bash
# Install dependencies
bun install

# Start local development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```
