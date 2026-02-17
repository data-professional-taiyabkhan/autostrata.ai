import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/* ── Shared types ─────────────────────────────────────── */

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  [key: string]: unknown;
}

export interface ContentItem<T extends ContentMeta = ContentMeta> {
  meta: T;
  content: string;          // raw MDX body (no frontmatter)
}

/* ── Work / Case Study ────────────────────────────────── */

export interface WorkMeta extends ContentMeta {
  client: string;
  industry: string;
  services: string[];
  results: string[];
  coverImage?: string;
  featured?: boolean;
}

/* ── Insights / Blog ──────────────────────────────────── */

export interface InsightMeta extends ContentMeta {
  author: string;
  category: string;
  readTime: string;
  coverImage?: string;
}

/* ── Services ─────────────────────────────────────────── */

export interface ServiceMeta extends ContentMeta {
  icon: string;
  benefits: string[];
  order: number;
}

/* ── Generic loader ───────────────────────────────────── */

const contentDir = path.join(process.cwd(), 'content');

function readMdxDir<T extends ContentMeta>(subDir: string): ContentItem<T>[] {
  const dir = path.join(contentDir, subDir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), 'utf-8');
      const { data, content } = matter(raw);
      return {
        meta: { ...data, slug: filename.replace(/\.mdx$/, '') } as T,
        content,
      };
    })
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

function getBySlug<T extends ContentMeta>(subDir: string, slug: string): ContentItem<T> | null {
  const filePath = path.join(contentDir, subDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { meta: { ...data, slug } as T, content };
}

/* ── Public API ───────────────────────────────────────── */

export const getAllWork      = () => readMdxDir<WorkMeta>('work');
export const getWork         = (slug: string) => getBySlug<WorkMeta>('work', slug);
export const getWorkSlugs    = () => getAllWork().map((w) => w.meta.slug);

export const getAllInsights   = () => readMdxDir<InsightMeta>('insights');
export const getInsight       = (slug: string) => getBySlug<InsightMeta>('insights', slug);
export const getInsightSlugs  = () => getAllInsights().map((i) => i.meta.slug);

export const getAllServices   = () => readMdxDir<ServiceMeta>('services').sort((a, b) => a.meta.order - b.meta.order);
export const getService       = (slug: string) => getBySlug<ServiceMeta>('services', slug);
export const getServiceSlugs  = () => getAllServices().map((s) => s.meta.slug);
