import type { Metadata } from 'next';
import ProductsPageClient from './ProductsPageClient';
import { products, siteUrl } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Products | Hans Chemicals Pvt. Ltd',
  description: 'Comprehensive range of chemical products including Benzoic Acid, Cupric Chloride, Zinc Compounds, HANSMOL series, Ferrous Sulphate, and more. CAS numbers, EC numbers, and technical specifications available.',
  keywords: 'Benzoic Acid, Benzenecarboxylic Acid, Carboxybenzene, E210, Cupric Chloride, Copper Chloride, Zinc Oxide, Zinc Dust, HANSMOL, Ferrous Sulphate, Chemical Trading, CAS Numbers, EC Numbers, Chemical Suppliers, India',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/products`,
  },
};

export default function ProductsPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Chemical Products | Hans Chemicals Pvt. Ltd',
    url: `${siteUrl}/products`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/products/${product.slug}`,
        name: product.name
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <ProductsPageClient />
    </>
  );
}
