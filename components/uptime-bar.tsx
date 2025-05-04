"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

interface UptimeDay {
  date: string
  status: "operational" | "maintenance" | "incident"
}

interface UptimeBarProps {
  days: UptimeDay[]
  uptimePercentage: number
}

export function UptimeBar({ days, uptimePercentage }: UptimeBarProps) {
  const [hoveredDay, setHoveredDay] = useState<UptimeDay | null>(null)

  const getStatusColor = (status: UptimeDay["status"]) => {
    switch (status) {
      case "operational":
        return "bg-green-500"
      case "maintenance":
        return "bg-yellow-500"
      case "incident":
        return "bg-red-500"
    }
  }

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle>System Uptime</CardTitle>
        <CardDescription>Last 90 days - {uptimePercentage.toFixed(2)}% uptime</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="flex gap-px h-8 mb-4">
            {days.map((day, index) => (
              <motion.div
                key={day.date}
                className={`flex-1 ${getStatusColor(day.status)} hover:opacity-75 cursor-pointer relative`}
                onMouseEnter={() => setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: index * 0.01 }}
              />
            ))}
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>90 days ago</span>
            <span>Today</span>
          </div>
          {hoveredDay && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 bg-popover text-popover-foreground px-3 py-1 rounded-md text-sm shadow-lg">
              <p className="whitespace-nowrap">
                {new Date(hoveredDay.date).toLocaleDateString()} - {hoveredDay.status}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
