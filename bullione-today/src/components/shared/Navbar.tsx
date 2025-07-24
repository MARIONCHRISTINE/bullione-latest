"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Menu, X, User, LogOut, Settings, ChevronDown, Home, Info, Briefcase, Mail } from "lucide-react"
import { useAuth } from "../../contexts/AuthContext"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    navigate("/")
    setUserMenuOpen(false)
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const getDashboardPath = () => {
    return user?.type === "investor" ? "/investor/dashboard" : "/applicant/dashboard"
  }

  const getProfilePath = () => {
    return user?.type === "investor" ? "/investor/profile" : "/applicant/profile"
  }

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/services", label: "Services", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav
      className={`bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl bg-white/98" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {" "}
          {/* Increased from h-16 to h-20 */}
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Bullione
                </span>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`group flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(path)
                    ? "text-blue-600 bg-blue-50 shadow-sm"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}

            {/* User Menu */}
            {isAuthenticated && user ? (
              <div className="relative ml-4" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 border border-gray-200 hover:border-blue-200"
                >
                  <div className="flex items-center space-x-2">
                    {user.avatar ? (
                      <img
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        className="w-8 h-8 rounded-full border-2 border-blue-100"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <span className="max-w-24 truncate">{user.name}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${userMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{user.type} Account</p>
                    </div>

                    <Link
                      to={getDashboardPath()}
                      className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4" />
                      <span>Dashboard</span>
                    </Link>

                    <Link
                      to={getProfilePath()}
                      className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>

                    <hr className="my-2 border-gray-100" />

                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3 ml-4">
                <Link
                  to="/login"
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-xl hover:bg-blue-50/50 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive(path) ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}

            {isAuthenticated && user ? (
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex items-center px-4 py-3 mb-2">
                  {user.avatar ? (
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-10 h-10 rounded-full border-2 border-blue-100 mr-3"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div>
                    <span className="block text-base font-medium text-gray-900">{user.name}</span>
                    <span className="block text-sm text-gray-500 capitalize">{user.type} Account</span>
                  </div>
                </div>

                <Link
                  to={getDashboardPath()}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Settings className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>

                <Link
                  to={getProfilePath()}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </Link>

                <button
                  onClick={() => {
                    handleLogout()
                    setIsOpen(false)
                  }}
                  className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="border-t border-gray-100 pt-4 mt-4 space-y-2">
                <Link
                  to="/login"
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-3 rounded-xl text-base font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
