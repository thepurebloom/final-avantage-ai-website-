import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Discovery Call - Avantage AI",
  description: "Schedule a free 30-minute strategy session to discover how AI and automation can transform your business. No pressure, no pitch — just clarity.",
  keywords: "discovery call, business consultation, AI strategy, automation consultation, business transformation, free consultation",
};

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

