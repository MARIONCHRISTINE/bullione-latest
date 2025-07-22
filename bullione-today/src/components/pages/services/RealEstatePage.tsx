import type React from "react"
import { Link } from "react-router-dom"

const RealEstatePage: React.FC = () => {
  const properties = [
    {
      id: 1,
      name: "Lagos Commercial Complex",
      location: "Victoria Island, Lagos, Nigeria",
      type: "Commercial",
      investment: 50000,
      expectedReturn: "15-18%",
      duration: "5 years",
      description: "Premium office complex in Lagos's financial district with blue-chip tenants.",
      features: ["Prime location", "Long-term leases", "High occupancy rate", "Capital appreciation"],
      image: "/placeholder.svg?height=200&width=300&text=Lagos+Commercial",
    },
    {
      id: 2,
      name: "Nairobi Residential Development",
      location: "Westlands, Nairobi, Kenya",
      type: "Residential",
      investment: 25000,
      expectedReturn: "12-15%",
      duration: "3 years",
      description: "Modern residential apartments targeting Kenya's growing middle class.",
      features: ["Growing demand", "Modern amenities", "Strategic location", "Rental income"],
      image: "/placeholder.svg?height=200&width=300&text=Nairobi+Residential",
    },
    {
      id: 3,
      name: "Cape Town Mixed-Use",
      location: "Waterfront, Cape Town, South Africa",
      type: "Mixed-Use",
      investment: 75000,
      expectedReturn: "18-22%",
      duration: "7 years",
      description: "Luxury mixed-use development combining retail, office, and residential spaces.",
      features: ["Tourism hub", "Multiple revenue streams", "Luxury market", "International appeal"],
      image: "/placeholder.svg?height=200&width=300&text=Cape+Town+Mixed",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Estate Investments</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Access premium African real estate opportunities with professional management and strong returns.
            </p>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">African Real Estate Opportunity</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Africa's real estate market is experiencing unprecedented growth driven by rapid urbanization, a
                  growing middle class, and increasing foreign investment. With over 60% of the population under 25,
                  housing demand continues to outstrip supply.
                </p>
                <p>
                  Our carefully selected properties offer investors exposure to this growth while providing steady
                  rental income and long-term capital appreciation potential.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">4.2%</div>
                  <div className="text-sm text-gray-600">Annual Urban Growth</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600">$180B</div>
                  <div className="text-sm text-gray-600">Market Size by 2030</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Investment Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Tangible Assets</h4>
                    <p className="text-gray-600 text-sm">Physical properties provide security and intrinsic value</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Rental Income</h4>
                    <p className="text-gray-600 text-sm">Regular cash flow from rental payments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Capital Appreciation</h4>
                    <p className="text-gray-600 text-sm">Long-term property value growth potential</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Inflation Hedge</h4>
                    <p className="text-gray-600 text-sm">Real estate typically outpaces inflation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Investment Properties</h2>
            <p className="text-xl text-gray-600">Carefully selected properties across Africa's key markets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {property.type}
                    </span>
                    <span className="text-green-600 font-semibold">{property.expectedReturn}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                  <p className="text-gray-700 mb-4">{property.description}</p>

                  <div className="space-y-2 mb-4">
                    {property.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Min Investment: ${property.investment.toLocaleString()}</span>
                      <span>Duration: {property.duration}</span>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
                      Invest Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Options</h2>
            <p className="text-xl text-gray-600">Choose from various real estate investment strategies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Commercial</h3>
              <p className="text-gray-600 text-sm">Office buildings, retail spaces, and industrial properties</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Residential</h3>
              <p className="text-gray-600 text-sm">Apartments, condos, and housing developments</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mixed-Use</h3>
              <p className="text-gray-600 text-sm">Combined residential, commercial, and retail spaces</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Land Development</h3>
              <p className="text-gray-600 text-sm">Raw land and development projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Wealth Through Real Estate</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start investing in Africa's growing real estate market with professional management and strong returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Start Investing
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RealEstatePage
