import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Avantage AI",
  description: "Discover how Avantage AI transforms businesses with automation, custom software, web & app development, marketing automation, e-commerce solutions, and impossible projects.",
  keywords: "AI automation, custom software development, web development, app development, marketing automation, e-commerce, CRM, ERP, business automation",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

