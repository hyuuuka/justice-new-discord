"use client"

import type React from "react"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"
import { AnimatedButton } from "../components/animated-button"
import CasesCounter from "../components/cases-counter"
import { AnimateIn } from "../components/animate-in"
import { FeatureCard } from "../components/feature-card"
import { FluidParticles } from "../components/fluid-particles"
import { WordCycler } from "../components/word-cycler"
import { BlogCard } from "../components/blog-card"
import { ArrowRight, Shield, Scale, Gavel, Bot, Lock } from "lucide-react"
import { motion, useMotionValue } from "framer-motion"
import { ScrollTimeline } from "../components/scroll-timeline"

// Sample blog data for homepage
const latestBlogPosts = [
  {
    title: "How to Protect Your Discord Server from Scammers",
    excerpt: "Learn the essential steps to secure your Discord community and prevent scam attempts before they happen.",
    date: "April 10, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "protect-discord-server-from-scammers",
  },
  {
    title: "The Rise of Discord Scams and How to Combat Them",
    excerpt:
      "An in-depth look at the increasing prevalence of scams on Discord and effective strategies to combat them.",
    date: "March 25, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "rise-of-discord-scams",
  },
  {
    title: "Setting Up Effective Moderation for Large Discord Communities",
    excerpt:
      "A comprehensive guide to establishing robust moderation systems for Discord servers with thousands of members.",
    date: "March 15, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "effective-moderation-large-discord",
  },
]

export default function Home() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // Words that are synonymous with "Justice"
  const justiceWords = [
    "Justice",
    "Fairness",
    "Integrity",
    "Protection",
    "Security",
    "Equality",
    "Order",
    "Defense",
    "Guardian",
    "Shield",
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient text-on-gradient py-32 relative overflow-hidden">
          <FluidParticles className="opacity-70" />
          <div className="container mx-auto px-4 relative text-center">
            <AnimateIn from="top" className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Discord <WordCycler words={justiceWords} /> System
              </h1>
            </AnimateIn>
            <AnimateIn from="bottom" delay={0.2}>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Protecting communities and fighting scammers with the power of justice!
              </p>
              <div className="flex justify-center items-center gap-8 mb-12">
                <motion.div
                  animate={{ rotate: [0, -30, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Gavel size={64} />
                </motion.div>
                <div className="flex gap-4">
                  <AnimatedButton
                    variant="secondary"
                    onClick={() => window.open("https://discord.gg/your-invite", "_blank")}
                  >
                    <span className="flex items-center gap-2">
                      Join Our Server
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </AnimatedButton>
                  <AnimatedButton
                    variant="primary"
                    onClick={() =>
                      window.open(
                        "https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=8&scope=bot%20applications.commands",
                        "_blank",
                      )
                    }
                  >
                    <span className="flex items-center gap-2">
                      Add Justice System Bot
                      <Bot className="w-4 h-4" />
                    </span>
                  </AnimatedButton>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Shield size={64} />
                </motion.div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimateIn from="bottom">
              <h2 className="text-4xl font-bold mb-6 text-center text-gradient">Advanced Security Features</h2>
              <p className="text-xl mb-16 text-center max-w-3xl mx-auto text-gray-300">
                Our bot provides comprehensive protection for your Discord server with cutting-edge security features
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimateIn from="left" delay={0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#4752c4]/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#4752c4]" />
                    </div>
                    <h3 className="text-xl font-bold">Anti-Raid Protection</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Automatically detect and prevent server raids with intelligent monitoring and quick response
                    systems.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4752c4]"></div>
                      <span>Mass join detection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4752c4]"></div>
                      <span>Automatic lockdown</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4752c4]"></div>
                      <span>Verification challenges</span>
                    </li>
                  </ul>
                </motion.div>
              </AnimateIn>

              <AnimateIn from="bottom" delay={0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#4752c4]/20 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-[#4752c4]" />
                    </div>
                    <h3 className="text-xl font-bold">Bot Detection</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Identify and remove malicious bots before they can harm your community with advanced detection
                    algorithms.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4752c4]"></div>
                      <span>Behavior analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4752c4]"></div>
                      <span>Pattern recognition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4752c4]"></div>
                      <span>Automatic removal</span>
                    </li>
                  </ul>
                </motion.div>
              </AnimateIn>

              <AnimateIn from="right" delay={0.3}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#4752c4]/20 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-[#4752c4]" />
                    </div>
                    <h3 className="text-xl font-bold">Scam Prevention</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Protect your members from scams with real-time link scanning and content analysis.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4752c4]"></div>
                      <span>Phishing detection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4752c4]"></div>
                      <span>Suspicious link alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4752c4]"></div>
                      <span>Scam pattern recognition</span>
                    </li>
                  </ul>
                </motion.div>
              </AnimateIn>
            </div>

            <div className="flex justify-center mt-12">
              <Link href="/features">
                <AnimatedButton variant="outline">
                  <span className="flex items-center gap-2">
                    Explore All Features
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimateIn from="bottom">
              <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Our Mission</h2>
            </AnimateIn>
            <div className="max-w-4xl mx-auto">
              <AnimateIn from="bottom">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg overflow-hidden glassmorphism p-6"
                >
                  <div className="text-center mb-6">
                    <Scale size={48} className="text-[#4752c4] mx-auto" />
                    <h3 className="text-xl font-bold mt-4">The Pillars of Justice</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                      Our mission is guided by these core principles that define how we protect Discord communities.
                    </p>
                  </div>
                  <ScrollTimeline />
                  <div className="flex justify-center mt-8">
                    <Link href="/learn-more">
                      <AnimatedButton variant="outline">
                        <span className="flex items-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </AnimatedButton>
                    </Link>
                  </div>
                </motion.div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Cases Handled Section */}
        <section className="bg-gradient text-on-gradient py-32 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 2px, transparent 2px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="container mx-auto px-4 text-center relative">
            <AnimateIn from="bottom">
              <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
              <CasesCounter />
            </AnimateIn>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-background py-32 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(71, 82, 196, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`,
            }}
          />
          <div className="container mx-auto px-4 relative" onMouseMove={handleMouseMove}>
            <AnimateIn from="bottom">
              <h2 className="text-4xl font-bold mb-16 text-center text-gradient">How We Protect</h2>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Animated grid lines */}
              <div
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-8 pointer-events-none"
                style={{ zIndex: -1 }}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`v-${i}`}
                    className="h-full w-0.5 bg-[#4752c4]/20"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1, transition: { duration: 1, delay: i * 0.2 } }}
                  />
                ))}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`h-${i}`}
                    className="w-full h-0.5 bg-[#4752c4]/20"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1, transition: { duration: 1, delay: i * 0.2 } }}
                  />
                ))}
              </div>
              {/* Animated highlight */}
              <motion.div
                className="absolute inset-0 bg-[#4752c4]/5 rounded-lg pointer-events-none"
                style={{ zIndex: -1 }}
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <AnimateIn from="left" delay={0.1}>
                <FeatureCard
                  icon={<Shield size={32} className="animate-shield" />}
                  title="Proactive Moderation"
                  description="Our team actively monitors Discord servers to prevent scams and rule violations before they occur."
                />
              </AnimateIn>
              <AnimateIn from="bottom" delay={0.2}>
                <FeatureCard
                  icon={<Gavel size={32} className="animate-hammer" />}
                  title="Swift Justice"
                  description="We quickly investigate and resolve reported cases to maintain a safe environment for all users."
                />
              </AnimateIn>
              <AnimateIn from="right" delay={0.3}>
                <FeatureCard
                  icon={<Scale size={32} className="animate-justice-scale" />}
                  title="Fair Arbitration"
                  description="Our experienced team ensures that all cases are handled fairly and impartially."
                />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <AnimateIn from="bottom">
              <h2 className="text-4xl font-bold mb-6 text-center text-gradient">Latest Articles</h2>
              <p className="text-xl mb-16 text-center max-w-3xl mx-auto text-gray-300">
                Stay informed with our latest guides and insights on Discord security
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {latestBlogPosts.map((post, index) => (
                <AnimateIn
                  key={index}
                  from={index === 0 ? "left" : index === 1 ? "bottom" : "right"}
                  delay={index * 0.1}
                >
                  <BlogCard {...post} />
                </AnimateIn>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/blog">
                <AnimatedButton variant="outline">
                  <span className="flex items-center gap-2">
                    View All Articles
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient text-on-gradient py-32">
          <div className="container mx-auto px-4 text-center">
            <AnimateIn from="bottom">
              <h2 className="text-4xl font-bold mb-8">Join the Fight Against Scammers</h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto">
                Be part of our community dedicated to making Discord a safer place for everyone!
              </p>
              <AnimatedButton
                variant="secondary"
                onClick={() => window.open("https://discord.gg/your-invite", "_blank")}
              >
                <span className="flex items-center gap-2">
                  Join Now
                  <ArrowRight className="w-4 h-4" />
                </span>
              </AnimatedButton>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
