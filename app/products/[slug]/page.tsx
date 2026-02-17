import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import { getProductBySlug, products } from '@/lib/products';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - ${product.tagline}`,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`
    },
    openGraph: {
      title: `${product.name} - ${product.tagline}`,
      description: product.description,
      type: 'website',
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <main id="main">
      <AnimatedSection>
        <AnimatedText direction="up" delay={0.1}>
          <div className="mb-6">
            <span className="text-sm opacity-60 bg-white/5 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>
          <p className="opacity-80 text-lg max-w-3xl mb-8">{product.tagline}</p>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedText direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About {product.name}</h2>
                <p className="opacity-80 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-brand mt-1">✓</span>
                      <span className="opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText direction="right" delay={0.3}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glow hover-lift glow-card sticky top-24">
              <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
              <p className="opacity-80 mb-6">
                {product.name} is production-ready and can be deployed quickly. 
                Contact us to discuss licensing, customization, or maintenance options.
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="/contact"
                  className="block w-full px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold text-center hover:opacity-90 transition-opacity"
                >
                  {product.cta}
                </Link>
                
                <div className="text-center">
                  <Link 
                    href="/products"
                    className="text-sm text-brand hover:opacity-80 transition-opacity"
                  >
                    ← View all products
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-semibold mb-3">What you get:</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>• Complete source code and documentation</li>
                  <li>• Deployment assistance and setup</li>
                  <li>• Optional maintenance and support</li>
                  <li>• Customization and integration services</li>
                </ul>
              </div>
            </div>
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <AnimatedText direction="up" delay={0.4}>
          <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-glow hover-lift glow-card">
            <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
            <p className="opacity-80 mb-6">
              We also build bespoke AI applications, web platforms, and automation systems 
              tailored to your specific business needs.
            </p>
            <Link 
              href="/contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-br from-brand to-[#3fa2ff] text-[#06121f] font-semibold border border-white/10 hover-lift hover-glow"
            >
              Discuss your project
            </Link>
          </div>
        </AnimatedText>
      </AnimatedSection>
      </main>
    </>
  );
}
