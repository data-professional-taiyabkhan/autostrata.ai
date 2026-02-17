import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import StaggeredGrid from '@/components/StaggeredGrid';
import { testimonials } from '@/lib/testimonials';

export default function Testimonials() {
  return (
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
                <p className="text-xs opacity-60">{t.role}, {t.company}</p>
              </div>
              <span className="text-xl">{t.country}</span>
            </div>
          </div>
        ))}
      </StaggeredGrid>

      <AnimatedText direction="up" delay={0.3}>
        <div className="text-center mt-6">
          <p className="text-sm opacity-60">
            Timezone-flexible: UK &amp; international clients
          </p>
        </div>
      </AnimatedText>
    </AnimatedSection>
  );
}
