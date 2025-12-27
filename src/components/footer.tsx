import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Quality', href: '/quality' },
  { name: 'Products', href: '/products' }
];

export function Footer() {
  return (
    <footer className="bg-white text-slate-600 py-12 px-6 border-t border-slate-200">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
{/* Column 1: Brand */}
<div className="space-y-3">
  <div className="flex flex-col sm:flex-row sm:items-end gap-3">
    <img
      src="/Hans_logo-update.png"
      alt="Hans Chemicals Pvt. Ltd"
      width={96}
      height={96}
      className="w-24 h-auto"
    />

    <div className="flex flex-col justify-end space-y-1">
      <span className="text-slate-900 font-semibold text-lg">
        Hans Chemicals Pvt. Ltd
      </span>

      <p className="text-slate-500 text-sm leading-snug">
        Reliable Chemical Supply Since 1987
      </p>

      <p className="text-black text-sm leading-snug">
        GST No. 27AABCH5433N1ZC
      </p>
    </div>
  </div>
</div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-slate-900 font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-slate-900 font-medium mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
                <Mail className="h-4 w-4" />
                <span>hanschemicalspl@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
                <Phone className="h-4 w-4" />
                <span>+91 9022115122 / +91 9322255128</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-slate-200 mt-10 pt-6">
          <p className="text-center text-slate-500">
            © 2025 Hans Chemicals Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
