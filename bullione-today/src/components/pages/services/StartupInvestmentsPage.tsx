import type React from "react"
import { Link } from "react-router-dom"

const StartupInvestmentsPage: React.FC = () => {
  const startups = [
    {
      id: 1,
      name: "AgriTech Solutions Kenya",
      sector: "Agriculture Technology",
      location: "Nairobi, Kenya",
      stage: "Series A",
      target: 2000000,
      raised: 1200000,
      minInvestment: 5000,
      expectedReturn: "30-40%",
      description:
        "Revolutionary farming technology improving crop yields by 40% through AI-powered irrigation systems.",
      highlights: [
        "40% yield improvement",
        "500+ farmers onboarded",
        "Patent pending technology",
        "Government backing",
      ],
      image: "/placeholder.svg?height=200&width=300&text=AgriTech+Kenya",
    },
    {
      id: 2,
      name: "FinTech Nigeria",
      sector: "Financial Technology",
      location: "Lagos, Nigeria",
      stage: "Series B",
      target: 5000000,
      raised: 3000000,
      minInvestment: 10000,
      expectedReturn: "25-35%",
      description: "Digital banking platform serving the unbanked population across West Africa.",
      highlights: ["2M+ active users", "150% YoY growth", "Regulatory approval", "Expansion to 5 countries"],
      image: "/placeholder.svg?height=200&width=300&text=FinTech+Nigeria",
    },
    {
      id: 3,
      name: "HealthTech Ghana",
      sector: "Healthcare Technology",
      location: "Accra, Ghana",
      stage: "Seed",
      target: 1000000,
      raised: 400000,
      minInvestment: 2500,
      expectedReturn: "35-50%",
      description: "Telemedicine platform connecting rural patients with urban healthcare providers.",
      highlights: ["10,000+ consultations", "50+ partner clinics", "WHO recognition", "Insurance partnerships"],
      image: "/placeholder.svg?height=200&width=300&text=HealthTech+Ghana",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Startup Investments</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Invest in Africa's most promising startups and be part of the continent's innovation revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Invest in African Startups?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Africa's startup ecosystem is experiencing unprecedented growth, with venture capital funding reaching
                  record highs. The continent's young, tech-savvy population and rapidly expanding digital
                  infrastructure create unique opportunities for innovative solutions.
                </p>
                <p>
                  Our carefully curated startup portfolio focuses on companies addressing real African challenges while
                  building scalable, profitable businesses with global potential.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">400%+</div>
                  <div className="text-sm text-gray-600">Average VC Growth (2019-2023)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1.3B</div>
                  <div className="text-sm text-gray-600">Population Under 25</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Investment Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Rigorous due diligence process</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Direct access to founding teams</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Portfolio company support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Diversified sector exposure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Startups */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Investment Opportunities</h2>
            <p className="text-xl text-gray-600">Carefully selected startups ready for their next growth phase</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startups.map((startup) => (
              <div
                key={startup.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {startup.stage}
                    </span>
                    <span className="text-green-600 font-semibold">{startup.expectedReturn}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{startup.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {startup.sector} • {startup.location}
                  </p>
                  <p className="text-gray-700 mb-4">{startup.description}</p>

                  <div className="space-y-2 mb-4">
                    {startup.highlights.map((highlight, idx) => (
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
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Target: ${startup.target.toLocaleString()}</span>
                      <span>Raised: ${startup.raised.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(startup.raised / startup.target) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Min: ${startup.minInvestment.toLocaleString()}</span>
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
      </section>

      {/* Investment Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to start investing in African startups</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Browse Opportunities</h3>
              <p className="text-gray-600">Explore our curated selection of high-potential startups</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Due Diligence</h3>
              <p className="text-gray-600">Review detailed reports and financial projections</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Invest</h3>
              <p className="text-gray-600">Make your investment with our secure platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">Monitor your investments and receive regular updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Invest in Africa's Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of investors backing the next generation of African entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Start Investing Today
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StartupInvestmentsPage
