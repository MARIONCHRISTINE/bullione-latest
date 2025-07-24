"use client"
import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const HomePage: React.FC = () => {
  useAuth()

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Background Video - Optimized for Quality */}
        <video
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            filter: "none",
            imageRendering: "crisp-edges",
            WebkitImageRendering: "crisp-edges",
          }}
        >
          <source src="/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Enhanced Overlay - Removed backdrop-blur */}
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

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Unlock Africa's
            <span className="text-yellow-400"> Investment Potential</span>
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto"
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
            }}
          >
            Connect global capital with vetted African opportunities. Bullione bridges the gap between investors and
            high-growth ventures across the continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center shadow-lg text-sm md:text-base"
            >
              Start Investing
              <svg className="ml-2 h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              to="/register"
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300 shadow-lg text-sm md:text-base"
            >
              Apply for Funding
            </Link>
            <Link
              to="/donate-now"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition duration-300 flex items-center justify-center shadow-lg text-sm md:text-base"
            >
              <svg className="mr-2 h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* Combined Stats & Features Section */}
      <section className="py-8 md:py-12 bg-white relative overflow-hidden shadow-2xl mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Investment Performance */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Investment</span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Performance
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Our <span className="text-yellow-600 font-semibold">track record</span>{" "}
              <span className="text-blue-600 font-semibold">speaks for itself</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:from-gray-100 hover:to-gray-50 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                $5M+
              </div>
              <div className="text-gray-600">Total Investments</div>
              <div className="text-yellow-600 text-xs font-medium mt-1">
                GROWING <span className="text-blue-600">DAILY</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:from-gray-100 hover:to-gray-50 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-gray-600">Active Investors</div>
              <div className="text-blue-600 text-xs font-medium mt-1">
                GLOBAL <span className="text-yellow-600">NETWORK</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:from-gray-100 hover:to-gray-50 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className="text-gray-600">Funded Projects</div>
              <div className="text-yellow-600 text-xs font-medium mt-1">
                SUCCESS <span className="text-gray-900">STORIES</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:from-gray-100 hover:to-gray-50 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                15
              </div>
              <div className="text-gray-600">Countries</div>
              <div className="text-blue-600 text-xs font-medium mt-1">
                CONTINENT <span className="text-yellow-600">WIDE</span>
              </div>
            </div>
          </div>

          {/* Why Choose Bullione */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Why Choose</span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Bullione?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the <span className="text-yellow-600 font-semibold">infrastructure</span>,{" "}
              <span className="text-blue-600 font-semibold">expertise</span>, and{" "}
              <span className="text-gray-900 font-semibold">network</span> to make African investments accessible and
              profitable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    <span className="text-blue-600">Rigorous</span> Due Diligence
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Every opportunity undergoes comprehensive vetting by our expert team with deep African market
                    knowledge.
                  </p>
                  <div className="text-blue-600 text-xs font-semibold tracking-wider">EXPERT VERIFIED</div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform rotate-1 group-hover:rotate-2 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    <span className="text-yellow-600">Pan-African</span> Network
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Access opportunities across 15+ African countries through our extensive local partnerships and
                    presence.
                  </p>
                  <div className="text-yellow-600 text-xs font-semibold tracking-wider">CONTINENT CONNECTED</div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    <span className="text-blue-600">Proven</span> Returns
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our portfolio companies have delivered an average 25% IRR with strong growth trajectories.
                  </p>
                  <div className="text-blue-600 text-xs font-semibold tracking-wider">RESULTS DRIVEN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Impact Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-600 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Creating Lasting Impact</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond investments, we believe in giving back. Your donations help us support communities, education, and
              sustainable development across Africa.
            </p>
          </div>

          {/* Impact Statistics */}
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

          {/* Donation Causes Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Education & Training</h3>
              <p className="text-gray-300 mb-4">
                Fund entrepreneurship programs and financial literacy initiatives across Africa.
              </p>
              <div className="text-yellow-400 font-medium">150+ students reached</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Women Entrepreneurs</h3>
              <p className="text-gray-300 mb-4">Empower female-led businesses and startups across the continent.</p>
              <div className="text-orange-400 font-medium">25+ women supported</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Sustainable Agriculture</h3>
              <p className="text-gray-300 mb-4">Support innovative farming and food security projects.</p>
              <div className="text-yellow-400 font-medium">80+ farmers helped</div>
            </div>
          </div>

          {/* Donation CTA */}
          <div className="text-center">
            <Link
              to="/donate-now"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-orange-400 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              Start Making a Difference
            </Link>
            <p className="text-gray-400 mt-4">100% of donations go directly to the causes you choose</p>
          </div>
        </div>
      </section>

      {/* Types of Opportunities Bullione Facilitates */}
      <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-cyan-300/6 to-blue-300/6 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              💼 Types of Opportunities Bullione Facilitates
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Diversified portfolio across Africa's fastest-growing sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">💼 Turnkey PPP Investments</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Shovel-ready PPP projects, often backed by sovereign guarantees or multilateral development banks
                    (AfDB, IFC, etc.)
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform rotate-1 group-hover:rotate-2 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🏗️ Concession-Based Investments</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Operate toll roads, ports, or utilities under 15–30 year concession agreements with revenue share
                    models
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🔄 Build-Operate-Transfer (BOT)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Fund and operate projects, then transfer to government after a fixed return period
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform rotate-1 group-hover:rotate-2 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🤝 Joint Ventures</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Co-develop strategic assets with government agencies, sharing equity, risk, and returns
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform rotate-1 group-hover:rotate-2 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">📈 Government-Guaranteed Bonds</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Secure long-term fixed returns (6–9%+) from infrastructure-backed bonds issued by governments
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform rotate-1 group-hover:rotate-2 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🛡️ Risk Mitigation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Political risk insurance via MIGA, OPIC, or ATI with sovereign guarantees and arbitration-ready
                    legal structures
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-600 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">What Our Partners Say</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from everyday entrepreneurs across Africa who have transformed their businesses with our
              support.
            </p>
          </div>

          {/* Partner Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-blue-500 mb-2">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Success Stories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-purple-500 mb-2">4.9/5</div>
              <div className="text-gray-300 text-sm md:text-base">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-blue-500 mb-2">95%</div>
              <div class="text-gray-300 text-sm md:text-base">Satisfaction Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-2xl md:text-4xl font-bold text-purple-500 mb-2">15+</div>
              <div className="text-gray-300 text-sm md:text-base">Countries</div>
            </div>
          </div>

          {/* Testimonials Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KM</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-1">
                    <h4 className="font-semibold text-white text-sm">Kwame Mensah</h4>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Small Business Owner • Accra, Ghana</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "Got <span className="text-blue-400 font-semibold">$45K funding</span> for my food delivery startup! The
                team was super helpful and patient with all my questions. Process took 3 months but totally worth it 🙌"
              </p>
              <div className="text-blue-400 font-medium">Food Delivery Startup</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AN</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-1">
                    <h4 className="font-semibold text-white text-sm">Aisha Ndovu</h4>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="w-3 h-3 text-gray-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Fashion Designer • Nairobi, Kenya</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "Applied for funding and got connected with an investor who really understood my vision.{" "}
                <span className="text-green-400 font-semibold">$25K secured</span> for my sustainable fashion line!
                🌿✨"
              </p>
              <div className="text-green-400 font-medium">Sustainable Fashion</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TO</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-1">
                    <h4 className="font-semibold text-white text-sm">Tunde Okafor</h4>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Tech Freelancer • Lagos, Nigeria</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "Honestly didn't expect much but they came through!{" "}
                <span className="text-purple-400 font-semibold">$15K for my mobile app</span>. The mentorship during the
                process was invaluable. Highly recommend! 🚀"
              </p>
              <div className="text-purple-400 font-medium">Mobile App Development</div>
            </div>
          </div>

          {/* Testimonials CTA */}
          <div className="text-center">
            <Link
              to="/testimonials"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:from-blue-400 hover:to-purple-400 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Read More Success Stories
            </Link>
            <p className="text-gray-400 mt-4">Join 500+ entrepreneurs who've transformed their businesses</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
