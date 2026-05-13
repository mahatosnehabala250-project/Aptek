'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Shield, Zap } from 'lucide-react';

const clients = [
  { name: 'Delhi Public School', abbr: 'DPS', description: 'India\'s Premier Educational Institution' },
  { name: 'Punjab National Bank', abbr: 'PNB', description: 'One of India\'s Largest Public Sector Banks' },
  { name: 'Shyam Steel', abbr: 'SS', description: 'Leading Steel Manufacturing Company' },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Over a decade of excellence in outdoor advertising with 500+ successfully completed projects.',
  },
  {
    icon: Users,
    title: 'Trusted by Brands',
    description: 'Partnered with premium national brands including DPS, PNB, and Shyam Steel.',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'We use only the highest quality materials and printing technology for lasting impact.',
  },
  {
    icon: Zap,
    title: 'Quick Turnaround',
    description: 'Fast execution with dedicated project management to meet your campaign deadlines.',
  },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="clients" className="relative py-20 md:py-28 bg-[#0B0B0F]">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#00A651] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Our Clients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white"
          >
            Brands That{' '}
            <span className="text-gradient-brand">Trust Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            We&apos;re proud to partner with India&apos;s most recognized brands,
            delivering advertising solutions that drive real results.
          </motion.p>
        </div>

        {/* Client Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-20">
          {clients.map((client, i) => (
            <motion.div
              key={client.abbr}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative rounded-2xl p-6 md:p-8 bg-[#141418] border border-white/5 hover:border-[#00A651]/20 transition-all duration-500 text-center overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00A651]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Logo placeholder */}
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 rounded-2xl bg-[#00A651]/10 flex items-center justify-center border border-[#00A651]/10 group-hover:border-[#00A651]/30 transition-colors duration-500">
                  <span className="text-2xl md:text-3xl font-black text-[#00A651] tracking-tight">
                    {client.abbr}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {client.name}
                </h3>
                <p className="text-gray-500 text-sm">{client.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="section-divider mb-16 md:mb-20" />

        <div className="text-center mb-10 md:mb-14">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          >
            Why Choose <span className="text-gradient-brand">APTEK MEDIA</span>?
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
              className="text-center p-5 md:p-6 rounded-xl bg-[#141418]/50"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#00A651]/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-[#00A651]" />
              </div>
              <h4 className="text-white font-bold text-base md:text-lg mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
