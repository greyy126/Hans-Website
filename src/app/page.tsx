'use client';

import Link from 'next/link';
import Image from 'next/image';
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
  Handshake,
  Paintbrush,
  Pill,
  Phone,
  Mail
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
  },
  {
    icon: Paintbrush,
    title: 'Paint',
    description: 'Specialized chemicals for paint and coating industries'
  },
  {
    icon: Pill,
    title: 'Pharmaceutical',
    description: 'High-purity chemicals for pharmaceutical applications'
  }
];

// Director Card Component
function DirectorCard({ 
  delay, 
  name, 
  title, 
  phone, 
  email, 
  photoPath, 
  initials 
}: { 
  delay: number; 
  name: string; 
  title: string; 
  phone: string; 
  email: string; 
  photoPath: string | null; 
  initials: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`relative bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-visible group ${photoPath && !imageError ? 'pt-20' : 'pt-8'} pb-8 px-8 border border-slate-200/50`}
    >
      {/* Minimal gradient border outline */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-slate-300/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      <div className="text-center relative z-10">
        {/* Director Portrait - Overlapping top edge */}
        {photoPath && !imageError && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white bg-white">
            <Image
              src={photoPath}
              alt={name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          </div>
        )}
        
        {/* Director Info */}
        <h3 className={`text-xl sm:text-2xl font-bold text-slate-900 mb-1 ${photoPath && !imageError ? 'mt-8' : ''}`}>{name}</h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-5 sm:mb-6">{title}</p>
        
        {/* Contact Info */}
        <div className="space-y-3 pt-2">
          {phone && (
            <div className="flex items-center justify-center gap-2 text-slate-700 text-sm">
              <Phone className="h-4 w-4 text-slate-500 flex-shrink-0" />
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-slate-900 transition-colors">
                {phone}
              </a>
            </div>
          )}
          {email && (
            <div className="flex items-center justify-center gap-2 text-slate-700 text-sm">
              <Mail className="h-4 w-4 text-slate-500 flex-shrink-0" />
              <a href={`mailto:${email}`} className="hover:text-slate-900 transition-colors break-all">
                {email}
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

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
      <section id="main-content" className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center h-full"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">
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
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">
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
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">
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
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">
                <Counter end={50} />
              </div>
              <p className="text-slate-700">Industries Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Directors Section */}
      <section className="py-10 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3">Our Directors</h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Meet the leadership guiding HANS CHEMICALS with integrity and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto">
            {/* Director 1 - Kaushik */}
            <DirectorCard
              delay={0.1}
              name="Kaushik Champaklal Shah"
              title="Director"
              phone="+91 9022115122"
              email="kaushikcshah@ymail.com"
              photoPath="/kaushik.jpg"
              initials="KS"
            />

            {/* Director 2 - Himanshu */}
            <DirectorCard
              delay={0.2}
              name="Himanshu Champaklal Shah"
              title="Director"
              phone="+91 9322255128"
              email="himanshucshah@yahoo.com"
              photoPath={null}
              initials="HS"
            />
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-10 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3">Our Workflow</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              From sourcing to delivery, quality is built into every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {workflowCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-white shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-10 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-3">Industries We Serve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              Specialized chemical solutions across diverse industrial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
