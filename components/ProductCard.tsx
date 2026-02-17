import Link from 'next/link';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <article className={`bg-white/5 border border-white/10 rounded-xl p-6 shadow-glow hover-lift glow-card ${
      featured ? 'ring-2 ring-brand/30' : ''
    }`}>
      {featured && (
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-brand to-[#3fa2ff] text-[#06121f] mb-4">
          Ready-made
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="font-bold mb-2 text-lg text-brand">{product.name}</h3>
        <p className="text-sm opacity-80 leading-relaxed">{product.tagline}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3 opacity-90">Key Features:</h4>
        <ul className="space-y-2">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm opacity-80 flex items-start gap-2">
              <span className="text-brand mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs opacity-60 bg-white/5 px-2 py-1 rounded">
          {product.category}
        </span>
        <Link 
          href={`/products/${product.slug}`}
          className="text-sm text-brand hover:opacity-80 transition-opacity font-medium"
        >
          Learn more →
        </Link>
      </div>
    </article>
  );
}
