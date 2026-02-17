export interface ServiceCard {
    title: string;
    description: string;
    icon: string;
    href: string;
}

export const serviceCards: ServiceCard[] = [
    {
        title: "Custom AI Agents",
        description: "Tailored agents for customer support, sales, research, and knowledge management.",
        icon: "🤖",
        href: "/services/ai-agents"
    },
    {
        title: "RAG Systems",
        description: "AI that connects to your data for accurate, source-cited answers.",
        icon: "🔍",
        href: "/services/rag"
    },
    {
        title: "Business Automation",
        description: "Eliminate repetitive tasks and connect your business tools together.",
        icon: "⚡",
        href: "/services/automation"
    },
    {
        title: "Document AI",
        description: "Extract, classify, and analyse data from PDFs, invoices, and forms.",
        icon: "📄",
        href: "/services/document-ai"
    },
    {
        title: "Conversational AI",
        description: "Smart chat assistants for websites, apps, and customer engagement.",
        icon: "💬",
        href: "/services/ai-agents"
    },
    {
        title: "Web & App Development",
        description: "Full-stack development for modern web and mobile applications.",
        icon: "🌐",
        href: "/contact"
    }
];
