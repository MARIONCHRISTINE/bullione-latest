"use client"
import type React from "react"
import { Link } from "react-router-dom"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  ExternalLink,
} from "lucide-react"

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "TikTok",
      url: "http://tiktok.com/@bullione.africa",
      icon: ExternalLink, // Using ExternalLink as TikTok icon isn't in lucide-react
      color: "hover:text-pink-400",
    },
    {
      name: "Twitter/X",
      url: "https://x.com/BullioneAfrica",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@bullioneafrica",
      icon: Youtube,
      color: "hover:text-red-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bullioneafrica",
      icon: Instagram,
      color: "hover:text-pink-400",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/bullione-africa/",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61572838231975",
      icon: Facebook,
      color: "hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/message/D6EAHJMWSK4ZC1",
      icon: MessageCircle,
      color: "hover:text-green-400",
    },
  ]

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/terms", label: "Terms & Conditions" },
    { path: "/privacy", label: "Privacy Policy" },
  ]

  return (
    <footer className="bg-blue-50/70 border-t-2 border-blue-200 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info - Matching navbar logo style */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4 group">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Bullione
                </span>
              </div>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md leading-relaxed">
              Connecting global capital with vetted African opportunities. We bridge the gap between investors and
              high-growth ventures across the continent, driving sustainable economic development.
            </p>
            {/* Social Links - Matching navbar button style */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ name, url, icon: Icon, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 ${color} hover:bg-blue-50/50 transition-all duration-200 border border-gray-200 hover:border-blue-200`}
                  title={name}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Matching navbar link style */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="group flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Matching navbar style */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@bullione.africa"
                  className="group flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>info@bullione.africa</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+254755427008"
                  className="group flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+254 755 427 008</span>
                </a>
              </li>
              <li>
                <div className="group flex items-start space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-700">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-600" />
                  <span>
                    Nairobi, Kenya
                    <br />
                    <span className="text-xs text-gray-500">East Africa Hub</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Matching navbar style */}
        <div className="border-t-2 border-blue-200 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Bullione Africa. All rights reserved.</p>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Link
              to="/terms"
              className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies"
              className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
