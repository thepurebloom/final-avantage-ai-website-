# Tubelight Navbar Component Guide

## ✅ What's Been Integrated

The tubelight navbar component has been successfully added to your project with all dependencies installed and configured.

## 📁 Files Created

1. **`/components/ui/tubelight-navbar.tsx`** - The main navbar component
2. **`/components/ui/navbar-demo.tsx`** - Pre-configured navbar with navigation items
3. **Updated `app/page.tsx`** - Navbar now appears at the top of your page

## 🎨 Features

- **Animated tubelight effect** - Active tab has a glowing "lamp" animation
- **Responsive design** - Shows text on desktop, icons on mobile
- **Smooth transitions** - Framer Motion powers the fluid animations
- **Fixed positioning** - Navbar stays at top on desktop, bottom on mobile
- **Glass morphism** - Backdrop blur with transparency

## 🎯 Current Navigation Items

The navbar is configured with these sections:
- **Home** → Links to `#hero` (hero section)
- **About** → Links to `#features` (features section)
- **Projects** → Links to `#gallery` (gallery section)
- **Contact** → Links to `#cta` (CTA section)

## 🔧 Customization

### Change Navigation Items

Edit `/components/ui/navbar-demo.tsx`:

```tsx
const navItems = [
  { name: 'Home', url: '#hero', icon: Home },
  { name: 'Services', url: '#services', icon: Briefcase },
  { name: 'Portfolio', url: '#portfolio', icon: FolderOpen },
  { name: 'Contact', url: '#contact', icon: Mail }
]
```

### Available Icons from Lucide

Import any icon from `lucide-react`:
```tsx
import { 
  Home, User, Briefcase, Mail, Phone, 
  Settings, Menu, Search, ShoppingCart,
  Heart, Star, Bell, Calendar, Clock
} from 'lucide-react'
```

Browse all icons: [https://lucide.dev/icons/](https://lucide.dev/icons/)

### Change Colors

The navbar uses your theme's primary color. To customize:

**Edit `app/globals.css`** - Change the primary color:
```css
:root {
  --primary: 222.2 47.4% 11.2%;  /* Dark blue */
}
```

Popular color options:
- **Blue**: `222.2 47.4% 11.2%`
- **Purple**: `262.1 83.3% 57.8%`
- **Green**: `142.1 76.2% 36.3%`
- **Orange**: `24.6 95% 53.1%`
- **Pink**: `330 81% 60%`

### Change Position

Edit the `className` in `tubelight-navbar.tsx`:
```tsx
// Top on all screens
"fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6"

// Bottom on all screens
"fixed bottom-0 left-1/2 -translate-x-1/2 z-50 pb-6"

// Current (top on desktop, bottom on mobile)
"fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6"
```

## 🚀 Usage Examples

### Basic Usage
```tsx
import { NavBarDemo } from "@/components/ui/navbar-demo"

export default function Page() {
  return (
    <>
      <NavBarDemo />
      {/* Your page content */}
    </>
  )
}
```

### Custom Configuration
```tsx
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, Info, Mail } from "lucide-react"

export function MyCustomNav() {
  const items = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: Info },
    { name: 'Contact', url: '/contact', icon: Mail }
  ]
  
  return <NavBar items={items} className="mt-10" />
}
```

## 📱 Responsive Behavior

- **Desktop (md+)**: Shows full text labels
- **Mobile (< md)**: Shows only icons
- **All screens**: Smooth animations and transitions

## 🎭 Animation Details

The "tubelight" effect includes:
- **Spring animation** when switching tabs
- **Blur effects** for the glow
- **Layout animations** powered by Framer Motion's `layoutId`

## 🔗 Dependencies

- ✅ `lucide-react` - Icons
- ✅ `framer-motion` - Animations
- ✅ `next/link` - Navigation
- ✅ `@/lib/utils` - Utility functions

All dependencies are installed and configured!

## 💡 Tips

1. **Smooth scrolling**: Add this to `globals.css` for smooth anchor scrolling:
```css
html {
  scroll-behavior: smooth;
}
```

2. **Active state**: The navbar tracks which tab is active. Click a tab to see the tubelight animation!

3. **Custom styling**: Pass additional classes via the `className` prop:
```tsx
<NavBar items={items} className="bg-black/20" />
```

---

**Need help?** The navbar component is fully typed with TypeScript for excellent IntelliSense support!

