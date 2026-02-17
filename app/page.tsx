import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import StaggeredGrid from '@/components/StaggeredGrid';
import ParallaxSection from '@/components/ParallaxSection';
import BookingButton from '@/components/BookingButton';
import { serviceCards } from '@/lib/services-data';
import { testimonials } from '@/lib/testimonials';
import { faqs } from '@/lib/faq';
import { getAllWork } from '@/lib/content';
import { organizationJsonLd, localBusinessJsonLd } from '@/lib/seo';

export default function HomePage() {
  const featuredWork = getAllWork().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd(), localBusinessJsonLd()]),
        }}
      />
      <div id="main">
        {/* ── Hero ──────────────────────────────────────── */}
        <AnimatedSection>
          <div className="py-8 md:py-16 text-center max-w-4xl mx-auto">
            <AnimatedText direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                AI‑powered solutions,{' '}
                <span className="bg-gradient-to-r from-brand to-[#3fa2ff] bg-clip-text text-transparent">
                  built fast&nbsp;&amp;&nbsp;affordable
                </span>
              </h1>
            </AnimatedText>
            <AnimatedText direction="up" delay={0.2}>
              <p className="mt-5 text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
                We deliver <strong className="text-white">intelligent AI agents</strong>,{' '}
                <strong className="text-white">business automation</strong>, and{' '}
                <strong className="text-white">enterprise integration</strong> without offshore
                outsourcing — from startups to enterprise.
              </p>
            </AnimatedText>
            <AnimatedText direction="up" delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <BookingButton />
                <Link
                  href="/work"
                  className="px-8 py-3.5 rounded-lg border border-white/20 font-semibold text-lg hover:bg-white/5 transition-colors inline-block"
                >
                  View Our Work
                </Link>
              </div>
            </AnimatedText>
          </div>
        </AnimatedSection>

        {/* ── Trust Bar / Stats ────────────────────────── */}
        <AnimatedSection>
          <AnimatedText direction="up" delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-4">
              {[
                { value: '15+', label: 'Projects Delivered' },
                { value: '2–6 wk', label: 'Avg. Turnaround' },
                { value: '100%', label: 'UK-Based Team' },
                { value: '5★', label: 'Client Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-brand to-[#3fa2ff] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm opacity-60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedText>
        </AnimatedSection>

        {/* ── Services Grid ────────────────────────────── */}
        <AnimatedSection>
          <AnimatedText direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold mb-2">What We Do</h2>
            <p className="opacity-70 mb-8 max-w-xl">
              End‑to‑end AI and engineering services designed for real business impact.
            </p>
          </AnimatedText>
          <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {serviceCards.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card block group"
              >
                <span className="text-3xl mb-3 block">{svc.icon}</span>
                <h3 className="font-bold mb-2 text-lg group-hover:text-brand transition-colors">
                  {svc.title}
                </h3>
                <p className="opacity-80 text-sm">{svc.description}</p>
              </Link>
            ))}
          </StaggeredGrid>
          <AnimatedText direction="up" delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="text-brand font-medium hover:opacity-80 transition-opacity"
              >
                View all services →
              </Link>
            </div>
          </AnimatedText>
        </AnimatedSection>

        {/* ── Featured Work ────────────────────────────── */}
        <AnimatedSection>
          <AnimatedText direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold mb-2">Selected Work</h2>
            <p className="opacity-70 mb-8 max-w-xl">
              Real projects with measurable outcomes.
            </p>
          </AnimatedText>
          <StaggeredGrid className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {featuredWork.map((project) => (
              <Link
                key={project.meta.slug}
                href={`/work/${project.meta.slug}`}
                className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card block group"
              >
                <span className="text-xs bg-brand/20 text-brand px-2 py-1 rounded-full">
                  {project.meta.industry}
                </span>
                <h3 className="font-bold mt-3 mb-2 text-lg group-hover:text-brand transition-colors">
                  {project.meta.title}
                </h3>
                <p className="opacity-80 text-sm mb-4">{project.meta.description}</p>
                {project.meta.results && (
                  <ul className="space-y-1">
                    {project.meta.results.slice(0, 2).map((r, i) => (
                      <li key={i} className="text-xs text-brand flex items-start gap-1.5">
                        <span className="mt-0.5">✓</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            ))}
          </StaggeredGrid>
          <AnimatedText direction="up" delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/work"
                className="text-brand font-medium hover:opacity-80 transition-opacity"
              >
                View all projects →
              </Link>
            </div>
          </AnimatedText>
        </AnimatedSection>

        {/* ── Process Timeline ─────────────────────────── */}
        <AnimatedSection>
          <AnimatedText direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold mb-2">How We Work</h2>
            <p className="opacity-70 mb-8 max-w-xl">
              Four proven steps from idea to production.
            </p>
          </AnimatedText>
          <StaggeredGrid
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.15}
          >
            {[
              {
                step: 1,
                title: 'Discover',
                desc: 'Define success metrics, risks, and constraints.',
                deliverables: ['Scope document', 'Timeline & budget', 'Success criteria'],
              },
              {
                step: 2,
                title: 'Prototype',
                desc: 'Build a thin-slice demo and test with real users.',
                deliverables: ['Working prototype', 'User feedback', 'Refined scope'],
              },
              {
                step: 3,
                title: 'Launch',
                desc: 'Harden, monitor, and deploy to production.',
                deliverables: ['Production deploy', 'Monitoring setup', 'Runbooks'],
              },
              {
                step: 4,
                title: 'Scale',
                desc: 'Optimise costs, add analytics, plan next steps.',
                deliverables: ['Performance tuning', 'Analytics dashboard', '90-day roadmap'],
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow"
              >
                <span className="absolute -top-3 -left-3 w-8 h-8 grid place-items-center font-bold text-[#06121f] rounded-full bg-gradient-to-br from-brand to-[#3fa2ff] shadow-glow text-sm">
                  {s.step}
                </span>
                <h3 className="font-bold mb-2 text-lg text-brand">{s.title}</h3>
                <p className="opacity-80 text-sm mb-3">{s.desc}</p>
                <ul className="space-y-1">
                  {s.deliverables.map((d, i) => (
                    <li key={i} className="text-xs opacity-60 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-brand inline-block" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggeredGrid>
          <AnimatedText direction="up" delay={0.4}>
            <div className="mt-8 text-center">
              <Link
                href="/process"
                className="text-brand font-medium hover:opacity-80 transition-opacity"
              >
                Learn more about our process →
              </Link>
            </div>
          </AnimatedText>
        </AnimatedSection>

        {/* ── Testimonials ─────────────────────────────── */}
        <AnimatedSection>
          <AnimatedText direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          </AnimatedText>
          <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card"
              >
                <blockquote className="opacity-90 leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-brand text-sm">{t.author}</p>
                    <p className="text-xs opacity-60">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <span className="text-xl">{t.country}</span>
                </div>
              </div>
            ))}
          </StaggeredGrid>
        </AnimatedSection>

        {/* ── FAQ ──────────────────────────────────────── */}
        <AnimatedSection>
          <AnimatedText direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          </AnimatedText>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedText key={i} direction="up" delay={0.1 + i * 0.05}>
                <details className="group bg-white/5 border border-white/10 rounded-xl shadow-glow">
                  <summary className="cursor-pointer p-5 font-semibold flex items-center justify-between list-none">
                    <span>{faq.question}</span>
                    <svg
                      className="w-5 h-5 opacity-60 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 opacity-80 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </details>
              </AnimatedText>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Final CTA ────────────────────────────────── */}
        <AnimatedSection>
          <AnimatedText direction="up" delay={0.2}>
            <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-10 shadow-glow hover-lift glow-card">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build?</h2>
              <p className="opacity-80 mb-8 text-lg max-w-xl mx-auto">
                Tell us your goals — we&apos;ll propose the fastest path to value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingButton>Talk to AutoStrata</BookingButton>
                <Link
                  href="mailto:contact@autostrata.ai"
                  className="px-8 py-3.5 rounded-lg border border-white/20 font-semibold text-lg hover:bg-white/5 transition-colors inline-block"
                >
                  contact@autostrata.ai
                </Link>
              </div>
            </div>
          </AnimatedText>
        </AnimatedSection>
      </div>
    </>
  );
}
