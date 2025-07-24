"use client"

import type React from "react"
import { useAuth } from "../../contexts/AuthContext"

const HomePage: React.FC = () => {
  useAuth()

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* HTML Content in iframe - FIXED sizing */}
      <iframe
        src="/homepage.html"
        className="w-full h-full border-0"
        title="Bullione Homepage"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
        scrolling="yes"
        frameBorder="0"
      />
    </div>
  )
}

export default HomePage
