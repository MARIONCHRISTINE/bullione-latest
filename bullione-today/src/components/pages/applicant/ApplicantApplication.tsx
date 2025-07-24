"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "../../../contexts/AuthContext"

const ApplicantApplication: React.FC = () => {
  useAuth()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    companyDescription: "",
    industry: "",
    foundedYear: "",
    location: "",
    website: "",
    employees: "",

    // Funding Information
    fundingStage: "",
    fundingAmount: "",
    previousFunding: "",
    useOfFunds: "",

    // Business Model
    businessModel: "",
    revenueModel: "",
    currentRevenue: "",
    projectedRevenue: "",
    customers: "",

    // Team Information
    founderName: "",
    founderEmail: "",
    founderExperience: "",
    teamSize: "",
    keyTeamMembers: "",

    // Market & Competition
    marketSize: "",
    targetMarket: "",
    competitors: "",
    competitiveAdvantage: "",

    // Financial Information
    burnRate: "",
    runway: "",
    grossMargin: "",
    unitEconomics: "",

    // Legal & Compliance
    legalStructure: "",
    intellectualProperty: "",
    regulatoryCompliance: "",

    // Additional Information
    socialImpact: "",
    environmentalImpact: "",
    riskFactors: "",
    exitStrategy: "",
  })

  const steps = [
    { id: 1, name: "Company Info", description: "Basic company information" },
    { id: 2, name: "Funding Details", description: "Funding requirements and history" },
    { id: 3, name: "Business Model", description: "Revenue model and customers" },
    { id: 4, name: "Team", description: "Founder and team information" },
    { id: 5, name: "Market Analysis", description: "Market size and competition" },
    { id: 6, name: "Financials", description: "Financial metrics and projections" },
    { id: 7, name: "Legal & Impact", description: "Legal structure and impact" },
    { id: 8, name: "Review", description: "Review and submit application" },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitting application:", formData)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange("industry", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="fintech">FinTech</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="education">Education</option>
                  <option value="energy">Energy</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Founded Year *</label>
                <input
                  type="number"
                  value={formData.foundedYear}
                  onChange={(e) => handleInputChange("foundedYear", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="2020"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="City, Country"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://www.example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                <select
                  value={formData.employees}
                  onChange={(e) => handleInputChange("employees", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select range</option>
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-25">11-25</option>
                  <option value="26-50">26-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Description *</label>
              <textarea
                value={formData.companyDescription}
                onChange={(e) => handleInputChange("companyDescription", e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your company, what you do, and your mission..."
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Funding Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Funding Stage *</label>
                <select
                  value={formData.fundingStage}
                  onChange={(e) => handleInputChange("fundingStage", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select stage</option>
                  <option value="pre-seed">Pre-Seed</option>
                  <option value="seed">Seed</option>
                  <option value="series-a">Series A</option>
                  <option value="series-b">Series B</option>
                  <option value="series-c">Series C</option>
                  <option value="growth">Growth</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Funding Amount Sought (USD) *</label>
                <input
                  type="number"
                  value={formData.fundingAmount}
                  onChange={(e) => handleInputChange("fundingAmount", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1000000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Previous Funding (USD)</label>
                <input
                  type="number"
                  value={formData.previousFunding}
                  onChange={(e) => handleInputChange("previousFunding", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="500000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Use of Funds *</label>
              <textarea
                value={formData.useOfFunds}
                onChange={(e) => handleInputChange("useOfFunds", e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe how you plan to use the funding (e.g., product development, marketing, hiring, etc.)"
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Business Model</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Model *</label>
                <select
                  value={formData.businessModel}
                  onChange={(e) => handleInputChange("businessModel", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select model</option>
                  <option value="b2b">B2B</option>
                  <option value="b2c">B2C</option>
                  <option value="b2b2c">B2B2C</option>
                  <option value="marketplace">Marketplace</option>
                  <option value="saas">SaaS</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Revenue Model *</label>
                <select
                  value={formData.revenueModel}
                  onChange={(e) => handleInputChange("revenueModel", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select model</option>
                  <option value="subscription">Subscription</option>
                  <option value="transaction">Transaction Fees</option>
                  <option value="advertising">Advertising</option>
                  <option value="freemium">Freemium</option>
                  <option value="one-time">One-time Purchase</option>
                  <option value="commission">Commission</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Revenue (USD)</label>
                <input
                  type="number"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange("currentRevenue", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="250000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Projected Revenue (Next Year)</label>
                <input
                  type="number"
                  value={formData.projectedRevenue}
                  onChange={(e) => handleInputChange("projectedRevenue", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="750000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Customers/Users</label>
              <textarea
                value={formData.customers}
                onChange={(e) => handleInputChange("customers", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your current customer base, number of users, key clients, etc."
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Team Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Founder Name *</label>
                <input
                  type="text"
                  value={formData.founderName}
                  onChange={(e) => handleInputChange("founderName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Founder Email *</label>
                <input
                  type="email"
                  value={formData.founderEmail}
                  onChange={(e) => handleInputChange("founderEmail", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Team Size</label>
                <input
                  type="number"
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange("teamSize", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="5"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Founder Experience *</label>
              <textarea
                value={formData.founderExperience}
                onChange={(e) => handleInputChange("founderExperience", e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe the founder's relevant experience, previous companies, education, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Key Team Members</label>
              <textarea
                value={formData.keyTeamMembers}
                onChange={(e) => handleInputChange("keyTeamMembers", e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe key team members, their roles, and relevant experience"
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Market Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Market Size (USD) *</label>
                <input
                  type="text"
                  value={formData.marketSize}
                  onChange={(e) => handleInputChange("marketSize", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., $10B TAM, $1B SAM"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Market *</label>
              <textarea
                value={formData.targetMarket}
                onChange={(e) => handleInputChange("targetMarket", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your target market, customer segments, demographics, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Main Competitors</label>
              <textarea
                value={formData.competitors}
                onChange={(e) => handleInputChange("competitors", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="List your main competitors and how you compare"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Competitive Advantage *</label>
              <textarea
                value={formData.competitiveAdvantage}
                onChange={(e) => handleInputChange("competitiveAdvantage", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="What makes your solution unique? What's your moat?"
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Financial Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Burn Rate (USD)</label>
                <input
                  type="number"
                  value={formData.burnRate}
                  onChange={(e) => handleInputChange("burnRate", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="50000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Runway (Months)</label>
                <input
                  type="number"
                  value={formData.runway}
                  onChange={(e) => handleInputChange("runway", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="18"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gross Margin (%)</label>
                <input
                  type="number"
                  value={formData.grossMargin}
                  onChange={(e) => handleInputChange("grossMargin", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="75"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Unit Economics</label>
              <textarea
                value={formData.unitEconomics}
                onChange={(e) => handleInputChange("unitEconomics", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your unit economics: CAC, LTV, payback period, etc."
              />
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Legal & Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Legal Structure *</label>
                <select
                  value={formData.legalStructure}
                  onChange={(e) => handleInputChange("legalStructure", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select structure</option>
                  <option value="corporation">Corporation</option>
                  <option value="llc">LLC</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Intellectual Property</label>
              <textarea
                value={formData.intellectualProperty}
                onChange={(e) => handleInputChange("intellectualProperty", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe any patents, trademarks, copyrights, or trade secrets"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Social Impact</label>
              <textarea
                value={formData.socialImpact}
                onChange={(e) => handleInputChange("socialImpact", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="How does your company create positive social impact?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Environmental Impact</label>
              <textarea
                value={formData.environmentalImpact}
                onChange={(e) => handleInputChange("environmentalImpact", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="How does your company impact the environment?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Risk Factors</label>
              <textarea
                value={formData.riskFactors}
                onChange={(e) => handleInputChange("riskFactors", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="What are the main risks facing your business?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Exit Strategy</label>
              <textarea
                value={formData.exitStrategy}
                onChange={(e) => handleInputChange("exitStrategy", e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="What is your long-term exit strategy? (IPO, acquisition, etc.)"
              />
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Review & Submit</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-md font-semibold text-gray-900 mb-4">Application Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Company:</span>
                  <span className="ml-2 text-gray-900">{formData.companyName || "Not provided"}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Industry:</span>
                  <span className="ml-2 text-gray-900">{formData.industry || "Not provided"}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Funding Stage:</span>
                  <span className="ml-2 text-gray-900">{formData.fundingStage || "Not provided"}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Funding Amount:</span>
                  <span className="ml-2 text-gray-900">
                    {formData.fundingAmount
                      ? `$${Number.parseInt(formData.fundingAmount).toLocaleString()}`
                      : "Not provided"}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Location:</span>
                  <span className="ml-2 text-gray-900">{formData.location || "Not provided"}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Founder:</span>
                  <span className="ml-2 text-gray-900">{formData.founderName || "Not provided"}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-md font-semibold text-blue-900 mb-2">Next Steps</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Your application will be reviewed by our investment team</li>
                <li>• You'll receive a confirmation email within 24 hours</li>
                <li>• Initial review process takes 5-7 business days</li>
                <li>• If selected, we'll schedule a preliminary call</li>
                <li>• Due diligence process typically takes 2-4 weeks</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <p className="text-yellow-800 text-sm">
                  Please review all information carefully before submitting. You can edit your application until it's
                  submitted.
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Funding Application</h1>
          <p className="text-gray-600">Apply for investment funding from Bullione</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                    currentStep >= step.id ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300 text-gray-500"
                  }`}
                >
                  {currentStep > step.id ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-2 ${currentStep > step.id ? "bg-blue-600" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-900">{steps[currentStep - 1].name}</h2>
            <p className="text-sm text-gray-600">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">{renderStepContent()}</div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-md ${
              currentStep === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Previous
          </button>

          {currentStep < steps.length ? (
            <button onClick={handleNext} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ApplicantApplication
