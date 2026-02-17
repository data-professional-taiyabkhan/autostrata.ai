import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import StaggeredGrid from '@/components/StaggeredGrid';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My partner and I can't believe how quickly you guys developed this web app.",
      author: "Umesh",
      company: "Empire Exchange",
      country: "🇬🇧"
    },
    {
      quote: "They know what they are doing, tested everything, it looks great. Thank you.",
      author: "Samir", 
      company: "Sartorial London",
      country: "🇬🇧"
    }
  ];

  return (
    <AnimatedSection>
      <AnimatedText direction="up" delay={0.1}>
        <h2 className="text-3xl font-bold mb-8 text-center">What our clients say</h2>
      </AnimatedText>
      
      <StaggeredGrid className="grid md:grid-cols-2 gap-8 mb-8" staggerDelay={0.2}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card">
            <blockquote className="text-lg opacity-90 mb-4 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-brand">{testimonial.author}</p>
                <p className="text-sm opacity-80">{testimonial.company}</p>
              </div>
              <span className="text-2xl">{testimonial.country}</span>
            </div>
          </div>
        ))}
      </StaggeredGrid>

      <AnimatedText direction="up" delay={0.3}>
        <div className="text-center">
          <p className="text-sm opacity-80">
            Timezone-flexible: UK & international clients
          </p>
        </div>
      </AnimatedText>
    </AnimatedSection>
  );
}
