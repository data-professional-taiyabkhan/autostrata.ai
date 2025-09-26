import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import StaggeredGrid from "@/components/StaggeredGrid";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedGraph from "@/components/AnimatedGraph";

export default function HomePage(){
  return (
    <div id="main">
      <AnimatedSection>
        <div className="container grid md:grid-cols-2 gap-8 items-center py-16">
          <AnimatedText direction="left" delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-reveal">
              <span className="stagger-1">AI‑powered solutions,</span><br />
              <span className="stagger-2">built fast & affordable</span>
            </h1>
            <p className="mt-3 opacity-80">We deliver <b>intelligent AI agents</b>, <b>business automation</b>, and <b>enterprise integration</b> without offshore outsourcing — from startups to enterprise.</p>
            <div className="mt-5 flex gap-3">
              <a className="px-4 py-2 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10 hover-lift hover-glow" href="/contact">Start a project</a>
              <a className="px-4 py-2 rounded-lg border border-white/20 hover-lift" href="/services">Explore services</a>
            </div>
            <StaggeredGrid className="flex flex-wrap gap-2 mt-4 text-sm opacity-90" staggerDelay={0.1}>
              {['AI Agents', 'RAG Systems', 'Process Automation', 'Document Processing', 'Enterprise Integration'].map((tag, index) => (
                <li key={tag} className="border border-white/10 rounded-full px-2 py-1 hover-glow">{tag}</li>
              ))}
            </StaggeredGrid>
          </AnimatedText>
          <AnimatedText direction="right" delay={0.3}>
            <ParallaxSection speed={0.3}>
              <div className="relative rounded-2xl border border-white/10 shadow-glow overflow-hidden glow-card">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(91,188,255,.18),transparent_70%)]" />
                <div className="p-6 relative z-10">
                  <h3 className="font-bold mb-2">AutoStrata Engine</h3>
                  <p className="opacity-80">Our orchestration layer combines AI agents, tool use, and clean engineering to deliver real outcomes quickly.</p>
                </div>
                <div className="h-40 md:h-56 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[length:22px_22px]" />
              </div>
            </ParallaxSection>
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.2}>
          <h2 className="text-3xl font-bold mb-8">What we do</h2>
        </AnimatedText>
        <div className="grid md:grid-cols-3 gap-6">
          <StaggeredGrid className="md:col-span-2 grid md:grid-cols-2 gap-6" staggerDelay={0.2}>
            <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
              <h3 className="font-bold mb-3 text-lg">AI Agent Solutions</h3>
              <p className="opacity-80">Custom AI agents, chatbots, RAG systems, and multi-agent workflows for intelligent automation.</p>
            </article>
            <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
              <h3 className="font-bold mb-3 text-lg">AI Automation Solutions</h3>
              <p className="opacity-80">Business process automation, document processing, and enterprise tool integration.</p>
            </article>
          </StaggeredGrid>
          <AnimatedText direction="left" delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card h-full">
              <h3 className="font-bold mb-4 text-lg">Performance Impact</h3>
              <p className="opacity-80 mb-4 text-sm">See how our solutions drive measurable growth</p>
              <AnimatedGraph className="h-32" delay={0.6} />
            </div>
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.3}>
          <h2 className="text-3xl font-bold mb-8">Selected work</h2>
        </AnimatedText>
        <div className="grid md:grid-cols-5 gap-6">
          <StaggeredGrid className="md:col-span-4 grid md:grid-cols-4 gap-6" staggerDelay={0.15}>
            {['Virtual Receptionist','Mummy Help (Mobile)','AI Diet Tracker','Visa‑Sponsor Analytics'].map((t)=>(
              <article key={t} className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
                <h3 className="font-bold mb-3 text-lg">{t}</h3>
                <p className="opacity-80">Outcome‑driven build. Ask us for a walkthrough demo.</p>
              </article>
            ))}
          </StaggeredGrid>
          <AnimatedText direction="right" delay={0.5}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card h-full">
              <h3 className="font-bold mb-4 text-lg">Success Rate</h3>
              <p className="opacity-80 mb-4 text-sm">Project completion metrics</p>
              <AnimatedGraph className="h-32" delay={0.7} />
            </div>
          </AnimatedText>
        </div>
      </AnimatedSection>

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
  )
}
