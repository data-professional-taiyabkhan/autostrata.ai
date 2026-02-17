import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import StaggeredGrid from '@/components/StaggeredGrid';
import MdxContent from '@/components/MdxContent';
import { getService, getServiceSlugs, getAllServices } from '@/lib/content';

interface Props { params: { slug: string } }

export function generateStaticParams() {
    return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const item = getService(params.slug);
    if (!item) return { title: 'Service Not Found' };
    return {
        title: `${item.meta.title} — AutoStrata AI Services`,
        description: item.meta.description,
        alternates: { canonical: `/services/${params.slug}` },
        openGraph: { title: item.meta.title, description: item.meta.description, type: 'website' }
    };
}

export default function ServiceDetailPage({ params }: Props) {
    const item = getService(params.slug);
    if (!item) notFound();

    const { meta, content } = item;
    const otherServices = getAllServices().filter((s) => s.meta.slug !== params.slug);

    return (
        <main id="main">
            <AnimatedSection>
                <AnimatedText direction="up" delay={0.1}>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl" role="img" aria-label={meta.title}>{meta.icon}</span>
                        <span className="text-xs bg-white/5 text-white/60 px-3 py-1 rounded-full">Service</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{meta.title}</h1>
                    <p className="opacity-80 text-lg max-w-3xl">{meta.description}</p>
                </AnimatedText>
            </AnimatedSection>

            {/* Benefits */}
            {meta.benefits && meta.benefits.length > 0 && (
                <AnimatedSection>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {meta.benefits.map((benefit, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow flex items-start gap-3">
                                <span className="text-brand mt-0.5 text-lg">✓</span>
                                <p className="opacity-90 font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            )}

            {/* MDX body */}
            <AnimatedSection>
                <div className="max-w-3xl">
                    <MdxContent source={content} />
                </div>
            </AnimatedSection>

            {/* Other services */}
            {otherServices.length > 0 && (
                <AnimatedSection>
                    <AnimatedText direction="up" delay={0.2}>
                        <h2 className="text-2xl font-bold mb-6">Other Services</h2>
                    </AnimatedText>
                    <StaggeredGrid className="grid sm:grid-cols-3 gap-4" staggerDelay={0.1}>
                        {otherServices.map((s) => (
                            <Link
                                key={s.meta.slug}
                                href={`/services/${s.meta.slug}`}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-glow hover-lift glow-card block"
                            >
                                <span className="text-2xl mb-2 block">{s.meta.icon}</span>
                                <h3 className="font-bold text-sm">{s.meta.title}</h3>
                                <p className="text-xs opacity-60 mt-1">{s.meta.description}</p>
                            </Link>
                        ))}
                    </StaggeredGrid>
                </AnimatedSection>
            )}

            {/* CTA */}
            <AnimatedSection>
                <AnimatedText direction="up" delay={0.3}>
                    <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glow hover-lift glow-card">
                        <h2 className="text-2xl font-bold mb-4">Ready to get started with {meta.title}?</h2>
                        <p className="opacity-80 mb-6">Book a free discovery call to discuss your requirements.</p>
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold hover-lift hover-glow inline-block"
                        >
                            Book a Call
                        </Link>
                    </div>
                </AnimatedText>
            </AnimatedSection>
        </main>
    );
}
