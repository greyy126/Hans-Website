import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductBySlug, products, siteUrl } from '@/lib/products';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  const description = `${product.name} supplier from Hans Chemicals Pvt. Ltd. View applications, technical keywords, CAS details where available, and download the product TDS.`;
  const url = `${siteUrl}/products/${product.slug}`;

  return {
    title: `${product.name} | Hans Chemicals Pvt. Ltd`,
    description,
    keywords: product.keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${product.name} | Hans Chemicals Pvt. Ltd`,
      description,
      url,
      siteName: 'Hans Chemicals Pvt. Ltd',
      type: 'website'
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productUrl = `${siteUrl}/products/${product.slug}`;
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    category: product.category,
    description: `${product.name} supplied by Hans Chemicals Pvt. Ltd for ${product.applications.join(', ') || 'industrial applications'}.`,
    url: productUrl,
    brand: {
      '@type': 'Brand',
      name: 'Hans Chemicals Pvt. Ltd'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Hans Chemicals Pvt. Ltd',
      url: siteUrl
    },
    additionalProperty: product.keywords.split(',').map(keyword => ({
      '@type': 'PropertyValue',
      name: 'Product keyword',
      value: keyword.trim()
    }))
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <Link href="/products" className="inline-block text-sm font-medium text-blue-700 hover:text-blue-900 mb-8">
          Back to products
        </Link>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-semibold bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full shadow-md mb-5">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Hans Chemicals Pvt. Ltd supplies {product.name} for reliable industrial use with technical specifications available for review.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Applications</h2>
              {product.applications.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {product.applications.map(application => (
                    <span
                      key={application}
                      className="inline-block px-3 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-slate-600">Used in industrial chemical applications.</p>
              )}
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Search Terms and Details</h2>
              <p className="text-slate-600 leading-7">
                {product.keywords}
              </p>
            </section>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white">
              <a href={encodeURI(product.pdfPath)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Download TDS
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
