'use client'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect, useState } from 'react'

export default function PostHogProvider({ children }: { children?: React.ReactNode }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
        capture_pageview: true,
        capture_pageleave: true,
        loaded: () => setReady(true),
      })
    }
  }, [])

  if (children) {
    return <PHProvider client={posthog}>{children}</PHProvider>
  }
  return null
}
