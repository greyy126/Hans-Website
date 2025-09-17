'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Hero } from '@/components/hero';
import { 
  Building2, 
  FlaskConical, 
  Truck, 
  Quote,
  Zap,
  Wheat,
  Palette,
  Droplets,
  Cog,
  Handshake
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const workflowCards = [
  {
    icon: Building2,
    title: 'Reliable vendor network',
    description: 'Our procurement team continuously surveys the market and partners with trusted manufacturers to secure reliable supply across multiple applications.'
  },
  {
    icon: FlaskConical,
    title: 'Quality assurance at source',
    description: 'Composition, pH, and purity are verified at the manufacturer\'s premises. We share representative samples on request and maintain comprehensive documentation.'
  },
  {
    icon: Truck,
    title: 'On-time logistics & safe packaging',
    description: 'Chemicals are labeled, segregated by category, stored at appropriate temperatures, and packaged in LDPE/HM/HDPE for safe transit with periodic inspections.'
  }
];

const industries = [
  {
    icon: Zap,
    title: 'Electroplating',
    description: 'High-purity chemicals for metal finishing'
  },
  {
    icon: Wheat,
    title: 'Agriculture & Feed',
    description: 'Safe additives for animal nutrition'
  },
  {
    icon: Palette,
    title: 'Ceramics & Glass',
    description: 'Specialized compounds for manufacturing'
  },
  {
    icon: Droplets,
    title: 'Water Treatment',
    description: 'Effective solutions for purification'
  },
  {
    icon: Cog,
    title: 'Industrial Processing',
    description: 'Chemicals for manufacturing processes'
  },
  {
    icon: Handshake,
    title: 'Chemical Trading',
    description: 'Bulk supply for trading companies'
  }
];

// Counter animation component
function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}+</span>;
}

export default function HomePage() {
  return (
    <div>
      {/* Skip to content link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#1D4ED8] text-white px-4 py-2 rounded focus:ring-2 focus:ring-blue-300">
        Skip to content
      </a>

      {/* Hero Section */}
      <Hero />

      {/* Metrics Section */}
      <section id="main-content" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center h-full"
            >
              <div className="text-5xl font-bold text-slate-900 mb-2">
                <Counter end={37} />
              </div>
              <p className="text-slate-700">Years of Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center h-full"
            >
              <div className="text-5xl font-bold text-slate-900 mb-2">
                <Counter end={500} />
              </div>
              <p className="text-slate-700">Products Supplied</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center h-full"
            >
              <div className="text-5xl font-bold text-slate-900 mb-2">
                <Counter end={1000} />
              </div>
              <p className="text-slate-700">Happy Customers</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center h-full"
            >
              <div className="text-5xl font-bold text-slate-900 mb-2">
                <Counter end={50} />
              </div>
              <p className="text-slate-700">Industries Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Directors Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-center mb-4">Our Directors</h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Director 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="text-center">
                {/* Director Portrait */}
                <div className="w-40 h-40 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <div className="w-36 h-36 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-slate-400">KS</span>
                  </div>
                </div>
                
                {/* Director Info */}
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Kaushik Champaklal Shah</h3>
                <p className="text-slate-600 mb-6">Director</p>
                
                {/* Contact Button */}
                <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-2 rounded-full text-sm">
                  <a href="mailto:kaushikcshah@gmail.com">Contact</a>
                </Button>
              </div>
            </motion.div>

            {/* Director 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="text-center">
                {/* Director Portrait */}
                <div className="w-40 h-40 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <div className="w-36 h-36 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-slate-400">HS</span>
                  </div>
                </div>
                
                {/* Director Info */}
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Himanshu Champaklal Shah</h3>
                <p className="text-slate-600 mb-6">Director</p>
                
                {/* Contact Button */}
                <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-2 rounded-full text-sm">
                  <a href="mailto:placeholder@hanschemicals.com">Contact</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-center mb-4">Our Workflow</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From sourcing to delivery, quality is built into every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-white shadow-md p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Specialized chemical solutions across diverse industrial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-white border border-slate-200 p-6 hover:border-slate-900 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                    <industry.icon className="h-6 w-6 text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{industry.title}</h3>
                    <p className="text-slate-600 text-sm">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}