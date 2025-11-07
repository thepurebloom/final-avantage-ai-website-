"use client"

import { Home, User, Briefcase, Mail, Sparkles } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '#features', icon: User },
    { name: 'Demo', url: '/geminieffect', icon: Sparkles },
    { name: 'Contact', url: '#cta', icon: Mail }
  ]

  return <NavBar items={navItems} />
}

