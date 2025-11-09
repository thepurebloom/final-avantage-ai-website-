'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/geminieffect", label: "Demo" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const NAV_H = "76px";

  return (
    <header
      className="sticky top-0 z-50 bg-transparent"
      style={{ ['--nav-h' as any]: NAV_H }}
      aria-label="Main"
    >
      <div className="h-[var(--nav-h)]">
        <div className="mx-auto max-w-6xl h-full px-4">
          {/* Mobile Layout */}
          <div className="md:hidden h-full flex items-center justify-between">
            {/* Center: Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Avantage AI"
                  width={120}
                  height={120}
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Right: Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-auto p-2 text-white/80 hover:text-white relative z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Layout - 3-column grid */}
          <div className="hidden md:grid grid-cols-3 items-center h-full">
            {/* Left: Logo */}
            <div className="justify-self-start flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Avantage AI"
                  width={120}
                  height={120}
                  className="h-20 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Center: Nav */}
            <nav className="justify-self-center">
              <ul
                className={cn(
                  "flex items-center gap-6 rounded-full border border-white/15",
                  "bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5",
                  "px-4 py-2 text-sm text-white/80"
                )}
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: empty */}
            <div className="justify-self-end" />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-black/95 backdrop-blur-xl border-l border-white/10 md:hidden z-40"
          >
            <nav className="flex flex-col h-full pt-24 px-6">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-white/80 hover:text-white",
                        "hover:bg-white/5 transition-colors text-base font-medium"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-30"
          />
        )}
      </AnimatePresence>
    </header>
  );
}

