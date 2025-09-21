import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://autostrata.ai';
  const lastmod = new Date().toISOString();
  return [
    { url: `${base}/`, lastModified: lastmod, priority: 0.9 },
    { url: `${base}/about`, lastModified: lastmod, priority: 0.7 },
    { url: `${base}/services`, lastModified: lastmod, priority: 0.8 },
    { url: `${base}/process`, lastModified: lastmod, priority: 0.7 },
    { url: `${base}/contact`, lastModified: lastmod, priority: 0.8 },
  ];
}
