"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { Shield, Scale, BookOpen, Users, Lightbulb } from "lucide-react"

interface TimelinePoint {
  title: string
  description: string
  icon: React.ReactNode
}

const missionPoints: TimelinePoint[] = [
  {
    title: "Protection",
    description:
      "We safeguard Discord communities from scammers, malicious bots, and harmful content through advanced detection systems.",
    icon: <Shield className="w-5 h-5 text-[#4752c4]" />,
  },
  {
    title: "Fairness",
    description:
      "We ensure every case is handled with impartiality and transparency, giving all parties a chance to be heard.",
    icon: <Scale className="w-5 h-5 text-[#4752c4]" />,
  },
  {
    title: "Education",
    description: "We empower communities with knowledge about security best practices and emerging threats on Discord.",
    icon: <BookOpen className="w-5 h-5 text-[#4752c4]" />,
  },
  {
    title: "Community",
    description:
      "We foster a collaborative network of server owners and moderators dedicated to maintaining safe spaces.",
    icon: <Users className="w-5 h-5 text-[#4752c4]" />,
  },
  {
    title: "Innovation",
    description:
      "We continuously improve our systems to stay ahead of evolving threats and provide cutting-edge protection.",
    icon: <Lightbulb className="w-5 h-5 text-[#4752c4]" />,
  },
]

export function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activePoints, setActivePoints] = useState<boolean[]>(Array(missionPoints.length).fill(false))

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    missionPoints.forEach((_, index) => {
      const pointElement = document.getElementById(`mission-point-${index}`)
      if (!pointElement) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActivePoints((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }
          })
        },
        { threshold: 0.5 },
      )

      observer.observe(pointElement)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative py-6">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-700 rounded-full transform -translate-x-1/2">
        <motion.div className="w-full bg-[#4752c4] rounded-full origin-top" style={{ height: lineHeight }} />
      </div>

      {/* Points */}
      <div className="relative space-y-12">
        {missionPoints.map((point, index) => (
          <div
            id={`mission-point-${index}`}
            key={index}
            className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            {/* Simple dot */}
            <div className="absolute left-1/2 top-4 flex items-center justify-center transform -translate-x-1/2">
              <motion.div
                className={cn(
                  "w-6 h-6 rounded-full border-2 transition-colors duration-500",
                  activePoints[index] ? "bg-[#4752c4] border-[#4752c4]" : "bg-gray-800 border-gray-600",
                )}
                animate={activePoints[index] ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={activePoints[index] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className={`bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg w-5/12 ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-[#4752c4]/20 flex items-center justify-center">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-gradient">{point.title}</h3>
              </div>
              <p className="text-gray-300 text-sm">{point.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
