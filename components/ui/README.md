# UI Components

This directory contains all primitive UI building blocks for the application. These components follow the shadcn/ui architecture pattern.

## 📦 Philosophy

All reusable UI components live here to ensure:

1. **Single Source of Truth**: One place for all primitives
2. **Consistency**: Uniform styling and behavior across the app
3. **Discoverability**: Easy to find and understand component structure
4. **Import Hygiene**: Clean imports with `@/components/ui/...`

## 🧩 Current Components

### `card.tsx`
Shadcn/ui card component with multiple sub-components:
- `Card` - Base container
- `CardHeader` - Top section
- `CardTitle` - Heading
- `CardDescription` - Subtitle
- `CardContent` - Main content area
- `CardFooter` - Bottom section

### `spotlight.tsx`
Animated spotlight SVG effect (Aceternity UI inspired). Fades in on page load.

### `spline.tsx`
Client-side wrapper for Spline 3D scenes with lazy loading and suspense fallback.

### `hero-spline-demo.tsx`
Complete hero section demonstrating Spline integration with spotlight effect.

## 🎯 Usage Guidelines

### Feature Components
Complex, feature-specific components should live close to their routes:
```
app/
├── (marketing)/
│   └── _components/
│       └── pricing-table.tsx  ← Feature-specific component
```

### Shared Primitives
But those components should still import primitives from `/components/ui`:
```tsx
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
```

## 🔧 Adding New Components

### Via shadcn CLI (Recommended)
```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add dialog
```

### Manually
1. Create file in `/components/ui/component-name.tsx`
2. Use the `cn()` utility from `@/lib/utils`
3. Follow React forwardRef pattern for DOM components
4. Export component(s) at the bottom

## 📝 Component Template

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const MyComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("base-classes-here", className)}
    {...props}
  />
));

MyComponent.displayName = "MyComponent";

export { MyComponent };
```

## 🎨 Styling Conventions

- Use Tailwind utility classes
- Use CSS variables from `app/globals.css` for theming
- Use the `cn()` helper to merge class names
- Support dark mode with `.dark:` prefix classes
- Make components composable and flexible

## 🚫 What NOT to Put Here

- Page-specific layouts
- Route-specific logic
- Business logic or data fetching
- Large feature modules
- API routes or server actions

---

**Keep it simple, reusable, and focused on UI primitives.**

