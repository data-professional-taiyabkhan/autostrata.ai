import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import StaggeredGrid from '@/components/StaggeredGrid';

export const metadata: Metadata = {
  title: 'Our Process — From Discovery to Scale',
  description: "AutoStrata's proven 4-step process: Discover, Prototype, Launch, and Scale. From initial discovery to scalable deployment with measurable outcomes.",
  alternates: { canonical: '/process' }
};

const processSteps = [
  {
    step: 1,
    title: 'Discover',
    duration: '1–2 days',
    description: 'We start with a focused discovery session to understand your goals, constraints, and success criteria. The output is a clear scope document with timeline, budget, and deliverables — no ambiguity.',
    deliverables: [
      'Stakeholder interviews',
      '1-page scope document',
      'Timeline and budget estimate',
      'Success metrics defined',
      'Risk assessment',
    ],
  },
  {
    step: 2,
    title: 'Prototype',
    duration: '1–2 weeks',
    description: 'We build a thin-slice working prototype — not wireframes, not mockups, but real working software. We test it with 3–5 real users to validate the approach before committing to full build.',
    deliverables: [
      'Working prototype or clickable demo',
      'User testing with 3–5 participants',
      'Feedback synthesis report',
      'Refined scope and priorities',
      'Technical architecture document',
    ],
  },
  {
    step: 3,
    title: 'Launch',
    duration: '2–4 weeks',
    description: 'We harden the system for production: error handling, monitoring, logging, and fallback paths. We write runbooks so your team can operate the system independently.',
    deliverables: [
      'Production-ready deployment',
      'Monitoring and alerting setup',
      'Runbooks and documentation',
      'Security review and hardening',
      'Team handover and training',
    ],
  },
  {
    step: 4,
    title: 'Scale',
    duration: 'Ongoing',
    description: 'Post-launch, we optimise for cost and performance, add analytics so you can measure impact, and deliver a 90-day roadmap with recommended next steps.',
    deliverables: [
      'Performance optimisation',
      'Cost analysis and reduction',
      'Analytics dashboard',
      '90-day improvement roadmap',
      'Optional retainer support',
    ],
  },
];

export default function ProcessPage() {
  return (
    <main id="main">
      <AnimatedSection>
        <AnimatedText direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">How We Work</h1>
          <p className="opacity-80 text-lg max-w-2xl">
            Our proven 4-step process ensures your project delivers real value,
            from initial discovery to scalable deployment. No surprises, no scope creep.
          </p>
        </AnimatedText>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection>
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <AnimatedText key={step.step} direction={index % 2 === 0 ? 'left' : 'right'} delay={0.1 + index * 0.1}>
                <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* Content side */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow relative">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-10 grid place-items-center font-bold text-[#06121f] rounded-full bg-gradient-to-br from-brand to-[#3fa2ff] shadow-glow text-sm flex-shrink-0">
                          {step.step}
                        </span>
                        <div>
                          <h3 className="font-bold text-xl text-brand">{step.title}</h3>
                          <span className="text-xs opacity-50">{step.duration}</span>
                        </div>
                      </div>
                      <p className="opacity-80 leading-relaxed mb-4">{step.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-brand">Deliverables:</h4>
                        <ul className="space-y-1.5">
                          {step.deliverables.map((d, i) => (
                            <li key={i} className="text-sm opacity-70 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <AnimatedText direction="up" delay={0.3}>
          <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glow hover-lift glow-card">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="opacity-80 mb-6 max-w-xl mx-auto">
              Let&apos;s begin with a free discovery call to understand your goals and
              define the best path forward.
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10 hover-lift hover-glow inline-block"
            >
              Start with Discovery
            </Link>
          </div>
        </AnimatedText>
      </AnimatedSection>
    </main>
  );
}
