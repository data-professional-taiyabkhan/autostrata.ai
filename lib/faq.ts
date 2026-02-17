export interface FaqItem {
    question: string;
    answer: string;
}

export const faqs: FaqItem[] = [
    {
        question: "How long does a typical project take?",
        answer: "Most projects take 2–6 weeks from discovery to launch, depending on complexity. Simple web applications and chatbots can be delivered in as little as 2 weeks. Complex AI systems with custom models and integrations typically take 4–8 weeks."
    },
    {
        question: "Do you work with startups or only larger companies?",
        answer: "We work with businesses of all sizes — from solo founders to established enterprises. Our AI-first approach means we can deliver enterprise-quality work at founder-friendly pricing. About 60% of our clients are SMBs and startups."
    },
    {
        question: "What's your pricing model?",
        answer: "We offer fixed-price project quotes based on agreed scope and deliverables. No hourly billing surprises. Every engagement starts with a free discovery call where we understand your needs and provide a transparent estimate."
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes. We offer optional maintenance and support packages that include monitoring, updates, bug fixes, and feature enhancements. Many clients choose a monthly retainer for ongoing AI system management and optimization."
    },
    {
        question: "Can you work with our existing tech stack?",
        answer: "Absolutely. We integrate with your existing tools and platforms — whether that's Salesforce, HubSpot, SAP, custom databases, or internal APIs. Our solutions are designed to fit into your ecosystem, not replace it."
    },
    {
        question: "How do you handle data privacy and security?",
        answer: "Security is built into every project from day one. We follow GDPR best practices, implement least-privilege access, encrypt sensitive data, and can deploy on-premise or in your own cloud environment if data residency is a concern."
    }
];
