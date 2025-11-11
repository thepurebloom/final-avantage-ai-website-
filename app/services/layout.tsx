import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Avantage AI Services | Web, Software & AI Automation Solutions for Businesses",
  description: "Explore Avantage AI's services — from website and software development to AI agents, automations, and smart business tools that help you scale, save, and grow. Your next business advantage starts here.",
  keywords: "AI automation, custom software development, web development, app development, marketing automation, e-commerce, CRM, ERP, business automation",
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Service Structured Data */}
      <Script id="schema-services" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Automation and Software Development Services",
          "provider": {
            "@type": "Organization",
            "name": "Avantage AI",
            "url": "https://www.avantageai.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI and Software Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Automation Services",
                  "description": "Automate repetitive tasks, lead collection, WhatsApp & email communication, invoicing, billing, HR management, and appointment scheduling.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Avantage AI"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Software Development",
                  "description": "Custom-built ERP & CRM systems, franchise management tools, HR & payroll platforms, and client management dashboards.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Avantage AI"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web & App Development",
                  "description": "High-converting websites, mobile apps for iOS & Android, SEO optimized, fast and secure builds.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Avantage AI"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Marketing & Sales Automation",
                  "description": "Lead generation funnels, automated follow-ups via WhatsApp & Email, CRM integration, and client onboarding systems.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Avantage AI"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-Commerce Solutions",
                  "description": "Automated e-commerce stores with AI-driven upsells, inventory management, CRM integration, and analytics.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Avantage AI"
                  }
                }
              }
            ]
          }
        })}
      </Script>
      {children}
    </>
  );
}

