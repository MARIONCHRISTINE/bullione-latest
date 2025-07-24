"use client"
import type React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

interface Service {
  id: string
  title: string
  description: string
  icon: string
  link: string
  features: string
  minInvestment: string
  expectedReturn: string
  riskLevel: string
  category: string
  sector: string
  type: "investment" | "donation"
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"investment" | "donation">("investment")

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      // Updated to match your PHP backend structure
      const response = await fetch("http://localhost/BULLIONE-LATEST/bullione-backend/api/get-services.php")
      const data = await response.json()

      if (Array.isArray(data)) {
        // Parse features JSON string back to array
        const parsedServices = data.map((service) => ({
          ...service,
          features: typeof service.features === "string" ? JSON.parse(service.features) : service.features,
        }))
        setServices(parsedServices)
      } else if (data.error) {
        setError(data.error)
      } else {
        setError("Failed to fetch services")
      }
    } catch (err) {
      setError("Error connecting to server")
      console.error("Error fetching services:", err)
    } finally {
      setLoading(false)
    }
  }

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "transportation":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      case "agriculture":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-600 bg-green-100"
      case "Medium":
        return "text-yellow-600 bg-yellow-100"
      case "High":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const filteredServices = services.filter((service) => service.type === activeTab)

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl">{error}</p>
          <button onClick={fetchServices} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Government & Development Projects</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
              Africa faces a massive infrastructure financing gap — over $100 billion annually — which presents
              significant opportunities for foreign investors looking for secure, high-yield, and long-term investments.
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Bullione acts as your gateway to bankable public-private partnerships (PPPs) and development-backed
              initiatives that deliver impact and returns.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveTab("investment")}
                className={`px-8 py-3 rounded-md font-semibold transition duration-300 ${
                  activeTab === "investment" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                🏗️ Investment Opportunities
              </button>
              <button
                onClick={() => setActiveTab("donation")}
                className={`px-8 py-3 rounded-md font-semibold transition duration-300 ${
                  activeTab === "donation" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                ❤️ Donation Sectors
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {activeTab === "investment" ? "Investment Focus Areas" : "Donation Impact Areas"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeTab === "investment"
                ? "We facilitate investor entry into large-scale national and regional infrastructure and development programs"
                : "Transform lives and communities through strategic philanthropic investments in Africa's most critical sectors"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border-l-4 border-blue-600"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {activeTab === "investment" && (
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Min Investment:</span>
                        <span className="font-semibold">{service.minInvestment}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Expected Return:</span>
                        <span className="font-semibold text-green-600">{service.expectedReturn}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Risk Level:</span>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(service.riskLevel)}`}
                        >
                          {service.riskLevel}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {Array.isArray(service.features) &&
                        service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <svg
                              className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <Link
                    to={service.link}
                    className={`w-full py-3 px-4 rounded-md font-semibold transition duration-300 text-center block ${
                      activeTab === "investment"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                  >
                    {activeTab === "investment" ? "Invest Now" : "Donate Now"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      {activeTab === "investment" && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                💼 Types of Opportunities Bullione Facilitates
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">💼 Turnkey PPP Investments</h3>
                <p className="text-gray-600">
                  Shovel-ready PPP projects, often backed by sovereign guarantees or multilateral development banks
                  (AfDB, IFC, etc.)
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">🏗️ Concession-Based Investments</h3>
                <p className="text-gray-600">
                  Operate toll roads, ports, or utilities under 15–30 year concession agreements with revenue share
                  models
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">🔄 Build-Operate-Transfer (BOT)</h3>
                <p className="text-gray-600">
                  Fund and operate projects, then transfer to government after a fixed return period
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">🤝 Joint Ventures</h3>
                <p className="text-gray-600">
                  Co-develop strategic assets with government agencies, sharing equity, risk, and returns
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">📈 Government-Guaranteed Bonds</h3>
                <p className="text-gray-600">
                  Secure long-term fixed returns (8–12%+) from infrastructure-backed bonds issued by governments
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">🛡️ Risk Mitigation</h3>
                <p className="text-gray-600">
                  Political risk insurance via MIGA, OPIC, or ATI with sovereign guarantees and arbitration-ready legal
                  structures
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🤝 Bullione's Full-Service Role</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bullione de-risks your investment by handling all local complexities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Project Identification & Vetting</h3>
              <p className="text-gray-600 text-sm">
                Access to exclusive, government-prioritized projects with thorough due diligence
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Government Relations & Negotiations</h3>
              <p className="text-gray-600 text-sm">
                Direct liaison with ministries and structuring favorable MoUs, PPAs, and concession agreements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Structuring & Capital Mobilization</h3>
              <p className="text-gray-600 text-sm">
                Project SPV creation and mobilizing blended finance: DFIs, grants, private equity
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Operational Oversight</h3>
              <p className="text-gray-600 text-sm">EPC selection, project monitoring, and performance auditing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {activeTab === "investment" ? "Ready to Invest in Africa's Future?" : "Ready to Make a Lasting Impact?"}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {activeTab === "investment"
              ? "Join strategic investors building Africa's infrastructure through government-backed opportunities"
              : "Join philanthropists transforming lives across Africa through strategic donations"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              {activeTab === "investment" ? "Start Investing Today" : "Start Donating Today"}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
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
