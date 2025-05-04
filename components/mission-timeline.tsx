"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelinePoint {
  year: string
  title: string
  description: string
}

const timelinePoints: TimelinePoint[] = [
  {
    year: "2020",
    title: "Foundation",
    description:
      "Discord Justice was founded with a mission to combat the rising tide of scams and create safer Discord communities for everyone.",
  },
  {
    year: "2021",
    title: "Growth & Development",
    description:
      "We expanded our team and developed advanced security algorithms to detect and prevent sophisticated scam attempts across Discord.",
  },
  {
    year: "2022",
    title: "Community Focus",
    description:
      "We established partnerships with major Discord communities and implemented community-driven reporting systems to enhance our effectiveness.",
  },
  {
    year: "2023",
    title: "Advanced Protection",
    description:
      "We launched our AI-powered protection systems, capable of identifying emerging threats and adapting to new scam techniques in real-time.",
  },
  {
    year: "Future",
    title: "Global Security",
    description:
      "Our vision is to become the standard for Discord security, protecting every community from scams and creating a safer platform for all users.",
  },
]

export function MissionTimeline() {
  const [activePoint, setActivePoint] = useState(0)

  return (
    <div className="w-full py-8">
      {/* Timeline */}
      <div className="relative mb-16">
        {/* Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 transform -translate-y-1/2 rounded-full">
          <motion.div
            className="h-full bg-[#4752c4] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(activePoint / (timelinePoints.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Points */}
        <div className="relative flex justify-between">
          {timelinePoints.map((point, index) => (
            <button
              key={index}
              onClick={() => setActivePoint(index)}
              className="relative z-10 flex flex-col items-center"
            >
              <motion.div
                className={cn(
                  "w-6 h-6 rounded-full border-2 cursor-pointer transition-colors duration-300",
                  index <= activePoint ? "bg-[#4752c4] border-[#4752c4]" : "bg-gray-800 border-gray-600",
                )}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              <span
                className={cn("mt-2 text-sm font-medium", index === activePoint ? "text-[#4752c4]" : "text-gray-400")}
              >
                {point.year}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        key={activePoint}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg"
      >
        <h3 className="text-2xl font-bold mb-2 text-gradient">{timelinePoints[activePoint].title}</h3>
        <p className="text-gray-300">{timelinePoints[activePoint].description}</p>
      </motion.div>
    </div>
  )
}
