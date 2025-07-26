"use client"

import type React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

interface FormData {
  userType: "investor" | "applicant" | ""
  accountType: "individual" | "organization" | ""
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  phone: string
  country: string
  investmentExperience: string
  investmentAmount: string
  organizationName: string
  organizationType: string
  registrationNumber: string
  agreeToTerms: boolean
}

const RegisterPage: React.FC = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    userType: "",
    accountType: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
    investmentExperience: "",
    investmentAmount: "",
    organizationName: "",
    organizationType: "",
    registrationNumber: "",
    agreeToTerms: false,
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions")
      return
    }

    setIsLoading(true)

    try {
      // Try different possible URLs based on your setup
      const apiUrl = "http://localhost/bullione-latest/bullione-backend/api/register.php"

      console.log("Attempting to register with URL:", apiUrl)
      console.log("Form data being sent:", formData)

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Response status:", response.status) // Debug log

      const result = await response.json()
      console.log("Response data:", result) // Debug log

      if (response.ok) {
        // Registration successful
        navigate("/login", {
          state: {
            message: "Registration successful! Please log in to continue.",
            userType: formData.userType,
          },
        })
      } else {
        setError(result.error || "Registration failed. Please try again.")
      }
    } catch (err) {
      console.error("Network error details:", err) // Debug log
      setError(`Network error: $.message}. Please check if XAMPP is running and try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Image Background */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/register.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Enhanced Overlay - Made lighter to show more background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-10">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-15 mix-blend-overlay z-1"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(255, 193, 7, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)
              `,
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full z-2"
            style={{
              background: `radial-gradient(ellipse at center, transparent 0%, transparent 80%, rgba(0, 0, 0, 0.1) 100%)`,
            }}
          ></div>
        </div>

        {/* Registration Content - Made larger */}
        <div className="relative z-20 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              Join <span className="text-yellow-400">Bullione</span>
            </h2>
            <p
              className="mt-2 text-lg md:text-xl text-gray-200"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-yellow-400 hover:text-yellow-300">
                Sign in
              </Link>
            </p>
          </div>

          {/* Progress Bar - Made larger */}
          <div className="mb-10">
            <div className="flex items-center justify-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-3 ${
                      i <= step
                        ? "bg-yellow-500 text-black border-yellow-500"
                        : "bg-transparent text-gray-300 border-gray-400"
                    }`}
                    style={{
                      boxShadow: i <= step ? "0 0 15px rgba(255, 193, 7, 0.6)" : "none",
                    }}
                  >
                    {i}
                  </div>
                  {i < 4 && (
                    <div
                      className={`w-16 h-2 mx-3 rounded-full ${i < step ? "bg-yellow-500" : "bg-gray-500"}`}
                      style={{
                        boxShadow: i < step ? "0 0 8px rgba(255, 193, 7, 0.4)" : "none",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm font-medium text-gray-200 px-4">
              <span>Account</span>
              <span>Entity</span>
              <span>Personal</span>
              <span>Profile</span>
            </div>
          </div>

          {/* Form Container - Made more transparent and larger */}
          <div
            className="bg-white bg-opacity-75 backdrop-blur-md py-10 px-8 md:px-12 shadow-2xl rounded-3xl border border-white/30"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)",
            }}
          >
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-xl text-lg">
                  {error}
                </div>
              )}

              {/* Step 1: Account Type */}
              {step === 1 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Account Type</h3>
                    <div className="space-y-6">
                      <label className="flex items-center p-6 border-2 border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 hover:border-yellow-300 transition-all duration-300">
                        <input
                          type="radio"
                          name="userType"
                          value="investor"
                          checked={formData.userType === "investor"}
                          onChange={handleInputChange}
                          className="h-6 w-6 text-yellow-600 focus:ring-yellow-500"
                        />
                        <div className="ml-4">
                          <div className="text-lg font-semibold text-gray-900">Investor Account</div>
                          <div className="text-base text-gray-600 mt-1">
                            Invest in African opportunities and manage your portfolio
                          </div>
                        </div>
                      </label>
                      <label className="flex items-center p-6 border-2 border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 hover:border-yellow-300 transition-all duration-300">
                        <input
                          type="radio"
                          name="userType"
                          value="applicant"
                          checked={formData.userType === "applicant"}
                          onChange={handleInputChange}
                          className="h-6 w-6 text-yellow-600 focus:ring-yellow-500"
                        />
                        <div className="ml-4">
                          <div className="text-lg font-semibold text-gray-900">Applicant Account</div>
                          <div className="text-base text-gray-600 mt-1">
                            Apply for funding and investment opportunities
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!formData.userType}
                    className="w-full py-4 px-8 border border-transparent rounded-2xl shadow-lg text-lg font-bold text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 transform hover:-translate-y-1"
                  >
                    Continue
                  </button>
                </div>
              )}

              {/* Step 2: Entity Type */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Are you registering as?</h3>
                    <div className="space-y-6">
                      <label className="flex items-center p-6 border-2 border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 hover:border-yellow-300 transition-all duration-300">
                        <input
                          type="radio"
                          name="accountType"
                          value="individual"
                          checked={formData.accountType === "individual"}
                          onChange={handleInputChange}
                          className="h-6 w-6 text-yellow-600 focus:ring-yellow-500"
                        />
                        <div className="ml-4">
                          <div className="text-lg font-semibold text-gray-900">Individual</div>
                          <div className="text-base text-gray-600 mt-1">
                            Personal account for individual investors or applicants
                          </div>
                        </div>
                      </label>
                      <label className="flex items-center p-6 border-2 border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 hover:border-yellow-300 transition-all duration-300">
                        <input
                          type="radio"
                          name="accountType"
                          value="organization"
                          checked={formData.accountType === "organization"}
                          onChange={handleInputChange}
                          className="h-6 w-6 text-yellow-600 focus:ring-yellow-500"
                        />
                        <div className="ml-4">
                          <div className="text-lg font-semibold text-gray-900">Organization</div>
                          <div className="text-base text-gray-600 mt-1">
                            Corporate account for companies, NGOs, or institutions
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="flex space-x-6">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="flex-1 py-4 px-8 border-2 border-gray-300 rounded-2xl shadow-sm text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!formData.accountType}
                      className="flex-1 py-4 px-8 border border-transparent rounded-2xl shadow-lg text-lg font-bold text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 transform hover:-translate-y-1"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Personal Information */}
              {step === 3 && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {formData.accountType === "organization"
                      ? "Organization & Contact Information"
                      : "Personal Information"}
                  </h3>

                  {formData.accountType === "organization" && (
                    <>
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">Organization Name *</label>
                        <input
                          type="text"
                          name="organizationName"
                          required
                          value={formData.organizationName}
                          onChange={handleInputChange}
                          className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">Organization Type</label>
                        <select
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleInputChange}
                          className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                        >
                          <option value="">Select Type</option>
                          <option value="corporation">Corporation</option>
                          <option value="llc">LLC</option>
                          <option value="partnership">Partnership</option>
                          <option value="ngo">NGO</option>
                          <option value="foundation">Foundation</option>
                          <option value="government">Government Agency</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">Registration Number</label>
                        <input
                          type="text"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleInputChange}
                          className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                        />
                      </div>
                    </>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-gray-700 mb-2">
                        {formData.accountType === "organization" ? "Contact First Name *" : "First Name *"}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-gray-700 mb-2">
                        {formData.accountType === "organization" ? "Contact Last Name *" : "Last Name *"}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-700 mb-2">Country *</label>
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="KE">Kenya</option>
                      <option value="NG">Nigeria</option>
                      <option value="ZA">South Africa</option>
                      <option value="GH">Ghana</option>
                      <option value="UG">Uganda</option>
                      <option value="TZ">Tanzania</option>
                      <option value="RW">Rwanda</option>
                      <option value="ET">Ethiopia</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-gray-700 mb-2">Password *</label>
                      <input
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-gray-700 mb-2">Confirm Password *</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="flex-1 py-4 px-8 border-2 border-gray-300 rounded-2xl shadow-sm text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 py-4 px-8 border border-transparent rounded-2xl shadow-lg text-lg font-bold text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 transform hover:-translate-y-1"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Investment Profile / Final Step */}
              {step === 4 && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {formData.userType === "investor" ? "Investment Profile" : "Complete Registration"}
                  </h3>

                  {formData.userType === "investor" && (
                    <>
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">
                          Investment Experience
                        </label>
                        <select
                          name="investmentExperience"
                          required
                          value={formData.investmentExperience}
                          onChange={handleInputChange}
                          className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                        >
                          <option value="">Select Experience Level</option>
                          <option value="beginner">Beginner (0-2 years)</option>
                          <option value="intermediate">Intermediate (3-7 years)</option>
                          <option value="advanced">Advanced (8+ years)</option>
                          <option value="professional">Professional Investor</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-2">
                          Initial Investment Amount
                        </label>
                        <select
                          name="investmentAmount"
                          required
                          value={formData.investmentAmount}
                          onChange={handleInputChange}
                          className="block w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"
                        >
                          <option value="">Select Amount Range</option>
                          <option value="5000-25000">$5,000 - $25,000</option>
                          <option value="25000-100000">$25,000 - $100,000</option>
                          <option value="100000-500000">$100,000 - $500,000</option>
                          <option value="500000+">$500,000+</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div className="flex items-center">
                    <input
                      id="agreeToTerms"
                      name="agreeToTerms"
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                    />
                    <label htmlFor="agreeToTerms" className="ml-3 block text-base text-gray-900">
                      I agree to the{" "}
                      <Link to="/terms" className="text-yellow-600 hover:text-yellow-500 font-semibold">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-yellow-600 hover:text-yellow-500 font-semibold">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <div className="flex space-x-6">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="flex-1 py-4 px-8 border-2 border-gray-300 rounded-2xl shadow-sm text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-4 px-8 border border-transparent rounded-2xl shadow-lg text-lg font-bold text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 transform hover:-translate-y-1"
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegisterPage
