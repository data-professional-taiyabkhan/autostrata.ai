import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import StaggeredGrid from "@/components/StaggeredGrid";
import ParallaxSection from "@/components/ParallaxSection";
import Testimonials from "@/components/Testimonials";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AutoStrata Ltd",
  "url": "https://autostrata.ai",
  "areaServed": "GB",
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "contact@autostrata.ai"
  }]
};

export default function HomePage(){
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div id="main">
      <AnimatedSection>
        <div className="container grid md:grid-cols-2 gap-8 items-center py-16">
          <AnimatedText direction="left" delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-reveal">
              <span className="stagger-1">AI‑powered solutions,</span><br />
              <span className="stagger-2">built fast & affordable</span>
            </h1>
            <p className="mt-3 opacity-80">We deliver <b>intelligent AI agents</b>, <b>business automation</b>, and <b>enterprise integration</b> without offshore outsourcing — from startups to enterprise.</p>
            <div className="mt-5">
              <a className="px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10 hover-lift hover-glow" href="/services">Explore services</a>
            </div>
            <StaggeredGrid className="flex flex-wrap gap-4 mt-8 text-sm opacity-90" staggerDelay={0.1}>
              {['AI Agents', 'RAG Systems', 'Process Automation', 'Document Processing', 'Enterprise Integration'].map((tag, index) => (
                <div key={tag} className="border border-white/10 rounded-full px-4 py-2 text-base hover-glow">{tag}</div>
              ))}
            </StaggeredGrid>
          </AnimatedText>
          <AnimatedText direction="right" delay={0.3}>
            <ParallaxSection speed={0.3}>
              <div className="relative rounded-2xl border border-white/10 shadow-glow overflow-hidden glow-card">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(91,188,255,.18),transparent_70%)]" />
                <div className="p-6 relative z-10">
                  <h3 className="font-bold mb-2">AutoStrata Engine</h3>
                  <p className="opacity-80 mb-4">Our orchestration layer combines AI agents, tool use, and clean engineering to deliver real outcomes quickly.</p>
                  <div className="h-32 md:h-40 rounded-lg overflow-hidden">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      preload="metadata"
                    >
                      <source src="/graph.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </ParallaxSection>
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.2}>
          <h2 className="text-3xl font-bold mb-8">What we do</h2>
        </AnimatedText>
        <StaggeredGrid className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">AI Agent Solutions</h3>
            <p className="opacity-80">Custom AI agents, chatbots, RAG systems, and multi-agent workflows for intelligent automation.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">AI Automation Solutions</h3>
            <p className="opacity-80">Business process automation, document processing, and enterprise tool integration.</p>
          </article>
        </StaggeredGrid>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.3}>
          <h2 className="text-3xl font-bold mb-8">Selected work</h2>
        </AnimatedText>
        <StaggeredGrid className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <div className="mb-3">
              <span className="text-xs bg-brand/20 text-brand px-2 py-1 rounded-full">Ready-made</span>
            </div>
            <h3 className="font-bold mb-3 text-lg">Mummy Help</h3>
            <p className="opacity-80 mb-4">Voice-activated safety app for families with instant help and real-time location tracking.</p>
            <a href="/products/mummy-help" className="text-brand hover:opacity-80 transition-opacity text-sm font-medium">
              Learn more →
            </a>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <div className="mb-3">
              <span className="text-xs bg-brand/20 text-brand px-2 py-1 rounded-full">Ready-made</span>
            </div>
            <h3 className="font-bold mb-3 text-lg">AI Diet Tracker</h3>
            <p className="opacity-80 mb-4">Achieve your physique goals with AI-powered nutrition tracking and personalized coaching.</p>
            <a href="/products/ai-diet-tracker" className="text-brand hover:opacity-80 transition-opacity text-sm font-medium">
              Learn more →
            </a>
          </article>
        </StaggeredGrid>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.3}>
          <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
        </AnimatedText>
        <StaggeredGrid className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Sartorial London — Sharetribe marketplace</h3>
            <p className="opacity-80 mb-4">Landing page revamp and custom "Featured Fits" + workflow integrations for a smoother browse-to-checkout.</p>
            <a href="/contact" className="text-brand hover:opacity-80 transition-opacity text-sm font-medium">
              Read case study →
            </a>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Empire Exchange — web app for a new business</h3>
            <p className="opacity-80 mb-4">A fast, clean web solution to launch operations quickly, built for speed, clarity, and easy iteration.</p>
            <a href="/contact" className="text-brand hover:opacity-80 transition-opacity text-sm font-medium">
              Read case study →
            </a>
          </article>
        </StaggeredGrid>
      </AnimatedSection>

      <Testimonials />

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.4}>
          <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glow hover-lift glow-card">
            <h2 className="text-3xl font-bold mb-4">Ready to build?</h2>
            <p className="opacity-80 mb-6">Tell us your goals — we'll propose the fastest path to value.</p>
            <a className="px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10 hover-lift hover-glow" href="/contact">
              Talk to AutoStrata
            </a>
          </div>
        </AnimatedText>
      </AnimatedSection>
      </div>
    </>
  )
}
