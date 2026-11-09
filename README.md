# FORM & FADE

### Premium Digital Business Hub

FORM & FADE is a fictional barber studio created to demonstrate a reusable, mobile-first digital business hub for independent service professionals.

The application combines professional branding, service information, portfolio photography, and external booking links into one streamlined website.

> Portfolio demonstration only. FORM & FADE is not a real operating barbershop.

**Live Demo:** https://form-and-fade-seven.vercel.app/

**Source Code:** https://github.com/Geniozx/form-and-fade

## Project Goals

- Build a premium alternative to a basic link-in-bio page.
- Provide a mobile-first experience for customers arriving through social media or NFC business cards.
- Direct customers to an existing third-party booking platform.
- Showcase services, pricing, gallery images, and contact information.
- Create a reusable foundation for future client websites.
- Demonstrate modern frontend development and responsive design.

## Technology Stack

- React
- Vite
- JavaScript
- Custom CSS
- ESLint
- Git / GitHub
- Vercel (hosting and continuous deployment)

No backend or database is required for Version 1.0.

## Design System

FORM & FADE uses a Hybrid Editorial design direction.

### Colors

- Onyx: `#111111`
- Off-white: `#F7F7F5`
- Stone: `#D9D9D6`
- Graphite: `#595959`

### Typography

- Headings: Space Grotesk
- Body: Inter

### Visual Direction

- Dark cinematic hero
- Light editorial content sections
- Monochrome photography
- Minimal navigation
- Strong booking calls to action
- Responsive mobile-first layouts

## Version 1.0 — Completed Features

1. Hero and brand introduction
2. Quick navigation links
3. Services and pricing
4. Responsive gallery with accessible lightbox
5. About section
6. Final booking call to action
7. Footer and contact information
8. Sticky mobile booking button
9. Configurable external booking URL
10. Responsive design and accessibility support

The application supports configurable links to an external booking provider.
Booking is intentionally disabled in this fictional portfolio demonstration.

The portfolio demonstration does not accept real appointments.

## Project Structure

```text
form-and-fade/
├── public/
│   ├── images/
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── components/
│   ├── config/
│   │   └── business.js
│   ├── sections/
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev -- --host
```

Run ESLint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

## Development Roadmap

### Phase 1 — Project Foundation

- [x] Initialize React + Vite
- [x] Configure ESLint
- [x] Establish project structure
- [x] Create design tokens and global styles
- [x] Create centralized business configuration
- [x] Render initial branded application
- [x] Finalize HTML metadata and verify production build
- [x] Initialize Git and publish repository

### Phase 2 — Core Layout

- [x] Responsive navigation
- [x] Hero section
- [x] Quick links
- [x] Booking CTA
- [x] Sticky mobile booking button

### Phase 3 — Business Content

- [x] Services and pricing
- [x] Gallery
- [x] About section
- [x] Footer

### Phase 4 — Interactions and Polish

- [x] Accessible gallery lightbox
- [x] Responsive refinements
- [x] Accessibility testing
- [x] Performance optimization

### Phase 5 — Production Readiness & Deployment

- [x] Production testing
- [x] SEO and metadata review
- [x] Static deployment to Vercel
- [x] Mobile navigation accessibility correction
- [x] Portfolio documentation

## Development Workflow

Each phase follows this process:

1. Implement features.
2. Test and verify functionality.
3. Update README documentation.
4. Commit changes.
5. Push to GitHub.
6. Begin the next phase.

## Disclaimer

FORM & FADE is a fictional business created for portfolio and demonstration purposes.

All services, prices, and branding are illustrative.





## Phase 2 — Core Layout & User Experience ✅

**Status:** Complete

### 2A — Responsive Navigation
- Built reusable Navbar component
- Added FORM & FADE branding
- Implemented desktop navigation links
- Added collapsible mobile navigation
- Included accessible menu toggle
- Connected booking availability to business configuration

### 2B — Cinematic Hero
- Built reusable Hero section
- Added business identity, tagline, and description
- Implemented editorial typography
- Added responsive two-column layout
- Created visual placeholder for future hero photography
- Added booking CTA and services navigation
- Included fictional-business disclaimer

### 2C — Quick Links
- Built responsive Quick Links section
- Added Services, Gallery, and About navigation cards
- Implemented minimalist editorial styling
- Added hover and keyboard-focus states
- Included reduced-motion support

### 2D — Sticky Mobile Booking CTA
- Built reusable StickyBookingCTA component
- Added fixed mobile booking action
- Implemented safe-area-aware positioning
- Reserved bottom spacing to prevent content obstruction
- Connected booking behavior to business configuration
- Disabled booking interaction for the fictional demo

### 2E — Verification
- ESLint checks passed
- Responsive navigation verified
- Hero and Quick Links visually verified
- Mobile sticky booking CTA verified
- Production build verified

### Current Page Structure

Navbar
  ↓
Hero
  ↓
Quick Links
  ↓
Sticky Mobile Booking CTA

### Next Phase

Phase 3 — Business Content

- Services & Pricing
- Gallery with accessible lightbox
- About section
- Final booking CTA
- Footer & Contact




## Phase 3 — Business Content ✅

**Status:** Complete

### 3A — Services & Pricing
- Built reusable Services component
- Rendered service information from business.js
- Added responsive service cards
- Included pricing, duration, and descriptions
- Added demo pricing disclaimer

### 3B — Gallery & Lightbox
- Built responsive gallery supporting up to 8 images
- Configured gallery content through business.js
- Added interactive image lightbox
- Implemented previous/next navigation
- Added keyboard arrow and Escape support
- Implemented focus management and scroll locking
- Added portfolio demonstration disclaimer

### 3C — About
- Built editorial About section
- Added studio philosophy and brand messaging
- Connected About content to business.js
- Implemented responsive split layout
- Added branded visual panel

### 3D — Final CTA & Footer
- Built reusable FinalCTA component
- Connected booking availability to business.js
- Added non-interactive demo booking state
- Built responsive Footer component
- Added configurable contact and social links
- Included fictional-business disclosure

### 3E — Quality Assurance
- ESLint verified
- Production build verified
- Desktop and mobile layouts reviewed
- Navigation and gallery interactions tested
- Demo booking behavior verified

### Completed Page Structure

1. Hero
2. Quick Links
3. Services & Pricing
4. Gallery
5. About
6. Final Booking CTA
7. Footer / Contact

Additional components:
- Responsive Navbar
- Sticky Mobile Booking CTA

### Next Phase

Phase 4 — Visual Polish, Accessibility, SEO & Performance



## Phase 4 — Visual Refinement & Accessibility ✅

### Phase 4A — Visual Refinement

- Expanded the design token system for consistent spacing, typography, borders, and interactions.
- Refined fluid typography and section layouts.
- Improved interactive hover and keyboard-focus styling.
- Polished gallery photography presentation and transitions.
- Preserved the approved Hybrid Editorial design direction.

### Phase 4B — Accessibility Refinement

- Improved mobile navigation accessibility and keyboard focus management.
- Added a floating mobile edge handle for reopening navigation after scrolling.
- Implemented accessible drawer focus trapping, Escape handling, backdrop dismissal, and focus restoration.
- Improved gallery lightbox keyboard navigation, focus trapping, and screen-reader announcements.
- Audited page landmarks, heading hierarchy, section semantics, and interactive elements.
- Verified responsive visual behavior and keyboard interactions.
- Preserved the fictional demonstration booking restrictions.

### Verification

- ESLint: Passed.
- Visual checks: Passed.
- Keyboard interaction checks: Passed where tested.
- Production build: Passed.

### Status

Phase 4 implementation complete.



## Phase 5 — Production Readiness & Deployment ✅

**Status:** Complete

### 5A — SEO & Metadata

- Updated the document title and meta description.
- Added Open Graph and Twitter/X sharing metadata.
- Created a custom SVG favicon.
- Added a 1200 × 630 social-sharing image.
- Configured canonical and social-sharing URLs for the production domain.
- Added `robots.txt`.
- Preserved `noindex, follow` because FORM & FADE is a fictional portfolio demonstration.

### 5B — Performance Optimization

- Optimized gallery photography for web delivery.
- Improved Google Fonts loading with preconnect links.
- Verified production asset generation using Vite.
- Reduced unnecessary assets by removing an unused SVG sprite.

### 5C — Functional QA & Accessibility

- Completed desktop and mobile functional testing.
- Verified responsive navigation and floating mobile edge handle.
- Verified gallery lightbox interactions and keyboard support.
- Corrected mobile drawer backdrop stacking.
- Improved text contrast across the interface.
- Corrected the floating navigation handle's focus and accessibility attributes.
- Confirmed the mobile navigation accessibility console warning was resolved on the deployed website.
- Preserved disabled booking functionality for the fictional business.

### Lighthouse Mobile Results

| Category | Score |
|---|---:|
| Performance | 98 / 100 |
| Accessibility | 100 / 100 |
| Best Practices | 100 / 100 |
| SEO | 66 / 100 |

The SEO score reflects the intentional `noindex` directive. FORM & FADE is not intended to appear as an operating barbershop in search results.

Lighthouse scores are snapshots and may vary between test runs. Automated accessibility testing does not replace comprehensive manual accessibility testing.

### 5D — Production Deployment

**Hosting:** Vercel
**Repository:** https://github.com/Geniozx/form-and-fade
**Live Website:** https://form-and-fade-seven.vercel.app/

- Connected the GitHub repository to Vercel.
- Configured Vite production builds.
- Deployed the application to a public HTTPS URL.
- Verified mobile navigation on the live deployment.
- Configured production canonical and social-sharing URLs.
- Established automatic deployment from the `main` branch.

### Version 1.0 — Release Scope

FORM & FADE is a mobile-first, single-page digital business hub demonstrating:

- Premium Hybrid Editorial branding.
- Responsive desktop and mobile navigation.
- Floating mobile navigation handle.
- Cinematic hero and editorial content sections.
- Services and illustrative pricing.
- Responsive photography gallery with accessible lightbox.
- About section and contact information.
- Configurable external booking links.
- Sticky mobile booking CTA.
- Centralized business configuration for reuse in future client projects.

**Demo limitations:**

- FORM & FADE is a fictional business.
- Booking is intentionally disabled.
- No real appointments or payments are accepted.
- No backend or database is required for Version 1.0.
- Services, prices, and branding are illustrative.

### Final Release

Version 1.0 is deployed as a portfolio demonstration and provides a reusable foundation for future independent service-business websites.