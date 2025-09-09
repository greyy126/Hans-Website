'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/data/products';
import { Droplets, FlaskConical, Scale, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductsPage() {

  return (
    <div className="bg-slate-50 pt-48 md:pt-52 pb-20">
      <div className="container">
        <div className="flex flex-col items-center gap-10 max-w-6xl mx-auto px-6">
          {/* Heading & Tagline */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
              Our Products
            </h1>
            <p className="text-lg text-slate-600 text-center max-w-2xl mb-4">
              Trusted by industries for consistent, spec-true supply.
            </p>
            <div className="h-[1px] w-20 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Features Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border text-sm font-medium hover:shadow-sm transition"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Droplets className="h-4 w-4 text-blue-500" />
              Pure
            </motion.div>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border text-sm font-medium hover:shadow-sm transition"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FlaskConical className="h-4 w-4 text-green-600" />
              Exact Composition
            </motion.div>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border text-sm font-medium hover:shadow-sm transition"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Scale className="h-4 w-4 text-violet-600" />
              Accurate pH
            </motion.div>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border text-sm font-medium hover:shadow-sm transition"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Leaf className="h-4 w-4 text-orange-600" />
              Non-toxic
            </motion.div>
          </div>


          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:translate-y-[-3px] transition-all duration-300 h-full flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm">
                      {Array.isArray(product.gradeOrUse) ? product.gradeOrUse.join(', ') : product.gradeOrUse}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
