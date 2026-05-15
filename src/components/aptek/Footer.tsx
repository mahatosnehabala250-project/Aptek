'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Hoarding Advertising', href: '#services' },
    { label: 'Outdoor Advertising', href: '#services' },
    { label: 'Flex Printing', href: '#services' },
    { label: 'Banner Branding', href: '#services' },
    { label: 'Promotional Advertising', href: '#services' },
  ],
  company: [
    { label: 'About APTEK Media', href: '#clients' },
    { label: 'Our Portfolio', href: '#portfolio' },
    { label: 'Our Clients', href: '#clients' },
    { label: 'Contact Us', href: '#contact' },
  ],
};

export default function Footer() {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsScrolling(false), 600);
  };

  return (
    <footer className="relative bg-[#1A1A2E]">
      {/* Gradient line at the top */}
      <div className="h-1 bg-gradient-to-r from-[#00A651] via-[#00C462] to-[#8BC34A]" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2 mb-5" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00A651" />
                      <stop offset="100%" stopColor="#00C462" />
                    </linearGradient>
                  </defs>
                  <path d="M20 4L4 36h10l6-12 6 12h10L20 4z" fill="url(#logoGradFooter)" />
                  <path d="M20 14l4 8h-8l4-8z" fill="#8BC34A" opacity="0.6" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-white">APTEK</span>
                <span className="text-[9px] font-bold tracking-[0.25em] text-[#00A651] uppercase">MEDIA</span>
              </div>
            </a>
            <p className="text-[#00A651]/80 text-sm font-medium mb-2">
              A Complete AD Publicity
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium outdoor advertising &amp; branding solutions. Making your brand
              visible across India with hoardings, flex printing, and comprehensive
              branding services.
            </p>
            <a
              href="https://wa.me/919999999999?text=Hi%20APTEK%20MEDIA%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00A651] hover:bg-[#00C462] text-white font-semibold text-sm rounded-lg transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-[#00A651] transition-all duration-300 hover:pl-2 border-l-2 border-transparent hover:border-[#00A651] pl-0">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-[#00A651] transition-all duration-300 hover:pl-2 border-l-2 border-transparent hover:border-[#00A651] pl-0">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Main Road, City Center</p>
              <p>India</p>
              <a href="tel:+919999999999" className="block hover:text-[#00A651] transition-colors">+91 99999 99999</a>
              <a href="mailto:info@aptekmedia.in" className="block hover:text-[#00A651] transition-colors">info@aptekmedia.in</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} APTEK Media. All rights reserved. | A Complete AD Publicity
          </p>
          <motion.button
            onClick={scrollToTop}
            animate={{ y: isScrolling ? -4 : 0 }}
            transition={{ duration: 0.3, repeat: isScrolling ? Infinity : 0, repeatType: 'reverse' }}
            className="p-2.5 rounded-full bg-white/5 hover:bg-[#00A651]/20 text-gray-400 hover:text-[#00A651] transition-all duration-300 hover:shadow-lg hover:shadow-[#00A651]/10"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
