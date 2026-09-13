# Kaj Properties - Developer Documentation

**Version:** 3.4.1  
**Developed by:** Gentrix Web Development Team

---

## Overview

Kaj Properties is a modern real estate website built with Next.js, featuring property listings, project showcases, landowner partnerships, and company information. The application follows a clean, professional design with responsive layouts and interactive elements.

---

## Tech Stack

### Core Framework
- **Next.js 16.3.4** - React framework with App Router
- **React 19.2.8** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4.3.3** - Utility-first CSS framework
- **PostCSS 8.5.28** - CSS processing
- **Framer Motion 13.2.0** - Animation library
- **GSAP 3.15.0** - Advanced animations
- **Lucide React 1.41.0** - Icon library

### Maps & Location
- **Leaflet 1.9.4** - Open-source map library
- **React Leaflet 5.0.0** - React integration for Leaflet

### Backend & Database
- **MongoDB (Mongoose 9.9.5)** - NoSQL database
- **Resend 6.26.0** - Email service

### Other Libraries
- **Swiper 14.2.0** - Touch slider/carousel

---

## Pages & Routes

### Total Pages: 7

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero banner, featured projects, and CTA sections |
| `/landowners` | Landowners Partnership | Form for landowners to partner with Kaz Properties |
| `/mission-vision` | Mission & Vision | Company overview, mission, vision, and MD message |
| `/management-team` | Management Team | Team member profiles and leadership information |
| `/projects/chayabithi` | Chayabithi Project | Detailed project page for Chayabithi property |
| `/projects/chayanir` | Chayanir Project | Detailed project page for Chayanir property |
| `/admin` | Admin Dashboard | Administrative interface for content management |

---

## Key Features & Implementations

### 1. Banner/Hero Section
- **Image Slider:** 4-banner rotation with 4-second transition interval
- **Images:** `/assets/banner/1.jpeg`, `/assets/banner/2.jpeg`, `/assets/banner/3.png`, `/assets/banner/4.png`
- **Overlay:** Light overlay (bg-black/30) for text readability
- **Responsive Typography:** Scales from text-3xl to text-8xl across breakpoints

### 2. Navigation Bar
- **Dynamic Background:** Dark opacity background with blur effect
- **Scroll-based Styling:** Changes appearance on scroll
- **Theme-aware:** Dark text in light mode, white text in dark mode
- **Responsive Logo:** Reduced size (w-16 to w-28) for better balance
- **Mobile Menu:** Hamburger menu with slide-in functionality

### 3. Featured Projects Section
- **Projects Display:** Chayabithi, Chayanir, and Coming Soon placeholder
- **Interactive Cards:** Hover effects with scale and shadow
- **Responsive Layout:** Horizontal scroll on mobile, grid on desktop
- **Project Details:** Stats, location, status badges

### 4. Location Section
- **Interactive Maps:** Google Maps embeds for each project
- **Project Locations:**
  - Chayabithi: `https://maps.app.goo.gl/VXHvUFQnZ8kAookGA`
  - Chayanir: `https://maps.app.goo.gl/5EawevRMfDMrDrV98`
- **Map Embeds:** 500px height with rounded corners and lazy loading
- **Location Cards:** Tabbed layout with active state indicators
- **Coming Soon:** Glassmorphism placeholder with accent color (#BE9F98)

### 5. Landowners Page
- **Background Image:** `bg.png` with dark overlay placed behind form section
- **Form Section:** Land information collection form
- **Responsive Layout:** Clean header with form below
- **Blur Effect:** Removed blur for clearer background view

### 6. Mission & Vision Page
- **Background Image:** `bg1.png` with blur effect and dark overlay
- **Sections:** About Us, Mission & Vision, MD Message with Photo
- **MD Message:** Fixed image aspect ratio (4:5) with constrained width
- **Stats Display:** Experience, units delivered, transparency metrics
- **Quote Section:** Styled quote with accent border

### 7. Project Detail Pages
- **Chayabithi:**
  - Gallery with navigation
  - Floor plan with download option
  - Stats: 1800 sq ft, 4 beds, 4 baths, 4 balconies
  - Location: Dhaka-Aricha Highway, Savar
  - Map link: `https://maps.app.goo.gl/VXHvUFQnZ8kAookGA`

- **Chayanir:**
  - Gallery with navigation
  - Floor plan with download option
  - Stats: 3 beds, 1 hall, 1 kitchen
  - Location: Jahangirnagar Society, Savar
  - Map link: `https://maps.app.goo.gl/5EawevRMfDMrDrV98`

### 8. Contact Section
- **Contact Information:** Phone numbers, emails, team profiles
- **Dark Mode:** Phone numbers visible in white in dark mode
- **Form:** Contact inquiry form with validation
- **Responsive:** Grid layout for contact cards

---

## Color Palette

### Primary Colors
- **Accent:** `#BE9F98` (Muted Rose/Taupe)
- **Brand Black:** Custom dark color for dark mode
- **White:** Standard white for light mode

### Usage
- Accent color used for: CTAs, badges, highlights, borders, icons
- Theme-aware text colors for readability across light/dark modes

---

## Component Structure

### Core Components
- `Navbar.tsx` - Navigation with theme toggle and menu
- `HeroSection.tsx` - Banner slider
- `LocationSection.tsx` - Interactive map display
- `LocationMap.tsx` - Leaflet map integration
- `FeaturedProjectsSection.tsx` - Project showcase
- `CTASection.tsx` - Contact and call-to-action

### Page Components
- `LandownersClient.tsx` - Landowners page client component
- `MissionVisionClient.tsx` - Mission & Vision page client component
- `ManagementTeamClient.tsx` - Team page client component
- `ChayabithiClient.tsx` - Chayabithi project page
- `ChayanirClient.tsx` - Chayanir project page
- `AdminClient.tsx` - Admin dashboard

### Shared Components
- `Logo.tsx` - Site logo component
- `ThemeToggleButton.tsx` - Dark/light mode toggle

---

## Recent Changes (Version 3.4.1)

### Location Updates
- Updated Chayabithi map URL to exact location embed
- Updated Chayanir map URL to exact location embed
- Renamed "Kaz Project" to "Chayanir" throughout
- Added "Coming Soon" placeholder with glassmorphism design
- Set map height to 500px with rounded corners
- Added lazy loading to map iframes
- Added "Open Map" buttons to individual project pages

### UI Refinements
- Fixed MD Message photo aspect ratio (4:5) with constrained width
- Reduced accent frame offset for cleaner look
- Adjusted name badge padding and text sizes
- Removed blur from landowners page background
- Moved landowners background image to form section

### Navigation
- Implemented dark opacity background for navbar
- Reduced logo size for better balance
- Ensured theme-aware text colors throughout

### Contact Section
- Fixed phone number visibility in dark mode (white text)

---

## Development Guidelines

### Code Style
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture
- Client-side components with 'use client' directive

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Horizontal scroll for mobile grids
- Desktop grid layouts

### Performance
- Lazy loading for images and iframes
- Optimized animations with GSAP and Framer Motion
- Efficient state management with React hooks

---

## Deployment

### Build Commands
```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint check
```

### Environment
- Next.js App Router
- Static generation where possible
- Client-side rendering for interactive components

---

## Contact & Support

**Development Team:** Gentrix Web Development Team  
**Project:** Kaj Properties Website  
**Version:** 3.4.1

---

*Last Updated: September 2026*
