"use client"

import React, { useEffect } from 'react'

const SignupForm: React.FC = () => {
  useEffect(() => {
    // Load Zoho form script
    const script = document.createElement('script')
    script.src = 'https://forms.zohopublic.com/helloeugen1/form/ProductEnquiry/formperma/qXhfA-RhMCHfLAn7FpHUICMoUKo0vUmpqHj5eOJO8i0?mode=embed'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full max-w-md mx-auto p-2">
      <iframe
        src="https://forms.zohopublic.com/helloeugen1/form/ProductEnquiry2/formperma/nB1ikwbLmRwUXxZTE-uyPor5Be5BG--rWmwWaQO-WG4"
        width="100%"
        height="630px"
        frameBorder="0"
        allowFullScreen
        style={{ border: 'none', minHeight: '600px' }}
      />
    </div>
  )
}

export default SignupForm 