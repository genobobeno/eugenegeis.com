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
    <div className="w-full min-h-[600px] overflow-hidden rounded-lg">
      <iframe
        src="https://forms.zohopublic.com/helloeugen1/form/ProductEnquiry/formperma/qXhfA-RhMCHfLAn7FpHUICMoUKo0vUmpqHj5eOJO8i0?mode=embed"
        style={{ width: '100%', height: '600px', border: 'none' }}
        title="Product Enquiry Form"
        allowFullScreen
      />
    </div>
  )
}

export default SignupForm 