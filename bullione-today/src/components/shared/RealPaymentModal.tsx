"use client"
import type React from "react"
import { useState } from "react"
import { X, CreditCard, Smartphone, Globe, AlertCircle, CheckCircle } from "lucide-react"

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

const RealPaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, donationData, onPaymentSuccess }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState("")
  const [step, setStep] = useState<"method_selection" | "phone_input" | "processing" | "success">("method_selection")

  if (!isOpen) return null

  const paymentMethods = [
    {
      id: "mpesa",
      name: "M-Pesa",
      description: "Pay with M-Pesa mobile money",
      icon: Smartphone,
      color: "green",
      popular: true,
      countries: ["Kenya", "Tanzania", "Uganda"],
    },
    {
      id: "flutterwave",
      name: "Flutterwave",
      description: "Card payments across Africa",
      icon: CreditCard,
      color: "orange",
      popular: true,
      countries: ["Nigeria", "Ghana", "Kenya", "Uganda", "Rwanda"],
    },
    {
      id: "paystack",
      name: "Paystack",
      description: "Secure card payments",
      icon: CreditCard,
      color: "blue",
      popular: false,
      countries: ["Nigeria", "Ghana", "South Africa"],
    },
    {
      id: "stripe",
      name: "Stripe",
      description: "International card payments",
      icon: Globe,
      color: "purple",
      popular: false,
      countries: ["Global"],
    },
  ]

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId)
    setStep("phone_input")
  }

  const handlePhoneSubmit = async () => {
    if (!phoneNumber.trim()) {
      setError("Please enter your phone number")
      return
    }

    // Validate phone number format
    const cleanPhone = phoneNumber.replace(/\D/g, "")
    if (cleanPhone.length < 10) {
      setError("Please enter a valid phone number")
      return
    }

    setStep("processing")
    setIsProcessing(true)
    setError("")

    try {
      const response = await fetch("http://localhost/bullione-latest/bullione-backend/api/process-payment-real.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donation_id: donationData.donation_id,
          amount: donationData.amount,
          payment_method: selectedMethod,
          phone_number: phoneNumber,
        }),
      })

      const result = await response.json()

      if (result.success) {
        if (selectedMethod === "mpesa") {
          // For M-Pesa, show success immediately as STK push is sent
          setStep("success")
          setTimeout(() => {
            onPaymentSuccess(result)
            onClose()
          }, 5000)
        } else {
          // For other methods, redirect to payment gateway
          if (result.payment_link) {
            window.open(result.payment_link, "_blank")
          }
          setStep("success")
          setTimeout(() => {
            onPaymentSuccess(result)
            onClose()
          }, 3000)
        }
      } else {
        setError(result.error || "Payment failed. Please try again.")
        setStep("phone_input")
      }
    } catch (err: any) {
      setError(`Network error: ${err.message}`)
      setStep("phone_input")
    } finally {
      setIsProcessing(false)
    }
  }

  const renderMethodSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Payment Method</h3>
        <p className="text-gray-600">
          Donating ${donationData.amount} to {donationData.cause}
        </p>
      </div>

      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => handleMethodSelect(method.id)}
            className={`w-full p-4 border-2 rounded-xl text-left transition-all duration-200 hover:shadow-md ${
              method.color === "green"
                ? "border-green-200 hover:border-green-300 hover:bg-green-50"
                : method.color === "orange"
                  ? "border-orange-200 hover:border-orange-300 hover:bg-orange-50"
                  : method.color === "blue"
                    ? "border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                    : "border-purple-200 hover:border-purple-300 hover:bg-purple-50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    method.color === "green"
                      ? "bg-green-100"
                      : method.color === "orange"
                        ? "bg-orange-100"
                        : method.color === "blue"
                          ? "bg-blue-100"
                          : "bg-purple-100"
                  }`}
                >
                  <method.icon
                    className={`w-6 h-6 ${
                      method.color === "green"
                        ? "text-green-600"
                        : method.color === "orange"
                          ? "text-orange-600"
                          : method.color === "blue"
                            ? "text-blue-600"
                            : "text-purple-600"
                    }`}
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900">{method.name}</h4>
                    {method.popular && (
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{method.description}</p>
                  <p className="text-xs text-gray-500 mt-1">Available in: {method.countries.join(", ")}</p>
                </div>
              </div>
              <div className="text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )

  const renderPhoneInput = () => {
    const selectedMethodInfo = paymentMethods.find((m) => m.id === selectedMethod)
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div
            className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              selectedMethodInfo?.color === "green"
                ? "bg-green-100"
                : selectedMethodInfo?.color === "orange"
                  ? "bg-orange-100"
                  : selectedMethodInfo?.color === "blue"
                    ? "bg-blue-100"
                    : "bg-purple-100"
            }`}
          >
            {selectedMethodInfo && (
              <selectedMethodInfo.icon
                className={`w-8 h-8 ${
                  selectedMethodInfo.color === "green"
                    ? "text-green-600"
                    : selectedMethodInfo.color === "orange"
                      ? "text-orange-600"
                      : selectedMethodInfo.color === "blue"
                        ? "text-blue-600"
                        : "text-purple-600"
                }`}
              />
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Phone Number</h3>
          <p className="text-gray-600">
            {selectedMethod === "mpesa"
              ? "Enter your M-Pesa registered phone number"
              : "Enter your phone number for payment confirmation"}
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+254712345678"
            />
            <p className="text-xs text-gray-500 mt-1">
              {selectedMethod === "mpesa"
                ? "You will receive an STK push notification"
                : "You will receive payment instructions via SMS"}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setStep("method_selection")}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
          >
            Back
          </button>
          <button
            onClick={handlePhoneSubmit}
            disabled={isProcessing}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {isProcessing ? "Processing..." : "Continue"}
          </button>
        </div>
      </div>
    )
  }

  const renderProcessing = () => (
    <div className="space-y-6 text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
      <h3 className="text-xl font-semibold text-gray-900">Processing Payment...</h3>
      <p className="text-gray-600">
        {selectedMethod === "mpesa"
          ? "Please check your phone for the M-Pesa STK push notification and enter your PIN"
          : "Redirecting you to the payment gateway..."}
      </p>
      <div className="space-y-2 text-sm text-gray-500">
        <p>✓ Validating payment details</p>
        <p>✓ Initiating payment request</p>
        <p>⏳ Waiting for confirmation</p>
      </div>
    </div>
  )

  const renderSuccess = () => (
    <div className="space-y-6 text-center">
      <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
      <h3 className="text-xl font-semibold text-gray-900">Payment Initiated!</h3>
      <p className="text-gray-600">
        {selectedMethod === "mpesa"
          ? "Please complete the payment on your phone using your M-Pesa PIN"
          : "Your payment is being processed. You will receive a confirmation shortly."}
      </p>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-green-800 text-sm">
          Amount: ${donationData.amount} • Method: {paymentMethods.find((m) => m.id === selectedMethod)?.name}
        </p>
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

          {step === "method_selection" && renderMethodSelection()}
          {step === "phone_input" && renderPhoneInput()}
          {step === "processing" && renderProcessing()}
          {step === "success" && renderSuccess()}
        </div>
      </div>
    </div>
  )
}

export default RealPaymentModal
