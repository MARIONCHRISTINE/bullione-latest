import type React from "react"
import { Link } from "react-router-dom"

const MoneyMarketPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Money Market & Mutual Funds</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Access stable, high-yield African money market and mutual fund investments with professional management.
            </p>
          </div>
        </div>
      </section>

      {/* Bullione Wealth Access */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Bullione Wealth Access</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our flagship money market fund offering exceptional returns through carefully selected African
                  government securities, corporate bonds, and high-grade money market instruments.
                </p>
                <p>
                  With a minimum investment of just $5,500 and a 6-month lock-in period, you can access
                  institutional-grade investment opportunities typically reserved for large investors.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">17-25%</div>
                  <div className="text-sm text-gray-600">Expected Annual Returns</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">$5,500</div>
                  <div className="text-sm text-gray-600">Minimum Investment</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Fund Features</h3>
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
                    <h4 className="font-semibold">Professional Management</h4>
                    <p className="text-gray-600 text-sm">Expert fund managers with deep African market knowledge</p>
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
                    <h4 className="font-semibold">Diversified Portfolio</h4>
                    <p className="text-gray-600 text-sm">Spread across multiple African markets and instruments</p>
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
                    <h4 className="font-semibold">Regular Reporting</h4>
                    <p className="text-gray-600 text-sm">Monthly performance reports and quarterly reviews</p>
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
                    <h4 className="font-semibold">Flexible Exit Options</h4>
                    <p className="text-gray-600 text-sm">Multiple exit strategies after lock-in period</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Options</h2>
            <p className="text-xl text-gray-600">Choose the option that best fits your investment goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
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
              <h3 className="text-xl font-semibold mb-4">Conservative</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">17-19%</div>
              <p className="text-gray-600 mb-6">Lower risk, stable returns focused on government securities</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Government bonds (70%)
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Treasury bills (20%)
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  High-grade corporates (10%)
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
                Choose Conservative
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Balanced</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">20-22%</div>
              <p className="text-gray-600 mb-6">Balanced risk-return profile with diversified holdings</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Government securities (50%)
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Corporate bonds (30%)
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Money market (20%)
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Choose Balanced
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Growth</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">23-25%</div>
              <p className="text-gray-600 mb-6">Higher risk, higher return potential with growth focus</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Corporate bonds (50%)
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Government securities (30%)
                </li>
                <li className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Alternative investments (20%)
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
                Choose Growth
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Historical Performance</h2>
            <p className="text-xl text-gray-600">Track record of consistent returns across market cycles</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">22.3%</div>
                <div className="text-sm text-gray-600">2023 Returns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">19.8%</div>
                <div className="text-sm text-gray-600">2022 Returns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24.1%</div>
                <div className="text-sm text-gray-600">2021 Returns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">21.5%</div>
                <div className="text-sm text-gray-600">3-Year Average</div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Key Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Sharpe Ratio</span>
                    <span className="font-semibold">1.85</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Maximum Drawdown</span>
                    <span className="font-semibold">-3.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Volatility</span>
                    <span className="font-semibold">8.4%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Alpha</span>
                    <span className="font-semibold">4.2%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Beta</span>
                    <span className="font-semibold">0.76</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Information Ratio</span>
                    <span className="font-semibold">1.23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building Wealth Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of investors earning superior returns through our professionally managed funds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Invest Now - $5,500 Minimum
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

export default MoneyMarketPage
