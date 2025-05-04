"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  { src: "/placeholder-logo.svg", alt: "Company 1" },
  { src: "/placeholder-logo.svg", alt: "Company 2" },
  { src: "/placeholder-logo.svg", alt: "Company 3" },
  { src: "/placeholder-logo.svg", alt: "Company 4" },
  { src: "/placeholder-logo.svg", alt: "Company 5" },
  { src: "/placeholder-logo.svg", alt: "Company 6" },
  { src: "/placeholder-logo.svg", alt: "Company 7" },
  { src: "/placeholder-logo.svg", alt: "Company 8" },
]

export function TrustedByLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    const containerWidth = container.offsetWidth

    const animation = container.animate(
      [{ transform: "translateX(0)" }, { transform: `translateX(-${scrollWidth / 2}px)` }],
      {
        duration: 30000,
        iterations: Number.POSITIVE_INFINITY,
        easing: "linear",
      },
    )

    return () => {
      animation.cancel()
    }
  }, [])

  return (
    <div
      className="w-full overflow-hidden py-10"
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div ref={containerRef} className="flex space-x-8 whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-40 h-20 relative"
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} fill className="object-contain invert" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
