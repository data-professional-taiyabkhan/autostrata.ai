import { MetadataRoute } from 'next';
import { getWorkSlugs, getInsightSlugs, getServiceSlugs } from '@/lib/content';

const BASE_URL = 'https://autostrata.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '', '/about', '/services', '/process', '/products', '/contact', '/privacy',
    '/work', '/insights',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const workEntries: MetadataRoute.Sitemap = getWorkSlugs().map((slug) => ({
    url: `${BASE_URL}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const insightEntries: MetadataRoute.Sitemap = getInsightSlugs().map((slug) => ({
    url: `${BASE_URL}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const serviceEntries: MetadataRoute.Sitemap = getServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...workEntries, ...insightEntries, ...serviceEntries];
}
