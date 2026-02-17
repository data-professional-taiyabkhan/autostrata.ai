import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';

export const metadata: Metadata = {
  title: 'Privacy Policy - AutoStrata',
  description: 'AutoStrata\'s privacy policy. We respect your privacy and handle your data responsibly.',
  alternates: {
    canonical: '/privacy'
  }
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <AnimatedSection>
        <AnimatedText direction="up" delay={0.1}>
          <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="opacity-80 text-lg max-w-3xl">
            We respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and protect your information.
          </p>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection>
        <div className="space-y-8">
          <AnimatedText direction="up" delay={0.2}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="opacity-80 leading-relaxed">
                We collect information you provide directly to us, such as when you contact us through our website, 
                including your name, email address, company name, and any messages you send us.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText direction="up" delay={0.3}>
            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="opacity-80 leading-relaxed">
                We use the information we collect to respond to your inquiries, provide our services, 
                and improve our website and services. We do not sell or share your personal information with third parties.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText direction="up" delay={0.4}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="opacity-80 leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText direction="up" delay={0.5}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="opacity-80 leading-relaxed">
                If you have any questions about this privacy policy, please contact us at{' '}
                <a href="mailto:contact@autostrata.ai" className="text-brand hover:opacity-80">
                  contact@autostrata.ai
                </a>
              </p>
            </div>
          </AnimatedText>
        </div>
      </AnimatedSection>
    </main>
  );
}
