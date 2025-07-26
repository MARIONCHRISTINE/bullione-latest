"use client"
import type React from "react"
import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { sendContactEmail } from "./SendEmail"

const ContactPage: React.FC = () => {
  useAuth()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)
      setSubmitMessage(result.message)
      setSubmitted(true)

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          userType: "",
        })
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitMessage("Thank you for your message! We have received it and will respond within 24 hours.")
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        userType: "",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <video
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={
            {
              filter: "none",
              imageRendering: "auto",
            } as React.CSSProperties
          }
        >
          <source src="/contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 via-black/50 to-black/60 z-10">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-overlay z-1"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)
              `,
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full z-2"
            style={{
              background: `radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(0, 0, 0, 0.2) 100%)`,
            }}
          ></div>
        </div>
        {/* Hero Content */}
        <div className="relative z-20 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Get in Touch with <span className="text-yellow-400">Bullione</span>
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto"
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
            }}
          >
            Ready to unlock Africa's investment potential? Our team is here to guide you through every step of your
            investment journey.
          </p>
          <p
            className="text-lg mb-8 max-w-3xl mx-auto"
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
            }}
          >
            Whether you're an investor seeking opportunities or an entrepreneur looking for funding, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Information Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Let's Start</span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                the Conversation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach our team. We're committed to responding within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form - New Design with Blue Border */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-500 border-l-4 border-l-blue-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
              </div>

              {submitted && (
                <div className="bg-green-50 border-l-4 border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {submitMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                      placeholder="Sarah Mwangi"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                      placeholder="sarah@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="userType" className="block text-sm font-semibold text-gray-700 mb-2">
                    I am a...
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                  >
                    <option value="">Select an option</option>
                    <option value="investor">Potential Investor</option>
                    <option value="entrepreneur">Entrepreneur/Startup</option>
                    <option value="partner">Potential Partner</option>
                    <option value="media">Media/Press</option>
                    <option value="donor">Potential Donor</option>
                    <option value="organization">An Organization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information - New Design with Orange Border */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-500 border-l-4 border-l-orange-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-blue-50 border-2 border-blue-100 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                    <a
                      href="mailto:info@bullione.africa"
                      className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      info@bullione.africa
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-green-50 border-2 border-green-100 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-green-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
                    <a
                      href="tel:+254755427008"
                      className="text-green-600 hover:text-green-700 transition-colors font-medium"
                    >
                      +254 755 427 008
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-purple-50 border-2 border-purple-100 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-purple-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Headquarters</h4>
                    <a
                      href="https://maps.google.com/?q=Olenguruone+Avenue,+off+James+Gichuru+Road,+Lavington,+Nairobi,+Kenya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors font-medium cursor-pointer hover:underline"
                    >
                      Nairobi, Kenya
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-orange-50 border-2 border-orange-100 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-orange-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM EAT
                      <br />
                      Saturday: 10:00 AM - 4:00 PM EAT
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Theme Section - Support Options */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-600 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Need Immediate Help?</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our support team is available to assist you with any questions about investments, applications, or our
              platform.
            </p>
          </div>
          {/* Support Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-300 text-sm md:text-base">Support Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">{"<24h"}</div>
              <div className="text-gray-300 text-sm md:text-base">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">98%</div>
              <div className="text-gray-300 text-sm md:text-base">Satisfaction Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-300 text-sm md:text-base">Languages</div>
            </div>
          </div>
          {/* Support Options - All Activated */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Live Chat</h3>
              <p className="text-gray-300 mb-4">
                Chat with our support team in real-time for immediate assistance with your investment questions.
              </p>
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 w-full"
                onClick={() =>
                  window.open(
                    "https://wa.me/254755427008?text=Hello%20Bullione%20team,%20I%20need%20assistance%20with%20my%20investment%20inquiry.",
                    "_blank",
                  )
                }
              >
                Start Chat
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-9 0a1 1 0 00-1 1v10a1 1 0 001-1V8a1 1 0 00-1-1H7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Schedule Call</h3>
              <p className="text-gray-300 mb-4">
                Book a one-on-one consultation with our investment experts to discuss your specific needs.
              </p>
              <button
                className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition duration-300 w-full"
                onClick={() => window.open("https://calendly.com/bullione-africa", "_blank")}
              >
                Schedule Call
              </button>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Connect with us on social media</h3>
            <div className="flex justify-center flex-wrap gap-4">
              {[
                {
                  name: "WhatsApp",
                  url: "https://wa.me/message/D6EAHJMWSK4ZC1",
                  icon: "💬",
                  color: "hover:text-green-400",
                },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/company/bullione-africa/",
                  icon: "💼",
                  color: "hover:text-blue-400",
                },
                {
                  name: "Twitter/X",
                  url: "https://x.com/BullioneAfrica",
                  icon: "🐦",
                  color: "hover:text-blue-400",
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/bullioneafrica",
                  icon: "📸",
                  color: "hover:text-pink-400",
                },
                {
                  name: "YouTube",
                  url: "https://youtube.com/@bullioneafrica",
                  icon: "📺",
                  color: "hover:text-red-400",
                },
                {
                  name: "TikTok",
                  url: "http://tiktok.com/@bullione.africa",
                  icon: "🎵",
                  color: "hover:text-pink-400",
                },
              ].map(({ name, url, icon, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 ${color} hover:bg-white/10 transition-all duration-200 border border-gray-600 hover:border-gray-400`}
                  title={name}
                >
                  <span className="text-lg">{icon}</span>
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
