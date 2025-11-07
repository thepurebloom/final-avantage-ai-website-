'use client';

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  // control header height here only
  const NAV_H = "76px"; // adjust if needed (e.g., 64–88px)

  return (
    <header
      className="sticky top-0 z-50 bg-transparent"
      style={{ ['--nav-h' as any]: NAV_H }}
      aria-label="Main"
    >
      <div className="h-[var(--nav-h)]">
        {/* 3-column grid keeps logo left and nav perfectly centered regardless of logo width */}
        <div className="mx-auto max-w-6xl h-full grid grid-cols-3 items-center px-4">
          {/* Left: Logo */}
          <div className="justify-self-start flex items-center gap-2">
            {/* Replace with your real logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Avantage AI"
                width={32}
                height={32}
                className="size-8 object-contain"
              />
              <span className="text-white/90 font-semibold tracking-wide">Avantage AI</span>
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
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/geminieffect" className="hover:text-white">Demo</Link></li>
            </ul>
          </nav>

          {/* Right: empty (or CTA/profile later) */}
          <div className="justify-self-end" />
        </div>
      </div>
    </header>
  );
}

