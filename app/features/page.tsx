import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimateIn } from "@/components/animate-in"
import { FeatureShowcase } from "@/components/feature-showcase"
import { Shield, Bot, UserCheck } from "lucide-react"

export const metadata = {
  title: "Features | Discord Justice",
  description: "Explore the powerful features of Discord Justice bot",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <AnimateIn from="bottom">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Bot Features</h1>
          <p className="text-xl mb-12 text-gray-300">
            Discord Justice provides comprehensive protection and moderation tools for your community
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#5865F2]" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-center mb-2">Protection</h2>
              <p className="text-center text-gray-300">
                Advanced security systems to protect your server from raids, scams, and malicious activity
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-[#5865F2]" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-center mb-2">Anti-Bot</h2>
              <p className="text-center text-gray-300">
                Sophisticated detection algorithms to identify and prevent malicious bots from joining
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                  <UserCheck className="w-8 h-8 text-[#5865F2]" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-center mb-2">Moderation</h2>
              <p className="text-center text-gray-300">
                Powerful tools to help moderators maintain a safe and welcoming community environment
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-gradient">Explore Our Features</h2>
          <FeatureShowcase />
        </AnimateIn>
      </main>
      <Footer />
    </div>
  )
}
