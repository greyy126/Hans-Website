'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Quality', href: '/quality' },
  { name: 'Products', href: '/products' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="bg-white/70 backdrop-blur-md rounded-full shadow-lg border border-slate-200/50 px-4 sm:px-6 lg:px-6 py-2 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-2.5 flex-shrink-0">
            <Image
              src="/Hans_logo-update.png"
              alt="Hans Chemicals Pvt. Ltd"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-base sm:text-lg font-bold text-slate-900 whitespace-nowrap">HANS CHEMICALS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-1.5 rounded-full text-sm">
              <Link href="/contact" aria-label="Request a quote">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button - 44px minimum tap target */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 min-h-[44px] min-w-[44px] p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Slide down animation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200/50 px-4 sm:px-6 py-4 w-full">
            <div className="space-y-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] flex items-center ${
                      isActive
                        ? 'text-slate-900 bg-slate-100 font-semibold'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button asChild className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-full min-h-[44px]">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}