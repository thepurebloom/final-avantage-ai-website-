import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Avantage AI - Unfair Advantage in AI",
  description: "Avantage AI creates AI-powered software, apps, bots, and websites to help small and medium businesses automate operations, reduce costs, and increase efficiency.",
  keywords: "AI automation, business automation, custom software, AI-powered solutions, business efficiency, cost reduction",
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
    title: "Avantage AI - Unfair Advantage in AI",
    description: "Avantage AI creates AI-powered software, apps, bots, and websites to help small and medium businesses automate operations, reduce costs, and increase efficiency.",
    url: 'https://www.avantageai.com',
    siteName: 'Avantage AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Avantage AI - Unfair Advantage in AI",
    description: "AI-powered software, apps, bots, and websites for business automation",
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

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

