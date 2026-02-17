import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import MdxContent from '@/components/MdxContent';
import { getWork, getWorkSlugs } from '@/lib/content';

interface Props { params: { slug: string } }

export function generateStaticParams() {
    return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const item = getWork(params.slug);
    if (!item) return { title: 'Project Not Found' };
    return {
        title: item.meta.title,
        description: item.meta.description,
        alternates: { canonical: `/work/${params.slug}` },
        openGraph: { title: item.meta.title, description: item.meta.description, type: 'article' }
    };
}

export default function WorkDetailPage({ params }: Props) {
    const item = getWork(params.slug);
    if (!item) notFound();

    const { meta, content } = item;

    return (
        <main id="main">
            <AnimatedSection>
                <AnimatedText direction="up" delay={0.1}>
                    <div className="mb-4 flex flex-wrap gap-2">
                        <span className="text-xs bg-brand/20 text-brand px-3 py-1 rounded-full">{meta.industry}</span>
                        <span className="text-xs bg-white/5 text-white/60 px-3 py-1 rounded-full">{meta.client}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{meta.title}</h1>
                    <p className="opacity-80 text-lg max-w-3xl">{meta.description}</p>
                </AnimatedText>
            </AnimatedSection>

            {/* Results highlights */}
            {meta.results && meta.results.length > 0 && (
                <AnimatedSection>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {meta.results.map((result, i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center shadow-glow"
                            >
                                <p className="text-sm font-medium text-brand">{result}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            )}

            {/* Services & Tech */}
            <AnimatedSection>
                <div className="flex flex-wrap gap-2 mb-8">
                    {meta.services.map((s) => (
                        <span key={s} className="text-xs border border-white/10 rounded-full px-3 py-1 opacity-80">
                            {s}
                        </span>
                    ))}
                </div>
            </AnimatedSection>

            {/* MDX body */}
            <AnimatedSection>
                <div className="max-w-3xl">
                    <MdxContent source={content} />
                </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection>
                <AnimatedText direction="up" delay={0.3}>
                    <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glow hover-lift glow-card">
                        <h2 className="text-2xl font-bold mb-4">Want similar results?</h2>
                        <p className="opacity-80 mb-6">Let&apos;s discuss your project and find the fastest path to value.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold hover-lift hover-glow inline-block"
                            >
                                Start a Project
                            </Link>
                            <Link
                                href="/work"
                                className="px-6 py-3 rounded-lg border border-white/20 font-semibold hover:bg-white/5 transition-colors inline-block"
                            >
                                ← View All Work
                            </Link>
                        </div>
                    </div>
                </AnimatedText>
            </AnimatedSection>
        </main>
    );
}
