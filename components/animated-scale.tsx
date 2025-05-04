"use client"

import { motion } from "framer-motion"
import { Scale } from "lucide-react"

export function AnimatedScale() {
  return (
    <div className="relative h-40 w-40 mx-auto">
      {/* Scale base */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-20 bg-[#4752c4]/20 rounded-md"
        animate={{ height: [20, 20, 20] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />

      {/* Scale icon */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <Scale size={64} className="text-[#4752c4]" />
      </motion.div>

      {/* Left scale pan */}
      <motion.div
        className="absolute bottom-10 left-0 w-16 h-2 bg-[#4752c4]/50 rounded-full"
        animate={{ y: [0, 15, -10, 5, -5, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-10 h-10 rounded-full border-2 border-[#4752c4]/50"
          animate={{ y: [0, 0, 0] }}
        />
      </motion.div>

      {/* Right scale pan */}
      <motion.div
        className="absolute bottom-10 right-0 w-16 h-2 bg-[#4752c4]/50 rounded-full"
        animate={{ y: [0, -10, 15, -5, 5, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-10 h-10 rounded-full border-2 border-[#4752c4]/50"
          animate={{ y: [0, 0, 0] }}
        />
      </motion.div>
    </div>
  )
}
