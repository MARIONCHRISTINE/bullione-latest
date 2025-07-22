"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, TrendingUp, Shield, Globe, Users, DollarSign, BarChart3 } from "lucide-react"
import { useAuth } from "../../contexts/AuthContext"
import videoBg from "../../assets/landing.mp4"

const HomePage: React.FC = () => {
  const { isAuthenticated, user } = useAuth()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays on component mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: "brightness(0.7)" }}
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Unlock Africa's
            <span className="text-yellow-400"> Investment Potential</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Connect global capital with vetted African opportunities. Bullione bridges the gap between investors and
            high-growth ventures across the continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link
                to={user?.type === "investor" ? "/investor/dashboard" : "/applicant/dashboard"}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center shadow-lg"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center shadow-lg"
                >
                  Start Investing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/register"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300 shadow-lg"
                >
                  Apply for Funding
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">Total Investments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Active Investors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Funded Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Bullione?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the infrastructure, expertise, and network to make African investments accessible and
              profitable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rigorous Due Diligence</h3>
              <p className="text-gray-600">
                Every opportunity undergoes comprehensive vetting by our expert team with deep African market knowledge.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pan-African Network</h3>
              <p className="text-gray-600">
                Access opportunities across 15+ African countries through our extensive local partnerships and presence.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Returns</h3>
              <p className="text-gray-600">
                Our portfolio companies have delivered an average 25% IRR with strong growth trajectories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversified portfolio across Africa's fastest-growing sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology & Fintech</h3>
              <p className="text-gray-600 mb-4">
                Mobile payments, digital banking, and innovative tech solutions driving financial inclusion.
              </p>
              <Link to="/services/startup-investments" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
              <p className="text-gray-600 mb-4">
                Commercial and residential developments in Africa's rapidly urbanizing cities.
              </p>
              <Link to="/services/real-estate" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Agriculture & Food</h3>
              <p className="text-gray-600 mb-4">
                Sustainable farming, food processing, and supply chain innovations across the continent.
              </p>
              <Link to="/services/impact-investing" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Medical technology, pharmaceutical distribution, and healthcare infrastructure development.
              </p>
              <Link to="/services/impact-investing" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy & Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Renewable energy projects, power generation, and critical infrastructure development.
              </p>
              <Link to="/services/impact-investing" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Industrial production, textile manufacturing, and value-added processing facilities.
              </p>
              <Link to="/services/business-expansion" className="text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading investors and successful entrepreneurs across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">AK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Amara Kone</h4>
                  <p className="text-gray-600 text-sm">CEO, TechVentures Africa</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Bullione helped us secure $2M in Series A funding. Their network and expertise in African markets is
                unmatched."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-semibold">James Mitchell</h4>
                  <p className="text-gray-600 text-sm">Managing Partner, Global Impact Fund</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The quality of deal flow and due diligence from Bullione has exceeded our expectations. Excellent
                returns."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">FO</span>
                </div>
                <div>
                  <h4 className="font-semibold">Fatima Okafor</h4>
                  <p className="text-gray-600 text-sm">Founder, AgriTech Solutions</p>
                </div>
              </div>
              <p className="text-gray-600">
                "From application to funding, Bullione made the process seamless. They truly understand African
                businesses."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of investors and entrepreneurs building Africa's future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Start Investing Today
            </Link>
            <Link
              to="/register"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Apply for Funding
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
