'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Filter, Droplets, FlaskConical, Scale, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories, products } from '@/lib/products';

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');


export default function ProductsPageClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    const searchLower = searchTerm.trim().toLowerCase();

    const scored = products
      .map((product, index) => {
        const nameLower = product.name.toLowerCase();
        const keywordsLower = product.keywords.toLowerCase();

        const startsWith = searchLower && nameLower.startsWith(searchLower);
        const wordMatch =
          searchLower &&
          new RegExp(`\\b${escapeRegExp(searchLower)}`).test(nameLower);
        const containsName = searchLower && nameLower.includes(searchLower);
        const containsKeywords = searchLower && keywordsLower.includes(searchLower);

        const matchesSearch =
          !searchLower || containsName || containsKeywords;
        const matchesCategory =
          selectedCategory === 'All' || product.category === selectedCategory;

        if (!matchesSearch || !matchesCategory) {
          return null;
        }

        const score = startsWith
          ? 3
          : wordMatch
            ? 2
            : containsName
              ? 1
              : containsKeywords
                ? 0
                : -1;

        return { product, score, index };
      })
      .filter((item): item is { product: typeof products[number]; score: number; index: number } => item !== null)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.index - b.index; // stable ordering
      });

    return scored.map((entry) => entry.product);
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    setSelectedCategory(value);
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Trusted by industries for consistent,
            <span className="block sm:inline"> spec-true supply.</span>
          </p>
          
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

        <div className="mb-8">
          <div className="flex flex-row flex-wrap gap-3 sm:gap-4 max-w-4xl mx-auto items-center justify-center text-center">
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
            
            <div className="w-40 sm:w-64 max-w-md">
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

        <div className="mb-6">
          <p className="text-slate-600 text-center">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ 
                duration: 0.2, 
                delay: Math.min(index * 0.03, 0.3),
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-sky-50 rounded-xl border border-sky-200 p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-150 flex flex-col h-full"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 md:h-24 flex flex-col justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">
                    <a href={`/products/${product.slug}`} className="hover:text-blue-700 transition-colors">
                      {product.name}
                    </a>
                  </h3>
                  <span className="inline-block px-4 py-2 text-sm font-semibold bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-full w-fit shadow-md">
                    {product.category}
                  </span>
                </div>
                
                <div className="mb-6 flex-grow md:min-h-[120px] flex flex-col">
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
                
                <div className="mt-auto">
                  <Button 
                    asChild 
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                  >
                    <a 
                      href={encodeURI(product.pdfPath)} 
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
  );
}
