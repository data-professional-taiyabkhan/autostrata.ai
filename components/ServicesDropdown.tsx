'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState<number | null>(null)

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
        <div 
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[800px] max-w-[95vw] bg-[#0c1226] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden transition-all duration-300 ease-out ${
            isOpen 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}
        >
          <div className="p-4 md:p-8">
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {serviceCards.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:scale-105 transition-all duration-200 cursor-pointer"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'fadeInUp 0.4s ease-out forwards' : 'none'
                  }}
                >
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
      )}
    </div>
  )
}
