import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import StaggeredGrid from '@/components/StaggeredGrid';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Products - Ready-made AI Solutions',
  description: 'Explore our ready-made AI products: Mummy Help, Virtual Receptionist, AI Diet Tracker, Visa Voyage, Housemate, and Time & Attendance systems.',
  alternates: {
    canonical: '/products'
  }
};

export default function ProductsPage() {
  const featuredProducts = products.filter(p => 
    p.slug === 'mummy-help' || p.slug === 'ai-diet-tracker'
  );
  const otherProducts = products.filter(p => 
    p.slug !== 'mummy-help' && p.slug !== 'ai-diet-tracker'
  );

  return (
    <main id="main">
      <AnimatedSection>
        <AnimatedText direction="up" delay={0.1}>
          <h1 className="text-4xl font-extrabold mb-4">Our Products</h1>
          <p className="opacity-80 text-lg max-w-2xl">
            Ready-made AI solutions you can license and deploy immediately. 
            Each product is production-ready with optional maintenance and support.
          </p>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.2}>
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        </AnimatedText>
        <StaggeredGrid className="grid md:grid-cols-2 gap-8 mb-16" staggerDelay={0.2}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} featured={true} />
          ))}
        </StaggeredGrid>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.3}>
          <h2 className="text-3xl font-bold mb-8">All Products</h2>
        </AnimatedText>
        <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {otherProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </StaggeredGrid>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.4}>
          <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glow hover-lift glow-card">
            <h2 className="text-3xl font-bold mb-4">Need something custom?</h2>
            <p className="opacity-80 mb-6">
              Don't see what you need? We also build custom AI solutions, 
              web applications, and automation systems tailored to your specific requirements.
            </p>
            <a 
              href="/contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10 hover-lift hover-glow"
            >
              Discuss your project
            </a>
          </div>
        </AnimatedText>
      </AnimatedSection>
    </main>
  );
}
