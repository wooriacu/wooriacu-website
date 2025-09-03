# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (English/Spanish) acupuncture clinic website built with Astro. The site provides information about Woori Acupuncture, located in Riverside, California, offering traditional Korean medicine and acupuncture services.

## Development Commands

All commands are run from the project root:

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview the build locally before deploying
- `npm run astro` - Run Astro CLI commands

## Architecture & Structure

### Core Framework
- **Astro 5.12.3** - Static site generator with component-based architecture
- **TypeScript** - Configured with strict settings extending astro/tsconfigs/strict
- **CSS** - Global styles with component-scoped styling

### Site Configuration
- Site URL: https://wooriacu.com
- Output directory: ./dist
- Build target: Static site generation

### Page Structure
```
src/pages/
├── index.astro          # English homepage
└── es/index.astro       # Spanish homepage
```

### Component Architecture
```
src/
├── layouts/Layout.astro  # Main layout with SEO, meta tags, and analytics
├── components/Map.astro  # Interactive Leaflet map component
└── styles/global.css     # Global styles
```

### Key Features
- **Bilingual Support**: Full English/Spanish localization with proper hreflang tags
- **SEO Optimized**: Comprehensive meta tags, JSON-LD structured data for medical business
- **Interactive Map**: Leaflet-based map component for clinic location
- **Analytics**: Plausible analytics integration
- **Responsive Design**: Mobile-first CSS approach

### Layout Component Props
The Layout.astro component requires these props:
- `title`, `description`, `lang`, `canonical`, `siteName`, `locale`
- `hreflangEn`, `hreflangEs` (for bilingual SEO)
- Optional: `keywords`, `ogTitle`, `ogDescription`, `ogImage`

### Map Component
- Uses Leaflet.js loaded via CDN
- Default coordinates for Woori Acupuncture clinic
- Configurable props: `lat`, `lng`, `zoom`, `height`, `address`

## Content Management

### Clinic Information
- Address: 3579 Arlington Ave Suite 900, Riverside, CA 92506
- Phone: (951) 777-1011 / (714) 261-0605
- Hours: Mon-Fri 9AM-6PM, Sat 9AM-3PM, Sun Closed
- Coordinates: 33.9466568, -117.3915209

### Services Offered
The site features extensive information about treatments for various conditions including menstrual cramps, acne, anxiety, pain management, arthritis, Parkinson's, fertility issues, digestive disorders, and more.

## Deployment
The site outputs static files to the `dist/` directory and is configured for deployment to wooriacu.com.