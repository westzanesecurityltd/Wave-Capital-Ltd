'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Force the header to be dark mode while we have an image behind it */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])
  return (
    <>
      {/* Load Google reCAPTCHA */}
      <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
    </>
  )
}

export default PageClient
