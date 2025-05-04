"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  slug: string
}

export function BlogCard({ title, excerpt, date, readTime, image, slug }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center text-sm text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="mr-4">{date}</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
