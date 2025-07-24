import type React from "react"

const BackgroundVideo: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Element */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
      >
        <source src="/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Unlock Africa's
          <span className="text-yellow-400"> Investment Potential</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Connect global capital with vetted African opportunities. Bullione bridges the gap between investors and
          high-growth ventures across the continent.
        </p>
      </div>
    </div>
  )
}

export default BackgroundVideo
