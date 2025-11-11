import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Avantage AI - Software & Web Development, AI Automation",
  description: "Transform your business with Avantage AI — experts in AI automation, web development, software solutions, and intelligent systems that reduce costs, boost profits, and help your business scale effortlessly. Serving Nagpur, Pune & Mumbai.",
  keywords: "AI automation, business automation, custom software, AI-powered solutions, business efficiency, cost reduction, web development, software development, Nagpur, Pune, Mumbai",
  authors: [{ name: "Avantage AI" }],
  creator: "Avantage AI",
  publisher: "Avantage AI",
  metadataBase: new URL('https://www.avantageai.com'),
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Avantage AI - Software & Web Development, AI Automation",
    description: "Transform your business with Avantage AI — experts in AI automation, web development, software solutions, and intelligent systems that reduce costs, boost profits, and help your business scale effortlessly. Serving Nagpur, Pune & Mumbai.",
    url: 'https://www.avantageai.com',
    siteName: 'Avantage AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Avantage AI - Software & Web Development, AI Automation",
    description: "Transform your business with Avantage AI — experts in AI automation, web development, software solutions, and intelligent systems that reduce costs, boost profits, and help your business scale effortlessly.",
    creator: '@AvantageAI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code here
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-dvh bg-black text-foreground antialiased"
        style={{ ['--nav-h' as any]: '76px' }}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WYW1WSJWX5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WYW1WSJWX5');
          `}
        </Script>

        {/* Organization & Website Structured Data */}
        <Script id="schema-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Avantage AI",
            "url": "https://www.avantageai.com",
            "logo": "https://www.avantageai.com/icon.png",
            "description": "Transform your business with Avantage AI — experts in AI automation, web development, software solutions, and intelligent systems that reduce costs, boost profits, and help your business scale effortlessly.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sumit Apartments, 493, Professor's Colony, Hanuman Nagar",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "postalCode": "440024",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919270856871",
              "contactType": "customer service",
              "email": "contact@avantageai.com",
              "areaServed": ["IN"],
              "availableLanguage": ["en", "hi"]
            },
            "sameAs": [
              "https://twitter.com/AvantageAI"
            ],
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "21.1458",
                "longitude": "79.0882"
              }
            },
            "founder": [
              {
                "@type": "Person",
                "name": "Sumit Thakur",
                "jobTitle": "Business Strategist & Advisor"
              },
              {
                "@type": "Person",
                "name": "Meer Sheikh",
                "jobTitle": "Technology Architect & AI Expert"
              }
            ]
          })}
        </Script>

        <Script id="schema-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Avantage AI",
            "url": "https://www.avantageai.com",
            "description": "AI automation, web development, and software solutions for businesses",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.avantageai.com/blogs?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader />
          <Breadcrumbs />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

