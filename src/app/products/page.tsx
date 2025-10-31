'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Filter, Droplets, FlaskConical, Scale, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Head from 'next/head';

// Product data structure
interface Product {
  id: string;
  name: string;
  fileName: string;
  pdfPath: string;
  category: string;
  keywords: string;
  applications: string[];
}

// Categories for filtering
const categories = [
  'All',
  'Zinc Compounds',
  'Copper Compounds', 
  'Ferrous Compounds',
  'Dispersing Agent and Wetting Agent',
  'Sodium Compounds',
  'Other Compounds'
];

// Function to categorize products based on filename
const categorizeProduct = (fileName: string): string => {
  const name = fileName.toLowerCase();
  
  if (name.includes('zinc') || name.includes('zno') || name.includes('zinc dust')) {
    return 'Zinc Compounds';
  } else if (name.includes('cupric') || name.includes('cuprous') || name.includes('copper')) {
    return 'Copper Compounds';
  } else if (name.includes('ferrous') || name.includes('magnesium')) {
    return 'Ferrous Compounds';
  } else if (name.includes('hansmol')) {
    return 'Dispersing Agent and Wetting Agent';
  } else if (name.includes('sodium')) {
    return 'Sodium Compounds';
  } else {
    return 'Other Compounds';
  }
};

// Function to convert filename to product name
const formatProductName = (fileName: string): string => {
  return fileName
    .replace('.pdf', '')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Generate product ID from filename
const generateProductId = (fileName: string): string => {
  return fileName
    .replace('.pdf', '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// Product data with SEO keywords
const products: { fileName: string; keywords: string }[] = [
  {
    fileName: 'Benzoic Acid - Tech.pdf',
    keywords: 'Benzoic Acid, Benzenecarboxylic Acid, Carboxybenzene, E210, Dracylic Acid, BZoH, CAS No.65-85-0, EC NO. 200-618-2, C7H6O2, C6H5COOH'
  },
  {
    fileName: 'Cupric Chloride Dihydrate Pure.pdf',
    keywords: 'Cupric Chloride - Dihydrate, Cupric Chloride, Copper ( II) Chloride, EC No. 600-176-4, CAS No. 10125-13-0, CuCl2, Cl2Cu.2H2O'
  },
  {
    fileName: 'Cupric Chloride Dihydrate Tech.pdf',
    keywords: 'Cupric Chloride - Dihydrate, Cupric Chloride, Copper ( II) Chloride, EC No. 600-176-4, CAS No. 10125-13-0, CuCl2, Cl2Cu.2H2O'
  },
  {
    fileName: 'Cupric Oxide - Black.pdf',
    keywords: 'Cupric Oxide - Black, Copper (II) Oxide, CAS No. 1317-38-0, CuO, Copper Oxide'
  },
  {
    fileName: 'Cuprous Oxide - Red.pdf',
    keywords: 'Cuprous Oxide - Red, Cuprous Oxide, CU2O, Copper ( I ) Oxide'
  },
  {
    fileName: 'Ferrous Sulphate - Heptahydrate.pdf',
    keywords: 'Feso4.7h2O, Ferrous Sulphate, Iron ( II ) Sulphate, Iron Vitriol, CAS No. 7782-63-0, Ferrous Sulfate'
  },
  {
    fileName: 'HANSMOL 10 POWDER.pdf',
    keywords: 'HANSMOL 10 Powder, Dispersing and wetting agents, Idet 10, Dodecyl benzene Sulphonic Acid Sodium Salts, CAS No. 42615-29-2, C18H29NaO3S'
  },
  {
    fileName: 'HANSMOL BX PASTE.pdf',
    keywords: 'HANSMOL BX PASTE, HANSMOL BX POWDER, BX POWDER, BX PASTE, Sodium Salts of DiButyl Naphthalene Sulphonate, Wetting Agents, CAS No. 25417-20-3'
  },
  {
    fileName: 'HANSMOL BX POWDER.pdf',
    keywords: 'HANSMOL BX PASTE, HANSMOL BX POWDER, BX POWDER, BX PASTE, Sodium Salts of DiButyl Naphthalene Sulphonate, Wetting Agents, CAS No. 25417-20-3'
  },
  {
    fileName: 'HANSMOL DN (SPL) Powder.pdf',
    keywords: 'HANSMOL DN POWDER, DN Powder, CAS No. 9041-04-7, Dispersing Agents for Agro and Pesticides'
  },
  {
    fileName: 'HANSMOL DN POWDER.pdf',
    keywords: 'HANSMOL DN POWDER, DN Powder, CAS No. 9041-04-7, Dispersing Agents for Agro and Pesticides'
  },
  {
    fileName: 'HANSMOL FBP1 Powder.pdf',
    keywords: 'HANSMOL FBP1 POWDER, FBP1 POWDER, Sodium salts of Naphthalene Formaldehyde Polycondensate, CAS No. 9084-06-4'
  },
  {
    fileName: 'HANSMOL FZ 1 LIQUID.pdf',
    keywords: 'HANSMOL FZ1, FZ1 Dispersing and Wetting agents, Dispersing and Wetting Agents, Dispersing Agents for Dyes, Phenol Formaldehyde Condensate'
  },
  {
    fileName: 'HANSMOL GL Powder.pdf',
    keywords: 'HANSMOL GL POWDER, HANSMOL SNF LIQUID, SNF POWDER, SNF LIQUID, Sodium naphthalene Formaldehyde Sulfonate, Naphthalene formaldehyde sulphonic acid Sodium salts, HANSMOL NKS, NKS POWDER, DISPERSING AGENTS FOR TEXTILE, AGRO AND PESTICIDES, CAS NO. 9084-06-4'
  },
  {
    fileName: 'HANSMOL GLS Powder.pdf',
    keywords: 'HANSMOL GL POWDER, HANSMOL SNF LIQUID, SNF POWDER, SNF LIQUID, Sodium naphthalene Formaldehyde Sulfonate, Naphthalene formaldehyde sulphonic acid Sodium salts, HANSMOL NKS, NKS POWDER, DISPERSING AGENTS FOR TEXTILE, AGRO AND PESTICIDES, CAS NO. 9084-06-4'
  },
  {
    fileName: 'HANSMOL NKS Powder.pdf',
    keywords: 'HANSMOL GL POWDER, HANSMOL SNF LIQUID, SNF POWDER, SNF LIQUID, Sodium naphthalene Formaldehyde Sulfonate, Naphthalene formaldehyde sulphonic acid Sodium salts, HANSMOL NKS, NKS POWDER, DISPERSING AGENTS FOR TEXTILE, AGRO AND PESTICIDES, CAS NO. 9084-06-4'
  },
  {
    fileName: 'Magnessium Sulphate TDS.pdf',
    keywords: 'Magnesium Sulphate, Magnesium Sulfate, Epsom Salt, CAS No. 7487-88-9, MgSO4'
  },
  {
    fileName: 'SODIUM ALLYL SULPHONATE.pdf',
    keywords: 'Sodium Allyl Sulphonate, HANSMOL -ALS, C3H5O3NaS, CAS No. 2495-39-8, 2 Propane-Sulphonic Acid, Sodium Salts of Allyl Sulphonic Acid, Sodium Salts, Sodium 1 -Propane-3-Sulphonate, Sodium 2 propane-1-Sulphonate, Sodium Allyl Sulphonate, ALS, SAS, ALS-Sodium Allyl Sulphonate, SAS, Sodium Allyl Sulfonate'
  },
  {
    fileName: 'Sodium Formaldehyde Bi sulphite.pdf',
    keywords: 'Sodium Formaldehyde Bi Sulphite, SFBS, Sodium Hydroxy Methane Sulphonate, NaCH3OSO3, CAS No. 870-72-4'
  },
  {
    fileName: 'Zinc Dust STD 7 Ever Zinc.pdf',
    keywords: 'Zinc Dust, Zinc Powder, ZN powder, CAS NO.7440-66-6'
  },
  {
    fileName: 'Zinc Dust Super Extra Ever Zinc.pdf',
    keywords: 'Zinc Dust, Zinc Powder, ZN powder, CAS NO.7440-66-6'
  },
  {
    fileName: 'Zinc Dust Super Fine Ever Zinc.pdf',
    keywords: 'Zinc Dust, Zinc Powder, ZN powder, CAS NO.7440-66-6'
  },
  {
    fileName: 'Zinc Oxide - Goldseal.pdf',
    keywords: 'Zinc oxide, ZnO, Zinc'
  },
  {
    fileName: 'Zinc Oxide - Whiteseal.pdf',
    keywords: 'Zinc oxide, ZnO, Zinc'
  },
  {
    fileName: 'Zinc Phospsphate.pdf',
    keywords: 'CAS No. 7779-90-0, Zinc Phosphate, Zinc Orthophosphate, Zn3( PO4)2'
  },
  {
    fileName: 'Zinc Stearate.pdf',
    keywords: 'Zinc Stearate, Zinc Soap CAS No. 557-05-1, Zn( C18H35O2)2'
  }
];

// Applications mapping keyed by formatted product name
const applicationsByName: Record<string, string[]> = {
  'Benzoic Acid - Tech': ['Preservatives in Perfume', 'Food', 'Resin', 'Paints', 'Plasticizers', 'Benzoic Derivatives'],
  'Cupric Chloride Dihydrate Pure': ['Textile mordant', 'Petroleum sweetener', 'Wood preservative', 'Water cleaner'],
  'Cupric Oxide - Black': ['Fertilizer', 'Copper Salts', 'Pigment', 'Wood Preservatives'],
  'Cuprous Oxide - Red': ['Paint', 'Semiconductor', 'Photocell', 'Pigment', 'Pharma'],
  'Ferrous Sulphate - Heptahydrate': ['Pharma', 'Fertilizers', 'Ferrous derivatives', 'Jewellery', 'Reagents'],
  'Hansmol 10 Powder': ['Electroplating', 'Textile'],
  'Hansmol Bx Paste': ['Textile', 'Dyes'],
  'Hansmol Bx Powder': ['Textile', 'Dyes'],
  'Hansmol Dn (Spl) Powder': ['Pesticides', 'Fertilizers'],
  'Hansmol Dn Powder': ['Pesticides', 'Fertilizers'],
  'Hansmol Fbp1 Powder': ['Pesticides', 'Fertilizers'],
  'Hansmol Fz 1 Liquid': ['Textile', 'Fertilizers'],
  'Hansmol Gl Powder': ['Dyes', 'Textile', 'Fertilizers', 'Pesticides', 'Pigments', 'Construction'],
  'Hansmol Gls Powder': ['Dyes', 'Textile', 'Fertilizers', 'Pesticides', 'Pigments', 'Construction'],
  'Hansmol Nks Powder': ['Dyes', 'Textile', 'Fertilizers', 'Pesticides', 'Pigments', 'Construction'],
  'Magnessium Sulphate Tds': ['Reagents', 'Fertilizers', 'Pharma'],
  'Sodium Allyl Sulphonate': ['Electroplating'],
  'Sodium Formaldehyde Bi Sulphite': ['Electroplating', 'Water treatment'],
  'Zinc Dust Std 7 Ever Zinc': ['Paint', 'Pharma', 'Mechanical Plating'],
  'Zinc Dust Super Extra Ever Zinc': ['Paint', 'Pharma', 'Mechanical Plating'],
  'Zinc Dust Super Fine Ever Zinc': ['Paint', 'Pharma', 'Mechanical Plating'],
  'Zinc Oxide - Goldseal': ['Paint', 'Pharma', 'Fertilizers', 'Rubber', 'Zinc Salts'],
  'Zinc Oxide - Whiteseal': ['Paint', 'Pharma', 'Fertilizers', 'Rubber', 'Zinc Salts'],
  'Zinc Phospsphate': ['Paint', 'Reagents']
};

const productsWithApplications: Product[] = products.map(product => {
  const name = formatProductName(product.fileName);
  return {
    id: generateProductId(product.fileName),
    name,
    fileName: product.fileName,
    pdfPath: `/products/${product.fileName}`,
    category: categorizeProduct(product.fileName),
    keywords: product.keywords,
    applications: applicationsByName[name] ?? []
  };
});

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    return productsWithApplications.filter(product => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = product.name.toLowerCase().includes(searchLower) || 
                           product.keywords.toLowerCase().includes(searchLower);
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Handle search input change
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  // Handle category filter change
  const handleCategoryChange = useCallback((value: string) => {
    setSelectedCategory(value);
  }, []);

  return (
    <>
      <Head>
        <title>Chemical Products - Benzoic Acid, Cupric Chloride, Zinc Compounds | Hans Chemicals Pvt. Ltd</title>
        <meta name="description" content="Comprehensive range of chemical products including Benzoic Acid, Cupric Chloride, Zinc Compounds, HANSMOL series, Ferrous Sulphate, and more. CAS numbers, EC numbers, and technical specifications available." />
        <meta name="keywords" content="Benzoic Acid, Benzenecarboxylic Acid, Carboxybenzene, E210, Cupric Chloride, Copper Chloride, Zinc Oxide, Zinc Dust, HANSMOL, Ferrous Sulphate, Chemical Trading, CAS Numbers, EC Numbers, Chemical Suppliers, India" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hanschemicals.com/products" />
      </Head>
      <div className="pt-28 md:pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Trusted by industries for consistent, spec-true supply.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { 
                icon: Droplets, 
                label: 'Pure', 
                color: 'blue',
                bgColor: 'bg-blue-50',
                iconColor: 'text-blue-600',
                hoverBg: 'hover:bg-blue-100'
              },
              { 
                icon: FlaskConical, 
                label: 'Exact Composition', 
                color: 'green',
                bgColor: 'bg-green-50',
                iconColor: 'text-green-600',
                hoverBg: 'hover:bg-green-100'
              },
              { 
                icon: Scale, 
                label: 'Accurate pH', 
                color: 'purple',
                bgColor: 'bg-purple-50',
                iconColor: 'text-purple-600',
                hoverBg: 'hover:bg-purple-100'
              },
              { 
                icon: Leaf, 
                label: 'Non-toxic', 
                color: 'orange',
                bgColor: 'bg-orange-50',
                iconColor: 'text-orange-600',
                hoverBg: 'hover:bg-orange-100'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 ${feature.bgColor} ${feature.hoverBg} px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700 transition-all duration-250 ease-in-out hover:scale-[1.05] hover:shadow-lg hover:shadow-${feature.color}-200/50`}
              >
                <div className={`w-6 h-6 rounded-full ${feature.bgColor} flex items-center justify-center`}>
                  <feature.icon className={`h-3.5 w-3.5 ${feature.iconColor}`} />
                </div>
                {feature.label}
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto items-center justify-center">
            {/* Search Bar */}
            <div className="flex-1 relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            {/* Category Filter */}
            <div className="sm:w-64 w-full max-w-md">
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-600 text-center">
            Showing {filteredProducts.length} of {productsWithApplications.length} products
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ 
                duration: 0.2, 
                delay: Math.min(index * 0.03, 0.3),
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-sky-50 rounded-xl border border-sky-200 p-8 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-150 flex flex-col h-full"
            >
              <div className="flex flex-col h-full">
                {/* Product Name - Fixed Height for Alignment */}
                <div className="mb-6 h-24 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">
                    {product.name}
                  </h3>
                  <span className="inline-block px-4 py-2 text-sm font-semibold bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full w-fit shadow-md">
                    {product.category}
                  </span>
                </div>
                
                {/* Applications Section - Fixed Height for Alignment */}
                <div className="mb-6 flex-grow min-h-[120px] flex flex-col">
                  <h4 className="text-sm font-semibold text-slate-600 mb-3">Applications</h4>
                  {product.applications.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((application, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100 shadow-sm"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500">—</p>
                  )}
                </div>
                
                {/* Download Button */}
                <div className="mt-auto">
                  <Button 
                    asChild 
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                  >
                    <a 
                      href={product.pdfPath} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download TDS
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">No products found</h3>
            <p className="text-slate-600">
              Try adjusting your search terms or filter criteria.
            </p>
          </div>
        )}
      </div>
      </div>
    </>
  );
}