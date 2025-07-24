"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Heart,
  Users,
  GraduationCap,
  Sprout,
  Building,
  Shield,
  ArrowRight,
  Check,
  Star,
  Globe,
  TrendingUp,
} from "lucide-react"
import { useAuth } from "../../contexts/AuthContext"

const DonatePage: React.FC = () => {
  const { user, isAuthenticated } = useAuth()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedCause, setSelectedCause] = useState("general")
  const [donorInfo, setDonorInfo] = useState({
    name: isAuthenticated ? user?.name || "" : "",
    email: isAuthenticated ? user?.email || "" : "",
    message: "",
  })

  const donationAmounts = [25, 50, 100, 250, 500, 1000]

  const causes = [
    {
      id: "general",
      title: "General Impact Fund",
      description: "Support our overall mission to bridge investment gaps across Africa",
      icon: Globe,
      color: "blue",
    },
    {
      id: "education",
      title: "Education & Training",
      description: "Fund entrepreneurship programs and financial literacy initiatives",
      icon: GraduationCap,
      color: "green",
    },
    {
      id: "women",
      title: "Women Entrepreneurs",
      description: "Empower female-led businesses and startups across the continent",
      icon: Users,
      color: "purple",
    },
    {
      id: "agriculture",
      title: "Sustainable Agriculture",
      description: "Support innovative farming and food security projects",
      icon: Sprout,
      color: "emerald",
    },
    {
      id: "infrastructure",
      title: "Community Infrastructure",
      description: "Build essential infrastructure in underserved communities",
      icon: Building,
      color: "orange",
    },
    {
      id: "emergency",
      title: "Emergency Relief",
      description: "Provide immediate support during crises and natural disasters",
      icon: Shield,
      color: "red",
    },
  ]

  const impactStats = [
    { number: "50,000+", label: "Lives Impacted", icon: Heart },
    { number: "200+", label: "Projects Funded", icon: TrendingUp },
    { number: "15", label: "Countries Reached", icon: Globe },
    { number: "85%", label: "Success Rate", icon: Star },
  ]

  const handleDonate = () => {
    const amount = selectedAmount || Number.parseFloat(customAmount)
    if (amount && donorInfo.name && donorInfo.email) {
      // Here you would integrate with payment processor (Stripe, PayPal, etc.)
      alert(
        `Thank you ${donorInfo.name}! Redirecting to payment for $${amount} donation to ${causes.find((c) => c.id === selectedCause)?.title}`,
      )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            {isAuthenticated ? (
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome back, {user?.name?.split(" ")[0]}!
                <br />
                <span className="text-3xl md:text-4xl">Make a Difference in Africa</span>
              </h1>
            ) : (
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Make a Difference in Africa</h1>
            )}
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Your donation helps us bridge the investment gap and create lasting impact across African communities.
              Together, we can unlock the continent's potential.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Impact</h2>
            <p className="text-xl text-gray-600">
              Select a cause that resonates with you and choose your donation amount
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Cause Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Select a Cause</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {causes.map((cause) => (
                  <button
                    key={cause.id}
                    onClick={() => setSelectedCause(cause.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedCause === cause.id
                        ? `border-${cause.color}-500 bg-${cause.color}-50`
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <cause.icon className={`w-6 h-6 mb-3 text-${cause.color}-600`} />
                    <h4 className="font-semibold mb-2">{cause.title}</h4>
                    <p className="text-sm text-gray-600">{cause.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Choose Amount</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount("")
                    }}
                    className={`p-3 rounded-lg border-2 font-semibold transition-all duration-200 ${
                      selectedAmount === amount
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">$</span>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Your Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                  disabled={isAuthenticated}
                  className={`p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isAuthenticated ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  disabled={isAuthenticated}
                  className={`p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isAuthenticated ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                />
              </div>
              {isAuthenticated && (
                <p className="text-sm text-blue-600 mb-4">
                  ✓ Using your account information.{" "}
                  <Link to="/investor/profile" className="underline">
                    Update profile
                  </Link>
                </p>
              )}
              <textarea
                placeholder="Optional message or dedication"
                value={donorInfo.message}
                onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Donation Summary */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold mb-3">Donation Summary</h4>
              <div className="flex justify-between items-center mb-2">
                <span>Cause:</span>
                <span className="font-medium">{causes.find((c) => c.id === selectedCause)?.title}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Amount:</span>
                <span className="font-medium text-xl text-blue-600">${selectedAmount || customAmount || "0"}</span>
              </div>
              <div className="text-sm text-gray-600 mt-3">
                <Check className="w-4 h-4 inline mr-1" />
                100% of your donation goes directly to the cause
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={!(selectedAmount || customAmount) || !donorInfo.name || !donorInfo.email}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              Donate Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Secure payment processing. You will receive a tax-deductible receipt via email.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories of Impact</h2>
            <p className="text-xl text-gray-600">See how your donations are making a real difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Success story"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Empowering Women Entrepreneurs</h3>
                <p className="text-gray-600 mb-4">
                  Thanks to donations, we've helped 500+ women start their own businesses across Kenya, Nigeria, and
                  Ghana.
                </p>
                <div className="text-blue-600 font-medium">$50,000 raised • 500+ women helped</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Education impact"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Digital Education Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Providing digital literacy training and equipment to rural schools across 8 African countries.
                </p>
                <div className="text-blue-600 font-medium">$75,000 raised • 2,000+ students reached</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Agriculture impact"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Sustainable Farming Project</h3>
                <p className="text-gray-600 mb-4">
                  Supporting smallholder farmers with modern techniques and equipment to increase crop yields.
                </p>
                <div className="text-blue-600 font-medium">$100,000 raised • 1,200+ farmers supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of donors who are helping transform lives across Africa. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Donate Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DonatePage
