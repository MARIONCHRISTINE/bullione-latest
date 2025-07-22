"use client"

import type React from "react"
import { Link } from "react-router-dom"

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Startup Investments",
      description: "Invest in high-growth African startups across fintech, agtech, and healthtech sectors.",
      icon: "startup",
      link: "/services/startup-investments",
      features: ["Series A-C funding", "Due diligence support", "Portfolio management", "Exit strategies"],
      minInvestment: "$5,000",
      expectedReturn: "25-40%",
      riskLevel: "High",
    },
    {
      id: 2,
      title: "Money Market & Mutual Funds",
      description: "Secure, liquid investments in African government securities and corporate bonds.",
      icon: "money",
      link: "/services/money-market",
      features: ["Government securities", "Corporate bonds", "Professional management", "Regular reporting"],
      minInvestment: "$1,000",
      expectedReturn: "12-18%",
      riskLevel: "Low",
    },
    {
      id: 3,
      title: "Cryptocurrency Investments",
      description: "AI-powered cryptocurrency investments focused on African blockchain projects.",
      icon: "crypto",
      link: "/services/cryptocurrency",
      features: ["AI-driven selection", "African blockchain focus", "Risk management", "24/7 monitoring"],
      minInvestment: "$500",
      expectedReturn: "15-50%",
      riskLevel: "High",
    },
    {
      id: 4,
      title: "Real Estate",
      description: "Access premium real estate opportunities in Africa's fastest-growing cities.",
      icon: "realestate",
      link: "/services/real-estate",
      features: ["Commercial properties", "Residential developments", "REITs", "Property management"],
      minInvestment: "$10,000",
      expectedReturn: "15-25%",
      riskLevel: "Medium",
    },
    {
      id: 5,
      title: "Hotel & Hospitality",
      description: "Invest in Africa's growing tourism and hospitality sector with premium properties.",
      icon: "hospitality",
      link: "/services/hospitality",
      features: ["Luxury hotels", "Safari lodges", "Urban hospitality", "Tourism infrastructure"],
      minInvestment: "$25,000",
      expectedReturn: "18-28%",
      riskLevel: "Medium",
    },
    {
      id: 6,
      title: "Impact Investing",
      description: "Generate positive social and environmental impact while earning competitive returns.",
      icon: "impact",
      link: "/services/impact-investing",
      features: ["ESG compliance", "Social impact metrics", "Environmental benefits", "Sustainable returns"],
      minInvestment: "$5,000",
      expectedReturn: "12-20%",
      riskLevel: "Medium",
    },
    {
      id: 7,
      title: "Business Expansion",
      description: "Support established African businesses in their growth and expansion phases.",
      icon: "business",
      link: "/services/business-expansion",
      features: ["Growth capital", "Market expansion", "Operational support", "Strategic guidance"],
      minInvestment: "$50,000",
      expectedReturn: "20-30%",
      riskLevel: "Medium",
    },
    {
      id: 8,
      title: "Family Office Solutions",
      description: "Comprehensive wealth management services for high-net-worth individuals and families.",
      icon: "family",
      link: "/services/family-office",
      features: ["Wealth preservation", "Tax optimization", "Estate planning", "Multi-generational planning"],
      minInvestment: "$1,000,000",
      expectedReturn: "10-15%",
      riskLevel: "Low",
    },
    {
      id: 9,
      title: "Tradeable Companies",
      description: "Invest in publicly traded African companies with strong growth potential.",
      icon: "tradeable",
      link: "/services/tradeable-companies",
      features: ["Public equities", "Market analysis", "Portfolio diversification", "Liquidity"],
      minInvestment: "$1,000",
      expectedReturn: "8-15%",
      riskLevel: "Medium",
    },
  ]

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "startup":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      case "money":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            />
          </svg>
        )
      case "crypto":
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
      case "realestate":
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
      case "hospitality":
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
      case "impact":
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
      case "business":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        )
      case "family":
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
      case "tradeable":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Investment Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive investment solutions tailored for African opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Investment Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to established companies, we offer diverse investment opportunities across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    {getIcon(service.icon)}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

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
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(service.riskLevel)}`}>
                        {service.riskLevel}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2"
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
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-300 text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Investment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent, secure, and efficient process designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Registration</h3>
              <p className="text-gray-600 text-sm">Create your account and complete KYC verification</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Due Diligence</h3>
              <p className="text-gray-600 text-sm">Our team conducts thorough research on all opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Investment</h3>
              <p className="text-gray-600 text-sm">Choose your investments and fund your portfolio</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Monitoring</h3>
              <p className="text-gray-600 text-sm">Track performance and receive regular updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Investing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of investors building wealth through African opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Started Today
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
