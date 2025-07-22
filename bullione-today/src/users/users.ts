export interface User {
  id: string
  email: string
  name: string
  type: "investor" | "applicant"
  avatar?: string
  profile?: {
    company?: string
    location?: string
    bio?: string
    investmentFocus?: string[]
    totalInvestments?: number
    portfolioValue?: number
    riskTolerance?: "low" | "medium" | "high"
    preferredSectors?: string[]
  }
  createdAt: string
  lastLogin?: string
  isVerified: boolean
  status: "active" | "pending" | "suspended"
}

export interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (userData: RegisterData) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateProfile: (updates: Partial<User>) => Promise<void>
}

export interface RegisterData {
  email: string
  password: string
  name: string
  type: "investor" | "applicant"
  company?: string
  location?: string
}

export interface LoginCredentials {
  email: string
  password: string
}
