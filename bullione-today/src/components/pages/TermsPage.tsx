"use client"
import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const TermsPage: React.FC = () => {
  useAuth()

  return (
    <div
      className="bg-white min-h-screen relative"
      style={{
        backgroundImage: "url('/terms.png')",
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
              Terms and <span className="text-yellow-400">Conditions</span>
            </h1>
            <p
              className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              Please read these terms and conditions carefully before using our platform
            </p>
            <p
              className="text-lg mb-8"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              Last Updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content - White section */}
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
                    Welcome to Bullione ("we", "us", or "our"). These Terms and Conditions ("Terms") govern your access
                    to and use of Bullione's investment platform, website, mobile application, and related services
                    (collectively referred to as the "Platform"). By accessing or using the Platform, you agree to
                    comply with and be bound by these Terms. If you do not agree, you may not use the Platform.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Bullione is a financial technology platform that connects global investors with high-growth
                    investment opportunities across Africa. We facilitate investment transactions but do not provide
                    investment advice or manage investments on behalf of users.
                  </p>
                </div>
              </div>
            </div>

            {/* Platform Services */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Platform</span>{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
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
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">For Investors</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Access to curated and vetted investment opportunities</li>
                      <li>Due diligence documentation and data rooms</li>
                      <li>Portfolio monitoring and performance tracking tools</li>
                      <li>Access to insights and periodic reports</li>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">For Applicants</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Online submission and tracking of funding applications</li>
                      <li>Access to Bullione's investor network</li>
                      <li>Investment facilitation and deal structuring</li>
                      <li>Advisory support for business development</li>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Legal Compliance Impact</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to legal excellence and regulatory compliance across all African markets we serve.
            </p>
          </div>
          {/* Legal Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">15+</div>
              <div className="text-gray-300 text-sm md:text-base">Countries Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-300 text-sm md:text-base">KYC/AML Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-300 text-sm md:text-base">Legal Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">0</div>
              <div className="text-gray-300 text-sm md:text-base">Legal Violations</div>
            </div>
          </div>
          {/* Legal Features */}
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
              <h3 className="text-xl font-semibold mb-3 text-white">Regulatory Compliance</h3>
              <p className="text-gray-300 mb-4">
                Full compliance with securities laws, financial regulations, and investment guidelines across all
                jurisdictions.
              </p>
              <div className="text-yellow-400 font-medium">Multi-jurisdiction expertise</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Legal Documentation</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive legal frameworks, contracts, and documentation ensuring all parties are protected.
              </p>
              <div className="text-orange-400 font-medium">Bulletproof agreements</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Dispute Resolution</h3>
              <p className="text-gray-300 mb-4">
                Established arbitration processes and legal mechanisms for fair and efficient dispute resolution.
              </p>
              <div className="text-yellow-400 font-medium">Fair & transparent</div>
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Legal Consultation
            </Link>
            <p className="text-gray-400 mt-4">Get expert legal guidance for your investment journey</p>
          </div>
        </div>
      </section>

      {/* Final White Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Section - Matching HomePage CTA style */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 md:px-8 py-8 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="mb-6">
              If you have any questions about these Terms and Conditions, please don't hesitate to contact us.
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

export default TermsPage
