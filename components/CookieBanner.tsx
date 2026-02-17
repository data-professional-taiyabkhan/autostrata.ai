'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        // Only show if consent hasn't been given
        if (typeof window !== 'undefined') {
            const consent = localStorage.getItem('cookie-consent')
            if (!consent) setVisible(true)
        }
    }, [])

    const accept = () => {
        localStorage.setItem('cookie-consent', 'true')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div
            className="fixed bottom-0 inset-x-0 z-[60] p-4 animate-slideUp"
            role="dialog"
            aria-label="Cookie consent"
        >
            <div className="max-w-3xl mx-auto bg-[#0c1226] border border-white/15 rounded-2xl p-5 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-center gap-4">
                <p className="text-sm opacity-80 flex-1 leading-relaxed">
                    We use cookies to improve your experience. By clicking &ldquo;Accept&rdquo;,
                    you consent to the use of cookies.{' '}
                    <Link href="/privacy" className="text-brand underline hover:opacity-80">
                        Learn&nbsp;more
                    </Link>.
                </p>
                <div className="flex gap-3 flex-shrink-0">
                    <button
                        onClick={accept}
                        className="px-5 py-2 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                        Accept
                    </button>
                    <Link
                        href="/privacy"
                        className="px-5 py-2 rounded-lg border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors"
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    )
}
