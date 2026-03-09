# J.Style — CLAUDE.md

## Project Overview
Personal brand website for **Johana**, lifestyle and fashion consultant operating in **Punta Gorda, Sarasota, and Naples, FL**.
Business name: **J.Style**

---

## Tech Stack
| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS |
| CMS | Sanity.io (blog posts, testimonials, FAQ) |
| Contact Form | React Hook Form + Zod + Resend (email delivery) |
| Hosting | Vercel |
| Fonts | Cormorant Garant (headings) + Raleway (body) via Google Fonts |

---

## Design System

### Color Palette (Option B — Burgundy + Champagne + Gold)
```
--color-burgundy:    #6D2B3D   (primary dark, backgrounds, nav)
--color-wine:        #800020   (accent, hover states)
--color-champagne:   #F5E6C8   (light backgrounds, cards)
--color-ivory:       #FBF7F0   (page background)
--color-gold:        #C9A84C   (accents, borders, highlights)
--color-gold-light:  #E8D5A3   (subtle gold tints)
--color-text-dark:   #1A1A1A   (body text on light bg)
--color-text-light:  #FBF7F0   (text on dark bg)
```

### Typography
- **Headings**: Cormorant Garant — elegant, editorial serif with cursive qualities
- **Body**: Raleway — clean, geometric, pairs beautifully with Cormorant
- **Accent/Monogram**: Cormorant Garant Italic

### Logo
- **JS** monogram in Cormorant Garant Italic
- Rendered as SVG component: `src/components/Logo.tsx`

### Tone & Aesthetic
- Upper class, classy, timeless
- Never busy or loud — whitespace is intentional
- Gold accents used sparingly for elegance, not decoration

---

## Project Structure
```
src/
  app/
    layout.tsx              # Root layout (Navbar, Footer, fonts)
    page.tsx                # Home
    about/page.tsx
    services/page.tsx
    testimonials/page.tsx
    blog/
      page.tsx              # Blog index
      [slug]/page.tsx       # Individual post
    faq/page.tsx
    contact/page.tsx
    api/
      contact/route.ts      # Contact form API route (Resend)
  components/
    Navbar.tsx
    Footer.tsx
    Logo.tsx                # JS monogram SVG
    ui/                     # Reusable primitives (Button, Section, etc.)
  lib/
    sanity.ts               # Sanity client config
    sanity.queries.ts       # GROQ queries
    utils.ts
  sanity/
    schemaTypes/
      post.ts               # Blog post schema
      testimonial.ts
      faq.ts
      service.ts
```

---

## Environment Variables
```env
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token          # server-only, for writes
RESEND_API_KEY=your_resend_key       # contact form email delivery
```

---

## SEO Strategy
- Primary service areas: **Punta Gorda, FL** | **Sarasota, FL** | **Naples, FL**
- Target keywords: "personal stylist [city]", "wardrobe consultant [city]", "fashion stylist [city]", "lifestyle stylist southwest Florida"
- Each page uses Next.js `generateMetadata()` with city-targeted descriptions
- Structured data (JSON-LD) on Home and Services pages
- Blog used for long-form local content (e.g., "Best boutiques in Sarasota")

---

## Phases

### Phase 1 — Foundation (CURRENT)
**Goal:** Scaffold, design system, shared layout, and Home page live on Vercel.
- [x] Next.js project initialized with Tailwind
- [x] Dependencies installed (Sanity, React Hook Form, Zod, Resend, lucide-react)
- [ ] Tailwind config: custom color tokens + font families
- [ ] Google Fonts integrated (Cormorant Garant + Raleway)
- [ ] Logo component (JS monogram SVG)
- [ ] Navbar (links, mobile menu)
- [ ] Footer (links, tagline, social placeholders)
- [ ] Home page (Hero, tagline, services teaser, CTA to book)
- [ ] Deploy to Vercel, confirm live

### Phase 2 — Core Pages
**Goal:** All static pages built and styled.
- [ ] About page (photo placeholder, philosophy section)
- [ ] Services page (4 services: Personal Styling, Wardrobe Audit, Shopping Accompaniment, Virtual Styling)
- [ ] Testimonials page (placeholder cards)
- [ ] FAQ page (placeholder accordion)
- [ ] Contact page (form + Calendly CTA)

### Phase 3 — CMS Integration (Sanity)
**Goal:** Blog, testimonials, and FAQ driven by Sanity.
- [ ] Sanity project created at sanity.io
- [ ] Sanity schemas: post, testimonial, faq, service
- [ ] Sanity Studio embedded at `/studio` route
- [ ] Blog index page pulling from Sanity
- [ ] Blog post page with full content rendering
- [ ] Testimonials page pulling live from Sanity
- [ ] FAQ page pulling live from Sanity
- [ ] Seed content: 1 sample blog post, 3 testimonials, 5 FAQs

### Phase 4 — Contact Form & Email
**Goal:** Working contact form that delivers email to Johana.
- [ ] API route: `POST /api/contact`
- [ ] Resend integration (or fallback: Formspree)
- [ ] React Hook Form + Zod validation on frontend
- [ ] Success/error states on form
- [ ] Spam protection (honeypot or Turnstile)

### Phase 5 — SEO & Performance
**Goal:** Site is discoverable in Punta Gorda, Sarasota, Naples.
- [ ] `generateMetadata()` on all pages with local keywords
- [ ] JSON-LD structured data (LocalBusiness schema) on Home
- [ ] `sitemap.ts` — auto-generated sitemap including blog posts
- [ ] `robots.ts`
- [ ] Open Graph images for social sharing
- [ ] Google Analytics / Vercel Analytics
- [ ] Page speed audit (Lighthouse score target: 90+)

### Phase 6 — Polish & Launch
**Goal:** Final QA, real content, go live.
- [ ] Replace all placeholder photos with real images
- [ ] Replace placeholder testimonials with real ones
- [ ] Final copywriting pass on all pages
- [ ] Mobile responsiveness QA across breakpoints
- [ ] Cross-browser check
- [ ] Domain connected on Vercel
- [ ] Redirect www → non-www (or vice versa)
- [ ] Submit to Google Search Console

---

## Mood Board Tool (External — Phase 3+)
Using **Milanote** (free tier) for per-client visual boards.
- Johana creates a board per client
- Client receives a view/interact link
- No coding required
- Upgrade to paid if boards exceed free tier limits

---

## Placeholder URLs (to replace before launch)
- Calendly booking: `https://calendly.com/jstyle-placeholder`
- Instagram: `https://instagram.com/jstyle`
- Pinterest: `https://pinterest.com/jstyle`

---

## Notes & Conventions
- All components use `"use client"` only when interactivity is required (forms, mobile menu)
- Images: use `next/image` with proper `alt` tags
- No inline styles — all styling via Tailwind utility classes and CSS variables
- Sanity image URLs built with `@sanity/image-url`
- Keep components small and focused — one responsibility per file
- Color tokens defined in `tailwind.config.ts` so they're available as utility classes
