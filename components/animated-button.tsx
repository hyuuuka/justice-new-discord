"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
}

export function AnimatedButton({ children, className, variant = "primary", ...props }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const variantClasses = {
    primary: "relative overflow-hidden bg-transparent border-2 border-[#4752c4] text-white",
    secondary: "relative overflow-hidden bg-transparent border-2 border-white text-white",
    outline: "relative overflow-hidden bg-transparent border-2 border-[#4752c4] text-[#4752c4]",
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
      <Button
        className={cn(variantClasses[variant], "z-10", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <motion.span
          className="relative z-10"
          animate={
            isHovered
              ? {
                  y: [0, -2, 0],
                }
              : {}
          }
          transition={{
            duration: 0.3,
            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
          }}
        >
          {children}
        </motion.span>

        {/* Background animation */}
        <motion.div
          className={`absolute inset-0 ${variant === "primary" ? "bg-[#4752c4]" : variant === "secondary" ? "bg-gray-800" : "bg-[#4752c4]/10"}`}
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "0%" : "-100%" }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: -1 }}
        />
      </Button>
    </motion.div>
  )
}
