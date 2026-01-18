# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Matt's Mobile Mechanic is a static marketing website for a mobile auto repair business serving the Phoenix, Arizona area. Built with Astro 5 and Tailwind CSS v4.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

**Stack:** Astro 5 (static site generator) + Tailwind CSS v4 (via Vite plugin) + TypeScript (strict mode)

**Structure:**
- `src/pages/` - File-based routing (currently single page: index.astro)
- `src/layouts/Layout.astro` - Base HTML wrapper with meta tags, accepts `title` and `description` props
- `src/components/` - Astro components for page sections (Hero, Services, Features, etc.)
- `src/styles/global.css` - Tailwind imports and brand theme variables

**Styling:**
- Tailwind v4 configured via `@tailwindcss/vite` plugin in astro.config.mjs
- Brand colors defined as CSS custom properties in global.css using `@theme` directive:
  - `--color-brand-orange: #F97316`
  - `--color-brand-black: #0f0f0f`
  - `--color-brand-grey: #F3F4F6`
  - `--color-brand-white: #FFFFFF`
- Use Tailwind classes with brand colors: `bg-brand-orange`, `text-brand-black`, etc.

**Icons:** Using `@lucide/astro` for iconography - import individual icons as needed

**Font:** Inter via `@fontsource/inter`
