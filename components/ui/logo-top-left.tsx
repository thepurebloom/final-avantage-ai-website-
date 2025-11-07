"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoTopLeftProps {
  className?: string
  size?: number
}

export function LogoTopLeft({ className, size = 50 }: LogoTopLeftProps) {
  return (
    <Link
      href="#hero"
      className={cn(
        "fixed top-6 left-6 z-50 transition-transform hover:scale-110",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="Company Logo"
        width={size}
        height={size}
        className="object-contain drop-shadow-lg"
      />
    </Link>
  )
}

