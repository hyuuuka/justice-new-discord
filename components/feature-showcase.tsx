"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, AlertTriangle, UserCheck, Bot, Lock, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    id: "anti-bot",
    title: "Anti-Bot Protection",
    description: "Advanced detection systems to identify and prevent malicious bots from joining your server.",
    icon: <Bot className="w-10 h-10 text-[#5865F2]" />,
    details: [
      "Machine learning algorithms to detect bot patterns",
      "Customizable verification challenges",
      "Automatic removal of detected bots",
      "Detailed logging of bot activity",
    ],
  },
  {
    id: "security",
    title: "Server Security",
    description: "Comprehensive security features to keep your Discord community safe from threats.",
    icon: <Shield className="w-10 h-10 text-[#5865F2]" />,
    details: [
      "Raid detection and prevention",
      "Phishing link detection",
      "Spam protection with customizable thresholds",
      "Automated lockdown during security incidents",
    ],
  },
  {
    id: "moderation",
    title: "Moderation Tools",
    description: "Powerful moderation capabilities to help your team maintain order efficiently.",
    icon: <UserCheck className="w-10 h-10 text-[#5865F2]" />,
    details: [
      "Case management system for tracking infractions",
      "Customizable auto-moderation rules",
      "Temporary and permanent ban management",
      "Moderator action logging and accountability",
    ],
  },
  {
    id: "monitoring",
    title: "Content Monitoring",
    description: "Intelligent content analysis to detect and handle inappropriate material.",
    icon: <Eye className="w-10 h-10 text-[#5865F2]" />,
    details: [
      "NSFW content detection",
      "Hate speech and harassment identification",
      "Customizable content filtering rules",
      "Context-aware message analysis",
    ],
  },
  {
    id: "alerts",
    title: "Alert System",
    description: "Real-time notifications for security events and moderation actions.",
    icon: <AlertTriangle className="w-10 h-10 text-[#5865F2]" />,
    details: [
      "Customizable alert channels",
      "Priority-based notification system",
      "Integration with external services",
      "Mobile notifications for critical events",
    ],
  },
  {
    id: "encryption",
    title: "Data Protection",
    description: "Secure handling of sensitive information with advanced encryption.",
    icon: <Lock className="w-10 h-10 text-[#5865F2]" />,
    details: [
      "End-to-end encryption for sensitive commands",
      "Secure storage of server configurations",
      "Privacy-focused logging options",
      "Regular security audits and updates",
    ],
  },
]

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            whileHover={{ y: -5 }}
            onClick={() => setActiveFeature(feature)}
            className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
              activeFeature.id === feature.id
                ? "bg-[#5865F2]/20 border border-[#5865F2]/50"
                : "bg-white/5 border border-white/10 hover:bg-white/10"
            }`}
          >
            <div className="flex items-center gap-3">
              {feature.icon}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFeature.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6"
        >
          <div className="flex items-center gap-4 mb-6">
            {activeFeature.icon}
            <div>
              <h2 className="text-2xl font-bold">{activeFeature.title}</h2>
              <p className="text-gray-300">{activeFeature.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeFeature.details.map((detail, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 min-w-[20px] h-5 flex items-center justify-center rounded-full bg-[#5865F2] text-white text-xs">
                      {index + 1}
                    </div>
                    <p>{detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
