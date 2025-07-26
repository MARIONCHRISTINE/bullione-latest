"use client"
import type React from "react"
import { useState, useEffect } from "react"
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
  AlertCircle,
} from "lucide-react"
import { useAuth } from "../../contexts/AuthContext"
import RealPaymentModal from "../shared/RealPaymentModal"

interface DonationData {
  amount: number
  cause: string
  donorName: string
  donorEmail: string
  message: string
  userType: string
  userId?: number
}

interface ApiResponse {
  success: boolean
  message: string
  donation_id?: number
  error?: string
}

const DonatePage: React.FC = () => {
  const { user, isAuthenticated } = useAuth()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedCause, setSelectedCause] = useState("general")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [pendingDonation, setPendingDonation] = useState<any>(null)
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Initialize donor info when user data is available
  useEffect(() => {
    if (isAuthenticated && user) {
      setDonorInfo({
        name: user.name || "",
        email: user.email || "",
        message: "",
      })
    }
  }, [isAuthenticated, user])

  const donationAmounts = [25, 50, 100, 250, 500, 1000]

  const causes = [
    {
      id: "general",
      title: "General Impact Fund",
      description: "Support our overall mission to bridge investment gaps across Africa",
      icon: Globe,
      color: "blue",
      impact: "1,000+ Lives Impacted",
      amount: "$2,500 Contributed",
    },
    {
      id: "education",
      title: "Education & Training",
      description: "Fund entrepreneurship programs and financial literacy initiatives",
      icon: GraduationCap,
      color: "green",
      impact: "1,000+ Lives Impacted",
      amount: "$2,000 Contributed",
    },
    {
      id: "women",
      title: "Women Entrepreneurs",
      description: "Empower female-led businesses and startups across the continent",
      icon: Users,
      color: "purple",
      impact: "1,000+ Lives Impacted",
      amount: "$1,800 Contributed",
    },
    {
      id: "agriculture",
      title: "Sustainable Agriculture",
      description: "Support innovative farming and food security projects",
      icon: Sprout,
      color: "emerald",
      impact: "1,000+ Lives Impacted",
      amount: "$1,500 Contributed",
    },
    {
      id: "infrastructure",
      title: "Community Infrastructure",
      description: "Build essential infrastructure in underserved communities",
      icon: Building,
      color: "orange",
      impact: "1,000+ Lives Impacted",
      amount: "$700 Contributed",
    },
    {
      id: "emergency",
      title: "Emergency Relief",
      description: "Provide immediate support during crises and natural disasters",
      icon: Shield,
      color: "red",
      impact: "1,000+ Lives Impacted",
      amount: "$400 Contributed",
    },
  ]

  const impactStats = [
    { number: "50,000+", label: "Lives Impacted", icon: Heart },
    { number: "200+", label: "Projects Funded", icon: TrendingUp },
    { number: "15", label: "Countries Reached", icon: Globe },
    { number: "85%", label: "Success Rate", icon: Star },
  ]

  const handleDonate = async () => {
    const amount = selectedAmount || Number.parseFloat(customAmount)

    // Validation
    if (!amount || amount <= 0) {
      setError("Please select or enter a valid donation amount")
      return
    }

    if (!donorInfo.name.trim()) {
      setError("Please enter your full name")
      return
    }

    if (!donorInfo.email.trim()) {
      setError("Please enter your email address")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(donorInfo.email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      const donationData: DonationData = {
        amount: amount,
        cause: selectedCause,
        donorName: donorInfo.name.trim(),
        donorEmail: donorInfo.email.trim(),
        message: donorInfo.message.trim(),
        userType: isAuthenticated && user ? "registered" : "guest",
        userId: isAuthenticated && user?.id ? Number(user.id) : undefined,
      }

      console.log("Creating donation record:", donationData)

      const response = await fetch("http://localhost/bullione-latest/bullione-backend/api/add-donation.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: ApiResponse = await response.json()
      console.log("API Response:", result)

      if (result.success) {
        // Store donation data for payment modal
        setPendingDonation({
          donation_id: result.donation_id,
          amount: amount,
          cause: causes.find((c) => c.id === selectedCause)?.title,
          donor_name: donorInfo.name.trim(),
          donor_email: donorInfo.email.trim(),
        })

        // Show payment modal
        setShowPaymentModal(true)
      } else {
        setError(result.error || "Donation submission failed. Please try again.")
      }
    } catch (err: any) {
      console.error("Donation error:", err)
      setError(`Network error: ${err.message}. Please check if the server is running and try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePaymentSuccess = (paymentResult: any) => {
    setSuccess(
      `Thank you ${donorInfo.name}! Your donation of $${paymentResult.amount} has been processed successfully. Transaction ID: ${paymentResult.transaction_reference}`,
    )

    // Reset form
    setSelectedAmount(null)
    setCustomAmount("")
    setSelectedCause("general")
    if (!isAuthenticated) {
      setDonorInfo({ name: "", email: "", message: "" })
    } else {
      setDonorInfo((prev) => ({ ...prev, message: "" }))
    }

    setPendingDonation(null)
    setShowPaymentModal(false)
  }

  const selectedCauseInfo = causes.find((c) => c.id === selectedCause)
  const donationAmount = selectedAmount || Number.parseFloat(customAmount) || 0

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={
            {
              filter: "none",
              imageRendering: "crisp-edges",
            } as React.CSSProperties
          }
        >
          <source src="/donate.mp4" type="video/mp4" />
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
          <div className="mb-8">
            <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            {isAuthenticated && user ? (
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                Welcome back, {user.name?.split(" ")[0] || "Friend"}!
                <br />
                <span className="text-3xl md:text-4xl text-yellow-400">Make a Difference in Africa</span>
              </h1>
            ) : (
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                Make a Difference in <span className="text-yellow-400">Africa</span>
              </h1>
            )}
            <p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              Your donation helps us bridge the investment gap and create lasting impact across African communities.
              Together, we can unlock the continent's potential.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-8 md:py-12 bg-white relative overflow-hidden shadow-2xl mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-600">Our</span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              See how your <span className="text-yellow-600 font-semibold">donations</span>{" "}
              <span className="text-blue-600 font-semibold">transform lives</span>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:from-gray-100 hover:to-gray-50 transition duration-300"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section - Dark Theme */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-600 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Impact</h2>
            <p className="text-xl text-gray-300">
              Select a cause that resonates with you and choose your donation amount
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
            {/* Success Message */}
            {success && (
              <div className="mb-8 bg-green-500/20 border-2 border-green-400/30 text-green-100 px-6 py-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  <span className="font-medium">{success}</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-8 bg-red-500/20 border-2 border-red-400/30 text-red-100 px-6 py-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">{error}</span>
                </div>
              </div>
            )}

            {/* Cause Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-white">Select a Cause</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {causes.map((cause, index) => (
                  <button
                    key={cause.id}
                    onClick={() => setSelectedCause(cause.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 bg-white ${
                      selectedCause === cause.id
                        ? "border-yellow-500 shadow-xl ring-4 ring-yellow-200 bg-yellow-50"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 ${
                        index % 6 === 0
                          ? "bg-green-500/20 border border-green-500/30"
                          : index % 6 === 1
                            ? "bg-purple-500/20 border border-purple-500/30"
                            : index % 6 === 2
                              ? "bg-emerald-500/20 border border-emerald-500/30"
                              : index % 6 === 3
                                ? "bg-blue-500/20 border border-blue-500/30"
                                : index % 6 === 4
                                  ? "bg-orange-500/20 border border-orange-500/30"
                                  : "bg-yellow-500/20 border border-yellow-500/30"
                      } rounded-lg flex items-center justify-center mb-3`}
                    >
                      <cause.icon
                        className={`w-6 h-6 ${
                          index % 6 === 0
                            ? "text-green-600"
                            : index % 6 === 1
                              ? "text-purple-600"
                              : index % 6 === 2
                                ? "text-emerald-600"
                                : index % 6 === 3
                                  ? "text-blue-600"
                                  : index % 6 === 4
                                    ? "text-orange-600"
                                    : "text-yellow-600"
                        }`}
                      />
                    </div>
                    <h4 className="font-semibold mb-2 text-gray-900">{cause.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{cause.description}</p>
                    <div className="text-xs font-medium text-gray-700 mb-1">{cause.impact}</div>
                    <div
                      className={`text-xs font-semibold ${
                        index % 6 === 0
                          ? "text-green-600"
                          : index % 6 === 1
                            ? "text-purple-600"
                            : index % 6 === 2
                              ? "text-emerald-600"
                              : index % 6 === 3
                                ? "text-blue-600"
                                : index % 6 === 4
                                  ? "text-orange-600"
                                  : "text-yellow-600"
                      }`}
                    >
                      {cause.amount}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-white">Choose Amount</h3>
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
                        ? "border-yellow-500 bg-yellow-100 text-yellow-800 shadow-lg"
                        : "border-gray-200 text-gray-800 bg-white hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">$</span>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="flex-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-gray-800 placeholder-gray-500"
                  min="1"
                  step="0.01"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-white">Your Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                  disabled={isAuthenticated}
                  className={`p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-gray-800 placeholder-gray-500 ${
                    isAuthenticated ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  disabled={isAuthenticated}
                  className={`p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-gray-800 placeholder-gray-500 ${
                    isAuthenticated ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
              </div>
              {isAuthenticated && (
                <p className="text-sm text-yellow-400 mb-4">
                  ✓ Using your account information.{" "}
                  <Link to="/investor/profile" className="underline hover:text-yellow-300">
                    Update profile
                  </Link>
                </p>
              )}
              <textarea
                placeholder="Optional message or dedication"
                value={donorInfo.message}
                onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-gray-800 placeholder-gray-500"
              />
            </div>

            {/* Donation Summary */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-lg">
              <h4 className="font-semibold mb-3 text-gray-900">Donation Summary</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Cause:</span>
                <span className="font-medium text-gray-900">{selectedCauseInfo?.title}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium text-xl text-yellow-600">
                  ${donationAmount > 0 ? donationAmount.toFixed(2) : "0.00"}
                </span>
              </div>
              <div className="text-sm text-gray-600 mt-3">
                <Check className="w-4 h-4 inline mr-1" />
                100% of your donation goes directly to the cause
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={
                isLoading || !donationAmount || donationAmount <= 0 || !donorInfo.name.trim() || !donorInfo.email.trim()
              }
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-4 px-8 rounded-xl font-semibold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                  Creating donation...
                </div>
              ) : (
                <>
                  Proceed to Payment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
            <p className="text-center text-sm text-gray-400 mt-4">
              Secure payment processing. You will be prompted to enter your card details and PIN.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-cyan-300/6 to-blue-300/6 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories of Impact</h2>
            <p className="text-xl text-gray-600">See how your donations are making a real difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-pink-500 hover:shadow-xl transition duration-300">
              <img src="/women.png" alt="Women entrepreneurs success story" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Empowering Women Entrepreneurs</h3>
                <p className="text-gray-600 mb-4">
                  Thanks to donations, we've helped 500+ women start their own businesses across Kenya, Nigeria, and
                  Ghana.
                </p>
                <div className="text-pink-600 font-medium">$300 raised • 500+ women helped</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-blue-500 hover:shadow-xl transition duration-300">
              <img src="/educative.png" alt="Digital education impact" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Digital Education Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Providing digital literacy training and equipment to rural schools across 8 African countries.
                </p>
                <div className="text-blue-600 font-medium">$400 raised • 2,000+ students reached</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-green-500 hover:shadow-xl transition duration-300">
              <img src="/agriculture.png" alt="Sustainable agriculture impact" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Sustainable Farming Project</h3>
                <p className="text-gray-600 mb-4">
                  Supporting smallholder farmers with modern techniques and equipment to increase crop yields.
                </p>
                <div className="text-green-600 font-medium">$200 raised • 1,200+ farmers supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-600 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of donors who are helping transform lives across Africa. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Donate Now
            </button>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Real Payment Modal */}
      {showPaymentModal && pendingDonation && (
        <RealPaymentModal
          isOpen={showPaymentModal}
          onClose={() => {
            setShowPaymentModal(false)
            setPendingDonation(null)
          }}
          donationData={pendingDonation}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  )
}

export default DonatePage
