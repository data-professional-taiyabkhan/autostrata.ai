import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

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
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
