"use client"
import { useState } from "react"
import React from "react"

import { Link, useNavigate, useSearchParams } from "react-router-dom"

interface ResetFormData {
  email: string
  token: string
  newPassword: string
  confirmPassword: string
}

const ResetPasswordPage = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<ResetFormData>({
    email: "",
    token: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  // Check if token is provided in URL
  React.useEffect(() => {
    const tokenFromUrl = searchParams.get("token")
    if (tokenFromUrl) {
      setFormData((prev) => ({ ...prev, token: tokenFromUrl }))
      setStep(3) // Skip to password reset step
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsLoading(true)

    try {
      const response = await fetch("http://localhost/bullione-latest/bullione-backend/api/reset-password.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "request_reset",
          email: formData.email,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess("If an account with that email exists, you will receive a reset token. Please check your email.")
        setStep(2)
        // In a real app, you'd send an email. For now, we'll show the token
        if (data.token) {
          setFormData((prev) => ({ ...prev, token: data.token }))
          setTimeout(() => {
            setStep(3)
            setSuccess("Use this token to reset your password: " + data.token)
          }, 2000)
        }
      } else {
        setError(data.message || "An error occurred. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.newPassword.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("http://localhost/bullione-latest/bullione-backend/api/reset-password.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "reset_password",
          token: formData.token,
          new_password: formData.newPassword,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess("Password reset successfully! Redirecting to login...")
        setTimeout(() => {
          navigate("/login")
        }, 2000)
      } else {
        setError(data.message || "Failed to reset password. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/register.png)" }}
      />

      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-transparent to-blue-900/20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Reset Password
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
            {step === 1 && "Enter your email to receive a reset token"}
            {step === 2 && "Check your email for the reset token"}
            {step === 3 && "Enter your new password"}
          </p>
          <p className="text-base text-white/80" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
            Remember your password?{" "}
            <Link to="/login" className="font-medium text-yellow-400 hover:text-yellow-300 transition-colors">
              Sign in here
            </Link>
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    i <= step
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg"
                      : "bg-white/20 text-white/60 backdrop-blur-sm"
                  }`}
                >
                  {i}
                </div>
                {i < 3 && (
                  <div
                    className={`w-16 h-2 mx-2 rounded-full transition-all duration-300 ${
                      i < step ? "bg-gradient-to-r from-yellow-400 to-yellow-600" : "bg-white/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-sm text-white/80 px-4">
            <span>Request Reset</span>
            <span>Check Email</span>
            <span>New Password</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/75 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-8 md:p-10">
          {/* Messages */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>
          )}

          {success && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              {success}
            </div>
          )}

          {/* Step 1: Request Reset */}
          {step === 1 && (
            <form onSubmit={handleRequestReset} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-3">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-200 bg-white/90"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 text-lg font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-3 focus:ring-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                    Sending Reset Token...
                  </div>
                ) : (
                  "Send Reset Token"
                )}
              </button>
            </form>
          )}

          {/* Step 2: Check Email */}
          {step === 2 && (
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gray-800">Check Your Email</h3>
              <p className="text-gray-600 text-lg">
                We've sent a reset token to your email address. Please check your inbox and use the token to reset your
                password.
              </p>
              <button
                onClick={() => setStep(3)}
                className="w-full py-4 px-6 text-lg font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-3 focus:ring-yellow-500/50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                I Have My Token
              </button>
            </div>
          )}

          {/* Step 3: Reset Password */}
          {step === 3 && (
            <form onSubmit={handleResetPassword} className="space-y-6">
              <div>
                <label htmlFor="token" className="block text-lg font-semibold text-gray-800 mb-3">
                  Reset Token
                </label>
                <input
                  id="token"
                  name="token"
                  type="text"
                  required
                  value={formData.token}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-200 bg-white/90"
                  placeholder="Enter your reset token"
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-lg font-semibold text-gray-800 mb-3">
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  required
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-200 bg-white/90"
                  placeholder="Enter your new password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-lg font-semibold text-gray-800 mb-3">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-200 bg-white/90"
                  placeholder="Confirm your new password"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 px-6 text-lg font-semibold text-gray-700 bg-gray-200 rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-3 focus:ring-gray-400/50 transition-all duration-200"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-4 px-6 text-lg font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-3 focus:ring-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                      Resetting...
                    </div>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ResetPasswordPage
