
# FORM & FADE

### Premium Digital Business Hub

FORM & FADE is a fictional barber studio created to demonstrate a reusable, mobile-first digital business hub for independent service professionals.

The application combines professional branding, service information, portfolio photography, and external booking links into one streamlined website.

> Portfolio demonstration only. FORM & FADE is not a real operating barbershop.

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

No backend or database is required for Version 1.0.

## Design System

FORM & FADE uses a Hybrid Editorial design direction.

### Colors

- Onyx: `#111111`
- Off-white: `#F7F7F5`
- Stone: `#D9D9D6`
- Graphite: `#777777`

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

## Version 1.0 — Planned Features

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

Booking functionality is handled by an external provider.

The portfolio demonstration does not accept real appointments.

## Project Structure

```text
form-and-fade/
├── public/
│   └── images/
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
- [ ] Finalize HTML metadata and verify production build
- [ ] Initialize Git and publish repository

### Phase 2 — Core Layout

- [ ] Responsive navigation
- [ ] Hero section
- [ ] Quick links
- [ ] Booking CTA
- [ ] Sticky mobile booking button

### Phase 3 — Business Content

- [ ] Services and pricing
- [ ] Gallery
- [ ] About section
- [ ] Footer

### Phase 4 — Interactions and Polish

- [ ] Accessible gallery lightbox
- [ ] Responsive refinements
- [ ] Accessibility testing
- [ ] Performance optimization

### Phase 5 — Deployment

- [ ] Production testing
- [ ] SEO and metadata review
- [ ] Static deployment
- [ ] Portfolio documentation

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
