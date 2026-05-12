export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  href: string;
  num: string;
  tags: string[];
}

export const serviceCards: ServiceCard[] = [
  {
    num: '01',
    title: 'Marketplace Engineering',
    description:
      'Beyond default templates — custom rental engines, dynamic landing components, complex booking logic, mobile-first redesigns, and Console-level transaction process work.',
    icon: '🏪',
    href: '/services/automation',
    tags: ['Sharetribe Flex', 'Custom Components', 'Booking Logic'],
  },
  {
    num: '02',
    title: 'Payment Infrastructure',
    description:
      'Multi-party payouts, marketplace splits, rental deposits with card pre-authorisation and auto-capture, line-item shipping fees, and the transactional plumbing that ties it all together.',
    icon: '💳',
    href: '/services/automation',
    tags: ['Stripe Connect', 'Card Holds', 'Marketplace Splits'],
  },
  {
    num: '03',
    title: 'AI Agents & RAG',
    description:
      'Grounded AI agents that follow your methodology — n8n workflows, OpenAI Assistants, custom RAG over proprietary docs and datasets, with strict tool routing and source-of-truth controls.',
    icon: '🤖',
    href: '/services/ai-agents',
    tags: ['n8n', 'OpenAI', 'RAG', 'GPT'],
  },
  {
    num: '04',
    title: 'Web & Brand Presence',
    description:
      'SEO-optimised, fast, lead-capture-ready sites for SMBs that need a serious online presence without an agency retainer. Built on Next.js, deployed on Vercel.',
    icon: '🌐',
    href: '/services/automation',
    tags: ['Next.js 14', 'SEO', 'Tailwind'],
  },
];
