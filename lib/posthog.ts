import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: 'https://eu.i.posthog.com', // EU server (better for GDPR, you're in UK)
      capture_pageview: true,
      capture_pageleave: true,
    })
  }
}