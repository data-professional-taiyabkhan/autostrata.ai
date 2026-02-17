export function organizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AutoStrata Ltd',
        url: 'https://autostrata.ai',
        logo: 'https://autostrata.ai/logo.svg',
        description:
            'AI-powered IT solutions: agentic AI, automation, data science, and full-stack development. UK-based team.',
        areaServed: 'GB',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Egham',
            addressCountry: 'GB',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'contact@autostrata.ai',
            },
        ],
        sameAs: [
            'https://www.linkedin.com/company/108903270/',
            'https://www.instagram.com/autostarta.ai',
            'https://github.com/data-professional-taiyabkhan',
        ],
    };
}

export function localBusinessJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AutoStrata Ltd',
        url: 'https://autostrata.ai',
        image: 'https://autostrata.ai/og-image.png',
        description:
            'AI-powered IT solutions: agentic AI, automation, RAG systems, and full-stack development without offshore outsourcing.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Egham',
            addressRegion: 'Surrey',
            addressCountry: 'GB',
        },
        priceRange: '££',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
    };
}
