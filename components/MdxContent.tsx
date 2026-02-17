import { MDXRemote } from 'next-mdx-remote/rsc';

interface MdxContentProps {
    source: string;
}

const components = {
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-2xl font-bold mt-10 mb-4" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-xl font-semibold mt-8 mb-3" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="opacity-80 leading-relaxed mb-4" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="space-y-2 mb-6 list-disc list-inside opacity-80" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="space-y-2 mb-6 list-decimal list-inside opacity-80" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="leading-relaxed" {...props} />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="border-l-4 border-brand pl-4 my-6 italic opacity-80" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto mb-6" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a className="text-brand hover:opacity-80 transition-opacity underline" {...props} />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-semibold text-white" {...props} />
    ),
    hr: () => <hr className="border-white/10 my-8" />,
};

export default function MdxContent({ source }: MdxContentProps) {
    return (
        <div className="prose-custom max-w-none">
            <MDXRemote source={source} components={components} />
        </div>
    );
}
