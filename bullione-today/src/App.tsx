import type React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"
import ProtectedRoute from "./components/shared/ProtectedRoute"

// Pages
import HomePage from "./components/pages/HomePage"
import AboutPage from "./components/pages/AboutPage"
import ServicesPage from "./components/pages/ServicesPage"
import ContactPage from "./components/pages/ContactPage"
import DonatePage from "./components/pages/DonatePage"
import LoginPage from "./components/pages/LoginPage"
import RegisterPage from "./components/pages/RegisterPage"
import TermsPage from "./components/pages/TermsPage"

// Service Pages
import StartupInvestmentsPage from "./components/pages/services/StartupInvestmentsPage"
import MoneyMarketPage from "./components/pages/services/MoneyMarketPage"
import CryptocurrencyPage from "./components/pages/services/CryptocurrencyPage"
import RealEstatePage from "./components/pages/services/RealEstatePage"
import HospitalityPage from "./components/pages/services/HospitalityPage"
import ImpactInvestingPage from "./components/pages/services/ImpactInvestingPage"
import BusinessExpansionPage from "./components/pages/services/BusinessExpansionPage"
import FamilyOfficePage from "./components/pages/services/FamilyOfficePage"
import TradeableCompaniesPage from "./components/pages/services/TradeableCompaniesPage"

// Investor Pages
import InvestorDashboard from "./components/pages/investor/InvestorDashboard"
import InvestorOpportunities from "./components/pages/investor/InvestorOpportunities"
import InvestorPortfolio from "./components/pages/investor/InvestorPortfolio"
import InvestorProfile from "./components/pages/investor/InvestorProfile"

// Applicant Pages
import ApplicantDashboard from "./components/pages/applicant/ApplicantDashboard"
import ApplicantApplication from "./components/pages/applicant/ApplicantApplication"

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/terms" element={<TermsPage />} />

              {/* Service Routes */}
              <Route path="/services/startup-investments" element={<StartupInvestmentsPage />} />
              <Route path="/services/money-market" element={<MoneyMarketPage />} />
              <Route path="/services/cryptocurrency" element={<CryptocurrencyPage />} />
              <Route path="/services/real-estate" element={<RealEstatePage />} />
              <Route path="/services/hospitality" element={<HospitalityPage />} />
              <Route path="/services/impact-investing" element={<ImpactInvestingPage />} />
              <Route path="/services/business-expansion" element={<BusinessExpansionPage />} />
              <Route path="/services/family-office" element={<FamilyOfficePage />} />
              <Route path="/services/tradeable-companies" element={<TradeableCompaniesPage />} />

              {/* Protected Investor Routes */}
              <Route
                path="/investor/dashboard"
                element={
                  <ProtectedRoute requiredUserType="investor">
                    <InvestorDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/investor/opportunities"
                element={
                  <ProtectedRoute requiredUserType="investor">
                    <InvestorOpportunities />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/investor/portfolio"
                element={
                  <ProtectedRoute requiredUserType="investor">
                    <InvestorPortfolio />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/investor/profile"
                element={
                  <ProtectedRoute requiredUserType="investor">
                    <InvestorProfile />
                  </ProtectedRoute>
                }
              />

              {/* Protected Applicant Routes */}
              <Route
                path="/applicant/dashboard"
                element={
                  <ProtectedRoute requiredUserType="applicant">
                    <ApplicantDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/applicant/application"
                element={
                  <ProtectedRoute requiredUserType="applicant">
                    <ApplicantApplication />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
