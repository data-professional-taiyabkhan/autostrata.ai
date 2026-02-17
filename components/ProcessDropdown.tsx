'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ProcessDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState<any>(null)

  const handleMouseEnter = () => {
    if (timeoutId) { clearTimeout(timeoutId); setTimeoutId(null) }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsOpen(false), 150)
    setTimeoutId(id)
  }

  useEffect(() => () => { if (timeoutId) clearTimeout(timeoutId) }, [timeoutId])

  const processSteps = [
    {
      step: 1,
      title: 'Discover',
      description: 'We define success metrics, map risks, and agree on scope — delivered as a 1-page brief with timeline and budget.',
      deliverables: 'Scope doc · Timeline · Budget'
    },
    {
      step: 2,
      title: 'Prototype',
      description: 'We build a thin-slice working demo and test it with 3–5 real users to validate the approach before committing to full build.',
      deliverables: 'Working demo · User feedback · Refined scope'
    },
    {
      step: 3,
      title: 'Launch',
      description: 'We harden the system, set up monitoring and alerting, write runbooks, and deploy to production with fallback paths.',
      deliverables: 'Production deploy · Monitoring · Runbooks'
    },
    {
      step: 4,
      title: 'Scale',
      description: 'We optimise for cost and performance, add analytics dashboards, and deliver a 90-day roadmap for next steps.',
      deliverables: 'Optimisation · Analytics · 90-day roadmap'
    }
  ]

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="opacity-90 hover:opacity-100 flex items-center gap-1">
        Process
        <svg className="w-4 h-4 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[600px] max-w-[95vw] bg-[#0c1226] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden transition-all duration-300 ease-out ${isOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
            }`}
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-6 text-white">How We Work</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow hover:bg-white/10 hover:scale-105 transition-all duration-200"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <span className="absolute -top-3 -left-3 w-7 h-7 grid place-items-center font-bold text-[#06121f] rounded-full bg-gradient-to-br from-brand to-[#3fa2ff] shadow-glow text-sm">
                    {step.step}
                  </span>
                  <h4 className="font-bold mb-2 text-brand">{step.title}</h4>
                  <p className="text-sm opacity-80 leading-relaxed mb-2">{step.description}</p>
                  <p className="text-xs opacity-50">{step.deliverables}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link href="/process" className="text-sm text-brand hover:opacity-80 transition-opacity flex items-center">
                View Full Process →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
