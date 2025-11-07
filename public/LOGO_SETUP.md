# Logo Setup Guide

## 📍 Logo Placement - DONE! ✅

Your logo has been successfully integrated in two locations:

1. **Top Left Corner** - Fixed position, always visible
2. **Center of Navbar** - Between the navigation items

## 📁 How to Add Your Logo

### Step 1: Save Your Logo File

Place your logo image in the `/public` directory with the name `logo.png`:

```
/Users/meersheikh/Avantage AI Website/public/logo.png
```

### Step 2: Supported Formats

- ✅ PNG (recommended for transparency)
- ✅ SVG (best for scalability)
- ✅ JPG/JPEG
- ✅ WebP

### Step 3: Recommended Specifications

**Top Left Logo:**
- Size: 50x50px (default)
- Format: PNG with transparent background
- Resolution: @2x for retina displays (100x100px)

**Navbar Center Logo:**
- Size: 40x40px (default)
- Format: PNG with transparent background
- Resolution: @2x for retina displays (80x80px)

## 🎨 Customization Options

### Change Logo Size

**Top Left Logo** - Edit `/components/ui/logo-top-left.tsx`:
```tsx
<LogoTopLeft size={60} /> // Default is 50
```

**Navbar Logo** - Edit `/components/ui/tubelight-navbar.tsx` (line 93-98):
```tsx
<Image
  src="/logo.png"
  alt="Logo"
  width={50}  // Change from 40
  height={50} // Change from 40
  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
/>
```

### Change Logo Position

**Top Left Logo** - Edit the component:
```tsx
// Current: top-6 left-6
// Move to top-right: top-6 right-6
// Adjust spacing: top-8 left-8

<LogoTopLeft className="top-8 left-8" />
```

### Hide Logo from Navbar

In `/app/page.tsx`:
```tsx
// Pass showLogo={false} to NavBarDemo
// Or edit navbar-demo.tsx to pass it to NavBar component
```

### Use Different Logo for Dark Mode

Create two logo files:
- `logo-light.png` (for light backgrounds)
- `logo-dark.png` (for dark backgrounds)

Then update the component to conditionally render based on theme.

## 🔧 Current Implementation

### Files Modified:
1. ✅ `/components/ui/tubelight-navbar.tsx` - Navbar now splits items and shows logo in center
2. ✅ `/components/ui/logo-top-left.tsx` - New component for top-left logo
3. ✅ `/app/page.tsx` - Logo components added
4. ✅ `/next.config.js` - Image optimization configured

### Layout:
```
┌────────────────────────────────────────┐
│ 🅰️ Logo          [Navbar Center]       │
│ (Top Left)    Home | 🅰️ | Projects      │
│                                        │
│           HERO SECTION                 │
│                                        │
└────────────────────────────────────────┘
```

### Navigation Items Split:
- **Left of Logo**: Home, About (2 items)
- **Center**: Your Logo
- **Right of Logo**: Projects, Contact (2 items)

## 🎯 Quick Start

1. Save your logo as `/public/logo.png`
2. Refresh your browser at http://localhost:3000
3. See your logo in:
   - Top left corner (fixed position)
   - Center of navbar (between nav items)

## 💡 Pro Tips

1. **Transparent Background**: Use PNG with transparency for best results
2. **SVG Format**: For perfect scaling at any size, use SVG
3. **Hover Effect**: The top-left logo has a subtle scale effect on hover
4. **Mobile Responsive**: Logos automatically adjust size on mobile devices
5. **Performance**: Next.js Image component optimizes your logo automatically

## 🚨 Troubleshooting

**Logo not showing?**
- Check that file exists at `/public/logo.png`
- Verify file name is exactly `logo.png` (case-sensitive)
- Clear browser cache and refresh
- Check browser console for errors

**Logo looks blurry?**
- Use @2x resolution (double the display size)
- Try SVG format for perfect clarity
- Ensure source image is high quality

**Logo too big/small?**
- Adjust the `size` prop (top-left)
- Modify `width` and `height` in Image component
- Update `className` dimensions

---

**Your logo is ready to shine! 🌟**

