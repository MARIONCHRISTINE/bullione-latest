"use client"
import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const CookiesPolicy: React.FC = () => {
  useAuth()

  return (
    <div
      className="bg-white min-h-screen relative"
      style={{
        backgroundImage: "url('/cookie.png')",
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
              Cookie <span className="text-yellow-400">Policy</span>
            </h1>
            <p
              className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              Learn how we use cookies to enhance your experience on our platform
            </p>
            <p
              className="text-lg mb-8"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content - White section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">What Are</span>{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Cookies?
                </span>
              </h2>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cookies are small text files that are stored on your device when you visit our website. They help us
                    provide you with a better experience by remembering your preferences and understanding how you use
                    our platform.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This Cookie Policy explains what cookies are, how we use them, the types of cookies we use, and how
                    you can control your cookie preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">How We</span>{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Use Cookies
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Essential Functions</h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Remember your login status</li>
                      <li>• Maintain your session security</li>
                      <li>• Store your language preferences</li>
                      <li>• Enable core platform functionality</li>
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">User Experience</h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Personalize content and features</li>
                      <li>• Remember your dashboard settings</li>
                      <li>• Improve site navigation</li>
                      <li>• Enhance platform performance</li>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Cookie Management Impact</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent cookie usage for enhanced user experience while respecting your privacy preferences.
            </p>
          </div>
          {/* Cookie Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">4</div>
              <div className="text-gray-300 text-sm md:text-base">Cookie Types</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-300 text-sm md:text-base">User Control</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-yellow-500 mb-2">GDPR</div>
              <div className="text-gray-300 text-sm md:text-base">Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-300 text-sm md:text-base">Transparency</div>
            </div>
          </div>
          {/* Cookie Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Essential Cookies</h3>
              <p className="text-gray-300 mb-4">
                Necessary cookies that ensure basic website functionality and cannot be disabled.
              </p>
              <div className="text-yellow-400 font-medium">Always active</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Analytics Cookies</h3>
              <p className="text-gray-300 mb-4">
                Help us understand user behavior and improve platform performance through anonymous data collection.
              </p>
              <div className="text-orange-400 font-medium">User controlled</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Preference Cookies</h3>
              <p className="text-gray-300 mb-4">
                Remember your settings and preferences to provide a personalized experience across visits.
              </p>
              <div className="text-yellow-400 font-medium">Customizable</div>
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Manage Cookie Preferences
            </Link>
            <p className="text-gray-400 mt-4">Take control of your cookie settings and privacy preferences</p>
          </div>
        </div>
      </section>

      {/* Final White Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Section - Matching HomePage CTA style */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 md:px-8 py-8 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Questions About Cookies?</h3>
            <p className="mb-6">
              If you have any questions about our Cookie Policy or how we use cookies, please contact us.
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

export default CookiesPolicy
