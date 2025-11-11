import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call",
  description: "Let's explore how Avantage AI can automate your business, improve efficiency, and boost profits. Schedule a free discovery call to discover custom AI and software solutions designed just for your business.",
  keywords: "discovery call, business consultation, AI strategy, automation consultation, business transformation, free consultation",
  alternates: {
    canonical: '/sales',
  },
};

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

