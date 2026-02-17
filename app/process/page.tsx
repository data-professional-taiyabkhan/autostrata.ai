import { Metadata } from 'next';
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import StaggeredGrid from "@/components/StaggeredGrid";

export const metadata: Metadata = {
  title: 'Our Process - 4-Step AI Development Methodology',
  description: 'Learn about AutoStrata\'s proven 4-step process: Discover, Prototype, Launch, and Scale. From initial discovery to scalable deployment with measurable outcomes.',
  alternates: {
    canonical: '/process'
  }
};

export default function ProcessPage(){
  const processSteps = [
    {
      step: 1,
      title: 'Discover',
      description: 'Define success metrics, risks, and constraints → 1-page scope + timeline.',
      outcome: 'Clear project roadmap with defined deliverables and timeline'
    },
    {
      step: 2,
      title: 'Prototype',
      description: 'Thin-slice or clickable demo; test with 3–5 users.',
      outcome: 'Validated concept with user feedback and proof of concept'
    },
    {
      step: 3,
      title: 'Launch',
      description: 'Harden, monitor, runbooks, fallback paths.',
      outcome: 'Production-ready system with monitoring and support procedures'
    },
    {
      step: 4,
      title: 'Scale',
      description: 'Cost optimisation, analytics, 90-day roadmap.',
      outcome: 'Optimized system with growth strategy and performance insights'
    }
  ];

  return (
    <main id="main">
      <AnimatedSection>
        <AnimatedText direction="up" delay={0.1}>
          <h1 className="text-4xl font-extrabold mb-4">How we work</h1>
          <p className="opacity-80 text-lg max-w-2xl">
            Our proven 4-step process ensures your project delivers real value, 
            from initial discovery to scalable deployment.
          </p>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection>
        <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.2}>
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
              <span className="absolute -top-3 -left-3 w-8 h-8 grid place-items-center font-bold text-[#06121f] rounded-full bg-gradient-to-br from-brand to-[#3fa2ff] shadow-glow text-sm">
                {step.step}
              </span>
              <h3 className="font-bold mb-3 text-lg text-brand">{step.title}</h3>
              <p className="opacity-80 mb-4 leading-relaxed">{step.description}</p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-sm font-medium text-brand">Outcome:</p>
                <p className="text-sm opacity-80">{step.outcome}</p>
              </div>
            </div>
          ))}
        </StaggeredGrid>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.3}>
          <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glow hover-lift glow-card">
            <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
            <p className="opacity-80 mb-6">
              Let's begin with a discovery call to understand your goals and 
              define the best path forward for your AI solution.
            </p>
            <a 
              href="/contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10 hover-lift hover-glow"
            >
              Start with Discovery
            </a>
          </div>
        </AnimatedText>
      </AnimatedSection>
    </main>
  )
}
