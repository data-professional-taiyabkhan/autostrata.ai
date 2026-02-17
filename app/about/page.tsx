import { Metadata } from 'next';
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import StaggeredGrid from "@/components/StaggeredGrid";

export const metadata: Metadata = {
  title: 'About AutoStrata - AI-Powered IT Solutions',
  description: 'Learn about AutoStrata\'s AI-first approach to enterprise technology. We combine agentic AI, automation, and clean engineering to deliver measurable outcomes quickly.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage(){
  return (
    <div id="main">
      <AnimatedSection>
        <AnimatedText direction="up" delay={0.1}>
          <h1 className="text-4xl font-extrabold">About AutoStrata</h1>
          <p className="mt-3 opacity-80 max-w-3xl">AutoStrata exists to make enterprise‑grade technology accessible to founders and SMBs. We combine agentic AI, automation, and clean engineering to deliver measurable outcomes quickly.</p>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection>
        <StaggeredGrid className="grid md:grid-cols-3 gap-6" staggerDelay={0.2}>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">AI‑first, not offshore</h3>
            <p className="opacity-80">We automate repetitive work so your budget goes into results, not headcount.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Security by default</h3>
            <p className="opacity-80">Least privilege, encrypted secrets, and GDPR‑aware data handling.</p>
          </article>
          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <h3 className="font-bold mb-3 text-lg">Outcomes over output</h3>
            <p className="opacity-80">Sprint scopes with a clear definition of done and measurable impact.</p>
          </article>
        </StaggeredGrid>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.4}>
          <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glow hover-lift glow-card">
            <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
            <p className="opacity-80 mb-6">Let's discuss how we can help accelerate your business with AI and automation.</p>
            <a className="px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10 hover-lift hover-glow" href="/contact">
              Get Started
            </a>
          </div>
        </AnimatedText>
      </AnimatedSection>
    </div>
  )
}
