import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gemini Effect - AI Powered Solutions",
  description: "Experience our AI-powered solutions through an interactive scroll animation",
};

export default function GeminiEffectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

