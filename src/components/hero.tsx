'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Truck, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  // Wait for client mount to avoid any server/client markup mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      className="relative overflow-hidden min-h-[78vh] flex flex-col justify-center bg-cover bg-center bg-no-repeat pt-12 pb-12 sm:pt-24 sm:pb-14 md:py-20"
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
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-snug sm:leading-[1.1] mb-2 sm:mb-4 drop-shadow-2xl px-2">
              Reliable Chemical Supply
              <span className="block">Since 1987</span>
            </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-5 drop-shadow-xl font-medium px-2">
                We source the right grades, assure quality, and ship safely, on schedule
              </p>

              {/* Metrics Row */}
              <motion.div 
                className="grid grid-cols-3 items-center justify-items-center gap-2.5 sm:gap-4 mt-8 sm:mt-6 max-w-md sm:max-w-4xl mx-auto mb-4 sm:mb-6"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-xl px-3 sm:px-5 py-2.5 flex items-center gap-2 shadow-lg hover:-translate-y-1 hover:border-white/50 transition border border-white/30 w-full sm:w-auto sm:flex-1"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ShieldCheck className="h-5 w-5 text-white drop-shadow-md" />
                  <div>
                    <div className="text-[11px] sm:text-sm text-white/90 font-medium drop-shadow-md">Quality Assured</div>
                    <div className="text-sm sm:text-xl font-bold text-white drop-shadow-lg">98%</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-xl px-3 sm:px-5 py-2.5 flex items-center gap-2 shadow-lg hover:-translate-y-1 hover:border-white/50 transition border border-white/30 w-full sm:w-auto sm:flex-1"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Truck className="h-5 w-5 text-white drop-shadow-md" />
                  <div>
                    <div className="text-[11px] sm:text-sm text-white/90 font-medium drop-shadow-md">On-time Delivery</div>
                    <div className="text-sm sm:text-xl font-bold text-white drop-shadow-lg">99%</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white/20 backdrop-blur-md rounded-xl px-3 sm:px-5 py-2.5 flex items-center gap-2 shadow-lg hover:-translate-y-1 hover:border-white/50 transition border border-white/30 w-full sm:w-auto sm:flex-1"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Smile className="h-5 w-5 text-white drop-shadow-md" />
                  <div>
                    <div className="text-[11px] sm:text-sm text-white/90 font-medium drop-shadow-md">Client Satisfaction</div>
                    <div className="text-sm sm:text-xl font-bold text-white drop-shadow-lg">97%</div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-2 sm:mt-5 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[48%] min-w-[150px] max-w-[220px] sm:w-auto"
                >
                  <Button asChild className="bg-slate-900 text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold shadow-xl transition-all duration-300 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-2xl w-full sm:w-[200px]">
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[48%] min-w-[150px] max-w-[220px] sm:w-auto"
                >
                  <Button asChild className="bg-white text-slate-900 border-2 border-slate-800 px-5 sm:px-7 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold shadow-xl transition-all duration-300 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-900 hover:-translate-y-1 hover:shadow-2xl w-full sm:w-[200px]">
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
