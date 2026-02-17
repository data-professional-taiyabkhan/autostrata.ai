import { MetadataRoute } from 'next';
import { products } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://autostrata.ai';
  const lastmod = new Date().toISOString();
  
  const staticPages = [
    { url: `${base}/`, lastModified: lastmod, priority: 0.9 },
    { url: `${base}/about`, lastModified: lastmod, priority: 0.7 },
    { url: `${base}/services`, lastModified: lastmod, priority: 0.8 },
    { url: `${base}/process`, lastModified: lastmod, priority: 0.7 },
    { url: `${base}/contact`, lastModified: lastmod, priority: 0.8 },
    { url: `${base}/products`, lastModified: lastmod, priority: 0.8 },
    { url: `${base}/privacy`, lastModified: lastmod, priority: 0.5 },
  ];

  const productPages = products.map(product => ({
    url: `${base}/products/${product.slug}`,
    lastModified: lastmod,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
