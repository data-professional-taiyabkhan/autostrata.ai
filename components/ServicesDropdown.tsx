'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ServicesDropdown() {
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


  const serviceCards = [
    {
      title: 'Custom AI Agent Development',
      description: 'Tailored agents for customer support, sales, research, and knowledge management.'
    },
    {
      title: 'Conversational AI & Chatbots',
      description: 'Smart chat assistants for websites, apps, and customer engagement.'
    },
    {
      title: 'RAG Agents',
      description: 'AI that connects to your data for accurate, context-aware answers.'
    },
    {
      title: 'Multi-Agent Systems',
      description: 'Collaborative agents that handle complex workflows.'
    },
    {
      title: 'Business Process Automation (BPA)',
      description: 'Automating repetitive back-office tasks for efficiency.'
    },
    {
      title: 'Web, Mobile & Backend Development',
      description: 'Full-stack development solutions for modern applications.'
    }
  ]

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="opacity-90 hover:opacity-100 flex items-center gap-1">
        Services
        <svg className="w-4 h-4 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[900px] max-w-[95vw] bg-[#0c1226] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden">
          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Side - Efficiency Graph */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-white">YOUR OPERATIONAL EFFICIENCY (%)</h3>
                <div className="relative h-32 mb-4">
                  {/* Graph Background */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 20, 40, 60, 80, 100].map((value) => (
                      <div key={value} className="flex items-center text-xs opacity-50">
                        <div className="w-8 text-right">{value}%</div>
                        <div className="flex-1 h-px bg-white/20 ml-2"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Time axis */}
                  <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs opacity-50">
                    {[0, 1, 2, 3, 4, 5].map((month) => (
                      <span key={month}>{month}</span>
                    ))}
                  </div>
                  
                  {/* Current efficiency line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120">
                    <polyline
                      points="20,100 60,90 100,80 140,70 180,60"
                      fill="none"
                      stroke="#3fa2ff"
                      strokeWidth="2"
                      opacity="0.7"
                    />
                    <text x="10" y="50" className="text-xs fill-white opacity-70">Current</text>
                  </svg>
                  
                  {/* With AutoStrata efficiency line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120">
                    <polyline
                      points="20,100 60,60 100,30 140,15 180,5"
                      fill="none"
                      stroke="#5bbcff"
                      strokeWidth="3"
                    />
                    <text x="10" y="20" className="text-xs fill-white opacity-70">With AutoStrata</text>
                  </svg>
                </div>
                <p className="text-xs opacity-80">Time (Months)</p>
              </div>

              {/* Right Side - Service Cards & CTA */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
                
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {serviceCards.map((service, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer">
                      <h4 className="text-sm font-semibold text-brand mb-1">{service.title}</h4>
                      <p className="text-xs opacity-80 leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <Link href="/services" className="text-sm text-brand hover:opacity-80 transition-opacity flex items-center">
                    View All Services →
                  </Link>
                </div>

                <div className="bg-gradient-to-r from-brand/20 to-[#3fa2ff]/20 border border-brand/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Ready to get started?</h4>
                  <p className="text-sm opacity-90 mb-3">Transform your business with AI-powered automation</p>
                  <Link href="/contact" className="block">
                    <button className="bg-gradient-to-r from-brand to-[#3fa2ff] text-[#06121f] font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity w-full">
                      Start a Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
