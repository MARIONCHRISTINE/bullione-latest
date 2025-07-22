"use client"

import type React from "react"

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">Last updated: January 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Bullione ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our
              investment platform and services. By accessing or using our platform, you agree to be bound by these
              Terms.
            </p>
            <p className="text-gray-700">
              Bullione is a financial technology platform that connects investors with investment opportunities across
              Africa. We facilitate investment transactions but do not provide investment advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>"Platform"</strong> refers to the Bullione website, mobile application, and related services
              </li>
              <li>
                <strong>"User"</strong> refers to any individual or entity using our Platform
              </li>
              <li>
                <strong>"Investor"</strong> refers to users seeking investment opportunities
              </li>
              <li>
                <strong>"Applicant"</strong> refers to users seeking funding for their ventures
              </li>
              <li>
                <strong>"Investment Opportunity"</strong> refers to funding requests listed on our Platform
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility and Account Registration</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Eligibility Requirements</h3>
            <p className="text-gray-700 mb-4">To use our Platform, you must:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Be at least 18 years old</li>
              <li>Have the legal capacity to enter into binding agreements</li>
              <li>Not be prohibited from using our services under applicable laws</li>
              <li>Provide accurate and complete information during registration</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Security</h3>
            <p className="text-gray-700">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              that occur under your account. You must notify us immediately of any unauthorized use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Platform Services</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 For Investors</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Access to vetted investment opportunities</li>
              <li>Due diligence reports and documentation</li>
              <li>Portfolio management tools</li>
              <li>Investment tracking and reporting</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 For Applicants</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Application submission and management</li>
              <li>Access to investor network</li>
              <li>Funding process facilitation</li>
              <li>Business development support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Investment Risks and Disclaimers</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-yellow-800 font-semibold">Important Risk Warning</p>
              <p className="text-yellow-700">
                All investments carry risk. Past performance does not guarantee future results. You may lose some or all
                of your invested capital.
              </p>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Investment Risks</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Market volatility and economic conditions</li>
              <li>Currency exchange rate fluctuations</li>
              <li>Political and regulatory changes</li>
              <li>Company-specific risks and business failures</li>
              <li>Liquidity constraints</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 No Investment Advice</h3>
            <p className="text-gray-700">
              Bullione does not provide investment advice. All information on our Platform is for informational purposes
              only. You should consult with qualified financial advisors before making investment decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Fees and Charges</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Platform Fees</h3>
            <p className="text-gray-700 mb-4">Our fee structure includes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Transaction fees for successful investments</li>
              <li>Platform maintenance fees</li>
              <li>Due diligence and verification fees</li>
              <li>Payment processing fees</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Fee Changes</h3>
            <p className="text-gray-700">
              We reserve the right to modify our fee structure with 30 days' notice to users. Continued use of the
              Platform constitutes acceptance of new fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User Responsibilities and Conduct</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Prohibited Activities</h3>
            <p className="text-gray-700 mb-4">Users must not:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide false or misleading information</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Manipulate or attempt to manipulate investment processes</li>
              <li>Violate intellectual property rights</li>
              <li>Interfere with Platform operations</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Compliance Requirements</h3>
            <p className="text-gray-700">
              Users must comply with all applicable laws and regulations, including anti-money laundering (AML) and
              know-your-customer (KYC) requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Due Diligence and Verification</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Our Due Diligence Process</h3>
            <p className="text-gray-700 mb-4">
              We conduct reasonable due diligence on investment opportunities, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Financial statement review</li>
              <li>Management team assessment</li>
              <li>Market analysis</li>
              <li>Legal and regulatory compliance checks</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Limitations</h3>
            <p className="text-gray-700">
              While we strive for accuracy, our due diligence does not guarantee investment success or eliminate all
              risks. Investors should conduct their own additional research.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Data Collection</h3>
            <p className="text-gray-700 mb-4">
              We collect and process personal data in accordance with our Privacy Policy and applicable data protection
              laws, including GDPR where applicable.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Data Security</h3>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.1 Platform Content</h3>
            <p className="text-gray-700 mb-4">
              All content on our Platform, including text, graphics, logos, and software, is owned by Bullione or our
              licensors and is protected by intellectual property laws.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.2 User Content</h3>
            <p className="text-gray-700">
              By submitting content to our Platform, you grant us a non-exclusive, worldwide, royalty-free license to
              use, modify, and display such content for Platform operations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <p className="text-red-800 font-semibold">Important Legal Notice</p>
              <p className="text-red-700">
                Our liability is limited as described below. Please read this section carefully.
              </p>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.1 Disclaimer of Warranties</h3>
            <p className="text-gray-700 mb-4">
              Our Platform is provided "as is" without warranties of any kind, either express or implied, including but
              not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.2 Limitation of Damages</h3>
            <p className="text-gray-700">
              To the maximum extent permitted by law, Bullione shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not limited to loss of profits, data, or
              business opportunities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless Bullione, its officers, directors, employees, and agents
              from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way
              connected with your use of our Platform or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Termination</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">13.1 Termination by You</h3>
            <p className="text-gray-700 mb-4">
              You may terminate your account at any time by contacting our support team. Termination does not affect
              existing investment commitments.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">13.2 Termination by Us</h3>
            <p className="text-gray-700">
              We may suspend or terminate your account immediately if you violate these Terms or engage in prohibited
              activities. We may also terminate accounts with reasonable notice for business reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Dispute Resolution</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">14.1 Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of Nigeria, without regard to conflict of law principles.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">14.2 Arbitration</h3>
            <p className="text-gray-700">
              Any disputes arising from these Terms or your use of our Platform shall be resolved through binding
              arbitration in Lagos, Nigeria, in accordance with the Arbitration and Conciliation Act.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Regulatory Compliance</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.1 Securities Regulations</h3>
            <p className="text-gray-700 mb-4">
              Investment opportunities on our Platform may be subject to securities regulations in various
              jurisdictions. Users are responsible for ensuring compliance with applicable securities laws.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.2 Tax Obligations</h3>
            <p className="text-gray-700">
              Users are solely responsible for determining and fulfilling their tax obligations related to investments
              made through our Platform. We recommend consulting with tax professionals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may modify these Terms at any time by posting updated Terms on our Platform. Material changes will be
              communicated to users via email or Platform notifications at least 30 days before taking effect.
            </p>
            <p className="text-gray-700">
              Continued use of our Platform after changes take effect constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms or our services, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@bullione.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +234 (0) 123 456 7890
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Bullione Limited, Lagos, Nigeria
              </p>
              <p className="text-gray-700">
                <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM WAT
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-500 text-center">
              By using the Bullione Platform, you acknowledge that you have read, understood, and agree to be bound by
              these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage
