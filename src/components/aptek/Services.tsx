'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Megaphone,
  Printer,
  PanelTop,
  Image,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: PanelTop,
    title: 'Hoarding Advertising',
    description:
      'Strategically placed billboards and hoardings on highways, city roads, and prime locations to maximize your brand visibility.',
    features: ['Highway Hoardings', 'City Billboards', 'Unipoles', 'LED Screens'],
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
    icon: Image,
    title: 'Banner Branding',
    description:
      'Eye-catching banner designs and installations for events, retail spaces, exhibitions, and promotional campaigns.',
    features: ['Event Banners', 'Retail Branding', 'Exhibition Displays', 'Roll-up Banners'],
  },
  {
    icon: TrendingUp,
    title: 'Promotional Advertising',
    description:
      'End-to-end promotional campaign execution including event branding, vehicle wraps, product launches, and experiential marketing.',
    features: ['Event Branding', 'Vehicle Wraps', 'Product Launches', 'Brand Activations'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorative green gradient blob */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00A651]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8BC34A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#00A651] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900"
          >
            Our <span className="text-gradient-brand">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive outdoor advertising solutions designed to make your brand
            the center of attention everywhere.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`service-card rounded-2xl p-6 md:p-8 bg-white group relative overflow-hidden group-hover:shadow-xl group-hover:shadow-[#00A651]/5 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDF4]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#F0FDF4] flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#00A651]/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-[#00A651]" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium text-[#008C45] bg-[#F0FDF4] rounded-full transition-colors duration-300 hover:bg-[#00A651]/10 hover:text-[#008C45]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow icon on hover */}
                <div className="mt-5 flex items-center text-[#00A651] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-sm font-semibold mr-1">Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
