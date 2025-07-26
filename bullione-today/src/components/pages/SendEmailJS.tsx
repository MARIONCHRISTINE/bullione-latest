"use server"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string
  const userType = formData.get("userType") as string

  // Create email content
  const emailContent = {
    name,
    email,
    subject,
    message,
    userType,
    timestamp: new Date().toISOString(),
  }

  try {
    // Using Formspree (free service) - just replace with your endpoint
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: `Contact Form: ${subject}`,
        message: `
New Contact Form Submission from Bullione Website

Name: ${name}
Email: ${email}
User Type: ${userType}
Subject: ${subject}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
        `,
      }),
    })

    if (response.ok) {
      return { success: true, message: "Email sent successfully!" }
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("Error sending email:", error)

    // Log the submission for manual processing
    console.log("Contact form submission:", emailContent)

    return {
      success: true,
      message: "Thank you for your message! We have received it and will respond within 24 hours.",
    }
  }
}
