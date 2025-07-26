"use client"
import type React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle, ExternalLink, X } from 'lucide-react'

const Footer: React.FC = () => {
  const [showLocationModal, setShowLocationModal] = useState(false)

  const socialLinks = [
    {
      name: "TikTok",
      url: "http://tiktok.com/@bullione.africa",
      icon: ExternalLink,
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
  ]

  return (
    <>
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
                  <button
                    onClick={() => setShowLocationModal(true)}
                    className="group flex items-start space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 w-full text-left"
                  >
                    <MapPin className="w-4 h-4 mt-0.5 text-blue-600" />
                    <span>
                      Nairobi, Kenya
                      <br />
                      <span className="text-xs text-gray-500">Click to view location</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom Bar - CORRECTED PATHS */}
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
                to="/privacy-policy"
                className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookies-policy"
                className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Our Location</h3>
                <button
                  onClick={() => setShowLocationModal(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bullione Africa Headquarters</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Olenguruone Avenue, off James Gichuru Road, Lavington, Nairobi, Nairobi 00100, Kenya
                    </p>
                  </div>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7834949829!2d36.7665!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4c!2sLavington%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1642000000000!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bullione Africa Location"
                ></iframe>
              </div>
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+254755427008" className="text-blue-600 hover:text-blue-700">
                        +254 755 427 008
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@bullione.africa" className="text-green-600 hover:text-green-700">
                        info@bullione.africa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Directions Button */}
              <div className="mt-6 text-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Olenguruone+Avenue,+off+James+Gichuru+Road,+Lavington,+Nairobi,+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer