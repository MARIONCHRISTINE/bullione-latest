"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { User, AuthContextType } from "../types/user"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data generator
const generateMockUser = (email: string, name: string, type: "investor" | "applicant"): User => {
  const baseUser = {
    id: Math.random().toString(36).substr(2, 9),
    email,
    name,
    type,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
    createdAt: new Date(),
  }

  if (type === "investor") {
    return {
      ...baseUser,
      profile: {
        company: "Global Investment Partners",
        location: "New York, USA",
        bio: "Experienced investor focused on African markets and emerging technologies.",
        investmentPreferences: ["Technology", "Real Estate", "Healthcare"],
        totalInvestments: 12,
        portfolioValue: 2500000,
        riskTolerance: "medium" as const,
      },
    }
  } else {
    return {
      ...baseUser,
      profile: {
        company: "TechStart Africa",
        location: "Lagos, Nigeria",
        bio: "Building innovative solutions for African markets.",
        businessType: "Technology Startup",
        fundingGoal: 500000,
        currentRevenue: 50000,
        employees: 8,
        industry: "Fintech",
      },
    }
  }
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem("bullione_user")
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
      } catch (error) {
        console.error("Error parsing stored user data:", error)
        localStorage.removeItem("bullione_user")
      }
    }
    setLoading(false)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async (email: string): Promise<void> => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock authentication - in real app, this would validate credentials
      const userType = email.includes("investor") ? "investor" : "applicant"
      const mockUser = generateMockUser(email, email.split("@")[0], userType)

      setUser(mockUser)
      localStorage.setItem("bullione_user", JSON.stringify(mockUser))
    } catch (error) {
      throw new Error("Login failed")
    } finally {
      setLoading(false)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const register = async (
    email: string,
    _password: string,
    name: string,
    type: "investor" | "applicant",
  ): Promise<void> => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockUser = generateMockUser(email, name, type)

      setUser(mockUser)
      localStorage.setItem("bullione_user", JSON.stringify(mockUser))
    } catch (error) {
      throw new Error("Registration failed")
    } finally {
      setLoading(false)
    }
  }

  const logout = (): void => {
    setUser(null)
    localStorage.removeItem("bullione_user")
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
