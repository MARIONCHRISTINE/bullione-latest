import type React from "react"
import { Link } from "react-router-dom"

const TradeableCompaniesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tradeable Companies</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Invest in established African companies with tradeable shares and high liquidity potential.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Liquid Investment Opportunities</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our tradeable companies portfolio offers investors access to established African businesses with
                  strong fundamentals and clear exit strategies. These companies are either publicly listed or preparing
                  for public offerings, providing liquidity options for investors.
                </p>
                <p>
                  From banking and telecommunications to consumer goods and energy, our selection spans Africa's most
                  dynamic sectors with companies that have proven business models and growth trajectories.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Listed Companies</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600">$2B+</div>
                  <div className="text-sm text-gray-600">Market Cap</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Investment Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">High Liquidity</h4>
                    <p className="text-gray-600 text-sm">Easy entry and exit through public markets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Transparency</h4>
                    <p className="text-gray-600 text-sm">Regular financial reporting and disclosure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Diversification</h4>
                    <p className="text-gray-600 text-sm">Access to multiple sectors and markets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Professional Management</h4>
                    <p className="text-gray-600 text-sm">Experienced management teams and governance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Investment Opportunities</h2>
            <p className="text-xl text-gray-600">Established companies with strong growth potential</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Banking
                  </span>
                  <span className="text-green-600 font-semibold">Listed</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">EcoBank Transnational</h3>
                <p className="text-gray-600 text-sm mb-2">Pan-African Banking • Multiple Markets</p>
                <p className="text-gray-700 mb-4">
                  Leading pan-African bank with operations in 33 countries and strong digital banking platform.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Market Cap:</span>
                    <span className="font-semibold">$2.1B</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">P/E Ratio:</span>
                    <span className="font-semibold">8.5x</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Dividend Yield:</span>
                    <span className="font-semibold text-green-600">6.2%</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Telecom</span>
                  <span className="text-blue-600 font-semibold">Listed</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">MTN Group</h3>
                <p className="text-gray-600 text-sm mb-2">Telecommunications • South Africa</p>
                <p className="text-gray-700 mb-4">
                  Africa's largest mobile network operator serving 280+ million customers across 19 countries.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Market Cap:</span>
                    <span className="font-semibold">$8.7B</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">P/E Ratio:</span>
                    <span className="font-semibold">12.3x</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Dividend Yield:</span>
                    <span className="font-semibold text-green-600">5.8%</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                    Consumer
                  </span>
                  <span className="text-orange-600 font-semibold">Pre-IPO</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dangote Cement</h3>
                <p className="text-gray-600 text-sm mb-2">Manufacturing • Nigeria</p>
                <p className="text-gray-700 mb-4">
                  Africa's largest cement producer with operations across 10 countries and strong market position.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Valuation:</span>
                    <span className="font-semibold">$4.2B</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-semibold">$2.8B</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Expected IPO:</span>
                    <span className="font-semibold text-orange-600">2024</span>
                  </div>
                </div>
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Sectors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Sectors</h2>
            <p className="text-xl text-gray-600">Diversified exposure across Africa's key economic sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Financial Services</h3>
              <p className="text-gray-600 text-sm">Banks, insurance, and fintech companies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Telecommunications</h3>
              <p className="text-gray-600 text-sm">Mobile networks and digital services</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Consumer Goods</h3>
              <p className="text-gray-600 text-sm">Manufacturing and retail companies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Energy & Resources</h3>
              <p className="text-gray-600 text-sm">Oil, gas, mining, and renewable energy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio Performance</h2>
            <p className="text-xl text-gray-600">Strong returns from our tradeable companies portfolio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">18.5%</div>
              <div className="text-gray-600">Average Annual Return</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Positive Return Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1.2x</div>
              <div className="text-gray-600">Average Beta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8%</div>
              <div className="text-gray-600">Average Dividend Yield</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Invest in Africa's Leading Companies</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Access liquid investment opportunities in established African businesses with strong growth potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Start Investing
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

export default TradeableCompaniesPage
