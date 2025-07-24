"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "../../../contexts/AuthContext"

const InvestorOpportunities: React.FC = () => {
  useAuth()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const opportunities = [
    {
      id: 1,
      name: "AgriTech Solutions Kenya",
      category: "startup",
      sector: "Agriculture Technology",
      location: "Nairobi, Kenya",
      stage: "Series A",
      target: 2000000,
      raised: 1200000,
      minInvestment: 5000,
      expectedReturn: "30-40%",
      riskLevel: "High",
      duration: "3-5 years",
      description:
        "Revolutionary farming technology improving crop yields by 40% through AI-powered irrigation systems.",
      highlights: [
        "40% yield improvement",
        "500+ farmers onboarded",
        "Patent pending technology",
        "Government backing",
      ],
      fundingDeadline: "2024-03-15",
      featured: true,
    },
    {
      id: 2,
      name: "Ghana Solar Farm",
      category: "impact",
      sector: "Renewable Energy",
      location: "Northern Ghana",
      stage: "Project Finance",
      target: 15000000,
      raised: 9000000,
      minInvestment: 10000,
      expectedReturn: "18-22%",
      riskLevel: "Medium",
      duration: "10 years",
      description: "50MW solar installation providing clean energy to 100,000 homes.",
      highlights: [
        "100,000 homes powered",
        "75,000 tons CO2 saved annually",
        "500 local jobs created",
        "Government PPA",
      ],
      fundingDeadline: "2024-02-28",
      featured: true,
    },
    {
      id: 3,
      name: "Lagos Commercial Complex",
      category: "real-estate",
      sector: "Commercial Real Estate",
      location: "Victoria Island, Lagos",
      stage: "Development",
      target: 8000000,
      raised: 3200000,
      minInvestment: 25000,
      expectedReturn: "15-18%",
      riskLevel: "Medium",
      duration: "5 years",
      description: "Premium office complex in Lagos's financial district with blue-chip tenants.",
      highlights: ["Prime location", "Long-term leases", "High occupancy rate", "Capital appreciation"],
      fundingDeadline: "2024-04-30",
      featured: false,
    },
    {
      id: 4,
      name: "Bullione Wealth Access",
      category: "money-market",
      sector: "Money Market Fund",
      location: "Multi-Country",
      stage: "Open",
      target: 50000000,
      raised: 28000000,
      minInvestment: 5500,
      expectedReturn: "17-25%",
      riskLevel: "Low",
      duration: "6 months+",
      description: "Professional money market fund with diversified African government securities and corporate bonds.",
      highlights: ["Professional management", "Diversified portfolio", "Regular reporting", "Flexible exit options"],
      fundingDeadline: "Ongoing",
      featured: true,
    },
    {
      id: 5,
      name: "FinTech Nigeria Series B",
      category: "startup",
      sector: "Financial Technology",
      location: "Lagos, Nigeria",
      stage: "Series B",
      target: 5000000,
      raised: 3000000,
      minInvestment: 10000,
      expectedReturn: "25-35%",
      riskLevel: "High",
      duration: "3-7 years",
      description: "Digital banking platform serving the unbanked population across West Africa.",
      highlights: ["2M+ active users", "150% YoY growth", "Regulatory approval", "Expansion to 5 countries"],
      fundingDeadline: "2024-03-31",
      featured: false,
    },
    {
      id: 6,
      name: "Serengeti Safari Lodge",
      category: "hospitality",
      sector: "Tourism & Hospitality",
      location: "Serengeti, Tanzania",
      stage: "Development",
      target: 12000000,
      raised: 4800000,
      minInvestment: 25000,
      expectedReturn: "15-20%",
      riskLevel: "Medium",
      duration: "7 years",
      description: "Eco-luxury safari lodge with 50 suites overlooking the Serengeti plains.",
      highlights: ["Prime safari location", "Sustainable design", "Year-round demand", "Luxury market"],
      fundingDeadline: "2024-05-15",
      featured: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Opportunities" },
    { value: "startup", label: "Startups" },
    { value: "real-estate", label: "Real Estate" },
    { value: "impact", label: "Impact Investing" },
    { value: "money-market", label: "Money Market" },
    { value: "hospitality", label: "Hospitality" },
  ]

  const filteredOpportunities = opportunities.filter(
    (opp) => selectedCategory === "all" || opp.category === selectedCategory,
  )

  const sortedOpportunities = [...filteredOpportunities].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id - a.id
      case "target-high":
        return b.target - a.target
      case "target-low":
        return a.target - b.target
      case "min-investment":
        return a.minInvestment - b.minInvestment
      default:
        return 0
    }
  })

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "startup":
        return "text-blue-600 bg-blue-100"
      case "real-estate":
        return "text-green-600 bg-green-100"
      case "impact":
        return "text-emerald-600 bg-emerald-100"
      case "money-market":
        return "text-purple-600 bg-purple-100"
      case "hospitality":
        return "text-orange-600 bg-orange-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Investment Opportunities</h1>
          <p className="text-gray-600">Discover and invest in carefully curated African opportunities</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="target-high">Highest Target</option>
                <option value="target-low">Lowest Target</option>
                <option value="min-investment">Lowest Min Investment</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Opportunities */}
        {selectedCategory === "all" && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities
                .filter((opp) => opp.featured)
                .map((opportunity) => (
                  <div
                    key={opportunity.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-200"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2"></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(opportunity.category)}`}
                        >
                          {opportunity.stage}
                        </span>
                        <span className="text-blue-600 font-semibold text-sm">FEATURED</span>
                      </div>

                      <h3 className="text-xl font-semibold mb-2">{opportunity.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {opportunity.sector} • {opportunity.location}
                      </p>
                      <p className="text-gray-700 mb-4">{opportunity.description}</p>

                      <div className="space-y-2 mb-4">
                        {opportunity.highlights.slice(0, 2).map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <svg
                              className="w-4 h-4 text-green-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-4">
                        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                          <div>
                            <span className="text-gray-600">Target:</span>
                            <div className="font-semibold">${opportunity.target.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Raised:</span>
                            <div className="font-semibold">${opportunity.raised.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Min Investment:</span>
                            <div className="font-semibold">${opportunity.minInvestment.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Expected Return:</span>
                            <div className="font-semibold text-green-600">{opportunity.expectedReturn}</div>
                          </div>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(opportunity.raised / opportunity.target) * 100}%` }}
                          ></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {Math.round((opportunity.raised / opportunity.target) * 100)}% funded
                          </span>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                            Invest Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All Opportunities */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === "all"
              ? "All Opportunities"
              : categories.find((c) => c.value === selectedCategory)?.label}
            <span className="text-gray-500 text-lg ml-2">({sortedOpportunities.length})</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sortedOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(opportunity.category)}`}
                    >
                      {opportunity.stage}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(opportunity.riskLevel)}`}
                    >
                      {opportunity.riskLevel} Risk
                    </span>
                  </div>
                  <span className="text-green-600 font-semibold">{opportunity.expectedReturn}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{opportunity.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {opportunity.sector} • {opportunity.location}
                </p>
                <p className="text-gray-700 mb-4">{opportunity.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-600">Target:</span>
                    <div className="font-semibold">${opportunity.target.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Raised:</span>
                    <div className="font-semibold">${opportunity.raised.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Min Investment:</span>
                    <div className="font-semibold">${opportunity.minInvestment.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <div className="font-semibold">{opportunity.duration}</div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(opportunity.raised / opportunity.target) * 100}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <div>{Math.round((opportunity.raised / opportunity.target) * 100)}% funded</div>
                    <div>Deadline: {opportunity.fundingDeadline}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition duration-300">
                      View Details
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                      Invest Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {sortedOpportunities.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No opportunities found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more opportunities.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default InvestorOpportunities
