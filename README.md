# Intellect Arc — React + Material UI

A React/Vite conversion of the Intellect Arc landing page, built with Material UI (MUI) instead of Tailwind.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build to /dist
```

## Structure

```
src/
  theme.js              # MUI theme (light/dark palettes, brand colors)
  App.jsx                # Page composition + theme provider
  index.css              # Global resets & keyframe animations
  components/
    Navbar.jsx
    Hero.jsx
    GenreMarquee.jsx
    Features.jsx
    Experience.jsx        # Interactive showcase (see note below)
    AISection.jsx
    Gallery.jsx
    HowItWorks.jsx
    Stats.jsx              # Animated count-up stats
    Testimonials.jsx
    CTA.jsx
    Footer.jsx
    LiquidBlobs.jsx        # Ambient gradient background
    SectionEyebrow.jsx
    ContactSection.jsx
    Layout.jsx
    ScrollToTop.jsx
```

## Notes on the conversion

- **Layout & styling**: Tailwind utility classes were translated to MUI's `sx` prop and theme tokens. The purple/violet brand palette, gradients, and glassmorphism are preserved in `theme.js` and per-component `sx` styles.
- **Light/dark mode**: handled with React state (`useState`) in `App.jsx` and MUI's `ThemeProvider`, instead of the original `data-theme` attribute + `localStorage` script.
- **"Experience" section**: the original used a hand-rolled scroll-hijacking effect (a sticky viewport that translates a track based on scroll position). That's fragile outside plain JS/DOM and fights against React's rendering model, so it's been reimplemented as an interactive tabbed/dot-navigation carousel (`Experience.jsx`) that shows the same 7 feature panels with prev/next controls and dot navigation — same content, more maintainable interaction pattern.
- **Icons**: `iconify-icon` (`ph:*`) was swapped for `@mui/icons-material` equivalents.
- **Fonts**: Syne (display) + Inter (body) are loaded locally via `@fontsource`, replacing the Google Fonts `<link>`.
