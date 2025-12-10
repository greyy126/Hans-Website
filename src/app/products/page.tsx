import type { Metadata } from 'next';
import ProductsPageClient from './ProductsPageClient';

export const metadata: Metadata = {
  title: 'Chemical Products - Benzoic Acid, Cupric Chloride, Zinc Compounds | Hans Chemicals Pvt. Ltd',
  description: 'Comprehensive range of chemical products including Benzoic Acid, Cupric Chloride, Zinc Compounds, HANSMOL series, Ferrous Sulphate, and more. CAS numbers, EC numbers, and technical specifications available.',
  keywords: 'Benzoic Acid, Benzenecarboxylic Acid, Carboxybenzene, E210, Cupric Chloride, Copper Chloride, Zinc Oxide, Zinc Dust, HANSMOL, Ferrous Sulphate, Chemical Trading, CAS Numbers, EC Numbers, Chemical Suppliers, India',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://hanschemicals.com/products',
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
