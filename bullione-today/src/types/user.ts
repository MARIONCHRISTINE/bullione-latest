// User type for both investor and applicant
export type User = {
  id: string;
  email: string;
  name: string;
  type: "investor" | "applicant";
  avatar: string;
  createdAt: Date | string;
  profile: InvestorProfile | ApplicantProfile;
};

export type InvestorProfile = {
  company: string;
  location: string;
  bio: string;
  investmentPreferences: string[];
  totalInvestments: number;
  portfolioValue: number;
  riskTolerance: "low" | "medium" | "high";
};

export type ApplicantProfile = {
  company: string;
  location: string;
  bio: string;
  businessType: string;
  fundingGoal: number;
  currentRevenue: number;
  employees: number;
  industry: string;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    name: string,
    type: "investor" | "applicant"
  ) => Promise<void>;
  logout: () => void;
};
