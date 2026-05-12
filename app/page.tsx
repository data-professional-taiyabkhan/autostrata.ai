import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import StaggeredGrid from '@/components/StaggeredGrid';
import BookingButton from '@/components/BookingButton';
import { serviceCards } from '@/lib/services-data';
import { testimonials } from '@/lib/testimonials';
import { faqs } from '@/lib/faq';
import { getAllWork } from '@/lib/content';
import { organizationJsonLd, localBusinessJsonLd } from '@/lib/seo';

export default function HomePage() {
  const allWork = getAllWork();
  const sartorial = allWork.find((w) => w.meta.slug === 'sartorial-london');
  const heartEco = allWork.find((w) => w.meta.slug === 'heart-eco');

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
          <div className="py-10 md:py-20 max-w-4xl">
            <AnimatedText direction="up" delay={0.05}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded-full text-xs opacity-70 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_var(--brand)] animate-pulse" />
                Accepting projects · UK &amp; international
              </span>
            </AnimatedText>
            <AnimatedText direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight mb-7">
                Marketplaces. Payments.{' '}
                <br className="hidden md:block" />
                AI&nbsp;agents —{' '}
                <span className="bg-gradient-to-r from-brand to-[#3fa2ff] bg-clip-text text-transparent italic">
                  shipped fast.
                </span>
              </h1>
            </AnimatedText>
            <AnimatedText direction="up" delay={0.2}>
              <p className="text-lg md:text-xl opacity-70 max-w-2xl leading-relaxed mb-10">
                AutoStrata is a UK studio for founders and SMBs. We build Sharetribe
                marketplaces, Stripe Connect platforms, and production AI agents —
                measured in weeks, not quarters.
              </p>
            </AnimatedText>
            <AnimatedText direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <BookingButton>
                  Start a project <span className="ml-1">→</span>
                </BookingButton>
                <Link
                  href="#work"
                  className="px-6 py-3 rounded-full border border-white/20 font-medium text-sm hover:bg-white/5 transition-colors inline-flex items-center"
                >
                  See the work
                </Link>
              </div>
            </AnimatedText>
          </div>
        </AnimatedSection>

        {/* ── Trust Strip ────────────────────────────────── */}
        <AnimatedSection>
          <AnimatedText direction="up" delay={0.1}>
            <div className="flex items-center gap-8 md:gap-12 flex-wrap py-6 border-t border-b border-white/10">
              <span className="text-xs uppercase tracking-widest opacity-40 font-mono">
                Built for
              </span>
              <div className="flex gap-8 md:gap-10 flex-wrap items-center">
                {['Sartorial London', 'Heart‑Eco', 'Empire Exchange', 'C&A Solution'].map(
                  (client) => (
                    <span
                      key={client}
                      className="text-lg md:text-xl opacity-50 italic font-serif"
                    >
                      {client}
                    </span>
                  )
                )}
              </div>
            </div>
          </AnimatedText>
        </AnimatedSection>

        {/* ── Services ───────────────────────────────────── */}
        <AnimatedSection>
          <AnimatedText direction="up" delay={0.1}>
            <div className="mb-12 max-w-2xl">
              <span className="text-xs uppercase tracking-widest opacity-40 font-mono block mb-4">
                // What we do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Four things we ship{' '}
                <span className="bg-gradient-to-r from-brand to-[#3fa2ff] bg-clip-text text-transparent italic">
                  very well.
                </span>
              </h2>
              <p className="opacity-70">
                We focus deliberately. The teams that win against generalist agencies
                are specialists with a portfolio that proves it.
              </p>
            </div>
          </AnimatedText>

          <StaggeredGrid
            className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden"
            staggerDelay={0.1}
          >
            {serviceCards.map((svc) => (
              <div
                key={svc.title}
                className="bg-[#070b18] p-8 md:p-10 hover:bg-[#0f131c] transition-colors"
              >
                <span className="text-xs font-mono opacity-40 block mb-5">
                  {svc.num} / {svc.title}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{svc.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed mb-5">
                  {svc.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 border border-white/15 rounded-full opacity-60 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggeredGrid>
        </AnimatedSection>

        {/* ── Case Studies ───────────────────────────────── */}
        <section id="work">
          <AnimatedSection>
            <AnimatedText direction="up" delay={0.1}>
              <div className="mb-12 max-w-2xl">
                <span className="text-xs uppercase tracking-widest opacity-40 font-mono block mb-4">
                  // Selected work
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Things we&rsquo;ve actually{' '}
                  <span className="bg-gradient-to-r from-brand to-[#3fa2ff] bg-clip-text text-transparent italic">
                    shipped.
                  </span>
                </h2>
                <p className="opacity-70">
                  Real projects with real clients. The detail below comes from the
                  actual delivery docs.
                </p>
              </div>
            </AnimatedText>

            {/* Sartorial London */}
            <AnimatedText direction="up" delay={0.15}>
              <div className="border border-white/10 rounded-2xl p-8 md:p-12 mb-6 bg-gradient-to-b from-white/[0.03] to-transparent">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <span className="text-xs uppercase tracking-widest opacity-40 font-mono block mb-3">
                      UK · Designer Rental Marketplace
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Sartorial&nbsp;London
                    </h3>
                    <p className="opacity-70 leading-relaxed mb-5">
                      A custom Sharetribe Flex marketplace for designer fashion rentals —
                      including a fixed 5-day rental engine, a mobile category grid, a
                      dynamic Featured Fits carousel, and groundwork for Stripe card holds
                      and sent / returned tracking.
                    </p>
                    <div className="flex gap-2 flex-wrap mb-6">
                      {['Sharetribe Flex', 'Stripe', 'Marketplace', 'React'].map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 border border-white/15 rounded-full opacity-60 font-mono">{t}</span>
                      ))}
                    </div>
                    <blockquote className="border-t border-white/10 pt-5 mt-5">
                      <p className="italic opacity-90 leading-relaxed">
                        &ldquo;They know what they are doing, tested everything, it looks great. Thank you.&rdquo;
                      </p>
                      <span className="text-xs opacity-40 mt-2 block">Samir · Sartorial London 🇬🇧</span>
                    </blockquote>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: 'Fixed 5-day rental engine', desc: 'Renter-side calendar locked to a 5-day window with auto-calculated end dates and full-window availability validation.' },
                      { title: 'Custom Featured Fits carousel', desc: 'Dynamic component pulling the 5–6 most recent listings via Sharetribe API, with CMS section-name override.' },
                      { title: 'Mobile category grid', desc: 'Replaced vertical slider with Gucci-inspired 2×2 grid using Tailwind responsive utilities.' },
                      { title: 'Shipping fees for rentals', desc: 'Extended pricing logic to add shipping line-items to rental transactions, not just sale items.' },
                      { title: 'Stripe deposit prep', desc: 'Console-level documentation and design for card pre-authorisation with auto-capture before the 7-day Stripe limit.' },
                    ].map((b) => (
                      <div key={b.title} className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{b.title}</p>
                          <p className="text-xs opacity-50 mt-0.5 leading-relaxed">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedText>

            {/* Heart-Eco */}
            <AnimatedText direction="up" delay={0.15}>
              <div className="border border-white/10 rounded-2xl p-8 md:p-12 mb-6 bg-gradient-to-b from-white/[0.03] to-transparent">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <span className="text-xs uppercase tracking-widest opacity-40 font-mono block mb-3">
                      UK · Economic AI Platform
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Heart‑Eco · HEART AI
                    </h3>
                    <p className="opacity-70 leading-relaxed mb-5">
                      A grounded agentic AI system that turns the HEART Score Economic Model
                      into an interactive analyst — answering descriptive, perspective,
                      diagnostic, and predictive questions about country-level performance
                      using proprietary data only, never the open web.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {['Agentic AI', 'RAG', 'n8n', 'GPT', 'Next.js 14', 'TypeScript'].map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 border border-white/15 rounded-full opacity-60 font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: 'Two-model architecture', desc: 'Model 1 on OpenAI Agent Builder for descriptive / perspective / diagnostic answers; Model 2 on n8n + GPT for predictive forecasts grounded in ensemble ML.' },
                      { title: 'Strict tool routing', desc: 'Numbers come from numeric master sheets only; methodology from doctrine docs; narrative from forecast commentary — preventing the model from improvising facts.' },
                      { title: 'Forecast transparency rules', desc: 'Years 2026–2030 are auto-labelled as forecasts with explicit fallback behaviour when narrative is missing.' },
                      { title: 'Dashboard deployment', desc: 'Next.js 14 + TypeScript + Tailwind + Recharts dashboard, deployed on Vercel as part of the HeartEco product.' },
                      { title: 'Domain-faithful boundary', desc: 'Restricted knowledge boundary in the system prompt — refuses unrelated queries and never uses web knowledge.' },
                    ].map((b) => (
                      <div key={b.title} className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{b.title}</p>
                          <p className="text-xs opacity-50 mt-0.5 leading-relaxed">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedText>

            {/* Mini cards: Empire Exchange + C&A */}
            <AnimatedText direction="up" delay={0.15}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-white/10 rounded-2xl p-7 bg-white/[0.02]">
                  <span className="text-xs uppercase tracking-widest opacity-40 font-mono block mb-2">
                    UK · Trading &amp; Exchange
                  </span>
                  <h4 className="text-xl font-bold mb-2">Empire Exchange</h4>
                  <p className="text-sm opacity-60 leading-relaxed mb-4">
                    SEO-optimised brand website with custom forms — built fast, focused on
                    conversion and clean information architecture.
                  </p>
                  <blockquote className="border-t border-white/10 pt-4">
                    <p className="italic opacity-80 text-sm">
                      &ldquo;My partner and I can&rsquo;t believe how quickly you guys developed this web app.&rdquo;
                    </p>
                    <span className="text-xs opacity-40 mt-1 block">Umesh · Empire Exchange 🇬🇧</span>
                  </blockquote>
                </div>
                <div className="border border-white/10 rounded-2xl p-7 bg-white/[0.02]">
                  <span className="text-xs uppercase tracking-widest opacity-40 font-mono block mb-2">
                    UK · Professional Services
                  </span>
                  <h4 className="text-xl font-bold mb-2">C&amp;A Solution</h4>
                  <p className="text-sm opacity-60 leading-relaxed mb-4">
                    SEO-led website with embedded enquiry forms, designed for service-based
                    lead capture and a strong first impression for new prospects.
                  </p>
                  <div className="flex gap-2 flex-wrap mt-3">
                    {['SEO', 'Forms', 'Lead Capture'].map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 border border-white/15 rounded-full opacity-60 font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedText>
          </AnimatedSection>
        </section>

        {/* ── Process ────────────────────────────────────── */}
        <AnimatedSection>
          <div className="bg-white/[0.02] border-t border-b border-white/10 -mx-[4%] px-[4%] py-16 md:py-24">
            <AnimatedText direction="up" delay={0.1}>
              <div className="mb-12 max-w-2xl">
                <span className="text-xs uppercase tracking-widest opacity-40 font-mono block mb-4">
                  // How we work
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Sprint scopes.{' '}
                  <span className="bg-gradient-to-r from-brand to-[#3fa2ff] bg-clip-text text-transparent italic">
                    Measurable outcomes.
                  </span>
                </h2>
                <p className="opacity-70">
                  No bloated proposals. We move from first call to shipped deliverable in weeks.
                </p>
              </div>
            </AnimatedText>

            <StaggeredGrid
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              staggerDelay={0.12}
            >
              {[
                {
                  num: 'i.',
                  title: 'Discovery call',
                  desc: '30-minute call to understand the outcome you need and the smallest viable path to get there.',
                },
                {
                  num: 'ii.',
                  title: 'Sprint scope',
                  desc: 'Fixed scope, fixed timeline, clear definition of done. No vague retainers.',
                },
                {
                  num: 'iii.',
                  title: 'Build & ship',
                  desc: 'Daily progress visible. We integrate with your stack — Sharetribe, Stripe, Vercel, Supabase, your CRM.',
                },
                {
                  num: 'iv.',
                  title: 'Iterate',
                  desc: 'Optional follow-on sprints once we\u2019ve hit the first measurable result.',
                },
              ].map((s) => (
                <div key={s.num}>
                  <span className="text-4xl md:text-5xl font-bold italic bg-gradient-to-r from-brand to-[#3fa2ff] bg-clip-text text-transparent block mb-4">
                    {s.num}
                  </span>
                  <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                  <p className="opacity-60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </AnimatedSection>

        {/* ── Testimonials ─────────────────────────────── */}
        <AnimatedSection>
          <AnimatedText direction="up" delay={0.1}>
            <div className="mb-12 max-w-2xl">
              <span className="text-xs uppercase tracking-widest opacity-40 font-mono block mb-4">
                // In their words
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                What clients{' '}
                <span className="bg-gradient-to-r from-brand to-[#3fa2ff] bg-clip-text text-transparent italic">
                  have said.
                </span>
              </h2>
            </div>
          </AnimatedText>
          <StaggeredGrid className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]"
              >
                <blockquote className="text-lg md:text-xl leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-[#3fa2ff] flex items-center justify-center text-[#06121f] font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.author}</p>
                    <p className="text-xs opacity-50">{t.company} · {t.role}</p>
                  </div>
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
            <div className="text-center py-16 md:py-24 border-t border-white/10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
                Tell us your goal — we&apos;ll propose the{' '}
                <span className="bg-gradient-to-r from-brand to-[#3fa2ff] bg-clip-text text-transparent italic">
                  fastest path.
                </span>
              </h2>
              <p className="opacity-70 text-lg mb-10 max-w-xl mx-auto">
                Marketplace, payment platform, AI agent, or a website that actually
                converts. One short form, response within one working day.
              </p>
              <BookingButton>
                Talk to AutoStrata <span className="ml-1">→</span>
              </BookingButton>
              <p className="mt-8 text-xs opacity-40 uppercase tracking-wider font-mono">
                📍 Egham · UK &nbsp;·&nbsp; 🌍 Timezone-flexible &nbsp;·&nbsp; ✉️ contact@autostrata.ai
              </p>
            </div>
          </AnimatedText>
        </AnimatedSection>
      </div>
    </>
  );
}
