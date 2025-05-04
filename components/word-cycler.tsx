"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface WordCyclerProps {
  words: string[]
  interval?: number
  className?: string
}

export function WordCycler({ words, interval = 2000, className = "" }: WordCyclerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear any existing timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Main animation effect
  useEffect(() => {
    const currentWord = words[currentIndex]

    // If we're typing and haven't completed the word
    if (isTyping && displayText !== currentWord) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1))
      }, 100)
    }
    // If we've completed typing the word
    else if (isTyping && displayText === currentWord) {
      setIsTyping(false)
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true)
      }, 1000)
    }
    // If we're deleting and there's still text
    else if (isDeleting && displayText !== "") {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1))
      }, 50)
    }
    // If we've finished deleting
    else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setIsTyping(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }
  }, [displayText, isTyping, isDeleting, currentIndex, words])

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="ml-1 inline-block w-[2px] h-[1em] bg-white"
      />
    </span>
  )
}
