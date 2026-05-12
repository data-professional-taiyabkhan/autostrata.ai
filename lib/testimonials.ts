export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    country: string;
    initials: string;
}

export const testimonials: Testimonial[] = [
    {
        quote: "They know what they are doing, tested everything, it looks great. Thank you.",
        author: "Samir Jamil",
        role: "Founder",
        company: "Sartorial London",
        country: "🇬🇧",
        initials: "SJ"
    },
    {
        quote: "My partner and I can't believe how quickly you guys developed this web app.",
        author: "Umesh",
        role: "Co-founder",
        company: "Empire Exchange",
        country: "🇬🇧",
        initials: "U"
    },
    {
        quote: "AutoStrata built exactly what we needed — an AI assistant that strictly answers from our datasets, not the internet. The guardrails and accuracy are exceptional.",
        author: "Prof. Khurshid Ahmad",
        role: "Research Lead",
        company: "Heart‑Eco",
        country: "🇬🇧",
        initials: "KA"
    },
    {
        quote: "They understood our pain points immediately. The automation they built has freed up our admin team to focus on client work instead of spreadsheets.",
        author: "C&A Team",
        role: "Management",
        company: "C&A Solution",
        country: "🇬🇧",
        initials: "CA"
    }
];
