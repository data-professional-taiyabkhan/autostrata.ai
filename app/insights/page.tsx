import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import StaggeredGrid from '@/components/StaggeredGrid';
import { getAllInsights, InsightMeta } from '@/lib/content';

export const metadata: Metadata = {
    title: 'Insights — AI, Automation & Engineering Blog',
    description: 'Articles on AI strategy, automation, RAG systems, and modern engineering practices from the AutoStrata team.',
    alternates: { canonical: '/insights' }
};

export default function InsightsPage() {
    const posts = getAllInsights();

    return (
        <main id="main">
            <AnimatedSection>
                <AnimatedText direction="up" delay={0.1}>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Insights</h1>
                    <p className="opacity-80 text-lg max-w-2xl">
                        Practical articles on AI, automation, and building technology that
                        delivers real business value.
                    </p>
                </AnimatedText>
            </AnimatedSection>

            <AnimatedSection>
                <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
                    {posts.map((post) => (
                        <InsightCard key={post.meta.slug} meta={post.meta} />
                    ))}
                </StaggeredGrid>
            </AnimatedSection>
        </main>
    );
}

function InsightCard({ meta }: { meta: InsightMeta }) {
    return (
        <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card card-shadow flex flex-col">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-brand/20 text-brand px-2 py-1 rounded-full">{meta.category}</span>
                <span className="text-xs opacity-60">{meta.readTime}</span>
            </div>
            <h3 className="font-bold mb-2 text-lg leading-snug">{meta.title}</h3>
            <p className="opacity-80 text-sm leading-relaxed mb-4 flex-1">{meta.description}</p>
            <div className="flex items-center justify-between mt-auto">
                <span className="text-xs opacity-60">{new Date(meta.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <Link
                    href={`/insights/${meta.slug}`}
                    className="text-sm text-brand hover:opacity-80 transition-opacity font-medium"
                >
                    Read more →
                </Link>
            </div>
        </article>
    );
}
