const API_BASE_URL = "http://localhost/bullione-latest/bullione-backend/api"

export interface Application {
  id: string
  company_name: string
  funding_amount: number
  status: "pending" | "under_review" | "approved" | "rejected"
  submitted_date: string
  last_update: string
  description?: string
  business_plan_url?: string
  financial_projections_url?: string
  pitch_deck_url?: string
}

export interface ApplicationStats {
  total_applications: number
  pending: number
  under_review: number
  approved: number
  rejected: number
  total_funding_requested: number
  total_funding_approved: number
}

export interface Meeting {
  id: number
  title: string
  meeting_date: string
  meeting_time: string
  type: "video_call" | "in_person" | "phone_call"
  investor_name: string
  meeting_link?: string
  status: "scheduled" | "completed" | "cancelled"
}

export interface Notification {
  id: number
  message: string
  type: "success" | "info" | "warning" | "error"
  created_at: string
  is_read: boolean
  application_id?: string
}

class ApplicantApiService {
  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    // Use a default test user ID for now
    let userId = "1"

    // Try to get user from localStorage if available
    try {
      const userString = localStorage.getItem("user")
      console.log(`📦 Raw localStorage user:`, userString)

      if (userString && userString !== "{}" && userString !== "null") {
        const user = JSON.parse(userString)
        if (user && user.id) {
          userId = user.id.toString()
        }
      }
    } catch (error) {
      console.warn("⚠️ Could not parse user from localStorage, using default ID:", error)
    }

    console.log(`🌐 Making API request to: ${API_BASE_URL}/${endpoint}`)
    console.log(`🔑 Using user ID: ${userId}`)

    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userId}`, // ← Fixed: Capital A
          ...options.headers,
        },
      })

      console.log(`📡 Response status: ${response.status}`)
      console.log(`📡 Response ok: ${response.ok}`)

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`❌ API Error: ${response.status} - ${errorText}`)
        throw new Error(`API Error: ${response.status} - ${errorText}`)
      }

      const data = await response.json()
      console.log(`✅ Response data:`, data)
      return data
    } catch (fetchError) {
      console.error(`❌ Fetch Error:`, fetchError)
      throw fetchError
    }
  }

  async getApplicationStats(): Promise<ApplicationStats> {
    return this.makeRequest("applicant/stats.php")
  }

  async getApplications(): Promise<Application[]> {
    return this.makeRequest("applicant/applications.php")
  }

  async getApplication(id: string): Promise<Application> {
    return this.makeRequest(`applicant/applications.php?id=${id}`)
  }

  async createApplication(applicationData: Partial<Application>): Promise<Application> {
    return this.makeRequest("applicant/applications.php", {
      method: "POST",
      body: JSON.stringify(applicationData),
    })
  }

  async updateApplication(id: string, applicationData: Partial<Application>): Promise<Application> {
    return this.makeRequest("applicant/applications.php", {
      method: "PUT",
      body: JSON.stringify({ ...applicationData, id }),
    })
  }

  async getMeetings(): Promise<Meeting[]> {
    return this.makeRequest("applicant/meetings.php")
  }

  async getNotifications(): Promise<Notification[]> {
    return this.makeRequest("applicant/notifications.php")
  }

  async markNotificationAsRead(id: number): Promise<void> {
    return this.makeRequest("applicant/notifications.php", {
      method: "POST",
      body: JSON.stringify({ id, action: "mark_read" }),
    })
  }

  async uploadDocument(applicationId: string, file: File, documentType: string): Promise<{ url: string }> {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("document_type", documentType)
    formData.append("application_id", applicationId)

    let userId = "1"
    try {
      const userString = localStorage.getItem("user")
      if (userString && userString !== "{}" && userString !== "null") {
        const user = JSON.parse(userString)
        if (user && user.id) {
          userId = user.id.toString()
        }
      }
    } catch (error) {
      console.warn("Error getting user for upload:", error)
    }

    const response = await fetch(`${API_BASE_URL}/applicant/upload-document.php`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userId}`, // ← Fixed: Capital A
      },
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Upload Error: ${response.status}`)
    }

    return response.json()
  }
}

export const applicantApi = new ApplicantApiService()
