# Hans Chemicals Pvt. Ltd Pvt. LTD Website

A modern, responsive website for Hans Chemicals Pvt. Ltd Pvt. LTD - a trusted chemical trading company since 1987.

## Features

- **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Layout**: Mobile-first design that works on all devices
- **Component Library**: Uses shadcn/ui for consistent, accessible components
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Optimized images and code splitting

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Playfair Display (headings)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hans-chemicals
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

To start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products page with filtering
│   ├── quality/           # Quality assurance page
│   ├── vendors/           # Vendor network page
│   ├── warehousing/       # Warehousing & logistics page
│   ├── layout.tsx         # Root layout with navbar/footer
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   └── footer.tsx        # Footer component
├── data/                 # Data files
│   └── products.ts       # Product data and types
└── lib/                  # Utility functions
    └── utils.ts          # Utility functions
```

## Pages

- **Home** (`/`) - Hero section, highlight cards, industries, testimonial
- **Products** (`/products`) - Product catalog with search and filtering
- **Quality** (`/quality`) - Quality assurance processes and certifications
- **Vendors** (`/vendors`) - Vendor network and partnership information
- **Warehousing** (`/warehousing`) - Storage capabilities and logistics
- **About** (`/about`) - Company history, values, and milestones
- **Contact** (`/contact`) - Contact form and department information

## Customization

### Colors
The design system uses custom colors defined in `src/app/globals.css`:
- Primary: Blue
- Accent Red: Red
- Accent Green: Green  
- Accent Yellow: Yellow

### Fonts
- **Body Text**: Inter (Google Fonts)
- **Headings**: Playfair Display (Google Fonts)

### Adding New Products
Edit `src/data/products.ts` to add new products to the catalog.

## Deployment

This project can be deployed on any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

## License

© 2024 Hans Chemicals Pvt. Ltd Pvt. LTD. All rights reserved.
