# Sai Shradha Engineering

Premium, responsive corporate website for **Sai Shradha Engineering**, a Pune-based engineering and fabrication company specializing in MS, SS, structural, industrial, and customized fabrication work.

## Live Website

**https://sai-shradha-engineering.vercel.app/**

## Overview

This project is a production-ready business website designed to present Sai Shradha Engineering's capabilities, fabrication work, company information, and contact details in a clean, premium industrial style.

### Highlights

- Responsive desktop, tablet, and mobile experience
- Premium editorial/industrial visual design
- Light and dark themes
- Real company branding and fabrication imagery
- Working enquiry form powered by EmailJS
- Individual pages for fabrication capabilities
- Google Maps location integration
- SEO metadata and canonical URLs
- Sitemap and robots configuration
- LocalBusiness structured data
- Open Graph sharing image for link previews
- GitHub → Vercel deployment workflow

## Services & Capabilities

The website presents seven primary fabrication capabilities:

1. **MS Fabrication** — Mild steel fabrication work
2. **SS Fabrication** — Stainless steel fabrication work
3. **Structural Fabrication** — Structural components and fabrication
4. **Industrial Fabrication** — Industrial and engineering applications
5. **Custom Fabrication** — Requirement-based fabrication
6. **Machine & Equipment** — Customized machine and equipment fabrication
7. **Welding & Assembly** — Welding and assembly work

## Main Pages

### Home

The homepage includes:

- Hero section
- Company introduction
- Featured fabrication work
- Capabilities
- Why Sai Shradha Engineering
- Enquiry/contact section
- Location
- Footer

### About

Includes:

- Company introduction
- Company strengths
- Services
- Mission
- Vision
- Closing statement

### Fabrication Services

`/products`

Displays all seven fabrication capabilities with images and navigation to their dedicated pages.

### Individual Service Pages

```text
/products/ms-fabrication
/products/ss-fabrication
/products/structural-fabrication
/products/industrial-fabrication
/products/custom-fabrication
/products/machine-equipment
/products/welding-assembly
```

These pages are generated from centralized product data.

## Features

### Enquiry System

The contact form uses **EmailJS** and supports:

- Customer name
- Email
- Phone
- Service selection
- Message
- Sending state
- Success state
- Error state
- Form reset after successful submission

### Navigation & Interaction

- Responsive navigation
- Mobile menu
- Theme switching
- Clickable service cards
- Clickable featured-work cards
- Direct phone/email actions
- Google Maps location link
- Accessible keyboard focus states

## Design System

The interface uses a minimal, premium industrial visual direction.

### Light Theme

- Warm white background
- Soft stone surfaces
- Charcoal typography
- Subtle borders
- High readability

### Dark Theme

- Obsidian background
- Warm ivory typography
- Dark elevated surfaces
- Subtle neutral borders

The company's blue/orange identity is retained primarily through its actual logo rather than forcing brand colors throughout the UI.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework and application architecture |
| React 19 | UI development |
| TypeScript | Type-safe development |
| Tailwind CSS v4 | Styling and responsive layouts |
| Lucide React | Interface icons |
| Motion | UI animation and interaction |
| EmailJS | Contact/enquiry delivery |
| Vercel | Production deployment |
| GitHub | Source control |

## Project Structure

```text
sai-shradha-engineering/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── products/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── icon.png
│   ├── opengraph-image.png
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── globals.css
│   └── layout.tsx
│
├── components/
│   ├── about/
│   ├── home/
│   ├── layout/
│   ├── products/
│   ├── seo/
│   └── ui/
│
├── data/
│   ├── company.ts
│   └── products.ts
│
├── public/
│   ├── google1f35148ada7076ab.html
│   └── images/
│       ├── hero/
│       ├── logo/
│       ├── products/
│       └── work/
│
├── .env.local
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Company Information

**Sai Shradha Engineering**

Sector No. 10, Plot No. 233/A, PCNTDA  
Near Water Tank, Bhosari  
Pune, Maharashtra 411026  
India

The company's configured phone numbers and email address are maintained in `data/company.ts`.

## Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

> Keep `.env.local` private and never commit it to GitHub.

## Getting Started

### Install dependencies

```bash
npm install
```

### Configure EmailJS

Create `.env.local` and add the required EmailJS public key, service ID, and template ID.

### Start development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Start production server

```bash
npm start
```

## Deployment

The production site is deployed through Vercel and connected to GitHub.

```text
Local changes
     ↓
npm run build
     ↓
Git commit
     ↓
GitHub
     ↓
Vercel
     ↓
Production
```

Run `npm run build` before pushing production changes.

## Data Architecture

Company information is centralized in:

```text
data/company.ts
```

Fabrication service data is centralized in:

```text
data/products.ts
```

This allows service pages, capability lists, navigation, and metadata to share the same source data.

## Image Organization

```text
public/images/
├── hero/
├── logo/
├── products/
└── work/
```

Company logo:

```text
public/images/logo/sai-shradha-logo.png
```

Open Graph sharing image:

```text
app/opengraph-image.png
```

Next.js automatically uses the Open Graph image for supported link-sharing previews.

## SEO

The project includes a practical SEO foundation:

- Page titles and descriptions
- Canonical URLs
- Open Graph metadata
- Twitter card metadata
- `sitemap.xml`
- `robots.txt`
- LocalBusiness structured data
- Google Search Console verification
- Google indexing setup
- Dedicated Open Graph sharing image

Generated/served SEO resources include:

```text
/sitemap.xml
/robots.txt
/opengraph-image.png
```

## Development Notes

- Keep company information in `data/company.ts`.
- Keep service information in `data/products.ts`.
- Use the existing design tokens in `app/globals.css`.
- Preserve responsive behavior when modifying components.
- Run `npm run build` before pushing production changes.
- Keep `.env.local` out of version control.
- Do not add unsupported company claims, certifications, reviews, or statistics.

## Credits

Designed and developed by **Vaidik Choudhary**.

Portfolio: **https://vaidikchoudhary.vercel.app**

## License

This website was developed specifically for Sai Shradha Engineering.

Website content, branding, logo, photography, and business information belong to their respective owners. Source code should not be reused or redistributed for another commercial project without appropriate permission.
