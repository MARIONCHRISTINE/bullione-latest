"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Calendar,
  Bell,
  Plus,
  Eye,
  Edit,
  Download,
  TrendingUp,
  RefreshCw,
  ExternalLink,
} from "lucide-react"
import { useAuth } from "../../../contexts/AuthContext"
import {
  applicantApi,
  type Application,
  type ApplicationStats,
  type Meeting,
  type Notification,
} from "../../../services/applicantApi"
import ApplicantNavbar from "./shared/ApplicantNavbar"

const ApplicantDashboard: React.FC = () => {
  useAuth()
  const [activeTab, setActiveTab] = useState("overview")
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  // State for real data
  const [applicationStats, setApplicationStats] = useState<ApplicationStats | null>(null)
  const [applications, setApplications] = useState<Application[]>([])
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [error, setError] = useState<string | null>(null)

  // Load all dashboard data
  const loadDashboardData = async () => {
    try {
      setError(null)
      console.log("🔄 Starting to load dashboard data...")

      // Test each API call individually with detailed logging
      console.log("📊 Fetching stats...")
      try {
        const statsData = await applicantApi.getApplicationStats()
        console.log("✅ Stats loaded successfully:", statsData)
        setApplicationStats(statsData)
      } catch (statsError) {
        console.error("❌ Stats failed:", statsError)
        throw new Error(`Stats API failed: ${statsError}`)
      }

      console.log("📋 Fetching applications...")
      try {
        const applicationsData = await applicantApi.getApplications()
        console.log("✅ Applications loaded successfully:", applicationsData)
        setApplications(applicationsData)
      } catch (appsError) {
        console.error("❌ Applications failed:", appsError)
        throw new Error(`Applications API failed: ${appsError}`)
      }

      console.log("📅 Fetching meetings...")
      try {
        const meetingsData = await applicantApi.getMeetings()
        console.log("✅ Meetings loaded successfully:", meetingsData)
        setMeetings(meetingsData)
      } catch (meetingsError) {
        console.error("❌ Meetings failed:", meetingsError)
        throw new Error(`Meetings API failed: ${meetingsError}`)
      }

      console.log("🔔 Fetching notifications...")
      try {
        const notificationsData = await applicantApi.getNotifications()
        console.log("✅ Notifications loaded successfully:", notificationsData)
        setNotifications(notificationsData)
      } catch (notificationsError) {
        console.error("❌ Notifications failed:", notificationsError)
        throw new Error(`Notifications API failed: ${notificationsError}`)
      }

      console.log("✅ All dashboard data loaded successfully!")
    } catch (err) {
      console.error("❌ Error loading dashboard data:", err)
      setError(`Failed to load dashboard data: ${err}`)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    loadDashboardData()
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    await loadDashboardData()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "text-green-600 bg-green-100 border-green-200"
      case "under_review":
        return "text-yellow-600 bg-yellow-100 border-yellow-200"
      case "pending":
        return "text-blue-600 bg-blue-100 border-blue-200"
      case "rejected":
        return "text-red-600 bg-red-100 border-red-200"
      default:
        return "text-gray-600 bg-gray-100 border-gray-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "approved":
        return "Approved"
      case "under_review":
        return "Under Review"
      case "pending":
        return "Pending"
      case "rejected":
        return "Rejected"
      default:
        return "Unknown"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ApplicantNavbar />
        <div className="flex items-center justify-center h-96">
          <div className="flex items-center space-x-2">
            <RefreshCw className="w-6 h-6 animate-spin text-blue-600" />
            <span className="text-lg text-gray-600">Loading dashboard...</span>
          </div>
        </div>
      </div>
    )
  }

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-xl">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Applications</p>
              <p className="text-2xl font-bold text-gray-900">{applicationStats?.total_applications || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-xl">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Under Review</p>
              <p className="text-2xl font-bold text-gray-900">{applicationStats?.under_review || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Approved</p>
              <p className="text-2xl font-bold text-gray-900">{applicationStats?.approved || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-xl">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Requested</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(applicationStats?.total_funding_requested || 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Funding Progress */}
      {applicationStats && applicationStats.total_funding_approved > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Funding Progress</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Approved Funding</span>
              <span className="font-semibold text-green-600">
                {formatCurrency(applicationStats.total_funding_approved)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min((applicationStats.total_funding_approved / applicationStats.total_funding_requested) * 100, 100)}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>0</span>
              <span>{formatCurrency(applicationStats.total_funding_requested)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Recent Applications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
            <Link
              to="/applicant/application"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center text-sm font-medium"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Application
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          {applications.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Application
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Funding Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Update
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.slice(0, 5).map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{application.company_name}</div>
                        <div className="text-sm text-gray-500">{application.id}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(application.funding_amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                          application.status,
                        )}`}
                      >
                        {getStatusText(application.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(application.last_update)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button className="text-blue-600 hover:text-blue-900 transition-colors" title="View Details">
                          <Eye className="w-4 h-4" />
                        </button>
                        {application.status === "pending" && (
                          <button
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            title="Edit Application"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          className="text-green-600 hover:text-green-900 transition-colors"
                          title="Download Documents"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No applications yet</p>
              <p className="text-gray-400 text-sm mb-6">Start by creating your first funding application</p>
              <Link
                to="/applicant/application"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Application
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Upcoming Meetings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Upcoming Meetings</h3>
        </div>
        <div className="p-6">
          {meetings.length > 0 ? (
            <div className="space-y-4">
              {meetings
                .filter((m) => m.status === "scheduled")
                .slice(0, 3)
                .map((meeting) => (
                  <div
                    key={meeting.id}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{meeting.title}</h4>
                      <p className="text-sm text-gray-500">
                        {formatDate(meeting.meeting_date)} at {meeting.meeting_time} • {meeting.type.replace("_", " ")}
                      </p>
                      <p className="text-sm text-gray-500">with {meeting.investor_name}</p>
                    </div>
                    {meeting.meeting_link && (
                      <a
                        href={meeting.meeting_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                      >
                        Join <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No upcoming meetings scheduled</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Recent Notifications</h3>
            <Link to="/applicant/notifications" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </Link>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {notifications.slice(0, 3).map((notification) => (
            <div key={notification.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {notification.type === "success" && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {notification.type === "info" && <Bell className="w-5 h-5 text-blue-500" />}
                  {notification.type === "warning" && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                  {notification.type === "error" && <AlertCircle className="w-5 h-5 text-red-500" />}
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{new Date(notification.created_at).toLocaleString()}</p>
                </div>
                {!notification.is_read && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <ApplicantNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
              <p className="text-gray-600 mt-1">Manage your funding applications and track your progress</p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "overview"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "applications"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Applications ({applications.length})
            </button>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors relative ${
                activeTab === "notifications"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Notifications
              {notifications.filter((n) => !n.is_read).length > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && renderOverview()}
        {activeTab === "applications" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">My Applications</h2>
              <Link
                to="/applicant/application"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Application
              </Link>
            </div>
            {/* Applications table would go here - similar to overview but with all applications */}
          </div>
        )}
        {activeTab === "notifications" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
            {/* Notifications list would go here */}
          </div>
        )}
      </div>
    </div>
  )
}

export default ApplicantDashboard
