# AutoStrata.ai — Company Website

AI‑powered IT solutions: agentic AI, automation, data science, and full‑stack development.

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Content:** MDX with gray-matter + next-mdx-remote
- **Language:** TypeScript

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → /out
```

## Project Structure

```
app/
  page.tsx                # Homepage (8 sections)
  about/                  # About page
  contact/                # Contact form (Formspree)
  services/               # Services overview
  services/[slug]/        # Service detail (MDX)
  work/                   # Case studies list
  work/[slug]/            # Case study detail (MDX)
  insights/               # Blog list
  insights/[slug]/        # Blog post detail (MDX)
  process/                # Process timeline
  products/               # Products list + [slug] detail
  privacy/                # Privacy policy

components/               # Reusable UI components
content/
  work/*.mdx              # Case study content
  insights/*.mdx          # Blog post content
  services/*.mdx          # Service page content
lib/
  content.ts              # MDX content loader
  seo.ts                  # JSON-LD schema generators
  testimonials.ts         # Testimonial data
  faq.ts                  # FAQ data
  services-data.ts        # Services grid data
  products.ts             # Product catalogue
```

## Adding Content

### Add a Case Study

Create `content/work/your-slug.mdx`:

```mdx
---
title: "Project Title"
description: "Short description"
client: "Client Name"
industry: "Industry"
services: ["Service 1", "Service 2"]
results:
  - "Metric 1"
  - "Metric 2"
date: "2025-01-01"
featured: true
coverImage: "/og-image.png"
---

## The Problem
...

## Our Solution
...

## Tech Stack
...

## Results
...
```

### Add a Blog Post

Create `content/insights/your-slug.mdx`:

```mdx
---
title: "Post Title"
description: "Short description"
author: "AutoStrata Team"
category: "Strategy"
readTime: "5 min read"
date: "2025-01-01"
coverImage: "/og-image.png"
---

Your markdown content here...
```

### Add a Service Page

Create `content/services/your-slug.mdx`:

```mdx
---
title: "Service Name"
description: "Short description"
icon: "🤖"
benefits:
  - "Benefit 1"
  - "Benefit 2"
order: 5
date: "2024-01-01"
---

Your markdown content here...
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
```

## Deployment

The site is configured for static export. Run `npm run build` and deploy the `/out` directory to any static host (Vercel, Netlify, Cloudflare Pages).
