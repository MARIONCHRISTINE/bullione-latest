export interface User {
  id: string
  email: string
  name: string
  type: "investor" | "applicant"
  avatar?: string
  createdAt: string
  profile: {
    company?: string
    location?: string
    bio?: string
    investmentFocus?: string[]
    fundingStage?: string
    industry?: string
    website?: string
    linkedIn?: string
    twitter?: string
  }
}

export interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string, type: "investor" | "applicant") => Promise<void>
  logout: () => void
}
