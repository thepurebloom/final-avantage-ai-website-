import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Avantage AI",
  description: "3D Hero with Gemini waves",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </head>
      <body
        className="min-h-dvh bg-black text-foreground antialiased"
        style={{ ['--nav-h' as any]: '76px' }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

