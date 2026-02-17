import { Metadata } from 'next';
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Contact AutoStrata - Get Started with AI Solutions',
  description: 'Ready to build AI-powered solutions? Contact AutoStrata for custom AI agents, automation, and enterprise integrations. UK-based team with international clients.',
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactPage(){
  return (
    <main id="main">
      <AnimatedSection>
        <h1 className="text-4xl font-extrabold">Let’s talk</h1>
        <p className="opacity-80">Tell us your goals — we’ll get back to you quickly.</p>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-4">
          <ContactForm />
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow">
            <h2 className="font-bold mb-2">Contact details</h2>
            <ul className="space-y-1 opacity-90">
              <li>✉️ <a className="underline" href="mailto:contact@autostrata.ai">contact@autostrata.ai</a></li>
              <li>📍 Egham, United Kingdom</li>
              <li>🔗 https://autostrata.ai</li>
              <li className="flex items-center gap-2">
                <Image 
                  src="/instagram.png" 
                  alt="Instagram" 
                  width={20} 
                  height={20} 
                  className="w-5 h-5"
                  loading="lazy"
                />
                <a className="underline" href="https://www.instagram.com/autostarta.ai?igsh=dDgwdG9jeXUxbGtr" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                  src="/linkedin.png" 
                  alt="LinkedIn" 
                  width={20} 
                  height={20} 
                  className="w-5 h-5"
                  loading="lazy"
                />
                <a className="underline" href="https://www.linkedin.com/company/108903270/admin/dashboard/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <Testimonials />
    </main>
  )
}
