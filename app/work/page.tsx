import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import StaggeredGrid from '@/components/StaggeredGrid';
import { getAllWork, WorkMeta } from '@/lib/content';

export const metadata: Metadata = {
    title: 'Our Work — Case Studies & Projects',
    description: 'Explore our portfolio of AI, automation, and web development projects delivered for UK businesses. Real results, real outcomes.',
    alternates: { canonical: '/work' }
};

export default function WorkPage() {
    const projects = getAllWork();

    return (
        <main id="main">
            <AnimatedSection>
                <AnimatedText direction="up" delay={0.1}>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Work</h1>
                    <p className="opacity-80 text-lg max-w-2xl">
                        Real projects, real outcomes. See how we&apos;ve helped businesses
                        build AI solutions, automate operations, and launch faster.
                    </p>
                </AnimatedText>
            </AnimatedSection>

            <AnimatedSection>
                <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
                    {projects.map((project) => (
                        <WorkCard key={project.meta.slug} meta={project.meta} />
                    ))}
                </StaggeredGrid>
            </AnimatedSection>

            <AnimatedSection>
                <AnimatedText direction="up" delay={0.3}>
                    <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glow hover-lift glow-card">
                        <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
                        <p className="opacity-80 mb-6">
                            Let&apos;s discuss how we can deliver similar results for your business.
                        </p>
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10 hover-lift hover-glow inline-block"
                        >
                            Start a Conversation
                        </Link>
                    </div>
                </AnimatedText>
            </AnimatedSection>
        </main>
    );
}

function WorkCard({ meta }: { meta: WorkMeta }) {
    return (
        <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card flex flex-col">
            <div className="mb-3">
                <span className="text-xs bg-brand/20 text-brand px-2 py-1 rounded-full">
                    {meta.industry}
                </span>
            </div>
            <h3 className="font-bold mb-2 text-lg">{meta.title}</h3>
            <p className="opacity-80 text-sm leading-relaxed mb-4 flex-1">{meta.description}</p>
            {meta.results && meta.results.length > 0 && (
                <ul className="space-y-1 mb-4">
                    {meta.results.slice(0, 2).map((result, i) => (
                        <li key={i} className="text-sm text-brand flex items-start gap-2">
                            <span className="mt-0.5">✓</span>
                            <span>{result}</span>
                        </li>
                    ))}
                </ul>
            )}
            <Link
                href={`/work/${meta.slug}`}
                className="text-sm text-brand hover:opacity-80 transition-opacity font-medium mt-auto"
            >
                Read case study →
            </Link>
        </article>
    );
}
