"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const HomePage: React.FC = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Unlock Africa's
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Investment Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100">
              Connect with vetted African startups, real estate opportunities, and impact investments. Join a community
              of global investors building Africa's economic transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              {!user ? (
                <>
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition duration-300 shadow-2xl"
                  >
                    Start Investing Today
                  </Link>
                  <Link
                    to="/register"
                    className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition duration-300 backdrop-blur-sm"
                  >
                    Apply for Funding
                  </Link>
                </>
              ) : (
                <Link
                  to={user.type === "investor" ? "/investor/dashboard" : "/applicant/dashboard"}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition duration-300 shadow-2xl"
                >
                  Go to Dashboard
                </Link>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">$150M+</div>
                <div className="text-blue-200 text-sm">Total Investments</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-blue-200 text-sm">Active Investors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">300+</div>
                <div className="text-blue-200 text-sm">Funded Startups</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">25</div>
                <div className="text-blue-200 text-sm">African Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Investment Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked, high-potential investments across Africa's fastest-growing sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">AgriTech</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">FarmTech Kenya</h3>
                <p className="text-gray-600 mb-6">
                  Revolutionary IoT farming solutions increasing crop yields by 60% across East Africa.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">Target: $3.5M</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Series A</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <p className="text-sm text-gray-500">75% funded • 45 days left</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-yellow-400 to-red-500 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-yellow-500 px-3 py-1 rounded-full text-sm font-semibold">Clean Energy</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Solar Ghana Project</h3>
                <p className="text-gray-600 mb-6">
                  100MW solar farm providing clean energy to 200,000 homes with 18% projected IRR.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">Target: $25M</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Impact</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <p className="text-sm text-gray-500">60% funded • 30 days left</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-500 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-purple-500 px-3 py-1 rounded-full text-sm font-semibold">FinTech</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">PayAfrica</h3>
                <p className="text-gray-600 mb-6">
                  Cross-border payment platform serving 2M+ users across 15 African countries.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green-600 font-bold text-lg">Target: $8M</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Series B</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
                <p className="text-sm text-gray-500">90% funded • 15 days left</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300 inline-flex items-center"
            >
              View All Opportunities
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Investment Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversify your portfolio across Africa's most promising sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/startup-investments" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition duration-300">
                  Startup Investments
                </h3>
                <p className="text-gray-600 mb-4">
                  High-growth African startups across fintech, agtech, healthtech, and edtech sectors.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link to="/services/real-estate" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition duration-300">
                  Real Estate
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium commercial and residential properties in Africa's fastest-growing cities.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link to="/services/impact-investing" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition duration-300">
                  Impact Investing
                </h3>
                <p className="text-gray-600 mb-4">
                  Generate positive social and environmental impact while earning competitive returns.
                </p>
                <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link to="/services/money-market" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-600 transition duration-300">
                  Money Market
                </h3>
                <p className="text-gray-600 mb-4">
                  Secure, liquid investments in African government securities and corporate bonds.
                </p>
                <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link to="/services/cryptocurrency" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition duration-300">
                  Cryptocurrency
                </h3>
                <p className="text-gray-600 mb-4">
                  AI-powered cryptocurrency investments focused on African blockchain projects.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link to="/services/family-office" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition duration-300">
                  Family Office
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive wealth management solutions for ultra-high-net-worth families.
                </p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from investors and entrepreneurs who are building Africa's future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div>
                  <div className="font-bold text-lg">John Davidson</div>
                  <div className="text-gray-600">UK Investor</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Bullione has opened up incredible investment opportunities in Africa. My portfolio has grown by 35% in
                just 18 months, and I'm making a real impact."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">AK</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Amina Kone</div>
                  <div className="text-gray-600">Startup Founder, Mali</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Bullione helped us raise $2.5M for our fintech startup. The platform connected us with the right
                investors who understood our vision for financial inclusion in West Africa."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">SM</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Sarah Mitchell</div>
                  <div className="text-gray-600">Family Office, USA</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The family office solutions provided by Bullione have been transformative. We've diversified into
                African markets with confidence and seen exceptional returns."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Investment Portfolio?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of investors and entrepreneurs who are building Africa's economic future. Start your journey
            today.
          </p>
          {!user ? (
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/register"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition duration-300 shadow-2xl"
              >
                Start Investing Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          ) : (
            <Link
              to={user.type === "investor" ? "/investor/opportunities" : "/applicant/application"}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition duration-300 shadow-2xl"
            >
              {user.type === "investor" ? "Explore Opportunities" : "Submit Application"}
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

export default HomePage
