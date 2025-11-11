"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Custom labels for routes (you can customize these)
const routeLabels: Record<string, string> = {
  "": "Home",
  "about": "About Us",
  "services": "Services",
  "blogs": "Blog",
  "contact": "Contact",
  "sales": "Sales",
  "geminieffect": "Gemini Effect",
};

interface BreadcrumbsProps {
  customLabel?: string;
}

export function Breadcrumbs({ customLabel }: BreadcrumbsProps = {}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't show breadcrumbs on home page
  if (pathname === "/") {
    return null;
  }

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <nav className="w-full bg-black/50 backdrop-blur-sm border-b border-white/5">
        <div className="container mx-auto px-4 py-3">
          <div className="h-5" />
        </div>
      </nav>
    );
  }

  // Split pathname and filter out empty strings
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Generate breadcrumb items
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
  ];

  let currentPath = "";
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Use custom label for the last segment if provided
    const isLastSegment = index === pathSegments.length - 1;
    
    // Get custom label or format the segment
    let label: string;
    if (isLastSegment && customLabel) {
      label = customLabel;
    } else {
      label = routeLabels[segment] || segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    breadcrumbs.push({
      label,
      href: currentPath,
    });
  });

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `https://www.avantageai.com${crumb.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav
        aria-label="Breadcrumb"
        className="w-full bg-black/50 backdrop-blur-sm border-b border-white/5"
      >
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 flex-wrap text-sm">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isFirst = index === 0;

            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {/* Separator */}
                {!isFirst && (
                  <ChevronRight className="w-4 h-4 text-white/30 shrink-0" />
                )}

                {/* Breadcrumb Link */}
                {isLast ? (
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-1.5 text-white font-medium"
                    aria-current="page"
                  >
                    {isFirst && <Home className="w-4 h-4" />}
                    {crumb.label}
                  </motion.span>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={crumb.href}
                      className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-200 group"
                    >
                      {isFirst && (
                        <Home className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                      )}
                      <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                        {crumb.label}
                      </span>
                    </Link>
                  </motion.div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
    </>
  );
}

