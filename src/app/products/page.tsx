'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { products, categories } from '@/lib/products';
import { Search, Droplets, FlaskConical, Scale, Leaf, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content with proper top spacing for floating navbar */}
      <div className="pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Products
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-2">
              Trusted by industries for consistent, spec-true supply.
            </p>
            
            {/* Features Section */}
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium hover:shadow-sm transition"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Droplets className="h-4 w-4 text-blue-500" />
                Pure
              </motion.div>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium hover:shadow-sm transition"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FlaskConical className="h-4 w-4 text-green-600" />
                Exact Composition
              </motion.div>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium hover:shadow-sm transition"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Scale className="h-4 w-4 text-violet-600" />
                Accurate pH
              </motion.div>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium hover:shadow-sm transition"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Leaf className="h-4 w-4 text-orange-600" />
                Non-toxic
              </motion.div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-slate-200"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-white border-slate-200">
                <SelectValue placeholder="Select category" />
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

          {/* Results Count */}
          <p className="text-sm text-slate-600 mb-4 text-center">
            Showing {filteredProducts.length} of {products.length} products
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 col-span-full"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {product.name}
                      </h3>
                      <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-slate-600">Applications</h4>
                      <p className="text-sm text-slate-500">Coming soon...</p>
                    </div>
                    
                    <Button 
                      asChild 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 mb-4">No products found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
