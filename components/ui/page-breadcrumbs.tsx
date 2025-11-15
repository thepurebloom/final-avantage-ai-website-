"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageBreadcrumbsProps {
  items?: BreadcrumbItem[];
}

/**
 * Page-level breadcrumbs component for custom breadcrumb navigation
 * Use this component when you need to override the default breadcrumbs in the layout
 * 
 * Example usage in a blog post page:
 * <PageBreadcrumbs 
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "Blog", href: "/blogs" },
 *     { label: "My Blog Post Title", href: "/blogs/my-blog-post" }
 *   ]}
 * />
 */
export function PageBreadcrumbs({ items = [] }: PageBreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full bg-black/50 backdrop-blur-sm border-b border-white/5"
    >
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 flex-wrap text-sm">
          {items.map((crumb, index) => {
            const isLast = index === items.length - 1;
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
                    className="flex items-center gap-1.5 text-white font-medium max-w-[300px] truncate"
                    aria-current="page"
                    title={crumb.label}
                  >
                    {isFirst && <Home className="w-4 h-4 shrink-0" />}
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
                        <Home className="w-4 h-4 group-hover:text-purple-400 transition-colors shrink-0" />
                      )}
                      <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all truncate max-w-[200px]">
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
  );
}



