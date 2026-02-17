import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import MdxContent from '@/components/MdxContent';
import { getInsight, getInsightSlugs } from '@/lib/content';

interface Props { params: { slug: string } }

export function generateStaticParams() {
    return getInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const item = getInsight(params.slug);
    if (!item) return { title: 'Post Not Found' };
    return {
        title: item.meta.title,
        description: item.meta.description,
        alternates: { canonical: `/insights/${params.slug}` },
        openGraph: { title: item.meta.title, description: item.meta.description, type: 'article' }
    };
}

export default function InsightDetailPage({ params }: Props) {
    const item = getInsight(params.slug);
    if (!item) notFound();

    const { meta, content } = item;

    return (
        <main id="main">
            <AnimatedSection>
                <AnimatedText direction="up" delay={0.1}>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="text-xs bg-brand/20 text-brand px-3 py-1 rounded-full">{meta.category}</span>
                        <span className="text-xs opacity-60">{meta.readTime}</span>
                        <span className="text-xs opacity-60">
                            {new Date(meta.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 max-w-3xl">{meta.title}</h1>
                    <p className="opacity-80 text-lg max-w-2xl">{meta.description}</p>
                    <p className="text-sm opacity-60 mt-3">By {meta.author}</p>
                </AnimatedText>
            </AnimatedSection>

            <AnimatedSection>
                <div className="max-w-3xl">
                    <MdxContent source={content} />
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <AnimatedText direction="up" delay={0.3}>
                    <div className="max-w-3xl border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/insights"
                            className="text-sm text-brand hover:opacity-80 transition-opacity font-medium"
                        >
                            ← All Insights
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm text-brand hover:opacity-80 transition-opacity font-medium"
                        >
                            Discuss this with us →
                        </Link>
                    </div>
                </AnimatedText>
            </AnimatedSection>
        </main>
    );
}
