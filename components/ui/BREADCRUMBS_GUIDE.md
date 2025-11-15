# Breadcrumbs Guide

## Overview

Breadcrumbs have been added to your website to improve navigation and user experience. They automatically appear on all pages except the home page.

## How It Works

### 1. Default Breadcrumbs (Automatic)
The breadcrumbs are integrated into the main layout at `/app/layout.tsx` and will automatically display on all pages based on the URL path.

**Example paths:**
- `/about` → Home > About Us
- `/services` → Home > Services
- `/blogs` → Home > Blog
- `/blogs/my-blog-post` → Home > Blog > My Blog Post
- `/contact` → Home > Contact

### 2. Features

✅ **Automatic Path Detection**: Breadcrumbs are generated based on the current URL
✅ **Custom Labels**: Route names are customized (e.g., "blogs" shows as "Blog")
✅ **Responsive Design**: Works perfectly on mobile and desktop
✅ **Dark Theme**: Matches your website's black background with purple/blue accents
✅ **Animated**: Smooth animations on page load using Framer Motion
✅ **Hover Effects**: Purple/blue gradient on hover for links
✅ **Home Icon**: First breadcrumb shows a home icon
✅ **Truncation**: Long titles are truncated to prevent layout issues

### 3. Customizing Route Labels

To customize how route names appear in breadcrumbs, edit the `routeLabels` object in `/components/ui/breadcrumbs.tsx`:

```typescript
const routeLabels: Record<string, string> = {
  "": "Home",
  "about": "About Us",
  "services": "Services",
  "blogs": "Blog",
  "contact": "Contact",
  "sales": "Sales",
  "geminieffect": "Gemini Effect",
  // Add more custom labels here
};
```

### 4. Styling

The breadcrumbs use:
- **Background**: Black with 50% opacity + backdrop blur
- **Border**: White with 5% opacity (bottom border)
- **Text Colors**: 
  - Active (current page): White
  - Links: White with 60% opacity
  - Hover: Purple to blue gradient
- **Separator**: ChevronRight icon with white 30% opacity

### 5. Page-Level Custom Breadcrumbs (Advanced)

For pages that need complete control over breadcrumbs (like blog posts with specific titles), you can use the `PageBreadcrumbs` component:

```tsx
import { PageBreadcrumbs } from "@/components/ui/page-breadcrumbs";

export default function CustomPage() {
  return (
    <>
      <PageBreadcrumbs 
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blogs" },
          { label: "Specific Blog Title", href: "/blogs/specific-post" }
        ]}
      />
      {/* Page content */}
    </>
  );
}
```

**Note**: If you use `PageBreadcrumbs`, you might want to hide the layout breadcrumbs for that specific page.

## Accessibility

- Uses semantic HTML with `<nav>` and `<ol>` tags
- Includes `aria-label="Breadcrumb"` for screen readers
- Current page has `aria-current="page"` attribute
- Links are keyboard navigable

## SEO Benefits

Breadcrumbs help with:
- **User Experience**: Easy navigation back to parent pages
- **SEO**: Search engines can better understand site structure
- **Reduced Bounce Rate**: Users can easily navigate to other sections
- **Mobile Navigation**: Especially helpful on mobile devices

## Examples

### Services Page
```
Home > Services
```

### Blog Post
```
Home > Blog > How Ai Can Transform Your Business
```

### About Page
```
Home > About Us
```

## Troubleshooting

### Breadcrumbs showing incorrectly formatted names
Update the `routeLabels` object in `/components/ui/breadcrumbs.tsx` to add custom labels for specific routes.

### Breadcrumbs not appearing
Check that the page is not the home page (`/`) - breadcrumbs are intentionally hidden on the home page.

### Styling conflicts
The breadcrumbs use Tailwind CSS classes. Make sure your global styles don't override these classes.

## Future Enhancements

Possible improvements you could add:
1. **Schema Markup**: Add JSON-LD breadcrumb schema for better SEO
2. **Dynamic Blog Titles**: Fetch actual blog titles from the data source
3. **Multi-language Support**: Add translations for different languages
4. **Custom Icons**: Use different icons for different sections
5. **Collapse on Mobile**: Show only last 2 breadcrumbs on very small screens



