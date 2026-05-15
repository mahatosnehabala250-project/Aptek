'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Megaphone,
  Printer,
  PanelTop,
  Image,
  ArrowRight,
  Store,
  Flag,
  Tv,
  Zap,
} from 'lucide-react';

const services = [
  {
    icon: PanelTop,
    title: 'Hoardings',
    description:
      'Strategically placed hoardings on highways, city roads, and prime locations to maximize your brand visibility across West Bengal.',
    features: ['Highway Hoardings', 'City Hoardings', 'Unipoles', 'Prime Locations'],
  },
  {
    icon: Megaphone,
    title: 'Outdoor Advertising',
    description:
      'Comprehensive outdoor advertising solutions including bus shelters, kiosks, pole signs, and wall displays across high-traffic areas.',
    features: ['Bus Shelters', 'Kiosks', 'Pole Signs', 'Wall Displays'],
  },
  {
    icon: Printer,
    title: 'Flex Printing',
    description:
      'High-quality large format flex and vinyl printing for banners, hoardings, building wraps, and all outdoor advertising materials.',
    features: ['Large Format Print', 'Vinyl Printing', 'Mesh Printing', 'Backlit Flex'],
  },
  {
    icon: Store,
    title: 'Shop Branding',
    description:
      'Complete shop front branding solutions including signage, fascia boards, and storefront displays to attract more customers.',
    features: ['Shop Signage', 'Fascia Boards', 'Storefront Display', 'Name Boards'],
  },
  {
    icon: Image,
    title: 'Banner Printing',
    description:
      'Eye-catching banner printing for events, retail spaces, exhibitions, and promotional campaigns with premium quality materials.',
    features: ['Event Banners', 'Retail Banners', 'Exhibition Banners', 'Roll-up Banners'],
  },
  {
    icon: Zap,
    title: 'Event Branding',
    description:
      'Complete event branding solutions from stage backdrops to entrance arches, making your events visually impactful and memorable.',
    features: ['Stage Backdrops', 'Entrance Arches', 'Event Banners', 'Stall Branding'],
  },
  {
    icon: Flag,
    title: 'Political Campaign Branding',
    description:
      'Professional political campaign branding including hoardings, banners, flex printing, and mass visibility solutions.',
    features: ['Campaign Hoardings', 'Rally Banners', 'Flex Printing', 'Mass Coverage'],
  },
  {
    icon: Tv,
    title: 'Billboard Installation',
    description:
      'Expert billboard installation services with structural fabrication, mounting, and maintenance for long-lasting outdoor presence.',
    features: ['Structural Fabrication', 'Safe Mounting', 'Maintenance', 'Custom Sizes'],
  },
  {
    icon: Zap,
    title: 'LED Sign Boards',
    description:
      'High-brightness LED sign boards and scrolling displays for maximum visibility day and night for your business.',
    features: ['LED Scrolling Boards', 'Glow Sign Boards', 'Neon Signs', '24/7 Visibility'],
  },
];

export default function Services({ showHeader = true }: { showHeader?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '80px' });

  return (
    <section id="services" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorative green gradient blob */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00A651]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8BC34A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {showHeader && (
        <div className="text-center mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#00A651] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            How We Help You Grow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 heading-gradient-wrap"
          >
            {'Our '}
            <span className="text-gradient-brand">{'Services'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Every service designed to solve one problem — making sure your customers
            notice you before they notice your competitors.
          </motion.p>
        </div>
        )}

        {/* Service Cards Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="service-card rounded-2xl p-6 md:p-8 bg-white group relative overflow-hidden shadow-sm group-hover:shadow-xl group-hover:shadow-[#00A651]/5 border border-gray-100/80 transition-all duration-300 group-hover:-translate-y-1"
            >
              {/* Border top accent — 3px green gradient */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00A651] to-[#8BC34A] rounded-t-2xl" />

              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDF4]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Decorative large number */}
              <span className="absolute top-2 right-4 md:top-3 md:right-6 text-[4.5rem] md:text-[6rem] font-black text-gray-100/50 leading-none select-none pointer-events-none z-0">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#F0FDF4] flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#00A651]/10 transition-all duration-300 group-hover:scale-110 group-hover:[animation:bounce-subtle_0.5s_ease_1]">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-[#00A651] transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description — slightly larger on desktop */}
                <p className="text-gray-600 text-sm md:text-[15px] lg:text-[17px] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium text-[#008C45] bg-[#F0FDF4] rounded-full transition-colors duration-300 hover:bg-[#00A651]/10 hover:text-[#008C45]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Explore Service link — always visible */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00A651] hover:text-[#008C45] transition-colors duration-200 group/link"
                >
                  <span>Explore Service</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bounce keyframe for icon hover */}
      <style jsx>{`
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: scale(1.1) translateY(0);
          }
          50% {
            transform: scale(1.1) translateY(-3px);
          }
        }
      `}</style>
    </section>
  );
}
