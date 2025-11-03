'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Truck, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section 
      className="relative overflow-hidden min-h-[75vh] flex flex-col justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/homepage1.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi-transparent black overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      />
      
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 relative z-20">
        <div className="text-center">
          {/* Main Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4 drop-shadow-2xl">
              Reliable Chemical Supply Since 1987
            </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed whitespace-nowrap mb-6 drop-shadow-xl font-medium">
                We source the right grades, assure quality, and ship safely, on schedule
              </p>

              {/* Metrics Row */}
              <motion.div 
                className="flex justify-center gap-6 mt-6 max-w-4xl mx-auto mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg hover:-translate-y-1 hover:border-white/50 transition border border-white/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ShieldCheck className="h-6 w-6 text-white drop-shadow-md" />
                  <div>
                    <div className="text-sm text-white/90 font-medium drop-shadow-md">Quality Assured</div>
                    <div className="text-xl font-bold text-white drop-shadow-lg">98%</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg hover:-translate-y-1 hover:border-white/50 transition border border-white/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Truck className="h-6 w-6 text-white drop-shadow-md" />
                  <div>
                    <div className="text-sm text-white/90 font-medium drop-shadow-md">On-time Delivery</div>
                    <div className="text-xl font-bold text-white drop-shadow-lg">99%</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg hover:-translate-y-1 hover:border-white/50 transition border border-white/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Smile className="h-6 w-6 text-white drop-shadow-md" />
                  <div>
                    <div className="text-sm text-white/90 font-medium drop-shadow-md">Client Satisfaction</div>
                    <div className="text-xl font-bold text-white drop-shadow-lg">97%</div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex justify-center gap-4 mt-6 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="bg-slate-900 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-xl transition-all duration-300 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-2xl w-full sm:w-[200px]">
                    <Link href="/products" className="flex items-center justify-center gap-2">
                      View Products
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="bg-white text-slate-900 border-2 border-slate-800 px-8 py-3 rounded-xl text-lg font-semibold shadow-xl transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-900 hover:-translate-y-1 hover:shadow-2xl w-full sm:w-[200px]">
                    <Link href="/contact" className="flex items-center justify-center">Request a Quote</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  );
}
