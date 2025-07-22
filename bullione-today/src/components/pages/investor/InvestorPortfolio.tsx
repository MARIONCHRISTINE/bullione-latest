"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "../../../contexts/AuthContext"

const InvestorPortfolio: React.FC = () => {
  const { user } = useAuth()
  const [selectedPeriod, setSelectedPeriod] = useState("1Y")
  const [selectedView, setSelectedView] = useState("overview")

  const portfolioData = {
    totalValue: 485750,
    totalInvested: 425000,
    totalReturn: 60750,
    returnPercentage: 14.3,
    unrealizedGains: 45250,
    realizedGains: 15500,
    dividendsReceived: 8750,
  }

  const investments = [
    {
      id: 1,
      name: "Bullione Wealth Access",
      type: "Money Market Fund",
      invested: 50000,
      currentValue: 58750,
      return: 8750,
      returnPercentage: 17.5,
      status: "Active",
      investmentDate: "2023-06-15",
      maturityDate: "2024-06-15",
      riskLevel: "Low",
    },
    {
      id: 2,
      name: "AgriTech Solutions Kenya",
      type: "Startup Investment",
      invested: 25000,
      currentValue: 32500,
      return: 7500,
      returnPercentage: 30.0,
      status: "Active",
      investmentDate: "2023-08-20",
      maturityDate: "2026-08-20",
      riskLevel: "High",
    },
    {
      id: 3,
      name: "Ghana Solar Farm",
      type: "Impact Investment",
      invested: 75000,
      currentValue: 89250,
      return: 14250,
      returnPercentage: 19.0,
      status: "Active",
      investmentDate: "2023-04-10",
      maturityDate: "2033-04-10",
      riskLevel: "Medium",
    },
    {
      id: 4,
      name: "Lagos Commercial Complex",
      type: "Real Estate",
      invested: 100000,
      currentValue: 115000,
      return: 15000,
      returnPercentage: 15.0,
      status: "Active",
      investmentDate: "2023-03-05",
      maturityDate: "2028-03-05",
      riskLevel: "Medium",
    },
    {
      id: 5,
      name: "MTN Group",
      type: "Tradeable Company",
      invested: 50000,
      currentValue: 52500,
      return: 2500,
      returnPercentage: 5.0,
      status: "Active",
      investmentDate: "2023-09-12",
      maturityDate: "Open",
      riskLevel: "Low",
    },
    {
      id: 6,
      name: "FinTech Nigeria Series A",
      type: "Startup Investment",
      invested: 75000,
      currentValue: 97500,
      return: 22500,
      returnPercentage: 30.0,
      status: "Exited",
      investmentDate: "2022-11-15",
      maturityDate: "2023-11-15",
      riskLevel: "High",
    },
    {
      id: 7,
      name: "Crypto Portfolio (AI)",
      type: "Cryptocurrency",
      invested: 50000,
      currentValue: 40250,
      return: -9750,
      returnPercentage: -19.5,
      status: "Active",
      investmentDate: "2023-07-01",
      maturityDate: "Open",
      riskLevel: "High",
    },
  ]

  const performanceData = [
    { month: "Jan", value: 425000 },
    { month: "Feb", value: 438000 },
    { month: "Mar", value: 445000 },
    { month: "Apr", value: 452000 },
    { month: "May", value: 461000 },
    { month: "Jun", value: 468000 },
    { month: "Jul", value: 459000 },
    { month: "Aug", value: 471000 },
    { month: "Sep", value: 478000 },
    { month: "Oct", value: 482000 },
    { month: "Nov", value: 485750 },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-600 bg-green-100"
      case "Medium":
        return "text-yellow-600 bg-yellow-100"
      case "High":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-600 bg-green-100"
      case "Exited":
        return "text-blue-600 bg-blue-100"
      case "Pending":
        return "text-yellow-600 bg-yellow-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const activeInvestments = investments.filter((inv) => inv.status === "Active")
  const exitedInvestments = investments.filter((inv) => inv.status === "Exited")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
          <p className="text-gray-600">Track your investments and performance</p>
        </div>

        {/* Portfolio Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Portfolio Value</p>
                <p className="text-2xl font-bold text-gray-900">${portfolioData.totalValue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-green-600 text-sm font-medium">
                +{portfolioData.returnPercentage}% ({portfolioData.totalReturn.toLocaleString()})
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Invested</p>
                <p className="text-2xl font-bold text-gray-900">${portfolioData.totalInvested.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-gray-600 text-sm">Across {activeInvestments.length} active investments</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unrealized Gains</p>
                <p className="text-2xl font-bold text-gray-900">${portfolioData.unrealizedGains.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-gray-600 text-sm">From active positions</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Dividends Received</p>
                <p className="text-2xl font-bold text-gray-900">${portfolioData.dividendsReceived.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-gray-600 text-sm">This year</span>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Portfolio Performance</h2>
            <div className="flex space-x-2">
              {["1M", "3M", "6M", "1Y", "ALL"].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1 text-sm rounded-md ${
                    selectedPeriod === period ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64 flex items-end justify-between space-x-2">
            {performanceData.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-blue-600 rounded-t-sm"
                  style={{
                    height: `${((data.value - 420000) / (490000 - 420000)) * 200}px`,
                    minHeight: "20px",
                  }}
                ></div>
                <span className="text-xs text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setSelectedView("overview")}
            className={`px-4 py-2 rounded-md ${
              selectedView === "overview" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50 border"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedView("active")}
            className={`px-4 py-2 rounded-md ${
              selectedView === "active" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50 border"
            }`}
          >
            Active Investments ({activeInvestments.length})
          </button>
          <button
            onClick={() => setSelectedView("exited")}
            className={`px-4 py-2 rounded-md ${
              selectedView === "exited" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50 border"
            }`}
          >
            Exited Investments ({exitedInvestments.length})
          </button>
        </div>

        {/* Investments List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              {selectedView === "overview"
                ? "All Investments"
                : selectedView === "active"
                  ? "Active Investments"
                  : "Exited Investments"}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Investment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invested
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Return
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {(selectedView === "overview"
                  ? investments
                  : selectedView === "active"
                    ? activeInvestments
                    : exitedInvestments
                ).map((investment) => (
                  <tr key={investment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{investment.name}</div>
                        <div className="text-sm text-gray-500">
                          Invested: {new Date(investment.investmentDate).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900">{investment.type}</span>
                        <span
                          className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(investment.riskLevel)}`}
                        >
                          {investment.riskLevel}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${investment.invested.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${investment.currentValue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <div className={`font-medium ${investment.return >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {investment.return >= 0 ? "+" : ""}${investment.return.toLocaleString()}
                        </div>
                        <div
                          className={`text-xs ${investment.returnPercentage >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {investment.returnPercentage >= 0 ? "+" : ""}
                          {investment.returnPercentage}%
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(investment.status)}`}
                      >
                        {investment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">View</button>
                        {investment.status === "Active" && (
                          <button className="text-green-600 hover:text-green-900">Add More</button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Asset Allocation */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Asset Allocation</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Money Market</span>
                <span className="text-sm font-medium">12.1%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "12.1%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Startups</span>
                <span className="text-sm font-medium">25.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "25.2%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Real Estate</span>
                <span className="text-sm font-medium">23.7%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "23.7%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Impact Investing</span>
                <span className="text-sm font-medium">18.4%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "18.4%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Public Companies</span>
                <span className="text-sm font-medium">10.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: "10.8%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Cryptocurrency</span>
                <span className="text-sm font-medium">9.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "9.8%" }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Dividend received from MTN Group</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
                <span className="text-sm font-medium text-green-600">+$1,250</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Investment in AgriTech Solutions valued up</p>
                  <p className="text-xs text-gray-500">1 week ago</p>
                </div>
                <span className="text-sm font-medium text-green-600">+$2,500</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">New investment in Ghana Solar Farm</p>
                  <p className="text-xs text-gray-500">2 weeks ago</p>
                </div>
                <span className="text-sm font-medium text-gray-600">$75,000</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Quarterly report from Bullione Wealth Access</p>
                  <p className="text-xs text-gray-500">3 weeks ago</p>
                </div>
                <span className="text-sm font-medium text-blue-600">View</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Crypto portfolio adjustment</p>
                  <p className="text-xs text-gray-500">1 month ago</p>
                </div>
                <span className="text-sm font-medium text-red-600">-$5,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorPortfolio
