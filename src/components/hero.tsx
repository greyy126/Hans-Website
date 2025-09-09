'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Truck, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-[#0b132b] relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
      
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Reliable Chemical Supply Since 1987
            </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed whitespace-nowrap mb-10">
                We source the right grades, assure quality, and ship safely, on schedule
              </p>

              {/* Metrics Row */}
              <motion.div 
                className="flex justify-center gap-6 mt-8 max-w-4xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex items-center gap-3 shadow-md hover:-translate-y-1 hover:border-blue-400 transition border border-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-200">Quality Assured</div>
                    <div className="text-xl font-bold text-blue-400">98%</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex items-center gap-3 shadow-md hover:-translate-y-1 hover:border-blue-400 transition border border-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Truck className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-200">On-time Delivery</div>
                    <div className="text-xl font-bold text-blue-400">99%</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex items-center gap-3 shadow-md hover:-translate-y-1 hover:border-blue-400 transition border border-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Smile className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-200">Client Satisfaction</div>
                    <div className="text-xl font-bold text-blue-400">97%</div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex justify-center gap-4 mt-8 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto">
                    <Link href="/products" className="flex items-center gap-2">
                      View Products
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-xl text-lg font-semibold transition hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  );
}
