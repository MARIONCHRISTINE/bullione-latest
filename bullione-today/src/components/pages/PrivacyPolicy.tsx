"use client"
import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const PrivacyPolicy: React.FC = () => {
  useAuth()

  return (
    <div
      className="bg-white min-h-screen relative"
      style={{
        backgroundImage: "url('/privacy.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay - Matching HomePage */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-overlay"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)
            `,
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(0, 0, 0, 0.2) 100%)`,
          }}
        ></div>
      </div>

      {/* Hero Section - Transparent to show background */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              Privacy Policy & <span className="text-yellow-400">User Agreement</span>
            </h1>
            <p
              className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p
              className="text-lg mb-8"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              Last updated: July 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content - White section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Introduction</span>
              </h2>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bullione ("we", "our", "us") respects your privacy and is committed to protecting your personal
                    data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                    when you use our platform and services.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Information</span>{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  We Collect
                </span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">We collect personal data when you:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform rotate-1 group-hover:rotate-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-center">When We Collect</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Register or create an account</li>
                      <li>• Use our investment services</li>
                      <li>• Contact our support team</li>
                      <li>• Engage with our platform</li>
                    </ul>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-center">Types of Data</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Identity Data (name, ID/passport)</li>
                      <li>• Contact Data (email, phone)</li>
                      <li>• Financial Data (bank account)</li>
                      <li>• Technical Data (IP address, browser)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Theme Section - Matching HomePage donation impact */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-600 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Privacy Protection Impact</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Your data protection is our priority. See how we safeguard user information across our platform.
            </p>
          </div>
          {/* Privacy Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-gray-300 text-sm md:text-base">Data Encrypted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-300 text-sm md:text-base">Security Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">GDPR</div>
              <div className="text-gray-300 text-sm md:text-base">Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">0</div>
              <div className="text-gray-300 text-sm md:text-base">Data Breaches</div>
            </div>
          </div>
          {/* Privacy Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Data Encryption</h3>
              <p className="text-gray-300 mb-4">
                All personal data is encrypted using industry-standard AES-256 encryption both in transit and at rest.
              </p>
              <div className="text-yellow-400 font-medium">Bank-level security</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Access Control</h3>
              <p className="text-gray-300 mb-4">
                Strict access controls ensure only authorized personnel can access your data on a need-to-know basis.
              </p>
              <div className="text-orange-400 font-medium">Role-based permissions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Audit Trails</h3>
              <p className="text-gray-300 mb-4">
                Complete audit logs track all data access and modifications for transparency and compliance.
              </p>
              <div className="text-yellow-400 font-medium">Full transparency</div>
            </div>
          </div>
          {/* CTA */}
          <div className="text-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-orange-400 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Have Privacy Questions?
            </Link>
            <p className="text-gray-400 mt-4">We're here to address all your data protection concerns</p>
          </div>
        </div>
      </section>

      {/* Final White Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Section - Matching HomePage CTA style */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 md:px-8 py-8 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
            <p className="mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us.
            </p>
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center shadow-lg"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
