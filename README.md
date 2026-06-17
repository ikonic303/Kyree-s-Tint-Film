# Kyree's Tint &amp; Film — React site

A React + Vite conversion of the Kyree's Tint &amp; Film marketing site. Dark premium-automotive theme, green/black palette, Fraunces + Inter type. Six routes: Home, Services, Gallery, Reviews, Quote, Contact.

## Run it

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Structure

```
index.html                  Vite entry, font links, JSON-LD LocalBusiness schema
src/
  main.jsx                  React root + BrowserRouter
  App.jsx                   Routes
  index.css                 Resets, hover states, media queries (everything inline styles can't do)
  lib/css.js                css() helper — turns a CSS string into a React style object
  components/
    Layout.jsx              Announcement bar, sticky nav, mobile menu, footer, sticky mobile CTA bar
    Icons.jsx               Reusable inline SVG icons
  pages/
    Home.jsx                Hero, trust bar, services, why-us, gallery preview, reviews,
                            how-it-works, Indiana tint law, FAQ accordion, final CTA
    Services.jsx            Six service detail rows
    Gallery.jsx             Category-filtered work grid
    Reviews.jsx             5.0 summary + masonry review wall
    Quote.jsx               Quote/booking form (composes a prefilled email on submit)
    Contact.jsx             Contact methods, hours, service area, map placeholder
```

## About the styling

To keep the conversion pixel-faithful to the original design, static inline styles are written
as CSS strings and passed through a tiny `css()` helper (`src/lib/css.js`) that converts them to
React style objects. Hover and responsive behavior — which inline styles can't express — lives in
`src/index.css` as utility classes (`.btn-primary`, `.navlink`, `.svc-card`, `.nav-links`, etc.).

This is a pragmatic shim, not a constraint: refactor toward CSS Modules, Tailwind, or
styled-components whenever you like.

## To finish before launch

- **Photos** — gallery and service panels use styled placeholders. Drop real images in and
  replace the placeholder `<div>` backgrounds with `<img>`.
- **Reviews** — sample copy; swap in real Facebook/Google reviews.
- **Hours** — set to "By appointment"; update in `Contact.jsx`.
- **Quote form** — currently composes a prefilled email (`mailto:`). Wire `submit()` in
  `Quote.jsx` to your CRM/webhook for real lead capture.
- **Map** — replace the placeholder in `Contact.jsx` with a Google Maps embed.
- **Social link** — the Facebook link in `Contact.jsx` points to facebook.com; set the real URL.
