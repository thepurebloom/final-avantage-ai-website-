import { BlogSection } from "@/components/ui/blog-section";
import Script from "next/script";

export const metadata = {
  title: "Avantage AI Blog",
  description: "Stay ahead with Avantage AI insights. Learn how AI, automation, and software systems can save time, cut costs, and increase profitability for small and medium-sized businesses in India.",
  alternates: {
    canonical: '/blogs',
  },
};

export default function BlogsPage() {
  return (
    <>
      {/* CollectionPage Structured Data */}
      <Script id="schema-blog-collection" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Avantage AI Blog",
          "description": "Stay ahead with Avantage AI insights. Learn how AI, automation, and software systems can save time, cut costs, and increase profitability for small and medium-sized businesses in India.",
          "url": "https://www.avantageai.com/blogs",
          "publisher": {
            "@type": "Organization",
            "name": "Avantage AI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.avantageai.com/icon.png"
            }
          },
          "mainEntity": {
            "@type": "Blog",
            "name": "Avantage AI Blog",
            "description": "Articles about AI automation, business efficiency, and software solutions",
            "publisher": {
              "@type": "Organization",
              "name": "Avantage AI"
            }
          }
        })}
      </Script>

      <div className="min-h-screen">
        <BlogSection />
      </div>
    </>
  );
}

