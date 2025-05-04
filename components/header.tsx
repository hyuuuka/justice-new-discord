"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="bg-background/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Shield size={36} className="text-[#4752c4]" />
            </motion.div>
            <span className="text-2xl font-bold text-gradient">Discord Justice</span>
          </Link>
          <nav className="flex items-center gap-8">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-sm font-medium hover:text-[#4752c4] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm font-medium hover:text-[#4752c4] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm font-medium hover:text-[#4752c4] transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm font-medium hover:text-[#4752c4] transition-colors">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-sm font-medium hover:text-[#4752c4] transition-colors">
                  Status
                </Link>
              </li>
              <li>
                <Link href="/branding" className="text-sm font-medium hover:text-[#4752c4] transition-colors">
                  Branding
                </Link>
              </li>
            </ul>
            <Button variant="default" size="sm" className="rounded-full px-6 bg-[#4752c4] hover:bg-[#3a45a5]">
              Join Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
