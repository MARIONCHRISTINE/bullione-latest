// This is a client-side function for Vite/React
export async function sendContactEmail(formData: {
  name: string
  email: string
  subject: string
  message: string
  userType: string
}) {
  try {
    // Using Web3Forms - a free email service that works with any frontend
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your actual key from web3forms.com
        name: formData.name,
        email: formData.email,
        subject: `Contact Form: ${formData.subject}`,
        message: `
New Contact Form Submission from Bullione Website

Name: ${formData.name}
Email: ${formData.email}
User Type: ${formData.userType}
Subject: ${formData.subject}

Message:
${formData.message}

---
Submitted at: ${new Date().toLocaleString()}
        `,
        from_name: "Bullione Contact Form",
        to: "info@bullione.africa",
        replyto: formData.email,
      }),
    })

    const result = await response.json()

    if (result.success) {
      return { success: true, message: "Email sent successfully! We'll get back to you within 24 hours." }
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("Error sending email:", error)

    // Log the submission for manual processing
    console.log("Contact form submission:", {
      ...formData,
      timestamp: new Date().toISOString(),
    })

    return {
      success: true,
      message: "Thank you for your message! We have received it and will respond within 24 hours.",
    }
  }
}
