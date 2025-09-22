'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ProcessDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false)
    }, 150) // Small delay to prevent accidental closing
    setTimeoutId(id)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])

  const processSteps = [
    {
      step: 1,
      title: 'Discover',
      description: 'We execute with clear scopes, milestones, and a definition of done.'
    },
    {
      step: 2,
      title: 'Prototype',
      description: 'We execute with clear scopes, milestones, and a definition of done.'
    },
    {
      step: 3,
      title: 'Launch',
      description: 'We execute with clear scopes, milestones, and a definition of done.'
    },
    {
      step: 4,
      title: 'Scale',
      description: 'We execute with clear scopes, milestones, and a definition of done.'
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
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[600px] max-w-[95vw] bg-[#0c1226] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-6 text-white">How we work</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow hover:bg-white/10 transition-colors">
                  <span className="absolute -top-3 -left-3 w-7 h-7 grid place-items-center font-bold text-[#06121f] rounded-full bg-gradient-to-br from-brand to-[#3fa2ff] shadow-glow text-sm">
                    {step.step}
                  </span>
                  <h4 className="font-bold mb-2 text-brand">{step.title}</h4>
                  <p className="text-sm opacity-80 leading-relaxed">{step.description}</p>
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
