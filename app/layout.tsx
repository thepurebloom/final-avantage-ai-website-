import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Avantage AI",
  description: "3D Hero with Gemini waves",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-dvh bg-black text-foreground antialiased"
        style={{ ['--nav-h' as any]: '76px' }}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

