export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    country: string;
}

export const testimonials: Testimonial[] = [
    {
        quote: "My partner and I can't believe how quickly you guys developed this web app. It's exactly what we needed to launch.",
        author: "Umesh",
        role: "Co-Founder",
        company: "Empire Exchange",
        country: "🇬🇧"
    },
    {
        quote: "They know what they are doing, tested everything, it looks great. Thank you.",
        author: "Samir",
        role: "Founder",
        company: "Sartorial London",
        country: "🇬🇧"
    },
    {
        quote: "AutoStrata automated our invoice processing workflow. What used to take 3 hours a day now takes 10 minutes.",
        author: "Rachel T.",
        role: "Operations Director",
        company: "Sterling Logistics",
        country: "🇬🇧"
    },
    {
        quote: "The AI chatbot they built has handled over 2,000 customer enquiries without a single escalation needed.",
        author: "James L.",
        role: "Head of Support",
        company: "Nexus Financial",
        country: "🇬🇧"
    },
    {
        quote: "Professional, responsive, and genuinely understood our business needs. The RAG system they built is a game-changer.",
        author: "Dr. Amira K.",
        role: "Research Lead",
        company: "BioTech Insights",
        country: "🇬🇧"
    },
    {
        quote: "We went from idea to production in under three weeks. Their process is incredibly efficient.",
        author: "Marcus D.",
        role: "CTO",
        company: "PropView",
        country: "🇬🇧"
    }
];
