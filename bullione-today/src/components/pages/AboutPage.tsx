"use client"
import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useState } from "react"

// Add this component before the AboutPage component
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <svg
          className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

const AboutPage: React.FC = () => {
  useAuth()

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/bullione.jpg')",
          }}
        ></div>

        {/* Enhanced Overlay */}
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
            About <span className="text-yellow-400">Bullione</span>
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto"
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.4)",
            }}
          >
            Africa's premier Foreign Direct Investment (FDI) service provider, delivering bespoke investment solutions
            to global investors and businesses seeking to enter or expand across the continent.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Who</span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                We Are
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bullione is Africa's premier Foreign Direct Investment (FDI) service provider, delivering bespoke
                investment solutions to global investors and businesses seeking to enter or expand across the continent.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are the world's first African-founded firm offering centralized family office services, tailored to
                support high-net-worth individuals and families both within Africa and globally. With deep local insight
                and world-class execution, we connect ambition with opportunity—unlocking value and driving sustainable
                growth across Africa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At the heart of Bullione's mission is the dedication to provide innovative and scalable investment
                solutions that facilitate seamless entry into the African market. The company specializes in market
                opportunity identification, helping clients discover untapped potential within various sectors.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Agriculture & Agribusiness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">ICT & Telecommunications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">E-mobility Solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Petroleum & Mining</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Precious Metals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">E-commerce & Fintech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-600 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-3">Pursuit of Excellence</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We set the bar high — and then raise it. From rigorous due diligence to investor experience, we hold
                ourselves to global standards to deliver consistent, exceptional results.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Built on Trust</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We do what we say, and we say what we mean. Our track record, transparency, and hands-on support give
                investors the confidence to grow with us.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Inclusive by Design</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Africa's future belongs to everyone. We design opportunities for a wide range of investors —
                individuals, institutions, and the diaspora — making access equitable and inclusive.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-4xl mb-4">🤲</div>
              <h3 className="text-xl font-bold text-white mb-3">Powered by Partnerships</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We know that transformation doesn't happen in silos. We work hand-in-hand with governments,
                entrepreneurs, development partners, and investors to build powerful ecosystems for growth.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-3">Driven by Innovation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                From AI-powered investment tools to seamless digital onboarding, we use innovation to simplify complex
                investment processes and give our investors a smarter edge.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-white mb-3">Impact with Purpose</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We don't just seek returns — we create change. Every investment is a step toward uplifting communities,
                fostering sustainability, and advancing Africa's future.
              </p>
            </div>

            {/* Value 7 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition duration-300 md:col-span-2 lg:col-span-1 lg:col-start-2">
              <div className="text-4xl mb-4">🔑</div>
              <h3 className="text-xl font-bold text-white mb-3">Integrity First</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We believe trust is earned — not claimed. That's why transparency, honesty, and accountability are at
                the heart of every relationship we build and every investment we manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Commitment */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower global investors, philanthropists, and institutions through next-generation, AI-powered
                investment solutions that unlock Africa's untapped potential. We connect capital with transformative
                opportunities while offering bespoke family office services and philanthropic pathways that generate
                both financial returns and lasting impact.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become Africa's most trusted and innovative investment platform—merging advanced technologies, market
                intelligence, and ethical capital to drive inclusive prosperity. Through our integrated approach to
                alternative assets, AI, and socially responsible investing, we aim to shape a thriving Africa where
                investors, communities, and future generations grow together.
              </p>
            </div>

            {/* Commitment */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                At Bullione, we are committed to redefining Africa's investment landscape by delivering secure,
                high-performance solutions for foreign investors, philanthropists, and family offices. We uphold the
                highest standards of integrity, innovation, and strategic insight—ensuring that every engagement results
                in impactful, data-driven, and sustainable growth across Africa's most dynamic sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Market</span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest African market trends and analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Insight 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">African Economic Outlook 2025</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Comprehensive analysis of economic trends, growth projections, and investment opportunities across
                Africa.
              </p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition duration-300">
                Read Report →
              </button>
            </div>

            {/* Insight 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quarterly Performance Reports</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Regular updates on portfolio performance, market movements, and investment returns across our programs.
              </p>
              <button className="text-green-600 font-semibold text-sm hover:text-green-700 transition duration-300">
                View Reports →
              </button>
            </div>

            {/* Insight 3 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weekly Market Newsletter</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Stay updated with weekly insights, market news, and investment opportunities delivered to your inbox.
              </p>
              <button className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition duration-300">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about investing with Bullione
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is Bullione Wealth Access?",
                answer:
                  "Bullione Wealth Access is our comprehensive investment platform that provides global investors with access to vetted African investment opportunities across multiple sectors.",
              },
              {
                question: "What are the minimum investment amounts?",
                answer:
                  "Minimum investment amounts vary by opportunity type, ranging from $25,000 for certain funds to $1M+ for direct infrastructure investments.",
              },
              {
                question: "How are investments secured and regulated?",
                answer:
                  "All investments undergo rigorous due diligence and are structured with appropriate legal protections, regulatory compliance, and risk mitigation measures.",
              },
              {
                question: "What is the lock-in period for investments?",
                answer:
                  "Lock-in periods vary by investment type, typically ranging from 2-7 years for private equity and infrastructure investments, with some liquid options available.",
              },
              {
                question: "How do I track my investment performance?",
                answer:
                  "Investors receive regular performance reports and have access to our digital platform for real-time portfolio tracking and updates.",
              },
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center shadow-lg"
            >
              Have More Questions? Contact Our Team
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
