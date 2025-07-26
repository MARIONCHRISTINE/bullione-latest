"use client"
import type React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

interface Service {
  id: number
  title: string
  description: string
  icon: string
  link: string
  features: string[]
  minInvestment: number
  expectedReturn: number
  riskLevel: string
  category: string
  sector: string
  type: "investment" | "donation"
  created_at: string
  updated_at: string
}

interface ApiResponse {
  success: boolean
  data: Service[]
  total: number
  count: number
  filters: {
    category: string | null
    sector: string | null
    type: string | null
    limit: number | null
    offset: number
  }
  error?: string
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"investment" | "donation">("investment")

  useEffect(() => {
    fetchServices()
  }, [activeTab])

  const fetchServices = async () => {
    setLoading(true)
    setError(null)

    try {
      const apiUrl = `http://localhost/bullione-latest/bullione-backend/api/get-services.php?type=${activeTab}`
      console.log("Fetching services from:", apiUrl)

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: ApiResponse = await response.json()
      console.log("API Response:", result)

      if (result.success) {
        setServices(result.data || [])
      } else {
        setError(result.error || "Failed to fetch services")
      }
    } catch (err: any) {
      console.error("Error fetching services:", err)
      setError(`Network error: ${err.message}. Please check if the server is running.`)
    } finally {
      setLoading(false)
    }
  }

  const getIcon = (iconType: string) => {
    const iconClass = "w-8 h-8"
    const iconProps = {
      className: iconClass,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
    }

    switch (iconType) {
      case "transportation":
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        )
      case "housing":
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        )
      case "water":
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        )
      case "healthcare":
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        )
      case "energy":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      case "agriculture":
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )
      case "education":
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        )
      case "climate":
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      case "food":
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )
      case "youth":
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        )
      case "community":
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        )
      default:
        return (
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
    }
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(0)}M+`
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K+`
    }
    return `$${amount.toLocaleString()}`
  }

  const formatPercentage = (rate: number) => {
    return `${rate}%`
  }

  // Static fallback data for when no services are available from backend
  const staticServices = {
    investment: [
      {
        id: 1,
        title: "Affordable Housing & Smart Cities",
        description:
          "Public housing PPPs in Nairobi, Kigali, Accra, and Luanda. Smart city projects with digital infrastructure, utilities, and green spaces",
        icon: "housing",
        minInvestment: 25000000,
        expectedReturn: 12.5,
        riskLevel: "Low",
        features: [
          "Public housing PPPs",
          "Smart city development",
          "Digital infrastructure",
          "Green spaces integration",
        ],
        link: "/invest/housing",
        category: "Infrastructure",
        sector: "Housing",
        type: "investment" as const,
        created_at: "",
        updated_at: "",
      },
      {
        id: 2,
        title: "Agricultural & Industrial Parks",
        description:
          "Agro-processing zones, grain storage facilities. Industrial estates and special economic zones (SEZs)",
        icon: "agriculture",
        minInvestment: 35000000,
        expectedReturn: 13.5,
        riskLevel: "Medium",
        features: ["Agro-processing zones", "Grain storage facilities", "Industrial estates", "Special economic zones"],
        link: "/invest/agriculture",
        category: "Agriculture",
        sector: "Industrial",
        type: "investment" as const,
        created_at: "",
        updated_at: "",
      },
      {
        id: 3,
        title: "Energy & Utilities",
        description:
          "Off-grid solar, hydropower stations, national grid expansion. Power transmission and distribution upgrades",
        icon: "energy",
        minInvestment: 40000000,
        expectedReturn: 18.5,
        riskLevel: "Medium",
        features: [
          "Off-grid solar projects",
          "Hydropower stations",
          "National grid expansion",
          "Power transmission upgrades",
        ],
        link: "/invest/energy",
        category: "Energy",
        sector: "Utilities",
        type: "investment" as const,
        created_at: "",
        updated_at: "",
      },
    ],
    donation: [
      {
        id: 4,
        title: "Education for All",
        description: "Supporting quality education access across rural and urban communities in Africa",
        icon: "education",
        minInvestment: 0,
        expectedReturn: 0,
        riskLevel: "Low",
        features: ["School construction", "Teacher training programs", "Educational materials", "Scholarship programs"],
        link: "/donate/education",
        category: "Social Impact",
        sector: "Education",
        type: "donation" as const,
        created_at: "",
        updated_at: "",
      },
    ],
  }

  // Use backend data if available, otherwise fall back to static data
  const displayServices = services.length > 0 ? services : staticServices[activeTab]

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading services...</p>
        </div>
      </div>
    )
  }

  if (error && services.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connection Error</h2>
          <p className="text-red-600 text-lg mb-6">{error}</p>
          <button
            onClick={fetchServices}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Try Again
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Don't worry, we'll show you some sample services below if the connection fails.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
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
          <source src="/services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
        <div className="relative z-20 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Strategic Government &<span className="text-yellow-400"> Development Projects</span>
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto"
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
            }}
          >
            Africa faces a massive infrastructure financing gap — over $68 billion annually — which presents significant
            opportunities for foreign investors looking for secure, high-yield, and long-term investments.
          </p>
          <p
            className="text-lg mb-8 max-w-3xl mx-auto"
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
            }}
          >
            Bullione acts as your gateway to bankable public-private partnerships (PPPs) and development-backed
            initiatives that deliver impact and returns.
          </p>
        </div>
      </section>

      {/* Section Title and Navigation */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {activeTab === "investment" ? (
                <>
                  <span className="text-blue-600">Investment</span>{" "}
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    Focus Areas
                  </span>
                </>
              ) : (
                <>
                  <span className="text-yellow-600">Donation</span>{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Impact Areas
                  </span>
                </>
              )}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {activeTab === "investment"
                ? "We facilitate investor entry into large-scale national and regional infrastructure and development programs"
                : "Transform lives and communities through strategic philanthropic investments in Africa's most critical sectors"}
            </p>

            {/* Show connection status */}
            {error && services.length === 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto mb-6">
                <p className="text-yellow-800 text-sm">
                  <span className="font-semibold">Note:</span> Showing sample services.
                  <button onClick={fetchServices} className="ml-2 text-yellow-600 hover:text-yellow-800 underline">
                    Try connecting to live data
                  </button>
                </p>
              </div>
            )}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("investment")}
                className={`px-8 py-4 rounded-xl font-semibold transition duration-300 flex items-center shadow-lg ${
                  activeTab === "investment"
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Investment Opportunities
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveTab("donation")}
                className={`px-8 py-4 rounded-xl font-semibold transition duration-300 flex items-center shadow-lg ${
                  activeTab === "donation"
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Donation Sectors
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Dark Theme */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-600 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {activeTab === "investment" ? "Investment Focus Areas" : "Creating Lasting Impact"}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {activeTab === "investment"
                ? "We facilitate investor entry into large-scale national and regional infrastructure and development programs"
                : "Beyond investments, we believe in giving back. Your donations help us support communities, education, and sustainable development across Africa."}
            </p>

            {/* Show service count */}
            <p className="text-gray-400 mt-4">
              Showing {displayServices.length} {activeTab}{" "}
              {displayServices.length === 1 ? "opportunity" : "opportunities"}
              {services.length > 0 && " (Live data)"}
            </p>
          </div>

          {/* Investment Statistics - Only for Investment Tab */}
          {activeTab === "investment" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-8 md:mb-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
                <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">$68B+</div>
                <div className="text-gray-300 text-sm md:text-base">Annual Gap</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
                <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-gray-300 text-sm md:text-base">Countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
                <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">25%+</div>
                <div className="text-gray-300 text-sm md:text-base">Average IRR</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
                <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">$5M+</div>
                <div className="text-gray-300 text-sm md:text-base">Invested</div>
              </div>
            </div>
          )}

          {/* Donation Statistics - Only for Donation Tab */}
          {activeTab === "donation" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-8 md:mb-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
                <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">1,000+</div>
                <div className="text-gray-300 text-sm md:text-base">Lives Impacted</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
                <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-gray-300 text-sm md:text-base">Projects Funded</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
                <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">5+</div>
                <div className="text-gray-300 text-sm md:text-base">Countries Reached</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
                <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">$1,000+</div>
                <div className="text-gray-300 text-sm md:text-base">Donated to Date</div>
              </div>
            </div>
          )}

          {/* Service Cards - Dark Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
            {displayServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300"
              >
                {/* Icon */}
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
                  } rounded-lg flex items-center justify-center mb-4`}
                >
                  <div
                    className={`${
                      index % 6 === 0
                        ? "text-green-400"
                        : index % 6 === 1
                          ? "text-purple-400"
                          : index % 6 === 2
                            ? "text-emerald-400"
                            : index % 6 === 3
                              ? "text-blue-400"
                              : index % 6 === 4
                                ? "text-orange-400"
                                : "text-yellow-400"
                    }`}
                  >
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-300 mb-4">{service.description}</p>

                {/* Investment Details */}
                {activeTab === "investment" && service.minInvestment > 0 && (
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Min Investment:</span>
                      <span className="font-bold text-blue-400">{formatCurrency(service.minInvestment)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Expected Return:</span>
                      <span className="font-bold text-green-400">{formatPercentage(service.expectedReturn)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Risk Level:</span>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          service.riskLevel === "Low"
                            ? "text-green-400 bg-green-400/20"
                            : service.riskLevel === "Medium"
                              ? "text-yellow-400 bg-yellow-400/20"
                              : "text-red-400 bg-red-400/20"
                        }`}
                      >
                        {service.riskLevel}
                      </span>
                    </div>
                  </div>
                )}

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {Array.isArray(service.features)
                      ? service.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <svg
                              className="w-3 h-3 text-green-400 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))
                      : null}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link
                    to={activeTab === "investment" ? "/login" : "/donate-now"}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                  >
                    {activeTab === "investment" ? "Start Investing" : "Donate Now"}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Impact Metric */}
                <div
                  className={`mt-4 text-center ${
                    index % 6 === 0
                      ? "text-green-400"
                      : index % 6 === 1
                        ? "text-purple-400"
                        : index % 6 === 2
                          ? "text-emerald-400"
                          : index % 6 === 3
                            ? "text-blue-400"
                            : index % 6 === 4
                              ? "text-orange-400"
                              : "text-yellow-400"
                  } font-medium text-sm`}
                >
                  {activeTab === "investment"
                    ? "High-yield opportunity"
                    : index % 3 === 0
                      ? "150+ students reached"
                      : index % 3 === 1
                        ? "25+ women supported"
                        : "80+ farmers helped"}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {displayServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-white mb-4">No Services Available</h3>
              <p className="text-gray-300 mb-6">
                No {activeTab} services are currently available. Please check back later.
              </p>
              <button
                onClick={fetchServices}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Refresh Services
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <Link
              to={activeTab === "investment" ? "/login" : "/donate-now"}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-orange-400 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    activeTab === "investment"
                      ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      : "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  }
                />
              </svg>
              {activeTab === "investment" ? "Start Investing Today" : "Start Making a Difference"}
            </Link>
            <p className="text-gray-400 mt-4">
              {activeTab === "investment"
                ? "Join strategic investors building Africa's infrastructure"
                : "100% of donations go directly to the causes you choose"}
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">🤝 Bullione's</span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Full-Service Role
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Bullione de-risks your investment by handling all local complexities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Project Identification & Vetting",
                description: "Access to exclusive, government-prioritized projects with thorough due diligence",
              },
              {
                step: "2",
                title: "Government Relations & Negotiations",
                description:
                  "Direct liaison with ministries and structuring favorable MoUs, PPAs, and concession agreements",
              },
              {
                step: "3",
                title: "Structuring & Capital Mobilization",
                description: "Project SPV creation and mobilizing blended finance: DFIs, grants, private equity",
              },
              {
                step: "4",
                title: "Operational Oversight",
                description: "EPC selection, project monitoring, and performance auditing",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {activeTab === "investment" ? "Ready to Invest in Africa's Future?" : "Ready to Make a Lasting Impact?"}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {activeTab === "investment"
              ? "Join strategic investors building Africa's infrastructure through government-backed opportunities"
              : "Join philanthropists transforming lives across Africa through strategic donations"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={activeTab === "investment" ? "/login" : "/donate-now"}
              className={`${
                activeTab === "investment"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  : "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              } text-white px-8 py-4 rounded-xl font-semibold transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              {activeTab === "investment" ? "Start Investing Today" : "Start Donating Today"}
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
