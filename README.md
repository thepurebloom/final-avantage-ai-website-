# My Site - Next.js with 3D Hero Component

A modern Next.js website featuring an interactive 3D hero section powered by Spline, styled with Tailwind CSS, and built using shadcn/ui components.

## 🚀 Tech Stack

- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component architecture
- **Spline** for 3D interactive scenes
- **Framer Motion** for animations

## 📁 Project Structure

```
/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage with hero and sections
│   └── globals.css          # Global styles and CSS variables
├── components/
│   └── ui/                  # shadcn/ui components (primitives)
│       ├── card.tsx         # Card component
│       ├── spotlight.tsx    # Spotlight animation effect
│       ├── spline.tsx       # Spline scene wrapper
│       └── hero-spline-demo.tsx  # Hero component with 3D scene
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js, React, and TypeScript
- Tailwind CSS and PostCSS
- Spline runtime and React wrapper
- Utility libraries (clsx, tailwind-merge)
- Framer Motion

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 🎨 Component Architecture

### Why `/components/ui`?

All primitive UI building blocks live in `/components/ui` for:
- **Consistency**: Single source of truth for reusable components
- **Discoverability**: Easy to find and import components
- **Import Hygiene**: Clean imports with `@/components/ui/...`
- **Separation**: Feature-specific components stay close to routes

### Components Overview

#### `Card` (`components/ui/card.tsx`)
Shadcn/ui card component with header, content, and footer sections.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
```

#### `Spotlight` (`components/ui/spotlight.tsx`)
Animated spotlight effect (Aceternity UI style) that fades in on load.

```tsx
import { Spotlight } from "@/components/ui/spotlight";

<Spotlight className="-top-40 left-0" fill="white" />
```

#### `SplineScene` (`components/ui/spline.tsx`)
Client-side wrapper for Spline 3D scenes with loading fallback.

```tsx
import { SplineScene } from "@/components/ui/spline";

<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  className="w-full h-full"
/>
```

#### `SplineSceneBasic` (`components/ui/hero-spline-demo.tsx`)
Complete hero section combining spotlight, card, and 3D scene.

```tsx
import { SplineSceneBasic } from "@/components/ui/hero-spline-demo";

<SplineSceneBasic />
```

## 🎯 Current Features

- ✅ Interactive 3D hero section with Spline
- ✅ Animated spotlight effect
- ✅ Responsive grid layouts
- ✅ Placeholder sections (features, gallery, CTA)
- ✅ Dark mode support (configured, toggle not yet added)
- ✅ TypeScript throughout
- ✅ Optimized Unsplash image placeholders

## 📝 Next Steps / Roadmap

### Immediate (Week 1)
- [ ] Replace Unsplash placeholders with real images
- [ ] Add Navbar with navigation links
- [ ] Add Footer with social links and copyright
- [ ] Customize hero text and 3D scene URL
- [ ] Add dark mode toggle component

### Short Term (Weeks 2-4)
- [ ] Create feature cards with icons (consider `lucide-react`)
- [ ] Build out CTA section with form or button
- [ ] Add more pages (About, Services, Contact, etc.)
- [ ] Set up SEO metadata and Open Graph tags
- [ ] Add favicons and app icons

### Medium Term (Months 2-3)
- [ ] Integrate CMS for dynamic content (Sanity, Contentful, etc.)
- [ ] Add blog section with MDX support
- [ ] Implement analytics (Vercel Analytics, Google Analytics)
- [ ] Add contact form with email service
- [ ] Performance optimizations (image optimization, code splitting)

### Long Term (Ongoing)
- [ ] A/B testing framework
- [ ] Multi-language support (i18n)
- [ ] E-commerce integration (if needed)
- [ ] Advanced animations with Framer Motion
- [ ] Accessibility audit and improvements

## 🧩 Adding Components

### Installing shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add dialog
# etc.
```

Components will be added to `/components/ui`.

### Adding Icons

```bash
npm install lucide-react
```

```tsx
import { ArrowRight, Menu, X } from "lucide-react";
```

## 🎨 Customization

### Tailwind Theme

Edit `tailwind.config.ts` to customize:
- Colors (update CSS variables in `app/globals.css`)
- Typography
- Spacing
- Breakpoints
- Animations

### CSS Variables

Edit CSS variables in `app/globals.css` under `:root` and `.dark`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* Add your brand colors here */
}
```

## 🚨 Important Notes

### Spline Scene
- Scenes are client-side only (`'use client'`)
- Lazy-loaded with suspense for better performance
- Loading fallback shows spinner (`.loader` class)
- Replace the demo scene URL with your own from [spline.design](https://spline.design)

### Performance Considerations
- Consider replacing Spline with static image on mobile
- Use `prefers-reduced-motion` media query for accessibility
- Optimize images with Next.js Image component
- Monitor Lighthouse scores (LCP, TBT, CLS)

### Responsiveness
- Hero is 2-column on `md:` breakpoint and up
- Stacks vertically on mobile (add `flex-col md:flex-row` if needed)
- Test on multiple devices and screen sizes

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Spline Design](https://spline.design/)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Contributing

This is a starting template. Expand and customize it for your specific needs!

## 📄 License

MIT License - feel free to use this for personal or commercial projects.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Spline**

