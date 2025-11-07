# Routes Guide - Avantage AI Website

## 📍 Available Routes

Your Next.js application now has the following routes configured:

### 1. **Home Page** - `/`
**URL:** [http://localhost:3000/](http://localhost:3000/)

**Content:**
- 🅰️ Logo (top-left)
- 🧭 Navigation bar
- 🎨 Hero section with 3D Spline animation
- 📦 Features section (3 placeholder cards)
- 🖼️ Gallery section (6 placeholder images)
- 📞 CTA (Call-to-Action) section

**File:** `/app/page.tsx`

---

### 2. **Gemini Effect Demo** - `/geminieffect`
**URL:** [http://localhost:3000/geminieffect](http://localhost:3000/geminieffect)

**Content:**
- 🅰️ Logo (top-left)
- 🧭 Navigation bar
- ⬅️ Back to Home button (top-left, below logo)
- ✨ Google Gemini Effect - Full scroll animation
  - 5 colorful animated SVG paths
  - Scroll-triggered animations
  - 400vh tall section for extended scroll experience

**File:** `/app/geminieffect/page.tsx`

**SEO:**
- Title: "Gemini Effect - AI Powered Solutions"
- Description: "Experience our AI-powered solutions through an interactive scroll animation"

---

## 🧭 Navigation Structure

The navigation bar now includes a link to the Gemini Effect:

```
┌─────────────────────────────────────┐
│  Home | About | Demo | Contact      │
│   /   | #features | /geminieffect  │
└─────────────────────────────────────┘
```

### Navigation Items:
1. **Home** (`/`) - Goes to homepage
2. **About** (`#features`) - Scrolls to features section on home
3. **Demo** (`/geminieffect`) - Opens Gemini Effect page ✨ NEW!
4. **Contact** (`#cta`) - Scrolls to CTA section on home

**Icon:** Sparkles ✨ icon for the Demo link

---

## 📁 File Structure

```
app/
├── page.tsx                    # Home page (/)
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles
└── geminieffect/
    ├── page.tsx                # Gemini Effect page (/geminieffect)
    └── layout.tsx              # Gemini Effect layout (metadata)

components/
└── ui/
    ├── hero-spline-demo.tsx
    ├── navbar-demo.tsx         # Updated with Demo link
    ├── tubelight-navbar.tsx
    ├── logo-top-left.tsx
    ├── google-gemini-effect.tsx
    └── google-gemini-demo.tsx
```

---

## 🔗 Adding New Routes

To add a new route in Next.js App Router:

### 1. Create a new folder in `/app`
```bash
mkdir app/yourroute
```

### 2. Create a `page.tsx` file
```tsx
// app/yourroute/page.tsx
export default function YourPage() {
  return (
    <div>
      <h1>Your Page Content</h1>
    </div>
  );
}
```

### 3. (Optional) Add metadata
```tsx
// app/yourroute/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your page description",
};

export default function YourRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

### 4. Access at: `http://localhost:3000/yourroute`

---

## 🎨 Route Examples

### Dynamic Routes
```
app/blog/[slug]/page.tsx  →  /blog/my-post
app/products/[id]/page.tsx  →  /products/123
```

### Nested Routes
```
app/dashboard/page.tsx         →  /dashboard
app/dashboard/settings/page.tsx  →  /dashboard/settings
```

### Route Groups (no URL segment)
```
app/(marketing)/page.tsx   →  /
app/(marketing)/about/page.tsx  →  /about
```

---

## 🧭 Navigation Between Routes

### Using Link Component (Recommended)
```tsx
import Link from "next/link";

<Link href="/geminieffect">View Demo</Link>
```

### Using useRouter Hook
```tsx
'use client'
import { useRouter } from 'next/navigation';

export default function MyComponent() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/geminieffect');
  };
  
  return <button onClick={handleClick}>Go to Demo</button>;
}
```

### External Links
```tsx
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>
```

---

## 🔍 Anchor Links (Same Page)

For scrolling within the same page:

```tsx
<Link href="#features">Scroll to Features</Link>

// Target element needs an id:
<section id="features">...</section>
```

**Current anchor links:**
- `#hero` - Hero section
- `#features` - Features section
- `#gallery` - Gallery section
- `#cta` - CTA section

---

## 📱 Testing Routes

### Development Server
```bash
npm run dev
```

**Test URLs:**
- Home: [http://localhost:3000/](http://localhost:3000/)
- Gemini Effect: [http://localhost:3000/geminieffect](http://localhost:3000/geminieffect)

### Production Build
```bash
npm run build
npm start
```

---

## 🎯 Common Route Patterns

### 1. About Page
```bash
mkdir app/about
# Create app/about/page.tsx
# Access at: /about
```

### 2. Services Page
```bash
mkdir app/services
# Create app/services/page.tsx
# Access at: /services
```

### 3. Contact Page
```bash
mkdir app/contact
# Create app/contact/page.tsx
# Access at: /contact
```

### 4. Blog with Dynamic Posts
```bash
mkdir -p app/blog/[slug]
# Create app/blog/[slug]/page.tsx
# Access at: /blog/any-post-slug
```

---

## 🚀 Next Steps

### Expand Your Site:

1. **Create an About page** at `/about`
2. **Add a Services page** at `/services`
3. **Build a Contact form** at `/contact`
4. **Set up a Blog** with dynamic routes
5. **Add a Portfolio** at `/portfolio`

### Update Navigation:

After creating new pages, update `/components/ui/navbar-demo.tsx`:

```tsx
const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/about', icon: User },
  { name: 'Services', url: '/services', icon: Briefcase },
  { name: 'Contact', url: '/contact', icon: Mail }
]
```

---

## 📚 Resources

- [Next.js Routing Docs](https://nextjs.org/docs/app/building-your-application/routing)
- [Next.js Link Component](https://nextjs.org/docs/app/api-reference/components/link)
- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

---

**Your routes are ready! Navigate between pages seamlessly. 🎉**

