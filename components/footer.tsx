import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Discord Justice</h2>
            <p className="mt-2">Protecting communities with the power of justice!</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#5865F2]">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#5865F2]">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#5865F2]">
                <FaGithub size={24} />
              </a>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/learn-more" className="hover:text-[#5865F2]">
                Learn More
              </Link>
              <Link href="/tos" className="hover:text-[#5865F2]">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="hover:text-[#5865F2]">
                Privacy Policy
              </Link>
              <Link href="/branding" className="hover:text-[#5865F2]">
                Branding
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Discord Justice. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
